import * as turf from "@turf/turf"
import * as Cesium from "mars3d-cesium"
import type { Coordinate } from "../types/coordinate"

export interface CurveSplineOption {
  resolution: number
  sharpness: number
}

export function getHermiteSpline(positions: Cesium.Cartesian3[], itp_num = 3000): Cesium.Cartesian3[] {
  const pLength = positions.length
  if (pLength < 3) {
    return []
  }

  // 计算每个样点所对应的time
  const delta = 1 / (pLength - 1)
  const times = new Array(pLength)
  for (let i = 0; i < pLength; i++) {
    times[i] = i * delta
  }

  // 创建样条
  const spline = Cesium.HermiteSpline.createNaturalCubic({
    times: times,
    points: positions
  })
  // 根据样条进行插值
  const result: Cesium.Cartesian3[] = new Array(itp_num + 1)
  for (let i = 0; i <= itp_num; i++) {
    result[i] = spline.evaluate(i / itp_num) as Cesium.Cartesian3
  }
  return result
}

// const getCatmullRomSpline = (times: number[], positions: Cesium.Cartesian3[], haveHeight: boolean) => {
//   const heightWeights: number[] = []
//   positions.forEach((item, index) => {
//     const cartographic = Cesium.Cartographic.fromCartesian(item)
//     const height = cartographic.height
//     heightWeights.push(times[index], height)
//   })
//   const heightSpline = new Cesium.MorphWeightSpline({
//     times: times,
//     weights: heightWeights
//   })
//   const spline = new Cesium.CatmullRomSpline({
//     times: times,
//     points: positions
//   })
//   const resultCartesian3 = []
//   for (let i = 0; i <= 300; i++) {
//     const c3: any = spline.evaluate(i / 300)
//     if (haveHeight) {
//       const cartographic = Cesium.Cartographic.fromCartesian(c3)
//       const lon:number = Cesium.Math.toDegrees(cartographic.longitude)
//       const lat:number = Cesium.Math.toDegrees(cartographic.latitude)
//       const height = heightSpline.evaluate(i / 300)[1]
//       const c3_new = Cesium.Cartesian3.fromDegrees(lon, lat, height)
//       resultCartesian3.push(c3_new)
//     } else {
//       resultCartesian3.push(c3)
//     }
//   }
//   return resultCartesian3
// }
// const getBezierSpline = (positions: Cesium.Cartesian3[]) => {
//   if (!positions || positions.length < 2) {
//     return []
//   }
//   const cartographicPositions: number[] = []
//   positions.forEach((o:Cesium.Cartesian3, key: number) => {
//     const cartographic = Cesium.Cartographic.fromCartesian(o)
//     // console.log(cartographic)
//     const lon:number = Cesium.Math.toDegrees(cartographic.longitude)
//     const lat:number = Cesium.Math.toDegrees(cartographic.latitude)
//     cartographicPositions.push(lon, lat)
//   })
//   const turfPs = []
//   for (let i = 0; i < cartographicPositions.length - 1; i += 2) {
//     turfPs.push([cartographicPositions[i], cartographicPositions[i + 1]])
//   }
//   const lines = turf.lineString(turfPs)
//   const options = {
//     resolution: 10000,
//     sharpness: 1
//   }
//   const bezierLine = turf.bezierSpline(lines, options)
//   if (bezierLine.geometry) {
//     return Cesium.Cartesian3.fromDegreesArray(flatten(bezierLine.geometry.coordinates))
//   }
// }

export function bezierSplineCurve(coordinates: Coordinate[], sample_distance = 10.0) {
  if (coordinates.length < 3) {
    return coordinates
  }

  // 限制一下插值的最大最小数量
  const MIN_SAMPLE_NUM = 20
  const MAX_SAMPLE_NUM = 200

  // 生成linestring
  const coords = coordinates.map((it) => {
    return [it.longitude, it.latitude]
  })
  const lineString = turf.lineString(coords)
  // 计算线段距离
  const distance = turf.length(lineString, { units: "kilometers" })
  const sample_num = Math.min(Math.max(Math.round(distance / sample_distance), MIN_SAMPLE_NUM), MAX_SAMPLE_NUM)

  const options = {
    resolution: sample_num * 20,
    sharpness: 0.3
  }

  const curved = turf.bezierSpline(lineString, options)
  // TODO：对深度进行插值
  const height = coordinates[0].height

  const result = curved.geometry!.coordinates.map((it) => {
    return {
      longitude: it[0],
      latitude: it[1],
      height
    }
  })
  return result
}

