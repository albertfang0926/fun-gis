import type {
  BillBoardTextureOptions, PolylineTextureOptions,
  TextLabelTextOptions
} from "./interface"
import type { Coordinate } from ".."
import type { Billboard, Viewer } from "cesium"


import { Color, Primitive, Cartesian2 } from "cesium"
import { MaterialTable } from "../material"
import { createTextLabelImg } from "./point/textLabel"
import { getPolylinePrimitive, type PolylinePrimitiveOptions } from "./polyline/utils"
import { coordinateToCartesian3, coordinatesToCartesian3Array } from "../utils/coordinate"


// 修改样式
// 第一类 billboard


export type FeatureTextureType = "billboard" | "polylineMaterial"



export class FeatureUpdater {

  static updateLabelContent(billboard: Billboard, text: string, options: TextLabelTextOptions) {
    const { texture: image } = createTextLabelImg(text, options)
    billboard.image = image
  }


  static updateBillboardPosition(billboard: Billboard, coor: Coordinate, viewer: Viewer) {
    const cartesian3 = coordinateToCartesian3(coor, viewer)
    billboard.position = cartesian3
  }

  /**
   * 更新 billoard（标绘点位）的纹理，涉及 url，scale 和 color 三个属性
   * @param billboard billboard 对象
   * @param options 需要更新的属性
   */
  static updateBillboardTexture(billboard: Billboard, options: Partial<BillBoardTextureOptions>) {
    // 图片
    if (options.url !== undefined) {
      billboard.image = options.url
    }
    // 缩放
    if (options.scale !== undefined) {
      billboard.scale = options.scale
    }
    // 颜色
    if (options.color !== undefined) {
      billboard.color = Color.fromCssColorString(options.color)
    }
    if (options.url !== undefined || options.scale !== undefined) {
      const x = options.scale! * options.width! * options.pixelOffset![0]
      const y = options.scale! * options.height! * options.pixelOffset![1]
      billboard.pixelOffset = new Cartesian2(x, y)
    }
  }

  /**
   * 重新生成 polyline primitive，涉及geomtry属性的更新（坐标，线宽，弧线类型）
   * @param collection
   * @param options
   */
  static getNewPolylinePrimitive(coordinates: Coordinate[], options: {
    uuid: string
    viewer: Viewer
    texture: PolylineTextureOptions
  }) {
    const { uuid, viewer, texture } = options
    // 坐标
    const positions = coordinatesToCartesian3Array(coordinates, viewer)
    // 材质
    const material = MaterialTable.getMaterialWithUniforms(texture.materialType, {
      color: Color.fromCssColorString(texture.color)
    })

    const polylineOptions: PolylinePrimitiveOptions = {
      width: texture.width,
      arcType: texture.arcType,
      material,
      allowPicking: true,
      asynchronous: false,
      releaseGeometryInstances: true
    }
    return getPolylinePrimitive({ uuid }, positions, polylineOptions)
  }

  /**
   * 更新 polyline primitive 的材质，涉及 materialType 和 color
   * 如果 width 和 arcType 属性有更新，需要重新生成primitive
   * @param p Primitive 对象
   * @param options 需要更新的属性
   * @returns 是否更新成功
   */
  static updatePolylineTexture(p: Primitive, options: Partial<PolylineTextureOptions>) {
    // 更改 width 和 arctype 需要重新生成primitive
    if (options.width !== undefined || options.arcType !== undefined) { return false }
    // 更改材质
    if (options.materialType !== undefined) {
      const material = MaterialTable.getMaterialWithUniforms(options.materialType, {
        color: options.color && Color.fromCssColorString(options.color)
      })
      p.appearance.material = material
    } else if (options.color !== undefined) {
      // 只更改颜色
      p.appearance.material.uniforms.color = Color.fromCssColorString(options.color)
    }
    return true
  }
}

