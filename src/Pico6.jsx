import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Pico6(props) {
  const { nodes, materials } = useGLTF("/pico6.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Landscape.geometry}
        material={materials.watercolor}
        scale={12,12,12}
      />
    </group>
  );
}

useGLTF.preload("/pico6.glb");