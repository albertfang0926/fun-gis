// third-parties
import {
  PointPrimitiveCollection,
  PrimitiveCollection,
  Primitive,
  GeometryInstance,
  PolylineGeometry,
  PolylineMaterialAppearance,
  ScreenSpaceEventHandler,
  ScreenSpaceEventType,
  defaultValue,
  Color,
  Cartesian3,
  ArcType,
  Material
} from "mars3d-cesium"
// customs
import { Settings } from "./../config"
import { createUid, Cursor, Tooltip } from "../../utils"
import { hermiteSplineCornerCurve, linearSplineCurve } from "../../utils/curve"
import {
  windowPositionToEllipsoidCartesian,
  cartesian3ToCoordinate,
  coordinateToCartesian3,
  coordinatesToCartesian3Array,
  isSameCoordinate
} from "../../utils/coordinate"
// types
import type { Coordinate } from "../../types/coordinate"
import type { Viewer } from "mars3d-cesium"

export type PolylineInterpolationType = "HermiteSpline" | "CatmullRomSpline" | "BezierSpline"
export interface CurveLineDrawOption {
  id?: string
  show?: boolean
  pointSize?: number
  lineWidth?: number
  color?: Color
  material?: Material
  allowPicking?: boolean
  haveHeight?: boolean
  defaultHeight?: number
  arcType?: ArcType
  resolution?: number
  sharpness?: number
  // interpolation_type?: PolylineInterpolationType
  // interpolation_num?: number
}

const DEFAULT_MATERIAL = Material.fromType("PolylineDash", {
  color: Color.YELLOW.withAlpha(0.85)
})