export function hermiteSplineCurve(coordinates: Coordinate[], itp_num = 300): Coordinate[] {
  const cLength = coordinates.length
  if (coordinates.length < 3 || itp_num <= cLength) {
    return coordinates
  }

  // 计算每个样点所对应的time
  // 后续可能用距离替代
  const pLength = cLength - 1
  const times: number[] = new Array(cLength)
  for (let i = 0; i < cLength; i++) {
    times[i] = i
  }
  // // 计算每个样点对应的高度，线性插值
  // const heights = new Array(itp_num + 1)
  // heights[0] = coordinates[0].height
  // heights[itp_num] = coordinates[cLength - 1].height

  // let preIndex = 0
  // for (let i = 1; i < cLength - 1; i++) {
  //   const index = Math.round(times[i] * itp_num)
  //   heights[index] = coordinates[i].height

  //   const dist = index - preIndex
  //   const base = coordinates[i - 1].height
  //   const diff = coordinates[i].height - coordinates[i - 1].height

  //   for (let j = 1; j < dist; j++) {
  //     const curHeight = (j / dist) * diff + base
  //     heights[preIndex + j] = curHeight
  //   }
  //   preIndex = index
  // }

  const positions = coordinates.map((it) => new Cesium.Cartesian3(it.longitude, it.latitude))

  // 创建样条
  const spline = Cesium.HermiteSpline.createNaturalCubic({
    times: times,
    points: positions
  })
  // 根据样条进行插值
  const result: Coordinate[] = new Array(itp_num + 1)
  for (let i = 0; i <= itp_num; i++) {
    const temp = spline.evaluate((i / itp_num) * pLength) as Cesium.Cartesian3
    result[i] = {
      longitude: temp.x,
      latitude: temp.y,
      height: 0
    }
  }
  return result
}

export function hermiteSplineCornerCurve(coordinates: Coordinate[], options: Partial<CurveSplineOption>): Coordinate[] {
  // 不足是三个控制点时无法插值
  const cLength = coordinates.length
  if (coordinates.length < 3) {
    return coordinates
  }

  // 解析默认参数
  const { resolution = 10, sharpness = 0.1 } = options

  // 计算每个样点所对应的time
  // 后续可能用距离替代
  const times: number[] = new Array(cLength)
  for (let i = 0; i < cLength; i++) {
    times[i] = i
  }
  const points = coordinates.map((it) => new Cesium.Cartesian3(it.longitude, it.latitude))
  const heigtPoints = coordinates.map((it) => it.height)

  // 计算每个控制点入弯和出弯的斜率
  const tLength = cLength - 1
  const inTangents = new Array(cLength - 1)
  const outTangents = new Array(cLength - 1)
  for (let i = 1; i < tLength; i++) {
    const x = ((coordinates[i + 1].longitude - coordinates[i - 1].longitude) / 2) * sharpness
    const y = ((coordinates[i + 1].latitude - coordinates[i - 1].latitude) / 2) * sharpness
    inTangents[i - 1] = new Cesium.Cartesian3(x, y)
    outTangents[i] = new Cesium.Cartesian3(x, y)
  }
  const firstX = (coordinates[1].longitude - coordinates[0].longitude) * sharpness
  const firstY = (coordinates[1].latitude - coordinates[0].latitude) * sharpness
  outTangents[0] = new Cesium.Cartesian3(firstX, firstY)
  inTangents[tLength - 1] = new Cesium.Cartesian3(0, 0)

  // 创建样条
  const spline = new Cesium.HermiteSpline({ times, points, inTangents, outTangents })
  // 高度插值样条
  const heightSpline = new Cesium.LinearSpline({ times: times, points: heigtPoints })

  // 根据样条进行插值
  const total_num = tLength * resolution + cLength
  const result: Coordinate[] = new Array(total_num)
  // 原先的结果不用插值
  for (let i = 0; i < cLength; i++) {
    const index = i * resolution + i
    result[index] = coordinates[i]
  }

  // 对两个控制点之间的曲线进行插值
  for (let i = 0; i < tLength; i++) {
    const startJ = i * resolution + i + 1
    const endJ = startJ + resolution
    for (let j = startJ; j < endJ; j++) {
      const time = (j * tLength) / total_num
      const temp = spline.evaluate(time) as Cesium.Cartesian3
      const height = heightSpline.evaluate(time) as number
      result[j] = { longitude: temp.x, latitude: temp.y, height }
    }
  }

  return result
}

export function linearSplineCurve(coordinates: Coordinate[], resolution = 10) {
  const cLength = coordinates.length
  if (cLength < 2) {
    return coordinates
  }

  // 计算每个样点所对应的time
  // 后续可能用距离替代
  const times: number[] = new Array(cLength)
  for (let i = 0; i < cLength; i++) {
    times[i] = i
  }
  const points = coordinates.map((it) => new Cesium.Cartesian3(it.longitude, it.latitude))
  const heigtPoints = coordinates.map((it) => it.height)

  // 创建样条
  const spline = new Cesium.LinearSpline({ times, points })
  // 高度插值样条
  const heightSpline = new Cesium.LinearSpline({ times: times, points: heigtPoints })

  // 根据样条进行插值
  const tLength = cLength - 1
  const total_num = tLength * resolution + cLength
  const result: Coordinate[] = new Array(total_num)
  // 原先的结果不用插值
  for (let i = 0; i < cLength; i++) {
    const index = i * resolution + i
    result[index] = coordinates[i]
  }

  // 对两个控制点之间的曲线进行插值
  for (let i = 0; i < tLength; i++) {
    const startJ = i * resolution + i + 1
    const endJ = startJ + resolution
    for (let j = startJ; j < endJ; j++) {
      const time = (j * tLength) / total_num
      const temp = spline.evaluate(time) as Cesium.Cartesian3
      const height = heightSpline.evaluate(time) as number
      result[j] = { longitude: temp.x, latitude: temp.y, height }
    }
  }

  return result
}
