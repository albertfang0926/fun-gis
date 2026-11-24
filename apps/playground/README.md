# fun-gis 地图实验室

在仓库根目录用 `pnpm -F playground dev` 启动，或用
`pnpm -F playground build` 生成静态产物。

在地图旁切换功能模块。地图核心演示底图样式和 GeoJSON 航线，
图形标绘演示曲线、多边形和圆形，实体管理演示地标显隐与定位。
全景照片使用仓库自带的 `sphere.jpg`，可视化特效使用 `VolumeBar`。
交互地图和全景照片需要浏览器支持 WebGL。

默认场景为合肥高新区蜀西湖。地图中心是蜀西湖，地标和航线位于蜀西湖周边，
坐标均为 WGS-84。

## 底图说明

底图使用 Esri World Imagery 的公开瓦片接口，无需密钥，版权信息由 Cesium
显示在地图左下角。它不是 Esri 文档中需要令牌的正式接口，对外发布前请确认
符合 Esri 的使用条款。
