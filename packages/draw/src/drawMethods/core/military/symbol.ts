import { Cartesian3, Cesium3DTile, Transforms, type Viewer } from "cesium"
import {
  ScreenSpaceEventHandler, ScreenSpaceEventType, Math as CMath,
  defaultValue, Cartesian2, Color, Material, Primitive, PolygonGeometry,
  PolygonHierarchy, GeometryInstance, EllipsoidSurfaceAppearance, Matrix4

} from "cesium"
import Cursor from "../../utils/cursor"
import Tooltip from "../../utils/tooltip"
import { createUid } from "../../utils"
import { cartesian3ToCoordinate, windowPositionToEllipsoidCartesian } from "../../utils/coordinate"


export interface SymbolDrawOption {
  id?: string
  url?: string
  scale?: number
  pixelOffset?: Cartesian2
  color?: Color
  width: number
  height: number
}


const drawSymbolMilitary = (viewer: Viewer, options: Record<string, any>, callback: (e:any)=>void, cancelCallback?: ()=>void) => {
  // 解析参数
  const image = options.url
  const uuid = options.id || createUid()
  // 是否允许点击拾取
  const allowPicking = defaultValue(options.allowPick, true)
  const scale = defaultValue(options.scale, 1.0)
  const color = options.color || Color.fromCssColorString("#FF0000")


  // 操作提示文本
  const toolTipText = "单击开始绘制</br>右键取消绘制"
  const tooltip = new Tooltip(viewer.container)
  tooltip.setVisible(true)
  // 设置光标样式
  Cursor.setStyle("sight", viewer)

  // 绘制函数
  const _handler = new ScreenSpaceEventHandler(viewer.canvas)
  // 绘制完成或取消，销毁资源
  const onFinished = () => {
    // 销毁提示文本
    // tooltip.setVisible(false)
    tooltip.destroy()
    // 还原光标样式
    Cursor.recover(viewer)
    // 销毁handelr
    _handler.destroy()
  }

  // 取椭球表面的坐标，对用无地形的情况
  _handler.setInputAction((click: ScreenSpaceEventHandler.PositionedEvent) => {
    const cartesian3 = windowPositionToEllipsoidCartesian(click.position, viewer)
    if (cartesian3) {

      onFinished()
      // 创建Symbol

      const primitive = getSymbolPrimitive({ uuid, image, position: cartesian3, scale, color, allowPicking })

      const coor = cartesian3ToCoordinate(cartesian3, viewer)
      const result = {
        p: primitive,
        coordinates: [coor]
      }
      // 回调连同经纬度一起返回
      callback(result)
    }
  }, ScreenSpaceEventType.LEFT_CLICK)

  // 监听鼠标移动
  _handler.setInputAction((e: ScreenSpaceEventHandler.MotionEvent) => {
    tooltip.showAt(e.endPosition, toolTipText)
  }, ScreenSpaceEventType.MOUSE_MOVE)

  // 监听鼠标右键
  _handler.setInputAction(() => {
    onFinished()
    cancelCallback && cancelCallback()
  }, ScreenSpaceEventType.RIGHT_CLICK)

  return onFinished
}

export function getSymbolPrimitive({ uuid, image, position, scale, color, allowPicking = true }:{
  uuid: string,
  image: string,
  position: Cartesian3,
  scale: number,
  color: Color,
  allowPicking: boolean
}) {
  const material = new Material({
    fabric: {
      uniforms: {
        repeat: new Cartesian2(1, 1),
        image: image,
        color: Color.RED
      },
      source: `czm_material czm_getMaterial(czm_materialInput materialInput)
      {
          czm_material material = czm_getDefaultMaterial(materialInput);
          vec4 IColor= texture(image, materialInput.st);
          // 防止闪烁，图片未加载完成前rgba都是1.0  todo 所以如果加载图片中含白色像素会当做透明色处理
          if(IColor != vec4(1.0, 1.0, 1.0, 1.0)){
            material.diffuse = vec3(color.r, color.g, color.b);
            material.alpha = IColor.a;
          }else{
            material.diffuse = vec3(0.0, 0.0, 0.0);
            material.alpha = 0.0;
          }
          return material;
      }`
    },
    translucent: false
  })


  const positions = getPosition({
    scale,
    position
  })
  const geometry = new PolygonGeometry({
    polygonHierarchy: new PolygonHierarchy(positions)
  })
  const geometryInstance = new GeometryInstance({
    geometry,
    id: { uuid }
  })
  const primitive = new Primitive({
    geometryInstances: [geometryInstance],
    allowPicking: allowPicking,
    appearance: new EllipsoidSurfaceAppearance({
      flat: true,
      material: material,
      renderState: {
        depthTest: {
          enabled: false
        }
      }
    }),

    asynchronous: false
  })
  return primitive
}


function getPosition({
  rotate = 0,
  scale = 1,
  position, // 鼠标点击位置
  centerPosition = [0, 0] // 默认图形中心点相对鼠标点击位置[0, 0]，
}:{
  rotate?: number,
  scale?: number,
  position: Cartesian3,
  centerPosition?: [number, number],
}) {

  const transform = Transforms.eastNorthUpToFixedFrame(position)
  const rcX = centerPosition[0]
  const rcY = centerPosition[1]
  const cornerPositions = [ // 计算四角相对旋转点位置
    [1 - rcX, 1 - rcY],
    [-1 - rcX, 1 - rcY],
    [-1 - rcX, -1 - rcY],
    [1 - rcX, -1 - rcY]
  ]

  const angle = CMath.toRadians(rotate)
  const positions = cornerPositions.map((item) => {
    const x = item[0] * 50000 * scale
    const y = item[1] * 50000 * scale
    // east + north
    const sub = new Cartesian3(
      x * Math.cos(angle) - y * Math.sin(angle),
      x * Math.sin(angle) + y * Math.cos(angle),
      0
    )
    // 相对位置转换
    const res = Matrix4.multiplyByPoint(
      transform,
      sub,
      new Cartesian3()
    )
    return res
  })
  return positions
}

export default drawSymbolMilitary

