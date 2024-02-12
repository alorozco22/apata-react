import React, { useLayoutEffect, useRef } from "react";
import { useGLTF, useScroll} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Color, sRGBEncoding } from "three";
import gsap from "gsap";

import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useLoader } from '@react-three/fiber';

  
export function Pico1(props) {
  const { nodes, materials } = useGLTF("/pico1.glb");
  const colorMap = useLoader(TextureLoader, 'mountain-trees-green-texture.jpg');
  


  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pico1.geometry}
        
      >
      <meshStandardMaterial map={colorMap} 
      />
      </mesh>
    </group>
  );
}

useGLTF.preload("/pico1.glb");