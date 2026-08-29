import vue from "@vitejs/plugin-vue"
import { resolve } from "path"
import { defineConfig } from "vite"

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "CesiumPlot",
      fileName: "index",
      formats: ["es"]
    },
    rollupOptions: {
      external: ["cesium", "vue", "lodash.clonedeep"]
    }
  },
  plugins: [vue()]
})
