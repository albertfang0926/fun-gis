# 会话导出:包架构设计问答(draw / entity-manager / map-core)

- 日期:2026-09-18
- 形式:围绕 fun-gis monorepo 包架构的四轮问答,所有结论均基于对仓库实际代码的核查
- 涉及包:`@fun-gis/draw`、`@fun-gis/entity-manager`、`@fun-gis/map-core`

---

## 问题一:作为一个基于 Cesium 的 3D 可视化包,数据管理/图层管理和地图绘制是否应该分包?

**结论:应该分包,而且仓库已经做出了正确的选择**——`@fun-gis/draw` 和 `@fun-gis/entity-manager` 互相零依赖、各自只 peer 依赖 cesium,靠数据契约在应用层集成。这个结构值得坚持。

### 为什么该分

1. **变更原因和节奏完全不同(包级单一职责)。** 绘制是交互密集型代码:事件流、编辑态、控制点、动画,迭代快、不稳定;数据/图层管理是数据密集型代码:工厂、注册表、CRUD、事件,结构稳定。混在一个包里,每加一个标绘形状都得给数据管理发新版本,semver 会失去意义。
2. **两者的使用者不重叠也不需要互相拖累。** 依赖差异就是证据:`draw` 运行时依赖 turf/lodash/uuid,`entity-manager` 是零运行时依赖。只做实体可视化管理的用户不应该被迫安装 turf;只做标绘的用户不需要 DataManager。包边界是比 tree-shaking 更硬的保证。
3. **接缝已经是健康的形态。** `entity-manager` 没有 import draw 的任何代码,而是自己定义 `DrawEntity` 数据结构,由 `src/visualization/draw-visualizer.ts` 把数据记录转成 Cesium Entity。两个包共享的是**数据契约**而不是代码——这是多包架构里最理想的耦合方式:依赖图保持无环(`map-core → entity-manager`,`draw ⟂ 两者`),任何一包可以独立重写内部实现而不波及另一包。
4. **生态先例。** 地图库的成熟形态普遍是"核心 + 独立扩展"(Leaflet 插件体系、ol/ol-ext、resium 之于 Cesium 本体),绘制几乎总是作为可插拔扩展存在。反例 mars3d 是单包,但那是整体商业产品,用户没有选择权——要做可组合的发布库,拆分才有组合性。

### 分包的代价与注意点

- **共享数据结构的归属。** `entity-manager` 的 `DrawEntity` 和 `draw` 的 `drawEnd` 事件载荷是同一份契约的两个手动副本,现在靠纪律保持同步。如果发现漂移成本变高,优先方案不是合并包,而是让某一方(比如 `entity-manager`)成为类型的唯一拥有者,另一方提供官方 adapter。
- **不要继续往下过度拆。** 图层管理目前留在 `map-core`(私有)是对的——imagery/terrain/dataSource 天然绑定 viewer 实例,和 viewer 封装同生共死,而且当前只有 map-core 一个消费者。拆出一个独立发布的 layer 包属于过早抽象。判断标准就一条:**出现第二个独立消费者、且它演进节奏和宿主不同时,才拆;否则目录再"整齐"也不值得多一个发版单元。**

**一句话总结:** 分包的依据不是功能分类学,而是"是否独立演进 + 是否有人只需要其一 + 依赖是否单向"。这三条在 draw 与 entity-manager 之间全部成立,在图层管理与 map-core 之间暂时都不成立——所以现状就是对的。

---

## 问题二:通过绘制包产生的实体如何加入数据管理?

**结论:两个包目前没有现成的桥接——约定的接缝是 `drawTool.on("drawEnd")` 的负载 → `DataManager.createEntity("draw", ...)`,由应用层写 glue 代码完成;但要先做一个关键决策,因为 draw 的两套后端产物在类型上并不直接匹配 `DrawEntity.entity: Entity` 这个契约。**

### 设计意图中的路径

`entity-manager` 已经为这件事留好了入口,demo(`apps/gh-pages-demo/src/components/EntityManagerDemo.vue`)里演示的就是后半段(手工构造 Entity 后录入):

