import developmentConfig from "./vite.dev.config"
import productionConfig from "./vite.lib.config"
import { ConfigEnv } from "vite"

export default ({ mode, command }: ConfigEnv) => {
  const root = process.cwd()
  // 获取 .env 文件里定义的环境变量
  // const ENV = loadEnv(mode, root)
  console.log(`当前环境信息：`, mode, command)
  // console.log(`ENV：`, ENV)
  if (mode === "development") {
    return developmentConfig
  } else if (mode === "production") {
    return productionConfig
  }
}
