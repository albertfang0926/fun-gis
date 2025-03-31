import type { Coordinate } from "../types/coordinate"
import type { Viewer, Ellipsoid, Cartesian2 } from "mars3d-cesium"
import { Math as CMath, Cartographic, Cartesian3 } from "mars3d-cesium"

/*********************************************************************
 *
 *   NOTE: 所有的经纬度坐标转换都使用此文件的函数，确保正确处理地形拉伸
 *
 *********************************************************************/

/**
 * 屏幕坐标转三维笛卡尔坐标（地球椭球表面）
 * @param position 屏幕坐标（二维）
 * @param viewer Cesium.Viewer
 * @returns 三维笛卡尔坐标（屏幕坐标对应的地球椭球表面）
 */
export function windowPositionToEllipsoidCartesian(position: Cartesian2, viewer: Viewer) {
  const cartesian3 = viewer.scene.camera.pickEllipsoid(position)
  return cartesian3
}

/**
 * 三维笛卡尔坐标转地理坐标
 * @param c3 三维笛卡尔坐标
 * @param viewer Cesium.Viewer
 * @returns 地理坐标（高度：被除以地形拉伸系数后的高度）
 */
export function cartesian3ToCoordinate(c3: Cartesian3, viewer: Viewer): Coordinate {
  const ellipsoid = viewer.scene.globe.ellipsoid
  const exaggValue = viewer.scene.globe.terrainExaggeration

  const cartographic = Cartographic.fromCartesian(c3, ellipsoid)
  const longitude = CMath.toDegrees(cartographic.longitude)
  const latitude = CMath.toDegrees(cartographic.latitude)
  const height = exaggValue === 0 ? 0 : cartographic.height / exaggValue
  return { longitude, latitude, height }
}

/**
 * 三维笛卡尔坐标数组 转 地理坐标数组
 * @param c3List 三维笛卡尔坐标数组
 * @param viewer Cesium.Viewer
 * @returns 地理坐标数组（高度：被除以地形拉伸系数后的高度）
 */
export function cartesian3ArrayToCoordinates(c3List: Cartesian3[], viewer: Viewer): Coordinate[] {
  const ellipsoid = viewer.scene.globe.ellipsoid
  const exaggValue = viewer.scene.globe.terrainExaggeration

  return c3List.map((c3) => {
    const cartographic = Cartographic.fromCartesian(c3, ellipsoid)
    const longitude = CMath.toDegrees(cartographic.longitude)
    const latitude = CMath.toDegrees(cartographic.latitude)
    const height = exaggValue === 0 ? 0 : cartographic.height / exaggValue
    return { longitude, latitude, height }
  })
}

/**
 * 地理坐标转三维笛卡尔坐标
 * @param coord 地理坐标
 * @param viewer Cesium.Viewer
 * @returns 三维笛卡尔坐标（高度 * 地形拉伸系数，在地球表面上方的不进行拉伸）
 */
export function coordinateToCartesian3(coord: Coordinate, viewer: Viewer) {
  const ellipsoid = viewer.scene.globe.ellipsoid
  const exaggValue = viewer.scene.globe.terrainExaggeration

  const height = coord.height >= 0 ? coord.height : coord.height * exaggValue
  return Cartesian3.fromDegrees(coord.longitude, coord.latitude, height, ellipsoid)
}

/**
 * 地理坐标数组 转三维笛卡尔坐标 数组
 * @param coordinates 地理坐标数组
 * @param viewer Cesium.Viewer
 * @returns 三维笛卡尔坐标数组（高度 * 地形拉伸系数，在地球表面上方的不进行拉伸）
 */
export function coordinatesToCartesian3Array(coordinates: Coordinate[], viewer: Viewer) {
  const ellipsoid = viewer.scene.globe.ellipsoid
  const exaggValue = viewer.scene.globe.terrainExaggeration

  return coordinates.map((coord) => {
    const height = coord.height >= 0 ? coord.height : coord.height * exaggValue
    return Cartesian3.fromDegrees(coord.longitude, coord.latitude, height, ellipsoid)
  })
}

/**
 * 根据经纬度判断两个地理坐标是否代表同一个点
 * @param coordA 坐标A
 * @param coordB 坐标B
 * @param tolerance 判断为同一个坐标点的容差，默认值为1e-6
 * @returns True/False
 */
export function isSameCoordinate(coordA: Coordinate, coordB: Coordinate, tolerance = 1e-6) {
  return (
    Math.abs(coordA.longitude - coordB.longitude) <= tolerance &&
    Math.abs(coordA.latitude - coordA.latitude) <= tolerance
  )
}
