// /** @type {import("vite").UserConfig} */
import vue from "@vitejs/plugin-vue"
import { resolve } from "path"
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers"
import Components from "unplugin-vue-components/vite"
import { defineConfig } from "vite"
import { mars3dPlugin } from "vite-plugin-mars3d"
// plugins
import {
  AndDesignVueResolve,
  createStyleImportPlugin} from "vite-plugin-style-import"

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
  plugins: [
    vue(), // 引入antd样式
    mars3dPlugin(),
    createStyleImportPlugin({
      resolves: [AndDesignVueResolve()]
    }),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: "less"
        })
      ]
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
})
