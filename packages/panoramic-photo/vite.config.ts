import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// https://vite.dev/config/
export default defineConfig({
  mode: "development",
  root: "./playground",
  plugins: [vue()]
})
