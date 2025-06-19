import type { Coordinate } from "../types/coordinate"
import * as turf from "@turf/turf"
import { Math as CMath, Cartesian3, Cartographic } from "mars3d-cesium"
import { min, max } from "lodash"

// #region 计算点、线。面等要素的长度、面积等属性

/**
 * 计算折线的的长度
 * @param points 折线的各个顶点的坐标
 * @returns 折线长度，单位为 千米
 */
export function getDistance(coords: Coordinate[]): number {
  // 默认单位：千米
  const points = coords.map((it) => [it.longitude, it.latitude])
  const line = turf.lineString(points)
  const length = turf.length(line)
  return length
}

/**
 * 计算多边形区域的面积，要求多边形区域闭合，即最后一个点的坐标要等于第一个点的坐标
 * @param points 多边形的各个顶点的坐标
 * @returns 多边形面积，单位为 平方米
 */
export function getCoordinateArea(coords: Coordinate[]): number | undefined {
  // 判断是否能构成多边形
  if (coords.length < 4) {
    return undefined
  }
  // 判断是否闭合
  const fisrtPoint = coords[0]
  const lastPoinst = coords[coords.length - 1]
  if (
    fisrtPoint.longitude !== lastPoinst.longitude ||
    fisrtPoint.latitude !== lastPoinst.latitude ||
    fisrtPoint.height !== lastPoinst.height
  ) {
    return undefined
  }

  // 默认单位：平方米
  const points = coords.map((it) => [it.longitude, it.latitude])
  const polygon = turf.polygon([points])
  const area = turf.area(polygon)
  return area
}

/**
 * 计算两点之间的方位角
 * @param coor1 起始点坐标
 * @param coor2 结束点坐标
 * @returns 方位角，数值范围 0~360
 */
export function getBearing(coor1: Coordinate, coor2: Coordinate) {
  // final 为 true 只计算最终轴承，即返回的数值介于 0 至 360 之间
  const azimuth = turf.bearing([coor1.longitude, coor1.latitude], [coor2.longitude, coor2.latitude], { final: true })
  return azimuth
}

// #endregion

// #region 点

/**
 * 已知当前点的坐标，以及目标点与当前的方位、距离，求目标点的坐标（默认在地球椭球表面）
 * @param coor 当前点坐标
 * @param distance 当前点到目标点的距离，单位：千米
 * @param angle 当前点到目标点的方位角，单位：°，数值范围 -180~180
 * @returns 目标点坐标
 */
export function getDestination(coor: Coordinate, distance: number, angle: number) {
  const targetPoint = turf.point([coor.longitude, coor.latitude])
  const destination = turf.destination(targetPoint, distance, angle, { units: "kilometers" })
  return destination.geometry!.coordinates as [number, number]
}

// #endregion

// #region polyline 折线

/**
 * 找到鼠标位置最近的多段线上的索引
 * @param polylineEntity 多段线实体
 * @param mousePosition 鼠标位置
 * @returns 索引（从0开始）
 */
export function getNearestSegmentIndex(lineCoordinates: Coordinate[], mousePosition: Coordinate) {
  if (lineCoordinates.length < 2) {
    return -1
  }
  // 初始化最近段的索引和距离
  let nearestSegmentIndex = -1
  let nearestDistance = Number.MAX_VALUE
  // 遍历线段的每一段，计算到鼠标位置的距离，找到最近的一段
  for (let i = 0; i < lineCoordinates.length - 1; i++) {
    const segmentStart = lineCoordinates[i]
    const segmentEnd = lineCoordinates[i + 1]
    const distance = _distanceToSegment(mousePosition, segmentStart, segmentEnd)
    if (distance < nearestDistance) {
      nearestDistance = distance
      nearestSegmentIndex = i
    }
  }
  return nearestSegmentIndex
}

/**
 * 计算点到线段的最短距离
 * @param point 点坐标
 * @param start 线段起点坐标
 * @param end 线段终点坐标
 * @returns 点到线段的最短距离
 */
function _distanceToSegment(point: Coordinate, start: Coordinate, end: Coordinate) {
  const pointCartesian = Cartesian3.fromDegrees(point.longitude, point.latitude, point.height)
  const startCartesian = Cartesian3.fromDegrees(start.longitude, start.latitude, start.height)
  const endCartesian = Cartesian3.fromDegrees(end.longitude, end.latitude, end.height)
  // 计算线段的方向向量和起点到点的向量
  const direction = Cartesian3.subtract(endCartesian, startCartesian, new Cartesian3())
  const v = Cartesian3.subtract(pointCartesian, startCartesian, new Cartesian3())
  // 计算点在线段上的投影比例
  const t = Cartesian3.dot(v, direction) / Cartesian3.dot(direction, direction)
  // 如果比例小于0，则点在线段起点之前，返回终点到点的距离
  if (t < 0) {
    return Cartesian3.magnitude(v)
    // 如果比例大于1，则点在线段的终点之后，返回终点到点的距离
  } else if (t > 1) {
    return Cartesian3.magnitude(Cartesian3.subtract(pointCartesian, endCartesian, new Cartesian3()))
  } else {
    // 否则，点在线段上，返回点到线段的投影距离
    const projection = Cartesian3.add(
      startCartesian,
      Cartesian3.multiplyByScalar(direction, t, new Cartesian3()),
      new Cartesian3()
    )
    return Cartesian3.magnitude(Cartesian3.subtract(pointCartesian, projection, new Cartesian3()))
  }
}

