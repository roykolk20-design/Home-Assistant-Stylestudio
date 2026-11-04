"""Check and restore: known conflicts, and every kept version to go back to."""

from typing import Any

from awesomeversion import AwesomeVersion
import voluptuous as vol

from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant, callback
from homeassistant.loader import IntegrationNotFound, async_get_integration

from .const import DOMAIN, VERSION
from .glass import GLASS_DOMAIN, glass_entry
from .people import PEOPLE
from .store import StyleStore
from .themes import (
    ForeignFileError,
    ReloadError,
    async_write_themes,
    default_theme,
    loaded_themes,
    theme_layout,
)

THEMES = "themes"
KEYS = (THEMES, GLASS_DOMAIN, PEOPLE)
# card-mod keys in a theme that style the sidebar or the whole app; they
# fight with Glass Sidebar over the same elements.
SIDEBAR_CARD_MOD = ("card-mod-sidebar", "card-mod-root", "card-mod-root-yaml")


def _store(hass: HomeAssistant) -> StyleStore:
    return hass.data[DOMAIN]["store"]


@callback
def async_register(hass: HomeAssistant) -> None:
    for command in (ws_check, ws_history_list, ws_history_restore):
        websocket_api.async_register_command(hass, command)


def _card_mod_keys(theme: Any) -> list[str]:
    if not isinstance(theme, dict):
        return []
    keys = [key for key in theme if str(key).startswith("card-mod")]
    for mode in (theme.get("modes") or {}).values():
        if isinstance(mode, dict):
            keys += [key for key in mode if str(key).startswith("card-mod")]
    return sorted(set(keys))


@websocket_api.require_admin
@websocket_api.websocket_command({vol.Required("type"): f"{DOMAIN}/check"})
@websocket_api.async_response
async def ws_check(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict
) -> None:
    store = _store(hass)
    loaded = loaded_themes(hass)
    try:
        glass_version = (await async_get_integration(hass, GLASS_DOMAIN)).version
    except IntegrationNotFound:
        glass_version = None
    # Glass Sidebar 1.4 switches off a theme's own sidebar styling.
    glass_handles_themes = glass_version is not None and glass_version >= AwesomeVersion("1.4.0")

    # Only themes someone uses matter: the default, what devices report, and
    # what Per persoon sets. Installed but unused themes do nothing.
    in_use = {default_theme(hass)} | {r.get("theme") for r in store.reports.values()}
    in_use |= {person.get("theme") for person in store.persons.values()}
    in_use.discard(None)

    users = {user.id: user.name for user in await hass.auth.async_get_users()}
    layout = await hass.async_add_executor_job(theme_layout, hass)
    connection.send_result(
        msg["id"],
        {
            "version": VERSION,
            "glass_sidebar": glass_version is not None and glass_entry(hass) is not None,
            "glass_handles_themes": glass_handles_themes,
            "card_mod_themes": [
                {
                    "theme": name,
                    "keys": keys,
                    "sidebar": any(key in SIDEBAR_CARD_MOD for key in keys),
                    "in_use": name in in_use,
                }
                for name, theme in sorted(loaded.items())
                if (keys := _card_mod_keys(theme))
            ],
            # When this version started; devices not seen since haven't had
            # a chance to load it yet.
            "version_since": store.version_since,
            "themes_layout": layout.mode if layout.found else None,
            "themes_not_loaded": [
                theme["name"] for theme in store.themes if theme["name"] not in loaded
            ],
            "devices": [
                {**report, "user": users.get(report["user_id"], report["user_id"])}
                for report in sorted(store.reports.values(), key=lambda r: r["at"], reverse=True)
            ],
        },
    )


def _summary(key: str, value: Any) -> str:
    if value is None:
        return "-"
    if key == THEMES:
        return ", ".join(theme["name"] for theme in value) or "-"
    if key == GLASS_DOMAIN:
        return ", ".join(f"{k}: {value[k]}" for k in ("floating", "radius", "blur") if k in value) or "-"
    return f"{len(value)}"


@websocket_api.require_admin
@websocket_api.websocket_command({vol.Required("type"): f"{DOMAIN}/history/list"})
@websocket_api.async_response
async def ws_history_list(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict
) -> None:
    """Every kept version per kind, newest first."""
    store = _store(hass)
    connection.send_result(
        msg["id"],
        {
            key: [
                {"index": index, "saved_at": entry["saved_at"], "summary": _summary(key, entry["value"])}
                for index, entry in reversed(list(enumerate(store.history(key))))
            ]
            for key in KEYS
        },
    )


@websocket_api.require_admin
@websocket_api.websocket_command(
    {
        vol.Required("type"): f"{DOMAIN}/history/restore",
        vol.Required("key"): vol.In(KEYS),
        vol.Required("index"): vol.Coerce(int),
    }
)
@websocket_api.async_response
async def ws_history_restore(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict
) -> None:
    """Put back any kept version. What is there now is kept first."""
    store = _store(hass)
    key = msg["key"]
    history = store.history(key)
    if not 0 <= msg["index"] < len(history):
        connection.send_error(msg["id"], "not_found", "No such version")
        return
    value = history[msg["index"]]["value"]

    if key == THEMES:
        try:
            await async_write_themes(hass, value)
        except (ForeignFileError, ReloadError, OSError) as err:
            connection.send_error(msg["id"], "write_failed", str(err))
            return
        await store.async_push_history(THEMES, store.themes)
        await store.async_set_themes(value)
    elif key == GLASS_DOMAIN:
        entry = glass_entry(hass)
        if entry is None:
            connection.send_error(msg["id"], "not_found", "Glass Sidebar is not set up")
            return
        await store.async_push_history(GLASS_DOMAIN, dict(entry.options))
        hass.config_entries.async_update_entry(entry, options=value)
    else:
        await store.async_push_history(PEOPLE, store.persons)
        await store.async_set_persons(value)
    connection.send_result(msg["id"], {"restored": True})
