# 标绘模块

支持标绘的图形包括：

- 点
- 标签
- 平行四边形
- 线段
- 圆
- 弧形
- 扇形
- 弓形
- 折线
- 多边形
- 矩形
- 曲线
- 攻击箭头
- 封闭曲线

## 快速上手

### 安装

离线安装本包，运行如下命令

```bash
npm i {path/to/this/package}
```

### 初始化

使用图形标绘库首先需要初始化，图形管理器：

```typescript
import { itemManager } from "@zazn-gis/draw-methods"

itemManager.init(viewer)
```

### 图形标绘

#### 1 点标绘

```typescript

declare class Point {
    id: string;
    controlPoints: Cartesian3[];
    viewer: Viewer;
    dragHandler: ScreenSpaceEventHandler;
    scale: number;
    color: string;
    editing: boolean;
    primitive: BillboardCollection;
    contextMenu: I_ContextMenu<BaseEntity>[];
    constructor(viewer: Viewer, onRightClick: (e: any) => void);
    /**
     * 绘制方法
     */
    draw(): void;
    /**
     * 右击图形事件的响应
     */
    private _onRightClick;
    /**
     *  绑定菜单子项
     */
    bindContextMenu(content: I_ContextMenu<BaseEntity>[]): void;
    /**
     * 为图形拖拽添加辅助控制点
     */
    private addHelper;
    /**
     * 左击事件
     * @deprecated 仅在调试时使用
     */
    onLeftClick(): void;
    /**
     * 开始拖拽
     */
    startDrag(): void;
    /**
     * 停止拖拽
     */
    endDrag(): void;
    /**
     * 拖拽事件
     */
    private onDrag;
    /**
     * 更新颜色
     * @param color
     */
    updateColor(color: string): void;
    /**
     * 更新点的比例
     */
    updateScale(scale: number): void;
    /**
     * 更新点的位置
     */
    updatePosition(position: Coordinate): void;
}
```

#### 2 标签标绘

```typescript
declare class Label {
    id: string;
    controlPoints: Cartesian3[];
    viewer: Viewer;
    dragHandler: ScreenSpaceEventHandler;
    text: string;
    scale: number;
    textColor: string;
    bgColor: string;
    boardColor: string;
    focusedColor: string;
    editing: boolean;
    primitive: BillboardCollection;
    contextMenu: I_ContextMenu<BaseEntity>[];
    constructor(viewer: Viewer, onRightClick: (e: any) => void);
    draw(text?: string, textColor?: string, backgroundColor?: string): void;
    private _onRightClick;
    bindContextMenu(content: I_ContextMenu<BaseEntity>[]): void;
    private addHelper;
    private onLeftClick;
    startDrag(): void;
    endDrag(): void;
    onDrag(): void;
    /**
     * 更新字体颜色和背景颜色
     * @param color
     */
    updateColor(textColor: string, bgColor: string): void;
    /**
     * 更新标签内容
     */
    updateText(text: string): void;
    /**
     * 更新控制点
     */
    updatePositions(positions: Coordinate[]): void;
}
```

#### 3 平行四边形

```typescript
declare class Parallelogram {
    id: string;
    controlPoints: Cartesian3[];
    viewer: Viewer;
    dragHandler: ScreenSpaceEventHandler;
    width: number;
    color: string;
    editing: boolean;
    primitive: Primitive;
    contextMenu: I_ContextMenu<this>[];
    constructor(viewer: Viewer, onRightClick: (e: any) => void);
    draw(): void;
    private _onRightClick;
    bindContextMenu(content: I_ContextMenu<this>[]): void;
    addHelper(): void;
    onLeftClick(): void;
    startDrag(): void;
    endDrag(): void;
    onDrag(): void;
    /**
     * 更新颜色
     * @param color
     */
    updateColor(color: string): void;
    /**
     * 更新线宽
     */
    updateWidth(width: number): void;
    /**
     * 更新控制点
     */
    updatePositions(positions: Coordinate[]): void;
}
```

