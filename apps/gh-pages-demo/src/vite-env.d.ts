/// <reference types="vite/client" />

declare module "@fun-gis/draw/style"
declare module "*.vue" {
  import type { DefineComponent } from "vue"
  const component: DefineComponent<Record<string, never>, Record<string, never>, any>
  export default component
}
