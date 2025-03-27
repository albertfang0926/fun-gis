// types
import type { Coordinate } from "../../types/coordinate"
import {
  Cartesian3,
  CircleOutlineGeometry,
  Transforms,
  Viewer,
  Matrix4,
  EllipsoidGeodesic,
  Cartographic
} from "mars3d-cesium"
// third-parties
import {
  Primitive,
  EllipseGeometry,
  GeometryInstance,
  PointPrimitiveCollection,
  ScreenSpaceEventHandler,
  ScreenSpaceEventType,
  defaultValue,
  Color,
  Material,
  PrimitiveCollection,
  ArcType,
  MaterialAppearance,
  Math as czmMath
} from "mars3d-cesium"
// customs
// import Cursor from "../../utils/cursor"
// import Tooltip from "../../utils/tooltip"
import {
  Cursor,
  Tooltip,
  createUid,
  convertArea,
  getCoordinateArea,
  getRectangleCoorByTwoPoints,
  windowPositionToEllipsoidCartesian,
  cartesian3ToCoordinate,
  coordinatesToCartesian3Array,
  isSameCoordinate,
  coordinateToCartesian3
} from "../../utils"
// import { Settings } from "../config"
// import { createUid } from "../../utils"
// import { convertArea } from "../utils"
// import { getCoordinateArea, getRectangleCoorByTwoPoints } from "../../utils/geometry"
// import {
//   windowPositionToEllipsoidCartesian,
//   cartesian3ToCoordinate,
//   coordinatesToCartesian3Array,
//   isSameCoordinate
// } from "../../utils/coordinate"
import { getPolylinePrimitive } from "../polyline/utils"
import { push } from "echarts/types/src/component/dataZoom/history.js"

const DEFAULT_COLOR_STRING = "#ffffff"
/**
 * 绘制功能的全局设置
 */
const Settings = {
  // 判断为双击事件的间隔，单位：毫秒
  LEFT_DOUBLE_CLICK_TIME_INTERVAL: 200
}

const drawCircle = (
  viewer: Viewer,
  options: Record<string, any>,
  callback: (e: any) => void,
  cancelCallback?: () => void
) => {
  // 解析参数
  const uuid = options.id || createUid()
  const featureId = { uuid }
  const show = defaultValue(options.show, true)
  const pixelSize = defaultValue(options.pointSize, 7)
  const width = defaultValue(options.lineWidth, 2)
  const rectangleColor = options.color instanceof Color ? options.color : Color.fromCssColorString(DEFAULT_COLOR_STRING)
  const arcType = defaultValue(options.arcType, ArcType.GEODESIC)
  const distanceType = defaultValue(options.distanceType, "千米")
  const allowPicking = defaultValue(options.allowPicking, true)
  const material =
    options.material instanceof Material ? options.material : Material.fromType("Color", { color: rectangleColor })

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
    end: "单击左键结束绘制</br>右键取消绘制"
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
    viewer.scene.primitives.remove(movingLineCollection)
  }

  // 绘制过程重临时创建的 顶点 和 线段
  const tempPointCollection = new PointPrimitiveCollection()
  const movingLineCollection = new PrimitiveCollection()
  viewer.scene.primitives.add(tempPointCollection)
  viewer.scene.primitives.add(movingLineCollection)
  // 记录顶点的坐标
  const coordList: Coordinate[] = []
  let lastClickTime = Date.now()

  // TODO: 检查是否在原地进行双击，请确保能够画出矩形
  // 没有监听双击事件，不需要判断双击间隔

  // -- 左击 确定顶点 以及 完成绘制
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

      // 转经纬度坐标
      const coor = cartesian3ToCoordinate(cartesian3, viewer)
      const cLength = coordList.length

      // 还没有确定矩形的顶点
      if (cLength <= 0) {
        // 添加矩形的一个顶点
        tempPointCollection.add({ show, rectangleColor, pixelSize, position: cartesian3 })
        coordList.push(coor)
      } else {
        // 判断是否点击了同一个点
        if (isSameCoordinate(coordList[cLength - 1], coor)) {
          return
        }
        // 已经确定了矩形的一个顶点，再选一个顶点可以确定矩形
        const rectangleCoor = getRectangleCoorByTwoPoints(coordList[0], coor)
        const positions = coordinatesToCartesian3Array(rectangleCoor, viewer)
        // 最后的生成的primitive用调用者确定是否可以点击
        polylineOptions.allowPicking = allowPicking
        // 生成矩形
        // const primitive = getPolylinePrimitive(featureId, positions, polylineOptions)
        const centerC3 = coordinateToCartesian3(coordList[0], viewer)
        const radius = Cartesian3.distance(centerC3, cartesian3)
        // const primitive = getEllipsePrimitive(coordinateToCartesian3(coordList[0], viewer), radius, radius)
        const primitive = getCircle(featureId, coordinateToCartesian3(coordList[0], viewer), radius)
        const result = {
          p: primitive,
          id: uuid,
          coordinates: [coordList[0], coor]
        }
        onFinished()
        callback && callback(result)
      }
    }
  }, ScreenSpaceEventType.LEFT_CLICK)

  // -- 移动
  _handler.setInputAction((move: ScreenSpaceEventHandler.MotionEvent) => {
    if (coordList.length === 0) {
      tooltip.showAt(move.endPosition, toolTipText.start)
      return
    }
    // 计算鼠标位置处的坐标
    const cartesian3 = windowPositionToEllipsoidCartesian(move.endPosition, viewer)
    if (!cartesian3) {
      return
    }

    const mouseCoor = cartesian3ToCoordinate(cartesian3, viewer)
    // 计算鼠标停留在当前位置所构成的矩形
    const rectangleCoor = getRectangleCoorByTwoPoints(coordList[0], mouseCoor)
    const positions = coordinatesToCartesian3Array(rectangleCoor, viewer)
    // 更新地图上显示的矩形
    if (movingLineCollection.length > 0) {
      movingLineCollection.removeAll()
    }

    const centerC3 = coordinateToCartesian3(coordList[0], viewer)
    const radius = Cartesian3.distance(centerC3, cartesian3)
    // const primitive = getEllipsePrimitive(coordinateToCartesian3(coordList[0], viewer), radius, radius) // getPolylinePrimitive(undefined, positions, polylineOptions)

    const primitive = getCircle(undefined, coordinateToCartesian3(coordList[0], viewer), radius)
    movingLineCollection.add(primitive)
    // 计算矩形的面积，默认单位是平方米
    const area = getCoordinateArea(rectangleCoor)
    const convertedArea =
      area !== undefined ? (areaType === "m²" ? area.toFixed(2) : convertArea(area, "m²", areaType).toFixed(2)) : "未知"

    tooltip.showAt(move.endPosition, toolTipText.end)
    // tooltip.showAt(move.endPosition, "面积：" + convertedArea + areaType + "</br>" + toolTipText.end)
  }, ScreenSpaceEventType.MOUSE_MOVE)

  // -- 右击 取消绘制
  _handler.setInputAction(() => {
    onFinished()
    cancelCallback && cancelCallback()
  }, ScreenSpaceEventType.RIGHT_CLICK)

  return onFinished
}

