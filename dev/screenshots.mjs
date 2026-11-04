// Makes the README images in images/ from dev/harness.html.
// Run: node dev/screenshots.mjs
import { fileURLToPath } from "node:url";
import { chromium } from "playwright-core";
import { server } from "./serve.mjs";

const base = "http://127.0.0.1:8123/dev/harness.html";
const out = (name) => fileURLToPath(new URL(`../images/${name}`, import.meta.url));
const browser = await chromium.launch({ channel: "msedge" });

async function open(width, height, tabName = "Themes") {
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 2 });
  await page.goto(`${base}?lang=en`);
  const panel = page.locator("style-studio-panel");
  await panel.locator("nav.tabs").waitFor();
  if (tabName !== "Themes") await panel.locator("nav.tabs").getByRole("button", { name: tabName }).click();
  await page.waitForTimeout(500);
  return { page, panel, themes: panel.locator("ss-themes-tab") };
}

const next = (tab) => tab.getByRole("button", { name: "Next" }).click();

// A new theme from a preset, at a given step (0 = start, 1 = colors, ...).
async function newTheme(themes, key, steps) {
  await themes.locator('[data-choice="new"]').click();
  if (key) await themes.locator(`[data-preset="${key}"]`).click();
  for (let i = 0; i < steps; i += 1) await next(themes);
}

// Start screen of the theme editor.
{
  const { page } = await open(1280, 800);
  await page.screenshot({ path: out("presets.png") });
  await page.close();
}

// Editing a theme: the colors step, with the pop-up in the preview.
{
  const { page, themes } = await open(1280, 800);
  await newTheme(themes, "sand", 1);
  await page.waitForTimeout(300);
  await page.screenshot({ path: out("themes.png") });

  // Every variable, under "More options" in the last step.
  await next(themes);
  await next(themes);
  await themes.locator("summary", { hasText: "More options" }).click();
  for (const group of ["Top bar", "Pop-ups (Bubble Card)"]) {
    await themes.locator("summary", { hasText: group }).click();
  }
  await themes.locator("summary", { hasText: "Top bar" }).scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await page.screenshot({ path: out("all-colors.png") });
  await page.close();
}

// The pink theme on the whole screen, before saving.
{
  const { page, themes } = await open(1280, 800);
  await newTheme(themes, "pink", 2);
  await themes.getByRole("radio", { name: "Glass" }).click();
  await themes.getByRole("checkbox", { name: /Also show on this whole screen/ }).check();
  await page.waitForTimeout(300);
  await page.screenshot({ path: out("pink.png") });
  await page.close();
}

// The dark preset.
{
  const { page, themes } = await open(1280, 800);
  await newTheme(themes, "dark", 1);
  await themes.getByRole("checkbox", { name: /Also show on this whole screen/ }).check();
  await page.waitForTimeout(300);
  await page.screenshot({ path: out("dark.png") });
  await page.close();
}

// Sidebar tab with the Glass Sidebar add-on.
{
  const { page } = await open(1280, 800, "Sidebar");
  await page.screenshot({ path: out("sidebar.png") });
  await page.close();
}

// Per person, after picking a theme for Roy and Joyce.
{
  const { page, panel } = await open(1280, 800, "People");
  const people = panel.locator("ss-people-tab");
  await people.locator(".intro").waitFor();
  await page.waitForTimeout(300);
  await people.getByRole("combobox", { name: "Theme (Roy)" }).selectOption("Light Warm");
  await people.getByRole("combobox", { name: "Theme (Joyce)" }).selectOption("Light Pink");
  await people.getByRole("button", { name: "Save" }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: out("people.png") });
  await page.close();
}

// Climate pop-up for the LG air conditioner, step 2.
{
  const { page, panel } = await open(1280, 800, "Climate");
  const climate = panel.locator("ss-climate-tab");
  await climate.locator(".tile", { hasText: "LG Living room" }).click();
  await next(climate);
  await page.waitForTimeout(400);
  await page.screenshot({ path: out("climate.png") });
  await page.close();
}

// Rooms: what do you want to do, and changing a hand-made room.
{
  const { page, panel } = await open(1280, 800, "Rooms and pop-ups");
  const rooms = panel.locator("ss-rooms-tab");
  await rooms.locator(".choice").first().waitFor();
  await page.screenshot({ path: out("rooms-start.png") });
  await rooms.locator('[data-choice="edit"]').click();
  await rooms.locator(".tile", { hasText: "Living room" }).click();
  await next(rooms);
  await rooms.getByRole("button", { name: "Choose another icon" }).click();
  await page.waitForTimeout(400);
  await page.screenshot({ path: out("rooms.png") });
  await page.close();
}

// A background for a page: a photo, in the preview.
{
  const { page, panel } = await open(1280, 800, "Rooms and pop-ups");
  const rooms = panel.locator("ss-rooms-tab");
  await rooms.locator('[data-choice="background"]').click();
  const flow = rooms.locator("ss-background-flow");
  await flow.locator(".tile").first().waitFor();
  await next(flow);
  await flow.getByRole("button", { name: "sunset.svg" }).click();
  await page.waitForTimeout(400);
  await page.screenshot({ path: out("background.png") });
  await page.close();
}

// Check and restore, after searching the dashboards.
{
  const { page, panel } = await open(1280, 800, "Check and restore");
  const checkTab = panel.locator("ss-check-tab");
  await checkTab.getByRole("button", { name: "Search dashboards" }).click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: out("check.png") });
  await page.close();
}

// Phone.
{
  const { page, themes } = await open(430, 860);
  await newTheme(themes, "sand", 1);
  await page.waitForTimeout(300);
  await page.screenshot({ path: out("mobile.png") });
  await page.close();
}

await browser.close();
server.close();
console.log("images written");
