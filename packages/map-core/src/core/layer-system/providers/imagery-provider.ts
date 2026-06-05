import {
  Viewer,
  ImageryLayer,
  UrlTemplateImageryProvider,
  WebMapTileServiceImageryProvider,
  WebMapServiceImageryProvider,
  ArcGisMapServerImageryProvider,
  IonImageryProvider,
  SingleTileImageryProvider
} from "cesium"
import { BaseLayerProvider } from "./base-provider"
import {
  LayerDataSourceType,
  ILayerSourceConfig,
  IImagerySourceConfig
} from "../types"

export class ImageryLayerProvider extends BaseLayerProvider {
  readonly dataSourceType = LayerDataSourceType.Imagery

  async addToViewer(
    viewer: Viewer,
    config: ILayerSourceConfig,
    style: Record<string, any>
  ): Promise<ImageryLayer> {
    const imageryConfig = config as IImagerySourceConfig
    const provider = await this.createImageryProvider(imageryConfig)
    const layer = viewer.imageryLayers.addImageryProvider(provider)

    if (style.opacity !== undefined) {
      layer.alpha = style.opacity
    }
    if (style.brightness !== undefined) {
      layer.brightness = style.brightness
    }
    if (style.contrast !== undefined) {
      layer.contrast = style.contrast
    }

    return layer
  }

  removeFromViewer(viewer: Viewer, handle: ImageryLayer): void {
    viewer.imageryLayers.remove(handle)
  }

  updateStyle(
    _viewer: Viewer,
    handle: ImageryLayer,
    style: Record<string, any>
  ): void {
    if (style.opacity !== undefined) {
      handle.alpha = style.opacity
    }
    if (style.brightness !== undefined) {
      handle.brightness = style.brightness
    }
    if (style.contrast !== undefined) {
      handle.contrast = style.contrast
    }
  }

  setVisibility(
    _viewer: Viewer,
    handle: ImageryLayer,
    visible: boolean
  ): void {
    handle.show = visible
  }

  private async createImageryProvider(
    config: IImagerySourceConfig
  ): Promise<any> {
    const opts = config.providerOptions || {}

    switch (config.providerType) {
      case "wmts":
        return await WebMapTileServiceImageryProvider.fromUrl(config.url, opts)
      case "wms":
        return await WebMapServiceImageryProvider.fromUrl(config.url, opts)
      case "tms":
        return new UrlTemplateImageryProvider({
          url: config.url,
          ...opts
        })
      case "arcgis":
        return await ArcGisMapServerImageryProvider.fromUrl(config.url, opts)
      case "ion":
        return await IonImageryProvider.fromAssetId(opts.assetId ?? 3)
      case "single-tile":
        return new SingleTileImageryProvider({ url: config.url })
      default:
        throw new Error(
          `Unsupported imagery provider type: ${config.providerType}`
        )
    }
  }
}
