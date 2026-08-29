# AGENTS.md

Personal learning/sharing monorepo for **Fang-Cesium**: Cesium-based 3D GIS
visualization libraries (Vue 3 + TypeScript + Vite), managed with pnpm
workspaces. Goal is reusable, publishable packages plus demo apps.

## Workspace layout

- `packages/draw` (`@fun-gis/draw`) — the publishable drawing/plotting
  library. **One unified facade `DrawTool`** (`src/drawTool/`: registry +
  activate/deactivate + events `drawStart/drawUpdate/drawEnd/editStart/
  editEnd`) dispatches to two rendering backends:
  - `src/drawMethods/` — primitive-based shapes (core/, middleware/,
    manager/itemManager, widgets/, utils/), 14 shapes, drag & context menu.
  - `src/plot/` — Entity + CallbackProperty military/geometric shapes
    (absorbed from the retired `@fun-gis/plot` package, 19 shapes, control
    point editing & growth animations). `CesiumPlot.createGeometryFromData`
    facade kept in `src/plot/index.ts`.
  - Legacy v1 class exports (14 middleware classes + `itemManager`) are kept
    but marked `@deprecated` — prefer `drawTool.activate(shapeType)`.
  - Has its own `playground/` and split configs: `vite.dev.config.ts` (dev
    server, port 9151, vite-plugin-cesium) vs `vite.lib.config.ts` (ES lib
    build + dts). Exports `./style` CSS alongside JS. Cesium/vue are
    peerDependencies.
- `packages/map-core` (`@fun-gis/map-core`, private) — Cesium viewer wrapper:
  `src/core/` (init, camera, events, layer system, data-manager +
  visualization registry), `src/config/`, `src/types/`. Its old `core/draw`,
  `core/draw.ts` and vendored `core/plot` were removed — drawing now lives
  only in `@fun-gis/draw`.
- `packages/panoramic-photo` (`@fun-gis/panoramic-photo`, private) — panorama
  viewer (photo-sphere-viewer + EXIF orientation).
- `packages/effect` — work in progress; only `VolumeBar.vue`, no package.json.
- `apps/playground`, `apps/gh-pages-demo` — demo apps; the latter deploys to
  GitHub Pages via root `pnpm predeploy && pnpm deploy`.

## Commands

- **pnpm only** (enforced by `preinstall` via `only-allow`).
- Per-package work (root no longer owns app scripts):
  - `pnpm -F @fun-gis/draw dev|build|test`
  - `pnpm -F @fun-gis/map-core dev|build`
  - `pnpm -F @fun-gis/panoramic-photo dev|build` (build currently broken —
    the package has no `src/`, sources live in `playground/`)
  - `pnpm -F playground dev`, `pnpm -F gh-pages-demo build`
- Versioning/publish for `@fun-gis/draw` runs through changesets:
  `pnpm changeset` → `pnpm version` → `pnpm release`; GitHub Pages demo
  deploys via `pnpm predeploy && pnpm deploy`.
- `pnpm lint` (root) — ESLint flat config in `eslint.config.ts`, auto-fixes.
  Note: `packages/draw` carries a large backlog of pre-existing lint errors
  (`no-explicit-any`, unused vars) — lint is not a green gate there yet.
- Unit tests: only `packages/draw` has vitest (geometry utilities).

## Gotchas

- Cesium versions: draw/map-core/root use cesium ^1.133+ (draw publishes it
  as a peerDependency). Never reintroduce `mars3d` / `mars3d-cesium` into
  `packages/draw` — it was fully removed.
- Entity-based plotting uses `CallbackProperty` and `viewer.clock.onTick`;
  under `requestRenderMode: true` (map-core default) frames must be
  requested manually or animations won't advance.
- Never commit API keys/tokens (a secret was already purged from remote
  history once — commit `ded3bab`).
- Always destroy Cesium viewers/resources to avoid leaks; Cesium uses radians
  internally, degrees for UI. Prefer DataSource over raw Entity for large data.

## Conventions

- Prettier: no semicolons, 2-space indent, double quotes, 80 cols, no
  trailing commas. `prettier/prettier` and `simple-import-sort/*` are ESLint
  **errors** — keep imports sorted when editing.
- Naming: kebab-case files, PascalCase components, camelCase functions,
  UPPER_SNAKE_CASE constants, `I`-prefixed interfaces (e.g. `IMapOptions`).
- Vue: Composition API with `<script setup>`; Less for styling. The draw
  package has no runtime antd dependency (its context menu is plain DOM).
- Commits: Conventional Commits with Chinese subjects (`feat: 新增xxx`).
- New features: implement in the right package, export from its `index.ts`,
  and add a demo page in `apps/playground/` (or the package's own playground).

## References & caveats

- Package history: old `@f-cesium/*` / `@fesium/core` removed (commit
  `31dd7f3`); `@fun-gis/plot` merged into `@fun-gis/draw` as `src/plot/`
  (branch `refactor/draw-unification`). Expect the old names in older
  branches or code.
- `CLAUDE.md` and `.cursor/rules/*.mdc` have deeper architecture notes but
  can lag behind the real `packages/` layout — verify paths against the
  actual `package.json`s.
- Project-specific agent skills are vendored in `.agents/skills/`
  (vue, pinia, vite, pnpm, unocss, vue-best-practices, ...) — locked via
  `skills-lock.json`.
