import { ILayerFilter } from "../types"
import { PropertyFilter } from "./property-filter"
import { SpatialFilter } from "./spatial-filter"

export class FilterRegistry {
  private filters: Map<string, ILayerFilter> = new Map()

  constructor() {
    this.register(new PropertyFilter())
    this.register(new SpatialFilter())
  }

  register(filter: ILayerFilter): void {
    this.filters.set(filter.type, filter)
  }

  get(type: string): ILayerFilter | undefined {
    return this.filters.get(type)
  }

  has(type: string): boolean {
    return this.filters.has(type)
  }

  getAll(): ILayerFilter[] {
    return Array.from(this.filters.values())
  }

  unregister(type: string): void {
    this.filters.delete(type)
  }
}
