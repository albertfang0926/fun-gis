// third-parties
import { IonImageryProvider, Viewer } from "cesium"

import { LayerManager } from "../layer-system"
// customs
import { defaultViewerOpts } from "./defaultOpts"

class CesiumViewer {
  container: string
  viewer: Viewer | null = null
  layerManager: LayerManager

  constructor(container: string) {
    this.container = container
    this.layerManager = new LayerManager()
  }

  /**
   * 地图初始化
   */
  async initMap() {
    this.viewer = new Viewer(this.container, defaultViewerOpts)
    this.viewer.scene.imageryLayers.addImageryProvider(
      await IonImageryProvider.fromAssetId(2)
    )
    this.layerManager.attachViewer("main", this.viewer)
  }

  /**
   * 附加额外的 Viewer（如小地图）
   */
  attachViewer(viewerId: string, viewer: Viewer) {
    this.layerManager.attachViewer(viewerId, viewer)
  }

  /**
   * 销毁资源
   */
  destroy() {
    this.layerManager.detachViewer("main")
    this.viewer?.destroy()
    this.viewer = null
  }
}

export { CesiumViewer }
