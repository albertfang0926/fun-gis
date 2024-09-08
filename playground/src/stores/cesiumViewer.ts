import { shallowRef } from "vue"
import { defineStore } from "pinia"
import { type Viewer } from "cesium"

export const useViewerStore = defineStore("viewer", () => {
  const viewer = shallowRef<Viewer | undefined>()
  function setViewer(_viewer: Viewer | undefined) {
    viewer.value = _viewer
  }

  return { viewer, setViewer }
})
