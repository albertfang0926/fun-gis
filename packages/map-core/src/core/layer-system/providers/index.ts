import { LayerDataSourceType, ILayerProvider } from "../types"

export class ProviderRegistry {
  private providers: Map<LayerDataSourceType, ILayerProvider> = new Map()

  register(provider: ILayerProvider): void {
    this.providers.set(provider.dataSourceType, provider)
  }

  get(type: LayerDataSourceType): ILayerProvider | undefined {
    return this.providers.get(type)
  }

  has(type: LayerDataSourceType): boolean {
    return this.providers.has(type)
  }

  getAll(): ILayerProvider[] {
    return Array.from(this.providers.values())
  }

  unregister(type: LayerDataSourceType): void {
    this.providers.delete(type)
  }
}
