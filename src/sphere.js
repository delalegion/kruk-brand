import * as THREE from 'three'
import { useState, useRef, Suspense, useMemo } from 'react'
import { Canvas, useThree, useFrame, useLoader } from '@react-three/fiber'
import { CameraShake, OrbitControls, useMatcapTexture } from '@react-three/drei'
import { KernelSize } from 'postprocessing'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

function Triangle({ color, ...props }) {
  const ref = useRef()
  const [matcap, url] = useMatcapTexture(
    11, // index of the matcap texture https://github.com/emmelleppi/matcaps/blob/master/matcap-list.json
    1024 // size of the texture ( 64, 128, 256, 512, 1024 )
   )
  return (
    <group ref={ref}>
      <mesh position={[0, 2, 0]} castShadow>
        <sphereGeometry attach="geometry" args={[1.5, 74, 74]} />
        <meshMatcapMaterial matcap={matcap} />
      </mesh>
    </group>
  )
}

function Rig({ children }) {
  const ref = useRef()
  const vec = new THREE.Vector3()
  const { camera, mouse } = useThree()
  useFrame(() => {
    camera.position.lerp(vec.set(mouse.x * 2, 0, 3.5), 0.05)
    ref.current.position.lerp(vec.set(mouse.x * 1, mouse.y * 0.1, 0), 0.1)
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, (-mouse.x * Math.PI) / 20, 0.1)
  })
  return <group ref={ref}>{children}</group>
}

export default function Sphere() {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, -3, 5] }}>
      <ambientLight />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      <Suspense fallback={null}>
        <Rig>
          <Triangle color="#E61E29" scale={0.2} rotation={[0, 0, Math.PI / 3]} />
          {/* <Ground mirror={1} blur={[100, 200]} mixBlur={6} mixStrength={1.2} rotation={[-Math.PI / 2, 0, Math.PI / 2]} position-y={-0.8} /> */}
        </Rig>
        <EffectComposer multisampling={8}>
          <Bloom kernelSize={4} luminanceThreshold={0} luminanceSmoothing={0.4} intensity={0.6} />
          <Bloom kernelSize={KernelSize.HUGE} luminanceThreshold={0} luminanceSmoothing={0} intensity={0.3} />
        </EffectComposer>
      </Suspense>
      <CameraShake yawFrequency={0.2} pitchFrequency={0.2} rollFrequency={0.2} />
    </Canvas>
  )
}
