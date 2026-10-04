interface I_ContextMenu<T> {
  name: string
  label: string
  callback: (e: T) => void
}

/**
 * 右键菜单面板工厂：接收菜单数据，返回挂载用的 DOM 元素。
 * 内置实现为纯 DOM（createDefaultContextMenuPanel）；
 * 需要用 Vue/React 等框架渲染时，在该工厂内自行挂载框架组件即可。
 */
interface ContextMenuPanelFactory {
  (graphic: any, content: I_ContextMenu<any>[]): HTMLElement
}

export { ContextMenuPanelFactory, I_ContextMenu }
