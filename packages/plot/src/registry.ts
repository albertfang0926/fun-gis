import AssaultDirection from "./arrow/assault-direction"
import AttackArrow from "./arrow/attack-arrow"
import CurvedArrow from "./arrow/curved-arrow"
import DoubleArrow from "./arrow/double-arrow"
import FineArrow from "./arrow/fine-arrow"
import SquadCombat from "./arrow/squad-combat"
import StraightArrow from "./arrow/straight-arrow"
import SwallowtailAttackArrow from "./arrow/swallowtail-attack-arrow"
import SwallowtailSquadCombat from "./arrow/swallowtail-squad-combat"
import Base from "./base"
import { MapEventSource } from "./event-source"
import { GeometryStyle } from "./interface"
import Curve from "./line/curve"
import FreehandLine from "./line/freehand-line"
import Circle from "./polygon/circle"
import Ellipse from "./polygon/ellipse"
import FreehandPolygon from "./polygon/freehand-polygon"
import Lune from "./polygon/lune"
import Polygon from "./polygon/polygon"
import Rectangle from "./polygon/rectangle"
import Sector from "./polygon/sector"
import Triangle from "./polygon/triangle"

/** 图形构造器:与 Base 构造签名一致(viewer, style?, eventSource?) */
export type ShapeConstructor = new (
  viewer: import("cesium").Viewer,
  style?: GeometryStyle,
  eventSource?: MapEventSource
) => Base

export type ShapeCategory = "arrow" | "line" | "polygon"

export interface ShapeDefinition {
  /** 注册表键,同时是数据驱动绘制使用的 type */
  type: string
  /** 图形构造器,必须继承 Base */
  ctor: ShapeConstructor
  /** 分类(供 UI 分组列举,不参与绘制逻辑) */
  category: ShapeCategory
}

/**
 * 图形注册表:内置图形与自定义图形走同一注册通道,
 * `activate` / `createFromData` 都从这里取构造器。
 */
export class ShapeRegistry {
  private shapes = new Map<string, ShapeDefinition>()
  private aliases = new Map<string, string>()
  private ctorTypes = new Map<object, string>()

  register(definition: ShapeDefinition): this {
    if (!definition.type) {
      throw new Error("Shape definition requires a non-empty type")
    }
    if (!(definition.ctor.prototype instanceof Base)) {
      throw new Error(
        `Shape "${definition.type}" ctor must extend Base (got ${definition.ctor.name})`
      )
    }
    this.shapes.set(definition.type, definition)
    this.ctorTypes.set(definition.ctor, definition.type)
    return this
  }

  /** 注册别名(如历史拼写 Reactangle → Rectangle),别名不出现在 list() 中 */
  registerAlias(alias: string, type: string): this {
    if (!this.shapes.has(type)) {
      throw new Error(`Cannot alias "${alias}" to unknown type "${type}"`)
    }
    this.aliases.set(alias, type)
    return this
  }

  unregister(type: string): boolean {
    const canonical = this.aliases.get(type) ?? type
    const definition = this.shapes.get(canonical)
    if (!definition) {
      return false
    }
    this.shapes.delete(canonical)
    this.ctorTypes.delete(definition.ctor)
    for (const [alias, target] of this.aliases) {
      if (target === canonical) {
        this.aliases.delete(alias)
      }
    }
    return true
  }

  /** 解析别名后取定义 */
  get(type: string): ShapeDefinition | undefined {
    const canonical = this.aliases.get(type) ?? type
    return this.shapes.get(canonical)
  }

  /** 取定义,未注册时抛错并列出全部可用 type */
  require(type: string): ShapeDefinition {
    const definition = this.get(type)
    if (!definition) {
      throw new Error(
        `Unknown shape type: "${type}" (available: ${this.list()
          .map((item) => item.type)
          .join(", ")})`
      )
    }
    return definition
  }

  has(type: string): boolean {
    return this.get(type) !== undefined
  }

  /** 全部图形定义(不含别名) */
  list(): ShapeDefinition[] {
    return [...this.shapes.values()]
  }

  /** 实例反查注册键(仅对经本注册表注册的构造器有效) */
  typeOf(instance: Base): string | undefined {
    const ctor = Object.getPrototypeOf(instance)?.constructor
    return this.ctorTypes.get(ctor)
  }
}

/** 内置注册表:19 种图形与自定义图形共用同一机制 */
export const defaultRegistry = new ShapeRegistry()

defaultRegistry
  .register({ type: "FineArrow", ctor: FineArrow, category: "arrow" })
  .register({ type: "AttackArrow", ctor: AttackArrow, category: "arrow" })
  .register({
    type: "SwallowtailAttackArrow",
    ctor: SwallowtailAttackArrow,
    category: "arrow"
  })
  .register({ type: "SquadCombat", ctor: SquadCombat, category: "arrow" })
  .register({
    type: "SwallowtailSquadCombat",
    ctor: SwallowtailSquadCombat,
    category: "arrow"
  })
  .register({
    type: "AssaultDirection",
    ctor: AssaultDirection,
    category: "arrow"
  })
  .register({ type: "DoubleArrow", ctor: DoubleArrow, category: "arrow" })
  .register({ type: "StraightArrow", ctor: StraightArrow, category: "arrow" })
  .register({ type: "CurvedArrow", ctor: CurvedArrow, category: "arrow" })
  .register({ type: "Curve", ctor: Curve, category: "line" })
  .register({ type: "FreehandLine", ctor: FreehandLine, category: "line" })
  .register({ type: "Circle", ctor: Circle, category: "polygon" })
  .register({ type: "Ellipse", ctor: Ellipse, category: "polygon" })
  .register({ type: "Lune", ctor: Lune, category: "polygon" })
  .register({ type: "Triangle", ctor: Triangle, category: "polygon" })
  .register({
    type: "FreehandPolygon",
    ctor: FreehandPolygon,
    category: "polygon"
  })
  .register({ type: "Polygon", ctor: Polygon, category: "polygon" })
  .register({ type: "Rectangle", ctor: Rectangle, category: "polygon" })
  .register({ type: "Sector", ctor: Sector, category: "polygon" })

// 历史拼写别名:类名 Reactangle 曾作为注册键使用,过渡期保留
defaultRegistry.registerAlias("Reactangle", "Rectangle")
