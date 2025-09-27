import { defineConfig } from "vite"
// plugins
import vue from "@vitejs/plugin-vue"
import cesium from "vite-plugin-cesium"
import Components from "unplugin-vue-components/vite"

export default defineConfig({
  mode: "development",
  root: "./playground",
  resolve: {
    alias: {
      "@": "./src"
    }
  },
  build: {
    rollupOptions: {
      output: {
        globals: {
          vue: "vue"
        }
      }
    }
  },
  server: {
    port: 3002
  },
  plugins: [vue(), cesium(), Components({ dts: true })]
})
