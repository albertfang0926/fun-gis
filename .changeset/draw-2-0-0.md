---
"@fun-gis/draw": major
---

**2.0.0：统一重构与发布准备**

- 运行环境迁移：剔除 mars3d / mars3d-cesium 依赖，全面适配 cesium ^1.133（peerDependency，由宿主提供）
- 新增 `DrawTool` 统一门面：`init` / `activate` / `deactivate` / `on|off`，内置 33 种图形注册表，统一五段式事件（drawStart / drawUpdate / drawEnd / editStart / editEnd）
- 并入原 `@fun-gis/plot` 全部 19 种军事标绘图形（控制点编辑、整体拖拽、生长动画），与 primitive 系重名的图形以 `Entity` 后缀注册
- v1 直接类式 API（14 个 middleware 类与 `itemManager`）保留但标记 `@deprecated`
- 移除 antd / style-import 等未使用依赖，peerDependencies 收敛为 cesium + vue
- exports 元数据修正：移除从未产出的 UMD require 入口，keywords 更正为 cesium/gis 相关
