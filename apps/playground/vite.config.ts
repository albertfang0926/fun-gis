import path from "node:path"

import tailwindcss from "@tailwindcss/vite"
import vue from "@vitejs/plugin-vue"
import { defineConfig } from "vite"
import cesium from "vite-plugin-cesium"

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss(), cesium()],
  resolve: {
    dedupe: ["cesium", "vue"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@fun-gis/draw": path.resolve(
        __dirname,
        "../../packages/plot/src/index.ts"
      ),
      "@fun-gis/entity-manager": path.resolve(
        __dirname,
        "../../packages/entity-manager/src/index.ts"
      ),
      "@fun-gis/map-core": path.resolve(
        __dirname,
        "../../packages/map-core/src/index.ts"
      ),
      "@fun-gis/panoramic-photo": path.resolve(
        __dirname,
        "../../packages/panoramic-photo/src/index.ts"
      )
    }
  }
})
