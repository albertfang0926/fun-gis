import { transformCartesianToWGS84, calculateAngle } from "./coordinate"
import { tailedAttackArrow, getPointByAngleDistance, getExtensionPoint, calculateVector } from "./algorithm"
import * as Cesium from "mars3d-cesium"
import { concat } from "lodash"
// import { getDistance, type Coordinate } from "../../.."
import type { Coordinate } from "../../../types/coordinate"
import { getDistance } from "../../../utils"

/**
 * 创建攻击箭头节点
 * @param positions
 * @returns
 */
export function getAttackArrowPoints(positions: Coordinate[]) {
  const lnglatArr: [number, number][] = []
  for (let i = 0; i < positions.length; i++) {
    lnglatArr.push([positions[i].longitude, positions[i].latitude])
  }
  const res = tailedAttackArrow(lnglatArr)
  const index = JSON.stringify(res.polygonalPoint).indexOf("null")
  let points: Cesium.Cartesian3[] = []
  if (index === -1) {
    if (res.polygonalPoint) {
      points = res.polygonalPoint
    }
  }
  return points
}

/**
 * 创建扇形节点
 * @param positions
 * @returns
 */
export function calculateSectorPoints(positions: Coordinate[]) {
  if (positions.length < 3) {
    return
  }

  const distance = getDistance([positions[0], positions[1]]) * 1000
  const startAngle = calculateAngle(positions[0], positions[1])
  const endAngle = calculateAngle(positions[0], positions[2])
  // // 判断角度
  const startAngleRad = Math.min(startAngle, endAngle)
  const endAngleRad = Math.max(startAngle, endAngle)
  // 获取扇形的所有坐标值
  const coordinates: any[] = []
  // coordinates.push(pos0.longitude, pos0.latitude) // 扇形中心坐标
  coordinates.push(positions[0].longitude, positions[0].latitude)

  // 扇形边界点坐标

  const angleStep = 1
  const numPoints = (endAngleRad - startAngleRad) / angleStep // 分割圆弧的点数，可以根据需要调整
  // const angleStep = (endAngleRad - startAngleRad) / numPoints
  for (let i = 0; i <= numPoints; i++) {
    const angle = startAngleRad + i * angleStep
    const point = getExtensionPoint([positions[0].longitude, positions[0].latitude], angle, distance)
    coordinates.push(point[0], point[1])
  }
  // 确保弧线最后一个点正确
  const lastPoint = getExtensionPoint([positions[0].longitude, positions[0].latitude], endAngleRad, distance)
  coordinates.push(lastPoint[0], lastPoint[1])

  coordinates.push(positions[0].longitude, positions[0].latitude)
  return Cesium.Cartesian3.fromDegreesArray(coordinates)
  // return (coordinates)
}

/**
 * 创建弧形节点节点
 * @param positions
 * @returns
 */
export function calculateArcPoints(positions: Coordinate[]) {
  const sector = calculateSectorPoints(positions)
  if (sector) {
    sector.splice(0, 1)
    sector.pop()
    return concat(sector)
  }
}

/**
 * 创建弓形节点
 * @param positions
 * @returns
 */
export function calculateArchPoints(positions: any[]) {
  const sector = calculateSectorPoints(positions)
  if (sector) {
    sector.splice(0, 1)
    sector.pop()
    sector.push(sector[0])
    return concat(sector)
  }
}

/**
 * 计算集结地特征点
 * @param anchorpoints
 * @returns {Array}
 * @private
 */
