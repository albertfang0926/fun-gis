import type { Viewer } from "cesium"
import {
  BillboardCollection, ScreenSpaceEventHandler, ScreenSpaceEventType,
  defaultValue, Cartesian2, Color, Primitive, Model, Transforms
} from "cesium"
import Cursor from "../../utils/cursor"
import Tooltip from "../../utils/tooltip"
import { createUid } from "../../utils"
import { cartesian3ToCoordinate, windowPositionToEllipsoidCartesian } from "../../utils/coordinate"


const drawModel = (viewer: Viewer, options: Record<string, any>, callback: (e:any)=>void, cancelCallback?: ()=>void) => {
  // 解析参数
  const uuid = options.id || createUid()
  const featureId = { uuid }
  const url = defaultValue(options.url, "")
  const show = defaultValue(options.show, true)
  const scale = defaultValue(options.scale, 1.0)

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
  // 取椭球表面的坐标，对用无地形的情况
  _handler.setInputAction(async (click: ScreenSpaceEventHandler.PositionedEvent) => {
    const cartesian3 = windowPositionToEllipsoidCartesian(click.position, viewer)
    if (cartesian3) {

      onFinished()
      // 创建model
      const collection = await Model.fromGltfAsync({
        id: featureId,
        url: url,
        modelMatrix: Transforms.eastNorthUpToFixedFrame(cartesian3),
        scale: scale
        // minimumPixelSize: 10
      })
      const coor = cartesian3ToCoordinate(cartesian3, viewer)
      const result = {
        p: collection,
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

export default drawModel

