# AGENTS.md

Personal learning/sharing monorepo for **fun-gis**: Cesium-based 3D GIS
visualization libraries (Vue 3 + TypeScript + Vite), managed with pnpm
workspaces. Goal is reusable, publishable packages plus demo apps.

## Workspace layout

- `packages/plot` (`@fun-gis/draw`; directory renamed from `packages/draw`
  in commit `e8c1a7e`, npm name unchanged) — the publishable Entity-based
  plotting library. The plot core sits directly under `src/`: `base.ts`
  (Base class — control points, style merge, drag; subscribes to an
  injected `MapEventSource` instead of creating per-instance
  ScreenSpaceEventHandlers), `events.ts` (per-instance
  `drawStart/drawUpdate/drawEnd/editStart/editEnd/drawCancel`),
  `interface.ts` (incl. serializable `PlotData`), `utils.ts`, and 19 shapes
  grouped as `arrow/` (9), `line/` (2), `polygon/` (8). The unified facade
  lives in `src/plot-manager.ts` (`PlotManager`: activate/deactivate/
  cancel/createFromData/getData, ESC cancel, unified `{type, instance,
  data}` events) + `src/registry.ts` (`ShapeRegistry` — 19 built-ins and
  custom shapes via one `register` channel; `Reactangle` is an alias of
  `Rectangle`) + `src/event-source.ts` (`MapEventSource` contract keyed on
  Cesium `ScreenSpaceEventType` members with multicast semantics; default
  per-viewer shared handler via `getSharedEventSource`/`
  `destroySharedEventSource`). `src/index.ts` exports the facade,
  registry, event-source, shape classes + types + legacy
  `createGeometryFromData` (default export `CesiumPlot` registry object).
  The former primitive backend and unified `DrawTool` facade were demoted
  to `src/references/` (`drawMethods/`, `drawTool/`) — reference-only,
  **no longer exported from the package entry** (the old facade
  `src/index.ts` was deleted, and the `./style` CSS export is vestigial:
  the only `.less` import now lives under `src/references/`). Own
  `playground/` and split configs: `vite.dev.config.ts` (dev server,
  port 9151, vite-plugin-cesium) vs `vite.lib.config.ts` (ES lib + dts,
  entry `src/index.ts`, externals cesium/vue/@turf/turf/lodash/uuid).
  Cesium is the only peerDependency.
- `packages/entity-manager` (`@fun-gis/entity-manager`) — publishable-shaped,
  framework-agnostic (cesium is the only peerDependency, no vue): `DataManager`
  (entity factory/registry + events) and the visualizer registry
  (`BaseVisualizer`/`DrawVisualizer`/`CompositeVisualizer`). Extracted from
  map-core's former `core/data-manager` + `core/visualization`; map-core
  consumes it via `workspace:*`.
- `packages/map-core` (`@fun-gis/map-core`, private) — Cesium viewer wrapper:
  `src/core/` (init, camera, events, layer system), `src/config/`,
  `src/types/`. Its old `core/draw`, `core/draw.ts` and vendored `core/plot`
  were removed — drawing now lives only in `@fun-gis/draw`; entity
  management now lives only in `@fun-gis/entity-manager`.
- `packages/panoramic-photo` (`@fun-gis/panoramic-photo`, private) — panorama
  viewer (photo-sphere-viewer + EXIF orientation). Lib source in `src/`
  (component + EXIF utils), demo in its own `playground/`; split configs
  like draw (`vite.dev.config.ts` dev server port 9152 vs lib build + dts).
  Exports `./style` CSS alongside JS.
- `packages/effect` — work in progress; only `VolumeBar.vue`, no package.json.
- `apps/playground`, `apps/gh-pages-demo` — demo apps; the latter is the
  unified online demo for the three publishable packages (draw 标绘 /
  entity-manager 实体管理 / panoramic-photo 全景, tab-switched, deploy to
  GitHub Pages via root `pnpm predeploy && pnpm deploy`). Note: the draw
  tab still imports the retired `drawTool` facade — pending migration to
  the plot-only API.

## Commands

- **pnpm only** (enforced by `preinstall` via `only-allow`).
- Per-package work (root no longer owns app scripts):
  - `pnpm -F @fun-gis/draw dev|build|test` (package lives in
    `packages/plot`)
  - `pnpm -F @fun-gis/entity-manager build`
  - `pnpm -F @fun-gis/map-core dev|build`
  - `pnpm -F @fun-gis/panoramic-photo dev|build`
  - `pnpm -F playground dev`, `pnpm -F gh-pages-demo build`
- Versioning/publish for `@fun-gis/draw` runs through changesets:
  `pnpm changeset` → `pnpm version` → `pnpm release`; GitHub Pages demo
  deploys via `pnpm predeploy && pnpm deploy`.
- `pnpm lint` (root) — ESLint flat config in `eslint.config.ts`, auto-fixes.
  Note: `packages/plot` carries a large backlog of pre-existing lint errors
  (`no-explicit-any`, unused vars) — lint is not a green gate there yet.
- Unit tests: only `packages/plot` has vitest (`pnpm -F @fun-gis/draw test`)
  — geometry utilities (repointed at `../src/references/drawMethods/...`
  after the move) plus `ShapeRegistry` / `PlotManager` / data-conversion
  tests under `tests/`.

## Gotchas

- Cesium versions: draw/map-core/root use cesium ^1.133+ (draw publishes it
  as a peerDependency). Never reintroduce `mars3d` / `mars3d-cesium` into
  `packages/plot` — it was fully removed.
- Entity-based plotting uses `CallbackProperty` and `viewer.clock.onTick`;
  under `requestRenderMode: true` (map-core default) frames must be
  requested manually or animations won't advance.
- Never commit API keys/tokens (a secret was already purged from remote
  history once — commit `ded3bab`).
- Always destroy Cesium viewers/resources to avoid leaks; Cesium uses radians
  internally, degrees for UI. Prefer DataSource over raw Entity for large data.
- Code should handle WebGL context loss; test WebGL support across browsers,
  especially on mobile.

## Conventions

- Prettier: no semicolons, 2-space indent, double quotes, 80 cols, no
  trailing commas. `prettier/prettier` and `simple-import-sort/*` are ESLint
  **errors** — keep imports sorted when editing.
- Naming: kebab-case files, PascalCase components, camelCase functions,
  UPPER_SNAKE_CASE constants, `I`-prefixed interfaces (e.g. `IMapOptions`).
- Vue: Composition API with `<script setup>`; Less for styling. The plot
  package (`@fun-gis/draw`) has no runtime antd dependency.
- Commits: Conventional Commits with Chinese subjects (`feat: 新增xxx`).
- New features: implement in the right package, export from its `index.ts`,
  and add a demo page in `apps/playground/` (or the package's own playground).

## References & caveats

- Package history: old `@f-cesium/*` / `@fesium/core` removed (commit
  `31dd7f3`); `@fun-gis/plot` merged into `@fun-gis/draw` as `src/plot/`
  (branch `refactor/draw-unification`). The package directory was then
  renamed `packages/draw` → `packages/plot` and restructured (commit
  `e8c1a7e`, 2026-09-20): the plot core was promoted to `src/`, while the
  legacy `drawMethods/` + `drawTool/` moved under `src/references/` and
  out of the public entry. Expect the old names in older branches or code.
- `CLAUDE.md` is a one-line shim (`@AGENTS.md`) that imports this file for
  Claude Code — maintain docs here only, never in `CLAUDE.md`.
- `.cursor/rules/*.mdc` may have deeper architecture notes but can lag behind
  the real `packages/` layout — verify paths against the actual
  `package.json`s.
- Project-specific agent skills are vendored in `.agents/skills/`
  (vue, pinia, vite, pnpm, unocss, vue-best-practices, ...) — locked via
  `skills-lock.json`.