```ts
const entity = dataManager.createEntity<DrawEntity>("draw", {
  type: DrawType.Point,
  entity: viewer.entities.add({ ... }),   // 一个真实存在的 Cesium Entity
  properties: { position }                 // 纯数据,供 DrawVisualizer 重建/改样式
})
```

glue 代码的形状:

```ts
const SHAPE_TYPE: Record<string, DrawType> = {
  Point: DrawType.Point,
  Polyline: DrawType.Line, FreehandLine: DrawType.Line,
  Polygon: DrawType.Polygon, PolygonEntity: DrawType.Polygon, Rectangle: DrawType.Polygon
  // 映射不到的形状(军标箭头等)先不纳入
}

drawTool.on("drawEnd", ({ shape, instance, data }) => {
  const type = SHAPE_TYPE[shape]
  if (!type) return
  // primitive 系坐标在 instance.controlPoints;entity 系在 data 负载里
  const positions = instance?.controlPoints ?? data?.positions
  if (!positions?.length) return

  dataManager.createEntity("draw", {
    type,
    entity: viewer.entities.add(buildEntityOptions(type, positions)),
    properties: { positions, originShape: shape }
  })
})
```

### 三处错配,需要先选立场

1. **primitive 系产物根本不是 Entity。** 14 种 primitive 形状渲染物是 `scene.primitives` 里的 Primitive,由 `itemManager` 私有管理(`drawMethods/manager/primitive.ts` 的 `removeById`/`removeAll`)。而 `DataManager.removeEntity` 走 `viewer.entities.remove`——对 Primitive 无效,移除会"台账删了、图还在"。
2. **双重所有权。** draw 侧的 `itemManager`/plot 类持有渲染物并自带编辑能力(拖拽、右键菜单、控制点);DataManager 又要管 `show`/`remove`。两边同时管同一个对象必然打架。
3. **类型有损。** `DrawType` 只有 4 个值,draw 有 33 种形状;`DrawVisualizer` 也只实现了 point/line/polygon 三种,军标箭头的几何算法在 draw 里,entity-manager 无法从坐标重建。

对应两个可行立场:

- **立场 A——draw 只当"交互采集器"(架构上最干净,推荐起步用这个)。** 绘制结束即取数据、`itemManager.removeById` 清掉 draw 侧渲染物,由应用层(或 `DrawVisualizer`)从 `properties.positions` 重建 Entity,DataManager 成为唯一所有者。show/remove/分组全部自然工作。代价是丢掉 draw 的编辑能力,且只覆盖简单形状。
- **立场 B——保留 draw 的渲染,DataManager 只做台账。** 把 plot 系内部的 `polygonEntity`(它是真 Entity,`plot/base.ts` 有暴露)直接塞进 `entity` 字段;primitive 系则需要把 `DrawEntity.entity` 的类型放宽,并给 `removeEntity` 加 per-backend 的 dispose 钩子(通过注册自定义 factory/visualizer 可以在应用层实现,不必改 entity-manager 源码——这正是它注册表设计的用意)。保留编辑能力,但生命周期代码要小心。

### 落地建议

先在 `apps/playground` 写上面那段 glue(约 30 行),把 DrawDemo 和 EntityManagerDemo 打通成一个"绘制 → 入库 → 分组管理"的完整演示;等 glue 在两三个 app 里重复出现、映射表稳定后,再把它沉淀进 entity-manager 作为官方 adapter——参数用结构性类型(`{ shape; positions }`),不 import `@fun-gis/draw`,维持"共享数据契约、不共享代码"的零依赖格局。

---

## 问题三:想在 map-core 中对 Cesium 的鼠标事件进行统一发布(通过 EventEmitter),绘制包如何使用这些统一事件?

**结论:方向必须反过来。不能让 draw "使用 map-core 的事件"——draw 是要发布的包(唯一 peerDep 是 cesium),map-core 是私有包,发布的包依赖私有包就永远发不出去了。正确做法是依赖倒置:draw 定义一个最小的事件源接口并支持注入,map-core 把统一事件流"喂"进来,接线方永远是 map-core(或应用层)。**

