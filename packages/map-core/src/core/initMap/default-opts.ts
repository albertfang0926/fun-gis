import type { Viewer } from "cesium"

import type { ICoord3d } from "../../types/geometry"
import type { IMapConfig } from "../../types/index"

const DEFAULT_HOME_POSITION: ICoord3d = [117.28, 31.8, 1e4]

const defaultViewerOpts: Viewer.ConstructorOptions = {
  baseLayerPicker: false, // 图层选择器
  animation: false, // 左下角仪表
  fullscreenButton: false, // 全屏按钮
  geocoder: false, // 右上角查询搜索
  infoBox: false, // 信息框
  homeButton: false, // home按钮
  sceneModePicker: true, // 3d 2d选择器
  selectionIndicator: false, //
  // imageryProviderViewModels: [],
  baseLayer: false,
  timeline: false, // 时间轴
  navigationHelpButton: false, // 右上角帮助按钮
  shouldAnimate: true,
  useBrowserRecommendedResolution: false,
  requestRenderMode: true, // 按需渲染
  maximumRenderTimeChange: Infinity // 静止时不刷新,减少系统消耗
}

interface ResolvedMapConfig {
  homePosition: ICoord3d
  viewerOptions: Record<string, any>
  imagery: false | IMapConfig["imagery"]
  terrain: IMapConfig["terrain"]
  ionToken: string | undefined
  flyToHome: boolean
}

/**
 * 合并用户配置与默认值
 */
function resolveConfig(userConfig?: IMapConfig): ResolvedMapConfig {
  return {
    homePosition: userConfig?.homePosition ?? DEFAULT_HOME_POSITION,
    viewerOptions: {
      ...defaultViewerOpts,
      ...(userConfig?.viewerOptions ?? {})
    },
    imagery: userConfig?.imagery ?? undefined,
    terrain: userConfig?.terrain ?? undefined,
    ionToken: userConfig?.ionToken ?? undefined,
    flyToHome: userConfig?.flyToHome ?? true
  }
}

export { DEFAULT_HOME_POSITION, defaultViewerOpts, resolveConfig }
export type { ResolvedMapConfig }
