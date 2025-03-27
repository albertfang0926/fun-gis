<template>
  <div id="map-container" class="map-container"></div>
  <div id="heatmap-container" style="position: absolute"></div>
  <DemoPanel v-if="mapMounted"></DemoPanel>
</template>

<script setup lang="ts">
import * as mars3d from "mars3d"
import * as Cesium from "mars3d-cesium"
import "mars3d/mars3d.css"
import { onMounted, provide, shallowRef, ref } from "vue"
// components
import DemoPanel from "./components/demoPanel.vue"
import { itemManager } from "../../src/drawMethods/manager/primitive"

const viewer = shallowRef<Cesium.Viewer | undefined>()
const mapMounted = ref(false)
provide("cesium-viewer", viewer)

onMounted(() => {
  function initMap() {
    // 创建三维地球场景
    const map = new mars3d.Map("map-container", {
      scene: {
        // contextOptions: {
        //   webgl: { alpha: true, powerPreference: "high-performance" }
        // },
        center: { lng: 116.4, lat: 19, alt: 2e6, heading: 0, pitch: -90 },
        showSun: true,
        showMoon: true,
        showSkyBox: true,
        showSkyAtmosphere: false, // 关闭球周边的白色轮廓 map.scene.skyAtmosphere = false
        fog: true,
        fxaa: true,
        globe: {
          showGroundAtmosphere: false, // 关闭大气（球表面白蒙蒙的效果）
          depthTestAgainstTerrain: false,
          baseColor: "#546a53"
        },
        cameraController: {
          zoomFactor: 3.0,
          minimumZoomDistance: 1,
          maximumZoomDistance: 50000000,
          enableRotate: true,
          enableZoom: true
        },
        mapProjection: mars3d.CRS.EPSG4326, // mars3d.CRS.EPSG3857, // 2D下展示墨卡托投影
        mapMode2D: Cesium.MapMode2D.INFINITE_SCROLL // 2D下左右一直可以滚动重复世界地图
      },
      control: {
        baseLayerPicker: true, // basemaps底图切换按钮
        homeButton: true, // 视角复位按钮
        sceneModePicker: true, // 二三维切换按钮
        navigationHelpButton: true, // 帮助按钮
        fullscreenButton: true, // 全屏按钮
        contextmenu: { hasDefault: true } // 右键菜单
      },
      // terrain: {
      //   url: "map/terrainAllWorld",
      //   show: true
      // },
      basemaps: [
        {
          pid: 10,
          name: "天地图卫星",
          icon: "https://data.mars3d.cn/img/thumbnail/basemap/tdt_img.jpg",
          type: "tdt",
          layer: "img_d",
          key: ["0011520ddc5820dde8c05bb06fe0bfcb"],
          show: true
        }
      ]
    })

    // 打印测试信息
    console.log("mars3d的Map主对象构造完成", map)
    console.log("其中Cesium原生的Cesium.Viewer为", map.viewer)

    console.log(
      "当前电脑是否支持webgl2",
      Cesium.FeatureDetection.supportsWebgl2(map.scene)
    )

    return map
  }
  const map = initMap()
  viewer.value = map.viewer
  mapMounted.value = true
  map.unbindContextMenu()

  // const graphicLayer = new mars3d.layer.GraphicLayer()
  // map.addLayer(graphicLayer)
  // const graphic = new mars3d.graphic.PointEntity({
  //   position: new mars3d.LngLatPoint(116, 19),
  //   style: {}
  // })
  // graphic.bindContextMenu([{ text: "gggggggggggggggg" }])
  // graphicLayer.addGraphic(graphic)

  itemManager.init(map.viewer)
  // map.on(mars3d.EventType.rightClick, (e) => {
  //   const pick = map.viewer.scene.pick(e.position)
  //   if (pick && itemManager.has(pick.id.uuid)) {
  //     // pass
  //   }
  // })

  // addMilitaryIcon(
  //   map.viewer,
  //   { lon: 120, lat: 19 },
  //   "航空器类军标",
  //   "反潜巡逻机",
  //   "#ffff00"
  // )

  // addHeatmapChart()
  // addPrimitive(map.viewer)
})

// function addPrimitive(viewer: Cesium.Viewer) {
//   const geometryInstances = new Cesium.GeometryInstance({
//     geometry: new Cesium.PolylineGeometry({
//       positions: [
//         [114, 20],
//         [115, 20]
//       ].map((p) => Cesium.Cartesian3.fromDegrees(p[0], p[1]))
//     })
//   })
//   const appearance = new Cesium.PolylineMaterialAppearance({
//     material: Cesium.Material.fromType("Color", { color: Cesium.Color.fromCssColorString("#ff0000") })
//   })

//   const primitive = new Cesium.Primitive({ geometryInstances, appearance })

//   viewer.scene.primitives.add(primitive)
// }
</script>

<style scoped lang="less">
.map-container {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
