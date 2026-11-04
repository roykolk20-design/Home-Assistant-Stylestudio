// Loads dev/harness.html in Edge at phone, tablet and desktop width, with a
// light and a dark page, and checks the panel together with Glass Sidebar.
// Run: node dev/smoke.mjs [screenshot folder]
import { chromium } from "playwright-core";
import { server } from "./serve.mjs";

// A Bubble Card pop-up with this hash, in either format.
const popupHash = (card) =>
  card?.card_type === "pop-up" ? card.hash : card?.type === "vertical-stack" ? card.cards?.[0]?.hash : undefined;

async function preset(themesTab, key) {
  if (await themesTab.locator('[data-choice="new"]').count()) await themesTab.locator('[data-choice="new"]').click();
  await themesTab.locator(`[data-preset="${key}"]`).click();
}

const shots = process.argv[2];
const base = "http://127.0.0.1:8123/dev/harness.html";
const browser = await chromium.launch({ channel: "msedge" });
let failures = 0;

function check(ok, label) {
  console.log(`${ok ? "ok  " : "FAIL"} ${label}`);
  if (!ok) failures += 1;
}

// Reads state out of the shadow roots, like the runtime does.
const probe = () => {
  const deepText = (root) =>
    [...root.querySelectorAll("*")]
      .map((el) => (el.shadowRoot ? deepText(el.shadowRoot) : ""))
      .join(" ") + root.textContent;
  const main = document.querySelector("home-assistant").shadowRoot.querySelector("home-assistant-main");
  const sidebar = main.shadowRoot.querySelector("ha-sidebar");
  const panel = main.shadowRoot.querySelector("style-studio-panel");
  const holder = sidebar.shadowRoot.querySelector('slot[name="main-navigation"]');
  const visible = [...holder.children]
    .filter((el) => el.localName === "ha-list-item-button" || el.textContent.trim())
    .sort((a, b) => Number(a.style.order) - Number(b.style.order))
    .map((el) => (el.localName === "ha-list-item-button" ? el.id.replace("sidebar-panel-", "") : `# ${el.textContent}`));
  return {
    visible: visible.join(","),
    sidebarRadius: getComputedStyle(sidebar).borderTopLeftRadius,
    panelText: deepText(panel.shadowRoot).replace(/\s+/g, " "),
    hasPreview: Boolean(
      panel.shadowRoot
        .querySelector("ss-sidebar-tab")
        ?.shadowRoot?.querySelector("ss-sidebar-preview")
        ?.shadowRoot?.querySelector(".sidebar")
    ),
    rootPrimary: document.documentElement.style.getPropertyValue("--primary-color"),
  };
};

async function open(width, query = "", tabName = "Zijbalk") {
  const ctx = await browser.newContext({ viewport: { width, height: width < 800 ? 900 : 1000 } });
  const tab = await ctx.newPage();
  const errors = [];
  tab.on("pageerror", (err) => errors.push(err.message));
  tab.on("console", (msg) => {
    // The full icon list only exists in a real Home Assistant.
    const url = msg.location().url;
    if (msg.type() === "error" && !url.endsWith("favicon.ico") && !url.includes("/static/mdi/")) errors.push(msg.text());
  });
  await tab.goto(`${base}${query}`);
  const panel = tab.locator("style-studio-panel");
  // Wait for the panel itself rather than a fixed time.
  await panel.locator("nav.tabs").waitFor();
  if (tabName !== "Thema's") {
    await panel.locator("nav.tabs").getByRole("button", { name: tabName }).click();
  }
  const ready = {
    "Thema's": "ss-themes-tab .intro",
    "Per persoon": "ss-people-tab .intro",
    Klimaat: "ss-climate-tab .intro",
    "Kamers en pop-ups": "ss-rooms-tab .intro",
    "Controle en herstel": "ss-check-tab .intro",
  };
  await panel.locator(ready[tabName] ?? "ss-sidebar-tab .card").first().waitFor();
  await tab.waitForTimeout(300);
  return { ctx, tab, errors, panel };
}

const groupedOrder =
  "lovelace,browser-mod,style-studio,# Dashboards,dashboard-plattegrond,energy,# Info,logbook,history,map";

for (const width of [430, 768, 1920]) {
  for (const page of ["light", "dark"]) {
    const { ctx, tab, errors } = await open(width, `?page=${page}`);
    const state = await tab.evaluate(probe);
    const label = `${width}px ${page}`;
    check(errors.length === 0, `${label}: no errors ${errors.join(" | ")}`);
    check(state.panelText.includes("Glass Sidebar"), `${label}: panel rendered`);
    check(state.hasPreview, `${label}: preview rendered`);
    check(state.visible === groupedOrder, `${label}: Glass Sidebar groups (${state.visible})`);
    if (shots) await tab.screenshot({ path: `${shots}/${width}-${page}.png` });
    await ctx.close();
  }
}

