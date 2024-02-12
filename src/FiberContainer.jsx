import { Canvas } from "@react-three/fiber";
//import { OrbitControls } from "@react-three/drei";
import { Scene } from "./Scene";
import { ScrollControls, Loader } from "@react-three/drei";
import * as THREE from 'three';

import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useLoader } from '@react-three/fiber';
import { Suspense } from 'react';
import { LoadingScreen } from './loading';

export function FiberContainer() {

const texture = useLoader(TextureLoader, "./blue-wall-background.jpg");

  return (
    <>
    
    <Canvas background = {texture} camera={{ position: [-2, 7, 20], fov: 40, rotation:[0,0,0] }} shadows>
      
      <ScrollControls pages ={6} damping={0.25}>
      
      <Scene  />
      
      </ScrollControls>
    </Canvas>
    <Loader  />
    </>
  );
}
// <OrbitControls minDistance={1} maxDistance={200} />