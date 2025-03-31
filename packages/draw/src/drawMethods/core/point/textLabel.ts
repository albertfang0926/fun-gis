import type { TextLabelOptions, TextLabelTextOptions } from "../interface"
import { BillboardCollection, Cartesian2, Cartesian3, defaultValue } from "mars3d-cesium"
import { createUid } from "../../utils"

/**
 * 在地图上创建标签billboard
 * @param position 标签所在坐标
 * @param options 标签设置
 * @param text 标签文本
 * @param textOptions 标签文本设置
 * @returns 标签billboard
 */
export function createTextLabel(
  position: Cartesian3,
  options: TextLabelOptions,
  text: string,
  textOptions: TextLabelTextOptions
) {
  // 创建img图片
  const { height, texture: image } = createTextLabelImg(text, textOptions)
  // 解析参数
  const uuid = options.id || createUid()
  const featureId = { uuid }
  const show = defaultValue(options.show, true)
  const scale = defaultValue(options.scale, 1.0)
  const offsetY = defaultValue(options.offsetY, -2.0)

  // 最终的偏移量加上 图片本身高度需要的偏移 偏移量是负数，向上偏移
  const pixelOffset = new Cartesian2(0, offsetY - (height * scale) / 2)

  const billboard = new BillboardCollection()
  billboard.add({
    position: position,
    id: featureId,
    show,
    scale,
    image,
    pixelOffset,
    // 确保重叠时，textlabel 出现在上方
    eyeOffset: new Cartesian3(0, 0, -10000)
  })
  return billboard
}

/**
 * 创建标签，默认文本居中对齐
 * @param text 标签文本
 * @param options 标签渲染选项
 */
export function createTextLabelImg(text: string, options: TextLabelTextOptions) {
  // 解析参数
  const {
    padding = [4, 4],
    borderWidth = 2,
    borderColor = "#FFF",
    fontStyle = "14px Arial",
    textColor = "#FFF",
    backgroundColor = "#F28500"
  } = options

  const canvas = document.createElement("canvas")
  const ctx = canvas.getContext("2d")!
  ctx.font = fontStyle
  const textMetris = ctx.measureText(text)
  const textWidth = textMetris.width
  const textHeight = textMetris.fontBoundingBoxAscent + textMetris.fontBoundingBoxDescent
  // 整体的宽高 = 文本的宽高 + padding + border
  const width = textWidth + 2 * padding[1] + 2 * borderWidth
  const height = textHeight + 2 * padding[0] + 2 * borderWidth
  // 设置canvas大小
  canvas.width = width
  canvas.height = height
  // 设置canvas样式
  // 绘制背景
  ctx.fillStyle = backgroundColor
  ctx.fillRect(0, 0, width, height)
  // 绘制边框
  ctx.strokeStyle = borderColor
  ctx.lineWidth = borderWidth
  ctx.beginPath()
  ctx.moveTo(borderWidth / 2, borderWidth / 2)
  ctx.lineTo(width - borderWidth / 2, borderWidth / 2)
  ctx.lineTo(width - borderWidth / 2, height - borderWidth / 2)
  ctx.lineTo(borderWidth / 2, height - borderWidth / 2)
  ctx.lineTo(borderWidth / 2, borderWidth / 2)
  ctx.closePath()
  ctx.stroke()
  // 绘制文本
  ctx.font = fontStyle
  ctx.textAlign = "center"
  ctx.textBaseline = "ideographic"
  ctx.fillStyle = textColor
  // 默认居中
  ctx.fillText(text, width / 2, height - borderWidth - padding[0])
  const texture = canvas.toDataURL()

  return { width, height, texture }
}
