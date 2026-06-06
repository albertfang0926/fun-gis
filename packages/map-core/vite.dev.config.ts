// plugins
import vue from "@vitejs/plugin-vue"
import Components from "unplugin-vue-components/vite"
import { defineConfig } from "vite"
import cesium from "vite-plugin-cesium"

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