### 现状

- map-core 的 `core/event.ts` 已有通用 `EventEmitter`(string 事件、on/off/once/emit),`LayerManager`/`ViewerBridge` 等在用,但还没有任何鼠标事件接进去。
- draw 内部有 37 处 `new ScreenSpaceEventHandler(viewer.canvas)`,每个 middleware/plot 类自建、自管生命周期。

### 推荐的接法:注入式事件源

draw 侧(不依赖任何包,自己定义契约):

```ts
// packages/draw 内新增,结构化接口——外部任何同形状对象都能喂进来
export interface MapEventSource {
  on(type: string, listener: (movement: any) => void): void
  off(type: string, listener: (movement: any) => void): void
}

export class DrawTool {
  /** 注入外部事件源;不调用则默认自建 ScreenSpaceEventHandler(独立使用不受影响) */
  setEventSource(source: MapEventSource) { ... }
}
```

map-core 侧(新建鼠标事件模块,持全场唯一的 handler):

```ts
export class MouseEventManager extends EventEmitter {
  private handler: ScreenSpaceEventHandler

  init(viewer: Viewer) {
    this.handler = new ScreenSpaceEventHandler(viewer.canvas)
    this.handler.setInputAction(
      (m) => this.emit("leftClick", m),   // 载荷保持 Cesium 原始 movement
      ScreenSpaceEventType.LEFT_CLICK
    )
    // RIGHT_CLICK / DOUBLE_CLICK / MOUSE_MOVE ...
  }

  /** 适配成 draw 的 MapEventSource 形状——结构化类型,双方零 import */
  asEventSource() {
    return {
      on: (t, l) => this.on(t, l),
      off: (t, l) => this.off(t, l)
    }
  }
}
```

接线发生在 map-core(依赖方向合法):

```ts
mouseEvents.init(viewer)
drawTool.init(viewer)
drawTool.setEventSource(mouseEvents.asEventSource())
```

TypeScript 的结构化类型是这里的关键:map-core 的对象不需要知道自己"实现了 draw 的接口",两边各自维护同一份事件名约定(`"leftClick"` 等字符串常量)即可。

### 三个必须提前想清楚的坑

1. **draw 内部的 37 处 handler 是真实成本。** 只在 `DrawTool` 加注入入口没用——内部各 middleware 仍然各自监听 canvas。要真正吃到统一事件,draw 需要先做一次内部收敛:建一个包内事件中枢(默认自建一个 handler,所有 middleware/plot 订阅中枢而非 canvas),`setEventSource` 只是替换中枢的默认源。这是 draw 包自己的重构,与 map-core 无关,但顺便能消掉 37 个 handler 各自 destroy 的泄漏风险。
2. **单播变多播的语义差异。** `setInputAction` 同一类型只保留最后一个 action(后设覆盖先设);`EventEmitter` 是多播。draw 现在的状态机隐式依赖了这种互斥,换成订阅制后要靠 `off()` 显式管理——`DrawTool` 已有 `active`/`deactivate()` 互斥逻辑,重构时逐个形状验证即可。
3. **生命周期所有权必须分离。** 注入模式下 draw 只能订阅/退订(`on`/`off`),绝不能 destroy 外部 handler。原则:事件的"拥有者"(map-core)管创建销毁,"消费者"(draw)只管订阅。

### 一个务实的退路

Cesium 本身允许多个 `ScreenSpaceEventHandler` 并存、互不干扰,所以"统一发布"不是正确性需求,是架构偏好(单一管道、全局开关、事件审计)。如果暂时不想动 draw 的 37 处,可以分两步走:map-core 的统一鼠标事件先只服务 UI 层(悬停坐标、点击拾取、光标管理),draw 维持自建 handler;等出现"绘制期间要全局压制其他交互"这类跨包需求时,再按注入方案打通。

另一个既有 gotcha:map-core 默认 `requestRenderMode: true`,而 draw 的 primitive 系在 `MOUSE_MOVE` 里更新几何——统一事件管道不改变这一点,每次几何变更后仍需手动 `scene.requestRender()`,否则拖不动。

