import vue from "@vitejs/plugin-vue"
import { defineConfig } from "vite"

export default defineConfig({
  root: "./playground",
  plugins: [vue()],
  server: {
    host: "localhost",
    port: 9152
  }
})
