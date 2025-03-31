import { Cartesian2 } from "mars3d-cesium"
import { createVNode, render, Component, createApp } from "vue"

export interface ContextMenuItem {
  key: string
  label: string
  disable: boolean
}
export interface ContextMenuGroup {
  key: string
  contents: ContextMenuItem[]
}
export type ContextMenuContent = ContextMenuGroup[]

type DefaultEventCallBack = () => void
export type ContextMenuEventType = "AFTER_OPEN" | "AFTER_CLOSE"

export function updateContextMenuItem(menu: ContextMenuContent, key: string, value: boolean) {
  let item: ContextMenuItem | undefined
  for (const group of menu) {
    item = group.contents.find((it) => it.key === key)
    if (item !== undefined) {
      break
    }
  }

  if (!item) {
    return false
  }

  item.disable = value
  return true
}

const _onWheel = (e: Event) => {
  e.preventDefault()
}

// 打开右键菜单的时候禁止滚轮上下滚动
const DEFAULT_AFTER_OPEN = () => {
  document.addEventListener("wheel", _onWheel, { passive: false })
}

const DEFAULT_AFTER_CLOSE = () => {
  document.removeEventListener("wheel", _onWheel)
}

export default class ContextMenuManager {
  // 右键菜单挂载节点
  private _mountNode: HTMLDivElement
  div: HTMLDivElement
  // 关闭右键菜单的箭头函数
  readonly close: () => void
  // 右键菜单打开/关闭事件的响应函数
  private readonly _events: {
    AFTER_OPEN: DefaultEventCallBack[]
    AFTER_CLOSE: DefaultEventCallBack[]
  } = {
    AFTER_OPEN: [],
    AFTER_CLOSE: []
  }

  constructor() {
    // 变量初始化
    this._mountNode = document.createElement("div")

    // #region 箭头函数成员初始化(作为回调不用绑定this)
    this.close = () => {
      const child = this._mountNode.querySelector("#context-menu")
      if (child) {
        render(null, child)
        this._mountNode.removeChild(child)
      }
      this._triggerEvent("AFTER_CLOSE")
    }
    // #endregion

    // 事件初始化
    this._init()
  }

  /**
   * 初始化各类事件
   */
  private _init() {
    document.body.appendChild(this._mountNode)
    document.addEventListener("click", this.close)
    // 默认的打开/关闭右键菜单的回调
    this.addListener("AFTER_CLOSE", DEFAULT_AFTER_CLOSE)
    this.addListener("AFTER_OPEN", DEFAULT_AFTER_OPEN)
  }

  /**
   * 打开自定义的右键菜单
   * @param component 右键菜单组件
   * @param props 右键菜单组件属性
   * @param position 右键菜单位置
   */
  open(component: Component, props: any, position: { clientX: number; clientY: number }) {
    // 确保同时只能打开一个右键弹窗
    this.close()
    // 创建虚拟节点
    const instance = createVNode(component, props) // createVNode(component, props)
    // 创建弹窗的挂载节点
    // vue3中应用的实例不会替换挂载节点，而是替换挂载节点的所有子节点，所以需要自行创建挂载节点
    this.div = document.createElement("div")
    const div = this.div
    div.setAttribute("id", "context-menu")
    div.style.setProperty("position", "absolute")
    div.style.setProperty("left", "0px")
    div.style.setProperty("top", "0px")
    div.style.setProperty("z-index", "99")
    this._mountNode.appendChild(div)
    // 挂载节点
    render(instance, div)
    const el = instance.el
    if (!el) {
      return undefined
    }
    // 调整右键菜单的位置，保证能完整显示菜单内容
    const menuWidth = div.clientWidth
    const menuHeight = div.clientHeight
    // 获取屏幕宽高
    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight
    if (position.clientX + menuWidth > screenWidth) {
      div.style.setProperty("left", position.clientX - menuWidth + "px")
    } else {
      div.style.setProperty("left", position.clientX + "px")
    }
    if (position.clientY + menuHeight > screenHeight) {
      div.style.setProperty("top", position.clientY - menuHeight + "px")
    } else {
      div.style.setProperty("top", position.clientY + "px")
    }
    this._triggerEvent("AFTER_OPEN")
  }

  updatePosition(position: Cartesian2) {
    const div = this.div
    const menuWidth = div.clientWidth
    const menuHeight = div.clientHeight
    // 获取屏幕宽高
    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight
    if (position.x + menuWidth > screenWidth) {
      div.style.setProperty("left", position.x - menuWidth + "px")
    } else {
      div.style.setProperty("left", position.x + "px")
    }
    if (position.y + menuHeight > screenHeight) {
      div.style.setProperty("top", position.y - menuHeight + "px")
    } else {
      div.style.setProperty("top", position.y + "px")
    }
  }

  /**
   * 为右键菜单的打开/关闭事件添加响应函数
   * @param type 事件类型
   * @param listener 响应函数
   */
  addListener(type: ContextMenuEventType, listener: DefaultEventCallBack) {
    const temp = this._events[type]
    temp.find((it) => it === listener) === undefined
      ? temp.push(listener)
      : console.warn("无法重复添加相同的右键菜单监听事件")
  }

  /**
   * 移除右键菜单打开/关闭事件的某个响应函数
   * @param type 事件类型
   * @param listener 响应函数
   */
  removeListener(type: ContextMenuEventType, listener: DefaultEventCallBack) {
    const temp = this._events[type]
    const index = temp.findIndex((it) => it === listener)
    index >= 0 && temp.splice(index, 1)
  }

  private _triggerEvent(type: ContextMenuEventType) {
    this._events[type].forEach((listener) => {
      listener()
    })
  }

  destroy() {
    this.close()
    this._events.AFTER_CLOSE = []
    this._events.AFTER_OPEN = []
    document.removeEventListener("mousedown", this.close)
  }
}
