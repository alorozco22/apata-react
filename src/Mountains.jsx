import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Color } from "three";

export function Mountains(props) {
  const { nodes, materials } = useGLTF("/mountains.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Landscape002.geometry}
        position={[-170,3,-80]}  
      >
      <meshStandardMaterial color={new Color('#12488a').convertLinearToSRGB()} 
      />
      </mesh>
    </group>
  );
}

useGLTF.preload("/mountains.glb");