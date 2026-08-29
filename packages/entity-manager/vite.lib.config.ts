import { resolve } from "path"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"

export default defineConfig({
  build: {
    outDir: "dist",
    lib: {
      entry: resolve(import.meta.dirname, "src/index.ts"),
      fileName: "index",
      formats: ["es"]
    },
    rollupOptions: {
      // cesium 一律作为 peerDependency 交由宿主提供
      external: ["cesium"]
    }
  },
  plugins: [
    dts({
      outDir: "./dist/types",
      tsconfigPath: "./tsconfig.lib.json"
    })
  ]
})
