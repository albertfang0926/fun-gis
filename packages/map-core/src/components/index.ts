// types
import type { App, Plugin } from "vue"

// components
import BasePanel from "./basePanel.vue"

const components = [BasePanel]
const FunGISPlugin: Plugin = {
  install(app: App) {
    components.forEach((component) => {
      if (!component.name) {
        throw new Error("组件未命名！")
      }
      app.component(component.name, component)
    })
  }
}

export default FunGISPlugin
export { BasePanel }
