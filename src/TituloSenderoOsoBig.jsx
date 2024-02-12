/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function TituloSenderoOsoBig(props) {
  const { nodes, materials } = useGLTF("/senderoOsoTituloBig.glb");
  materials.SenderoOsoBig.transparent = true;
  return (
    <group {...props} dispose={null}>
      <mesh
        onClick={() => window.location.href = "./plan-00"}
        castShadow
        receiveShadow
        geometry={nodes.SenderoOso2.geometry}
        material={materials.SenderoOsoBig}
        position={[-4.7, 8.412, 0]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[3.927, 1, 2.216]}
      />
    </group>
  );
}

useGLTF.preload("/senderoOsoTituloBig.glb");
