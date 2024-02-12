import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Pico4a(props) {
  const { nodes, materials } = useGLTF("/pico4a.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pico4.geometry}
        material={materials.watercolor2}
      />
    </group>
  );
}

useGLTF.preload("/pico4a.glb");