// 统一绘制门面（推荐入口）
export type { ShapeDefinition, ShapeKind } from "./drawTool"
export { DrawTool, drawTool } from "./drawTool"

// entity 系军事标绘图形（亦可经 drawTool.activate 直接使用）
export {
  AssaultDirection,
  CurvedArrow,
  DoubleArrow,
  Ellipse,
  FineArrow,
  FreehandLine,
  FreehandPolygon,
  Lune,
  AttackArrow as MilitaryAttackArrow,
  Circle as MilitaryCircle,
  Polygon as MilitaryPolygon,
  Sector as MilitarySector,
  SquadCombat,
  StraightArrow,
  SwallowtailAttackArrow,
  SwallowtailSquadCombat,
  Triangle
} from "./plot"
export { createGeometryFromData } from "./plot"
export { default as CesiumPlot } from "./plot"

// —— 以下为 v1 直接类式 API，保留兼容，新代码请使用 drawTool ——
/** @deprecated 请改用 drawTool 统一门面 */
export { itemManager } from "./drawMethods/manager/primitive"
/** @deprecated 请改用 drawTool.activate("Arc") */
export { Arc } from "./drawMethods/middleware/arc"
/** @deprecated 请改用 drawTool.activate("Arch") */
export { Arch } from "./drawMethods/middleware/arch"
/** @deprecated 请改用 drawTool.activate("AttackArrow") */
export { AttackArrow } from "./drawMethods/middleware/attackArrow"
/** @deprecated 请改用 drawTool.activate("Circle") */
export { Circle } from "./drawMethods/middleware/circle"
/** @deprecated 请改用 drawTool.activate("CloseCurve") */
export { CloseCurve } from "./drawMethods/middleware/closeCurve"
/** @deprecated 请改用 drawTool.activate("Curve") */
export { Curve } from "./drawMethods/middleware/curve"
/** @deprecated 请改用 drawTool.activate("Label") */
export { Label } from "./drawMethods/middleware/label"
/** @deprecated 请改用 drawTool.activate("Parallelogram") */
export { Parallelogram } from "./drawMethods/middleware/parallelogram"
/** @deprecated 请改用 drawTool.activate("Point") */
export { Point } from "./drawMethods/middleware/point"
/** @deprecated 请改用 drawTool.activate("Polygon") */
export { Polygon } from "./drawMethods/middleware/polygon"
/** @deprecated 请改用 drawTool.activate("Polyline") */
export { Polyline } from "./drawMethods/middleware/polyline"
/** @deprecated 请改用 drawTool.activate("Rectangle") */
export { Rectangle } from "./drawMethods/middleware/rectangle"
/** @deprecated 请改用 drawTool.activate("Sector") */
export { Sector } from "./drawMethods/middleware/sector"
/** @deprecated 请改用 drawTool.activate("Segment") */
export { Segment } from "./drawMethods/middleware/segment"
