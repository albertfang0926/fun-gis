# @fun-gis/entity-manager

对 Cesium 实体进行统一管理的工具集：实体工厂、类型注册、复合实体组织与
可视化器。纯 Cesium 依赖，**零前端框架依赖**（playground 即以原生 TS 编写）。

- **实体工厂** —— 通过注册的工厂类型创建 `DrawEntity`（点/线/面/图片）与
  `CompositeEntity`（将多个子实体归到同一业务对象下）；
- **统一操作** —— 显隐、移除、按类型查询，全部走 `DataManager` 一个入口；
- **生命周期事件** —— `entityCreated / childAdded / visibilityChanged /
  entityRemoved / entityVisualized / visualizationUpdated /
  visualizationCleared`；
- **可视化器注册** —— `BaseVisualizer` 抽象类 + 内置
  `DrawVisualizer` / `CompositeVisualizer`，按实体类型接管渲染与样式更新。

## 安装

```bash
npm i @fun-gis/entity-manager
```

唯一 peer 依赖需要宿主自行安装：

```bash
npm i cesium@^1.133
```

## 快速上手

```ts
import {
  CompositeType,
  DataManager,
  DrawType,
  DrawVisualizer,
  type DrawEntity
} from "@fun-gis/entity-manager"

const dataManager = new DataManager(viewer)
dataManager.registerVisualizer("draw", new DrawVisualizer(viewer))

// 监听生命周期事件
dataManager.on("visibilityChanged", ({ id, visible }) => {
  console.log(id, visible ? "显示" : "隐藏")
})

// 通过工厂创建绘制实体
const point = dataManager.createEntity<DrawEntity>("draw", {
  type: DrawType.Point,
  entity: viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(116.39, 39.9),
    point: { pixelSize: 12 }
  }),
  properties: { position: Cesium.Cartesian3.fromDegrees(116.39, 39.9) }
})

// 将多个子实体归入同一业务分组，统一显隐/移除
const group = dataManager.createEntity("composite", {
  type: CompositeType.Planning,
  name: "规划分组"
})
dataManager.addChildToComposite(group.id, point)

dataManager.setEntityVisibility(group.id, false)
dataManager.removeEntity(point.id)
```

## 自定义实体类型与可视化器

```ts
import { DataManager, type BaseEntity } from "@fun-gis/entity-manager"

interface MyEntity extends BaseEntity {
  type: "heatmap"
  data: number[]
}

dataManager.registerEntityFactory<MyEntity>({
  type: "heatmap",
  create: (options) => ({ id: crypto.randomUUID(), show: true, ...options })
})
```

可视化器继承 `BaseVisualizer<T>` 并实现 `visualize / updateStyle / clear`
三个方法后，用 `dataManager.registerVisualizer(type, visualizer)` 注册即可。

## 开发

```bash
pnpm -F @fun-gis/entity-manager dev    # playground（端口 9153，原生 TS 无框架）
pnpm -F @fun-gis/entity-manager build  # ES 库构建 + 类型声明
```
