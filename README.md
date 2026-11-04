<img src="custom_components/style_studio/brand/icon.png" alt="" width="96" align="right">

# Style Studio for Home Assistant

[![HACS Custom](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)](https://hacs.xyz/docs/faq/custom_repositories)
![Version](https://img.shields.io/badge/version-0.9.0-F59E0B)
![Home Assistant](https://img.shields.io/badge/Home%20Assistant-2026.10%2B-18BCF2)

## ☕ Support my work

Style Studio is free and open source, made in my spare time. If it makes your Home Assistant nicer to use, a coffee helps me keep building.

[![Support me on Ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/kolkiesdesign)


Set the look of your whole Home Assistant from one panel: colors, icons,
backgrounds, room tiles and pop-ups, per person. Pick a few things, see the
result right away, and save. No YAML, no CSS.

Style Studio is the app. Its add-on
[Glass Sidebar](https://github.com/roykolk20-design/Home-Assistant-Glasssidebar)
turns the sidebar into a floating glass panel. Together they make the whole;
each lives in its own repository and installs on its own.

![Theme editor](images/themes.png)

> The images on this page come from a test page that mimics Home Assistant.
> Your own panels, names and dashboards will differ. The panel is in Dutch,
> with English for everyone whose Home Assistant is set to another language.

## Features

- **Every color in Home Assistant.** Start from your current theme, a preset
  (sand and yellow, pink, dark, glass) or a copy of a theme you already have.
  Choose a background, card, text, accent, sidebar and icon color; Style Studio
  works out all the others: top bar, sidebar, cards, Bubble Card pop-ups,
  dialogs, switches, sliders, input fields, states, icons, the climate ring and
  the weather card. Icons follow your accent instead of Home Assistant's
  default blue, also in button-card.
- **Change everything.** Each of those colors can also be set on its own, with
  any CSS value: hex, `rgba()` or a gradient. Variables that aren't listed,
  for example from another custom card, can be added too.
- **Solid or glass pop-ups**, with a slider for how see-through they are.
  Also card corners, shadow and card opacity.
- **Preview first.** A small Home Assistant screen shows every change. Turn on
  *Also show on this whole screen* to try the theme on your real Home
  Assistant in your own browser, before anyone else sees it.
- **Safe saving.** Themes go to their own file(s), in the format your
  `configuration.yaml` loads. Your own theme files are only read, never
  changed. Every save makes a backup and can be undone from the panel.
- **Per person**: give everyone their own theme, for example warm sand for one
  and soft pink for another. It is applied when that person opens Home
  Assistant, once on each device, so they can still pick something else in
  their profile. The panel shows what each person uses and when it was applied.
- **Backgrounds**: a photo, a color or a gradient behind a page of your
  dashboard, on one page or on all of them. Upload a photo (big ones are
  shrunk so the dashboard keeps loading fast), pick one you already have in
  `/config/www`, make it darker or lighter so text stays readable, and see it
  in the preview first.
- **Rooms and pop-ups on your own dashboards**: Style Studio finds the room
  tiles and pop-ups already there, also hand-made ones with button-card
  templates, and changes their name, icon (picked from a grid, or searched),
  lights and air conditioning in place while their own design stays. New rooms
  (from your areas, or made by hand) go under the heading you pick and copy the
  design of a room that's already there. Also a greeting, scenes, house status
  and weather card, or a whole page of rooms per floor at once.
- **Climate**: a pop-up per air conditioner with a big minus and plus for the
  temperature, buttons for the modes and fan speeds, and swing switches. Only
  what your air conditioner reports is offered; what's missing is explained.
- **Check and restore**: finds what gets in the way of the look (card-mod
  styles, Browser Mod's leftover default-dashboard setting, themes that aren't
  loaded, devices on old files), finds colors and corners written into
  dashboard cards and replaces them with theme variables, and restores any kept
  version or dashboard backup.
- **Sidebar** settings for the Glass Sidebar add-on: floating, corners, blur,
  highlight, phone menu and groups with headings, with a preview at phone,
  tablet and desktop width.
- **Step by step.** Every tab starts with "what do you want to do?" and big
  buttons, then short numbered steps with the preview beside them.

## Screenshots

| Pink theme, glass pop-ups | Dark theme |
| --- | --- |
| ![Pink theme on the whole screen](images/pink.png) | ![Dark theme](images/dark.png) |

| Change everything | Start (themes) |
| --- | --- |
| ![Every color by group](images/all-colors.png) | ![What do you want to do?](images/presets.png) |

| Per person | Sidebar (Glass Sidebar add-on) |
| --- | --- |
| ![Per person](images/people.png) | ![Sidebar settings](images/sidebar.png) |

| Rooms and pop-ups | Background for a page |
| --- | --- |
| ![Changing a room, with the icon picker](images/rooms.png) | ![Background for a page](images/background.png) |

| Climate | Check and restore |
| --- | --- |
| ![Climate pop-up](images/climate.png) | ![Check and restore](images/check.png) |

| Phone |
| --- |
| ![Phone](images/mobile.png) |

## Requirements

- Home Assistant 2026.10 or newer, and [HACS](https://hacs.xyz).
- For rooms and climate pop-ups: [button-card](https://github.com/custom-cards/button-card)
  and [Bubble Card](https://github.com/Clooos/Bubble-Card), both from HACS.
  Without them the themes, backgrounds, per person and check tabs still work.
- Optional: the [Glass Sidebar](https://github.com/roykolk20-design/Home-Assistant-Glasssidebar)
  add-on for the floating glass sidebar.

## Installation

### Before you start

Home Assistant must load themes from a folder. Most setups already do; if not,
add this to `configuration.yaml` and restart:

```yaml
frontend:
  themes: !include_dir_merge_named themes
```

Both ways of loading a theme folder work, and Style Studio follows yours:

- `!include_dir_merge_named themes`: all Style Studio themes go into
  `themes/style_studio.yaml`.
- `!include_dir_named themes`: every theme gets its own file,
  `themes/<name>.yaml`, because that setting reads one theme per file.

The panel warns when a saved theme isn't loaded.

### HACS

[![Open your Home Assistant instance and open this repository in HACS.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=roykolk20-design&repository=Home-Assistant-Stylestudio&category=integration)

Click the button above, or add it by hand:

1. In Home Assistant, open **HACS**.
2. Open the menu (⋮) in the top right and choose **Custom repositories**.
3. Add `https://github.com/roykolk20-design/Home-Assistant-Stylestudio` with type
   **Integration**.
4. Search for **Style Studio** in HACS and download it.
5. Restart Home Assistant.
6. Go to **Settings → Devices & services → Add integration** and choose
   **Style Studio**.
7. The **Stijl** panel appears in the sidebar (for administrators).

For the glass sidebar, install the Glass Sidebar add-on the same way. Its
settings then show up in the panel's *Zijbalk* tab.

### Manual

1. Download this repository (green **Code** button → **Download ZIP**).
2. Copy `custom_components/style_studio` into the `custom_components` folder of
   your Home Assistant configuration.
3. Restart Home Assistant and add the integration as in step 6 above.

## Using it

Open **Stijl** in the sidebar. Every tab starts with **"Wat wil je doen?"**
(what do you want to do?) and a few big buttons. After a choice you go
through short, numbered steps; only the current step is open, with
**Volgende** (next) to go on, and the preview beside it. Settings most people
never need sit under **Meer opties** (more options). **Terug** brings you back
to the start. Icons are picked from a grid or by searching, for example
"badkamer" or "bath". Nothing on a dashboard or in a theme changes until the
last step, and every change to a dashboard makes a backup first.

![What do you want to do?](images/rooms-start.png)

### Themes

Choose **Een nieuw thema maken**, **Mijn thema aanpassen** (a theme you made
here) or **Een thema gebruiken**.

1. **Begin met**: your current theme, a preset, or a copy of a theme you
   already have.
2. **Kleuren**: background, cards, text, accent, sidebar, icons and top bar.
   Everything else follows from these.
3. **Vorm en pop-ups**: card corners, shadow, card opacity, and solid or glass
   pop-ups.
4. **Naam en opslaan**: give it a name and save. Under *Meer opties* is *Alles
   aanpassen*: any single color by group (an empty field uses the worked-out
   color, shown in grey), your own variables, and deleting the theme.

Watch the preview, or switch on **Ook tonen op dit hele scherm** to try it on
your whole screen before saving. After saving, **Voor mij gebruiken** (use for
me) shows it on your screen, and **Standaard voor iedereen** makes it the
default for everyone who didn't choose a theme themselves.

*Vorige versie terugzetten* undoes the last save or delete. Older copies of the
theme files are kept in `config/style_studio/backups/`.

A few places in Home Assistant's own settings pages use fixed colors that no
theme can change.

### Per person

The **Per persoon** tab lists everyone with a login. For each person pick a
**theme**, then choose **Opslaan**. Each person's browser applies it the next
time they open Home Assistant, the way the profile page does. A green
*Toegepast* (applied) appears once their device has reported back. *Zelf
kiezen* leaves it to the person. Under *Meer opties* you can also copy a
person's sidebar order to someone else, or copy everything from one person to
another.

This needs a small script in every browser, which Style Studio adds by
itself. It also tells the panel which version each device runs, so you can
see when the companion app still uses old files.

### Rooms and pop-ups

Under **Kamers en pop-ups** choose what to do. Style Studio works on a
dashboard you pick, and lists the rooms on it: every Bubble Card pop-up
(`#l-woonkamer`) with the tile that opens it. Hand-made ones count too,
including button-card templates with `const NAME`, `const ICON` and
`const LIGHTS`.

- **Een kamer aanpassen**: name, icon, lights and the air conditioning button.
  Only those values change in your own cards; styles and templates stay. New
  light cards in the pop-up copy the look of the first one.
- **Een kamer toevoegen**: pick the page and heading, then a room from your
  areas (or *Een andere kamer*), name, icon, lights and air conditioning. The
  new room looks like one that's already there, or you choose Style Studio's
  own design under *Meer opties*.
- **Een kaart toevoegen**: a greeting with the day, lights on, who's home and
  the temperature; scenes; house status (low batteries, devices offline);
  weather. These are Home Assistant's own cards.
- **Een achtergrond instellen**: see below.
- **Een complete pagina maken**: one page with a column per floor from your
  areas. Making it again replaces only that page.

The preview shows the real cards in Home Assistant.

**Bubble Card 3.2** writes pop-ups in a new, "standalone" format (the content
in `cards:` instead of a vertical-stack). New pop-ups use that format; choose
*Oud* under *Pop-up-vorm* for an older Bubble Card. Rooms in either format
are found and changed.

### Backgrounds

Under **Kamers en pop-ups** choose **Een achtergrond instellen**:

1. **Welke pagina?** The pages of your dashboard; tick one, several, or all.
   Pages that already have a background are marked.
2. **Welke achtergrond?** A **photo** (upload one, or pick a picture from the
   list; photos in `/config/www` appear there by themselves), a **color**, a
   **gradient**, or **no background** to remove it.
3. **Hoe moet het eruit zien?** (photos) Cover, show whole or repeat; **darker
   or lighter** with a slider; stay in place when you scroll; and where on the
   screen it sits.
4. **Opslaan.** The dashboard is backed up first, and only the pages you ticked
   change.

Uploaded photos live in `config/style_studio/backgrounds/` and are served at
`/style_studio_backgrounds/…`, without a login, like `/local`: browsers load a
background before anything else. Don't upload anything private. Photos can be
JPG, PNG, WEBP, GIF or AVIF up to 15 MB; bigger pictures are shrunk to 2560
pixels first.

For **all pages at once**, set `lovelace-background` in your theme (*Alles
aanpassen › Dashboardpagina's*): a color, a gradient or `url(...)`. A page's own
background wins over the theme's.

### Climate

The **Klimaat** tab makes a pop-up per `climate` entity in three steps:

1. **Welke airco?**
2. **Wat moet erin?** Temperature with minus and plus, the modes, fan, and
   swing. Parts your air conditioner doesn't report are greyed out with the
   reason; louver positions, for example, aren't passed on by the LG ThinQ
   integration.
3. **Waar komt hij?** The dashboard and page. The name and address (for
   example `#airco-woonkamer`) are under *Meer opties*.

Style Studio saves a backup of the dashboard to
`config/style_studio/backups/dashboards/`, then adds the pop-up and an opener
button. Doing it again replaces the earlier pop-up instead of adding a second
one. Dashboards in YAML mode can't be changed; copy the card code instead. The
active button uses `--state-climate-active-color`, so it follows each person's
theme.

### Check and restore

The **Controle en herstel** tab checks:

- themes in use that style the sidebar with card-mod. With Glass Sidebar 1.4 or
  newer this is a note, since it switches that part off; other installed themes
  with card-mod are listed in one line;
- Browser Mod's `default_dashboard_plugin_conflict` in this browser, with a
  button to clear the leftover setting;
- Style Studio themes that Home Assistant doesn't load;
- devices and companion apps that still run old files after an update, per
  person. Devices that haven't opened Home Assistant since the update are
  listed apart; they load the new files by themselves.

**Fixed colors and corners.** Colors and corners written into a card (common
in button-card, Bubble Card and card-mod styles) don't follow any theme, so a
theme seems to do nothing on those dashboards. *Dashboards doorzoeken*
lists them per dashboard. A color that matches a color of the theme you use
now gets that theme variable as suggestion, for example
`var(--primary-color, #F59E0B)`, and Home Assistant's default blue (`#44739e`)
becomes `var(--state-icon-color, #44739e)`; corners get
`var(--ha-card-border-radius, 24px)`. The old value stays as a fallback.
Choose per value what to replace; every dashboard is backed up first.

**Backups and history.** Every dashboard backup and every kept version of
themes, Glass Sidebar settings and per-person settings is listed, and any of
them can be restored. What is there now is kept first.

### Sidebar

With the Glass Sidebar add-on installed, the **Zijbalk** tab sets its shape,
glass, active page, phone menu and groups, in that order. Glass Sidebar 1.5 and
newer has its own, fuller settings page (styles, tint, icons per group, quick
menu); the tab links to it, and keeps what you set there. Changes apply to
everyone after **Opslaan**. Without the add-on, the tab explains how to add it;
the sidebar colors are part of your theme either way.

## Troubleshooting

**My theme says "niet geladen" (not loaded).**
Home Assistant doesn't read the `themes` folder. Add the `frontend:` lines from
*Before you start* and restart.

**Saving says the file already exists.**
There is a `themes/style_studio.yaml` that Style Studio didn't make. It never
overwrites such a file; rename or remove it first.

**A new theme doesn't show up in my profile or in Per persoon.**
Home Assistant couldn't load the themes. Style Studio then puts your previous
files back and shows Home Assistant's message. Check that the theme name only
uses letters, digits, spaces and `- _ ( ) & + '`.

**A room isn't found on my dashboard.**
Style Studio looks for a Bubble Card pop-up with a `hash` like `#l-woonkamer`.
Dashboards in YAML mode can't be read or changed. If a hand-made room still
isn't found or is changed wrongly, open an issue with the YAML of its tile and
pop-up; every change has a backup you can restore under *Controle en herstel*.

**The background doesn't show.**
Open the dashboard page again (a background belongs to a page, not the whole
dashboard) and reload. For a photo that isn't uploaded here, check that its
address opens in your browser.

**The panel looks old after an update.**
Reload the page. In the companion app: *Settings → Companion app →
Troubleshooting → Reset frontend cache*. The panel warns when this is needed.

## Uninstall

1. **Settings → Devices & services → Style Studio → ⋮ → Delete**. The panel
   disappears.
2. Remove it in HACS (or delete `custom_components/style_studio`) and restart.
3. Your themes stay in `themes/` until you delete the files Style Studio made
   (they start with the line `# Made by Style Studio.`). Photos stay in
   `config/style_studio/backgrounds/`. Backgrounds and rooms you put on
   dashboards stay in the dashboards.

## Development

```sh
npm install
npm run build              # frontend/src → custom_components/style_studio/www/studio-panel.js
npm run check              # version is the same in manifest.json, const.py, version.js and person.js
npm run smoke              # Edge at 430, 768 and 1920 px against dev/harness.html
node dev/serve.mjs         # then open http://localhost:8123/dev/harness.html
node dev/screenshots.mjs   # the images in images/
node dev/brand/render.mjs  # the brand icons from dev/brand/icon.svg
```

`dev/harness.html` mimics Home Assistant with a fake backend and loads Glass
Sidebar's real script from `../Home assistant setting bar` (or
`GLASS_SIDEBAR_DIR`). Home Assistant itself doesn't run on Windows, so the
backend tests run in Docker; the second mount is optional and adds tests
against the real Glass Sidebar:

```sh
docker build -t style-studio-test -f dev/Dockerfile.test dev
docker run --rm -v "$PWD:/src:ro" -v "$PWD/../Home assistant setting bar:/glass:ro" style-studio-test
```

The mock can't tell you how the real Home Assistant behaves, so there are
checks against a real one too. `dev/real-ha.mjs` starts Home Assistant in
Docker (port 8124) with Style Studio, Glass Sidebar, demo lights and air
conditioners, the real button-card and Bubble Card, and a hand-made dashboard,
onboarded with a test user (`node dev/real-ha.mjs stop` removes it). Then:

```sh
node dev/real-ha-check.mjs        # make a theme, pick it for a person
node dev/real-ha-rooms.mjs        # change and add rooms, add a card, fix fixed colors
node dev/real-ha-background.mjs   # upload a photo, set it on a page, check it is drawn
```

`THEMES_LAYOUT=named` switches to `!include_dir_named`. Add a screenshot folder
as the argument to keep pictures of what the browser saw.

To release: raise the version in the four places `npm run check` names, update
`CHANGELOG.md`, build, and push a tag `vX.Y.Z`.

## License

MIT
