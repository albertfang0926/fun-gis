import { Cesium3DTileset,Viewer } from "cesium"

import { LayerDataSourceType } from "../constants"
import {
  ILayerSourceConfig,
  ITilesetSourceConfig
} from "../types"
import { BaseLayerProvider } from "./base-provider"

export class TilesetLayerProvider extends BaseLayerProvider {
  readonly dataSourceType = LayerDataSourceType.Tileset

  async addToViewer(
    viewer: Viewer,
    config: ILayerSourceConfig,
    style: Record<string, any>
  ): Promise<Cesium3DTileset> {
    const tilesetConfig = config as ITilesetSourceConfig
    const tileset = await Cesium3DTileset.fromUrl(tilesetConfig.url, {
      maximumScreenSpaceError:
        tilesetConfig.maximumScreenSpaceError ?? 16
    })

    if (style.maximumScreenSpaceError !== undefined) {
      tileset.maximumScreenSpaceError = style.maximumScreenSpaceError
    }

    viewer.scene.primitives.add(tileset)
    return tileset
  }

  removeFromViewer(viewer: Viewer, handle: Cesium3DTileset): void {
    viewer.scene.primitives.remove(handle)
  }

  updateStyle(
    _viewer: Viewer,
    handle: Cesium3DTileset,
    style: Record<string, any>
  ): void {
    if (style.maximumScreenSpaceError !== undefined) {
      handle.maximumScreenSpaceError = style.maximumScreenSpaceError
    }
  }

  setVisibility(
    _viewer: Viewer,
    handle: Cesium3DTileset,
    visible: boolean
  ): void {
    handle.show = visible
  }
}
