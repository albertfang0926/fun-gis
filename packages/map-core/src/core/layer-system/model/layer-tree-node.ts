export class LayerTreeNode {
  readonly id: string
  parentId: string | null
  childrenIds: string[] = []

  constructor(id: string, parentId: string | null = null) {
    this.id = id
    this.parentId = parentId
  }

  addChild(childId: string): void {
    if (!this.childrenIds.includes(childId)) {
      this.childrenIds.push(childId)
    }
  }

  removeChild(childId: string): void {
    this.childrenIds = this.childrenIds.filter((id) => id !== childId)
  }

  hasChild(childId: string): boolean {
    return this.childrenIds.includes(childId)
  }
}
