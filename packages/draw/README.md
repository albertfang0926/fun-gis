# @fun-gis/draw

基于 [Cesium](https://cesium.com/platform/cesiumjs/) 的三维图形标绘库，提供
33 种图形的交互绘制、编辑与事件。双渲染后端架构：

- **primitive 系**（14 种基础图形）—— Primitive 重建式渲染，高性能，对
  `requestRenderMode` 友好，支持拖拽编辑与右键菜单；
- **entity 系**（19 种军事标绘图形）—— Entity + CallbackProperty 渲染，
  支持控制点编辑、整体拖拽与生长动画。

两套后端经统一的 `DrawTool` 门面驱动，对外暴露一致的
`drawStart / drawUpdate / drawEnd / editStart / editEnd` 五段式事件。

## 安装

```bash
npm i @fun-gis/draw
```

peer 依赖需要宿主自行安装：

```bash
npm i cesium@^1.133 vue@^3
```

## 快速上手

```ts
import { drawTool } from "@fun-gis/draw"
import "@fun-gis/draw/style"

drawTool.init(viewer)

// 订阅统一事件
drawTool.on("drawEnd", ({ shape, instance, data }) => {
  console.log(`${shape} 绘制完成`, instance ?? data)
})

// 开始绘制攻击箭头（entity 系）
drawTool.activate("AttackArrow")

// 结束当前绘制
drawTool.deactivate()

// 清空 primitive 系已绘制图形
drawTool.clear()
```

## 图形清单

**primitive 系**：`Point`、`Label`、`Segment`、`Polyline`、`Polygon`、
`Circle`、`Rectangle`、`Arc`、`Arch`、`Sector`、`Curve`、`CloseCurve`、
`Parallelogram`、`AttackArrow`

**entity 系**：`FineArrow`、`StraightArrow`、`CurvedArrow`、
`AssaultDirection`、`DoubleArrow`、`AttackArrowEntity`、
`SwallowtailAttackArrow`、`SquadCombat`、`SwallowtailSquadCombat`、
`FreehandLine`、`CurveEntity`、`CircleEntity`、`Ellipse`、`Lune`、
`Triangle`、`FreehandPolygon`、`PolygonEntity`、`RectangleEntity`、
`SectorEntity`

与 primitive 系重名的 entity 图形以 `Entity` 后缀区分，可通过
`registerShape` 覆盖任意默认实现：

```ts
drawTool.registerShape("AttackArrow", {
  kind: "entity",
  create: (viewer) => new MyArrow(viewer)
})
```

## 事件

| 事件         | 触发时机                        | 负载                        |
| ------------ | ------------------------------- | --------------------------- |
| `drawStart`  | 开始绘制                        | `{ shape }`                 |
| `drawUpdate` | 绘制/编辑过程中的坐标更新       | `{ shape, data }`           |
| `drawEnd`    | 图形绘制完成                    | `{ shape, instance, data }` |
| `editStart`  | 进入编辑（entity 系拖拽控制点） | `{ shape, data }`           |
| `editEnd`    | 退出编辑                        | `{ shape, data }`           |

## 直接使用图形类

entity 系图形类也可脱离门面直接实例化：

```ts
import { FineArrow } from "@fun-gis/draw"

const arrow = new FineArrow(viewer, { material: "#ff0000" })
arrow.on("drawEnd", (points) => console.log(points))
```

由点位数据直接落图（跳过交互）：

```ts
import { createGeometryFromData } from "@fun-gis/draw"

createGeometryFromData(viewer, {
  type: "AttackArrow",
  cartesianPoints: [],
  style: { material: "#ffff00" }
})
```

> v1 的直接类式 API（`Point`、`Polyline` 等 14 个类与 `itemManager`）仍可
> 使用，但已标记 `@deprecated`，新代码请迁移至 `drawTool`。

## 开发

```bash
pnpm -F @fun-gis/draw dev    # playground（端口 9151）
pnpm -F @fun-gis/draw build  # ES 库构建 + 类型声明
pnpm -F @fun-gis/draw test   # vitest 单元测试（几何计算）
```