// Glass Sidebar missing, not added, disabled or too old.
for (const [state, text] of [
  ["missing", "Uitbreiding: Glass Sidebar"],
  ["not-added", "Glass Sidebar is geïnstalleerd"],
  ["disabled", "uitgeschakeld of niet geladen"],
  ["old", "Je hebt Glass Sidebar 1.2.1"],
]) {
  const { ctx, tab, errors } = await open(1920, `?glass=${state}`);
  const { panelText } = await tab.evaluate(probe);
  check(panelText.includes(text) && !errors.length, `glass ${state}: "${text}" ${errors.join(" | ")}`);
  await ctx.close();
}

// The Save bar must be on screen without scrolling, at the top of a long
// page too: Home Assistant cuts off a panel that doesn't scroll by itself.
async function saveBarOnScreen(tab, panel) {
  const button = panel.getByRole("button", { name: "Opslaan" });
  const box = await button.boundingBox();
  const viewport = tab.viewportSize();
  return Boolean(box) && box.y >= 0 && box.y + box.height <= viewport.height;
}

for (const width of [430, 1920]) {
  const { ctx, tab, panel } = await open(width, "", "Zijbalk");
  await panel.locator('input[type="range"]').nth(1).fill("6");
  await tab.waitForTimeout(100);
  check(await saveBarOnScreen(tab, panel), `${width}px: Save bar on screen after a change`);
  // A person scrolls with the wheel; the groups at the bottom must come into view.
  await panel.getByRole("button", { name: /^5\s*Groepen/ }).click().catch(() => {});
  for (const head of ["Glas", "Actieve pagina", "Telefoon", "Groepen"]) {
    await panel.locator("ss-sidebar-tab").getByRole("button", { name: "Volgende" }).click();
  }
  await tab.mouse.move(width / 2, 400);
  for (let i = 0; i < 15; i += 1) await tab.mouse.wheel(0, 600);
  await tab.waitForTimeout(300);
  const groups = await panel.locator("ss-groups-editor").boundingBox();
  check(Boolean(groups) && groups.y < tab.viewportSize().height, `${width}px: wheel scrolls the panel`);
  await ctx.close();
}

// Editing: nothing changes until Save; Save goes to Glass Sidebar; undo restores.
{
  const { ctx, tab, panel } = await open(1920);
  await panel.locator('input[type="range"]').nth(1).fill("6");
  await tab.waitForTimeout(100);
  let state = await tab.evaluate(probe);
  check(state.panelText.includes("Niet opgeslagen"), "unsaved notice");
  check(state.sidebarRadius === "20px", `real sidebar unchanged before save (${state.sidebarRadius})`);

  await panel.getByRole("button", { name: "Opslaan" }).click();
  await tab.waitForTimeout(300);
  state = await tab.evaluate(probe);
  check((await tab.evaluate(() => window.__db.sidebar.radius)) === 6, "save stores radius");
  check(state.sidebarRadius === "6px", `Glass Sidebar applies saved radius (${state.sidebarRadius})`);

  await panel.getByRole("button", { name: "Vorige versie terugzetten" }).click();
  await panel.getByRole("button", { name: "Ja" }).click();
  await tab.waitForTimeout(300);
  state = await tab.evaluate(probe);
  check(state.sidebarRadius === "20px", `undo restores radius (${state.sidebarRadius})`);

  // Groups, the last step: add one, move an item into it with tap + "Hierheen", save.
  for (let i = 0; i < 4; i += 1) await panel.locator("ss-sidebar-tab").getByRole("button", { name: "Volgende" }).click();
  const editor = panel.locator("ss-groups-editor");
  await editor.getByRole("button", { name: "Groep toevoegen" }).click();
  await editor.getByRole("button", { name: /Overzicht/ }).click();
  await editor.getByRole("button", { name: "Hierheen" }).last().click();
  await panel.getByRole("button", { name: "Opslaan" }).first().click();
  await tab.waitForTimeout(300);
  state = await tab.evaluate(probe);
  check(state.visible.endsWith("# Nieuwe groep,lovelace"), `new group in Glass Sidebar (${state.visible})`);
  check(!state.panelText.includes("Verbergen"), "no hide buttons (Glass Sidebar can't hide items)");
  if (shots) await tab.screenshot({ path: `${shots}/editing.png` });
  await ctx.close();
}

