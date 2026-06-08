// 配置类型已迁移至 types/index.d.ts（IMapConfig）
// 此文件保留以避免破坏导入路径，重新导出相关类型
export type {
  IMapConfig,
  IImagerySourceConfig,
  ITerrainSourceConfig
} from "../types/index"
export { DEFAULT_HOME_POSITION } from "../core/initMap/default-opts"
