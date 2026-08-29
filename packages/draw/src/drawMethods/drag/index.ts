import type { Viewer } from "cesium"
import { ScreenSpaceEventHandler, ScreenSpaceEventType } from "cesium"

import { itemManager } from "../manager/primitive"

function dragManager(viewer: Viewer) {
  const dragHandler = new ScreenSpaceEventHandler()

  dragHandler.setInputAction((e) => {
    const pick = viewer.scene.pick(e.position)
    if (pick && itemManager.has(pick.id.uuid)) {
      // pass
    }
  }, ScreenSpaceEventType.LEFT_CLICK)
}
