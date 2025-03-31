import sight from "../../assets/drawMethods/cursor/sight.png"
import pen from "../../assets/drawMethods/cursor/sight.png"
import cross from "../../assets/drawMethods/cursor/sight.png"
import type { Viewer } from "mars3d-cesium"

export class Cursor {
  static _table = {
    sight: `url(${sight}) 11 11, auto`,
    pen: `url(${pen}) 2 17, auto`,
    cross: `url(${cross}) 10.5 10.5, auto`,
    pointer: "pointer"
  }

  static setStyle(type: string, viewer: Viewer) {
    if (Cursor._table.hasOwnProperty(type)) {
      viewer.canvas.style.cursor = Cursor._table[type as keyof typeof Cursor._table]
      return true
    }
    return false
  }

  static recover(viewer: Viewer) {
    viewer.canvas.style.cursor = "default"
  }
}
