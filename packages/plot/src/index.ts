import type { Cartesian3, Viewer } from "cesium"

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
import { createFromData, placeShape } from "./plot-manager"
import Circle from "./polygon/circle"
import Ellipse from "./polygon/ellipse"
import FreehandPolygon from "./polygon/freehand-polygon"
import Lune from "./polygon/lune"
import Polygon from "./polygon/polygon"
import Rectangle from "./polygon/rectangle"
import Sector from "./polygon/sector"
import Triangle from "./polygon/triangle"

export { default as Base } from "./base"
export type {
  EventType,
  GeometryStyle,
  LineStyle,
  PlotData,
  Point,
  PolygonStyle,
  State
} from "./interface"

export {
  AssaultDirection,
  AttackArrow,
  Circle,
  Curve,
  CurvedArrow,
  DoubleArrow,
  Ellipse,
  FineArrow,
  FreehandLine,
  FreehandPolygon,
  Lune,
  Polygon,
  Rectangle as Reactangle,
  Rectangle,
  Sector,
  SquadCombat,
  StraightArrow,
  SwallowtailAttackArrow,
  SwallowtailSquadCombat,
  Triangle
}

export type {
  MapEventSource,
  MoveEvent,
  PositionEvent,
  ScreenEventKey,
  ScreenEventListener,
  ScreenEventPayload
} from "./event-source"
export { CesiumEventSource, destroySharedEventSource, getSharedEventSource }

export type { PlotEventData, PlotManagerOptions } from "./plot-manager"
export {
  createFromData,
  placeShape,
  PlotManager,
  positionsToCartesians
} from "./plot-manager"
export type {
  ShapeCategory,
  ShapeConstructor,
  ShapeDefinition
} from "./registry"
export { defaultRegistry, ShapeRegistry } from "./registry"

/**
 * 兼容旧签名:由 Cartesian3 点位直接落图(跳过交互绘制)。
 * 落图后为 static 状态,点击图形可进入编辑。
 * 新代码建议使用 `PlotManager.createFromData` 或 `createFromData`(经纬度)。
 */
export type CreateGeometryFromDataOpts = {
  type: string
  cartesianPoints: Cartesian3[]
  style?: GeometryStyle
}

export function createGeometryFromData(
  viewer: Viewer,
  opts: CreateGeometryFromDataOpts
) {
  return placeShape(viewer, opts.type, opts.cartesianPoints, opts.style)
}

/** 按图形名索引的图形注册表(兼容旧默认导出形态) */
export interface CesiumPlotRegistry
  extends Record<string, import("./registry").ShapeConstructor> {
  createGeometryFromData: typeof createGeometryFromData
  createFromData: typeof createFromData
}

const CesiumPlot: CesiumPlotRegistry = {
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
  Rectangle,
  Reactangle: Rectangle,
  Triangle,
  Polygon,
  Circle,
  Sector,
  createGeometryFromData,
  createFromData
}

export default CesiumPlot