export function computeAssemblePoints(anchorpoints: Coordinate[]): Cesium.Cartesian3[] {
  const points: Coordinate[] = []
  const originP = anchorpoints[0]
  const lastP = anchorpoints[1]
  const vectorOL = { longitude: lastP.longitude - originP.longitude, latitude: lastP.latitude - originP.latitude }
  const dOL = Math.sqrt(vectorOL.longitude * vectorOL.longitude + vectorOL.latitude * vectorOL.latitude)
  const v_O_P1_lr = calculateVector(vectorOL, Math.PI / 3, (Math.sqrt(3) / 12) * dOL)
  const originP_P1: Coordinate = v_O_P1_lr[1]
  const p1 = {
    longitude: originP.longitude + originP_P1.longitude,
    latitude: originP.latitude + originP_P1.latitude,
    height: 0
  }
  const p2 = {
    longitude: (originP.longitude + lastP.longitude) / 2,
    latitude: (originP.latitude + lastP.latitude) / 2,
    height: 0
  }
  const v_L_P3_lr = calculateVector(vectorOL, (Math.PI * 2) / 3, (Math.sqrt(3) / 12) * dOL)
  const lastP_P3 = v_L_P3_lr[1]
  const p3 = {
    longitude: lastP.longitude + lastP_P3.longitude,
    latitude: lastP.latitude + lastP_P3.latitude,
    height: 0
  }
  const v_O_P5_lr = calculateVector(vectorOL, Math.PI / 2, (1 / 2) * dOL)
  const v_O_P5 = v_O_P5_lr[0]
  const p5 = { longitude: v_O_P5.longitude + p2.longitude, latitude: v_O_P5.latitude + p2.latitude, height: 0 }
  const p0 = originP
  const p4 = lastP
  points.push(p0, p1, p2, p3, p4, p5)
  const closeCardinal = createCloseCardinal(points)
  const fb_points = calculatePointsFBZ3(closeCardinal, 100)
  const result: number[] = []
  for (let index = 0; index < fb_points.length; index++) {
    const ele = fb_points[index]
    result.push(ele.longitude, ele.latitude)
  }
  result.push(result[0], result[1])
  return Cesium.Cartesian3.fromDegreesArray(result)
}

/**
 * 生成闭合的样条点
 * @param points
 * @returns {*}
 */
export function createCloseCardinal(points: Coordinate[]): Coordinate[] {
  if (points == null || points.length < 3) {
    return points
  }
  // 获取起点，作为终点，以闭合曲线。
  const lastP = points[0]
  points.push(lastP)
  // 定义传入的点数组，将在点数组中央（每两个点）插入两个控制点
  const cPoints = points
  // 包含输入点和控制点的数组
  const cardinalPoints: Coordinate[] = []
  // 至少三个点以上
  // 这些都是相关资料测出的经验数值
  // 定义张力系数，取值在0<t<0.5
  const t = 0.4
  // 为端点张力系数因子，取值在0<b<1
  // let b = 0.5;
  // 误差控制，是一个大于等于0的数，用于三点非常趋近与一条直线时，减少计算量
  const e = 0.005
  // 传入的点数量，至少有三个，n至少为2
  const n = cPoints.length - 1
  // 从开始遍历到倒数第二个，其中倒数第二个用于计算起点（终点）的插值控制点
  for (let k = 0; k <= n - 1; k++) {
    let p0, p1, p2
    // 计算起点（终点）的左右控制点
    if (k === n - 1) {
      // 三个基础输入点
      p0 = cPoints[n - 1]
      p1 = cPoints[0]
      p2 = cPoints[1]
    } else {
      p0 = cPoints[k]
      p1 = cPoints[k + 1]
      p2 = cPoints[k + 2]
    }
    // 定义p1的左控制点和右控制点
    const p1l: any = { longitude: undefined, latitude: undefined }
    const p1r: any = { longitude: undefined, latitude: undefined }
    // 通过p0、p1、p2计算p1点的做控制点p1l和又控制点p1r
    // 计算向量p0_p1和p1_p2
    const p0_p1 = { longitude: p1.longitude - p0.longitude, latitude: p1.latitude - p0.latitude }
    const p1_p2 = { longitude: p2.longitude - p1.longitude, latitude: p2.latitude - p1.latitude }
    // 并计算模
    const d01 = Math.sqrt(p0_p1.longitude * p0_p1.longitude + p0_p1.latitude * p0_p1.latitude)
    const d12 = Math.sqrt(p1_p2.longitude * p1_p2.longitude + p1_p2.latitude * p1_p2.latitude)
    // 向量单位化
    const p0_p1_1 = { longitude: p0_p1.longitude / d01, latitude: p0_p1.latitude / d01 }
    const p1_p2_1 = { longitude: p1_p2.longitude / d12, latitude: p1_p2.latitude / d12 }
    // 计算向量p0_p1和p1_p2的夹角平分线向量
    const p0_p1_p2 = { longitude: p0_p1_1.longitude + p1_p2_1.longitude, latitude: p0_p1_1.latitude + p1_p2_1.latitude }
    // 计算向量 p0_p1_p2 的模
    const d012 = Math.sqrt(p0_p1_p2.longitude * p0_p1_p2.longitude + p0_p1_p2.latitude * p0_p1_p2.latitude)
    // 单位化向量p0_p1_p2
    const p0_p1_p2_1 = { longitude: p0_p1_p2.longitude / d012, latitude: p0_p1_p2.latitude / d012 }
    // 判断p0、p1、p2是否共线，这里判定向量p0_p1和p1_p2的夹角的余弦和1的差值小于e就认为三点共线
    const cosE_p0p1p2 = (p0_p1_1.longitude * p1_p2_1.longitude + p0_p1_1.latitude * p1_p2_1.latitude) / 1
    // 共线
    if (Math.abs(1 - cosE_p0p1p2) < e) {
      // 计算p1l的坐标
      p1l.longitude = p1.longitude - p1_p2_1.longitude * d01 * t
      p1l.latitude = p1.latitude - p1_p2_1.latitude * d01 * t
      // 计算p1r的坐标
      p1r.longitude = p1.longitude + p0_p1_1.longitude * d12 * t
      p1r.latitude = p1.latitude + p0_p1_1.latitude * d12 * t
    } else {
      // 非共线
      // 计算p1l的坐标
      p1l.longitude = p1.longitude - p0_p1_p2_1.longitude * d01 * t
      p1l.latitude = p1.latitude - p0_p1_p2_1.latitude * d01 * t
      // 计算p1r的坐标
      p1r.longitude = p1.longitude + p0_p1_p2_1.longitude * d12 * t
      p1r.latitude = p1.latitude + p0_p1_p2_1.latitude * d12 * t
    }
    // 记录起点（终点）的左右插值控制点及倒数第二个控制点
    if (k === n - 1) {
      cardinalPoints[0] = p1
      cardinalPoints[1] = p1r
      cardinalPoints[(n - 2) * 3 + 2 + 3] = p1l
      cardinalPoints[(n - 2) * 3 + 2 + 4] = cPoints[n]
    } else {
      // 记录下这三个控制点
      cardinalPoints[k * 3 + 2 + 0] = p1l
      cardinalPoints[k * 3 + 2 + 1] = p1
      cardinalPoints[k * 3 + 2 + 2] = p1r
    }
  }
  return cardinalPoints
}

