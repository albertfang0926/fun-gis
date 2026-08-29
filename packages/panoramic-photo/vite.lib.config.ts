import vue from "@vitejs/plugin-vue"
import { resolve } from "path"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"

export default defineConfig({
  mode: "lib",
  build: {
    outDir: "dist",
    lib: {
      entry: resolve(import.meta.dirname, "src/index.ts"),
      fileName: "index",
      formats: ["es"]
    },
    rollupOptions: {
      // 依赖交由宿主解析，不打包进库
      external: ["vue", "@photo-sphere-viewer/core", "exifreader"],
      output: {
        // 与 exports 的 "./style" 入口对齐
        assetFileNames: "style[extname]"
      }
    }
  },
  plugins: [
    vue(),
    dts({
      outDir: "./dist/types",
      tsconfigPath: "./tsconfig.lib.json"
    })
  ]
})
