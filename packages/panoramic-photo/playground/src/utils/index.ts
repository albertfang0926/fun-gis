import ExifReader from "exifreader"

export async function getPanoramaMetadata(imageInput: string | File) {
  // 如果传入的是字符串(图片URL)，我们需要先将它 fetch 为 ArrayBuffer
  // 否则 ExifReader 在前端环境如果直接接收字符串，会误以为是 Node 环境下的本地文件路径，从而引发报错 ('fs.open' undefined)
  let dataToLoad: any;
  
  if (typeof imageInput === "string") {
    const response = await fetch(imageInput)
    dataToLoad = await response.arrayBuffer()
  } else {
    dataToLoad = imageInput
  }

  // 解析照片元数据
  const tags = await ExifReader.load(dataToLoad)

  console.log("tags", tags)

  // 1. 获取位置信息 (Location)
  let latitude = null
  let longitude = null
  let altitude = null

  if (tags["GPSLatitude"] && tags["GPSLongitude"]) {
    latitude = tags["GPSLatitude"].description // 经度
    longitude = tags["GPSLongitude"].description // 纬度
    altitude = tags["GPSAltitude"] ? tags["GPSAltitude"].description : 0
  }

  // 2. 获取方位信息 (Orientation/Heading)
  // XMP 数据一般有两种常见的命名空间记录全景朝向：
  let heading = 0 // 全景照片正中心的指南针航向角（正北为0，顺时针）
  let pitch = 0 // 俯仰角
  let roll = 0 // 翻滚角

  // 尝试读取 Google GPano 标准标准方位（大部分拼接软件会自动注入）
  if (tags["PoseHeadingDegrees"]) {
    heading = parseFloat(tags["PoseHeadingDegrees"].description)
    pitch = parseFloat(tags["PosePitchDegrees"]?.description || "0")
    roll = parseFloat(tags["PoseRollDegrees"]?.description || "0")
  }
  // 如果没有 GPano 标准，尝试读取大疆无人机独有的 XMP 标签
  else if (tags["GimbalYawDegree"]) {
    heading = parseFloat(tags["GimbalYawDegree"].description)
    pitch = parseFloat(tags["GimbalPitchDegree"]?.description || "0")
    roll = parseFloat(tags["GimbalRollDegree"]?.description || "0")
  }

  return {
    location: { latitude, longitude, altitude },
    orientation: { heading, pitch, roll }
  }
}
