import { defineConfig } from "vite"

export default defineConfig({
  mode: "production",
  build: {
    lib: {
      entry: "./lib/main.ts",
      name: "Counter",
      fileName: "counter"
    }
  }
})
