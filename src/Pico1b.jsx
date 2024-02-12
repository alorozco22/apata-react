import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Pico1b(props) {
  const { nodes, materials } = useGLTF("/pico1b.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pico1.geometry}
        material={materials.watercolor2}
      />
    </group>
  );
}

useGLTF.preload("/pico1b.glb");