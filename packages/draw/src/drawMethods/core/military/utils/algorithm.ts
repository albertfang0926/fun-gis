import * as Cesium from "mars3d-cesium"
import { flatten } from "lodash"

const tailedAttackArrowDefualParam: any = {
  headHeightFactor: 0.18,
  headWidthFactor: 0.3,
  neckHeightFactor: 0.85,
  neckWidthFactor: 0.15,
  tailWidthFactor: 0.1,
  headTailFactor: 0.8,
  swallowTailFactor: 1
}

// PlotUtils
function distance(t: number[], o: number[]) {
  return Math.sqrt(Math.pow(t[0] - o[0], 2) + Math.pow(t[1] - o[1], 2))
}

function wholeDistance(positionArr: number[][]) {
  let dis = 0
  const length = positionArr.length - 1
  for (let i = 0; i < length; i++) {
    dis += distance(positionArr[i], positionArr[i + 1])
  }
  return dis
}

function getBaseLength(positionArr: number[][]) {
  return Math.pow(wholeDistance(positionArr), 0.99)
}

function getAzimuth(t: number[], o: number[]): number {
  let e = 0
  const r = Math.asin(Math.abs(o[1] - t[1]) / distance(t, o))
  if (o[1] >= t[1] && o[0] >= t[0]) {
    e = r + Math.PI
  } else if (o[1] >= t[1] && o[0] < t[0]) {
    e = 2 * Math.PI - r
  } else if (o[1] < t[1] && o[0] < t[0]) {
    e = r
  } else if (o[1] < t[1] && o[0] >= t[0]) {
    e = Math.PI - r
  } else {
    e = 0
  }
  return e
}

function getThirdPoint(t: number[], o: number[], e: number, r: number, n = false) {
  const g = getAzimuth(t, o)
  const i = n ? g + e : g - e
  const s = r * Math.cos(i)
  const a = r * Math.sin(i)
  return [o[0] + s, o[1] + a]
}

function mid(t: any[], o: any[]) {
  return [(t[0] + o[0]) / 2, (t[1] + o[1]) / 2]
}

function getAngleOfThreePoints(t: any, o: any, e: any) {
  const r = getAzimuth(o, t) - getAzimuth(o, e)
  return r < 0 ? r + 2 * Math.PI : r
}

function getQuadricBSplineFactor(t: number, o: number) {
  return t === 0
    ? Math.pow(o - 1, 2) / 2
    : t === 1
    ? (-2 * Math.pow(o, 2) + 2 * o + 1) / 2
    : t === 2
    ? Math.pow(o, 2) / 2
    : 0
}

function getQBSplinePoints(t: string | any[]): any {
  if (t.length <= 2) {
    return t
  }
  const o = 2
  const e: any[] = []
  const r = t.length - o - 1
  e.push(t[0])
  for (let n = 0; r >= n; n++) {
    for (let g = 0; g <= 1; g += 0.05) {
      let i = 0
      let latitude = 0
      for (let s = 0; o >= s; s++) {
        const a = getQuadricBSplineFactor(s, g)
        i += a * t[n + s][0]
        latitude += a * t[n + s][1]
      }
      e.push([i, latitude])
    }
  }
  e.push(t[t.length - 1])
  return e
}

function isClockWise(t: number[], o: number[], e: number[]) {
  return (e[1] - t[1]) * (o[0] - t[0]) > (o[1] - t[1]) * (e[0] - t[0])
}

// algorithm
export function dereplication(array: any) {
  const last = array[array.length - 1]
  let change = false
  let newArray: any[] = []
  newArray = array.filter((i: any) => {
    if (i[0] !== last[0] && i[1] !== last[1]) {
      return i
    }
    change = true
    return false
  })
  if (change) {
    newArray.push(last)
  }
  return newArray
}

export function getAttackArrowHeadPoints(t: any, o: any, e: any, defaultParam: any) {
  const headHeightFactor = defaultParam.headHeightFactor
  const headTailFactor = defaultParam.headTailFactor
  const headWidthFactor = defaultParam.headWidthFactor
  const neckWidthFactor = defaultParam.neckWidthFactor
  const neckHeightFactor = defaultParam.neckHeightFactor
  let r = getBaseLength(t)
  let n = r * headHeightFactor
  const g = t[t.length - 1]
  r = distance(g, t[t.length - 2])
  const i = distance(o, e)
  // n > i * headTailFactor && (n = i * headTailFactor)
  if (n > i * headTailFactor) {
    n = i * headTailFactor
  }
  const s = n * headWidthFactor
  const a = n * neckWidthFactor
  n = n > r ? r : n
  const l = n * neckHeightFactor
  const u = getThirdPoint(t[t.length - 2], g, 0, n, !0)
  const c = getThirdPoint(t[t.length - 2], g, 0, l, !0)
  const p = getThirdPoint(g, u, Math.PI / 2, s, !1)
  const h = getThirdPoint(g, u, Math.PI / 2, s, !0)
  const d = getThirdPoint(g, c, Math.PI / 2, a, !1)
  const f = getThirdPoint(g, c, Math.PI / 2, a, !0)
  return [d, p, g, h, f]
}

