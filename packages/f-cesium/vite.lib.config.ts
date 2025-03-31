import { defineConfig } from "vite"
// plugins
import dts from "vite-plugin-dts"

export default defineConfig({
  mode: "production",
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "@fesium/core",
      fileName: "index"
    }
  },
  plugins: [dts()]
})
