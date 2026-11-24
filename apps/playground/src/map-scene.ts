import { destroySharedEventSource, PlotManager } from "@fun-gis/draw"
import {
  type CompositeEntity,
  CompositeType,
  DataManager,
  type DrawEntity,
  DrawType
} from "@fun-gis/entity-manager"
import { LayerDataSourceType, LayerManager } from "@fun-gis/map-core"
import {
  ArcGisMapServerImageryProvider,
  Cartesian2,
  Cartesian3,
  Cartographic,
  Color,
  LabelStyle,
  Math as CesiumMath,
  SceneMode,
  Viewer
} from "cesium"

// The newer services.arcgisonline.com host is not reachable from every network.
const IMAGERY_URL =
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"
const IMAGERY_ERROR_MESSAGE = "地图影像加载失败，请检查网络连接。"

// WGS-84 coordinates, as Cesium expects (not the GCJ-02 used by Chinese map apps).
export const STATIONS = [
  { name: "中安创谷", longitude: 117.094209, latitude: 31.834718 },
  {
    name: "合肥科技馆（蜀西湖馆区）",
    longitude: 117.122265,
    latitude: 31.84175
  },
  { name: "中科大先研院", longitude: 117.123906, latitude: 31.829588 }
]

// 蜀西湖, center of the lake.
const CENTER = { longitude: 117.115804, latitude: 31.83891 }
const ROUTE_ID = "shuxi-lake-route"
const COLOR = Color.fromCssColorString("#C73E3A")

interface ISceneEvents {
  onReady: () => void
  onViewChange: (longitude: number, latitude: number, heading: number) => void
  onDrawUpdate: (points: number) => void
  onDrawEnd: () => void
  onDrawCancel: () => void
  onRenderError: () => void
}

// Error whose message is meant to be shown on the page.
export class SceneMessageError extends Error {}

async function createImagery() {
  try {
    const provider = await ArcGisMapServerImageryProvider.fromUrl(IMAGERY_URL, {
      enablePickFeatures: false
    })
    // Esri's attribution comes from the service metadata. Show it on the map, not in a popover.
    provider.credit.showOnScreen = true
    return provider
  } catch (error) {
    console.error("[playground] Esri World Imagery failed to load", error)
    throw new SceneMessageError(IMAGERY_ERROR_MESSAGE)
  }
}