export function getAttackArrowBodyPoints(t: any, o: any, e: any, r: any) {
  const n = wholeDistance(t)
  const g = getBaseLength(t)
  const i = g * r
  const s = distance(o, e)
  const a = (i - s) / 2
  let l = 0
  const u: any[] = []
  const c: any[] = []
  for (let p = 1; p < t.length - 1; p++) {
    const h = getAngleOfThreePoints(t[p - 1], t[p], t[p + 1]) / 2
    l += distance(t[p - 1], t[p])
    const d = (i / 2 - (l / n) * a) / Math.sin(h)
    const f = getThirdPoint(t[p - 1], t[p], Math.PI - h, d, !0)
    const E = getThirdPoint(t[p - 1], t[p], h, d, !1)
    u.push(f)
    c.push(E)
  }
  return u.concat(c)
}

export function tailedAttackArrow(inputPoint: [number, number][]) {
  inputPoint = dereplication(inputPoint)
  const tailWidthFactor = tailedAttackArrowDefualParam.tailWidthFactor
  const swallowTailFactor = tailedAttackArrowDefualParam.swallowTailFactor
  let swallowTailPnt: any = tailedAttackArrowDefualParam.swallowTailPnt
  // 控制点
  const polygonalPoint: Cesium.Cartesian3[] = []
  const result: {
    controlPoint: [number, number][]
    polygonalPoint: Cesium.Cartesian3[]
  } = {
    controlPoint: [],
    polygonalPoint: polygonalPoint
  }
  result.controlPoint = inputPoint
  const t = inputPoint.length
  if (t > 2) {
    // if (inputPoint.length === 2) {
    //   result.polygonalPoint = inputPoint
    //   return result
    // }
    const o = inputPoint
    let e = o[0]
    let r = o[1]
    // isClockWise(o[0], o[1], o[2]) && ((e = o[1]), (r = o[0]))
    if (isClockWise(o[0], o[1], o[2])) {
      e = o[1]
      r = o[0]
    }
    const n = mid(e, r)
    const g = [n].concat(o.slice(2))
    const i: any = getAttackArrowHeadPoints(g, e, r, tailedAttackArrowDefualParam)
    const s = i[0]
    const a = i[4]
    const l = distance(e, r)
    const u = getBaseLength(g)
    const c = u * tailWidthFactor * swallowTailFactor
    swallowTailPnt = getThirdPoint(g[1], g[0], 0, c, !0)
    const p = l / u
    const h = getAttackArrowBodyPoints(g, s, a, p)
    const t = h.length
    let d: any[] = [e].concat(h.slice(0, t / 2))
    d.push(s)
    let f: any[] = [r].concat(h.slice(t / 2, t))
    let newArray: number[] = []
    f.push(a)
    d = getQBSplinePoints(d)
    f = getQBSplinePoints(f)
    newArray = flatten(d.concat(i, f.reverse(), [swallowTailPnt, d[0]]))
    result.polygonalPoint = Cesium.Cartesian3.fromDegreesArray(newArray)
  }
  return result
}