// Themes, step by step: a new theme, saved and used; changed; copied;
// deleted and restored.
{
  const { ctx, tab, panel, errors } = await open(1920, "", "Thema's");
  const themesTab = panel.locator("ss-themes-tab");
  const next = () => themesTab.getByRole("button", { name: "Volgende" }).click();
  const choices = async () => (await themesTab.locator(".choice").allInnerTexts()).map((c) => c.split("\n")[0].trim());
  check(JSON.stringify(await choices()) === JSON.stringify(["Een nieuw thema maken", "Een thema gebruiken"]), "no themes yet: new or use");

  // New: it starts from the theme in use.
  await themesTab.locator('[data-choice="new"]').click();
  await next();
  let state = await tab.evaluate(probe);
  check(state.panelText.includes("Licht Warm (kopie)"), "starts from the theme in use");
  check((await themesTab.getByText(/kleuren komen vast uit het gekopieerde thema/).count()) === 1, "fixed colors explained");
  check(!(await tab.evaluate(probe)).panelText.includes("Niet opgeslagen"), "that start isn't a change");

  // Change of mind: the pink preset.
  await themesTab.getByRole("button", { name: /Begin met/ }).click();
  await themesTab.locator('[data-preset="pink"]').click();
  await next(); // to colors
  await next(); // to shape
  await next(); // to name and save
  await themesTab.getByRole("textbox", { name: "Naam", exact: true }).fill("Joyce");
  await themesTab.locator("summary", { hasText: "Meer opties" }).click();
  await themesTab.locator("summary", { hasText: "Bovenbalk" }).click();
  const headerField = themesTab
    .locator("details", { hasText: "Bovenbalk" })
    .getByRole("textbox", { name: "Achtergrond", exact: true })
    .first();
  await headerField.fill("#123456");
  await headerField.blur();
  await themesTab.getByRole("checkbox", { name: /Ook tonen op dit hele scherm/ }).check();
  await tab.waitForTimeout(100);
  state = await tab.evaluate(probe);
  check(state.rootPrimary === "#e8749e", `whole-screen preview sets --primary-color (${state.rootPrimary})`);

  await themesTab.getByRole("button", { name: "Opslaan", exact: true }).click();
  await tab.waitForTimeout(300);
  let saved = await tab.evaluate(() => window.__themes());
  check(saved.themes.length === 1 && saved.themes[0].name === "Joyce", "theme saved");
  check(saved.themes[0].vars["app-header-background-color"] === "#123456", "override written to vars");
  check(saved.themes[0].vars["primary-background-color"] === "#fbf1f4", "background untouched by header override");
  check(saved.themes[0].vars["bubble-pop-up-main-background-color"] === "#fffafc", "solid pop-up by default");
  state = await tab.evaluate(probe);
  check(state.rootPrimary === "", "whole-screen preview removed after save");

  // After saving: who uses it.
  const row = themesTab.locator('.use-row[data-theme="Joyce"]');
  await row.getByRole("button", { name: "Standaard voor iedereen" }).click();
  await tab.waitForTimeout(200);
  saved = await tab.evaluate(() => window.__themes());
  check(saved.defaultTheme === "Joyce", "set as default theme");
  await row.getByRole("button", { name: "Voor mij gebruiken" }).click();
  check((await tab.evaluate(() => window.__appliedTheme)) === "Joyce", "use for me applies the theme here");

  // Change it: glass pop-ups.
  await themesTab.getByRole("button", { name: "Terug" }).click();
  await themesTab.locator('[data-choice="edit"]').click();
  await themesTab.locator(".chip", { hasText: "Joyce" }).click();
  await next();
  await next();
  await themesTab.getByRole("radio", { name: "Glas" }).click();
  // Leaving with a change asks first.
  await themesTab.getByRole("button", { name: "Terug" }).click();
  check((await themesTab.getByText(/Weggooien/).count()) === 1, "leaving with a change asks first");
  await themesTab.getByRole("button", { name: "Nee" }).click();
  await next();
  await themesTab.getByRole("button", { name: "Opslaan", exact: true }).click();
  await tab.waitForTimeout(300);
  saved = await tab.evaluate(() => window.__themes());
  check(
    saved.themes[0].vars["bubble-pop-up-main-background-color"].startsWith("rgba("),
    `glass pop-up (${saved.themes[0].vars["bubble-pop-up-main-background-color"]})`
  );

  // Copy the user's own Licht Warm file as a starting point.
  await themesTab.getByRole("button", { name: "Terug" }).click();
  await themesTab.locator('[data-choice="new"]').click();
  await themesTab.locator("select").selectOption("Licht Warm");
  await next();
  await next();
  await next();
  await themesTab.getByRole("button", { name: "Opslaan", exact: true }).click();
  await tab.waitForTimeout(300);
  saved = await tab.evaluate(() => window.__themes());
  check(
    saved.themes.map((t) => t.name).join() === "Joyce,Licht Warm (kopie)",
    `copied existing theme (${saved.themes.map((t) => t.name).join()})`
  );

  // Delete it (under "Meer opties" of the last step), then restore.
  await themesTab.getByRole("button", { name: "Terug" }).click();
  await themesTab.locator('[data-choice="edit"]').click();
  await themesTab.locator(".chip", { hasText: "Licht Warm (kopie)" }).click();
  await next();
  await next();
  await next();
  await themesTab.locator("summary", { hasText: "Meer opties" }).click();
  await themesTab.getByRole("button", { name: "Thema verwijderen" }).click();
  await themesTab.getByRole("button", { name: "Ja" }).click();
  await tab.waitForTimeout(300);
  saved = await tab.evaluate(() => window.__themes());
  check(saved.themes.length === 1, "deleted after confirm");
  await themesTab.getByRole("button", { name: "Vorige versie terugzetten" }).click();
  await themesTab.getByRole("button", { name: "Ja" }).click();
  await tab.waitForTimeout(300);
  saved = await tab.evaluate(() => window.__themes());
  check(saved.themes.length === 2, "restored after delete");
  check(errors.length === 0, `themes: no errors ${errors.join(" | ")}`);
  if (shots) await tab.screenshot({ path: `${shots}/themes.png`, fullPage: false });
  await ctx.close();
}

