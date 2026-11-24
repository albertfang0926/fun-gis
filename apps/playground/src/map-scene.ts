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
  Cartesian2,
  Cartesian3,
  Cartographic,
  Color,
  LabelStyle,
  Math as CesiumMath,
  Rectangle,
  SceneMode,
  SingleTileImageryProvider,
  Viewer
} from "cesium"

export const IMAGERY_URL = import.meta.env.BASE_URL + "bay-imagery.jpg"
export const STATIONS = [
  { name: "金门大桥", longitude: -122.4784, latitude: 37.8199 },
  { name: "恶魔岛", longitude: -122.423, latitude: 37.8267 },
  { name: "海湾大桥", longitude: -122.361, latitude: 37.816 }
]

const CENTER = { longitude: -122.417, latitude: 37.821 }
const ROUTE_ID = "bay-route"
const COLOR = Color.fromCssColorString("#C73E3A")

interface ISceneEvents {
  onReady: () => void
  onViewChange: (longitude: number, latitude: number, heading: number) => void
  onDrawUpdate: (points: number) => void
  onDrawEnd: () => void
  onDrawCancel: () => void
  onRenderError: () => void
}

export function createMapScene(container: HTMLElement, events: ISceneEvents) {
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

  const imagery = viewer.imageryLayers.addImageryProvider(
    new SingleTileImageryProvider({
      url: IMAGERY_URL,
      rectangle: Rectangle.fromDegrees(-122.76, 37.44, -121.99, 38.13),
      tileWidth: 2464,
      tileHeight: 2208
    })
  )
  viewer.scene.globe.cartographicLimitRectangle =
    imagery.imageryProvider.rectangle
  imagery.contrast = 1.04
  imagery.saturation = 0.85

  const layers = new LayerManager()
  layers.createLayer({
    id: ROUTE_ID,
    name: "湾区示例航线",
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
    name: "湾区地标"
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
  imagery.imageryProvider.errorEvent.addEventListener(events.onRenderError)
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
    const height = viewer.canvas.clientWidth < 600 ? 25500 : 22500
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
      imagery.saturation = monochrome ? 0 : 0.85
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
        destination: Cartesian3.fromDegrees(longitude, latitude, 4600),
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
