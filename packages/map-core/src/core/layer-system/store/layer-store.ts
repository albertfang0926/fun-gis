import { EventEmitter } from "../../event"
import { LayerModel } from "../model/layer-model"
import { LayerTreeNode } from "../model/layer-tree-node"
import {
  ILayerModel,
  ILayerStoreSnapshot,
  ILayerTreeNodeSnapshot,
  LayerDataSourceType
} from "../types"

export class LayerStore extends EventEmitter {
  private models: Map<string, LayerModel> = new Map()
  private tree: Map<string, LayerTreeNode> = new Map()
  private orderedIds: string[] = []

  // ─── 图层 CRUD ────────────────────────────────────────────

  addLayer(model: LayerModel): void {
    const id = model.id

    this.models.set(id, model)
    this.tree.set(id, new LayerTreeNode(id, model.parentId))

    // 更新父节点的 childrenIds
    if (model.parentId) {
      const parent = this.tree.get(model.parentId)
      parent?.addChild(id)
      const parentModel = this.models.get(model.parentId)
      parentModel?.addChild(id)
    }

    // 监听模型变更，向上转发
    model.on("changed", (layerId: string) => {
      this.rebuildOrder()
      this.emit("layerChanged", layerId)
    })

    this.rebuildOrder()
    this.emit("layerAdded", id)
  }

  removeLayer(id: string): LayerModel | undefined {
    const model = this.models.get(id)
    if (!model) return undefined

    // 递归移除子图层
    const treeNode = this.tree.get(id)
    if (treeNode) {
      for (const childId of treeNode.childrenIds) {
        this.removeLayer(childId)
      }
    }

    // 从父节点中移除
    if (model.parentId) {
      const parent = this.tree.get(model.parentId)
      parent?.removeChild(id)
      const parentModel = this.models.get(model.parentId)
      parentModel?.removeChild(id)
    }

    this.models.delete(id)
    this.tree.delete(id)
    model.clear()

    this.rebuildOrder()
    this.emit("layerRemoved", id)
    return model
  }

  getModel(id: string): LayerModel | undefined {
    return this.models.get(id)
  }

  getTreeNode(id: string): LayerTreeNode | undefined {
    return this.tree.get(id)
  }

  getAllModels(): LayerModel[] {
    return Array.from(this.models.values())
  }

  getOrderedLayerIds(): string[] {
    return [...this.orderedIds]
  }

  // ─── 树操作 ───────────────────────────────────────────────

  moveLayer(
    id: string,
    newParentId: string | null,
    newIndex?: number
  ): void {
    const model = this.models.get(id)
    const treeNode = this.tree.get(id)
    if (!model || !treeNode) return

    // 从旧父节点移除
    if (model.parentId) {
      const oldParent = this.tree.get(model.parentId)
      oldParent?.removeChild(id)
      const oldParentModel = this.models.get(model.parentId)
      oldParentModel?.removeChild(id)
    }

    // 设置新父节点
    model.setParent(newParentId)
    treeNode.parentId = newParentId

    // 添加到新父节点
    if (newParentId) {
      const newParent = this.tree.get(newParentId)
      const newParentModel = this.models.get(newParentId)
      if (newParent && newParentModel) {
        if (newIndex !== undefined) {
          const children = [...newParent.childrenIds]
          children.splice(newIndex, 0, id)
          newParent.childrenIds = children
          newParentModel.removeChild(id)
          newParentModel.addChild(id)
        } else {
          newParent.addChild(id)
          newParentModel.addChild(id)
        }
      }
    }

    this.rebuildOrder()
    this.emit("layerMoved", id, newParentId)
  }

  reorderLayers(orderedIds: string[]): void {
    this.orderedIds = orderedIds
    this.emit("layersReordered", orderedIds)
  }

  // ─── 树快照 ───────────────────────────────────────────────

  getLayerTree(): ILayerTreeNodeSnapshot[] {
    const roots = Array.from(this.tree.values()).filter(
      (node) => node.parentId === null
    )
    return roots.map((node) => this.buildSnapshot(node))
  }

  // ─── 序列化 ───────────────────────────────────────────────

  toJSON(): ILayerStoreSnapshot {
    return {
      layers: Array.from(this.models.values()).map((m) => m.toJSON()),
      treeOrder: this.orderedIds
    }
  }

  static fromJSON(json: ILayerStoreSnapshot): LayerStore {
    const store = new LayerStore()

    // 先恢复所有模型
    for (const layerJson of json.layers) {
      const model = LayerModel.fromJSON(layerJson)
      store.models.set(model.id, model)
      store.tree.set(model.id, new LayerTreeNode(model.id, model.parentId))
    }

    // 重建父子关系
    for (const layerJson of json.layers) {
      if (layerJson.parentId) {
        const parent = store.tree.get(layerJson.parentId)
        parent?.addChild(layerJson.id)
      }
      for (const childId of layerJson.childrenIds) {
        const node = store.tree.get(layerJson.id)
        node?.addChild(childId)
      }
    }

    store.orderedIds = json.treeOrder
    return store
  }

  // ─── 内部 ─────────────────────────────────────────────────

  private buildSnapshot(node: LayerTreeNode): ILayerTreeNodeSnapshot {
    const model = this.models.get(node.id)!
    return {
      id: node.id,
      name: model.name,
      dataSourceType: model.dataSourceType,
      visible: model.visible,
      parentId: node.parentId,
      children: node.childrenIds.map((childId) => {
        const childNode = this.tree.get(childId)
        return childNode ? this.buildSnapshot(childNode) : null!
      }).filter(Boolean)
    }
  }

  private rebuildOrder(): void {
    // 拓扑排序：按层级深度 + zIndex 排列
    const roots = Array.from(this.tree.values()).filter(
      (node) => node.parentId === null
    )

    const result: string[] = []

    const visit = (node: LayerTreeNode) => {
      const model = this.models.get(node.id)
      if (!model) return

      result.push(node.id)

      // 子节点按 zIndex 排序
      const sortedChildren = node.childrenIds
        .map((id) => this.models.get(id))
        .filter(Boolean)
        .sort((a, b) => a!.zIndex - b!.zIndex)

      for (const child of sortedChildren) {
        const childNode = this.tree.get(child!.id)
        if (childNode) visit(childNode)
      }
    }

    // 根节点按 zIndex 排序
    const sortedRoots = roots
      .map((node) => ({ node, model: this.models.get(node.id) }))
      .filter((r) => r.model)
      .sort((a, b) => a.model!.zIndex - b.model!.zIndex)

    for (const { node } of sortedRoots) {
      visit(node)
    }

    this.orderedIds = result
  }
}