// Per person: Roy (logged in here) gets Joyce's sidebar and the pink theme;
// the script in this browser applies both when a page opens, not before.
{
  const { ctx, tab, panel, errors } = await open(1920, "", "Per persoon");
  const people = panel.locator("ss-people-tab");
  let state = await tab.evaluate(probe);
  check(state.panelText.includes("Gebruikt nu: Licht Roze"), "Joyce's reported theme shown");

  await people.getByRole("combobox", { name: "Thema (Roy)" }).selectOption("Licht Roze");
  await people.locator('.person[data-user="Roy"] summary', { hasText: "Meer opties" }).click();
  await people.getByRole("combobox", { name: /Zijbalk.*\(Roy\)/ }).selectOption({ label: "Zoals Joyce nu" });
  await people.getByRole("button", { name: "Opslaan" }).click();
  await tab.waitForTimeout(2500);
  let result = await tab.evaluate(() => window.__people());
  check(result.persons["8faf3d60"]?.theme === "Licht Roze", "theme saved for Roy");
  // Nothing changes on a screen that is open: it is applied when a page opens.
  check(result.appliedTheme === undefined, `saving changes nothing on an open page (${result.appliedTheme})`);
  check(
    JSON.stringify(result.userSidebar) === JSON.stringify({ panelOrder: ["lovelace", "energy"], hiddenPanels: [] }),
    "the sidebar order of an open page is untouched too"
  );
  // A page opens: the script runs again (as on a new page load).
  await tab.evaluate(async () => {
    delete window.__styleStudio;
    await import("/custom_components/style_studio/www/person.js?opened=1");
  });
  await tab.waitForTimeout(2500);
  result = await tab.evaluate(() => window.__people());
  check(result.appliedTheme === "Licht Roze", `applied when a page opens (${result.appliedTheme})`);
  check(
    JSON.stringify(result.userSidebar) === JSON.stringify({ panelOrder: ["lovelace", "map"], hiddenPanels: ["logbook", "history"] }),
    `runtime applied sidebar (${JSON.stringify(result.userSidebar)})`
  );
  const roy = Object.values(result.reports).find((r) => r.user_id === "8faf3d60");
  check(roy?.theme === "Licht Roze" && roy.version, "runtime reported back");

  // Copy everything from Joyce to... Joyce can't copy from herself; copy Roy to Joyce.
  await people.locator('.person[data-user="Joyce"] summary', { hasText: "Meer opties" }).click();
  await people.getByRole("combobox", { name: "Alles kopiëren van (Joyce)" }).selectOption("8faf3d60");
  await people.getByRole("button", { name: "Opslaan" }).click();
  await tab.waitForTimeout(300);
  const after = await tab.evaluate(() => window.__people());
  check(after.persons["3a122b8e"]?.theme === "Licht Roze", "copy everything to Joyce");

  await people.getByRole("button", { name: "Vorige versie terugzetten" }).click();
  await people.getByRole("button", { name: "Ja" }).click();
  await tab.waitForTimeout(300);
  const undone = await tab.evaluate(() => window.__people());
  check(!undone.persons["3a122b8e"], "undo removes Joyce's settings again");
  check(errors.length === 0, `people: no errors ${errors.join(" | ")}`);
  if (shots) await tab.screenshot({ path: `${shots}/people.png` });
  await ctx.close();
}

