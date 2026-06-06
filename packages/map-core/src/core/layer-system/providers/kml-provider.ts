import { KmlDataSource,Viewer } from "cesium"

import { LayerDataSourceType } from "../constants"
import {
  IKmlSourceConfig,
  ILayerSourceConfig} from "../types"
import { BaseLayerProvider } from "./base-provider"

export class KmlLayerProvider extends BaseLayerProvider {
  readonly dataSourceType = LayerDataSourceType.Kml

  async addToViewer(
    viewer: Viewer,
    config: ILayerSourceConfig,
    _style: Record<string, any>
  ): Promise<KmlDataSource> {
    const kmlConfig = config as IKmlSourceConfig

    const dataSource = await KmlDataSource.load(kmlConfig.url, {
      clampToGround: kmlConfig.clampToGround ?? true
    })

    await viewer.dataSources.add(dataSource)
    return dataSource
  }

  removeFromViewer(viewer: Viewer, handle: KmlDataSource): void {
    viewer.dataSources.remove(handle, true)
  }

  updateStyle(
    _viewer: Viewer,
    _handle: KmlDataSource,
    _style: Record<string, any>
  ): void {
    // KML 样式通常由 KML 文件内部定义，外部更新受限
  }
}
