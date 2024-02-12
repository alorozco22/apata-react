/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function ReservaAndesBig(props) {
  const { nodes, materials } = useGLTF("/reservaAndesTituloBig.glb");
  materials["SenderoOsoBig.001"].transparent = true;
  return (
    <group {...props} dispose={null}>
      <mesh
        onClick={() => window.location.href = "./plan-01"}
        castShadow
        receiveShadow
        geometry={nodes.ReservaAndesBig.geometry}
        material={materials["SenderoOsoBig.001"]}
        position={[0, 7.412, -20]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[3.927, 1, 2.216]}
      />
    </group>
  );
}

useGLTF.preload("/reservaAndesTituloBig.glb");