const drawCurveLine = (
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
  const color = options.color || Color.fromCssColorString("#FFFFFF")
  const material = defaultValue(options.material, DEFAULT_MATERIAL)
  // 折线类型
  const arcType = defaultValue(options.arcType, ArcType.GEODESIC)
  // 是否允许点击拾取
  const allowPicking = defaultValue(options.allowPick, true)
  // 曲线插值密度
  const resolution = defaultValue(options.resolution, 10)
  // 曲线弧度
  const sharpness = defaultValue(options.sharpness, 0.5)
  // // 曲线插值方法
  // const interpolation_type = defaultValue(options.interpolation_type, "HermiteSpline")

  // 关于深度的设置
  const haveHeight = defaultValue(options.haveHeight, false)
  const defaultHeight = defaultValue(options.defaultHeight, 0)
  // 双击间隔
  const DBCLICK_INTERVAL = Settings.LEFT_DOUBLE_CLICK_TIME_INTERVAL
  // 椭球
  const ellipsoid = viewer.scene.globe.ellipsoid

  // 操作提示文本
  const toolTipText = {
    start: "单击开始绘制</br>右键取消绘制",
    end: "单击添加点</br>双击结束绘制</br>右键取消绘制"
  }
  const tooltip = new Tooltip(viewer.container)
  tooltip.setVisible(true)
  // 设置光标样式
  Cursor.setStyle("pen", viewer)

  // 绘制完成或取消，销毁资源
  const onFinished = () => {
    // 销毁提示文本
    tooltip.destroy()
    // 还原光标样式
    Cursor.recover(viewer)
    // 销毁handelr
    _handler.destroy()
    // 删除事件
    viewer.scene.preUpdate.removeEventListener(_preUpdateHandler)
    // 删除点
    viewer.scene.primitives.remove(tempPointCollection)
    viewer.scene.primitives.remove(rhumbLineCollection)
    viewer.scene.primitives.remove(movingLineCollection)
  }

  // 绘制过程重临时创建的 顶点 和 线段
  const tempPointCollection = new PointPrimitiveCollection()
  const rhumbLineCollection = new PrimitiveCollection()
  const movingLineCollection = new PrimitiveCollection()
  viewer.scene.primitives.add(tempPointCollection)
  viewer.scene.primitives.add(rhumbLineCollection)
  viewer.scene.primitives.add(movingLineCollection)
  // // 记录顶点的坐标 (插值后的)
  // let positionList: Cartesian3[] = []
  // let coordList: Coordinate[] = []
  // 记录控制点坐标
  const controlPoints: Coordinate[] = []
  // 记录临时坐标
  let tempLinePositions: Cartesian3[] = []
  let tempLineCoordinates: Coordinate[] = []
  // 是否要更新
  let changedFlag = false

  // 生成等角航线primitive
  const generateRhumbLine = (positions: Cartesian3[], id: any = undefined, allowPicking = false) => {
    // 生成新的航路primitive
    const geometryInstance = new GeometryInstance({
      geometry: new PolylineGeometry({
        positions: positions,
        width: width,
        arcType: arcType
      }),
      id: id
    })
    const primitive = new Primitive({
      appearance: new PolylineMaterialAppearance({
        material: material
      }),
      geometryInstances: [geometryInstance],
      releaseGeometryInstances: true,
      asynchronous: false,
      allowPicking: allowPicking
    })
    return primitive
  }

  // 处理坐标
  const dealWithCoordinate = (cartesian3: Cartesian3): [Cartesian3, Coordinate] => {
    // 处理深度
    if (haveHeight) {
      const coor = cartesian3ToCoordinate(cartesian3, viewer)
      const newCoor = {
        longitude: coor.longitude,
        latitude: coor.latitude,
        height: defaultHeight
      }
      const c3 = coordinateToCartesian3(newCoor, viewer)
      return [c3, newCoor]
    } else {
      const coor = cartesian3ToCoordinate(cartesian3, viewer)
      return [cartesian3, coor]
    }
  }

  // 无闪烁更新
  const _preUpdateHandler = () => {
    if (changedFlag) {
      changedFlag = false
      const primitive = generateRhumbLine(tempLinePositions)
      if (movingLineCollection.length > 0) {
        movingLineCollection.removeAll()
      }
      movingLineCollection.add(primitive)
    }
  }
  viewer.scene.preUpdate.addEventListener(_preUpdateHandler)

  // 准备工作
  const _handler = new ScreenSpaceEventHandler(viewer.canvas)
  // let validClick = false
  let lastClickTime = Date.now()

  // -- 左击
  _handler.setInputAction((click: ScreenSpaceEventHandler.PositionedEvent) => {
    const currentTime = Date.now()
    const timeInterval = currentTime - lastClickTime
    lastClickTime = currentTime

    if (timeInterval > DBCLICK_INTERVAL) {
      // 屏幕坐标转三维笛卡尔坐标
      const cartesian3 = windowPositionToEllipsoidCartesian(click.position, viewer)
      // 没选中地球上的坐标
      if (cartesian3 === undefined) {
        // validClick = false
        return
      }

      const [c3, coor] = dealWithCoordinate(cartesian3)
      // 对点击同一个点的情况做特殊处理
      const cLength = controlPoints.length
      if (cLength > 0) {
        const sample = controlPoints[cLength - 1]
        if (isSameCoordinate(sample, coor)) {
          // validClick = false
          return
        }
      }

      // validClick = true
      // 记录控制点坐标
      controlPoints.push(coor)
      // 绘制顶点
      tempPointCollection.add({ show, color, pixelSize, position: c3 })

      // // 控制点只影响当前线段和上一条线段，上上一条线段就不不发生变化了，直接固化
      // if (tempLinePositions.length > 1 && controlPoints.length > 3) {
      //   const fixedPositions = tempLinePositions.slice(0, resolution + 2)
      //   const primitive = generateRhumbLine(fixedPositions)
      //   rhumbLineCollection.add(primitive)
      //   // 存储坐标
      //   positionList = positionList.concat(fixedPositions)
      //   coordList = coordList.concat(tempLineCoordinates.slice(0, resolution + 2))
      // }
    }
  }, ScreenSpaceEventType.LEFT_CLICK)

  // -- 移动
  _handler.setInputAction((move: ScreenSpaceEventHandler.MotionEvent) => {
    const cLength = controlPoints.length
    if (cLength <= 0) {
      tooltip.showAt(move.endPosition, toolTipText.start)
      return
    }
    // 计算鼠标位置处的坐标
    const cartesian3 = windowPositionToEllipsoidCartesian(move.endPosition, viewer)
    if (!cartesian3) {
      return
    }

    const [c3, coor] = dealWithCoordinate(cartesian3)
    // 在preUpdate时更新航路
    changedFlag = true

    // if (cLength === 1) {
    //   // 两个点的时候进行线性插值
    //   const cPoints = [controlPoints[cLength - 1], coor]
    //   tempLineCoordinates = LinearSplineCurve(cPoints, resolution)
    //   tempLinePositions = coordinatesToCartesianArray(tempLineCoordinates, ellipsoid)
    // } else if (cLength === 2) {
    //   const cPoints = [controlPoints[cLength - 2], controlPoints[cLength - 1], coor]
    //   tempLineCoordinates = hermiteSplineCornerCurve(cPoints, { resolution, sharpness })
    //   // 更新当前的曲线
    //   tempLinePositions = coordinatesToCartesianArray(tempLineCoordinates, ellipsoid)
    // } else {
    //   const cPoints = [controlPoints[cLength - 3], controlPoints[cLength - 2], controlPoints[cLength - 1], coor]
    //   tempLineCoordinates = hermiteSplineCornerCurve(cPoints, { resolution, sharpness })
    //   // 更新当前的曲线
    //   tempLinePositions = coordinatesToCartesianArray(tempLineCoordinates, ellipsoid)
    // }

    const cPoints = controlPoints.concat(coor)
    tempLineCoordinates =
      cLength === 1
        ? linearSplineCurve(cPoints, resolution)
        : hermiteSplineCornerCurve(cPoints, { resolution, sharpness })
    tempLinePositions = coordinatesToCartesian3Array(tempLineCoordinates, viewer)

    // 更新tooltip位置和内容
    tooltip.showAt(move.endPosition, toolTipText.end)
  }, ScreenSpaceEventType.MOUSE_MOVE)

  // -- 左双击
  _handler.setInputAction(() => {
    const cLength = controlPoints.length
    if (cLength < 2) {
      console.error("请至少选择两个坐标点")
      return
    }

    // 暂时不对重复点击同一个点的情况进行处理，包括在地球外双击，默认把已经绘制的线段进行返回
    // 处理剩余的坐标
    // const tLength = tempLinePositions.length
    // if (tLength > 0) {
    //   positionList = positionList.concat(tempLinePositions.slice(resolution + 2, tLength))
    //   coordList = coordList.concat(tempLineCoordinates.slice(resolution + 2, tLength))
    // }

    // 重新插一遍值，避免出现问题
    tempLineCoordinates =
      cLength === 2
        ? linearSplineCurve(controlPoints, resolution)
        : hermiteSplineCornerCurve(controlPoints, { resolution, sharpness })
    tempLinePositions = coordinatesToCartesian3Array(tempLineCoordinates, viewer)

    const primitive = generateRhumbLine(tempLinePositions, featureId, allowPicking)
    const result = {
      p: primitive,
      id: uuid,
      coordinates: controlPoints, // 原始控制点
      positions: tempLineCoordinates // 插值后的点
    }
    onFinished()
    // 回调函数
    callback && callback(result)
  }, ScreenSpaceEventType.LEFT_DOUBLE_CLICK)

  // -- 右击
  _handler.setInputAction(() => {
    onFinished()
    cancelCallback && cancelCallback()
  }, ScreenSpaceEventType.RIGHT_CLICK)

  return onFinished
}

