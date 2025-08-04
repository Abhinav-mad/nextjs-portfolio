import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF} from '@react-three/drei';
import { useRef } from 'react';
import { MeshStandardMaterial } from 'three';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from "three";
import { Box } from '@chakra-ui/react';
const Cube = () => {
  const { scene } = useGLTF('/MernCube.glb'); // Path to your .glb file

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.emissiveIntensity = 1.9;  // Increase for more glow
    }
  });


  const cubeRef = useRef();

  
  useFrame(() => {
    cubeRef.current.rotation.y += -0.009;  // Adjust rotation speed here
  });

  
  return <primitive ref={cubeRef} object={scene}  position={[0, -3.5, 0]} scale={0.8} />;
};

export default function ThreeDModel() {
  return (
    <Box w="100%" h={['200px', '250px', '300px']}>
    <Canvas style={{ width: '100%' }} >
      <OrbitControls />
      <ambientLight intensity={1 } />
      <directionalLight position={[0, 10, 0]} castShadow intensity={ 20}  />
      <pointLight position={[0, 15, 0]} intensity={2} />
      <EffectComposer>
        <Bloom intensity={0.09} luminanceThreshold={0.9} luminanceSmoothing={1.1} />
      </EffectComposer>
      
      <Cube />
    </Canvas>
    </Box>
  );
}