// 已知点根据角度和距离求取另一点坐标（二维）  注：WGS84坐标系
export function getPointByAngleDistance(lng: number, lat: number, angle: number, distance: number) {
  const a = 6378137 // 赤道半径
  const b = 6356752.3142 // 短半径
  const f = 1 / 298.257223563 // 扁率

  const alpha1 = angle * (Math.PI / 180)
  const sinAlpha1 = Math.sin(alpha1)
  const cosAlpha1 = Math.cos(alpha1)
  const tanU1 = (1 - f) * Math.tan(lat * (Math.PI / 180))
  const cosU1 = 1 / Math.sqrt(1 + tanU1 * tanU1)
  const sinU1 = tanU1 * cosU1
  const sigma1 = Math.atan2(tanU1, cosAlpha1)
  const sinAlpha = cosU1 * sinAlpha1
  const cosSqAlpha = 1 - sinAlpha * sinAlpha
  const uSq = (cosSqAlpha * (a * a - b * b)) / (b * b)
  const A = 1 + (uSq / 16384) * (4096 + uSq * (-768 + uSq * (320 - 175 * uSq)))
  const B = (uSq / 1024) * (256 + uSq * (-128 + uSq * (74 - 47 * uSq)))
  let sigma = distance / (b * A)
  let sigmaP = 2 * Math.PI
  let cos2SigmaM: any
  let sinSigma: any
  let cosSigma: any
  while (Math.abs(sigma - sigmaP) > 1e-12) {
    cos2SigmaM = Math.cos(2 * sigma1 + sigma)
    sinSigma = Math.sin(sigma)
    cosSigma = Math.cos(sigma)
    const deltaSigma =
      B *
      sinSigma *
      (cos2SigmaM +
        (B / 4) *
          (cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM) -
            (B / 6) * cos2SigmaM * (-3 + 4 * sinSigma * sinSigma) * (-3 + 4 * cos2SigmaM * cos2SigmaM)))
    sigmaP = sigma
    sigma = distance / (b * A) + deltaSigma
  }

  const tmp = sinU1 * sinSigma - cosU1 * cosSigma * cosAlpha1
  const lat2 = Math.atan2(
    sinU1 * cosSigma + cosU1 * sinSigma * cosAlpha1,
    (1 - f) * Math.sqrt(sinAlpha * sinAlpha + tmp * tmp)
  )
  const lambda = Math.atan2(sinSigma * sinAlpha1, cosU1 * cosSigma - sinU1 * sinSigma * cosAlpha1)
  const C = (f / 16) * cosSqAlpha * (4 + f * (4 - 3 * cosSqAlpha))
  const L =
    lambda -
    (1 - C) * f * sinAlpha * (sigma + C * sinSigma * (cos2SigmaM + C * cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM)))
  return {
    longitude: lng + L * (180 / Math.PI),
    latitude: lat2 * (180 / Math.PI)
  }
}
// 已知点根据角度和距离求取另一点坐标（二三维，zazn）  注：WGS84坐标系
export function getExtensionPoint(startPoint: number[], azimuth_: number, distance: number) {
  // 从目标点出发根据方位角和距离计算目标点
  const R = 6378137
  const [lon0, lat0, azimuth] = [...startPoint, azimuth_].map((degree) => {
    return Cesium.Math.toRadians(degree)
  })
  const lat = Math.asin(
    Math.sin(lat0) * Math.cos(distance / R) + Math.cos(lat0) * Math.sin(distance / R) * Math.cos(azimuth)
  )
  const lon =
    lon0 +
    Math.atan2(
      Math.sin(azimuth) * Math.sin(distance / R) * Math.cos(lat0),
      Math.cos(distance / R) - Math.sin(lat0) * Math.sin(lat)
    )
  return [lon, lat].map((radian) => {
    return Cesium.Math.toDegrees(radian)
  })
}

interface x_y {
  longitude: any
  latitude: any
}
export function calculateVector(v: x_y, theta: number, d: number) {
  if (!theta) {
    theta = Math.PI / 2
  }
  if (!d) {
    d = 1
  }
  let x_1
  let x_2
  let y_1
  let y_2
  let v_l: any
  let v_r: any
  const d_v = Math.sqrt(v.longitude * v.longitude + v.latitude * v.latitude)
  if (v.latitude === 0) {
    x_1 = x_2 = (d_v * d * Math.cos(theta)) / v.longitude
    if (v.longitude > 0) {
      y_1 = Math.sqrt(d * d - x_1 * x_1)
      y_2 = -y_1
    } else if (v.longitude < 0) {
      y_2 = Math.sqrt(d * d - x_1 * x_1)
      y_1 = -y_2
    }
    v_l = { longitude: x_1, latitude: y_1 }
    v_r = { longitude: x_2, latitude: y_2 }
  } else {
    const n = -v.longitude / v.latitude
    const m = (d * d_v * Math.cos(theta)) / v.latitude
    const a = 1 + n * n
    const b = 2 * n * m
    const c = m * m - d * d
    x_1 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a)
    x_2 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a)
    y_1 = n * x_1 + m
    y_2 = n * x_2 + m
    if (v.latitude >= 0) {
      v_l = { longitude: x_1, latitude: y_1 }
      v_r = { longitude: x_2, latitude: y_2 }
    } else if (v.latitude < 0) {
      v_l = { longitude: x_2, latitude: y_2 }
      v_r = { longitude: x_1, latitude: y_1 }
    }
  }
  return [v_l, v_r]
}
