// import type { FeatureId } from "../.."
import type { ArcType, Cartesian3, Ellipsoid, Material } from "mars3d-cesium"
import { GeometryInstance, PolylineGeometry, Primitive, PolylineMaterialAppearance } from "mars3d-cesium"

export interface FeatureId {
  uuid: string
  index?: number
}

export interface PolylinePrimitiveOptions {
  width: number
  material: Material
  releaseGeometryInstances: boolean
  asynchronous: boolean
  allowPicking: boolean
  translucent?: boolean
  arcType?: ArcType
  ellipsoid?: Ellipsoid
}

export function getPolylinePrimitive(
  id: FeatureId | undefined,
  positions: Cartesian3[],
  options: PolylinePrimitiveOptions
) {
  const geometryInstance = new GeometryInstance({
    id,
    geometry: new PolylineGeometry({
      positions,
      width: options.width,
      arcType: options.arcType,
      ellipsoid: options.ellipsoid
    })
  })
  const primitive = new Primitive({
    appearance: new PolylineMaterialAppearance({
      material: options.material,
      translucent: options.translucent
    }),
    geometryInstances: [geometryInstance],
    releaseGeometryInstances: options.releaseGeometryInstances,
    asynchronous: options.asynchronous,
    allowPicking: options.allowPicking
  })
  return primitive
}
