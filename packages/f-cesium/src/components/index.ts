// types
import type { Plugin, App } from "vue"
// components
import BasePanel from "./basePanel.vue"

const components = [BasePanel]
const FCesiumPlugin: Plugin = {
  install(app: App) {
    components.forEach((component) => {
      if (!component.name) {
        throw new Error("组件未命名！")
      }
      app.component(component.name, component)
    })
  }
}

export default FCesiumPlugin
export { BasePanel }
