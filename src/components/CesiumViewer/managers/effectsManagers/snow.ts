import {
  Viewer,
  Particle,
  Cartesian2,
  Cartesian3,
  ParticleSystem,
  Matrix4,
  Color,
  SphereEmitter,
  Math as cMath
} from "cesium"

import { DEFAULT_HOME_POSITION } from "@/components/CesiumViewer/default"
import snowFlake from "@/assets/snowflake_particle.png"

const homePosition = Cartesian3.fromDegrees(...DEFAULT_HOME_POSITION)
const snowParticleSize = 12.0
const snowRadius = 100000.0
const minimumSnowImageSize = new Cartesian2(snowParticleSize, snowParticleSize)
const maximumSnowImageSize = new Cartesian2(snowParticleSize * 2.0, snowParticleSize * 2.0)
let snowGravityScratch = new Cartesian3()

export function startSnow(viewer: Viewer) {
  console.log("@startSnow")

  const scene = viewer.scene
  scene.globe.depthTestAgainstTerrain = true
  scene.primitives.removeAll()
  const snowUpdate = function (particle: Particle, dt: any) {
    snowGravityScratch = Cartesian3.normalize(particle.position, snowGravityScratch)
    Cartesian3.multiplyByScalar(
      snowGravityScratch,
      cMath.randomBetween(-30.0, -300.0),
      snowGravityScratch
    )
    particle.velocity = Cartesian3.add(particle.velocity, snowGravityScratch, particle.velocity)
    const distance = Cartesian3.distance(homePosition, particle.position)
    if (distance > snowRadius) {
      particle.endColor.alpha = 0.0
    } else {
      particle.endColor.alpha = 1.0 / (distance / snowRadius + 0.1)
    }
  }
  scene.primitives.add(
    new ParticleSystem({
      modelMatrix: Matrix4.fromTranslation(homePosition),
      minimumSpeed: -1.0,
      maximumSpeed: 0.0,
      lifetime: 15.0,
      emitter: new SphereEmitter(snowRadius),
      startScale: 0.5,
      endScale: 1.0,
      image: snowFlake,
      emissionRate: 7000.0,
      startColor: Color.WHITE.withAlpha(0.0),
      endColor: Color.WHITE.withAlpha(1.0),
      minimumImageSize: minimumSnowImageSize,
      maximumImageSize: maximumSnowImageSize,
      updateCallback: snowUpdate
    })
  )

  //   scene.skyAtmosphere.hueShift = -0.8
  //   scene.skyAtmosphere.saturationShift = -0.7
  //   scene.skyAtmosphere.brightnessShift = -0.33
  //   scene.fog.density = 0.001
  //   scene.fog.minimumBrightness = 0.8
}