---

## 问题四:map-core 为什么是私包?

**"私包"有两层意思:机制上,`packages/map-core/package.json` 里的 `"private": true` 让 pnpm/npm 拒绝发布它,只能以 `workspace:*` 被仓库内部消费;设计上,它是这个 monorepo "抽取式重构后剩下的组合层",天然不满足发布条件。** 具体有三条依据:

### 1. 它是 Vue 耦合的,而这个仓库的可发布包被刻意去框架化了

map-core 的 peerDependencies 里有 `vue`,源码里真有 Vue 组件(`src/components/basePanel.vue`)。对比三个可发布包的演化路径:draw 当年 "vue was fully decoupled"(上下文菜单改成纯 DOM 实现),entity-manager 被刻意做成 "framework-agnostic, cesium is the only peerDependency, no vue"。这个仓库有一条明确的原则:**发布库必须框架无关,map-core 是框架耦合被允许存在的那一层**。带着 Vue 发布出去,等于强迫所有使用者装 Vue。

### 2. 它在依赖图的"上游",而发布库必须是无内部依赖的叶子

依赖方向是 `map-core → @fun-gis/entity-manager (workspace:*)`。仓库里两个发布形态的包(draw、entity-manager)都是零 `@fun-gis/*` 依赖的叶子;map-core 的角色恰好相反——它是把 viewer 初始化、相机、事件、图层系统和 entity-manager **组合起来**的应用服务层。组合层是项目意见(opinionated)的产物,发布出去只会背上 semver 维护负担。

### 3. 它没有被版本化管理,而且当时一个消费者都没有

版本还是 `0.0.0`,不在 changesets 管理范围内(draw 走 changesets 发版)。核查事实:截至本次会话,apps/playground、gh-pages-demo 和其他包都**没有**依赖 `@fun-gis/map-core`——gh-pages-demo 直接组合的是 draw + entity-manager + panoramic-photo。map-core 实质是重构后的"残余壳":通用能力被抽走发布后,剩下的 viewer 封装暂时没有归宿需求。

### 与其他问题的关系

这也是问题三结论的根因:draw 不能依赖 map-core,不是因为技术做不到,而是**角色不兼容**——发布库只能依赖外部世界(cesium),组合层才可以依赖内部包。依赖箭头永远从私有层指向发布库,不能反向。

`private` 同时是个实用优势:意味着可以随时重构 map-core 而不背兼容性包袱(比如图层系统的去留、鼠标事件统一发布模块,都可以先在私有环境里自由演进)。等哪天它出现了第二个消费者、API 稳定了、Vue 耦合拆掉了(或把 Vue 组件层分离成 `map-core-vue`),再转公开不迟。

---

## 附:本次会话核查过的关键代码位置

| 位置 | 作用 |
| --- | --- |
| `packages/draw/src/drawTool/index.ts` | DrawTool 统一门面,`drawEnd` 负载 `{ shape, instance?, data? }` |
| `packages/draw/src/drawTool/shapes.ts` | 33 种形状注册表(primitive 14 + entity 19) |
| `packages/draw/src/drawMethods/manager/primitive.ts` | itemManager:primitive 系渲染物的私有管理与 removeById/removeAll |
| `packages/draw/src/plot/base.ts` | entity 系基类,暴露 `polygonEntity`/`lineEntity` |
| `packages/entity-manager/src/data-manager.ts` | DataManager 工厂/注册表/生命周期,`DrawType` 仅 4 值 |
| `packages/entity-manager/src/visualization/draw-visualizer.ts` | 从 `properties` 重建 point/line/polygon 三种 Entity |
| `packages/map-core/src/core/event.ts` | 通用 EventEmitter(尚无鼠标事件接入) |
| `packages/map-core/package.json` | `"private": true`、vue peerDep、`workspace:*` 依赖 entity-manager |
| `apps/gh-pages-demo/src/components/` | DrawDemo.vue / EntityManagerDemo.vue(两个演示,尚未打通) |