/**
 * 计算三阶贝塞尔点
 * @param points
 * @param part
 * @returns {Array}
 */
export function calculatePointsFBZ3(points: any[], part: number): Array<any> {
  if (!part) {
    part = 20
  }
  // 获取待拆分的点
  const bezierPts: any = []
  let scale = 0.05
  if (part > 0) {
    scale = 1 / part
  }
  for (let i = 0; i < points.length - 3; ) {
    // 起始点
    const pointS = points[i]
    // 第一个控制点
    const pointC1 = points[i + 1]
    // 第二个控制点
    const pointC2 = points[i + 2]
    // 结束点
    const pointE = points[i + 3]
    bezierPts.push(pointS)
    for (let t = 0; t < 1; ) {
      // 三次贝塞尔曲线公式
      const longitude =
        (1 - t) * (1 - t) * (1 - t) * pointS.longitude +
        3 * t * (1 - t) * (1 - t) * pointC1.longitude +
        3 * t * t * (1 - t) * pointC2.longitude +
        t * t * t * pointE.longitude
      const latitude =
        (1 - t) * (1 - t) * (1 - t) * pointS.latitude +
        3 * t * (1 - t) * (1 - t) * pointC1.latitude +
        3 * t * t * (1 - t) * pointC2.latitude +
        t * t * t * pointE.latitude
      const point = { longitude: longitude, latitude: latitude }
      bezierPts.push(point)
      t += scale
    }
    i += 3
    if (i >= points.length) {
      bezierPts.push(pointS)
    }
  }
  return bezierPts
}

/**
 * 计算闭合曲线
 * @param points
 * @param part
 * @returns {Array}
 */
