import ExifReader from "exifreader"

export interface IPanoramaLocation {
  latitude: number | string | null
  longitude: number | string | null
  altitude: number | string | null
}

export interface IPanoramaOrientation {
  /** 全景照片正中心的指南针航向角（正北为 0，顺时针，单位度） */
  heading: number
  /** 俯仰角（度） */
  pitch: number
  /** 翻滚角（度） */
  roll: number
}

export interface IPanoramaMetadata {
  location: IPanoramaLocation
  orientation: IPanoramaOrientation
}

/**
 * 解析全景图的 EXIF / XMP 元数据（GPS 位置与朝向角）。
 *
 * 朝向角优先读取 Google GPano 标准（PoseHeadingDegrees，大部分拼接软件会自动注入），
 * 其次是大疆无人机独有的 XMP 标签（GimbalYawDegree）。
 */
export async function getPanoramaMetadata(
  imageInput: string | File
): Promise<IPanoramaMetadata> {
  // 字符串（图片 URL）需要先 fetch 为 ArrayBuffer：ExifReader 在浏览器环境
  // 直接接收字符串会被误认为是 Node 的本地文件路径而报错（fs.open undefined）
  const tags =
    typeof imageInput === "string"
      ? await ExifReader.load(await (await fetch(imageInput)).arrayBuffer())
      : await ExifReader.load(imageInput)

  // 1. 位置信息（GPSLatitude 纬度 / GPSLongitude 经度）
  let latitude: number | string | null = null
  let longitude: number | string | null = null
  let altitude: number | string | null = null

  if (tags["GPSLatitude"] && tags["GPSLongitude"]) {
    latitude = tags["GPSLatitude"].description
    longitude = tags["GPSLongitude"].description
    altitude = tags["GPSAltitude"] ? tags["GPSAltitude"].description : 0
  }

  // 2. 方位信息（Orientation/Heading）
  let heading = 0
  let pitch = 0
  let roll = 0

  if (tags["PoseHeadingDegrees"]) {
    heading = parseFloat(tags["PoseHeadingDegrees"].description ?? "0")
    pitch = parseFloat(tags["PosePitchDegrees"]?.description ?? "0")
    roll = parseFloat(tags["PoseRollDegrees"]?.description ?? "0")
  } else if (tags["GimbalYawDegree"]) {
    heading = parseFloat(tags["GimbalYawDegree"].description ?? "0")
    pitch = parseFloat(tags["GimbalPitchDegree"]?.description ?? "0")
    roll = parseFloat(tags["GimbalRollDegree"]?.description ?? "0")
  }

  return {
    location: { latitude, longitude, altitude },
    orientation: { heading, pitch, roll }
  }
}