function getEllipsePrimitive(
  center: Cartesian3,
  semiMajorAxis: number,
  semiMinorAxis: number,
  id: any = undefined,
  allowPicking = true,
  width = 3,
  color = "#ffffff"
) {
  const geoInstance = new GeometryInstance({
    geometry: new EllipseGeometry({
      center: center,
      semiMajorAxis: semiMajorAxis,
      semiMinorAxis: semiMinorAxis,
      granularity: 0.005
    }),
    id: id
  })
  return new Primitive({
    appearance: new MaterialAppearance({
      material: Material.fromType("Color", {
        color: Color.fromAlpha(Color.fromCssColorString(color), 0.5)
      }),
      translucent: true
    }),

    geometryInstances: [geoInstance],
    releaseGeometryInstances: true,
    asynchronous: false,
    allowPicking: allowPicking
  })
}

export function getCircle(
  id: { uuid: string },
  center: Cartesian3,
  radius: number,
  granularity: number = 0.001,
  width: number = 3,
  color = "#FFFFFF"
) {
  // 生成primitive的选项
  const polylineOptions = {
    width: width,
    arcType: ArcType.GEODESIC,
    material: Material.fromType("Color", {
      color: Color.fromAlpha(Color.fromCssColorString(color), 1.0)
    }),
    allowPicking: true,
    asynchronous: false,
    releaseGeometryInstances: true
  }
  // method 1
  const geometry = new CircleOutlineGeometry({ center: center, radius: radius, granularity: granularity })
  const circle = CircleOutlineGeometry.createGeometry(geometry)
  const _positions = circle.attributes.position.values as number[]
  const positions = [].slice.call(_positions)
  const positionC3 = []
  for (let i = 0; i < positions.length; i += 3) {
    positionC3.push(Cartesian3.fromArray(positions, i))
  }
  // method 2
  // const transform = Transforms.eastNorthUpToFixedFrame(center)
  // for (let i = 0; i < czmMath.TWO_PI; i += granularity / 4) {
  //   const localX = radius * Math.cos(i)
  //   const localY = radius * Math.sin(i)
  //   const localPosition = new Cartesian3(localX, localY, 0)
  //   const worldPosition = Matrix4.multiplyByPoint(transform, localPosition, new Cartesian3())
  //   const cartographic = Cartographic.fromCartesian(worldPosition)
  //   const c3 = Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 0)
  //   positionC3.push(c3)
  // }

  return getPolylinePrimitive(id, [...positionC3, positionC3[0]], polylineOptions)
}
//   const positions = []
//   for (let i = 0; i <= 2 * czmMath.PI; i += granularity) {}
// }
export default drawCircle
