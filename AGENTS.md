# AGENTS.md

Personal learning/sharing monorepo for **Fang-Cesium**: Cesium-based 3D GIS
visualization libraries (Vue 3 + TypeScript + Vite), managed with pnpm
workspaces. Goal is reusable, publishable packages plus demo apps.

## Workspace layout

- `packages/draw` (`@fun-gis/draw`) — drawing/plotting library. Sources in
  `src/drawMethods/` (core/, middleware/, manager/, widgets/, utils/). Has its
  own `playground/` and split configs: `vite.dev.config.ts` (dev server, port
  9151, mars3d plugin) vs `vite.lib.config.ts` (ES lib build + dts). Exports
  `./style` CSS alongside JS.
- `packages/map-core` (`@fun-gis/map-core`, private) — Cesium viewer wrapper:
  `src/core/` (init, camera, events, layer system), `src/components/` (e.g.
  `CesiumViewer`), `src/config/`, `src/types/`.
- `packages/plot` (`@fun-gis/plot`, private) — standalone military/geometric
  plotting (arrows, polygons, curves).
- `packages/panoramic-photo` (`@fun-gis/panoramic-photo`, private) — panorama
  viewer (photo-sphere-viewer + EXIF orientation).
- `packages/effect` — work in progress; only `VolumeBar.vue`, no package.json.
- `apps/playground`, `apps/gh-pages-demo` — demo apps; the latter deploys to
  GitHub Pages via root `pnpm predeploy && pnpm deploy`.

## Commands

- **pnpm only** (enforced by `preinstall` via `only-allow`).
- Root scripts `dev` / `build` / `type-check` / `format` are **stale**: the
  root no longer has `vite.config.ts`, `tsconfig.app.json`, or `src/`. Work
  per package instead:
  - `pnpm -F @fun-gis/draw dev|build`, `pnpm -F @fun-gis/map-core dev|build`
  - `pnpm -F @fun-gis/plot dev|build`, `pnpm -F @fun-gis/panoramic-photo dev|build`
  - `pnpm -F playground dev`, `pnpm -F gh-pages-demo build`
  - Each package type-checks as part of its `build` (vue-tsc/tsc).
- `pnpm lint` (root) — ESLint flat config in `eslint.config.ts`, auto-fixes.
- No test framework is configured anywhere.

## Gotchas

- `packages/plot` intentionally uses **rolldown-vite**
  (`"vite": "npm:rolldown-vite@7.2.5"` alias + pnpm override) and pins
  **cesium 1.107.2** while root/apps use cesium ^1.133.1 — do not "fix" either.
- Cesium is duplicated across workspace versions; keep imports per-package.
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
- Vue: Composition API with `<script setup>`; Less for styling; Ant Design
  Vue via unplugin auto-import resolvers in draw's configs.
- Commits: Conventional Commits with Chinese subjects (`feat: 新增xxx`).
- New features: implement in the right package, export from its `index.ts`,
  and add a demo page in `apps/playground/` (or the package's own playground).

## References & caveats

- Package rename history: the old `@f-cesium/*` packages and `@fesium/core`
  were removed (commit `31dd7f3`); the core Cesium wrapper now lives only in
  `@fun-gis/map-core`. Expect the old names in older branches or code.
- `CLAUDE.md` and `.cursor/rules/*.mdc` have deeper architecture notes but
  can lag behind the real `packages/` layout — verify paths against the
  actual `package.json`s.
- Project-specific agent skills are vendored in `.agents/skills/`
  (vue, pinia, vite, pnpm, unocss, vue-best-practices, ...) — locked via
  `skills-lock.json`.
