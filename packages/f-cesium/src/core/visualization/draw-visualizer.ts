import { Entity, Cartesian3, Color } from "cesium"
import { BaseVisualizer, VisualizerOptions } from "./base-visualizer"
import { DrawEntity, DrawType } from "../data-management"

export interface DrawVisualizerOptions extends VisualizerOptions {
  defaultColor?: string
  defaultWidth?: number
}

export class DrawVisualizer extends BaseVisualizer<DrawEntity> {
  visualize(drawEntity: DrawEntity): Entity {
    const { type, properties } = drawEntity
    const style = this.options.style || {}

    switch (type) {
      case DrawType.Point:
        return this.createPoint(properties.position, style)
      case DrawType.Line:
        return this.createPolyline(properties.positions, style)
      case DrawType.Polygon:
        return this.createPolygon(properties.positions, style)
      default:
        throw new Error(`Unsupported draw type: ${type}`)
    }
  }

  private createPoint(
    position: Cartesian3,
    style: Record<string, any>
  ): Entity {
    return this.viewer.entities.add({
      position,
      point: {
        pixelSize: style.size || 10,
        color: Color.fromCssColorString(style.color || "#ffffff"),
        outlineColor: Color.fromCssColorString(style.outlineColor || "#000000"),
        outlineWidth: style.outlineWidth || 2
      }
    })
  }

  private createPolyline(
    positions: Cartesian3[],
    style: Record<string, any>
  ): Entity {
    return this.viewer.entities.add({
      polyline: {
        positions,
        width: style.width || 2,
        material: Color.fromCssColorString(style.color || "#ffffff"),
        clampToGround: style.clampToGround ?? true
      }
    })
  }

  private createPolygon(
    positions: Cartesian3[],
    style: Record<string, any>
  ): Entity {
    return this.viewer.entities.add({
      polygon: {
        hierarchy: positions,
        material: Color.fromCssColorString(
          style.fillColor || "#ffffff"
        ).withAlpha(style.opacity || 0.5),
        outline: true,
        outlineColor: Color.fromCssColorString(style.outlineColor || "#000000"),
        outlineWidth: style.outlineWidth || 2
      }
    })
  }

  updateStyle(entity: Entity, style: Record<string, any>): void {
    if (entity.point) {
      Object.assign(entity.point, {
        pixelSize: style.size,
        color: style.color && Color.fromCssColorString(style.color),
        outlineColor:
          style.outlineColor && Color.fromCssColorString(style.outlineColor),
        outlineWidth: style.outlineWidth
      })
    } else if (entity.polyline) {
      Object.assign(entity.polyline, {
        width: style.width,
        material: style.color && Color.fromCssColorString(style.color)
      })
    } else if (entity.polygon) {
      Object.assign(entity.polygon, {
        material:
          style.fillColor &&
          Color.fromCssColorString(style.fillColor).withAlpha(
            style.opacity || 0.5
          ),
        outlineColor:
          style.outlineColor && Color.fromCssColorString(style.outlineColor),
        outlineWidth: style.outlineWidth
      })
    }
  }

  clear(entity: Entity): void {
    this.viewer.entities.remove(entity)
  }
}
