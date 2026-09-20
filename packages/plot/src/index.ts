import AssaultDirection from "./arrow/assault-direction"
import AttackArrow from "./arrow/attack-arrow"
import CurvedArrow from "./arrow/curved-arrow"
import DoubleArrow from "./arrow/double-arrow"
import FineArrow from "./arrow/fine-arrow"
import SquadCombat from "./arrow/squad-combat"
import StraightArrow from "./arrow/straight-arrow"
import SwallowtailAttackArrow from "./arrow/swallowtail-attack-arrow"
import SwallowtailSquadCombat from "./arrow/swallowtail-squad-combat"
import type { GeometryStyle } from "./interface"
import Curve from "./line/curve"
import FreehandLine from "./line/freehand-line"
import Circle from "./polygon/circle"
import Ellipse from "./polygon/ellipse"
import FreehandPolygon from "./polygon/freehand-polygon"
import Lune from "./polygon/lune"
import Polygon from "./polygon/polygon"
import Reactangle from "./polygon/rectangle"
import Sector from "./polygon/sector"
import Triangle from "./polygon/triangle"

export { default as Base } from "./base"
export type {
  EventType,
  GeometryStyle,
  LineStyle,
  Point,
  PolygonStyle,
  State
} from "./interface"

export {
  AssaultDirection,
  AttackArrow,
  Circle,
  CurvedArrow,
  DoubleArrow,
  Ellipse,
  FineArrow,
  FreehandLine,
  FreehandPolygon,
  Lune,
  Polygon,
  Reactangle,
  Sector,
  SquadCombat,
  StraightArrow,
  SwallowtailAttackArrow,
  SwallowtailSquadCombat,
  Triangle
}

export type CreateGeometryFromDataOpts = {
  type: string
  cartesianPoints: import("cesium").Cartesian3[]
  style: GeometryStyle
}

const CesiumPlot: any = {
  FineArrow,
  AttackArrow,
  SwallowtailAttackArrow,
  SquadCombat,
  SwallowtailSquadCombat,
  StraightArrow,
  CurvedArrow,
  AssaultDirection,
  DoubleArrow,
  FreehandLine,
  FreehandPolygon,
  Curve,
  Ellipse,
  Lune,
  Reactangle,
  Triangle,
  Polygon,
  Circle,
  Sector
}

/**
 * 根据点位数据生成几何图形（跳过交互绘制，直接落图）
 */
export function createGeometryFromData(
  viewer: any,
  opts: CreateGeometryFromDataOpts
) {
  const { type, style, cartesianPoints } = opts
  const geometry = new CesiumPlot[type](viewer, style)

  geometry.points = cartesianPoints
  const geometryPoints = geometry.createGraphic(cartesianPoints)
  geometry.setGeometryPoints(geometryPoints)
  if (geometry.type == "polygon") {
    geometry.drawPolygon()
  } else {
    geometry.drawLine()
  }
  geometry.finishDrawing()
  geometry.onClick()
  return geometry
}

CesiumPlot.createGeometryFromData = createGeometryFromData

export default CesiumPlot
