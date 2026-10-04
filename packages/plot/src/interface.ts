// @ts-ignore
import * as CesiumTypeOnly from "cesium"

export type PolygonStyle = {
  material?: CesiumTypeOnly.MaterialProperty | CesiumTypeOnly.Color
  outlineWidth?: number
  outlineMaterial?: CesiumTypeOnly.MaterialProperty | CesiumTypeOnly.Color
}

/** 平面坐标点 [x, y] */
export type Point = [number, number]

export type LineStyle = {
  material?: CesiumTypeOnly.MaterialProperty | CesiumTypeOnly.Color
  lineWidth?: number
}

export type State = "drawing" | "edit" | "static" | "animating" | "hidden"
export type GeometryStyle = PolygonStyle | LineStyle

export type EventType =
  | "drawStart"
  | "drawUpdate"
  | "drawEnd"
  | "editEnd"
  | "editStart"
  | "drawCancel"
export type EventListener = (eventData?: any) => void

/**
 * 可序列化的图形数据(经纬度),数据驱动绘制的输入/输出契约。
 * id 在 getData() 输出时为 Cesium 实体 id;createFromData 输入时忽略。
 */
export interface PlotData {
  /** 注册表键,如 "AttackArrow" */
  type: string
  /** 控制(关键)点,[lng, lat] */
  positions: Point[]
  style?: GeometryStyle
  id?: string
}

export type VisibleAnimationOpts = {
  duration?: number
  delay?: number
  callback?: () => void
}

export type GrowthAnimationOpts = {
  duration: number
  delay: number
  callback: Function
}
