# 图层系统实现方案

## 需求

支持：

- 大小地图同步
- 图层显隐
- 图层树管理
- 数据更新
- 数据筛选
- 多Viewer联动
- 图层序列化保存

## Context

`@fun-gis/map-core` 包需要一套完整的图层系统，用于管理 Cesium 地图上的业务数据。当前已有 `layer-management/` 模块（BaseLayer、DrawLayer、CompositeLayer、LayerManager），但缺少图层树、序列化、多 Viewer 同步、过滤等能力。本方案在现有代码基础上构建新系统，逐步取代旧模块。

## 架构设计

核心思路：**LayerModel（纯状态） + Provider（Cesium 操作） + LayerStore（共享状态中心） + ViewerBridge（Viewer 适配）**

- LayerModel 只持有可序列化状态，不引用 Cesium 对象
- Provider 按数据源类型隔离 Cesium API 调用
- LayerStore 作为单一数据源，支持多 ViewerBridge 订阅
- ViewerBridge 将一个 Cesium Viewer 连接到 Store，响应变更

```
LayerManager (门面)
  ├── LayerStore (状态中心, 无 Cesium 依赖)
  │     ├── Map<id, LayerModel>
  │     ├── Map<id, LayerTreeNode>
  │     └── Event: layerAdded / layerRemoved / layerChanged / layerMoved
  ├── ProviderRegistry (数据源类型 → Provider 映射)
  │     ├── EntityLayerProvider
  │     ├── ImageryLayerProvider
  │     ├── TerrainLayerProvider
  │     ├── TilesetLayerProvider
  │     ├── GeoJsonLayerProvider
  │     ├── KmlLayerProvider
  │     └── CzmlLayerProvider
  ├── FilterRegistry
  │     ├── PropertyFilter
  │     └── SpatialFilter
  └── Map<viewerId, ViewerBridge>
        └── ViewerBridge (每个 Viewer 一个, 监听 Store 事件并操作 Cesium)
```

## 文件结构

```
packages/map-core/src/core/layer-system/
  index.ts                          # 公共导出
  types/
    index.ts                        # 所有类型定义
  model/
    layer-model.ts                  # LayerModel (可序列化状态)
    layer-tree-node.ts              # LayerTreeNode (树结构)
  providers/
    index.ts                        # ProviderRegistry
    base-provider.ts                # BaseLayerProvider
    entity-provider.ts              # EntityLayerProvider
    imagery-provider.ts             # ImageryLayerProvider
    terrain-provider.ts             # TerrainLayerProvider
    tileset-provider.ts             # TilesetLayerProvider
    geojson-provider.ts             # GeoJsonLayerProvider
    kml-provider.ts                 # KmlLayerProvider
    czml-provider.ts                # CzmlLayerProvider
  filter/
    index.ts                        # FilterRegistry
    base-filter.ts                  # BaseLayerFilter
    property-filter.ts              # PropertyFilter
    spatial-filter.ts               # SpatialFilter
  store/
    layer-store.ts                  # LayerStore
    viewer-bridge.ts                # ViewerBridge
  layer-manager.ts                  # LayerManager 门面
```

## 实现步骤

### 阶段 1：类型定义与模型

**文件: `types/index.ts`**
- `LayerDataSourceType` 枚举: Entity / Imagery / Terrain / Tileset / GeoJson / Kml / Czml / Custom
- `ILayerModel` 接口: id, name, dataSourceType, visible, opacity, zIndex, parentId, childrenIds, style, properties, sourceConfig, filterState, metadata
- `ILayerSourceConfig` 联合类型: 各数据源的配置接口（IEntitySourceConfig / IImagerySourceConfig / ITerrainSourceConfig / ITilesetSourceConfig / IGeoJsonSourceConfig / IKmlSourceConfig / ICzmlSourceConfig / ICustomSourceConfig）
- `ILayerProvider` 接口: addToViewer / removeFromViewer / updateStyle / setVisibility / refresh / applyFilter
- `ILayerFilterState` / `ILayerFilter` / `ILayerTreeNodeSnapshot` 接口

**文件: `model/layer-model.ts`**
- 继承现有 `EventEmitter`
- 持有 `ILayerModel` 状态，getter + setter 方法
- setter 方法触发 `changed` 事件和具体事件（如 `visibilityChanged`）
- `toJSON()` / `static fromJSON()` 序列化支持

**文件: `model/layer-tree-node.ts`**
- 轻量树节点: id, parentId, childrenIds[]

### 阶段 2：Provider 基础设施

**文件: `providers/base-provider.ts`**
- 抽象类实现 `ILayerProvider`
- 提供 `setVisibility` / `refresh` / `applyFilter` 的默认实现

**文件: `providers/index.ts` (ProviderRegistry)**
- `Map<LayerDataSourceType, ILayerProvider>`
- `register()` / `get()` / `has()`

**文件: `providers/entity-provider.ts`**
- 委托给现有 `DataManager` 管理实体可见性/样式
- 通过 `DataManager.setEntityVisibility()` / `removeEntity()` 操作

**文件: `providers/imagery-provider.ts`**
- 根据 providerType (wmts/wms/tms/arcgis/ion) 创建对应 ImageryProvider
- `viewer.imageryLayers.addImageryProvider()` / `remove()`
- 支持透明度和 show 属性

