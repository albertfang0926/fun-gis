import {
  Cartesian3,
  Ellipsoid,
  Math as CesiumMath,
  Rectangle} from "cesium"

import { ISpatialFilterExpression } from "../types"
import { BaseLayerFilter } from "./base-filter"

export class SpatialFilter extends BaseLayerFilter {
  readonly type = "spatial"

  matches(entity: any, expression: Record<string, any>): boolean {
    const spatial = expression as ISpatialFilterExpression
    const position = this.getEntityPosition(entity)
    if (!position) return false

    switch (spatial.type) {
      case "bbox":
        return this.inBBox(position, spatial.coordinates)
      case "circle":
        return this.inCircle(position, spatial.coordinates, spatial.radius)
      case "polygon":
        return this.inPolygon(position, spatial.coordinates)
      default:
        return false
    }
  }

  private getEntityPosition(entity: any): Cartesian3 | undefined {
    if (entity.entity?.position) {
      return entity.entity.position.getValue(
        entity.entity.entityCollection?.owner?.clock?.currentTime
      )
    }
    if (entity.position) {
      return entity.position
    }
    return undefined
  }

  private inBBox(
    position: Cartesian3,
    coordinates: number[]
  ): boolean {
    // coordinates: [west, south, east, north] in degrees
    if (coordinates.length < 4) return false

    const rect = Rectangle.fromDegrees(
      coordinates[0],
      coordinates[1],
      coordinates[2],
      coordinates[3]
    )

    const cartographic = Ellipsoid.WGS84.cartesianToCartographic(position)
    if (!cartographic) return false

    return Rectangle.contains(rect, cartographic)
  }

  private inCircle(
    position: Cartesian3,
    coordinates: number[],
    radius?: number
  ): boolean {
    // coordinates: [centerLon, centerLat], radius in meters
    if (coordinates.length < 2 || !radius) return false

    const center = Cartesian3.fromDegrees(coordinates[0], coordinates[1])

    return Cartesian3.distance(center, position) <= radius
  }

  private inPolygon(
    position: Cartesian3,
    coordinates: number[]
  ): boolean {
    // coordinates: [lon1, lat1, lon2, lat2, ...] in degrees
    if (coordinates.length < 6) return false

    const positions: Cartesian3[] = []
    for (let i = 0; i < coordinates.length; i += 2) {
      positions.push(
        Cartesian3.fromDegrees(coordinates[i], coordinates[i + 1])
      )
    }

    return this.pointInPolygon(position, positions)
  }

  private pointInPolygon(
    point: Cartesian3,
    polygon: Cartesian3[]
  ): boolean {
    // 简化的射线法检测，使用 2D 投影
    const cartographic = Ellipsoid.WGS84.cartesianToCartographic(point)
    if (!cartographic) return false

    const lon = CesiumMath.toDegrees(cartographic.longitude)
    const lat = CesiumMath.toDegrees(cartographic.latitude)

    let inside = false
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      const ci = Ellipsoid.WGS84.cartesianToCartographic(polygon[i])
      const cj = Ellipsoid.WGS84.cartesianToCartographic(polygon[j])
      if (!ci || !cj) continue

      const lonI = CesiumMath.toDegrees(ci.longitude)
      const latI = CesiumMath.toDegrees(ci.latitude)
      const lonJ = CesiumMath.toDegrees(cj.longitude)
      const latJ = CesiumMath.toDegrees(cj.latitude)

      if (
        latI > lat !== latJ > lat &&
        lon < ((lonJ - lonI) * (lat - latI)) / (latJ - latI) + lonI
      ) {
        inside = !inside
      }
    }

    return inside
  }
}
