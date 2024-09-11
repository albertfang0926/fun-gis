import devConfig from "./vite.dev.config"
import libConfig from "./vite.lib.config"

export default ({ mode }) => {
  switch (mode) {
    case "development":
      return devConfig
    case "production":
      return libConfig
    default:
      throw new Error(`Unrecognized mode: "${mode}"!`)
  }
}
