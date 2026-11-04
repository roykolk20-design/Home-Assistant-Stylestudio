import logging
from pathlib import Path

from homeassistant.components import frontend, persistent_notification
from homeassistant.components.frontend import add_extra_js_url, remove_extra_js_url
from homeassistant.components.http import StaticPathConfig
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.exceptions import HomeAssistantError

from . import backgrounds, websocket
from .const import DOMAIN, PANEL_ELEMENT, PANEL_PATH, PANEL_URL, RUNTIME_URL, URL_BASE
from .store import StyleStore
from .themes import async_repair_themes

_LOGGER = logging.getLogger(__name__)

# Shown before the frontend runs, so the language is the server's.
REPAIRED = {
    "nl": (
        "Style Studio heeft zijn themabestanden aangepast aan hoe configuration.yaml "
        "thema's laadt. Het oude bestand hield de interface van Home Assistant tegen. "
        "Herstart Home Assistant nog één keer. Een kopie staat in "
        "/config/style_studio/backups/."
    ),
    "en": (
        "Style Studio changed its theme files to match how configuration.yaml loads "
        "themes. The old file stopped Home Assistant's interface from starting. "
        "Restart Home Assistant once more. A copy is in /config/style_studio/backups/."
    ),
}
PANEL_TITLE = {"nl": "Stijl", "en": "Style"}


def _language(hass: HomeAssistant) -> str:
    return "nl" if str(hass.config.language).startswith("nl") else "en"


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    data = hass.data.setdefault(DOMAIN, {})

    store = StyleStore(hass)
    await store.async_load()
    data["store"] = store

    # Theme files in the wrong format stop the frontend from starting. The
    # frontend is only an after-dependency, so this still runs then.
    repaired = await async_repair_themes(hass, store.themes)
    if "frontend" not in hass.config.components:
        if repaired:
            persistent_notification.async_create(
                hass,
                REPAIRED[_language(hass)],
                title="Style Studio",
                notification_id=f"{DOMAIN}_repaired",
            )
        _LOGGER.warning("The frontend isn't running; the Style Studio panel waits for a restart")
        data["frontend"] = False
        return True
    if repaired:
        try:
            await hass.services.async_call("frontend", "reload_themes", blocking=True)
        except HomeAssistantError as err:
            _LOGGER.warning("Themes still don't load after the repair: %s", err)

    # Static paths and commands can't be removed again, so register them once.
    if not data.get("registered"):
        await hass.http.async_register_static_paths(
            [StaticPathConfig(URL_BASE, str(Path(__file__).parent / "www"), False)]
        )
        websocket.async_register(hass)
        await backgrounds.async_setup(hass)
        data["registered"] = True

    data["frontend"] = True
    add_extra_js_url(hass, RUNTIME_URL)
    # What panel_custom.async_register_panel does, without depending on
    # panel_custom: that one won't set up when the frontend failed.
    frontend.async_register_built_in_panel(
        hass,
        component_name="custom",
        sidebar_title=PANEL_TITLE[_language(hass)],
        sidebar_icon="mdi:palette-swatch-outline",
        frontend_url_path=PANEL_PATH,
        config={
            "_panel_custom": {
                "name": PANEL_ELEMENT,
                "module_url": PANEL_URL,
                "embed_iframe": False,
                "trust_external": False,
            }
        },
        require_admin=True,
    )
    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    if hass.data[DOMAIN].pop("frontend", False):
        remove_extra_js_url(hass, RUNTIME_URL)
        frontend.async_remove_panel(hass, PANEL_PATH)
    return True
