// third-parties
import { ImageryLayer, WebMapTileServiceImageryProvider } from "cesium"
//types
import type { ICoord3d } from "../../types/geometry.ts"

const tdtKey = {
  // 天地图
  browser: "0011520ddc5820dde8c05bb06fe0bfcb",
  server: "6a1221b2570d4d6d1c3e3fc029ce4b69"
}

const DEFAULT_ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzNmVhNzkxMy03NTlkLTQ2M2MtYmEwYi1jNmM3YWY1YWRjYmEiLCJpZCI6MTMzNDEwLCJpYXQiOjE2ODEzMjU0MzJ9.cRFOlEwIJA9jt0QAX96ENk3YzIDPjuuVacGVjUg7034"

const defaultViewerOpts = {
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
        tdtKey.browser,
      layer: "tdtVecBasicLayer",
      style: "default",
      format: "image/jpeg",
      tileMatrixSetID: "GoogleMapsCompatible"
    }),
    {}
  )
}
const DEFAULT_HOME_POSITION: ICoord3d = [117.43111, 32.100556, 1e6]

export { DEFAULT_ACCESS_TOKEN, defaultViewerOpts, DEFAULT_HOME_POSITION }
