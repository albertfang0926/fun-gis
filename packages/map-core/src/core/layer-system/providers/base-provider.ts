import { Viewer } from "cesium"

import type { LayerDataSourceType } from "../constants"
import { ILayerFilterState,ILayerProvider, ILayerSourceConfig } from "../types"

export abstract class BaseLayerProvider implements ILayerProvider {
  abstract readonly dataSourceType: LayerDataSourceType

  abstract addToViewer(
    viewer: Viewer,
    config: ILayerSourceConfig,
    style: Record<string, any>
  ): Promise<any>

  abstract removeFromViewer(viewer: Viewer, handle: any): void

  abstract updateStyle(
    viewer: Viewer,
    handle: any,
    style: Record<string, any>
  ): void

  setVisibility(_viewer: Viewer, handle: any, visible: boolean): void {
    if (handle && typeof handle.show !== "undefined") {
      handle.show = visible
    }
  }

  refresh(
    viewer: Viewer,
    handle: any,
    config: ILayerSourceConfig
  ): Promise<any> {
    this.removeFromViewer(viewer, handle)
    return this.addToViewer(viewer, config, {})
  }

  applyFilter(
    _viewer: Viewer,
    _handle: any,
    _filter: ILayerFilterState | null
  ): void {
    // 默认空实现，由子类覆写
  }
}
