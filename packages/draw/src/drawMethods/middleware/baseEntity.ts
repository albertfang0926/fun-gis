import type { Viewer } from "mars3d-cesium"

abstract class BaseEntity {
  public id: string
  /**
   * 绘制
   */
  abstract draw(viewer: Viewer): void

  /**
   * 开始拖拽
   */
  abstract startDrag(): void

  /**
   * 停止拖拽
   */
  abstract endDrag(): void

  /**
   * 拖拽
   */
  abstract onDrag: () => void
}

export { BaseEntity }
