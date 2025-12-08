import devConfig from "./vite.dev.config"
import libConfig from "./vite.lib.config"
import type { ConfigEnv } from "vite"

// https://vite.dev/config/
export default ({ mode }: ConfigEnv) => {
  switch (mode) {
    case "development":
      return devConfig
    case "production":
      return libConfig
    default:
      throw new Error(`Unrecognized mode: "${mode}"!`)
  }
}