export default drawCurveLine

// #region 废弃的方法

// const drawRhumbLine = (viewer: Viewer, options: Record<string, any>, callback: (e:any)=>void, cancelCallback?: ()=>void) => {
//   // 解析参数
//   const uuid = options.id || createUid()
//   const featureId = { uuid }
//   const show = defaultValue(options.show, true)
//   const pixelSize = defaultValue(options.pointSize, 6)
//   const width = defaultValue(options.lineWidth, 2)
//   const color = options.color || Color.fromCssColorString("#FFFFFF")
//   const material = defaultValue(options.material, DEFAULT_MATERIAL)
//   // const interpolation_num = defaultValue(options.interpolation_num, 3000)
//   // // 曲线插值方法
//   // const interpolation_type = defaultValue(options.interpolation_type, "HermiteSpline")
//   // 转弯半径
//   const turnRadius = defaultValue(options.turnRadius, 20)
//   // 曲线控制点密度 ( 样点之间的距离 )
//   const itpDist = defaultValue(options.interpolation_dist, 10)
//   // 折线类型
//   const arcType = defaultValue(options.arcType, ArcType.GEODESIC)

//   // 关于深度的设置
//   const haveHeight = defaultValue(options.haveHeight, false)
//   const defaultHeight = defaultValue(options.defaultHeight, 0)
//   // 双击间隔
//   const DBCLICK_INTERVAL = Settings.LEFT_DOUBLE_CLICK_TIME_INTERVAL
//   // 椭球
//   const ellipsoid = viewer.scene.globe.ellipsoid

