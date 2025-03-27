import { ScreenSpaceEventHandler, ScreenSpaceEventType } from "mars3d-cesium"
import { itemManager } from "../manager/primitive"
import type { Viewer } from "mars3d-cesium"

function dragManager(viewer: Viewer) {
  const dragHandler = new ScreenSpaceEventHandler()

  dragHandler.setInputAction((e) => {
    const pick = viewer.scene.pick(e.position)
    if (pick && itemManager.has(pick.id.uuid)) {
      // pass
    }
  }, ScreenSpaceEventType.LEFT_CLICK)
}
