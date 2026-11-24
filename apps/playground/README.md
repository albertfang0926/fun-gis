# fun-gis 地图实验室

在仓库根目录用 `pnpm -F playground dev` 启动，或用
`pnpm -F playground build` 生成静态产物。

在地图旁切换功能模块。地图核心演示底图样式和 GeoJSON 航线，
图形标绘演示曲线、多边形和圆形，实体管理演示地标显隐与定位。
全景照片使用仓库自带的 `sphere.jpg`，可视化特效使用 `VolumeBar`。

默认场景为旧金山湾区。底图随项目打包，可在本地查看。航线用于演示图层管理。
交互地图和全景照片需要浏览器支持 WebGL。

Contains modified Copernicus Sentinel data 2024. 底图由
`S2A_10SEG_20240702_0_L2A` 和 `S2A_10SEH_20240702_0_L2A`
的真彩色影像重投影、裁切和调色得到。
[Earth Search 数据目录](https://registry.opendata.aws/sentinel-2-l2a-cogs/) ·
[Copernicus Sentinel 数据许可](https://ewds.climate.copernicus.eu/licences/ec-sentinel)
