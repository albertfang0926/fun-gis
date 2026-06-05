import { ILayerFilter } from "../types"

export abstract class BaseLayerFilter implements ILayerFilter {
  abstract readonly type: string

  abstract matches(
    entity: any,
    expression: Record<string, any>
  ): boolean

  filter(entities: any[], expression: Record<string, any>): string[] {
    const result: string[] = []
    for (const entity of entities) {
      if (this.matches(entity, expression)) {
        if (entity.id) {
          result.push(entity.id)
        }
      }
    }
    return result
  }
}