//   // 操作提示文本
//   const toolTipText = {
//     start: "单击开始绘制</br>右键取消绘制",
//     end: "单击添加点</br>双击结束绘制</br>右键取消绘制"
//   }
//   const tooltip = new Tooltip(viewer.container)
//   tooltip.setVisible(true)
//   // 设置光标样式
//   Cursor.setStyle("pen", viewer)

//   // 绘制完成或取消，销毁资源
//   const onFinished = () => {
//     // 销毁提示文本
//     tooltip.destroy()
//     // 还原光标样式
//     Cursor.recover(viewer)
//     // 销毁handelr
//     _handler.destroy()
//     // 删除事件
//     viewer.scene.preUpdate.removeEventListener(_preUpdateHandler)
//     // 删除点
//     viewer.scene.primitives.remove(tempPointCollection)
//     viewer.scene.primitives.remove(rhumbLineCollection)
//     viewer.scene.primitives.remove(movingLineCollection)
//   }

//   // 绘制过程重临时创建的 顶点 和 线段
//   const tempPointCollection = new PointPrimitiveCollection()
//   const rhumbLineCollection = new PrimitiveCollection()
//   const movingLineCollection = new PrimitiveCollection()
//   viewer.scene.primitives.add(tempPointCollection)
//   viewer.scene.primitives.add(rhumbLineCollection)
//   viewer.scene.primitives.add(movingLineCollection)
//   // 记录顶点的坐标
//   const positionList: Cartesian3[] = []
//   const coordList: Coordinate[] = []
//   let lastClickTime = JulianDate.now()
//   let changedFlag = false
//   let tempLinePositions: Cartesian3[] = []
//   let tempPreLine: Cartesian3[] = []
//   let prevControlPoint: Coordinate | undefined

//   // 生成等角航线primitive
//   const generateRhumbLine = (positions: Cartesian3[], asynchronous = false) => {
//     // 生成新的航路primitive
//     const geometryInstance = new GeometryInstance({
//       geometry: new PolylineGeometry({
//         positions: positions,
//         width: width,
//         arcType: arcType
//       })
//     })
//     const primitive = new Primitive({
//       appearance: new PolylineMaterialAppearance({
//         material: material
//       }),
//       geometryInstances: [geometryInstance],
//       releaseGeometryInstances: true,
//       asynchronous: asynchronous,
//       allowPicking: false // 禁止pick
//     })
//     return primitive
//   }

//   // 处理坐标
//   const dealWithCoordinate = (cartesian3: Cartesian3): [Cartesian3, Coordinate] => {
//     // 处理深度
//     if (haveHeight) {
//       const coor = cartesian3ToCoordinate(cartesian3, viewer)
//       const newCoor = {
//         longitude: coor.longitude,
//         latitude: coor.latitude,
//         height: defaultHeight
//       }
//       const c3 = coordinateToCartesian3(newCoor, viewer)
//       return [c3, newCoor]
//     } else {
//       const coor = cartesian3ToCoordinate(cartesian3, viewer)
//       return [cartesian3, coor]
//     }
//   }

//   const _preUpdateHandler = () => {
//     // const len = movingLineCollection.length
//     // if (len > 1) {
//     //   let flag = false
//     //   for (let i = len - 1; i >= 0; i--) {
//     //     const p = movingLineCollection.get(i)
//     //     if (flag) {
//     //       movingLineCollection.remove(p)
//     //     } else if (p._state >= 3) {
//     //       flag = true
//     //     }
//     //   }
//     // }
//     if (changedFlag) {
//       changedFlag = false
//       const primitive = generateRhumbLine(tempLinePositions)
//       if (movingLineCollection.length > 0) {
//         movingLineCollection.removeAll()
//       }
//       movingLineCollection.add(primitive)
//     }
//   }
//   viewer.scene.preUpdate.addEventListener(_preUpdateHandler)

