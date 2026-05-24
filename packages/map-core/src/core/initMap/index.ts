// third-parties
import { IonImageryProvider, Viewer } from "cesium"
// customs
import { defaultViewerOpts } from "./defaultOpts"
// types

// Ion.defaultAccessToken =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyZDdkZWVhZC1kMWI1LTQwNGItYWE2Yy1jMzM5NmUxODhkZjgiLCJpZCI6MTMzNDEwLCJzdWIiOiJBbGJlcnRGYW5nIiwiaXNzIjoiaHR0cHM6Ly9hcGkuY2VzaXVtLmNvbSIsImF1ZCI6IkFsYmVydEZhbmdfZGVmYXVsdCIsImlhdCI6MTc3OTYwMzIzMH0.vAev-U85oQoN2kZH8RnDYoZcUHJstl-FiFMbS4GNhg8"

class CesiumViewer {
  container: string
  viewer: Viewer | null = null
  constructor(container: string) {
    this.container = container
  }

  /**
   * 地图初始化
   */
  async initMap() {
    this.viewer = new Viewer(this.container, defaultViewerOpts)
    this.viewer.scene.imageryLayers.addImageryProvider(
      await IonImageryProvider.fromAssetId(3)
    )
  }
}

export { CesiumViewer }
