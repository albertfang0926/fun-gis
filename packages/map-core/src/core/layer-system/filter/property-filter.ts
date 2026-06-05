import { BaseLayerFilter } from "./base-filter"
import { IPropertyFilterExpression } from "../types"

export class PropertyFilter extends BaseLayerFilter {
  readonly type = "property"

  matches(entity: any, expression: Record<string, any>): boolean {
    const rules = expression.rules as IPropertyFilterExpression[]
    if (!rules || !Array.isArray(rules)) return true

    const logic = (expression.logic as string) || "and"

    const results = rules.map((rule) => this.evaluateRule(entity, rule))

    if (logic === "or") {
      return results.some(Boolean)
    }
    return results.every(Boolean)
  }

  private evaluateRule(
    entity: any,
    rule: IPropertyFilterExpression
  ): boolean {
    const value = this.getNestedValue(entity, rule.field)
    const target = rule.value

    switch (rule.operator) {
      case "eq":
        return value === target
      case "neq":
        return value !== target
      case "gt":
        return value > target
      case "gte":
        return value >= target
      case "lt":
        return value < target
      case "lte":
        return value <= target
      case "contains":
        return String(value).includes(String(target))
      case "startsWith":
        return String(value).startsWith(String(target))
      case "in":
        return Array.isArray(target) && target.includes(value)
      case "between":
        return (
          Array.isArray(target) &&
          target.length === 2 &&
          value >= target[0] &&
          value <= target[1]
        )
      default:
        return false
    }
  }

  private getNestedValue(obj: any, path: string): any {
    return path.split(".").reduce((o, key) => o?.[key], obj)
  }
}