#### 4 线段

```typescript
declare class Segment {
    id: string;
    controlPoints: Cartesian3[];
    viewer: Viewer;
    dragHandler: ScreenSpaceEventHandler;
    width: number;
    color: string;
    editing: boolean;
    primitive: Primitive;
    contextMenu: I_ContextMenu<this>[];
    constructor(viewer: Viewer, onRightClick: (e: any) => void);
    draw(): void;
    private _onRightClick;
    bindContextMenu(content: I_ContextMenu<this>[]): void;
    addHelper(): void;
    onLeftClick(): void;
    startDrag(): void;
    endDrag(): void;
    onDrag(): void;
    /**
     * 更新颜色
     * @param color
     */
    updateColor(color: string): void;
    /**
     * 更新线宽
     */
    updateWidth(width: number): void;
    /**
     * 更新控制点
     */
    updatePositions(positions: Coordinate[]): void;
}
```

#### 5 圆

```typescript
declare class Circle {
    id: string;
    controlPoints: Cartesian3[];
    viewer: Viewer;
    dragHandler: ScreenSpaceEventHandler;
    center: Cartesian3;
    radius: number;
    width: number;
    color: string;
    editing: boolean;
    primitive: Primitive;
    contextMenu: I_ContextMenu<this>[];
    constructor(viewer: Viewer, onRightClick: (e: any) => void);
    draw(): void;
    private _onRightClick;
    bindContextMenu(content: I_ContextMenu<this>[]): void;
    addHelper(): void;
    onLeftClick(): void;
    startDrag(): void;
    endDrag(): void;
    onDrag(): void;
    /**
     * 更新颜色
     * @param color
     */
    updateColor(color: string): void;
    /**
     * 更新线宽
     */
    updateWidth(width: number): void;
    /**
     * 更新控制点
     */
    updateCenter(positions: Coordinate): void;
}
```

#### 6 弧形

```typescript
declare class Arc {
    id: string;
    controlPoints: Cartesian3[];
    viewer: Viewer;
    dragHandler: ScreenSpaceEventHandler;
    width: number;
    color: string;
    editing: boolean;
    primitive: Primitive;
    contextMenu: I_ContextMenu<this>[];
    constructor(viewer: Viewer, onRightClick: (e: any) => void);
    draw(): void;
    private _onRightClick;
    bindContextMenu(content: I_ContextMenu<this>[]): void;
    addHelper(): void;
    onLeftClick(): void;
    startDrag(): void;
    endDrag(): void;
    onDrag(): void;
    /**
     * 更新颜色
     * @param color
     */
    updateColor(color: string): void;
    /**
     * 更新线宽
     */
    updateWidth(width: number): void;
    /**
     * 更新控制点
     */
    updatePositions(positions: Coordinate[]): void;
}
```

#### 7 扇形

```typescript
declare class Sector {
    id: string;
    controlPoints: Cartesian3[];
    viewer: Viewer;
    dragHandler: ScreenSpaceEventHandler;
    width: number;
    color: string;
    editing: boolean;
    primitive: Primitive;
    contextMenu: I_ContextMenu<this>[];
    constructor(viewer: Viewer, onRightClick: (e: any) => void);
    draw(): void;
    private _onRightClick;
    bindContextMenu(content: I_ContextMenu<this>[]): void;
    addHelper(): void;
    onLeftClick(): void;
    startDrag(): void;
    endDrag(): void;
    onDrag(): void;
    /**
     * 更新颜色
     * @param color
     */
    updateColor(color: string): void;
    /**
     * 更新线宽
     */
    updateWidth(width: number): void;
    /**
     * 更新控制点
     */
    updatePositions(positions: Coordinate[]): void;
}
```

#### 8 弓形