export function createCloseCurve(anchorpoints: Coordinate[]): any {
  let closeCardinal = createCloseCardinal(anchorpoints)
  closeCardinal = closeCardinal.filter((item: any) => {
    return !isNaN(item.longitude)
  })
  const fb_points = calculatePointsFBZ3(closeCardinal, 100)
  const result: number[] = []
  for (let index = 0; index < fb_points.length; index++) {
    const ele = fb_points[index]
    // result.push(ele.longitude, ele.latitude, 0)
    result.push(ele.longitude, ele.latitude)
  }
  result.push(result[0], result[1])
  return result
}

/**
 * 计算圆角矩形节点
 * @param anchor
 * @returns
 */
export function computeRoundedRectanglePoints(anchorpoints: Coordinate[]) {
  const pos0 = anchorpoints[0]
  const pos1 = anchorpoints[1]
  const o_x = (pos0.longitude + pos1.longitude) / 2
  const o_y = (pos0.latitude + pos1.latitude) / 2
  // a为矩形的长边，b为矩形的短边
  const a = Math.abs(pos0.longitude - pos1.longitude)
  const b = Math.abs(pos0.latitude - pos1.latitude)
  const r = (1 / 10) * Math.min(a, b)
  // 从左上点开始，顺时针求四个圆弧的圆心
  const o1_x = o_x - a / 2 + r
  const o1_y = o_y - b / 2 + r
  const o1 = { longitude: o1_x, latitude: o1_y }
  const o2 = { longitude: o_x + a / 2 - r, latitude: o_y - b / 2 + r }
  const o3 = { longitude: o_x + a / 2 - r, latitude: o_y + b / 2 - r }
  const o4 = { longitude: o_x - a / 2 + r, latitude: o_y + b / 2 - r }
  // 从左上角开始画圆弧
  const step = Math.PI / 180
  const points1: any[] = []
  const theta1 = Math.PI
  const theta2 = (3 / 2) * Math.PI
  let radius1 = theta1
  for (let i = 0; i < Math.abs(theta1 - theta2); i += step) {
    const X = o1.longitude + r * Math.cos(radius1)
    const Y = o1.latitude + r * Math.sin(radius1)
    radius1 = radius1 + step
    radius1 = radius1 < 0 ? 2 * Math.PI + radius1 : radius1
    radius1 = radius1 > 2 * Math.PI ? 2 * Math.PI - radius1 : radius1
    points1.push({ longitude: X, latitude: Y })
  }
  const points2 = points1
  const theta3 = (Math.PI * 3) / 2
  const theta4 = 2 * Math.PI
  let radius2 = theta3
  for (let i = 0; i < Math.abs(theta3 - theta4); i += step) {
    const X = o2.longitude + r * Math.cos(radius2)
    const Y = o2.latitude + r * Math.sin(radius2)
    radius2 = radius2 + step
    radius2 = radius2 < 0 ? 2 * Math.PI + radius2 : radius2
    radius2 = radius2 > 2 * Math.PI ? 2 * Math.PI - radius2 : radius2
    points2.push({ longitude: X, latitude: Y })
  }
  const points3 = points2
  const theta5 = 0
  const theta6 = (1 / 2) * Math.PI
  let radius3 = theta5
  for (let i = 0; i < Math.abs(theta5 - theta6); i += step) {
    const X = o3.longitude + r * Math.cos(radius3)
    const Y = o3.latitude + r * Math.sin(radius3)
    radius3 = radius3 + step
    radius3 = radius3 < 0 ? 2 * Math.PI + radius3 : radius3
    radius3 = radius3 > 2 * Math.PI ? 2 * Math.PI - radius3 : radius3
    points3.push({ longitude: X, latitude: Y })
  }
  const points = points3
  const theta7 = (1 / 2) * Math.PI
  const theta8 = Math.PI
  let radius4 = theta7
  for (let i = 0; i < Math.abs(theta7 - theta8); i += step) {
    const X = o4.longitude + r * Math.cos(radius4)
    const Y = o4.latitude + r * Math.sin(radius4)
    radius4 = radius4 + step
    radius4 = radius4 < 0 ? 2 * Math.PI + radius4 : radius4
    radius4 = radius4 > 2 * Math.PI ? 2 * Math.PI - radius4 : radius4
    points.push({ longitude: X, latitude: Y })
  }
  const GeoPoints: any[] = []
  points.forEach((item) => {
    GeoPoints.push(item.longitude, item.latitude, 0)
  })
  const result = Cesium.Cartesian3.fromDegreesArrayHeights(GeoPoints)
  return result
}

