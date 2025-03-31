// third-parties
import { Ion, Viewer } from "cesium"
// customs
import { defaultViewerOpts } from "./defaultOpts"
// types
import { DEFAULT_ACCESS_TOKEN } from "./defaultOpts"

Ion.defaultAccessToken = DEFAULT_ACCESS_TOKEN

class CesiumViewer {
  container: string
  viewer: Viewer | null = null
  constructor(container: string) {
    this.container = container
  }

  /**
   * 地图初始化
   */
  initMap() {
    this.viewer = new Viewer(this.container, defaultViewerOpts)
  }
}

export { CesiumViewer }
