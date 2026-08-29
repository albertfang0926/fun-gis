// /** @type {import("vite").UserConfig} */
import vue from "@vitejs/plugin-vue"
import { resolve } from "path"
import { defineConfig } from "vite"
import cesium from "vite-plugin-cesium"

export default defineConfig({
  // define: {
  //   CESIUM_BASE_URL: JSON.stringify("/node_modules/mars3d-cesium/Build/Cesium") // important
  // },
  mode: "development@playground",
  // root: "./playground",
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    },
    extensions: [".js", ".ts", ".jsx", ".tsx", ".json"]
  },
  server: {
    host: "localhost",
    // https: false,
    port: 9151,
    proxy: {}
  },
  plugins: [vue(), cesium()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
})
