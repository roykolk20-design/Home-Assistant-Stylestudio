// Style Studio, per person: when a page opens, applies the theme and sidebar
// order the admin picked for the user who is logged in, and reports what this
// device uses. It asks once and never listens live, so nothing changes on a
// screen someone is using; a change is applied the next time a page opens.
// The sidebar's look is Glass Sidebar's job; this only sets HA's own order.
(() => {
  // Keep in sync with const.py and manifest.json.
  const VERSION = "0.9.0";

  if (window.__styleStudio) return;
  window.__styleStudio = { version: VERSION };

  const deviceKey = "style-studio-device";
  const reportKey = "style-studio-report";
  const appliedKey = (userId, what) => `style-studio-applied-${what}-${userId}`;
  // The same report isn't sent again within this time.
  const REPORT_EVERY = 6 * 3600 * 1000;

  const storage = {
    get(key) {
      try {
        return localStorage.getItem(key);
      } catch (err) {
        return null;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(key, value);
      } catch (err) {
        // Blocked storage only means the setting is applied again next time.
      }
    },
  };

  function deviceId() {
    let id = storage.get(deviceKey);
    if (!id) {
      id = Math.random().toString(36).slice(2, 12).padEnd(10, "0");
      storage.set(deviceKey, id);
    }
    return id;
  }

  const root = () => document.querySelector("home-assistant");

  // Tell the server what this device uses; skipped when nothing changed.
  async function report(hass) {
    let sidebar = null;
    try {
      sidebar = (await hass.callWS({ type: "frontend/get_user_data", key: "sidebar" }))?.value ?? null;
    } catch (err) {
      // Older versions have no server-side sidebar data.
    }
    const body = {
      type: "style_studio/person/report",
      device: deviceId(),
      version: VERSION,
      // The Companion app adds "Home Assistant/" to its user agent.
      app: /Home ?Assistant\//i.test(navigator.userAgent),
      theme: hass.selectedTheme?.theme ?? null,
      sidebar: sidebar
        ? { panelOrder: sidebar.panelOrder ?? [], hiddenPanels: sidebar.hiddenPanels ?? [] }
        : null,
    };
    const state = JSON.stringify({ ...body, device: undefined });
    try {
      const last = JSON.parse(storage.get(reportKey));
      if (last?.state === state && Date.now() - last.at < REPORT_EVERY) return;
    } catch (err) {
      // No earlier report.
    }
    try {
      await hass.callWS(body);
      storage.set(reportKey, JSON.stringify({ state, at: Date.now() }));
    } catch (err) {
      // The next page load tries again.
    }
  }

  // Each setting is applied once per device after it changes, so the person
  // can still choose something else in their profile.
  async function apply(hass, config) {
    window.__styleStudio.serverVersion = config.version;
    const userId = hass.user?.id;
    if (!userId) return;

    if (config.theme && config.theme_updated) {
      const key = appliedKey(userId, "theme");
      if (storage.get(key) !== config.theme_updated) {
        root().dispatchEvent(new CustomEvent("settheme", { detail: { theme: config.theme } }));
        storage.set(key, config.theme_updated);
      }
    }

    if (config.sidebar && config.sidebar_updated) {
      const key = appliedKey(userId, "sidebar");
      if (storage.get(key) !== config.sidebar_updated) {
        try {
          await hass.callWS({ type: "frontend/set_user_data", key: "sidebar", value: config.sidebar });
          storage.set(key, config.sidebar_updated);
        } catch (err) {
          console.warn("Style Studio: could not set the sidebar order", err);
        }
      }
    }
  }

  async function start() {
    const hass = root()?.hass;
    if (!hass?.connection || !hass.user) {
      setTimeout(start, 500);
      return;
    }
    try {
      await apply(hass, await hass.callWS({ type: "style_studio/person/get" }));
    } catch (err) {
      console.warn("Style Studio: could not load personal settings", err);
    }
    // Let Home Assistant settle first, so the report shows the result.
    setTimeout(() => report(hass), 1500);
  }

  start();
})();
