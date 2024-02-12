import React, { useLayoutEffect, useRef } from "react";
import { useGLTF, useScroll} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Color } from "three";
import gsap from "gsap";


  
export function Pico4(props) {
  const { nodes, materials } = useGLTF("/pico4.glb");

  


  return (
    <group {...props} dispose={null} >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pico4.geometry}
        
      >
      <meshStandardMaterial color={new Color('#105c3a').convertLinearToSRGB()} 
      />
      </mesh>
    </group>
  );
}

useGLTF.preload("/pico4.glb");