// Climate, step by step: which air conditioner, what goes in it, where.
{
  const { ctx, tab, panel, errors } = await open(1920, "", "Klimaat");
  const climate = panel.locator("ss-climate-tab");
  const preview = climate.locator("ss-card-preview");
  const next = () => climate.getByRole("button", { name: "Volgende" }).click();
  await climate.locator(".tile", { hasText: "LG Woonkamer" }).click();
  await next();
  check((await preview.locator(".button.active").allInnerTexts()).some((t) => t.includes("Koel")), "current mode is active in preview");
  check((await preview.locator(".button.active").allInnerTexts()).some((t) => t.includes("Links/rechts")), "horizontal swing on");
  check((await preview.getByText("21°", { exact: true }).count()) === 1, "target temperature shown");
  check((await preview.getByText("Droog", { exact: true }).count()) === 1, "dry mode in preview before unchecking");
  await climate.getByRole("checkbox", { name: "Droog" }).uncheck();
  check((await preview.getByText("Droog", { exact: true }).count()) === 0, "unchecked mode leaves the preview");
  await next();

  // Name and address are folded under "Meer opties".
  await climate.locator("summary", { hasText: "Meer opties" }).click();
  check((await climate.getByRole("textbox", { name: "Naam" }).inputValue()) === "Airco woonkamer", "name from the room");
  check((await climate.getByRole("textbox", { name: /Adres/ }).inputValue()) === "#airco-woonkamer", "address from the room");

  await climate.getByRole("button", { name: "Op dashboard zetten" }).click();
  await climate.getByRole("button", { name: "Ja" }).click();
  await tab.waitForTimeout(300);
  let lovelace = await tab.evaluate(() => window.__lovelace());
  const cards = lovelace.dashboards.__main.views[0].sections.flatMap((section) => section.cards);
  const popup = cards.find((c) => popupHash(c) === "#airco-woonkamer");
  check(popup?.type === "custom:bubble-card" && Array.isArray(popup.cards), "new standalone pop-up format by default");
  check(Boolean(popup), "pop-up on the dashboard");
  check(cards.some((c) => c.card_type === "button" && c.tap_action?.navigation_path === "#airco-woonkamer"), "opener button on the dashboard");
  check(
    lovelace.backups.length === 1 && !JSON.stringify(lovelace.backups[0].data.config).includes("#airco-woonkamer"),
    "backup of the old dashboard"
  );
  check(!JSON.stringify(popup).includes('"dry"'), "dry mode left out");

  // Again, now in the old format: replaced, not doubled.
  await climate.getByRole("radio", { name: "Oud" }).click();
  await climate.getByRole("button", { name: "Op dashboard zetten" }).click();
  await climate.getByRole("button", { name: "Ja" }).click();
  await tab.waitForTimeout(300);
  lovelace = await tab.evaluate(() => window.__lovelace());
  const again = lovelace.dashboards.__main.views[0].sections.flatMap((section) => section.cards);
  check(again.filter((c) => popupHash(c) === "#airco-woonkamer").length === 1, "second time replaces the pop-up");
  check(again.some((c) => c.type === "vertical-stack" && popupHash(c) === "#airco-woonkamer"), "old format when chosen");
  await climate.getByRole("radio", { name: "Nieuw (3.2+)" }).click();

  // The other air conditioner has no fan modes or swing; back to step 1.
  await climate.getByRole("button", { name: /Welke airco/ }).click();
  await climate.locator(".tile", { hasText: "Slaapkamer" }).click();
  await next();
  check((await climate.getByText(/geen ventilatorstanden/).count()) === 1, "missing fan explained");
  await next();

  // A panel-mode page can't take extra cards.
  await climate.getByRole("combobox", { name: "Dashboard" }).selectOption({ label: "Plattegrond" });
  await tab.waitForTimeout(200);
  check(await climate.getByRole("button", { name: "Op dashboard zetten" }).isDisabled(), "panel view refused");
  check(errors.length === 0, `climate: no errors ${errors.join(" | ")}`);
  if (shots) await tab.screenshot({ path: `${shots}/climate.png` });
  await ctx.close();
}

