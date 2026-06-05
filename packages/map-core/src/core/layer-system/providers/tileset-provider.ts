import { Viewer, Cesium3DTileset } from "cesium"
import { BaseLayerProvider } from "./base-provider"
import {
  LayerDataSourceType,
  ILayerSourceConfig,
  ITilesetSourceConfig
} from "../types"

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
        tilesetConfig.maximumScreenSpaceError ?? 16,
      maximumMemoryUsage: tilesetConfig.maximumMemoryUsage
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
