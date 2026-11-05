DOMAIN = "style_studio"
# Keep in sync with manifest.json, frontend/src/version.js and www/person.js.
VERSION = "0.9.1"

URL_BASE = f"/{DOMAIN}"
# The version in the URL makes browsers and the Companion app fetch new files.
PANEL_URL = f"{URL_BASE}/studio-panel.js?v={VERSION}"
# Runs in every browser; applies the theme and sidebar picked per person.
RUNTIME_URL = f"{URL_BASE}/person.js?v={VERSION}"
PANEL_PATH = "style-studio"
PANEL_ELEMENT = "style-studio-panel"

STORAGE_KEY = DOMAIN
STORAGE_VERSION = 1
HISTORY_LIMIT = 10
