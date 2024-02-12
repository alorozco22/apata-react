import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Ground(props) {
  const { nodes, materials } = useGLTF("/pisoa.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials.watercolor2}
        scale={[-38.303, 1, -23.441]}
      />
    </group>
  );
}

useGLTF.preload("/pisoa.glb");