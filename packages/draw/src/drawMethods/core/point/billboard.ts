// assets
import defaultImage from "../../../assets/images/primitives/point.png" // "../../../assets/drawMethods/feature/png/circle-point.png"
// third-parties
import {
  BillboardCollection,
  ScreenSpaceEventHandler,
  ScreenSpaceEventType,
  defaultValue,
  Cartesian2,
  Color
} from "mars3d-cesium"
// customs
import { Cursor, Tooltip, createUid, windowPositionToEllipsoidCartesian, cartesian3ToCoordinate } from "../../utils"
// types
import type { Viewer } from "mars3d-cesium"

export interface BillBoardDrawOption {
  id?: string
  show?: boolean
  url?: string
  scale?: number
  pixelOffset?: Cartesian2
  color?: Color
}

const DEFAULT_COLOR_STRING = "#ffffff"

const drawBillboard = (
  viewer: Viewer,
  options: Record<string, any>,
  callback: (e: any) => void,
  cancelCallback?: () => void
) => {
  // 解析参数
  const uuid = options.id || createUid()
  const featureId = { uuid }
  const image = defaultValue(options.url, defaultImage)
  const show = defaultValue(options.show, true)
  const scale = defaultValue(options.scale, 1.0)
  const color = options.color instanceof Color ? options.color : Color.fromCssColorString(DEFAULT_COLOR_STRING)
  const pixelOffset = options.pixelOffset

  // 操作提示文本
  const toolTipText = "单击开始绘制</br>右键取消绘制"
  const tooltip = new Tooltip(viewer.container)
  tooltip.setVisible(true)
  // 设置光标样式
  Cursor.setStyle("sight", viewer)
  // 绘制函数
  const _handler = new ScreenSpaceEventHandler(viewer.canvas)

  // 绘制完成或取消，销毁资源
  const onFinished = () => {
    // 销毁提示文本
    tooltip.destroy()
    // 还原光标样式
    Cursor.recover(viewer)
    // 销毁handelr
    _handler.destroy()
  }

  // // 尽可能吸附到地表
  // _handler.setInputAction((click: ScreenSpaceEventHandler.PositionedEvent) => {
  //   const coordinate = windowPosition2WorldCoordinate(click.position, viewer)
  //   if (coordinate) {
  //     coordinate.height *= viewer.scene.globe.terrainExaggeration
  //     // coordinate.height = 0
  //     const cartesian3 = worldCoordinateToCartesian(coordinate, viewer.scene.globe.ellipsoid)
  //     onFinished()
  //     // 创建billboard
  //     const collection = new BillboardCollection({ scene: viewer.scene })
  //     collection.add({
  //       position: cartesian3,
  //       id,
  //       show,
  //       scale,
  //       image,
  //       pixelOffset,
  //       eyeOffset: coordinate.height < 0 ? new Cartesian3(0, 0, coordinate.height) : undefined,
  //       color: options.Color
  //     })
  //     callback(collection)
  //   }
  // }, ScreenSpaceEventType.LEFT_CLICK)

  // // 暂时画在椭球表面，如果设置在在
  // const cartesian3 = windowPositionToEllipsoidCartesian(click.position, viewer)
  // if (cartesian3) {
  //   // // 向上抬高1m，避免与地形重叠
  //   // // coordinate.height += (coordinate.height + 10) * viewer.scene.globe.terrainExaggeration
  //   // coordinate.height = 0
  //   // const cartesian3 = worldCoordinateToCartesian(coordinate, viewer.scene.globe.ellipsoid)

  // 取椭球表面的坐标，对用无地形的情况
  _handler.setInputAction((click: ScreenSpaceEventHandler.PositionedEvent) => {
    const cartesian3 = windowPositionToEllipsoidCartesian(click.position, viewer)
    if (cartesian3) {
      onFinished()
      // 创建billboard
      const collection = new BillboardCollection({ scene: viewer.scene })
      collection.add({
        position: cartesian3,
        id: featureId,
        show,
        scale,
        image,
        pixelOffset,
        color: color
      })
      const coor = cartesian3ToCoordinate(cartesian3, viewer)
      const result = {
        p: collection,
        id: uuid,
        coordinates: [coor]
      }
      // 回调连同经纬度一起返回
      callback(result)
    }
  }, ScreenSpaceEventType.LEFT_CLICK)

  // 监听鼠标移动
  _handler.setInputAction((e: ScreenSpaceEventHandler.MotionEvent) => {
    tooltip.showAt(e.endPosition, toolTipText)
  }, ScreenSpaceEventType.MOUSE_MOVE)

  // 监听鼠标右键
  _handler.setInputAction(() => {
    onFinished()
    cancelCallback && cancelCallback()
  }, ScreenSpaceEventType.RIGHT_CLICK)

  return onFinished
}

export default drawBillboard