/**
 * 创建正多边形节点
 * @param centerPoint
 * @param endCartesian
 * @param num
 * @returns
 */
export function getRegularPoints(centerPoint: Coordinate, endPoint: Coordinate, num: number) {
  const distance = getDistance([centerPoint, endPoint]) * 1000
  const ellipse = new Cesium.EllipseOutlineGeometry({
    center: Cesium.Cartesian3.fromDegrees(centerPoint.longitude, centerPoint.latitude),
    semiMajorAxis: distance,
    semiMinorAxis: distance,
    granularity: 0.0001 // 0~1 圆的弧度角,该值非常重要,默认值0.02,如果绘制性能下降，适当调高该值可以提高性能
  })
  const geometry = Cesium.EllipseOutlineGeometry.createGeometry(ellipse)!
  const circlePoints: Cesium.Cartesian3[] = []
  const values = geometry.attributes.position.values
  if (!values) {
    return
  }
  const posNum = values.length / 3 // 数组中以笛卡尔坐标进行存储(每3个值一个坐标)
  for (let i = 0; i < posNum; i++) {
    const curPos = new Cesium.Cartesian3(values[i * 3], values[i * 3 + 1], values[i * 3 + 2])
    circlePoints.push(curPos)
  }
  const resultPoints: Cesium.Cartesian3[] = []
  const pointsapart = Math.floor(circlePoints.length / num)
  for (let j = 0; j < num; j++) {
    resultPoints.push(circlePoints[j * pointsapart])
  }
  resultPoints.push(resultPoints[0])
  return resultPoints
}

// #region 海上巡逻线
function getTimes(cartensianPositions: Cesium.Cartesian3[]) {
  const degreePositions = cartensianPositions.map((p) => {
    // 经纬度
    const coord = cartesian3ToDegree(p)
    return {
      lon: coord[0],
      lat: coord[1]
    }
  })
  const times: number[] = []
  let countTime = 0
  for (let i = 0; i < cartensianPositions.length; i++) {
    let _time
    if (i === 0) {
      times.push(0)
    } else {
      const speed = 50
      const long =
        getDistance([
          {
            longitude: degreePositions[i - 1].lon,
            latitude: degreePositions[i - 1].lat,
            height: 0
          },
          {
            longitude: degreePositions[i].lon,
            latitude: degreePositions[i].lat,
            height: 0
          }
        ]) * 1000
      const v = (speed * 1852) / 3600
      _time = long / v
      countTime += _time
      times.push(countTime)
    }
  }
  return { times: times.map((t) => t / countTime), countTime } // [0-1]
}

function cartesian3ToDegree(c: Cesium.Cartesian3) {
  const cartographic = Cesium.Ellipsoid.WGS84.cartesianToCartographic(c)
  const lat = Cesium.Math.toDegrees(cartographic.latitude)
  const lon = Cesium.Math.toDegrees(cartographic.longitude)
  return [lon, lat]
}

function getForwardAzimuth(startPoint: { lon: number; lat: number }, endPoint: { lon: number; lat: number }) {
  const [lon1, lat1, lon2, lat2] = [startPoint.lon, startPoint.lat, endPoint.lon, endPoint.lat].map((degree) => {
    return Cesium.Math.toRadians(degree)
  })
  const y = Math.sin(lon2 - lon1) * Math.cos(lat2)
  const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1)
  const theta = Math.atan2(y, x)
  const bearing = ((theta * 180) / Math.PI + 360) % 360
  return bearing
}

function getAngleFromTwoPoint(start: Cesium.Cartesian3, end: Cesium.Cartesian3) {
  const header = cartesian3ToDegree(start)
  const header2 = cartesian3ToDegree(end)
  return getForwardAzimuth(
    {
      lon: header[0],
      lat: header[1]
    },
    {
      lon: header2[0],
      lat: header2[1]
    }
  )
  // const pre2aft = [header2[0] - header[0], header2[1] - header[1]]
  // const thetaX = Math.sign(pre2aft[1]) * Math.acos(pre2aft[0] / Math.sqrt(pre2aft[0] * pre2aft[0] + pre2aft[1] * pre2aft[1]))
  // return thetaX * 180 / Math.PI // degree
}

