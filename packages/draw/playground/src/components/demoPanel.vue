<template>
  <div>
    <div class="container">
      <button class="button" @click="drawPointHelper">点</button>
      <button class="button" @click="drawLabelHelper">标签</button>
      <button class="button" @click="drawParallelogramHelper">平行四边形</button>
      <button class="button" @click="drawSegmentHelper">线段</button>
      <button class="button" @click="drawCircleHelper">圆</button>
      <button class="button" @click="drawArcHelper">弧形</button>
      <button class="button" @click="drawSectorHelper">扇形</button>
      <button class="button" @click="drawArchHelper">弓形</button>
      <button class="button" @click="drawPolylineHelper">折线</button>
      <button class="button" @click="drawPolygonHelper">多边形</button>
      <button class="button" @click="drawRectangleHelper">矩形</button>
      <button class="button" @click="drawCurveHelper">曲线</button>
      <button class="button" @click="drawCloseCurveHelper">封闭曲线</button>
      <button class="button" @click="drawAttackArrowHelper">攻击箭头</button>
    </div>
    <div class="right-click-panel" v-if="false">
      <button>编辑</button>
      <button @click="current.StartDrag">拖拽编辑</button>
      <button @click="current.endDrag">停止拖拽编辑</button>
      <button @click="itemManager.removeById(current.id)">删除</button>
      <button
        @click="
          () => {
            current.endDrag()
            panelVisible = false
          }
        "
      >
        关闭
      </button>
    </div>

    <!-- edit panel -->
    <div v-if="editPanelVisible" class="edit-panel">
      <div v-for="(initItems, index) of initMap[current.name]" :key="initItems.property">
        <div class="edit-panel-item">
          <span> {{ initItems.label }} </span>
          <!-- <f-input v-model="updateMap[current.name][index].value"></f-input> -->
          <input v-model="updateMap[current.name][index].value" style="width: 100px" />
          <button @click="() => callbackMap[current.name][index].callback()">更新</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// third-parties
import { computed, inject, ref, shallowRef, watch } from "vue"
// customs
// import {
//   // drawPoints,
//   // drawRectangle,
//   // // drawParallelogram,
//   // drawPolygon,
//   // drawPolyline,
//   drawAttackArrow
// } from "../../../src/drawMethods_2/primitives" // "../../../src/index"
import { drawCustomMilitary, drawPoint } from "../../../src/drawMethods/core"
import { Point } from "../../../src/drawMethods/middleware/point"
import { Label } from "../../../src/drawMethods/middleware/label"
import { Parallelogram } from "../../../src/drawMethods/middleware/parallelogram"
import { Arc } from "../../../src/drawMethods/middleware/arc"
import { Sector } from "../../../src/drawMethods/middleware/sector"
import { AttackArrow } from "../../../src/drawMethods/middleware/attackArrow"
import { Arch } from "../../../src/drawMethods/middleware/arch"
import { Curve } from "../../../src/drawMethods/middleware/curve"
import { CloseCurve } from "../../../src/drawMethods/middleware/closeCurve"
import { Polyline } from "../../../src/drawMethods/middleware/polyline"
import { Segment } from "../../../src/drawMethods/middleware/segment"
import { Polygon } from "../../../src/drawMethods/middleware/polygon"
import { Rectangle } from "../../../src/drawMethods/middleware/rectangle"
import { Circle } from "../../../src/drawMethods/middleware/circle"
import { itemManager } from "../../../src/drawMethods/manager/primitive"

// types
import type { ShallowRef } from "vue"
import type { Viewer } from "mars3d-cesium"
import type { I_ContextMenu } from "../../../src/drawMethods/types/contextMenu" // "@/drawMethods/types/contextMenu"
import type { BaseEntity } from "../../../src/drawMethods/middleware/baseEntity"

const viewer: ShallowRef<Viewer> = inject("cesium-viewer")
const panelVisible = ref(false)
const editPanelVisible = ref(false)

let current: ShallowRef = shallowRef()

const contextMenu: I_ContextMenu<BaseEntity>[] = [
  {
    name: "edit",
    label: "编辑",
    callback: (e) => {
      editPanelVisible.value = true
    }
  },
  {
    name: "drag",
    label: "拖拽编辑",
    callback: (e) => {
      if (e) {
        e.startDrag()
      }
    }
  },
  {
    name: "stopDrag",
    label: "停止拖拽编辑",
    callback: (e) => {
      e.endDrag()
    }
  },
  {
    name: "delete",
    label: "删除",
    callback: (e) => {
      e.endDrag()
      itemManager.removeById(e.id)
    }
  }
]

// #region 1 drag

function drawPointHelper() {
  const point = new Point(viewer.value, (e) => {
    current.value = e
    panelVisible.value = true
  })

  point.bindContextMenu(contextMenu)
  point.draw()
  // point.draw(viewer.value)
  // drawPoint(viewer.value, {}, (e) => {
  //   itemManager.add(e.id, e)
  //   // viewer.value.scene.primitives.add(e.p)
  // })
}

