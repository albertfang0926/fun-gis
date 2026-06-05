import { Viewer, CzmlDataSource } from "cesium"
import { BaseLayerProvider } from "./base-provider"
import {
  LayerDataSourceType,
  ILayerSourceConfig,
  ICzmlSourceConfig
} from "../types"

export class CzmlLayerProvider extends BaseLayerProvider {
  readonly dataSourceType = LayerDataSourceType.Czml

  async addToViewer(
    viewer: Viewer,
    config: ILayerSourceConfig,
    _style: Record<string, any>
  ): Promise<CzmlDataSource> {
    const czmlConfig = config as ICzmlSourceConfig

    const dataSource = await CzmlDataSource.load(
      czmlConfig.url || czmlConfig.data
    )

    await viewer.dataSources.add(dataSource)
    return dataSource
  }

  removeFromViewer(viewer: Viewer, handle: CzmlDataSource): void {
    viewer.dataSources.remove(handle, true)
  }

  updateStyle(
    _viewer: Viewer,
    _handle: CzmlDataSource,
    _style: Record<string, any>
  ): void {
    // CZML 样式由数据驱动，外部更新受限
  }
}
