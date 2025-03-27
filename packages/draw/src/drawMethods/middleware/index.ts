// third-parties
import * as mars3d from "mars3d"
import * as DrawCore from "../core"

/**
 * 向mars3d添加实体
 * @param mars3dMap
 */
function addToMars3dLayer(mars3dMap: mars3d.Map) {
  const graphicLayer = new mars3d.layer.GraphicLayer()
  mars3dMap.addLayer(graphicLayer)
  // const graphic = new mars3d.graphic.BasePrimitive({})
  //   const graphic = new mars3d.graphic.PointEntity({
  //     position: new mars3d.LngLatPoint(116, 19),
  //     style: {}
  //   })
  //   graphic.bindContextMenu([{ text: "gggggggggggggggg" }])
  //   graphicLayer.addGraphic(graphic)
}
