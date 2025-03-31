

// #region 单位转换规则

// 常见的长度单位
const lengthUnits: { [unit: string]: number } = {
  // 米
  m: 1,
  // 里
  li: 500,
  // 千米
  km: 1000,
  // 英里
  mile: 1609.34,
  // 海里
  nmi: 1852
}

// 常见的面积单位
const areaUnits: { [unit: string]: number } = {
  // 平方米
  "m²": 1,
  // 平方千米
  "km²": 1e6,
  // 公顷
  ha: 1e4,
  // 亩
  mu: 666.67,
  // 平方英里
  "mile²": 2.58999e6,
  // 平方海里
  "nmi²": 3.429904e6
}

// #endregion



// #region 单位转换

/**
 * 长度转换
 * @param length 长度
 * @param fromUnit 转换前的长度单位
 * @param toUnit 转换后的长度单位
 */
export function convertLength(length: number, fromUnit: string, toUnit: string): number {
  if (fromUnit === toUnit) {
    return length
  }
  const fromUnitFactor = lengthUnits[fromUnit]
  const toUnitFactor = lengthUnits[toUnit]

  if (!fromUnitFactor || !toUnitFactor) {
    throw new Error("无效的长度单位转换")
  }
  return (length * fromUnitFactor) / toUnitFactor
}

/**
 * 面积转换
 * @param area
 * @param fromUnit 转换前的面积单位
 * @param toUnit 转换后的面积单位
 */
export function convertArea(area: number, fromUnit: string, toUnit: string): number {
  if (fromUnit === toUnit) {
    return area
  }
  const fromUnitFactor = areaUnits[fromUnit]
  const toUnitFactor = areaUnits[toUnit]
  if (!fromUnitFactor || !toUnitFactor) {
    throw new Error("无效的面积单位转换")
  }
  return (area * fromUnitFactor) / toUnitFactor
}

// #endregion


// #region 矢量要素转换
export function convertDegree(degree: number, toUnit: "DM" | "DMS") {
  if (toUnit === "DM") {
    const degreeInteger = Math.floor(degree)
    const minute = ((degree - degreeInteger) * 60).toFixed(3)
    return { degree: degreeInteger, minute: minute, showType: degreeInteger + "°" + minute + "′" }
  } else {
    degree = degree > 0 ? degree : -degree
    const deg = Math.floor(degree)
    const min = Math.floor((degree - deg) * 60)
    const sec = Math.round(((degree - deg) % (1 / 60)) * 3600)
    return {
      degree: deg,
      minute: min,
      second: sec,
      showType: deg.toString() + "°" + min.toString().padStart(2, "0") + "′" + sec.toString().padStart(2, "0") + "″"
    }
  }
}

// #endregion