// Rooms on your own dashboard, step by step: change a hand-made room in place,
// add one from an area and one by hand, add other cards, make a whole page.
{
  const { ctx, tab, panel, errors } = await open(1920, "", "Kamers en pop-ups");
  const rooms = panel.locator("ss-rooms-tab");
  const next = () => rooms.getByRole("button", { name: "Volgende" }).click();
  const yes = () => rooms.getByRole("button", { name: "Ja" }).click();
  const begin = async (choice) => {
    await rooms.locator(`[data-choice="${choice}"]`).click();
  };
  check((await rooms.locator(".choice").count()) === 5, "starts with five choices");

  // Change the hand-made living room.
  await begin("edit");
  await rooms.locator(".tile", { hasText: "Woonkamer" }).click();
  await next();
  await rooms.getByRole("textbox", { name: "Naam" }).fill("Huiskamer");
  await rooms.getByRole("button", { name: "Ander icoon kiezen" }).click();
  await rooms.locator("ss-icon-picker").getByRole("button", { name: "sofa-outline", exact: true }).click();
  await next();
  check(
    (await rooms.getByRole("checkbox", { name: "Plafondlamp" }).isChecked()) &&
      (await rooms.getByRole("checkbox", { name: "Staande lamp" }).isChecked()),
    "its lights read from the pop-up"
  );
  await rooms.getByRole("checkbox", { name: "Staande lamp" }).uncheck();
  await next(); // lights
  await next(); // air conditioning
  await rooms.getByRole("button", { name: "Opslaan", exact: true }).click();
  await yes();
  await tab.waitForTimeout(400);
  let lovelace = await tab.evaluate(() => window.__lovelace());
  const ground = lovelace.dashboards.__main.views[0].sections[1].cards;
  check(ground[1].name.includes(`const LIGHTS=["light.woonkamer_plafond"]`) && ground[1].name.includes(`const NAME='Huiskamer'`), "tile template changed in place");
  check(ground[1].name.includes(`const ICON='mdi:sofa-outline'`), "icon picked from the picker");
  check(JSON.stringify(ground[1].styles) === JSON.stringify({ card: [{ "border-radius": "24px" }, { padding: "16px" }] }), "tile design kept");
  check(ground[2].cards[0].name === "Huiskamer" && ground[2].cards.length === 2 && ground[2].cards[1].button_type === "slider", "pop-up lights changed, their design kept");
  check(lovelace.backups.length === 1, "backup before changing");
  check((await rooms.locator(".choice").count()) === 5, "back at the start after saving");

  // The kitchen from the areas: goes under its floor's heading by itself.
  await begin("add");
  await next(); // where: defaults
  await rooms.locator(".tile", { hasText: "Keuken" }).click();
  await next();
  await next(); // name and icon
  await next(); // lights
  await next(); // air conditioning
  await rooms.getByRole("button", { name: "Op dashboard zetten" }).click();
  await yes();
  await tab.waitForTimeout(400);
  lovelace = await tab.evaluate(() => window.__lovelace());
  const cards = lovelace.dashboards.__main.views[0].sections[1].cards;
  check(cards.some((c) => c.tap_action?.navigation_path === "#l-keuken"), "kitchen tile added under Begane grond");
  check(cards.some((c) => popupHash(c) === "#l-keuken"), "kitchen pop-up added");
  const kitchenTile = cards.find((c) => c.tap_action?.navigation_path === "#l-keuken");
  check(
    kitchenTile?.type === "custom:button-card" && kitchenTile.styles.card[0]["border-radius"] === "24px" &&
      kitchenTile.name.includes(`const LIGHTS=["light.keuken"]`) && kitchenTile.name.includes("const NAME='Keuken'"),
    "new room copies the design of the room already there"
  );
  const kitchenPopup = cards.find((c) => popupHash(c) === "#l-keuken");
  check(kitchenPopup.type === "vertical-stack" && kitchenPopup.cards[1].button_type === "slider", "its pop-up copies the light cards too");

  // A room that isn't an area.
  await begin("add");
  await next();
  await rooms.locator(".tile", { hasText: "Een andere kamer" }).click();
  await next();
  await rooms.getByRole("textbox", { name: "Naam" }).fill("Kantoor");
  await next();
  await rooms.getByRole("checkbox", { name: "Zolderlamp" }).check();
  await next();
  await next();
  await rooms.getByRole("button", { name: "Op dashboard zetten" }).click();
  await yes();
  await tab.waitForTimeout(400);
  lovelace = await tab.evaluate(() => window.__lovelace());
  check(JSON.stringify(lovelace.dashboards.__main).includes("#l-kantoor"), "room made by hand added");

  // Other cards: a greeting, and scenes.
  await begin("card");
  await rooms.locator('[data-card="greeting"]').click();
  await next();
  await rooms.getByRole("button", { name: "Toevoegen", exact: true }).click();
  await yes();
  await tab.waitForTimeout(300);
  await begin("card");
  await rooms.locator('[data-card="scenes"]').click();
  await next();
  await rooms.getByRole("checkbox", { name: "Avond" }).check();
  await next();
  await rooms.getByRole("button", { name: "Toevoegen", exact: true }).click();
  await yes();
  await tab.waitForTimeout(300);
  lovelace = await tab.evaluate(() => window.__lovelace());
  const first = lovelace.dashboards.__main.views[0].sections[0].cards;
  check(first.some((c) => c.type === "markdown" && c.content.includes("{{ user }}")), "greeting added");
  check(first.some((c) => c.type === "grid" && c.cards[0].entity === "scene.avond"), "scenes added");
  check(errors.length === 0, `rooms: no errors ${errors.join(" | ")}`);
  if (shots) await tab.screenshot({ path: `${shots}/rooms.png` });

  // A whole page from the areas.
  await begin("page");
  const view = rooms.locator("ss-rooms-view");
  check((await view.locator(".floor").count()) === 3, "whole page: one card per floor");
  await view.getByRole("button", { name: "Weergave maken" }).click();
  await view.getByRole("button", { name: "Ja" }).click();
  await tab.waitForTimeout(300);
  lovelace = await tab.evaluate(() => window.__lovelace());
  check(lovelace.dashboards.__main.views.some((v) => v.path === "kamers"), "whole page made");
  check(lovelace.dashboards.__main.views.length === 3, "other pages kept");
  await ctx.close();
}

