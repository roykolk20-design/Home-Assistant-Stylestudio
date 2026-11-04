"""Per person: a theme and a sidebar order the admin picks for each user.

A beheerder can't change another user's profile from the server, so every
browser runs www/person.js. When a page opens it asks once for its own user's
settings and applies them the way Home Assistant does itself: the theme with
the frontend's "settheme" event, the sidebar with frontend/set_user_data. It
never listens live, so nothing changes on a screen someone is using. Each
setting is applied once per device after it changes, so people can still pick
something else in their profile afterwards. The script also reports back which
theme, sidebar and version each device uses, at most every few hours.
"""

from datetime import datetime, timezone
from typing import Any

import voluptuous as vol

from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant, callback

from .const import DOMAIN, VERSION
from .store import StyleStore
from .themes import loaded_themes

PEOPLE = "people"
REPORT_LIMIT = 50

SIDEBAR_SCHEMA = vol.Schema(
    {
        vol.Optional("panelOrder", default=list): [str],
        vol.Optional("hiddenPanels", default=list): [str],
    },
    extra=vol.REMOVE_EXTRA,
)
PERSON_SCHEMA = vol.Schema(
    {
        vol.Required("theme"): vol.Any(None, vol.All(str, vol.Length(min=1, max=100))),
        vol.Required("sidebar"): vol.Any(None, SIDEBAR_SCHEMA),
    }
)


def _now() -> str:
    return datetime.now(timezone.utc).isoformat()


def _store(hass: HomeAssistant) -> StyleStore:
    return hass.data[DOMAIN]["store"]


@callback
def async_register(hass: HomeAssistant) -> None:
    for command in (
        ws_people_get,
        ws_people_save,
        ws_people_undo,
        ws_person_get,
        ws_person_report,
    ):
        websocket_api.async_register_command(hass, command)


async def _users(hass: HomeAssistant) -> list[dict[str, Any]]:
    users = [
        {"id": user.id, "name": user.name or user.id, "is_admin": user.is_admin}
        for user in await hass.auth.async_get_users()
        if user.is_active and not user.system_generated
    ]
    return sorted(users, key=lambda user: user["name"].lower())


async def people_state(hass: HomeAssistant) -> dict[str, Any]:
    store = _store(hass)
    return {
        "users": await _users(hass),
        "persons": store.persons,
        "reports": sorted(store.reports.values(), key=lambda r: r["at"], reverse=True),
        "themes": sorted(loaded_themes(hass)),
        # Our own themes that aren't in the list above, so the panel can say why.
        "not_loaded": sorted(
            theme["name"] for theme in store.themes if theme["name"] not in loaded_themes(hass)
        ),
        "history": store.history_size(PEOPLE),
        "version": VERSION,
    }


@websocket_api.require_admin
@websocket_api.websocket_command({vol.Required("type"): f"{DOMAIN}/people/get"})
@websocket_api.async_response
async def ws_people_get(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict
) -> None:
    connection.send_result(msg["id"], await people_state(hass))


@websocket_api.require_admin
@websocket_api.websocket_command(
    {vol.Required("type"): f"{DOMAIN}/people/save", vol.Required("persons"): dict}
)
@websocket_api.async_response
async def ws_people_save(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict
) -> None:
    """Store theme and sidebar per user; only changed values get a new time."""
    known = {user["id"] for user in await _users(hass)}
    themes = loaded_themes(hass)
    try:
        wanted = {user_id: PERSON_SCHEMA(value) for user_id, value in msg["persons"].items()}
    except vol.Invalid as err:
        connection.send_error(msg["id"], "invalid_format", str(err))
        return
    for user_id, value in wanted.items():
        if user_id not in known:
            connection.send_error(msg["id"], "unknown_user", f"Unknown user: {user_id}")
            return
        if value["theme"] is not None and value["theme"] not in themes:
            connection.send_error(msg["id"], "unknown_theme", f"Theme not loaded: {value['theme']}")
            return

    store = _store(hass)
    previous = store.persons
    persons: dict[str, dict[str, Any]] = {}
    now = _now()
    for user_id, value in wanted.items():
        old = previous.get(user_id, {})
        person: dict[str, Any] = {}
        for key in ("theme", "sidebar"):
            if value[key] is None:
                continue
            person[key] = value[key]
            same = old.get(key) == value[key]
            person[f"{key}_updated"] = old.get(f"{key}_updated") if same else now
        if person:
            persons[user_id] = person

    if persons != previous:
        await store.async_push_history(PEOPLE, previous)
        await store.async_set_persons(persons)
    connection.send_result(msg["id"], await people_state(hass))


@websocket_api.require_admin
@websocket_api.websocket_command({vol.Required("type"): f"{DOMAIN}/people/undo"})
@websocket_api.async_response
async def ws_people_undo(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict
) -> None:
    """Put back the settings from before the last save; their times too."""
    store = _store(hass)
    previous = await store.async_pop_history(PEOPLE)
    if previous is not None:
        await store.async_set_persons(previous)
    connection.send_result(msg["id"], {"restored": previous is not None, **await people_state(hass)})


@websocket_api.websocket_command({vol.Required("type"): f"{DOMAIN}/person/get"})
@callback
def ws_person_get(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict
) -> None:
    """For any user: the theme and sidebar picked for them, once."""
    store = hass.data.get(DOMAIN, {}).get("store")
    user_id = connection.user.id if connection.user else None
    person = (store.persons.get(user_id) if store and user_id else None) or {}
    connection.send_result(msg["id"], {"version": VERSION, **person})


@websocket_api.websocket_command(
    {
        vol.Required("type"): f"{DOMAIN}/person/report",
        vol.Required("device"): vol.All(str, vol.Match(r"^[0-9a-z]{6,32}$")),
        vol.Required("version"): vol.All(str, vol.Length(max=20)),
        vol.Required("app"): bool,
        vol.Optional("theme"): vol.Any(None, vol.All(str, vol.Length(max=100))),
        vol.Optional("sidebar"): vol.Any(None, SIDEBAR_SCHEMA),
    }
)
@callback
def ws_person_report(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict
) -> None:
    """For any user: what this browser uses now."""
    store = hass.data.get(DOMAIN, {}).get("store")
    if store is None or connection.user is None:
        connection.send_error(msg["id"], "not_loaded", "Style Studio is not loaded")
        return
    store.report(
        msg["device"],
        {
            "device": msg["device"],
            "user_id": connection.user.id,
            "at": _now(),
            "version": msg["version"],
            "app": msg["app"],
            "theme": msg.get("theme"),
            "sidebar": msg.get("sidebar"),
        },
        REPORT_LIMIT,
    )
    connection.send_result(msg["id"])