function simulateCurve(positions: Cesium.Cartesian3[]) {
  const { times, countTime } = getTimes(positions)
  const spline = new Cesium.CatmullRomSpline({
    points: positions,
    times: times
  })
  return { spline, countTime }
}
function getLine(
  spline: Cesium.HermiteSpline | Cesium.LinearSpline | Cesium.CatmullRomSpline,
  start: number,
  end: number
) {
  function getps() {
    const len = 300
    const step = (end - start) / len
    const positions: Cesium.Cartesian3[] = []
    for (let i = start; i < end; i += step) {
      positions.push(spline.evaluate(i) as Cesium.Cartesian3)
    }
    return positions
  }
  const positions = getps()
  return positions
}
// 海上巡逻线 获取断点位置
export function getBreakPosition(positions: Cesium.Cartesian3[], opt?: { customPercent?: number }) {
  const { customPercent } = opt || {}
  const breakDistance = 2000 // 断点长度
  const percent = customPercent === undefined ? 0.5 : customPercent // 断点位置 0-1
  const { spline, countTime } = simulateCurve(positions)
  let breakStart = (countTime * percent - breakDistance) / countTime
  let breakEnd = (countTime * percent + breakDistance) / countTime
  if (customPercent === undefined && (breakStart < 0.2 || breakEnd > 1.2)) {
    // 初始绘制时 末端隐藏break
    const line1Ps = getLine(spline, 0, percent)
    const line2Ps = getLine(spline, percent, 1)
    const thetaStart = getAngleFromTwoPoint(
      spline.evaluate(0) as Cesium.Cartesian3,
      spline.evaluate(0.01) as Cesium.Cartesian3
    )
    return { line1Ps, line2Ps, thetaStart }
  } else {
    breakStart = Math.max(breakStart, 0)
    breakEnd = Math.min(breakEnd, 1)
    const line1Ps = getLine(spline, 0, breakStart)
    const line2Ps = getLine(spline, breakEnd, 1)
    //
    const breakStartNum = breakStart + (breakEnd - breakStart) / 3
    const breakCenterNum = breakStart + (breakEnd - breakStart) / 2
    const breakEndNum = breakStart + (2 * (breakEnd - breakStart)) / 3
    const start = spline.evaluate(breakStartNum) as Cesium.Cartesian3 // 1 / 3
    const end = spline.evaluate(breakEndNum) as Cesium.Cartesian3 // 2 / 3
    const center = spline.evaluate(breakCenterNum) as Cesium.Cartesian3
    const thetaX = getAngleFromTwoPoint(start, end)
    const thetaStart = getAngleFromTwoPoint(
      spline.evaluate(0) as Cesium.Cartesian3,
      spline.evaluate(0.01) as Cesium.Cartesian3
    )
    return {
      line1Ps,
      line2Ps,
      center, // percentStore !== undefined 时， center 不为空
      thetaX, // degree
      thetaStart,
      breakStart: start,
      breakEnd: end
    }
  }
}

// 海上巡逻线 自定义图标
export type CustomGraphPoints = [number, number][]
export function getIconLinePositions(
  center: Cesium.Cartesian3,
  rotate: number,
  scale: number,
  points: CustomGraphPoints[]
): Cesium.Cartesian3[][] {
  const positions: Cesium.Cartesian3[][] = []
  points.forEach((ps) => {
    if (center) {
      const transform = Cesium.Transforms.eastNorthUpToFixedFrame(center)
      const t = Cesium.Math.toRadians(rotate)
      const p = ps.map((item) => {
        const x = item[0] * 100000 * scale
        const y = item[1] * 100000 * scale
        // east + north
        const sub = new Cesium.Cartesian3(x * Math.cos(t) - y * Math.sin(t), x * Math.sin(t) + y * Math.cos(t), 0)
        const res = Cesium.Matrix4.multiplyByPoint(transform, sub, new Cesium.Cartesian3())
        return res
      })
      positions.push(p)
    }
  })
  return positions
}
// #endregion

