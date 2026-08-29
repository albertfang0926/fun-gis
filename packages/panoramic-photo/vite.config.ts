import type { ConfigEnv } from "vite"

import developmentConfig from "./vite.dev.config.ts"
import productionConfig from "./vite.lib.config.ts"

export default ({ mode }: ConfigEnv) => {
  if (mode === "development") {
    return developmentConfig
  }
  return productionConfig
}
