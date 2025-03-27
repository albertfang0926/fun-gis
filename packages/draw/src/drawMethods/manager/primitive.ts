// components
import contextMenuPanel from "../widgets/contextMenu/contextMenu.vue"
// types
import type { Viewer } from "mars3d-cesium"
import type { Component } from "vue"

/**
 * 绘制实体的管理器
 */
class ItemManager {
  private _viewer: Viewer
  private items: Map<string, any>
  component: Component = contextMenuPanel

  constructor() {
    this.items = new Map()
  }

  /**
   * 管理器初始化
   * @param viewer
   */
  public init(viewer: Viewer) {
    this._viewer = viewer
  }

  get viewer() {
    return this._viewer
  }

  public updateMenuContext(component: Component) {
    this.component = component
  }

  /**
   * 添加实体
   */
  public add(id: string, item: any) {
    this.items.set(id, item)
    this.viewer.scene.primitives.add(item.p)
  }

  /**
   * 是否包含实体
   */
  public has(id: string) {
    return this.items.has(id)
  }

  /**
   *  更新实体中的primitive
   */
  public updatePrimitive(id: string, newPrimitive: any) {
    const item = this.items.get(id)
    this.viewer.scene.primitives.remove(item.p)
    this.viewer.scene.primitives.add(newPrimitive)
    item.p = newPrimitive
  }

  /**
   * 根据id删除实体
   * @param id
   */
  public removeById(id: string) {
    const item = this.items.get(id)
    this.viewer.scene.primitives.remove(item.p)
    this.items.delete(id)
  }

  /**
   * 移除所有实体
   */
  public removeAll() {
    this.items.forEach((item, key) => {
      this.viewer.scene.primitives.remove(item.p)
      this.items.delete(key)
    })
  }
}

const itemManager = new ItemManager()

export { itemManager }
