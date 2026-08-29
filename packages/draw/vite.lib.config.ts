// /** @type {import("vite").UserConfig} */
import vue from "@vitejs/plugin-vue"
import { resolve } from "path"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"

export default defineConfig({
  mode: "lib",
  resolve: {
    alias: {
      // pass
    }
  },

  build: {
    outDir: "dist",
    assetsDir: "./dist/assets",
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "@gis/draw-methods",
      fileName: "index",
      formats: ["es"]
    },
    rollupOptions: {
      // 将不想打包进库的依赖外部化（peer 与 dependencies 均交由宿主解析）
      external: [
        "cesium",
        "vue",
        "ant-design-vue",
        "@turf/turf",
        "lodash",
        "uuid"
      ]
    }
  },
  plugins: [
    vue(),
    dts({
      outDir: "./dist/types",
      // rollupTypes: true,
      tsconfigPath: "./tsconfig.lib.json"
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
