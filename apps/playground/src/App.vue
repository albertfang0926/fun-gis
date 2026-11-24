<script setup lang="ts">
import {
  Activity,
  ArrowUpRight,
  Camera,
  ChevronRight,
  Circle,
  Compass,
  Crosshair,
  Globe2,
  Layers3,
  MapPin,
  Minus,
  Mouse,
  Pentagon,
  PenTool,
  Plus,
  Route,
  X
} from "@lucide/vue"
import { defineAsyncComponent, onBeforeUnmount, onMounted, ref } from "vue"

import VolumeBar from "../../../packages/effect/VolumeBar.vue"
import panoramaUrl from "../../../packages/panoramic-photo/playground/src/assets/sphere.jpg"
import { createMapScene, SceneMessageError, STATIONS } from "./map-scene"

const PanoramicPhoto = defineAsyncComponent(async () => {
  const { PanoramicPhoto } = await import("@fun-gis/panoramic-photo")
  return PanoramicPhoto
})

const modules = [
  { id: "map", title: "地图核心", name: "map-core", icon: Globe2 },
  { id: "plot", title: "图形标绘", name: "draw", icon: PenTool },
  { id: "entities", title: "实体管理", name: "entity-manager", icon: MapPin },
  { id: "panorama", title: "全景照片", name: "panoramic-photo", icon: Camera },
  { id: "effect", title: "可视化特效", name: "effect", icon: Activity }
] as const

const tools = [
  {
    type: "Curve",
    label: "曲线",
    icon: Route,
    minimum: 2,
    instruction: "在地图上选至少两个控制点。"
  },
  {
    type: "Polygon",
    label: "多边形",
    icon: Pentagon,
    minimum: 3,
    instruction: "在地图上选至少三个控制点。"
  },
  {
    type: "Circle",
    label: "圆形",
    icon: Circle,
    minimum: null,
    instruction: "点击圆心，再点击一点确定半径。"
  }
]

const RENDER_ERROR_MESSAGE = "交互地图无法加载，请确认浏览器支持 WebGL。"
const mapContainer = ref<HTMLElement>()
const activeModule = ref(0)
const activeTool = ref<(typeof tools)[number]>()
const plots = ref(0)
const drawPoints = ref(0)
const mode = ref<"2D" | "3D">("3D")
const monochrome = ref(false)
const routeVisible = ref(true)
const stationsVisible = ref(STATIONS.map(() => true))
const volume = ref(74)
const mapState = ref<"loading" | "ready" | "error">("loading")
const mapError = ref("")
const status = ref("")
const longitude = ref(117.115804)
const latitude = ref(31.83891)
const heading = ref(0)
const yaw = ref(0)
const fov = ref<number>()
const panoramaOptions = { navbar: ["zoom", "fullscreen"] }
let scene: Awaited<ReturnType<typeof createMapScene>> | undefined
let disposed = false

function coordinate(value: number, positive: string, negative: string) {
  return `${Math.abs(value).toFixed(4)}° ${value < 0 ? negative : positive}`
}

function selectModule(index: number) {
  if (index === activeModule.value) return
  scene?.cancelDraw()
  activeModule.value = index
  status.value = ""
}

function returnToLake() {
  selectModule(0)
  scene?.home()
}

function setMode(value: "2D" | "3D") {
  if (mode.value === value) return
  scene?.cancelDraw()
  scene?.setMode(value)
  mode.value = value
}

function selectBasemap(value: boolean) {
  monochrome.value = value
  scene?.setMonochrome(value)
}

function toggleRoute() {
  routeVisible.value = !routeVisible.value
  scene?.setRouteVisible(routeVisible.value)
}

function toggleStation(index: number) {
  stationsVisible.value[index] = !stationsVisible.value[index]
  scene?.setStationVisible(index, stationsVisible.value[index])
}

function beginDraw(tool: (typeof tools)[number]) {
  scene?.draw(tool.type)
  activeTool.value = tool
  drawPoints.value = 0
  status.value = ""
}

function clearDrawings() {
  scene?.clearPlots()
  plots.value = 0
  status.value = "已清除全部标绘。"
}

onMounted(async () => {
  try {
    const created = await createMapScene(mapContainer.value!, {
      onReady() {
        if (mapState.value === "loading") mapState.value = "ready"
      },
      onViewChange(lon, lat, angle) {
        longitude.value = lon
        latitude.value = lat
        heading.value = angle
      },
      onDrawUpdate(points) {
        drawPoints.value = points
      },
      onDrawEnd() {
        plots.value++
        activeTool.value = undefined
        status.value = "标绘已完成。可拖动控制点调整图形。"
      },
      onDrawCancel() {
        activeTool.value = undefined
        status.value = "已取消本次标绘。"
      },
      onRenderError() {
        mapState.value = "error"
        mapError.value = RENDER_ERROR_MESSAGE
      }
    })
    if (disposed) created.destroy()
    else scene = created
  } catch (error) {
    console.error("[playground] Failed to create the map scene", error)
    mapState.value = "error"
    mapError.value =
      error instanceof SceneMessageError ? error.message : RENDER_ERROR_MESSAGE
  }
})

