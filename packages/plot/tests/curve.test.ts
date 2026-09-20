import { describe, expect, it } from "vitest"

import { linearSplineCurve } from "../src/drawMethods/utils/curve"

const coor = (longitude: number, latitude: number) => ({
  longitude,
  latitude,
  height: 0
})

describe("linearSplineCurve", () => {
  it("两点、resolution=10 时插值出 12 个点", () => {
    const result = linearSplineCurve([coor(0, 0), coor(1, 1)], 10)
    expect(result).toHaveLength(12)
  })

  it("插值结果首尾与输入端点一致", () => {
    const result = linearSplineCurve([coor(0, 0), coor(1, 1)], 10)
    expect(result[0].longitude).toBeCloseTo(0)
    expect(result[0].latitude).toBeCloseTo(0)
    expect(result[result.length - 1].longitude).toBeCloseTo(1)
    expect(result[result.length - 1].latitude).toBeCloseTo(1)
  })

  it("少于两个点时原样返回", () => {
    expect(linearSplineCurve([coor(116, 31)], 10)).toHaveLength(1)
  })
})