export async function createMapScene(
  container: HTMLElement,
  events: ISceneEvents
) {
  const imageryProvider = await createImagery()
  const viewer = new Viewer(container, {
    animation: false,
    baseLayer: false,
    baseLayerPicker: false,
    fullscreenButton: false,
    geocoder: false,
    homeButton: false,
    infoBox: false,
    navigationHelpButton: false,
    sceneModePicker: false,
    selectionIndicator: false,
    timeline: false,
    skyBox: false,
    skyAtmosphere: false,
    requestRenderMode: true
  })

  viewer.scene.globe.baseColor = Color.fromCssColorString("#182d2b")
  viewer.scene.backgroundColor = viewer.scene.globe.baseColor
  viewer.scene.globe.showGroundAtmosphere = false
  viewer.scene.screenSpaceCameraController.minimumZoomDistance = 800
  viewer.scene.screenSpaceCameraController.maximumZoomDistance = 65000

  const imagery = viewer.imageryLayers.addImageryProvider(imageryProvider)

  const layers = new LayerManager()
  layers.createLayer({
    id: ROUTE_ID,
    name: "蜀西湖示例航线",
    dataSourceType: LayerDataSourceType.GeoJson,
    sourceConfig: {
      type: LayerDataSourceType.GeoJson,
      data: {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: STATIONS.map(({ longitude, latitude }) => [
            longitude,
            latitude
          ])
        }
      },
      strokeWidth: 3,
      clampToGround: false
    },
    style: {
      stroke: Color.fromCssColorString("#ffc0a3")
    }
  })
  layers.attachViewer("playground", viewer)

  const entities = new DataManager(viewer)
  const stationGroup = entities.createEntity<CompositeEntity>("composite", {
    type: CompositeType.Planning,
    name: "蜀西湖周边地标"
  })
  const stations = STATIONS.map((station) => {
    const entity = entities.createEntity<DrawEntity>("draw", {
      type: DrawType.Point,
      entity: viewer.entities.add({
        position: Cartesian3.fromDegrees(station.longitude, station.latitude),
        point: {
          pixelSize: 12,
          color: COLOR,
          outlineColor: Color.WHITE,
          outlineWidth: 2,
          disableDepthTestDistance: Infinity
        },
        label: {
          text: station.name,
          font: "600 14px sans-serif",
          fillColor: Color.WHITE,
          outlineColor: Color.fromCssColorString("#172822"),
          outlineWidth: 5,
          style: LabelStyle.FILL_AND_OUTLINE,
          pixelOffset: new Cartesian2(0, -22),
          disableDepthTestDistance: Infinity
        }
      })
    })
    entities.addChildToComposite(stationGroup.id, entity)
    return entity
  })

  let plot = makePlotManager()
  viewer.scene.renderError.addEventListener(events.onRenderError)
  const stopWaiting = viewer.scene.postRender.addEventListener(() => {
    if (viewer.scene.globe.tilesLoaded) {
      stopWaiting()
      events.onReady()
    }
  })

  const middle = new Cartesian2()
  viewer.scene.postRender.addEventListener(() => {
    middle.x = viewer.canvas.clientWidth / 2
    middle.y = viewer.canvas.clientHeight / 2
    const point = viewer.camera.pickEllipsoid(middle)
    if (!point) return
    const position = Cartographic.fromCartesian(point)
    events.onViewChange(
      CesiumMath.toDegrees(position.longitude),
      CesiumMath.toDegrees(position.latitude),
      CesiumMath.toDegrees(viewer.camera.heading)
    )
  })

  function home() {
    viewer.camera.cancelFlight()
    const height = viewer.canvas.clientWidth < 600 ? 5400 : 4000
    viewer.camera.setView({
      destination: Cartesian3.fromDegrees(
        CENTER.longitude,
        CENTER.latitude,
        height
      ),
      orientation: { heading: 0, pitch: -Math.PI / 2, roll: 0 }
    })
    viewer.scene.requestRender()
  }

  function makePlotManager() {
    const manager = new PlotManager(viewer)
    manager.on("drawUpdate", ({ instance }) => {
      if (instance.getState() === "drawing") {
        events.onDrawUpdate(instance.getPoints().length)
      }
    })
    manager.on("drawEnd", events.onDrawEnd)
    manager.on("drawCancel", events.onDrawCancel)
    return manager
  }

  home()

  return {
    home,
    orientNorth() {
      viewer.camera.setView({
        orientation: { heading: 0, pitch: viewer.camera.pitch, roll: 0 }
      })
      viewer.scene.requestRender()
    },
    zoom(direction: 1 | -1) {
      viewer.camera.zoomIn(
        direction * viewer.camera.positionCartographic.height * 0.22
      )
      viewer.scene.requestRender()
    },
    setMode(mode: "2D" | "3D") {
      const scene = viewer.scene
      const target = mode === "2D" ? SceneMode.SCENE2D : SceneMode.SCENE3D
      if (scene.mode === target) return
      if (mode === "2D") scene.morphTo2D(0)
      else scene.morphTo3D(0)
      home()
    },
    setMonochrome(monochrome: boolean) {
      imagery.saturation = monochrome ? 0 : 1
      viewer.scene.requestRender()
    },
    setRouteVisible(visible: boolean) {
      layers.setLayerVisibility(ROUTE_ID, visible)
      viewer.scene.requestRender()
    },
    setStationVisible(index: number, visible: boolean) {
      entities.setEntityVisibility(stations[index].id, visible)
      viewer.scene.requestRender()
    },
    focusStation(index: number) {
      const { longitude, latitude } = STATIONS[index]
      viewer.camera.flyTo({
        destination: Cartesian3.fromDegrees(longitude, latitude, 1500),
        orientation: { heading: 0, pitch: -Math.PI / 2, roll: 0 },
        duration: 0.8
      })
    },
    draw(type: string) {
      plot.cancel()
      plot.activate(type, {
        style: {
          material: type === "Curve" ? COLOR : COLOR.withAlpha(0.52),
          outlineMaterial: COLOR,
          outlineWidth: 3,
          lineWidth: 4
        }
      })
      viewer.scene.requestRender()
    },
    cancelDraw() {
      plot.cancel()
      viewer.scene.requestRender()
    },
    finishDraw() {
      plot.deactivate()
      viewer.scene.requestRender()
    },
    clearPlots() {
      plot.destroy()
      plot = makePlotManager()
      viewer.scene.requestRender()
    },
    destroy() {
      plot.destroy()
      destroySharedEventSource(viewer)
      layers.detachViewer("playground")
      viewer.destroy()
    }
  }
}
