import {
  Viewer,
  CesiumTerrainProvider,
  EllipsoidTerrainProvider
} from "cesium"
import { BaseLayerProvider } from "./base-provider"
import {
  ILayerSourceConfig,
  ITerrainSourceConfig
} from "../types"
import { LayerDataSourceType } from "../constants"

export class TerrainLayerProvider extends BaseLayerProvider {
  readonly dataSourceType = LayerDataSourceType.Terrain

  async addToViewer(
    viewer: Viewer,
    config: ILayerSourceConfig,
    _style: Record<string, any>
  ): Promise<any> {
    const terrainConfig = config as ITerrainSourceConfig

    let provider: any
    if (terrainConfig.url) {
      provider = await CesiumTerrainProvider.fromUrl(terrainConfig.url, {
        requestVertexNormals: terrainConfig.requestVertexNormals ?? false,
        requestWaterMask: terrainConfig.requestWaterMask ?? false
      })
    } else {
      provider = new EllipsoidTerrainProvider()
    }

    viewer.terrainProvider = provider
    return provider
  }

  removeFromViewer(viewer: Viewer, _handle: any): void {
    viewer.terrainProvider = new EllipsoidTerrainProvider()
  }

  updateStyle(
    _viewer: Viewer,
    _handle: any,
    _style: Record<string, any>
  ): void {
    // 地形图层不支持样式更新
  }

  setVisibility(
    _viewer: Viewer,
    _handle: any,
    _visible: boolean
  ): void {
    // 地形图层不支持单独的可见性切换
    // 可通过 depthTestAgainstTerrain 间接控制
  }
}
