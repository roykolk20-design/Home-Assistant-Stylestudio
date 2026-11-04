from pathlib import Path
import re

from homeassistant.setup import async_setup_component
from pytest_homeassistant_custom_component.common import MockConfigEntry

from custom_components.style_studio.backgrounds import MAX_BYTES, clean_name
from custom_components.style_studio.const import DOMAIN

# The smallest valid PNG: one pixel.
PNG = (
    b"\x89PNG\r\n\x1a\n\x00\x00\x00\rIHDR\x00\x00\x00\x01\x00\x00\x00\x01\x08\x06"
    b"\x00\x00\x00\x1f\x15\xc4\x89\x00\x00\x00\rIDATx\x9cc\xf8\xff\xff?\x00\x05\xfe"
    b"\x02\xfe\xa7\x9a\xa0\xa0\x00\x00\x00\x00IEND\xaeB`\x82"
)


async def _setup(hass, tmp_path: Path) -> None:
    hass.config.config_dir = str(tmp_path)
    assert await async_setup_component(hass, "http", {})
    assert await async_setup_component(hass, "frontend", {})
    entry = MockConfigEntry(domain=DOMAIN)
    entry.add_to_hass(hass)
    assert await hass.config_entries.async_setup(entry.entry_id)
    await hass.async_block_till_done()


async def _send(client, **msg) -> dict:
    await client.send_json_auto_id(msg)
    return await client.receive_json()


def test_clean_name() -> None:
    assert clean_name("Mijn foto.JPG") == "Mijn foto.jpg"
    assert clean_name("../../etc/passwd.png") == "passwd.png"
    assert clean_name("C:\\fotos\\zonsondergang.webp") == "zonsondergang.webp"
    assert clean_name("..png") == "achtergrond.png"
    assert clean_name("script.svg") is None
    assert clean_name("geen-extensie") is None
    assert clean_name("") is None


async def test_upload_list_serve_delete(hass, hass_client, hass_ws_client, tmp_path) -> None:
    await _setup(hass, tmp_path)
    (tmp_path / "www").mkdir()
    (tmp_path / "www" / "eigen.png").write_bytes(PNG)
    client = await hass_client()

    resp = await client.post("/api/style_studio/upload?name=Strand.png", data=PNG)
    assert resp.status == 200
    body = await resp.json()
    # The name gets a random part: the address can't be guessed, and it is
    # served without a login (like /local).
    assert re.fullmatch(r"Strand-[0-9a-f]{10}\.png", body["name"])
    assert body["url"] == f"/style_studio_backgrounds/{body['name']}"
    assert (tmp_path / "style_studio" / "backgrounds" / body["name"]).read_bytes() == PNG

    # The same name again is another file.
    again = await (await client.post("/api/style_studio/upload?name=Strand.png", data=PNG)).json()
    assert again["name"] != body["name"]

    served = await client.get(body["url"])
    assert served.status == 200
    assert await served.read() == PNG

    ws = await hass_ws_client(hass)
    photos = (await _send(ws, type="style_studio/backgrounds/list"))["result"]["photos"]
    assert {p["name"] for p in photos[:2]} == {body["name"], again["name"]}
    assert [p["source"] for p in photos] == ["upload", "upload", "www"]
    assert photos[-1]["url"] == "/local/eigen.png"

    assert (await _send(ws, type="style_studio/backgrounds/delete", name=body["name"]))["success"]
    assert not (tmp_path / "style_studio" / "backgrounds" / body["name"]).exists()
    # Pictures in /config/www and anything outside the folder are never removed.
    msg = await _send(ws, type="style_studio/backgrounds/delete", name="../www/eigen.png")
    assert msg["error"]["code"] == "invalid_format"
    assert (tmp_path / "www" / "eigen.png").exists()
    msg = await _send(ws, type="style_studio/backgrounds/delete", name="weg.png")
    assert msg["error"]["code"] == "not_found"


async def test_upload_refuses_the_wrong_things(
    hass, hass_client, hass_read_only_access_token, tmp_path
) -> None:
    await _setup(hass, tmp_path)
    client = await hass_client()

    # Not a picture, though named like one.
    resp = await client.post("/api/style_studio/upload?name=nep.png", data=b"MZ\x90\x00 not a png")
    assert resp.status == 400
    # Other types.
    assert (await client.post("/api/style_studio/upload?name=a.svg", data=PNG)).status == 400
    assert (await client.post("/api/style_studio/upload?name=a.png", data=b"GIF89a....")).status == 400
    # Too big.
    resp = await client.post("/api/style_studio/upload?name=groot.png", data=PNG + b"0" * MAX_BYTES)
    assert resp.status == 413
    assert not list((tmp_path / "style_studio" / "backgrounds").iterdir())

    # Only administrators.
    reader = await hass_client(hass_read_only_access_token)
    assert (await reader.post("/api/style_studio/upload?name=x.png", data=PNG)).status == 401
