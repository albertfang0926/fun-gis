# @fun-gis/draw

基于 [Cesium](https://cesium.com/platform/cesiumjs/) 的军事标绘库。采用
Entity + CallbackProperty 渲染，提供 19 种图形的交互绘制、控制点编辑、
整体拖拽与生长动画，并以 `PlotManager` 统一门面提供交互绘制与数据驱动
绘制两条入口。

> 2026-09 目录结构调整：包目录由 `packages/draw` 更名为 `packages/plot`
> （npm 包名仍为 `@fun-gis/draw`）。原 `src/plot/` 下的标绘代码提升到
> `src/`；旧 primitive 系绘制代码（`drawMethods/`）与 `DrawTool` 统一门面
> （`drawTool/`）移入 `src/references/` 仅作参考，不再从包入口导出。
> 同期新增 `PlotManager` 统一门面（`src/plot-manager.ts`）、图形注册表
> （`src/registry.ts`）与事件源契约（`src/event-source.ts`）。

## 安装

```bash
npm i @fun-gis/draw
```

唯一 peer 依赖需要宿主自行安装：

```bash
npm i cesium@^1.133
```

库核心零前端框架依赖，Vue/React 宿主均可直接使用。

## 统一门面：PlotManager（推荐）

每个 viewer 一个 `PlotManager` 实例，交互绘制与数据驱动绘制共用同一套
注册表与统一事件：

```ts
import { PlotManager } from "@fun-gis/draw"

const plot = new PlotManager(viewer)

// 交互绘制：点击加点、双击完成、ESC 取消
plot.activate("AttackArrow", { style: { material: "#ff0000" } })
plot.on("drawEnd", ({ type, instance, data }) => {
  // 导出可序列化数据（positions 为 [lng, lat]）
  const geojsonLike = plot.getData(instance)
})
plot.deactivate()   // 等价于双击完成
plot.cancel()       // 丢弃未完成的图形，触发 drawCancel

// 数据驱动绘制：由存储的点位直接落图（static 状态，点击可进入编辑）
const shape = plot.createFromData({
  type: "AttackArrow",
  positions: [[116.1, 39.9], [116.5, 39.8], [117.0, 40.0]],
  style: { material: "#ffff00" }
})
```

事件负载统一为 `{ type, instance, data }`；`destroy()` 会移除本管理器创建
的全部图形并解绑全局监听。

### 扩展自定义图形

```ts
import { Base } from "@fun-gis/draw"

class MyLune extends Base { /* 实现 getType/addPoint/updateMovingPoint/... */ }

plot.register({ type: "MyLune", ctor: MyLune, category: "polygon" })
plot.activate("MyLune")   // 交互与数据驱动两条通道立即可用
```

`listShapes()` 返回全部已注册图形（`defaultRegistry` 内置 19 种，键即
数据驱动使用的 `type`；历史拼写 `Reactangle` 作为 `Rectangle` 的别名
保留）。

### 注入外部事件源

默认情况下整个 viewer 只有一个共享的 `ScreenSpaceEventHandler`
（懒创建，`destroySharedEventSource(viewer)` 随 viewer 销毁时调用）。
宿主若有统一鼠标事件管道（如 map-core），可实现 `MapEventSource`
注入，接线方永远是宿主：

```ts
import type { MapEventSource } from "@fun-gis/draw"

const source: MapEventSource = {
  on: (type, listener) => mouseEvents.on(toCesiumType(type), listener),
  off: (type, listener) => mouseEvents.off(toCesiumType(type), listener)
}
plot.setEventSource(source)   // 只影响之后创建的图形
```

事件键复用 Cesium 的 `ScreenSpaceEventType` 成员（`LEFT_CLICK`、
`LEFT_DOUBLE_CLICK`、`MOUSE_MOVE`、`LEFT_DOWN`、`LEFT_UP`），载荷为
结构化的 `PositionEvent` / `MoveEvent`。契约要求**多播**语义，消费方只
`on` / `off`，事件源的创建与销毁归拥有者。

## 独立使用图形类

不经门面直接实例化图形类也可工作（内部自动订阅 viewer 级共享事件源）：

```ts
import { FineArrow } from "@fun-gis/draw"

const arrow = new FineArrow(viewer, { material: "#ff0000" })
arrow.on("drawEnd", (points) => console.log(points))
```

由 Cartesian3 点位直接落图（兼容旧签名，落图后为 `static` 状态）：

```ts
import { createGeometryFromData } from "@fun-gis/draw"

createGeometryFromData(viewer, {
  type: "AttackArrow",
  cartesianPoints: [],
  style: { material: "#ffff00" }
})
```

默认导出的 `CesiumPlot` 是按图形名索引的注册表对象，可用于按名称取图形
类，其上也挂载了 `createGeometryFromData` / `createFromData` 方法。

## 图形清单（19 种）

- **箭头（`arrow/`，9 种）**：`FineArrow`、`AttackArrow`、
  `SwallowtailAttackArrow`、`SquadCombat`、`SwallowtailSquadCombat`、
  `StraightArrow`、`CurvedArrow`、`AssaultDirection`、`DoubleArrow`
- **线（`line/`，2 种）**：`FreehandLine`、`Curve`
- **多边形（`polygon/`，8 种）**：`Circle`、`Ellipse`、`Lune`、
  `Triangle`、`FreehandPolygon`、`Polygon`、`Rectangle`（别名
  `Reactangle`）、`Sector`

所有图形类继承自 `Base`（`src/base.ts`），控制点编辑、整体拖拽与生长
动画由基类统一提供；样式类型（`GeometryStyle` / `PolygonStyle` /
`LineStyle` 等）见 `src/interface.ts`。

## 事件

每个图形实例自带事件分发（`src/events.ts`），通过 `on` / `off` 订阅；
`PlotManager` 以 `{ type, instance, data }` 负载统一再发布：

| 事件         | 触发时机                       |
| ------------ | ------------------------------ |
| `drawStart`  | 开始绘制                       |
| `drawUpdate` | 绘制/编辑过程中的坐标更新      |
| `drawEnd`    | 图形绘制完成                   |
| `editStart`  | 进入编辑（拖拽控制点/整体拖拽） |
| `editEnd`    | 退出编辑                       |
| `drawCancel` | 门面层 `cancel()` 取消绘制     |

## 目录结构

```
packages/plot/
├── src/
│   ├── index.ts        # 包入口：门面、注册表、事件源、图形类与类型
│   ├── plot-manager.ts # PlotManager 统一门面 + PlotData 数据驱动
│   ├── registry.ts     # ShapeRegistry 图形注册表（内置 19 种）
│   ├── event-source.ts # MapEventSource 契约 + viewer 级共享事件源
│   ├── base.ts         # 图形基类（控制点、样式合并、拖拽）
│   ├── events.ts       # 事件分发
│   ├── interface.ts    # 类型定义（含 PlotData）
│   ├── utils.ts
│   ├── arrow/          # 9 种箭头
│   ├── line/           # 2 种线
│   ├── polygon/        # 8 种多边形
│   ├── assets/
│   └── references/     # 旧 draw 包代码（drawMethods/ primitive 系、
│                       #  drawTool/ 统一门面），仅作参考，不随包导出
├── playground/         # 本地演示
└── tests/              # vitest 单元测试（几何计算、注册表、数据转换）
```

## 开发

```bash
pnpm -F @fun-gis/draw dev    # playground（端口 9151）
pnpm -F @fun-gis/draw build  # ES 库构建 + 类型声明
pnpm -F @fun-gis/draw test   # vitest 单元测试
```
