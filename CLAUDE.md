# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a monorepo workspace for "fun-gis" - a GIS (Geographic Information System) application built with Vue 3, TypeScript, and Cesium for 3D mapping. The project uses pnpm workspaces to manage multiple packages and applications.

## Architecture

### Workspace Structure
- **Root**: Monorepo configuration and shared dependencies
- **apps/**: Demo applications and playgrounds
  - `gh-pages-demo`: Simple Vue 3 demo for GitHub Pages deployment
  - `playground`: Development playground for testing components
- **packages/**: Reusable libraries
  - `@f-cesium/draw`: Core drawing package for GIS features (points, lines, polygons, military symbols)
- **docs/**: Documentation

### Core Technologies
- **Frontend**: Vue 3 + TypeScript + Vite
- **Mapping**: Cesium + Mars3D for 3D GIS visualization
- **Build**: Vite with TypeScript compilation
- **Package Manager**: pnpm with workspace configuration

## Development Commands

### Root Level Commands
```bash
# Development
pnpm dev                    # Start development server
pnpm build                  # Build all packages
pnpm type-check             # TypeScript type checking
pnpm lint                   # ESLint with auto-fix
pnpm format                 # Prettier formatting

# Deployment
pnpm predeploy              # Build gh-pages demo
pnpm deploy                 # Deploy to GitHub Pages
```

### Package-Specific Commands
Each package in `packages/` and `apps/` has its own scripts:
- `pnpm -F <package-name> dev` - Start development server for specific package
- `pnpm -F <package-name> build` - Build specific package

## Key Packages

### @f-cesium/draw
Core drawing functionality for GIS applications:
- **Point drawing**: Billboards, text labels
- **Line drawing**: Lines, segments, rectangles, parallelograms
- **Polygon drawing**: Polygons, circles/ellipses
- **Military symbols**: Custom military shapes and formations
- **Configuration**: Extensible styling and texture options

Located in `packages/draw/` with:
- Source: `src/drawMethods/core/`
- Playground: `playground/` for development testing
- Build output: `dist/` with TypeScript declarations

## Configuration Files

### ESLint
- Config: `eslint.config.mts` (Flat config format)
- Extends: Vue 3, TypeScript, Prettier

### TypeScript
- Each package has its own `tsconfig.json`
- Root uses workspace references

### Vite
- Each package/app has its own `vite.config.ts`
- Development and production configurations separated

## Development Workflow

1. **Start development**: `pnpm dev` or `pnpm -F <package> dev`
2. **Type checking**: `pnpm type-check`
3. **Linting**: `pnpm lint` (auto-fixes issues)
4. **Building**: `pnpm build` (builds all packages)
5. **Testing**: Use playground apps for component testing

## Important Notes

- Uses pnpm workspace with strict package management (`preinstall` enforces pnpm)
- GIS functionality built on Cesium and Mars3D libraries
- Drawing package supports extensive military and geometric shapes
- Each package is independently buildable and publishable
- GitHub Pages deployment configured for demo applications