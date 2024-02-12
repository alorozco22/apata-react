import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Pico1a(props) {
  const { nodes, materials } = useGLTF("/pico1a.glb");
  return (
    <group {...props} dispose={null}>
     
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pico1.geometry}
        material={materials.watercolor}
      />
    </group>
  );
}

useGLTF.preload("/pico1a.glb");
