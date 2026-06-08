import type {
  IImagerySourceConfig,
  ITerrainSourceConfig
} from "@/core/layer-system/types"

import type { ICoord3d } from "./geometry"

/**
 * CesiumViewer 初始化配置
 * 所有属性均为可选，提供合理默认值
 */
export interface IMapConfig {
  /** 初始相机位置 [lon, lat, alt]，默认 [117.43111, 32.100556, 1e6]（合肥，100万米高度） */
  homePosition?: ICoord3d
  /** Cesium Viewer 构造选项，与默认值浅合并，用户值优先 */
  viewerOptions?: Record<string, any>
  /** 影像配置；undefined = Cesium 默认影像，false = 不加载影像 */
  imagery?: false | IImagerySourceConfig
  /** 地形配置；undefined = 无地形（椭球面） */
  terrain?: ITerrainSourceConfig
  /** Cesium Ion Token，在 Viewer 创建前设置 */
  ionToken?: string
  /** 是否在初始化后飞到 homePosition，默认 true */
  flyToHome?: boolean
}
