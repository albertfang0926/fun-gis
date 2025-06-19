import type {
  LabelDrawOption,
  TextLabelTextOptions,
  CommonLabelOption,
  DrawOptionTable,
  BillBoardDrawOption,
  BillBoardTextureOptions,
  PolylineDrawOption,
  PolylineTextureOptions
} from "./interface"
// import { PointTextures } from "../material/featureTexture"
// import { MaterialTable } from ".."
import { ArcType, Cartesian2, Color } from "mars3d-cesium"

/**
 * 默认的标签设置
 */
const labelOption: CommonLabelOption = {
  fontSize: 14,
  fontFamily: "Arial",
  bgColor: "#FF9101",
  fontColor: "#FFFFFF",
  borderColor: "#FFFFFF",
  borderWidth: 2,
  padding: [2, 4]
}

// /**
//  * 每一类要素的绘制设置
//  */
// const drawOptions: DrawOptionTable = {
//   point: {
//     label: {
//       bgColor: "#FF9101"
//     },
//     texture: {
//       textureId: PointTextures[0].id,
//       url: PointTextures[0].url,
//       width: PointTextures[0].width,
//       height: PointTextures[0].height,
//       scale: 1.0,
//       color: "#FFFFFF",
//       pixelOffset: PointTextures[0].pixelOffset,
//       selectedColor: "#FFFF00"
//     }
//   },
//   line: {
//     label: {
//       bgColor: "#0CBC76"
//     },
//     texture: {
//       textureId: "solid-line",
//       materialType: "Color",
//       color: "#FFFFFF",
//       width: 2.0,
//       arcType: ArcType.GEODESIC,
//       selectedColor: "#FFFF00"
//     }
//   },
//   polygon: {
//     label: {
//       bgColor: "#F707FF"
//     },
//     texture: {
//       textureId: "solid-line",
//       materialType: "Color",
//       color: "#FFFFFF",
//       width: 2.0,
//       arcType: ArcType.GEODESIC,
//       selectedColor: "#FFFF00"
//     }
//   },
//   rectangle: {
//     label: {
//       bgColor: "#076AFF"
//     },
//     texture: {
//       textureId: "solid-line",
//       materialType: "Color",
//       color: "#FFFFFF",
//       width: 2.0,
//       arcType: ArcType.GEODESIC,
//       selectedColor: "#FFFF00"
//     }
//   }
// }

/**
 * 绘制功能的全局设置
 */
const Settings = {
  // 判断为双击事件的间隔，单位：毫秒
  LEFT_DOUBLE_CLICK_TIME_INTERVAL: 200
}

// export class DrawHelper {
//   private _table: DrawOptionTable
//   private _label: CommonLabelOption

//   constructor(label: CommonLabelOption, table: DrawOptionTable) {
//     this._table = table
//     this._label = label
//   }

//   getDrawTexture(key: string) {
//     // 如果是没有记录的绘制类型，返回空Object
//     if (!this._table.hasOwnProperty(key)) {
//       return {}
//     }
//     return this._table[key].texture
//   }

//   getBillBoardDrawOptionsfromTexture(texture: BillBoardTextureOptions): BillBoardDrawOption {
//     const x = texture.scale * texture.width * texture.pixelOffset[0]
//     const y = texture.scale * texture.height * texture.pixelOffset[1]
//     return {
//       url: texture.url,
//       scale: texture.scale,
//       color: Color.fromCssColorString(texture.color),
//       pixelOffset: new Cartesian2(x, y)
//     }
//   }

//   getPolylineDrawOptionsFromTexture(texture: PolylineTextureOptions): PolylineDrawOption {
//     return {
//       lineWidth: texture.width,
//       material: MaterialTable.getMaterialWithUniforms(texture.materialType, {
//         color: Color.fromCssColorString(texture.color)
//       }),
//       color: Color.fromCssColorString(texture.color),
//       arcType: texture.arcType
//     }
//   }

//   getTextLabelOption(key: string) {
//     const temp = this._table[key]
//     const label = temp && temp.label
//     const textOptions: TextLabelTextOptions = {
//       padding: this._getTextOption("padding", label),
//       borderWidth: this._getTextOption("borderWidth", label),
//       borderColor: this._getTextOption("borderColor", label),
//       fontStyle: this._getFontStyle(label),
//       textColor: this._getTextOption("fontColor", label),
//       backgroundColor: this._getTextOption("bgColor", label)
//     }
//     return textOptions
//   }

//   private _getTextOption(key: keyof CommonLabelOption, option: LabelDrawOption | undefined) {
//     return (option && option[key]) || (this._label[key] as any)
//   }

//   private _getFontStyle(option: LabelDrawOption | undefined) {
//     const fontSize = this._getTextOption("fontSize", option)
//     const fontFamily = this._getTextOption("fontFamily", option)
//     return fontSize + "px " + fontFamily
//   }
// }

export {
  // labelOption, drawOptions,
  Settings
}
