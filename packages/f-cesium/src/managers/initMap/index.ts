// third-parties
import {
  Viewer,
  ImageryLayer,
  WebMapTileServiceImageryProvider,
  Ion
} from "cesium"
// types
// import type { ICoord3d } from "../../types/geometry"
import { DEFAULT_ACCESS_TOKEN } from "./defaultOpts"

const webKey = {
  // 天地图
  browser: "0011520ddc5820dde8c05bb06fe0bfcb",
  server: "6a1221b2570d4d6d1c3e3fc029ce4b69"
}
Ion.defaultAccessToken = DEFAULT_ACCESS_TOKEN

class CesiumViewer {
  // homeSite: ICoord3d
  container: string
  constructor(container: string) {
    this.container = container
  }

  initMap() {
    const viewer = new Viewer(this.container, {
      baseLayerPicker: false, // 图层选择器
      animation: false, // 左下角仪表
      fullscreenButton: false, // 全屏按钮
      geocoder: false, // 右上角查询搜索
      infoBox: false, // 信息框
      homeButton: false, // home按钮
      sceneModePicker: true, // 3d 2d选择器
      selectionIndicator: false, //
      timeline: false, // 时间轴
      navigationHelpButton: false, // 右上角帮助按钮
      shouldAnimate: true,
      useBrowserRecommendedResolution: false,
      maximumRenderTimeChange: Infinity, // 静止时不刷新,减少系统消耗
      baseLayer: new ImageryLayer(
        new WebMapTileServiceImageryProvider({
          url:
            "http://t0.tianditu.com/vec_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=vec&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=" +
            webKey.browser,
          layer: "tdtVecBasicLayer",
          style: "default",
          format: "image/jpeg",
          tileMatrixSetID: "GoogleMapsCompatible"
        }),
        {}
      )
    })
    return viewer
  }
}

export { CesiumViewer }
