// types
import type { Coordinate } from "../../types/coordinate"
import type { Viewer } from "mars3d-cesium"
// third-parties
import {
  PointPrimitiveCollection,
  ScreenSpaceEventHandler,
  ScreenSpaceEventType,
  defaultValue,
  Color,
  Cartesian3,
  Material,
  PrimitiveCollection,
  ArcType
} from "mars3d-cesium"
// import Cursor from "../../utils/cursor"
// import Tooltip from "../../utils/tooltip"
// customs
import {
  Cursor,
  Tooltip,
  createUid,
  convertArea,
  getCoordinateArea,
  windowPositionToEllipsoidCartesian,
  cartesian3ToCoordinate,
  isSameCoordinate
} from "../../utils"

// import { Settings } from "../config"
// import { createUid } from "../../utils"
// import { convertArea } from "../../utils/convert"
// import { getCoordinateArea } from "../../utils/geometry"
// import { windowPositionToEllipsoidCartesian, cartesian3ToCoordinate, isSameCoordinate } from "../../utils/coordinate"
import { getPolylinePrimitive } from "./utils"

const DEFAULT_COLOR_STRING = "#ffffff"
const Settings = {
  // 判断为双击事件的间隔，单位：毫秒
  LEFT_DOUBLE_CLICK_TIME_INTERVAL: 200
}

