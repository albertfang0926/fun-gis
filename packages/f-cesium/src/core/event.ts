type EventHandler = (...args: any[]) => void

class EventEmitter {
  private events: Map<string, Set<EventHandler>>

  constructor() {
    this.events = new Map()
  }

  /**
   * 订阅事件
   * @param eventName 事件名称
   * @param handler 事件处理函数
   */
  on(eventName: string, handler: EventHandler): void {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, new Set())
    }
    this.events.get(eventName)!.add(handler)
  }

  /**
   * 取消订阅事件
   * @param eventName 事件名称
   * @param handler 事件处理函数
   */
  off(eventName: string, handler: EventHandler): void {
    const handlers = this.events.get(eventName)
    if (handlers) {
      handlers.delete(handler)
      if (handlers.size === 0) {
        this.events.delete(eventName)
      }
    }
  }

  /**
   * 订阅一次性事件（触发后自动取消订阅）
   * @param eventName 事件名称
   * @param handler 事件处理函数
   */
  once(eventName: string, handler: EventHandler): void {
    const wrapper = (...args: any[]) => {
      handler(...args)
      this.off(eventName, wrapper)
    }
    this.on(eventName, wrapper)
  }

  /**
   * 触发事件
   * @param eventName 事件名称
   * @param args 传递给事件处理函数的参数
   */
  emit(eventName: string, ...args: any[]): void {
    const handlers = this.events.get(eventName)
    if (handlers) {
      handlers.forEach((handler) => {
        try {
          handler(...args)
        } catch (error) {
          console.error(`Error in event handler for ${eventName}:`, error)
        }
      })
    }
  }

  /**
   * 清除所有事件订阅
   */
  clear(): void {
    this.events.clear()
  }

  /**
   * 获取指定事件的订阅者数量
   * @param eventName 事件名称
   */
  listenerCount(eventName: string): number {
    const handlers = this.events.get(eventName)
    return handlers ? handlers.size : 0
  }
}

export { EventEmitter }