// Backgrounds: a photo (chosen and uploaded), dimmed, on one page; a color on
// all pages; a gradient; removed again; a photo deleted.
{
  const { ctx, tab, panel, errors } = await open(1920, "", "Kamers en pop-ups");
  const rooms = panel.locator("ss-rooms-tab");
  const flow = rooms.locator("ss-background-flow");
  const next = () => flow.getByRole("button", { name: "Volgende" }).click();
  const yes = () => flow.getByRole("button", { name: "Ja" }).click();
  const pageStyle = () => flow.locator(".page").getAttribute("style");
  const views = async () => (await tab.evaluate(() => window.__lovelace())).dashboards.__main.views;

  await rooms.locator('[data-choice="background"]').click();
  await flow.locator(".tile").first().waitFor();
  check((await flow.locator(".tile").allInnerTexts()).join("|").includes("Licht"), "pages of the dashboard listed");
  await next();

  // A photo from the list shows in the preview.
  await flow.getByRole("button", { name: "sunset.svg" }).click();
  check((await pageStyle()).includes('url("/dev/photos/sunset.svg")'), "chosen photo in the preview");
  check(!(await pageStyle()).includes("fixed"), "preview never pins the photo to the window");

  // Upload one: it is shrunk or not, stored, listed and chosen by itself.
  const png = Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==", "base64");
  await flow.locator('input[type="file"]').setInputFiles({ name: "Strand.png", mimeType: "image/png", buffer: png });
  await flow.getByRole("button", { name: "Strand.png", exact: true }).waitFor();
  check((await tab.evaluate(() => window.__uploads())).length === 1, "photo uploaded");
  check((await pageStyle()).includes("/dev/photos/uploaded.svg"), "uploaded photo is chosen");
  check((await flow.getByText(/Foto staat klaar/).count()) === 1, "told the photo is ready");

  // A file the server refuses is explained.
  await flow.locator('input[type="file"]').setInputFiles({ name: "kapot.bad.png", mimeType: "image/png", buffer: png });
  await flow.getByText(/geen foto die ik kan gebruiken/).waitFor();
  check(true, "refused photo explained");

  // Darker, shown whole; save on page one only.
  await next();
  await flow.locator('input[type="range"]').fill("-40");
  check((await pageStyle()).includes("rgba(0, 0, 0, 0.4)"), "darker layer in the preview");
  await next();
  await flow.getByRole("button", { name: "Achtergrond zetten" }).click();
  await yes();
  await tab.waitForTimeout(400);
  let v = await views();
  check(
    v[0].background?.includes('url("/dev/photos/uploaded.svg")') && v[0].background.includes("rgba(0, 0, 0, 0.4)") && v[0].background.includes("fixed"),
    `photo background written (${v[0].background})`
  );
  check(v[1].background === undefined, "other pages untouched");
  check((await tab.evaluate(() => window.__lovelace())).backups.length >= 1, "backup before saving");
  check((await rooms.locator(".choice").count()) === 5, "back at the start afterwards");

  // A color on all pages.
  await rooms.locator('[data-choice="background"]').click();
  await flow.getByRole("button", { name: "Alle pagina's" }).click();
  await next();
  await flow.locator('[data-kind="color"]').click();
  await flow.getByRole("button", { name: "#2b2f36" }).click();
  check((await pageStyle()).includes("#2b2f36"), "color in the preview");
  await next();
  await flow.getByRole("button", { name: "Achtergrond zetten" }).click();
  await yes();
  await tab.waitForTimeout(400);
  v = await views();
  check(v.every((x) => x.background === "#2b2f36"), "color on every page");

  // A gradient preset on one page.
  await rooms.locator('[data-choice="background"]').click();
  await next();
  await flow.locator('[data-kind="gradient"]').click();
  await flow.getByRole("button", { name: "Oceaan" }).click();
  await next();
  await flow.getByRole("button", { name: "Achtergrond zetten" }).click();
  await yes();
  await tab.waitForTimeout(400);
  v = await views();
  check(v[0].background === "linear-gradient(160deg, #2193b0, #6dd5ed) fixed", `gradient written (${v[0].background})`);

  // Remove it again.
  await rooms.locator('[data-choice="background"]').click();
  check((await flow.getByText("heeft al een achtergrond").count()) >= 1, "pages with a background are marked");
  await next();
  await flow.locator('[data-kind="none"]').click();
  await next();
  await flow.getByRole("button", { name: "Achtergrond weghalen" }).click();
  await yes();
  await tab.waitForTimeout(400);
  v = await views();
  check(v[0].background === undefined && v[1].background === "#2b2f36", "background removed from that page only");

  // Delete the uploaded photo, after asking.
  await rooms.locator('[data-choice="background"]').click();
  await next();
  await flow.getByRole("button", { name: "Foto verwijderen Strand.png" }).click();
  check((await flow.getByText(/van de schijf/).count()) === 1, "asks before deleting a photo");
  await yes();
  await tab.waitForTimeout(300);
  check((await flow.getByRole("button", { name: "Strand.png", exact: true }).count()) === 0, "photo deleted");
  check((await flow.getByRole("button", { name: /Foto verwijderen sunset/ }).count()) === 0, "photos in /config/www can't be deleted here");

  check(errors.length === 0, `background: no errors ${errors.join(" | ")}`);
  if (shots) await tab.screenshot({ path: `${shots}/background.png` });
  await ctx.close();
}

