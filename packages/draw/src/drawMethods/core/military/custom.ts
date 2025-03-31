import type { Color, Viewer } from "mars3d-cesium"
import drawCurve from "./customMilitary/curve"
import drawAttackArrow from "./customMilitary/attackArrow"
import drawSector from "./customMilitary/sector"
// import drawAssemble from "./customMilitary/assemble"
import drawRegularPolygon from "./customMilitary/regularPolygon"
// import drawPatrolLine from "./customMilitary/patrolLine"
// import drawMineLay from "./customMilitary/mineLay"
import drawCloseCurve from "./customMilitary/closeCurve"
// import drawFormationMark from "./customMilitary/formationMark"
// import drawCruiser from "./customMilitary/cruiser"
// import drawSubmarineState from "./customMilitary/submarineState"

function drawCustomMilitary(
  viewer: Viewer,
  options: Record<string, any>,
  callback: (e: any) => void,
  cancelCallback?: () => void
) {
  switch (options.title) {
    case "曲线":
      drawCurve(viewer, options, callback)
      break
    case "攻击箭头":
      drawAttackArrow(viewer, options, callback)
      break
    case "扇形":
      drawSector(viewer, options, "sector", callback)
      break
    case "弧形":
      drawSector(viewer, options, "arc", callback)
      break
    case "弓形":
      drawSector(viewer, options, "arch", callback)
      break
    // case "集结地":
    //   drawAssemble(viewer, options, callback)
    //   break
    case "封闭曲线":
      drawCloseCurve(viewer, options, callback)
      break
    case "正多边形":
      drawRegularPolygon(viewer, options, callback)
      break
    // case "海上巡逻线":
    //   drawPatrolLine(viewer, options, callback)
    //   break
    // case "舰艇编队标识":
    //   drawFormationMark(viewer, options, callback)
    //   break
    // case "布雷":
    //   drawMineLay(viewer, options, callback)
    //   break
    // case "空中巡逻":
    //   drawCruiser(viewer, options, callback)
    //   break
    // case "潜艇水下航行状态":
    //   drawSubmarineState(viewer, options, callback)
    //   break
    default:
  }

  return () => {
    //
  }
}

export default drawCustomMilitary