//   // 绘制函数
//   const _handler = new ScreenSpaceEventHandler(viewer.canvas)
//   _handler.setInputAction((click: ScreenSpaceEventHandler.PositionedEvent) => {
//     const currentTime = JulianDate.now()
//     const timeInterval = JulianDate.secondsDifference(currentTime, lastClickTime)
//     lastClickTime = currentTime

//     if (timeInterval > DBCLICK_INTERVAL) {
//       // 屏幕坐标转三维笛卡尔坐标
//       const cartesian3 = windowPositionToEllipsoidCartesian(click.position, viewer)
//       // 没选中地球上的坐标
//       if (cartesian3 === undefined) { return }

//       const [c3, coor] = dealWithCoordinate(cartesian3)
//       positionList.push(c3)
//       coordList.push(coor)

//       // 绘制顶点
//       tempPointCollection.add({ show, color, pixelSize, position: c3 })

//       // // 画第二个控制点的时候
//       // if (prevControlPoint !== undefined) {
//       //   // 计算第二个控制点到第一个控制点的距离
//       // }

//       // if (tempPreLine.length > 1) {
//       //   const primitive = generateRhumbLine(tempPreLine)
//       //   rhumbLineCollection.add(primitive)
//       //   tempPreLine = []
//       // }

//       // 绘制线段
//       // const pLength = coordList.length
//       // if (coordList.length >= 2) {
//       //   const primitive = generateRhumbLine([positionList[pLength - 2], positionList[pLength - 1]])
//       //   rhumbLineCollection.add(primitive)
//       // }
//     }
//   }, ScreenSpaceEventType.LEFT_CLICK)

//   _handler.setInputAction((move: ScreenSpaceEventHandler.MotionEvent) => {
//     const pLength = positionList.length
//     if (pLength <= 0) {
//       tooltip.showAt(move.endPosition, toolTipText.start)
//       return
//     }
//     // 计算鼠标位置处的坐标
//     const cartesian3 = windowPositionToEllipsoidCartesian(move.endPosition, viewer)
//     if (!cartesian3) { return }

//     const [c3, coor] = dealWithCoordinate(cartesian3)
//     // 在preUpdate时更新航路
//     changedFlag = true
//     const cLength = coordList.length
//     if (cLength < 3) {
//       tempLinePositions = [positionList[pLength - 1], c3]
//     } else {
//       const controlPoints = [coordList[cLength - 3], coordList[cLength - 2], coordList[cLength - 1], coor]
//       const samplePoints = hermiteSplineCurve(controlPoints, 150)

//       tempLinePositions = coordinatesToCartesianArray(samplePoints, ellipsoid)
//       tempPreLine = tempLinePositions.slice(0, 50)
//     }

//     // // 生成上一个点到当前点的等角航线
//     // const primitive = generateRhumbLine([positionList[pLength - 1], c3])
//     // 更新航路，先删后加
//     // if (movingLineCollection.length > 0) {
//     //   movingLineCollection.removeAll()
//     // }
//     // movingLineCollection.add(primitive)
//     // 更新tooltip位置和内容
//     tooltip.showAt(move.endPosition, toolTipText.end)

//   }, ScreenSpaceEventType.MOUSE_MOVE)

//   _handler.setInputAction(() => {
//     if (coordList.length < 2) {
//       message.error("请至少选择两个坐标点")
//       return
//     }

//     const primitive = generateRhumbLine(positionList)
//     const result = {
//       p: primitive,
//       coordinates: coordList
//     }
//     onFinished()
//     // 回调函数
//     callback && callback(result)
//   }, ScreenSpaceEventType.LEFT_DOUBLE_CLICK)

//   _handler.setInputAction(() => {
//     onFinished()
//     cancelCallback && cancelCallback()
//   }, ScreenSpaceEventType.RIGHT_CLICK)

//   return onFinished
// }

// #endregion
