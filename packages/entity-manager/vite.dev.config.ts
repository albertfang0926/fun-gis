import { defineConfig } from "vite"
import cesium from "vite-plugin-cesium"

export default defineConfig({
  root: "./playground",
  plugins: [cesium()],
  server: {
    host: "localhost",
    port: 9153
  }
})