```typescript
declare class Arch {
    id: string;
    controlPoints: Cartesian3[];
    viewer: Viewer;
    dragHandler: ScreenSpaceEventHandler;
    width: number;
    color: string;
    editing: boolean;
    primitive: Primitive;
    contextMenu: I_ContextMenu<this>[];
    constructor(viewer: Viewer, onRightClick: (e: any) => void);
    draw(): void;
    private _onRightClick;
    bindContextMenu(content: I_ContextMenu<this>[]): void;
    addHelper(): void;
    onLeftClick(): void;
    startDrag(): void;
    endDrag(): void;
    onDrag(): void;
    /**
     * 更新颜色
     * @param color
     */
    updateColor(color: string): void;
    /**
     * 更新线宽
     */
    updateWidth(width: number): void;
    /**
     * 更新控制点
     */
    updatePositions(positions: Coordinate[]): void;
}
```

#### 9 折线

```typescript
declare class Polyline {
    id: string;
    controlPoints: Cartesian3[];
    viewer: Viewer;
    dragHandler: ScreenSpaceEventHandler;
    width: number;
    color: string;
    editing: boolean;
    primitive: Primitive;
    contextMenu: I_ContextMenu<this>[];
    constructor(viewer: Viewer, onRightClick: (e: any) => void);
    draw(): void;
    private _onRightClick;
    bindContextMenu(content: I_ContextMenu<this>[]): void;
    addHelper(): void;
    onLeftClick(): void;
    startDrag(): void;
    endDrag(): void;
    onDrag(): void;
    /**
     * 更新颜色
     * @param color
     */
    updateColor(color: string): void;
    /**
     * 更新线宽
     */
    updateWidth(width: number): void;
    /**
     * 更新控制点
     */
    updatePositions(positions: Coordinate[]): void;
}
```

#### 10 多边形

```typescript
declare class Polygon {
    id: string;
    controlPoints: Cartesian3[];
    viewer: Viewer;
    dragHandler: ScreenSpaceEventHandler;
    width: number;
    color: string;
    editing: boolean;
    primitive: Primitive;
    contextMenu: I_ContextMenu<this>[];
    constructor(viewer: Viewer, onRightClick: (e: any) => void);
    draw(): void;
    private _onRightClick;
    bindContextMenu(content: I_ContextMenu<this>[]): void;
    addHelper(): void;
    onLeftClick(): void;
    startDrag(): void;
    endDrag(): void;
    onDrag(): void;
    /**
     * 更新颜色
     * @param color
     */
    updateColor(color: string): void;
    /**
     * 更新线宽
     */
    updateWidth(width: number): void;
    /**
     * 更新控制点
     */
    updatePositions(positions: Coordinate[]): void;
}
```

#### 11 矩形

```typescript
declare class Rectangle {
    id: string;
    controlPoints: Cartesian3[];
    viewer: Viewer;
    dragHandler: ScreenSpaceEventHandler;
    width: number;
    color: string;
    editing: boolean;
    primitive: Primitive;
    contextMenu: I_ContextMenu<this>[];
    constructor(viewer: Viewer, onRightClick: (e: any) => void);
    draw(): void;
    private _onRightClick;
    bindContextMenu(content: I_ContextMenu<this>[]): void;
    addHelper(): void;
    onLeftClick(): void;
    startDrag(): void;
    endDrag(): void;
    onDrag(): void;
    /**
     * 更新颜色
     * @param color
     */
    updateColor(color: string): void;
    /**
     * 更新线宽
     */
    updateWidth(width: number): void;
    /**
     * 更新控制点
     */
    updatePositions(positions: Coordinate[]): void;
}
```

#### 12 曲线

