import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Pico2a(props) {
  const { nodes, materials } = useGLTF("/pico2a.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pico2.geometry}
        material={materials.watercolor2}
      />
    </group>
  );
}

useGLTF.preload("/pico2a.glb");