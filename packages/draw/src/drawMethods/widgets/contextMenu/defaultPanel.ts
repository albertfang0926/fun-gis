import "./contextMenu.less"

import type { BaseEntity } from "../../middleware/baseEntity"
import type { I_ContextMenu } from "../../types/contextMenu"

const ITEM_HEIGHT = 32

/**
 * 内置右键菜单面板：纯 DOM 实现，不依赖任何前端框架。
 * 与 ContextMenuManager 配套使用，返回的元素由其负责挂载与定位。
 */
export function createDefaultContextMenuPanel(
  graphic: BaseEntity,
  content: I_ContextMenu<BaseEntity>[]
): HTMLElement {
  const container = document.createElement("div")
  container.className = "container"
  container.style.height = `${content.length * ITEM_HEIGHT}px`
  container.style.gridTemplateRows = `repeat(${content.length}, 1fr)`

  for (const option of content) {
    const item = document.createElement("div")
    item.className = "option"
    item.textContent = option.label
    item.addEventListener("click", () => option.callback(graphic))
    container.appendChild(item)
  }

  return container
}
