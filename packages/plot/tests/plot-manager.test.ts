import type { Viewer } from "cesium"
import { describe, expect, it, vi } from "vitest"

import EventDispatcher from "../src/events"
import { PlotManager, positionsToCartesians } from "../src/plot-manager"

describe("positionsToCartesians", () => {
  it("[0, 0] 对应 WGS84 原点 (半径 6378137)", () => {
    const [origin] = positionsToCartesians([[0, 0]])
    expect(origin.x).toBeCloseTo(6378137, 0)
    expect(origin.y).toBeCloseTo(0, 5)
    expect(origin.z).toBeCloseTo(0, 5)
  })

  it("逐点转换并保持数量", () => {
    const result = positionsToCartesians([
      [116, 39],
      [117, 40]
    ])
    expect(result).toHaveLength(2)
    for (const cartesian of result) {
      expect(Number.isFinite(cartesian.x)).toBe(true)
      expect(Number.isFinite(cartesian.y)).toBe(true)
      expect(Number.isFinite(cartesian.z)).toBe(true)
    }
  })
})

describe("EventDispatcher", () => {
  it("支持 drawCancel 事件", () => {
    const dispatcher = new EventDispatcher()
    const listener = vi.fn()
    dispatcher.on("drawCancel", listener)

    dispatcher.dispatchEvent("drawCancel", 1)
    expect(listener).toHaveBeenCalledWith(1)
  })

  it("clear 清空全部订阅", () => {
    const dispatcher = new EventDispatcher()
    const listener = vi.fn()
    dispatcher.on("drawEnd", listener)
    dispatcher.clear()

    dispatcher.dispatchEvent("drawEnd")
    expect(listener).not.toHaveBeenCalled()
  })
})

describe("PlotManager(无 viewer 路径)", () => {
  const makeManager = () =>
    new PlotManager({} as unknown as Viewer, { cancelOnEsc: false })

  it("deactivate/cancel 无激活图形时不抛错", () => {
    const manager = makeManager()
    expect(() => {
      manager.deactivate()
      manager.cancel()
    }).not.toThrow()
    expect(manager.getActiveShape()).toBeNull()
  })

  it("listShapes 返回内置注册表", () => {
    expect(makeManager().listShapes()).toHaveLength(19)
  })

  it("activate 未知类型报错", () => {
    expect(() => makeManager().activate("Nope")).toThrow(/Unknown shape type/)
  })

  it("on/off 订阅统一事件,destroy 后解绑", () => {
    const manager = makeManager()
    const listener = vi.fn()
    manager.on("drawCancel", listener)

    manager.destroy()
    expect(listener).not.toHaveBeenCalled()
  })
})
