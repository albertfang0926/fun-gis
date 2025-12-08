import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

export default defineConfig({
  mode: "development",
  root: "./playground",
  plugins: [vue()]
})
