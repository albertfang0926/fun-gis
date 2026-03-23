import type {
  Camera,
  ScreenSpaceCameraController as sscc,
  Cartesian3
} from "cesium"

// Cesium相机管理器。功能包括：
// 1. 管理相机状态
// 2. 管理相机轨迹
// 相机缩放因子配置
const ZOOM_FACTORS = [
  { threshold: 100, factor: 0.005 }, // <= 100m: 0.5%
  { threshold: 1000, factor: 0.01 }, // <= 1000m: 1%
  { threshold: 10000, factor: 0.03 }, // <= 10000m: 3%
  { threshold: 100000, factor: 0.05 }, // <= 100000m: 5%
  { threshold: Infinity, factor: 0.1 } // > 100000m: 10%
]

export class CameraManager {
  private _camera?: Camera
  private _controller?: sscc
  private _heightChangeHandler?: () => void

  init(camera: Camera) {
    this._camera = camera
    // 监听相机高度变化
    this._heightChangeHandler = () => {
      this.setZoomStep()
    }
    this._camera.changed.addEventListener(this._heightChangeHandler)
  }

  get camera() {
    if (!this._camera) throw new Error("Camera is not initialized")
    return this._camera
  }

  setZoomDistance(min: number, max: number) {
    if (!this._controller) {
      throw new Error("Camera controller is not initialized")
    }
    this._controller.maximumZoomDistance = max
    this._controller.minimumZoomDistance = min
  }

  zoomIn(amount: number) {
    this._camera?.zoomIn(amount)
  }

  zoomOut(amount: number) {
    this._camera?.zoomOut(amount)
  }

  setPosition(position: Cartesian3) {
    this._camera?.setView({ destination: position })
  }

  setZoomStep() {
    if (!this._camera) {
      throw new Error("Camera is not initialized")
    }
    const height = this._camera.positionCartographic.height
    const { factor } =
      ZOOM_FACTORS.find(({ threshold }) => height <= threshold) ??
      ZOOM_FACTORS[ZOOM_FACTORS.length - 1]
    this._camera.defaultZoomAmount = height * factor
  }
}
