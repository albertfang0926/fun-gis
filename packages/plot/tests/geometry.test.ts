import { describe, expect, it } from "vitest"

import {
  getBearing,
  getCoordinateArea,
  getDestination,
  getDistance
} from "../src/drawMethods/utils/geometry"

const coor = (longitude: number, latitude: number) => ({
  longitude,
  latitude,
  height: 0
})

describe("getDistance", () => {
  it("赤道上经度差 1° 约 111.2 千米", () => {
    const distance = getDistance([coor(0, 0), coor(1, 0)])
    expect(Math.abs(distance - 111.2)).toBeLessThan(0.5)
  })

  it("两点重合时距离为 0", () => {
    expect(getDistance([coor(116, 31), coor(116, 31)])).toBe(0)
  })
})

describe("getCoordinateArea", () => {
  it("赤道附近 1°×1° 闭合正方形面积约 1.2e10 平方米", () => {
    const square = [
      coor(0, 0),
      coor(1, 0),
      coor(1, 1),
      coor(0, 1),
      coor(0, 0)
    ]
    const area = getCoordinateArea(square)
    expect(area).toBeGreaterThan(1e10)
    expect(area).toBeLessThan(1.5e10)
  })

  it("点数不足以构成多边形时返回 undefined", () => {
    expect(getCoordinateArea([coor(0, 0), coor(1, 0)])).toBeUndefined()
  })
})

describe("getBearing", () => {
  it("正东方向为 90°", () => {
    expect(getBearing(coor(0, 0), coor(1, 0))).toBeCloseTo(90, 1)
  })

  it("正北方向为 0°", () => {
    expect(getBearing(coor(0, 0), coor(0, 1))).toBeCloseTo(0, 1)
  })
})

describe("getDestination", () => {
  it("自 (0,0) 向东 111 千米约到达经度 1", () => {
    const [longitude, latitude] = getDestination(coor(0, 0), 111, 90)
    expect(longitude).toBeGreaterThan(0.9)
    expect(Math.abs(latitude)).toBeLessThan(0.01)
  })
})
