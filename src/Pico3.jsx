import React, { useLayoutEffect, useRef } from "react";
import { useGLTF, useScroll} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Color } from "three";
import gsap from "gsap";


  
export function Pico3(props) {
  const { nodes, materials } = useGLTF("/pico3.glb");

  


  return (
    <group {...props} dispose={null} >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pico3.geometry}
        
      >
      <meshStandardMaterial color={new Color('#105c3a').convertLinearToSRGB()} 
      />
      </mesh>
    </group>
  );
}

useGLTF.preload("/pico3.glb");