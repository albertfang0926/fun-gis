import { Cartesian3, Cartographic } from "mars3d-cesium"

/**
 * 在某条边确定的情况下, 更新扇形的顶点
 * @param center
 * @param vertex
 */
function updateSectorVertices(center: Cartesian3, newVertex1: Cartesian3, oldVertex2: Cartesian3) {
  const radius = Cartesian3.distance(center, newVertex1)
  const direction = Cartesian3.subtract(oldVertex2, center, new Cartesian3())
  const unitDir = Cartesian3.normalize(direction, new Cartesian3())
  const newVertex2 = Cartesian3.add(
    center,
    Cartesian3.multiplyByScalar(unitDir, radius, new Cartesian3()),
    new Cartesian3()
  )
  return getCartesian3WithHeight(newVertex2)
}

/**
 * 将笛卡尔坐标转化为指定高度的笛卡尔坐标
 * @param cartesian
 * @param height
 * @returns
 */
function getCartesian3WithHeight(cartesian: Cartesian3, height: number = 0) {
  const cartographic = Cartographic.fromCartesian(cartesian)
  return Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, height)
}

export { updateSectorVertices }
