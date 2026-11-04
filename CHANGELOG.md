# Changelog

## [0.9.0]

### Changed

- **Nothing changes on a screen that is open.** Per-person themes and sidebars
  are applied when a page opens, no longer pushed live to other people's
  browsers.
- Browsers report to Style Studio at most every six hours, and only when
  something changed.
- Uploaded background photos get an unguessable file name.
- The sidebar title and the repair notification follow the Home Assistant
  language; a check keeps the Dutch and English texts in step.
- The repository is now called `Home-Assistant-Stylestudio`; the old address
  redirects.


## [0.8.0]

### New

- **Backgrounds for pages.** Under *Kamers en pop-ups* › *Een achtergrond
  instellen*: a photo, a color or a gradient on one, several or all pages of a
  dashboard, with a preview, a slider to make a photo darker or lighter, and
  the dashboard backed up first. Photos can be uploaded (big ones are shrunk to
  2560 px first), or picked from `/config/www`; uploaded ones can be deleted
  again, after asking.
- The theme editor has `lovelace-background` (*Dashboardpagina's*) for one
  background on every page.

## [0.7.0]

### Changed

- **Step by step.** Every tab starts with "Wat wil je doen?" and a few big
  buttons, then short numbered steps with only the current one open, the
  preview beside it, and plain words (page, under which heading). Settings
  most people never need moved under "Meer opties".
  - Themes: change my theme, make a new one, or use one (for me, or as the
    default for everyone).
  - Rooms: change a room, add a room, add a card, or make a whole page.
  - Climate: which air conditioner, what goes in it, where.
  - Sidebar: shape, glass, active page, phone, groups.
  - Per person: just the theme; sidebar order and copying under "Meer opties".

### New

- **Icon picker**: room and device icons in a grid, with search in Dutch and
  English and through every icon Home Assistant has.

## [0.6.1]

### Fixed

- Check and restore warned about every installed theme with card-mod, also
  ones nobody uses. Now only themes in use count (the default theme, what
  devices report, and what Per persoon sets). With Glass Sidebar 1.4 or newer,
  which switches off a theme's own sidebar styling, it is a note, not a
  warning; unused themes are listed in one line.
- Devices that haven't opened Home Assistant since an update were listed as
  using old files. Style Studio now remembers when a version started; those
  devices are listed apart, and only a device that reports an old version
  after the update counts as a problem.

## [0.6.0]

### New

- **Rooms on your own dashboards.** The rooms tab now finds the room tiles and
  pop-ups already on a dashboard, also hand-made button-cards with
  `const NAME/ICON/LIGHTS` templates, and changes name, icon, lights and the
  air conditioning button in place; their own design stays.
- **Add rooms** from your areas or by hand, into the view and section you
  pick, with the design of a room that's already there.
- **Other cards**: greeting, scenes, house status and weather.
- **Icon colors** in the theme editor: icons follow a calm tone of the accent
  (or a color of your own) instead of Home Assistant's default blue, also in
  button-card and older cards; on-colors for helpers, automations, scripts,
  sensors, media players and people.
- Check and restore maps Home Assistant's default colors written into cards,
  such as the blue `#44739e`, to theme variables.
- New pop-ups in Bubble Card 3.2's standalone format, with a choice for the
  old one.

### Fixed

- The main dashboard was listed twice on newer Home Assistant versions.
- Checkboxes in re-sorted lists could show the wrong state.
- Devices not seen for two weeks no longer count as running old files.

## [0.5.1]

### Fixed

- **Themes didn't appear with `themes: !include_dir_named themes`.** That
  setting reads one theme per file, and Style Studio wrote all themes into one
  file. Home Assistant then couldn't reload any theme, so a new theme never
  showed up in Per persoon or in the profile; after a restart the whole
  interface didn't start. Style Studio now reads configuration.yaml and writes
  one file per theme ("<name>.yaml") for that setting, and one
  style_studio.yaml for `!include_dir_merge_named`.
- At start, files in the wrong format are rewritten (with a backup). Style
  Studio now starts even when the frontend didn't, to do exactly that; restart
  once more afterwards.
- When Home Assistant can't load the themes after a save, the previous files
  are put back and the panel shows Home Assistant's message.
- Per persoon says which of your themes aren't loaded, and why they're missing.
- Theme names are limited to characters that work as a file name.

## [0.5.0]

All seven parts of the plan are in.

### New

- **Check and restore** tab: card-mod sidebar styles in themes, Browser Mod's
  default_dashboard_plugin_conflict (with a fix for this browser), themes that
  aren't loaded, and devices or companion apps on old files.
- Finds fixed colors and corners in dashboard cards and replaces the ones you
  pick with theme variables (keeping the old value as fallback), after a
  backup.
- Restore any kept version of themes, Glass Sidebar and per-person settings,
  and any dashboard backup.

## [0.4.0]

### New

- **Rooms and pop-ups** tab: room tiles per floor from your areas and floors,
  each opening a Bubble Card pop-up with its lights and, when there is one, a
  button to the room's climate pop-up. Names, icons, lights, order, and solid
  or glass pop-ups with width, phone height and header buttons. Makes one
  view on a dashboard, a column per floor, after a backup; making it again
  replaces only that view.

## [0.3.0]

### New

- **Climate** tab: a Bubble Card pop-up per air conditioner with temperature
  minus and plus, modes, fan speeds and swing switches, built from
  button-cards. Only what the device reports is offered; missing parts are
  explained. Preview with the real cards in Home Assistant. Puts the pop-up and
  an opener button on a dashboard view after a backup of that dashboard, and
  replaces an earlier one instead of adding a second.
- Dashboard backups in `config/style_studio/backups/dashboards/`.
- The theme editor starts from the theme you use now instead of something new.
  Colors that come fixed from a copied theme are shown, with a button to let
  them follow the quick settings.
- Link to Glass Sidebar's own settings page (1.5 and newer).

### Fixed

- Group icons and "start collapsed" from Glass Sidebar 1.5 are kept when
  saving from the Sidebar tab.

## [0.2.0]

### New

- **Per person** tab: a theme and a sidebar order for each person, or copy
  everything from someone else. A small script applies it in their own
  browser the next time they open Home Assistant, once per device, and reports
  back what each device uses and which version it runs.
- **Use for me** puts a saved theme on your own screen right away.

### Fixed

- The panel now scrolls by itself. In Home Assistant the Save bar could end up
  out of reach, so changes seemed to do nothing.
- With unsaved changes, *New theme* asks right below the buttons instead of
  in the bar at the bottom.

## [0.1.0]

First version: phase 1 (base), phase 2 (sidebar) and phase 3 (themes).

- Integration with a config flow and the **Stijl** panel.
- **Themes** tab: set every color in Home Assistant. Start from a preset (sand and yellow,
  pink, dark, glass) or a copy of an existing theme; a few base colors work out all others,
  and every variable can be set on its own, plus own variables. Solid or glass pop-ups with
  an opacity slider. Preview of a whole screen, optionally applied to your own browser before
  saving. Saves to `themes/style_studio.yaml` with a backup, reloads themes, and can make a
  theme the default. Never writes your own theme files.
- **Sidebar** tab that sets up the Glass Sidebar add-on (1.4.0 or newer), its own repository:
  shape, glass, active page, phone and groups, with a preview at phone, tablet and desktop width
  on a light or dark page.
- Every save keeps the previous Glass Sidebar options, with a button to restore them.
- The panel says when Glass Sidebar is missing, not added, disabled or too old, and when a
  screen runs an old version of the panel.