function computeGround(positions: Cesium.Cartesian3[]) {
  const line = Cesium.PolylineGeometry.createGeometry(
    new Cesium.PolylineGeometry({
      positions,
      granularity: 0.0001
    })
  )
  if (line) {
    const values = line?.attributes.position.values
    const _positions: Cesium.Cartesian3[] = []
    for (let i = 0; i < values.length / 3; i++) {
      _positions.push(new Cesium.Cartesian3(values[i * 3], values[i * 3 + 1], values[i * 3 + 2]))
    }
    const n = _positions.length
    const times: number[] = []
    for (let i = 0; i < n; i++) {
      times.push(i / (n - 1))
    }
    const d1 = cartesian3ToDegree(_positions[0])
    const d2 = cartesian3ToDegree(_positions[_positions.length - 1])
    const r =
      getDistance([
        {
          longitude: d1[0],
          latitude: d1[1],
          height: 0
        },
        {
          longitude: d2[0],
          latitude: d2[1],
          height: 0
        }
      ]) * 1000
    return {
      spline: new Cesium.LinearSpline({
        times,
        points: _positions
      }),
      r: r
    }
  }
}
// #region 布雷
// 布雷 获取分割点
export function getSplinePositions(positions: Cesium.Cartesian3[]) {
  const { spline, r } = computeGround(positions) || {}
  if (spline && r) {
    const p1 = spline.evaluate(0.1) as Cesium.Cartesian3
    const p2 = spline.evaluate(0.25) as Cesium.Cartesian3
    const p3 = spline.evaluate(0.4) as Cesium.Cartesian3
    const p4 = spline.evaluate(0.75) as Cesium.Cartesian3
    const angle = getAngleFromTwoPoint(spline.evaluate(0.7) as Cesium.Cartesian3, p4)
    return {
      positions: [p1, p2, p3, p4],
      angle,
      radius: r
    }
  }
}
// #endregion

// #region 空中巡逻
export function getCruiserPositions(positions: Cesium.Cartesian3[]) {
  const SCALENUM = 500000
  const { spline, r } = computeGround(positions) || {}
  if (spline && r) {
    const p1 = spline.evaluate(0.25) as Cesium.Cartesian3
    const p2 = spline.evaluate(0.75) as Cesium.Cartesian3
    const angle1 = getAngleFromTwoPoint(p1, spline.evaluate(0.5) as Cesium.Cartesian3)
    const angle2 = getAngleFromTwoPoint(spline.evaluate(0.5) as Cesium.Cartesian3, p2)
    const scale = r / SCALENUM
    const ps1 = computeSector(p1, scale, angle1 + 180) as Cesium.Cartesian3[]
    const ps2 = computeSector(p2, scale, angle2) as Cesium.Cartesian3[]
    return [...ps1, ...ps2?.reverse()]
  }
}

function computeSector(center: Cesium.Cartesian3, scale: number, offsetTheta: number) {
  const SCALENUM = 500000
  const OFFSETBETWEEN = 0
  const ellipseGeometry = new Cesium.EllipseGeometry({
    center: center,
    semiMajorAxis: (SCALENUM + OFFSETBETWEEN) * 0.25 * scale,
    semiMinorAxis: (SCALENUM + OFFSETBETWEEN) * 0.25 * scale,
    granularity: 0.001,
    rotation: Cesium.Math.toRadians(-offsetTheta)
  })
  const values = Cesium.EllipseOutlineGeometry.createGeometry(ellipseGeometry)?.attributes.position.values
  if (values) {
    const _length = values.length / 3
    const endIndex = ((_length - 1) * 266) / 360
    const positions: Cesium.Cartesian3[] = []
    for (let i = 0; i <= endIndex; i++) {
      positions.push(new Cesium.Cartesian3(values[i * 3], values[i * 3 + 1], values[i * 3 + 2]))
    }
    return positions
  }
}
// #endregion