/**
 * 标签
 */
function drawLabelHelper() {
  const label = new Label(viewer.value, (e) => {
    current.value = e
    panelVisible.value = true
  })
  label.text = "自信人生二百年，会当水击二百年。"
  label.bindContextMenu(contextMenu)
  label.draw()
  // point.draw(viewer.value)
  // drawPoint(viewer.value, {}, (e) => {
  //   itemManager.add(e.id, e)
  //   // viewer.value.scene.primitives.add(e.p)
  // })
}

/**
 * 平行四边形
 */
function drawParallelogramHelper() {
  const entity = new Parallelogram(viewer.value, (e) => {
    current.value = e
    panelVisible.value = true
  })
  entity.bindContextMenu(contextMenu)
  entity.draw()
  // setInterval(() => {
  //   attackArrow.updateColor("#ff0000")
  //   setInterval(() => {
  //     attackArrow.updateWidth(5)
  //   }, 3e3)``
  // }, 3e3)
  // attackArro=>{w.addHelper()
}

/**
 * 线段
 */
function drawSegmentHelper() {
  const entity = new Segment(viewer.value, (e) => {
    current.value = e
    panelVisible.value = true
  })
  entity.bindContextMenu(contextMenu)
  entity.draw()
  // setInterval(() => {
  //   attackArrow.updateColor("#ff0000")
  //   setInterval(() => {
  //     attackArrow.updateWidth(5)
  //   }, 3e3)``
  // }, 3e3)
  // attackArro=>{w.addHelper()
}

/**
 * 圆
 */
function drawCircleHelper() {
  const entity = new Circle(viewer.value, (e) => {
    current.value = e
    panelVisible.value = true
  })
  entity.bindContextMenu(contextMenu)
  entity.draw()
  // setInterval(() => {
  //   attackArrow.updateColor("#ff0000")
  //   setInterval(() => {
  //     attackArrow.updateWidth(5)
  //   }, 3e3)``
  // }, 3e3)
  // attackArro=>{w.addHelper()
}

/**
 * 弧形
 */
function drawArcHelper() {
  const entity = new Arc(viewer.value, (e) => {
    current.value = e
    panelVisible.value = true
  })
  entity.bindContextMenu(contextMenu)
  entity.draw()
  // setInterval(() => {
  //   attackArrow.updateColor("#ff0000")
  //   setInterval(() => {
  //     attackArrow.updateWidth(5)
  //   }, 3e3)``
  // }, 3e3)
  // attackArro=>{w.addHelper()
}

/**
 * 扇形
 */
function drawSectorHelper() {
  const entity = new Sector(viewer.value, (e) => {
    current.value = e
    panelVisible.value = true
  })
  entity.bindContextMenu(contextMenu)
  entity.draw()
  // setInterval(() => {
  //   attackArrow.updateColor("#ff0000")
  //   setInterval(() => {
  //     attackArrow.updateWidth(5)
  //   }, 3e3)``
  // }, 3e3)
  // attackArro=>{w.addHelper()
}

/**
 * 弓形
 */
function drawArchHelper() {
  const entity = new Arch(viewer.value, (e) => {
    current.value = e
    panelVisible.value = true
  })
  entity.bindContextMenu(contextMenu)
  entity.draw()
  // setInterval(() => {
  //   attackArrow.updateColor("#ff0000")
  //   setInterval(() => {
  //     attackArrow.updateWidth(5)
  //   }, 3e3)``
  // }, 3e3)
  // attackArro=>{w.addHelper()
}

/**
 * 折线
 */
function drawPolylineHelper() {
  const entity = new Polyline(viewer.value, (e) => {
    current.value = e
    panelVisible.value = true
  })
  entity.bindContextMenu(contextMenu)
  entity.draw()
  // setInterval(() => {
  //   attackArrow.updateColor("#ff0000")
  //   setInterval(() => {
  //     attackArrow.updateWidth(5)
  //   }, 3e3)``
  // }, 3e3)
  // attackArro=>{w.addHelper()
}

/**
 * 多边形
 */
function drawPolygonHelper() {
  const entity = new Polygon(viewer.value, (e) => {
    current.value = e
    panelVisible.value = true
  })
  entity.bindContextMenu(contextMenu)
  entity.draw()
  // setInterval(() => {
  //   attackArrow.updateColor("#ff0000")
  //   setInterval(() => {
  //     attackArrow.updateWidth(5)
  //   }, 3e3)``
  // }, 3e3)
  // attackArro=>{w.addHelper()
}

/**
 * 矩形
 */
function drawRectangleHelper() {
  const entity = new Rectangle(viewer.value, (e) => {
    current.value = e
    panelVisible.value = true
  })
  entity.bindContextMenu(contextMenu)
  entity.draw()
  // setInterval(() => {
  //   attackArrow.updateColor("#ff0000")
  //   setInterval(() => {
  //     attackArrow.updateWidth(5)
  //   }, 3e3)``
  // }, 3e3)
  // attackArro=>{w.addHelper()
}

