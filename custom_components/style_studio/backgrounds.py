"""Photos for dashboard page backgrounds.

Uploaded photos are kept in /config/style_studio/backgrounds and served at
/style_studio_backgrounds/<name>. Pictures that are already in /config/www
are offered too; Home Assistant serves those at /local/. Which page gets which
background is stored in the dashboard itself (see the panel).
"""

from pathlib import Path
import re
import secrets
from typing import Any
from urllib.parse import quote

from aiohttp import web
import voluptuous as vol

from homeassistant.components import websocket_api
from homeassistant.components.http import HomeAssistantView, StaticPathConfig
from homeassistant.core import HomeAssistant
from homeassistant.exceptions import Unauthorized
from homeassistant.helpers.http import KEY_HASS

from .const import DOMAIN

URL_PATH = "/style_studio_backgrounds"
UPLOAD_URL = "/api/style_studio/upload"
# No SVG: opened on its own it could carry scripts.
EXTENSIONS = (".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif")
MAX_BYTES = 15_000_000
LIST_LIMIT = 200
# A file name we write and serve: plain characters only.
SAFE_NAME = re.compile(r"^[\w][\w .()-]{0,90}$")


def folder(hass: HomeAssistant) -> Path:
    return Path(hass.config.path("style_studio", "backgrounds"))


def _looks_like(extension: str, data: bytes) -> bool:
    """Does the content fit the extension? Keeps other files out."""
    if extension in (".jpg", ".jpeg"):
        return data[:3] == b"\xff\xd8\xff"
    if extension == ".png":
        return data[:8] == b"\x89PNG\r\n\x1a\n"
    if extension == ".gif":
        return data[:4] == b"GIF8"
    if extension == ".webp":
        return data[:4] == b"RIFF" and data[8:12] == b"WEBP"
    if extension == ".avif":
        return data[4:8] == b"ftyp" and data[8:12] in (b"avif", b"avis")
    return False


def clean_name(raw: str) -> str | None:
    """A safe file name from what the browser sent, or None."""
    name = Path(raw.replace("\\", "/")).name
    stem, dot, extension = name.rpartition(".")
    extension = f".{extension.lower()}"
    if not dot or extension not in EXTENSIONS:
        return None
    stem = re.sub(r"[^\w .()-]+", "-", stem).strip(" .-")[:60]
    if not stem:
        stem = "achtergrond"
    return f"{stem}{extension}"


def _save(target: Path, name: str, data: bytes) -> str:
    """Runs in the executor. The name gets a random part (128 bits), so a
    photo's address can't be guessed (it is served without a login, like
    /local), and two uploads never collide."""
    target.mkdir(parents=True, exist_ok=True)
    stem, _, extension = name.rpartition(".")
    while True:
        candidate = f"{stem}-{secrets.token_urlsafe(16)}.{extension}"
        if not (target / candidate).exists():
            break
    (target / candidate).write_bytes(data)
    return candidate


def _list(hass_folder: Path, www: Path) -> list[dict[str, Any]]:
    """Runs in the executor: our uploads, then pictures from /config/www."""
    found: list[tuple[float, dict[str, Any]]] = []
    if hass_folder.is_dir():
        for path in hass_folder.iterdir():
            if path.suffix.lower() in EXTENSIONS and path.is_file():
                found.append(
                    (
                        path.stat().st_mtime,
                        {
                            "name": path.name,
                            "url": f"{URL_PATH}/{quote(path.name)}",
                            "source": "upload",
                            "size": path.stat().st_size,
                        },
                    )
                )
    if www.is_dir():
        for path in www.rglob("*"):
            if len(path.relative_to(www).parts) > 3 or path.suffix.lower() not in EXTENSIONS:
                continue
            if path.is_file():
                relative = path.relative_to(www).as_posix()
                found.append(
                    (
                        path.stat().st_mtime,
                        {
                            "name": relative,
                            "url": f"/local/{quote(relative)}",
                            "source": "www",
                            "size": path.stat().st_size,
                        },
                    )
                )
            if len(found) >= LIST_LIMIT * 2:
                break
    # Uploads first, newest first within each kind.
    found.sort(key=lambda item: (item[1]["source"] != "upload", -item[0]))
    return [item for _, item in found[:LIST_LIMIT]]


class UploadView(HomeAssistantView):
    """POST /api/style_studio/upload?name=photo.jpg with the file as body."""

    url = UPLOAD_URL
    name = "api:style_studio:upload"
    requires_auth = True

    async def post(self, request: web.Request) -> web.Response:
        if not request["hass_user"].is_admin:
            raise Unauthorized()
        hass = request.app[KEY_HASS]

        name = clean_name(request.query.get("name", ""))
        if name is None:
            return self.json_message("Unsupported file type", 400, "unsupported_type")
        # read(n) may return only what has arrived so far, so read to the end.
        data = bytearray()
        async for chunk in request.content.iter_chunked(65536):
            data += chunk
            if len(data) > MAX_BYTES:
                return self.json_message("File is too big", 413, "too_big")
        data = bytes(data)
        if not _looks_like(f".{name.rpartition('.')[2]}", data):
            return self.json_message("Not a picture of that type", 400, "not_a_picture")

        saved = await hass.async_add_executor_job(_save, folder(hass), name, data)
        return self.json({"name": saved, "url": f"{URL_PATH}/{quote(saved)}"})


async def async_setup(hass: HomeAssistant) -> None:
    """Serve the folder, accept uploads and answer the panel's commands."""
    target = folder(hass)
    # A static path needs its folder to exist when it is registered.
    await hass.async_add_executor_job(lambda: target.mkdir(parents=True, exist_ok=True))
    await hass.http.async_register_static_paths(
        [StaticPathConfig(URL_PATH, str(target), True)]
    )
    hass.http.register_view(UploadView())
    websocket_api.async_register_command(hass, ws_list)
    websocket_api.async_register_command(hass, ws_delete)


@websocket_api.require_admin
@websocket_api.websocket_command({vol.Required("type"): f"{DOMAIN}/backgrounds/list"})
@websocket_api.async_response
async def ws_list(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict
) -> None:
    photos = await hass.async_add_executor_job(
        _list, folder(hass), Path(hass.config.path("www"))
    )
    connection.send_result(msg["id"], {"photos": photos})


@websocket_api.require_admin
@websocket_api.websocket_command(
    {vol.Required("type"): f"{DOMAIN}/backgrounds/delete", vol.Required("name"): str}
)
@websocket_api.async_response
async def ws_delete(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict
) -> None:
    """Remove one of our own uploads; pictures in /config/www are never touched."""
    name = msg["name"]
    path = folder(hass) / name
    if not SAFE_NAME.match(name) or path.suffix.lower() not in EXTENSIONS:
        connection.send_error(msg["id"], "invalid_format", "Not one of the uploaded photos")
        return
    if not await hass.async_add_executor_job(path.is_file):
        connection.send_error(msg["id"], "not_found", "No such photo")
        return
    await hass.async_add_executor_job(path.unlink)
    connection.send_result(msg["id"])