// #region 舰艇编队标识
export function createFormationMarkPrimitive(positions: Cesium.Cartesian3[], markText: string) {
  // 获取canvas
  const drawText = (text: string) => {
    const fontSize = 1000 // 清晰度
    const c = document.createElement("canvas")
    const d = (text + "").length * fontSize
    c.width = d
    c.height = fontSize
    const ctx = c.getContext("2d")!
    ctx.fillStyle = "#FFFF00"
    ctx.font = fontSize + "px serif"
    ctx.textBaseline = "hanging"
    ctx.textAlign = "center"
    ctx?.fillText(text, 500, 100)
    return c
  }
  // 获取primitive
  const getPrimitive = (
    p1: Cesium.Cartesian3,
    p2: Cesium.Cartesian3,
    p3: Cesium.Cartesian3,
    p4: Cesium.Cartesian3,
    text: string,
    thetaX: number
  ) => {
    const geometry1 = new Cesium.PolygonGeometry({
      vertexFormat: Cesium.EllipsoidSurfaceAppearance.VERTEX_FORMAT,
      polygonHierarchy: new Cesium.PolygonHierarchy([p1, p2, p3, p4, p1]),
      stRotation: Cesium.Math.toRadians(thetaX - 90)
    })
    const primitive = new Cesium.Primitive({
      geometryInstances: new Cesium.GeometryInstance({
        geometry: geometry1
      }),
      appearance: new Cesium.EllipsoidSurfaceAppearance({
        material: new Cesium.Material({
          fabric: {
            type: "Image",
            uniforms: {
              image: drawText(text),
              repeat: {
                x: 1,
                y: 1
              }
            }
          }
        })
      })
    })
    return primitive
  }
  // 获取矩形点位
  const getPositions = (p: Cesium.Cartesian3, theta: number, stepSize = 1) => {
    const transform = Cesium.Transforms.eastNorthUpToFixedFrame(p)
    const t = Cesium.Math.toRadians(90 - theta) // y = 90 - x
    const ps = [
      [1 * stepSize, 0],
      [1 * stepSize, 2 * stepSize],
      [-1 * stepSize, 2 * stepSize],
      [-1 * stepSize, 0]
    ]
    const positions = ps.map((item) => {
      const x = item[0]
      const y = item[1]
      const sub = new Cesium.Cartesian3(x * Math.cos(t) - y * Math.sin(t), x * Math.sin(t) + y * Math.cos(t), 0)
      return Cesium.Matrix4.multiplyByPoint(transform, sub, new Cesium.Cartesian3())
    })
    return positions
  }
  const primitiveCollection = new Cesium.PrimitiveCollection()
  const { spline, countTime } = simulateCurve(positions)
  const text = markText || ""
  const textArr = text.split("")
  const _step = textArr.length ? 1 / textArr.length : 0
  const paddingLeft = 0.1
  // [0, 1] -> [0.1, 1]
  const padding = (x: number) => {
    return (1 - paddingLeft) * x + paddingLeft
  }
  const pre0 = spline.evaluate(1 - 0.01) as Cesium.Cartesian3
  const end = spline.evaluate(1) as Cesium.Cartesian3
  const ReletiveLength = countTime * _step * 4
  const step = _step
  const fontWidth = Math.min(25000, ReletiveLength)
  textArr.forEach((t: any, i: number) => {
    const target = padding(step * i)
    let positions
    if (target > 1) {
      // 超出曲线范围
      const outStep = (target - 1) / step
      const transform = Cesium.Transforms.eastNorthUpToFixedFrame(end)
      const theta = getAngleFromTwoPoint(pre0, end)
      const theta2 = Cesium.Math.toRadians(90 - theta) // y = 90 - x
      const x = outStep * fontWidth * 4
      const y = 0
      const sub = new Cesium.Cartesian3(
        x * Math.cos(theta2) - y * Math.sin(theta2),
        x * Math.sin(theta2) + y * Math.cos(theta2),
        0
      )
      const p = Cesium.Matrix4.multiplyByPoint(transform, sub, new Cesium.Cartesian3())
      positions = getPositions(p, theta, fontWidth)
      const primitive = getPrimitive(positions[0], positions[1], positions[2], positions[3], t, theta)
      primitiveCollection.add(primitive)
    } else {
      // 曲线范围内
      const p = spline.evaluate(target)
      const pre0 = spline.evaluate(Math.max(target - 0.005, 0)) as Cesium.Cartesian3
      const aft0 = spline.evaluate(Math.min(target + 0.005, 1)) as Cesium.Cartesian3
      const theta = getAngleFromTwoPoint(pre0, aft0)
      positions = getPositions(p, theta, fontWidth)
      const primitive = getPrimitive(positions[0], positions[1], positions[2], positions[3], t, theta)
      primitiveCollection.add(primitive)
    }
  })
  return primitiveCollection
}
// #endregion
