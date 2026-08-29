import type { Viewer } from "cesium"

// primitive 系图形（Primitive 重建式渲染，高性能、requestRenderMode 友好）
import { Arc } from "../drawMethods/middleware/arc"
import { Arch } from "../drawMethods/middleware/arch"
import { AttackArrow } from "../drawMethods/middleware/attackArrow"
import { Circle } from "../drawMethods/middleware/circle"
import { CloseCurve } from "../drawMethods/middleware/closeCurve"
import { Curve } from "../drawMethods/middleware/curve"
import { Label } from "../drawMethods/middleware/label"
import { Parallelogram } from "../drawMethods/middleware/parallelogram"
import { Point } from "../drawMethods/middleware/point"
import { Polygon } from "../drawMethods/middleware/polygon"
import { Polyline } from "../drawMethods/middleware/polyline"
import { Rectangle } from "../drawMethods/middleware/rectangle"
import { Sector } from "../drawMethods/middleware/sector"
import { Segment } from "../drawMethods/middleware/segment"
// entity 系图形（Entity + CallbackProperty，支持控制点编辑与生长动画）
import AssaultDirection from "../plot/arrow/assault-direction"
import AttackArrowEntity from "../plot/arrow/attack-arrow"
import CurvedArrow from "../plot/arrow/curved-arrow"
import DoubleArrow from "../plot/arrow/double-arrow"
import FineArrow from "../plot/arrow/fine-arrow"
import SquadCombat from "../plot/arrow/squad-combat"
import StraightArrow from "../plot/arrow/straight-arrow"
import SwallowtailAttackArrow from "../plot/arrow/swallowtail-attack-arrow"
import SwallowtailSquadCombat from "../plot/arrow/swallowtail-squad-combat"
import CurveEntity from "../plot/line/curve"
import FreehandLine from "../plot/line/freehand-line"
import CircleEntity from "../plot/polygon/circle"
import Ellipse from "../plot/polygon/ellipse"
import FreehandPolygon from "../plot/polygon/freehand-polygon"
import Lune from "../plot/polygon/lune"
import PolygonEntity from "../plot/polygon/polygon"
import RectangleEntity from "../plot/polygon/rectangle"
import SectorEntity from "../plot/polygon/sector"
import Triangle from "../plot/polygon/triangle"

export type ShapeKind = "primitive" | "entity"

export interface ShapeDefinition {
  kind: ShapeKind
  /**
   * 创建图形实例并开始绘制
   * primitive 系：绘制完成（右键/双击结束）时回调 onComplete
   * entity 系：绘制过程通过实例的统一事件通知，style 为可选样式
   */
  create: (
    viewer: Viewer,
    onComplete: (instance: any) => void,
    style?: any
  ) => any
}

const primitive =
  (Cls: any): ShapeDefinition["create"] =>
  (viewer, onComplete) => {
    const instance = new Cls(viewer, onComplete)
    instance.draw()
    return instance
  }

const entity =
  (Cls: any): ShapeDefinition["create"] =>
  (viewer, _onComplete, style) =>
    new Cls(viewer, style)

// 与 primitive 系重名的 entity 图形以 "Entity" 后缀区分，可用 registerShape 覆盖默认实现
export const defaultShapes: Record<string, ShapeDefinition> = {
  // primitive 系
  Point: { kind: "primitive", create: primitive(Point) },
  Label: { kind: "primitive", create: primitive(Label) },
  Segment: { kind: "primitive", create: primitive(Segment) },
  Polyline: { kind: "primitive", create: primitive(Polyline) },
  Polygon: { kind: "primitive", create: primitive(Polygon) },
  Circle: { kind: "primitive", create: primitive(Circle) },
  Rectangle: { kind: "primitive", create: primitive(Rectangle) },
  Arc: { kind: "primitive", create: primitive(Arc) },
  Arch: { kind: "primitive", create: primitive(Arch) },
  Sector: { kind: "primitive", create: primitive(Sector) },
  Curve: { kind: "primitive", create: primitive(Curve) },
  CloseCurve: { kind: "primitive", create: primitive(CloseCurve) },
  Parallelogram: { kind: "primitive", create: primitive(Parallelogram) },
  AttackArrow: { kind: "primitive", create: primitive(AttackArrow) },
  // entity 系
  FineArrow: { kind: "entity", create: entity(FineArrow) },
  StraightArrow: { kind: "entity", create: entity(StraightArrow) },
  CurvedArrow: { kind: "entity", create: entity(CurvedArrow) },
  AssaultDirection: { kind: "entity", create: entity(AssaultDirection) },
  DoubleArrow: { kind: "entity", create: entity(DoubleArrow) },
  AttackArrowEntity: { kind: "entity", create: entity(AttackArrowEntity) },
  SwallowtailAttackArrow: {
    kind: "entity",
    create: entity(SwallowtailAttackArrow)
  },
  SquadCombat: { kind: "entity", create: entity(SquadCombat) },
  SwallowtailSquadCombat: {
    kind: "entity",
    create: entity(SwallowtailSquadCombat)
  },
  FreehandLine: { kind: "entity", create: entity(FreehandLine) },
  CurveEntity: { kind: "entity", create: entity(CurveEntity) },
  CircleEntity: { kind: "entity", create: entity(CircleEntity) },
  Ellipse: { kind: "entity", create: entity(Ellipse) },
  Lune: { kind: "entity", create: entity(Lune) },
  Triangle: { kind: "entity", create: entity(Triangle) },
  FreehandPolygon: { kind: "entity", create: entity(FreehandPolygon) },
  PolygonEntity: { kind: "entity", create: entity(PolygonEntity) },
  RectangleEntity: { kind: "entity", create: entity(RectangleEntity) },
  SectorEntity: { kind: "entity", create: entity(SectorEntity) }
}