// #endregion

// #region polyline 矩形

/**
 * 根据两个点获取矩形的坐标（首尾相连-五个点）
 * @param p1 第一个点
 * @param p2 第二个点
 * @returns
 */
export function getRectangleCoorByTwoPoints(p1: Coordinate, p2: Coordinate) {
  const west = Math.min(p1.longitude, p2.longitude)
  const east = Math.max(p1.longitude, p2.longitude)
  const south = Math.min(p1.latitude, p2.latitude)
  const north = Math.max(p1.latitude, p2.latitude)
  const height = (p1.height + p2.height) / 2
  return [
    { longitude: west, latitude: south, height },
    { longitude: west, latitude: north, height },
    { longitude: east, latitude: north, height },
    { longitude: east, latitude: south, height },
    { longitude: west, latitude: south, height }
  ]
}

export function getRectByCoordinate(coordinate: Coordinate[]) {
  const lons: number[] = []
  const lats: number[] = []
  coordinate.forEach((item) => {
    lons.push(item.longitude)
    lats.push(item.latitude)
  })
  const rect: {
    west: number
    east: number
    south: number
    north: number
  } = {
    west: min(lons) as number,
    east: max(lons) as number,
    south: min(lats) as number,
    north: max(lats) as number
  }
  return rect
}

export function getRectanglePositionByTwoPoints(p1: Coordinate, p2: Coordinate) {
  const maxLon = Math.max(p1.longitude, p2.longitude)
  const minLon = Math.min(p1.longitude, p2.longitude)
  const maxLat = Math.max(p1.latitude, p2.latitude)
  const minLat = Math.min(p1.latitude, p2.latitude)
  return {
    west: minLon,
    south: minLat,
    east: maxLon,
    north: maxLat
  }
}

/**
 * 获取矩形对角的索引
 * @param index 当前点的索引
 * @returns 对角点的索引
 */
export function getAcrossIndexInRectangle(index: number) {
  if (index % 2 === 0) {
    return index === 0 ? 2 : 0
  } else {
    return index === 1 ? 3 : 1
  }
}

// #endregion

// #region 杂项

/**
 * 找到polyline或polygon最北边的点 的 索引
 * @param coors polyline和polygon的坐标
 * @param isRectangle 坐标点是否构成矩形
 * @returns 最北的坐标点 的 索引
 */
export function getNorthestPointIndex(coors: Coordinate[], isRectangle = false) {
  if (!isRectangle) {
    const length = coors.length
    let northestIndex = 0
    for (let i = 1; i < length; i++) {
      const currentPos = coors[northestIndex]
      const pos1 = coors[i]
      northestIndex = currentPos.latitude > pos1.latitude ? northestIndex : i
    }
    return northestIndex
  } else {
    const lonList = coors.map((item) => item.longitude)
    const latList = coors.map((item) => item.latitude)
    const minLon = min(lonList)
    const maxLat = max(latList)
    const index = coors.findIndex((it) => it.longitude === minLon && it.latitude === maxLat)
    // 默认就是西南 —— 西北 —— 东北 —— 东南的顺序
    return index >= 0 ? index : 1
  }
}

export function getCenter(coor: Coordinate[], isClose = false) {
  let centerLon = 0
  let centerLat = 0
  let centerHeight = 0
  const length = isClose ? coor.length - 1 : coor.length
  for (let i = 0; i < length; i++) {
    const temp = coor[i]
    centerLon += temp.longitude
    centerLat += temp.latitude
    centerHeight += temp.height
  }
  return {
    longitude: centerLon / length,
    latitude: centerLat / length,
    height: centerHeight / length
  }
}

/**
 * 计算偏移位置后的新位置
 * @param coorChange 偏移量
 * @param oldEntityPosition 一系列坐标点
 * @returns 偏移后的新坐标
 */
export function getCoordinatesAfterBias(
  oldCoordinate: Coordinate[],
  bias: {
    lonBias: number // 经度偏移
    latBias: number // 纬度偏移
    heightBias: number // 高度偏移
  }
): Coordinate[] {
  const result: Coordinate[] = []
  for (let i = 0; i < oldCoordinate.length; i++) {
    const newCartesian3 = {
      longitude: oldCoordinate[i].longitude + bias.lonBias,
      latitude: oldCoordinate[i].latitude + bias.latBias,
      height: oldCoordinate[i].height + bias.heightBias
    }
    result.push(newCartesian3)
  }
  return result
}

// #endregion
