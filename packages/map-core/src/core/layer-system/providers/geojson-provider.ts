import { GeoJsonDataSource,Viewer } from "cesium"

import { LayerDataSourceType } from "../constants"
import {
  IGeoJsonSourceConfig,
  ILayerSourceConfig} from "../types"
import { BaseLayerProvider } from "./base-provider"

export class GeoJsonLayerProvider extends BaseLayerProvider {
  readonly dataSourceType = LayerDataSourceType.GeoJson

  async addToViewer(
    viewer: Viewer,
    config: ILayerSourceConfig,
    style: Record<string, any>
  ): Promise<GeoJsonDataSource> {
    const geoConfig = config as IGeoJsonSourceConfig

    const dataSource = await GeoJsonDataSource.load(
      geoConfig.url || geoConfig.data,
      {
        clampToGround: geoConfig.clampToGround ?? true,
        fill: style.fill ?? geoConfig.fill,
        stroke: style.stroke ?? geoConfig.stroke,
        strokeWidth: (style.strokeWidth || geoConfig.strokeWidth) ?? 2,
        markerSize: (style.markerSize || geoConfig.markerSize) ?? 48
      }
    )

    await viewer.dataSources.add(dataSource)
    return dataSource
  }

  removeFromViewer(viewer: Viewer, handle: GeoJsonDataSource): void {
    viewer.dataSources.remove(handle, true)
  }

  updateStyle(
    _viewer: Viewer,
    handle: GeoJsonDataSource,
    style: Record<string, any>
  ): void {
    const entities = handle.entities.values
    for (const entity of entities) {
      if (style.fill && entity.polygon) {
        entity.polygon.material = style.fill
      }
      if (style.stroke && entity.polyline) {
        entity.polyline.material = style.stroke
      }
      if (style.strokeWidth && entity.polyline) {
        entity.polyline.width = style.strokeWidth
      }
    }
  }
}
