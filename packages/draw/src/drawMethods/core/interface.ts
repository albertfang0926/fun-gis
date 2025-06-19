import type { ArcType, Cartesian2 } from "mars3d-cesium"
import type { Coordinate } from "../types/coordinate"

// #region 文本标签

export interface LabelDrawOption {
  fontSize?: number
  fontFamily?: string
  bgColor?: string
  fontColor?: string
  borderColor?: string
  borderWidth?: number
  padding?: [number, number]
}

export type CommonLabelOption = Required<LabelDrawOption>

export interface TextLabelTextOptions {
  padding?: [number, number]
  borderWidth?: number
  borderColor?: string
  fontStyle?: string
  textColor?: string
  backgroundColor?: string
}

export interface TextLabelOptions {
  id?: string
  show?: boolean
  scale?: number
  offsetY?: number
}

// #endregion

// -- billboard 形状样式设置
export interface BillBoardTextureOptions {
  // 用于查询对应的svg进行预览
  textureId: string
  url: string
  width: number
  height: number
  scale: number
  color: string
  selectedColor: string
  pixelOffset: [number, number]
}

// -- polyline 材质样式设计
export interface PolylineTextureOptions {
  // 用于查询对应的svg进行预览
  textureId: string
  // 可以随便改的，material 的 uniforms 只设置 color 一个参数
  materialType: string
  color: string
  selectedColor: string
  // 需要重绘的
  width: number
  arcType?: ArcType
  // 其他附加参数
  translucent?: boolean
  asynchronous?: boolean
  allowPicking?: boolean
  releaseGeometryInstances?: boolean
}

// -- polyline 修改位置所需参数
export interface PolylinePositionOptions {
  index: number
  coordinates: Coordinate[]
  id?: string
  width?: number
}

// --  点线面默认绘制样式 配置表
export interface FeatureDrawOption {
  label: LabelDrawOption
  texture: BillBoardTextureOptions | PolylineTextureOptions
}
export type DrawOptionTable = Record<string, FeatureDrawOption>

// 处理不同要素的DrawOption
export type { BillBoardDrawOption } from "./point/billboard"
export type { PolylineDrawOption } from "./polyline/line"
// export type { CurveDrawOption, PolylineInterpolationType } from "./curve"
export type { CurveLineDrawOption } from ".//polyline/curveLine"