onBeforeUnmount(() => {
  disposed = true
  scene?.destroy()
})
</script>

<template>
  <div class="playground">
    <header class="topbar">
      <a class="brand" href="./" aria-label="fun-gis 首页">
        <span class="brand-mark"><Globe2 :size="23" /></span>
        <span>fun<span class="brand-hyphen">–</span>gis</span>
      </a>
      <span class="topbar-divider"></span>
      <span class="topbar-name">Playground</span>
      <a
        class="source-link"
        href="https://github.com/albertfang0926/fun-gis"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub <ArrowUpRight :size="15" />
      </a>
    </header>

    <aside class="sidebar">
      <nav aria-label="功能模块">
        <p class="sidebar-heading">功能模块</p>
        <button
          v-for="(item, index) in modules"
          :key="item.id"
          type="button"
          class="module-link"
          :aria-current="activeModule === index ? 'true' : undefined"
          @click="selectModule(index)"
        >
          <component :is="item.icon" :size="19" class="module-icon" />
          <span class="module-label">
            <strong>{{ item.title }}</strong>
            <small>{{ item.name }}</small>
          </span>
          <ChevronRight :size="16" class="module-arrow" />
        </button>
      </nav>
      <div class="sidebar-footer">
        <Layers3 :size="16" /> Cesium · Vue 3 · TypeScript
      </div>
    </aside>

    <main class="workspace">
      <header class="workspace-header">
        <div>
          <h1>地图实验室</h1>
          <p>在同一张地图上探索 fun-gis 的各项能力。</p>
        </div>
        <button
          type="button"
          class="location-button"
          :disabled="mapState !== 'ready'"
          @click="returnToLake"
        >
          <MapPin :size="17" /> 合肥高新区
        </button>
      </header>

      <div class="workbench">
        <section class="map-frame" aria-label="交互地图">
          <div class="map-stage">
            <div
              ref="mapContainer"
              class="map-canvas"
              :class="{ 'map-unavailable': mapState !== 'ready' }"
            ></div>
            <template v-if="modules[activeModule].id !== 'panorama'">
              <div class="map-caption">
                <span class="caption-line"></span>
                <div>
                  <strong>合肥高新区 · 蜀西湖</strong><small>Shuxi Lake</small>
                </div>
              </div>
              <div class="mode-control" role="group" aria-label="地图视图模式">
                <button
                  v-for="value in (['2D', '3D'] as const)"
                  :key="value"
                  type="button"
                  :aria-pressed="mode === value"
                  :disabled="mapState !== 'ready'"
                  @click="setMode(value)"
                >
                  {{ value }}
                </button>
              </div>
              <div class="map-navigation">
                <button
                  type="button"
                  class="compass-button"
                  aria-label="恢复朝北"
                  title="恢复朝北"
                  :disabled="mapState !== 'ready'"
                  @click="scene?.orientNorth()"
                >
                  <Compass
                    :size="23"
                    :style="{ transform: 'rotate(' + -heading + 'deg)' }"
                  />
                </button>
                <div class="zoom-controls">
                  <button
                    type="button"
                    aria-label="放大"
                    title="放大"
                    :disabled="mapState !== 'ready'"
                    @click="scene?.zoom(1)"
                  >
                    <Plus :size="20" />
                  </button>
                  <button
                    type="button"
                    aria-label="缩小"
                    title="缩小"
                    :disabled="mapState !== 'ready'"
                    @click="scene?.zoom(-1)"
                  >
                    <Minus :size="20" />
                  </button>
                </div>
                <button
                  type="button"
                  aria-label="回到初始视角"
                  title="回到初始视角"
                  :disabled="mapState !== 'ready'"
                  @click="scene?.home()"
                >
                  <Crosshair :size="19" />
                </button>
              </div>
              <div v-if="mapState !== 'ready'" class="map-notice" role="status">
                {{ mapState === "loading" ? "正在加载交互地图…" : mapError }}
              </div>
              <div v-else-if="activeTool" class="map-notice draw-notice">
                <span role="status">{{ activeTool.instruction }}</span>
                <button
                  v-if="activeTool.minimum !== null"
                  type="button"
                  :disabled="drawPoints < activeTool.minimum"
                  @click="scene?.finishDraw()"
                >
                  完成
                </button>
              </div>
            </template>
            <div v-else class="panorama-stage">
              <PanoramicPhoto
                :panorama="panoramaUrl"
                :auto-heading="false"
                :options="panoramaOptions"
                @position-updated="yaw = ($event.yaw * 180) / Math.PI"
                @zoom-updated="fov = $event"
              />
              <button
                class="close-panorama"
                type="button"
                @click="selectModule(0)"
              >
                <X :size="16" /> 返回地图
              </button>
            </div>
          </div>
          <footer class="map-status">
            <template v-if="modules[activeModule].id === 'panorama'">
              <span><Camera :size="15" /> 全景照片</span
              ><span>方位角 {{ Math.round((yaw + 360) % 360) }}°</span>
              <span v-if="fov !== undefined">视场角 {{ fov }}°</span>
            </template>
            <template v-else>
              <span
                ><Crosshair :size="15" />
                <span class="desktop-only">视图中心</span></span
              >
              <span>{{ coordinate(latitude, "N", "S") }}</span>
              <span>{{ coordinate(longitude, "E", "W") }}</span>
              <span class="crs">WGS 84</span>
            </template>
          </footer>
        </section>

        <section class="inspector" :aria-label="modules[activeModule].title">
          <header class="inspector-header">
            <span class="inspector-icon"
              ><component :is="modules[activeModule].icon" :size="20"
            /></span>
            <div>
              <h2>{{ modules[activeModule].title }}</h2>
              <code>{{
                activeModule === 4
                  ? "packages/effect"
                  : "@fun-gis/" + modules[activeModule].name
              }}</code>
            </div>
          </header>
          <div v-if="activeModule === 0" class="inspector-body">
            <p class="description">
              切换底图样式、管理图层，探索 Cesium 地图视图。
            </p>
            <h3>底图样式</h3>
            <div class="basemaps" role="group" aria-label="底图样式">
              <button
                v-for="(label, index) in ['自然色', '灰阶']"
                :key="label"
                type="button"
                :aria-pressed="monochrome === Boolean(index)"
                :disabled="mapState !== 'ready'"
                @click="selectBasemap(Boolean(index))"
              >
                <span
                  class="basemap-preview"
                  :class="{ grayscale: index }"
                ></span>
                {{ label }}
              </button>
            </div>
            <div class="panel-section">
              <h3>叠加图层</h3>
              <label class="toggle-row">
                <Route :size="18" />
                <span>蜀西湖示例航线</span>
                <input
                  :checked="routeVisible"
                  type="checkbox"
                  role="switch"
                  :disabled="mapState !== 'ready'"
                  @change="toggleRoute()"
                />
              </label>
            </div>
            <div class="panel-note">
              <Mouse :size="17" /><span
                >拖动平移 · 滚轮缩放<br />3D 模式下按住 Ctrl 拖动可倾斜。</span
              >
            </div>
          </div>
          <div v-else-if="activeModule === 1" class="inspector-body">
            <p class="description">
              选择图形，在地图上落点。绘制后可以拖动控制点调整形状。
            </p>
            <h3>绘制工具</h3>
            <div class="draw-tools" role="group" aria-label="绘制工具">
              <button
                v-for="tool in tools"
                :key="tool.type"
                type="button"
                :aria-pressed="activeTool?.type === tool.type"
                :disabled="mapState !== 'ready' || mode === '2D'"
                @click="beginDraw(tool)"
              >
                <component :is="tool.icon" :size="21" />{{ tool.label }}
              </button>
            </div>
            <div class="panel-section plot-controls">
              <span>已绘制 {{ plots }} 个图形</span>
              <button
                type="button"
                :disabled="plots === 0"
                @click="clearDrawings"
              >
                清除
              </button>
            </div>
            <p v-if="mode === '2D'" class="panel-note">
              切换到 3D 视图开始标绘。
            </p>
            <button
              v-else-if="activeTool"
              type="button"
              class="secondary-button"
              @click="scene?.cancelDraw()"
            >
              取消绘制 <kbd>Esc</kbd>
            </button>
            <p v-if="status" class="panel-note" role="status">{{ status }}</p>
          </div>
          <div v-else-if="activeModule === 2" class="inspector-body">
            <p class="description">
              管理蜀西湖周边地标的可见性。点击名称，飞到地标上方。
            </p>
            <h3>蜀西湖周边地标</h3>
            <div
              v-for="(station, index) in STATIONS"
              :key="station.name"
              class="toggle-row station-row"
            >
              <button
                type="button"
                :disabled="mapState !== 'ready'"
                @click="scene?.focusStation(index)"
              >
                <MapPin :size="17" />{{ station.name }}
              </button>
              <input
                :checked="stationsVisible[index]"
                type="checkbox"
                role="switch"
                :aria-label="'显示' + station.name"
                :disabled="mapState !== 'ready'"
                @change="toggleStation(index)"
              />
            </div>
          </div>
          <div v-else-if="activeModule === 3" class="inspector-body">
            <p class="description">
              拖动查看 360° 示例照片，滚动鼠标或使用查看器的按钮缩放。
            </p>
            <div class="panel-note">
              <Camera :size="17" /><span>使用全景包自带的示例照片。</span>
            </div>
          </div>
          <div v-else class="inspector-body">
            <p class="description">
              拖动滑块，查看动态能量柱对强度变化的响应。
            </p>
            <div class="effect-preview">
              <VolumeBar :volume="volume" :segment-count="18" />
            </div>
            <label class="range-label" for="volume"
              >强度 <output for="volume">{{ volume }}%</output></label
            >
            <input
              id="volume"
              v-model.number="volume"
              class="volume-range"
              type="range"
              min="0"
              max="100"
            />
          </div>
        </section>
      </div>
    </main>
  </div>
</template>
