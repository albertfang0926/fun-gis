import { Cartesian3 } from "mars3d-cesium"
import type { Coordinate } from "@/drawMethods/types/coordinate"

/**
 *
 * @param positions 获取平行四边形顶点
 * @returns
 */
function getParallelogramVertices(positions: Cartesian3[]) {
  //   const A = Cartesian3.fromDegrees(positions[0].longitude, positions[0].latitude)
  //   const B = Cartesian3.fromDegrees(positions[1].longitude, positions[1].latitude)
  //   const C = Cartesian3.fromDegrees(positions[2].longitude, positions[2].latitude)
  const [A, B, C] = positions

  const AB = new Cartesian3()
  Cartesian3.subtract(B, A, AB)

  const D = new Cartesian3()
  Cartesian3.subtract(C, AB, D)

  return [A, B, C, D]
}

export { getParallelogramVertices }
