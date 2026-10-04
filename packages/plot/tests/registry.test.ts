import { describe, expect, it } from "vitest"

import Base from "../src/base"
import {
  defaultRegistry,
  ShapeConstructor,
  ShapeRegistry
} from "../src/registry"

describe("defaultRegistry", () => {
  it("内置 19 种图形", () => {
    expect(defaultRegistry.list()).toHaveLength(19)
  })

  it("分类覆盖 arrow / line / polygon", () => {
    const categories = new Set(defaultRegistry.list().map((d) => d.category))
    expect(categories).toEqual(new Set(["arrow", "line", "polygon"]))
  })

  it("Reactangle 是 Rectangle 的历史别名,指向同一构造器", () => {
    expect(defaultRegistry.get("Reactangle")).toBe(
      defaultRegistry.get("Rectangle")
    )
    expect(defaultRegistry.has("Reactangle")).toBe(true)
  })

  it("别名不出现在 list() 中", () => {
    expect(defaultRegistry.list().some((d) => d.type === "Reactangle")).toBe(
      false
    )
  })

  it("require 未知类型报错并列出可用类型", () => {
    expect(() => defaultRegistry.require("Nope")).toThrow(
      /available:.*FineArrow/
    )
  })
})

describe("ShapeRegistry", () => {
  it("注册非 Base 子类被拒绝", () => {
    const registry = new ShapeRegistry()
    expect(() =>
      registry.register({
        type: "Fake",
        ctor: class Fake {} as unknown as ShapeConstructor,
        category: "polygon"
      })
    ).toThrow(/must extend Base/)
  })

  it("注册自定义 Base 子类并反查 typeOf", () => {
    class Custom extends Base {}
    const registry = new ShapeRegistry()
    registry.register({ type: "Custom", ctor: Custom, category: "polygon" })

    expect(registry.has("Custom")).toBe(true)
    expect(registry.typeOf(Object.create(Custom.prototype) as Base)).toBe(
      "Custom"
    )
  })

  it("unregister 同时清理别名", () => {
    class Custom extends Base {}
    const registry = new ShapeRegistry()
    registry.register({ type: "Custom", ctor: Custom, category: "polygon" })
    registry.registerAlias("C", "Custom")

    expect(registry.unregister("Custom")).toBe(true)
    expect(registry.has("Custom")).toBe(false)
    expect(registry.has("C")).toBe(false)
  })

  it("别名必须指向已注册类型", () => {
    const registry = new ShapeRegistry()
    expect(() => registry.registerAlias("X", "Missing")).toThrow(/unknown type/)
  })
})