const drawPolygon = (
  viewer: Viewer,
  options: Record<string, any>,
  callback: (e: any) => void,
  cancelCallback?: () => void
) => {
  // 解析参数
  const uuid = options.id || createUid()
  const featureId = { uuid }
  const show = defaultValue(options.show, true)
  const pixelSize = defaultValue(options.pointSize, 6)
  const width = defaultValue(options.lineWidth, 2)
  const polygonColor = options.color instanceof Color ? options.color : Color.fromCssColorString(DEFAULT_COLOR_STRING)
  const arcType = defaultValue(options.arcType, ArcType.GEODESIC)
  const distanceType = defaultValue(options.distanceType, "千米")
  const allowPicking = defaultValue(options.allowPicking, true)
  const material =
    options.material instanceof Material ? options.material : Material.fromType("Color", { color: polygonColor })

  // 生成primitive的选项
  const polylineOptions = {
    width,
    arcType,
    material,
    allowPicking: false,
    asynchronous: false,
    releaseGeometryInstances: true
  }

  // 操作提示文本
  const toolTipText = {
    start: "单击开始绘制</br>右键取消绘制",
    second: "单击添加点</br>右键取消绘制",
    end: "单击添加点</br>双击结束绘制</br>右键取消绘制"
  }
  const tooltip = new Tooltip(viewer.container)
  tooltip.setVisible(true)
  // 设置光标样式
  Cursor.setStyle("cross", viewer)
  // 单位转换
  const areaType = distanceType === "米" ? "m²" : distanceType === "千米" ? "km²" : "nmi²"
  // 双击判定间隔
  const DBCLICK_INTERVAL = Settings.LEFT_DOUBLE_CLICK_TIME_INTERVAL
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
    // 删除点
    viewer.scene.primitives.remove(tempPointCollection)
    viewer.scene.primitives.remove(tempLineCollection)
    viewer.scene.primitives.remove(movingLineCollection)
  }

  // 绘制过程重临时创建的 顶点 和 线段
  const tempPointCollection = new PointPrimitiveCollection()
  const tempLineCollection = new PrimitiveCollection()
  const movingLineCollection = new PrimitiveCollection()
  viewer.scene.primitives.add(tempPointCollection)
  viewer.scene.primitives.add(tempLineCollection)
  viewer.scene.primitives.add(movingLineCollection)
  // 记录顶点的坐标
  const positionList: Cartesian3[] = []
  const coordList: Coordinate[] = []
  let lastClickTime = Date.now()

  // -- 左击
  _handler.setInputAction((click: ScreenSpaceEventHandler.PositionedEvent) => {
    const currentTime = Date.now()
    const timeInterval = currentTime - lastClickTime
    lastClickTime = currentTime

    if (timeInterval > DBCLICK_INTERVAL) {
      // 屏幕坐标转三维笛卡尔坐标
      const cartesian3 = windowPositionToEllipsoidCartesian(click.position, viewer)
      // 未点击在地球上，不做处理
      if (!cartesian3) {
        return
      }

      const pLength = positionList.length
      // 判断点击的位置与上一个点是否相同，相同就不添加新的点
      const coor = cartesian3ToCoordinate(cartesian3, viewer)
      if (pLength > 0 && isSameCoordinate(coordList[pLength - 1], coor)) {
        return
      }

      // 绘制顶点
      tempPointCollection.add({ show, polygonColor, pixelSize, position: cartesian3 })
      // 绘制折线
      if (pLength > 0) {
        const primitive = getPolylinePrimitive(undefined, [positionList[pLength - 1], cartesian3], polylineOptions)
        tempLineCollection.add(primitive)
      }
      positionList.push(cartesian3)
      coordList.push(coor)
    }
  }, ScreenSpaceEventType.LEFT_CLICK)

  // -- 移动
  _handler.setInputAction((move: ScreenSpaceEventHandler.MotionEvent) => {
    const pLength = positionList.length
    if (pLength < 1) {
      // tooltip.showAt(move.endPosition, pLength < 1 ? toolTipText.start : toolTipText.second)
      tooltip.showAt(move.endPosition, toolTipText.start)
      return
    }
    // 计算鼠标位置处的坐标
    const cartesian3 = windowPositionToEllipsoidCartesian(move.endPosition, viewer)
    if (!cartesian3) {
      return
    }

    // 如果只确定了一个顶点，那么只用更新一条线段
    if (pLength === 1) {
      movingLineCollection.removeAll()
      const primitive = getPolylinePrimitive(undefined, [positionList[pLength - 1], cartesian3], polylineOptions)
      movingLineCollection.add(primitive)
      // 更新tooltip
      tooltip.showAt(move.endPosition, toolTipText.second)
    } else {
      // 如果已经确定了至少两个顶点，那么需要更新两条线段
      movingLineCollection.removeAll()
      const primitive = getPolylinePrimitive(
        undefined,
        [positionList[pLength - 1], cartesian3, positionList[0]],
        polylineOptions
      )
      movingLineCollection.add(primitive)
      // 计算面积，单位是平方米
      const mouseCoor = cartesian3ToCoordinate(cartesian3, viewer)
      const polygonCoors = [...coordList, mouseCoor, coordList[0]]
      const area = getCoordinateArea(polygonCoors)
      // 进行单位转换
      const convertedArea =
        area !== undefined
          ? areaType === "m²"
            ? area.toFixed(2)
            : convertArea(area, "m²", areaType).toFixed(2)
          : "未知"

      // 更新tooltip
      tooltip.showAt(move.endPosition, toolTipText.end)
    }
  }, ScreenSpaceEventType.MOUSE_MOVE)

  // -- 双击
  _handler.setInputAction(() => {
    if (coordList.length < 3) {
      console.error("请至少选择三个坐标点")
      return
    }
    // 闭合多边形
    const positions = [...positionList, positionList[0]]
    coordList.push(coordList[0])
    // 最后的生成的primitive用调用者确定是否可以点击
    polylineOptions.allowPicking = allowPicking
    const primitive = getPolylinePrimitive(featureId, positions, polylineOptions)
    const result = {
      p: primitive,
      id: uuid,
      coordinates: coordList
    }

    onFinished()
    // 回调函数
    callback && callback(result)
  }, ScreenSpaceEventType.LEFT_DOUBLE_CLICK)

  _handler.setInputAction(() => {
    onFinished()
    cancelCallback && cancelCallback()
  }, ScreenSpaceEventType.RIGHT_CLICK)

  return onFinished
}

export default drawPolygon