**文件: `providers/terrain-provider.ts`**
- `CesiumTerrainProvider` / `EllipsoidTerrainProvider`
- `viewer.terrainProvider` 赋值

**文件: `providers/tileset-layer-provider.ts`**
- `Cesium3DTileset.fromUrl()` 异步加载
- `viewer.scene.primitives.add()` / `remove()`

### 阶段 3：Bridge 集成

**文件: `store/layer-store.ts` (LayerStore)**
- 继承 `EventEmitter`，无 Cesium 依赖
- `Map<id, LayerModel>` + `Map<id, LayerTreeNode>`
- `addLayer` / `removeLayer` / `getModel` / `getTreeNode`
- `moveLayer` / `reorderLayers` 树操作
- `rebuildOrder()` 拓扑排序（按层级 + zIndex）
- `toJSON()` / `static fromJSON()` 完整序列化

**文件: `store/viewer-bridge.ts` (ViewerBridge)**
- 持有一个 Viewer + ProviderRegistry + LayerStore 引用
- `Map<layerId, handle>` 保存 Cesium 对象句柄
- 监听 Store 事件: layerAdded → addToViewer, layerRemoved → removeFromViewer, layerChanged → syncLayer
- `syncAll()` 初始全量同步
- `destroy()` 清理

**文件: `layer-manager.ts` (LayerManager 门面)**
- 组合 LayerStore + ProviderRegistry + FilterRegistry + ViewerBridge[]
- `createLayer` / `removeLayer` / `getLayer` / `getAllLayers`
- `createGroup` / `moveLayerToGroup` / `getLayerTree`
- `setLayerVisibility` / `setLayerOpacity` / `setLayerStyle`
- `setLayerFilter`
- `attachViewer` / `detachViewer`
- `toJSON()` / `static fromJSON()`
- `registerProvider` / `registerFilter`

**修改: `src/core/initMap/index.ts`**
- CesiumViewer 添加 `layerManager` 属性
- `initMap()` 中创建 LayerManager 并 attachViewer

**修改: `src/core/index.ts`**
- 导出新的 layer-system 模块

### 阶段 4：数据 Provider

**文件: `providers/geojson-provider.ts`**
- `GeoJsonDataSource.load()` 异步加载
- `viewer.dataSources.add()` / `remove()`
- 支持样式配置（fill, stroke, clampToGround 等）

**文件: `providers/kml-provider.ts`**
- `KmlDataSource.load()` 异步加载
- `viewer.dataSources.add()` / `remove()`

**文件: `providers/czml-provider.ts`**
- `CzmlDataSource.load()` 异步加载
- `viewer.dataSources.add()` / `remove()`

### 阶段 5：过滤系统

**文件: `filter/base-filter.ts`**
- 抽象类实现 `ILayerFilter`
- `matches()` / `filter()` 接口

**文件: `filter/property-filter.ts` (PropertyFilter)**
- 按实体属性过滤，支持 equals / contains / range / gt / lt 操作符
- 嵌套属性路径支持 (如 `properties.temperature`)

**文件: `filter/spatial-filter.ts` (SpatialFilter)**
- 按空间范围过滤: bbox / circle / polygon
- 使用 Cesium 的 `BoundingSphere` / `Rectangle` 进行空间判断

**文件: `filter/index.ts` (FilterRegistry)**
- `Map<string, ILayerFilter>`
- `register()` / `get()` / `has()`
- `applyFilter(layerId, filterState)` 组合调用

### 阶段 6：多 Viewer 同步

- 验证多个 ViewerBridge 连接同一 LayerStore
- LayerManager.attachViewer 支持多个 viewerId
- Store 事件广播到所有 Bridge

### 阶段 7：迁移清理

- 在旧 `layer-management/` 文件添加 `@deprecated` 注释
- 更新 `src/core/index.ts` 导出指向新模块
- 更新 CLAUDE.md

## 关键设计决策

1. **LayerModel 不引用 Cesium 对象** — 纯状态可序列化，Cesium 操作全在 Provider 中
2. **LayerStore 无 Cesium 依赖** — 可在 Viewer 之外使用（如 UI 层、Server 端）
3. **ViewerBridge 是唯一的 Viewer 适配点** — 多 Viewer 同步通过多个 Bridge 实现共享同一 Store
4. **Provider 注册表模式** — 新数据源类型通过注册 Provider 扩展，不改核心代码
5. **保留现有模块** — 旧 `layer-management/` 暂不删除，标记 deprecated

## 与现有代码的关系

| 现有类 | 新系统中的角色 |
|---|---|
| `EventEmitter` | 所有新类的基类，不变 |
| `BaseLayer` | 保留但标记 deprecated，新系统用 LayerModel 替代 |
| `DataManager` | EntityLayerProvider 委托给它操作实体 |
| `CesiumViewer` | 扩展，添加 `layerManager` 属性 |
| 旧 `LayerManager` | 保留，标记 deprecated |

## 验证方式

1. 在 playground 中创建 LayerManager，添加 ImageryLayer，切换可见性
2. 创建图层组（Group），移动图层到组中，验证树结构
3. 序列化为 JSON，反序列化后恢复所有图层
4. 创建两个 Viewer（主地图 + 小地图），attachViewer 到同一 LayerManager，验证同步
5. 对 Entity 图层应用属性过滤，验证过滤结果
