# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal learning and experience-sharing monorepo for "Fang-Cesium" - a 3D GIS (Geographic Information System) visualization library built with Vue 3, TypeScript, and Cesium. The project serves two purposes:

1. **NPM Package Publishing**: Summarizes development experience into reusable packages
2. **Demo System**: Provides example applications demonstrating the packages

**Currently Planned Packages:**
- 绘制方法库 (Drawing Methods Library): Based on Cesium for interactive drawing and plotting
- 特效库 (Effects Library): Based on Cesium for 3D visual effects and animations

The project uses pnpm workspaces to manage multiple packages and applications for creating interactive military and geometric plotting features on 3D maps.

## Architecture

### Workspace Structure
- **Root**: Monorepo configuration with Vue 3 demo app
- **apps/**: Demo applications
  - `gh-pages-demo`: Simple Vue 3 demo for GitHub Pages deployment
  - `playground`: Development playground for testing components
- **packages/**: Reusable libraries
  - `@f-cesium/draw`: Core drawing/plotting package for GIS features (points, lines, polygons, military symbols)
  - `@fesium/core`: Core Cesium wrapper with initialization, camera, layer management, and visualization
  - `plot`: Standalone plotting library for geometric shapes and military arrows (uses rolldown-vite)
- **docs/**: Documentation

### Package Architecture

**@f-cesium/draw** (`packages/draw/`)
- Middleware-based drawing system with draggable/editable entities
- Categories: `point/` (billboards, models, labels), `polyline/` (lines, curves, rectangles), `polygon/` (polygons, circles), `military/` (arrows, formations)
- Key exports: `Point`, `Label`, `Polyline`, `Polygon`, `Circle`, `AttackArrow`, `Sector`, `Curve`, etc.
- Includes `itemManager` for primitive management
- Located in `src/drawMethods/` with subdirectories: `core/`, `middleware/`, `manager/`, `widgets/`, `utils/`

**@fesium/core** (`packages/f-cesium/`)
- Core Cesium viewer wrapper and utilities
- Modules: `initMap/` (viewer initialization), `camera/`, `event/`, `draw/`, `layer-management/`, `data-management/`, `visualization/`
- Includes `plot/` subdirectory with arrow and polygon implementations (mirrors plot package)
- Main class: `CesiumViewer` for map initialization

**plot** (`packages/plot/`)
- Standalone geometric plotting library
- Supports: arrows (attack, fine, straight, curved, double, squad-combat), polygons (circle, ellipse, rectangle, triangle, sector, lune), lines (curve, freehand)
- Factory function: `CesiumPlot.createGeometryFromData()` for creating shapes from data
- Uses rolldown-vite (experimental Vite with Rolldown bundler)

### Core Technologies
- **Frontend**: Vue 3 + TypeScript + Vite
- **3D Mapping**: Cesium (1.107.2) + Mars3D (3.9.4) for 3D GIS visualization
- **Build**: Vite, with rolldown-vite for plot package
- **Package Manager**: pnpm with workspace configuration (strictly enforced via preinstall hook)
- **UI**: Ant Design Vue, Pinia state management, Vue Router
- **Styling**: Less

## Development Commands

### Root Level Commands
```bash
# Development
pnpm dev                    # Start root development server
pnpm build                  # Build all packages (type-check + build-only)
pnpm type-check             # TypeScript type checking for root
pnpm lint                   # ESLint with auto-fix
pnpm format                 # Prettier formatting

# Deployment
pnpm predeploy              # Build gh-pages demo
pnpm deploy                 # Deploy to GitHub Pages (via gh-pages)
```

### Package-Specific Commands
Each package has its own scripts in its `package.json`:
```bash
# Work on a specific package
pnpm -F @f-cesium/draw dev      # Start draw package dev server
pnpm -F @f-cesium/draw build    # Build draw package
pnpm -F plot dev                # Start plot package dev server
pnpm -F playground dev          # Start playground app
```

## Configuration Files

### ESLint
- Config: `eslint.config.mts` (Flat config format)
- Extends: Vue 3, TypeScript, Prettier
- Run `pnpm lint` to auto-fix issues

### TypeScript
- Each package has its own `tsconfig.json`
- Root uses workspace references for monorepo type checking

### Vite
- Each package/app has its own `vite.config.ts`
- Draw package uses `vite-plugin-dts` for TypeScript declaration generation
- Root uses `vite-plugin-cesium` for Cesium integration

## Development Workflow

1. **Start development**: `pnpm dev` (root) or `pnpm -F <package> dev` for specific package
2. **Type checking**: `pnpm type-check`
3. **Linting**: `pnpm lint` (auto-fixes issues)
4. **Building**: `pnpm build` (builds all packages) or `pnpm -F <package> build`
5. **Testing**: Use playground apps for interactive component testing
6. **Deployment**: `pnpm predeploy && pnpm deploy` for GitHub Pages

## Project Goals and Development Approach

### Purpose
This is a **learning and experience-sharing project**. When contributing or developing:
- Focus on code quality and best practices as educational examples
- Document complex algorithms and Cesium-specific patterns
- Build reusable, well-architected solutions suitable for npm publishing
- Create clear demos in the playground for each feature

### Adding New Features
1. Choose the appropriate package (`draw` for drawing methods, future `effects` package for visual effects)
2. Implement the feature with proper TypeScript types
3. Add a demo in `apps/playground/` to showcase the functionality
4. Update exports in the package's `index.ts`
5. Test thoroughly with Cesium viewer interactions

## Naming Conventions (from .cursor/rules)

- **Files**: kebab-case (e.g., `layer-management`)
- **Components**: PascalCase (e.g., `MapViewer`)
- **Functions/Variables**: camelCase (e.g., `initializeMap`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `DEFAULT_ACCESS_TOKEN`)
- **Type Definitions**: PascalCase with `I` prefix (e.g., `IMapOptions`)

## Code Style

- 2-space indentation, no semicolons, double quotes
- 80-character line width limit
- No trailing commas
- Use Composition API with `<script setup>` for Vue components
- Prefer type inference, explicit types when needed

## Important Notes

- **pnpm required**: Preinstall hook enforces pnpm usage
- **Cesium resources**: Always properly destroy Cesium instances to avoid memory leaks
- **Coordinate systems**: Cesium uses radians for internal calculations, degrees for UI display
- **Performance**: For large datasets, use DataSource instead of direct Entity creation; consider LOD and pagination
- **WebGL context**: Code should handle potential WebGL context loss
- **Browser compatibility**: Test WebGL support across browsers, especially for mobile
- **Publishing**: `@f-cesium/draw` is configured to publish to a private npm registry (nexus.zazncn.com)