// English: a Home Assistant set to English gets an English panel, everywhere.
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const tab = await ctx.newPage();
  const errors = [];
  tab.on("pageerror", (err) => errors.push(err.message));
  await tab.goto(`${base}?lang=en`);
  const panel = tab.locator("style-studio-panel");
  await panel.locator("nav.tabs").waitFor();
  const names = ["Themes", "Sidebar", "Rooms and pop-ups", "Climate", "People", "Check and restore"];
  const shown = (await panel.locator("nav.tabs button").allInnerTexts()).map((t) => t.trim());
  check(JSON.stringify(shown) === JSON.stringify(names), `tab names in English (${shown})`);

  // Words from the Dutch interface; demo data (room names) isn't in this list.
  const dutch = /\b(Opslaan|Volgende|Terug|Annuleren|Wat wil je|Meer opties|Welke|Voorbeeld|Zijbalk|Klimaat|Per persoon|Controle|Thema's|Kamers en|Achtergrond|Foto's|Kleuren|Pagina|Weergave|Toevoegen|Verwijderen|Bezig|Zonder)\b/;
  const rest = async (label) => {
    await tab.waitForTimeout(500);
    const text = (await tab.evaluate(probe)).panelText;
    const found = text.match(dutch)?.[0];
    check(!found, `${label}: no Dutch words${found ? ` (found "${found}")` : ""}`);
    return text;
  };
  const go = async (name) => {
    await panel.locator("nav.tabs").getByRole("button", { name, exact: true }).click();
    await tab.waitForTimeout(300);
    const leave = panel.getByRole("button", { name: "Yes" });
    if (await leave.count()) await leave.click();
  };

  await go("Themes");
  check((await rest("themes start")).includes("What do you want to do?"), "English start question");
  await panel.locator('ss-themes-tab [data-choice="new"]').click();
  await panel.locator("ss-themes-tab").getByRole("button", { name: "Next" }).click();
  await rest("themes, colors step");
  await go("Sidebar");
  await rest("sidebar");
  await go("Rooms and pop-ups");
  await rest("rooms start");
  for (const choice of ["edit", "add", "card", "background"]) {
    await panel.locator(`ss-rooms-tab [data-choice="${choice}"]`).click();
    await rest(`rooms: ${choice}`);
    await panel.locator("ss-rooms-tab").getByRole("button", { name: "Back", exact: true }).click();
  }
  await go("Climate");
  await rest("climate");
  await go("People");
  await rest("people");
  await go("Check and restore");
  await rest("check");
  check(errors.length === 0, `English: no errors ${errors.join(" | ")}`);
  if (shots) await tab.screenshot({ path: `${shots}/english.png` });
  await ctx.close();
}

// Check and restore: conflicts, fixed styles in dashboards, backups.
{
  const { ctx, tab, panel, errors } = await open(1920, "", "Controle en herstel");
  const checkTab = panel.locator("ss-check-tab");
  check((await checkTab.getByText(/card-mod de zijbalk/).count()) === 1, "card-mod sidebar theme flagged");
  check((await checkTab.getByText(/card-mod de zijbalk/).count()) === 1, "only themes in use are flagged");
  check((await checkTab.getByText(/niemand gebruikt (ze|het) nu: Frosted Glass/).count()) === 1, "unused themes in one line");
  check((await checkTab.getByText(/Joyce · Companion-app · 0.1.0/).count()) === 1, "device listed");
  check((await checkTab.getByText(/Nog niet geopend sinds de update/).count()) === 1, "not opened since the update is no warning");

  // Browser Mod's leftover setting in this browser.
  await tab.evaluate(() => localStorage.setItem("isDefaultPanelManaged", "true"));
  await checkTab.getByRole("button", { name: "Opnieuw controleren" }).click();
  await checkTab.getByRole("button", { name: "Oplossen" }).click();
  await checkTab.getByRole("button", { name: "Ja" }).click();
  check((await tab.evaluate(() => localStorage.getItem("isDefaultPanelManaged"))) === null, "Browser Mod conflict fixed");

  await checkTab.getByRole("button", { name: "Dashboards doorzoeken" }).click();
  await tab.waitForTimeout(300);
  check((await checkTab.getByText("var(--primary-color, #D99A1E)").count()) === 1, "fixed color mapped to the theme color");
  check((await checkTab.getByText("var(--ha-card-border-radius, 24px)").count()) === 1, "fixed corner mapped to the card radius");
  check((await checkTab.getByText("geen themakleur met deze waarde").count()) === 1, "unknown color left alone");
  await checkTab.getByRole("button", { name: "Gekozen voorstellen toepassen" }).first().click();
  await checkTab.getByRole("button", { name: "Ja" }).click();
  await tab.waitForTimeout(500);
  let lovelace = await tab.evaluate(() => window.__lovelace());
  const energy = JSON.stringify(lovelace.dashboards.__main.views[1]);
  check(energy.includes("var(--primary-color, #D99A1E)") && energy.includes("var(--ha-card-border-radius, 24px)"), "suggestions applied");
  check(energy.includes("#123456"), "color without suggestion kept");
  check(lovelace.backups.length === 1, "backup before applying");

  await checkTab.locator("details", { hasText: "Dashboards" }).getByRole("button", { name: "Terugzetten" }).first().click();
  await checkTab.getByRole("button", { name: "Ja" }).click();
  await tab.waitForTimeout(500);
  lovelace = await tab.evaluate(() => window.__lovelace());
  check(!JSON.stringify(lovelace.dashboards.__main).includes("var(--primary-color"), "dashboard backup restored");
  check(errors.length === 0, `check: no errors ${errors.join(" | ")}`);
  if (shots) await tab.screenshot({ path: `${shots}/check.png` });
  await ctx.close();
}

// Themes at phone width.
{
  const { ctx, tab, panel, errors } = await open(430, "", "Thema's");
  await preset(panel.locator("ss-themes-tab"), "sand");
  await panel.locator("ss-themes-tab").getByRole("button", { name: "Volgende" }).click();
  await tab.waitForTimeout(200);
  check(errors.length === 0, `themes on a phone: no errors ${errors.join(" | ")}`);
  if (shots) await tab.screenshot({ path: `${shots}/themes-430.png` });
  await ctx.close();
}

await browser.close();
server.close();
console.log(failures ? `${failures} failed` : "all passed");
process.exit(failures ? 1 : 0);