```typescript
declare class Curve {
    id: string;
    controlPoints: Cartesian3[];
    viewer: Viewer;
    dragHandler: ScreenSpaceEventHandler;
    width: number;
    color: string;
    editing: boolean;
    primitive: Primitive;
    contextMenu: I_ContextMenu<this>[];
    constructor(viewer: Viewer, onRightClick: (e: any) => void);
    draw(): void;
    private _onRightClick;
    bindContextMenu(content: I_ContextMenu<this>[]): void;
    addHelper(): void;
    onLeftClick(): void;
    startDrag(): void;
    endDrag(): void;
    onDrag(): void;
    /**
     * 更新颜色
     * @param color
     */
    updateColor(color: string): void;
    /**
     * 更新线宽
     */
    updateWidth(width: number): void;
    /**
     * 更新控制点
     */
    updatePositions(positions: Coordinate[]): void;
}
```

#### 13 攻击箭头

```typescript
declare class AttackArrow {
    id: string;
    controlPoints: Cartesian3[];
    viewer: Viewer;
    dragHandler: ScreenSpaceEventHandler;
    width: number;
    color: string;
    editing: boolean;
    primitive: Primitive;
    contextMenu: I_ContextMenu<this>[];
    constructor(viewer: Viewer, onRightClick: (e: any) => void);
    draw(): void;
    private _onRightClick;
    bindContextMenu(content: I_ContextMenu<this>[]): void;
    addHelper(): void;
    onLeftClick(): void;
    startDrag(): void;
    endDrag(): void;
    onDrag(): void;
    /**
     * 更新颜色
     * @param color
     */
    updateColor(color: string): void;
    /**
     * 更新线宽
     */
    updateWidth(width: number): void;
    /**
     * 更新控制点
     */
    updatePositions(positions: Coordinate[]): void;
}
```

#### 14 封闭曲线

```typescript
declare class CloseCurve {
    id: string;
    controlPoints: Cartesian3[];
    viewer: Viewer;
    dragHandler: ScreenSpaceEventHandler;
    width: number;
    color: string;
    editing: boolean;
    primitive: Primitive;
    contextMenu: I_ContextMenu<this>[];
    constructor(viewer: Viewer, onRightClick: (e: any) => void);
    draw(): void;
    private _onRightClick;
    bindContextMenu(content: I_ContextMenu<this>[]): void;
    addHelper(): void;
    onLeftClick(): void;
    startDrag(): void;
    endDrag(): void;
    onDrag(): void;
    /**
     * 更新颜色
     * @param color
     */
    updateColor(color: string): void;
    /**
     * 更新线宽
     */
    updateWidth(width: number): void;
    /**
     * 更新控制点
     */
    updatePositions(positions: Coordinate[]): void;
}
```

### 如何修改右击菜单样式?

提供右击菜单模板`menuContext.vue`，用户可在该vue文件中调整样式。该vue组件的`props`如下，

```typescript
const props = defineProps<{ graphic: BaseEntity; content: I_ContextMenu<BaseEntity>[] }>()
```

修改过程中保持`props`的数据结构。
完成修改后可通过`itemManager.updateMenuContext`方法更新默认的右击菜单组件。

```typescript
import component from "path/to/custom/context-menu"

itemManager.updateMenuContext(component)
```

### 如何向右击菜单添加菜单子项？

在图形实例化（如，`new Point()`）之后，在右击事件触发之前，绑定右击菜单子项，示例代码如下：

```typescript
const contextMenu: I_ContextMenu<BaseEntity>[] = [
  {
    name: "edit",
    label: "编辑",
    callback: () => {
      console.log("edit")
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

  const point = new Point(viewer.value, (e) => {
    current.value = e
    panelVisible.value = true
  })

  point.bindContextMenu(contextMenu)
  point.draw()
```

### 如何在添加标签前定义标签内容？

先修改`label`实例中的`text`属性，再绘制标签

```typescript
  const label = new Label(viewer.value, (e) => {})
  label.text = "自信人生二百年，会当水击二百年。"
  label.draw()
```

## 参考

[前端文档](172.17.100.174:10100)
[苏彭彭](172.17.100.210)
