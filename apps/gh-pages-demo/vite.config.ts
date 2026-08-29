import vue from "@vitejs/plugin-vue"
import cesium from "vite-plugin-cesium"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  base: "/fun-gis/",
  plugins: [vue(), cesium()]
})
