import { v4 as uuidv4 } from "uuid"

/**
 * create uuid
 *
 */
export function createUid() {
  const id = uuidv4()
  return id
}

export function isNull(val: any): boolean {
  return !(typeof val !== "undefined" && val !== null)
}
