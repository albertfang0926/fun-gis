import {
  Viewer,
  Cartesian3,
  PolylineGeometry,
  PolylineMaterialAppearance,
  Material,
  Color,
  Primitive,
  GeometryInstance
} from "cesium"

import arrow from "../assets/images/arrow.png"

type ICoord = [number, number, number]
const route: ICoord[] = [
  [116.391333, 39.90731, 0],
  [116.3919, 39.907548, 0],
  [116.391884, 39.908271, 0],
  [116.390515, 39.908271, 0],
  [116.390609, 39.907373, 0]
]

export class FlightRoute {
  private route: ICoord[]

  constructor() {
    this.route = route
  }

  drawRoute(viewer: Viewer) {
    const geometry = PolylineGeometry.createGeometry(
      new PolylineGeometry({
        positions: this.route.map((p) =>
          Cartesian3.fromDegrees(p[0], p[1], p[2] ?? 0)
        ),
        width: 10,
        vertexFormat: PolylineMaterialAppearance.VERTEX_FORMAT // 允许材质
      })
    )!

    if (!geometry) {
      console.warn("Failed to create polyline geometry")
      return
    }
    const material = Material.fromType("Image", {
      image: arrow,
      repeat: { x: 30, y: 1 }, // 重复
      color: Color.WHITE
    })

    viewer.scene.primitives.add(
      new Primitive({
        geometryInstances: new GeometryInstance({ geometry }),
        appearance: new PolylineMaterialAppearance({ material }),
        asynchronous: false
      })
    )
  }
}
