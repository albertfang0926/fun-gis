// third-parties
import {
  ScreenSpaceEventHandler,
  ScreenSpaceEventType,
  SceneTransforms
} from "mars3d-cesium"
// customs
import { itemManager } from "../../manager/primitive"
import ContextMenuManager from "../../widgets/contextMenu/contextMenu"
// components
// import ContextMenuPanel from "../../widgets/contextMenu/contextMenu.vue"
import { helperPrimitives } from "./dragHelper"
// types
import type { Viewer } from "mars3d-cesium"
import type { I_ContextMenu } from "../../types/contextMenu"
import type { BaseEntity } from "../baseEntity"

interface I_Graphic {
  viewer: Viewer
  id: string
  dragHandler: ScreenSpaceEventHandler
  contextMenu: I_ContextMenu<BaseEntity>[]
  editing: boolean
}

const contextMenu = new ContextMenuManager()

/**
 * 响应右击弹出菜单
 **/
function onRightClick<T extends I_Graphic>(
  graphic: T,
  callback: (e: T) => void
) {
  graphic.dragHandler.setInputAction(
    (e: ScreenSpaceEventHandler.PositionedEvent) => {
      let picked = graphic.viewer.scene.pick(e.position)
      const position = graphic.viewer.camera.pickEllipsoid(
        e.position,
        graphic.viewer.scene.globe.ellipsoid
      )
      const id = picked?.id?.uuid
      // console.log("@right-click", id)

      const isItem =
        (id && id === graphic.id && itemManager.has(id)) ||
        helperPrimitives.contains(picked?.primitive)

      // console.log("isItem", isItem)

      // 是否为图形标绘时创建的实体
      if (!isItem) return
      const winPosition = SceneTransforms.worldToWindowCoordinates(
        graphic.viewer.scene,
        position
      )
      if (graphic.contextMenu.length > 0) {
        setTimeout(() => {
          contextMenu.open(
            itemManager.component,
            { graphic: graphic, content: graphic.contextMenu },
            { clientX: winPosition.x, clientY: winPosition.y }
          )
          graphic.viewer.scene.postRender.addEventListener(() => {
            const winPosition = SceneTransforms.worldToDrawingBufferCoordinates(
              graphic.viewer.scene,
              position
            )
            contextMenu.updatePosition(winPosition)
          })
        }, 100)
      }

      // (() => {
      // })
      callback(graphic)
    },
    ScreenSpaceEventType.RIGHT_CLICK
  )
}

export { onRightClick }