/**
 * 曲线
 */
function drawCurveHelper() {
  const entity = new Curve(viewer.value, (e) => {
    current.value = e
    panelVisible.value = true
  })
  entity.bindContextMenu(contextMenu)
  entity.draw()
  // setInterval(() => {
  //   attackArrow.updateColor("#ff0000")
  //   setInterval(() => {
  //     attackArrow.updateWidth(5)
  //   }, 3e3)``
  // }, 3e3)
  // attackArro=>{w.addHelper()
}

/**
 * 封闭曲线
 */
function drawCloseCurveHelper() {
  const entity = new CloseCurve(viewer.value, (e) => {
    current.value = e
    panelVisible.value = true
  })
  entity.bindContextMenu(contextMenu)
  entity.draw()
  // setInterval(() => {
  //   attackArrow.updateColor("#ff0000")
  //   setInterval(() => {
  //     attackArrow.updateWidth(5)
  //   }, 3e3)``
  // }, 3e3)
  // attackArro=>{w.addHelper()
}

function drawAttackArrowHelper() {
  const entity = new AttackArrow(viewer.value, (e) => {
    current.value = e
    panelVisible.value = true
  })

  entity.bindContextMenu(contextMenu)
  entity.draw()

  // setInterval(() => {
  //   attackArrow.updateColor("#ff0000")

  //   setInterval(() => {
  //     attackArrow.updateWidth(5)
  //   }, 3e3)``
  // }, 3e3)
  // attackArro=>{w.addHelper()
}

// function drawLineHelper() {
//   drawLine(viewer.value, {}, (e) => {
//     viewer.value.scene.primitives.add(e.p)
//   })
// }

// function drawRectangleHelper() {
//   drawRectangle(viewer.value, {}, (e) => {
//     viewer.value.scene.primitives.add(e.p)
//   })
// }

// function drawPolygonHelper() {
//   drawPolygon(viewer.value, {}, (e) => {
//     viewer.value.scene.primitives.add(e.p)
//   })
// }

function drawCustomMilitaryHelper(name: string) {
  drawCustomMilitary(viewer.value, { title: name }, (e) => {
    itemManager.add(e.id, e)
  })
}
// #endregion

const initMap = ref({
  point: [
    { property: "size", label: "大小" },
    { property: "scale", label: "比例" },
    { property: "color", label: "颜色" }
  ],
  label: [
    { property: "text", label: "文本" },
    { property: "scale", label: "比例" },
    { property: "textColor", label: "字体颜色" },
    { property: "bgColor", label: "背景颜色" }
  ]
})

const updateMap = ref()

watch(editPanelVisible, () => {
  updateMap.value = {
    point: [
      { property: "size", value: current.value?.size },
      { property: "scale", value: current.value.scale },
      { property: "color", value: current.value.color }
    ],
    label: [
      { property: "text", value: current.value?.text },
      { property: "scale", value: current.value?.scale },
      { property: "textColor", value: current.value?.textColor },
      { property: "bgColor", value: current.value?.bgColor }
    ]
  }
})

const callbackMap = {
  point: [
    { property: "size", callback: () => current.value.updateSize(updateMap.value[current.value.name][0].value) },
    { property: "scale", callback: () => current.value.updateScale(updateMap.value[current.value.name][1].value) },
    { property: "color", callback: () => current.value.updateColor(updateMap.value[current.value.name][2].value) }
  ],
  label: [
    { property: "text", callback: () => current.value.updateText(updateMap.value[current.value.name][0].value) },
    { property: "scale", callback: () => current.value.updateScale(updateMap.value[current.value.name][1].value) },
    {
      property: "textColor",
      callback: () =>
        current.value.updateColor(
          updateMap.value[current.value.name][2].value,
          updateMap.value[current.value.name][3].value
        )
    },
    {
      property: "bgColor",
      callback: () =>
        current.value.updateColor(
          updateMap.value[current.value.name][2].value,
          updateMap.value[current.value.name][3].value
        )
    }
  ]
}
</script>

<style scoped lang="less">
.container {
  display: grid;
  grid-template-rows: repeat(14, 1fr);
  row-gap: 4px;
  position: absolute;
  width: 200px;
  height: 400px;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px);
  margin: 24px auto auto 24px;
  padding: 12px;

  .button {
    width: 100%;
  }
}
.right-click-panel {
  left: 236px;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  row-gap: 4px;
  position: absolute;
  width: 200px;
  height: 150px;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px);
  margin: 24px auto auto 24px;
  padding: 12px;
}

.edit-panel {
  display: grid;
  // grid-template-rows: repeat(14, 1fr);
  top: calc(400px + 40px);
  row-gap: 4px;
  position: absolute;
  width: 200px;
  // height: 400px;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px);
  margin: 24px auto auto 24px;
  padding: 12px;
  &-item {
    display: flex;
    column-gap: 8px;
  }
}
</style>
