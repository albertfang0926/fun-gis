import { Cartesian3, Ion, Viewer } from "cesium"

import type { ICoord3d } from "../../types/geometry"
import type { IMapConfig } from "../../types/index"
import { LayerManager } from "../layer-system"
import { ImageryLayerProvider } from "../layer-system/providers/imagery-provider"
import { TerrainLayerProvider } from "../layer-system/providers/terrain-provider"
import type { ResolvedMapConfig } from "./default-opts"
import { resolveConfig } from "./default-opts"

class CesiumViewer {
  container: string
  viewer: Viewer | null = null
  layerManager: LayerManager
  private config: ResolvedMapConfig

  constructor(container: string, config?: IMapConfig) {
    this.container = container
    this.config = resolveConfig(config)
    this.layerManager = new LayerManager()
  }

  /**
   * 地图初始化
   */
  async initMap() {
    // 设置 Ion Token
    if (this.config.ionToken) {
      Ion.defaultAccessToken = this.config.ionToken
    } else {
      throw new Error("请配置 Ion Token")
    }

    // 处理 imagery: false 时禁用底图
    const viewerOpts = { ...this.config.viewerOptions }
    if (this.config.imagery === false) {
      viewerOpts.baseLayer = false
    }

    this.viewer = new Viewer(this.container, viewerOpts)

    // 加载影像
    await this.applyImagery()

    // 加载地形
    await this.applyTerrain()

    // 飞到初始位置
    if (this.config.flyToHome) {
      this.flyTo(this.config.homePosition)
    }

    this.layerManager.attachViewer("main", this.viewer)
  }

  /**
   * 飞到指定位置
   */
  flyTo(position: ICoord3d) {
    if (!this.viewer) return
    const [lon, lat, alt] = position
    this.viewer.camera.setView({
      destination: Cartesian3.fromDegrees(lon, lat, alt)
    })
  }

  /**
   * 附加额外的 Viewer（如小地图）
   */
  attachViewer(viewerId: string, viewer: Viewer) {
    this.layerManager.attachViewer(viewerId, viewer)
  }

  /**
   * 销毁资源
   */
  destroy() {
    this.layerManager.detachViewer("main")
    this.viewer?.destroy()
    this.viewer = null
  }

  /**
   * 根据 imagery 配置加载影像图层
   */
  private async applyImagery() {
    if (!this.viewer) return
    const imagery = this.config.imagery
    if (imagery === false || imagery === undefined) return

    const provider = new ImageryLayerProvider()
    await provider.addToViewer(this.viewer, imagery, {})
  }

  /**
   * 根据 terrain 配置加载地形
   */
  private async applyTerrain() {
    if (!this.viewer) return
    const terrain = this.config.terrain
    if (!terrain) return

    const provider = new TerrainLayerProvider()
    await provider.addToViewer(this.viewer, terrain, {})
  }
}

export { CesiumViewer }
