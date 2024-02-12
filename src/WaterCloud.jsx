import React, { useRef } from "react";

import * as THREE from 'three';

export function WaterCloud(props) {
  
  const plane = new THREE.Mesh( new THREE.PlaneGeometry( 9.17, 5 ) );
  

  // PRIMERO: ¡Textura de nube!
  const texture = new THREE.TextureLoader().load('watercolorclouds4.png' );  // 1. Carga la textura
  texture.magFilter = THREE.LinearMipMapLinearFilter; // 2. https://threejs.org/docs/#api/en/textures/Texture.magFilter
  texture.minFilter = THREE.LinearMipMapLinearFilter; // 3. https://threejs.org/docs/#api/en/textures/Texture.minFilter

  const material = new THREE.MeshBasicMaterial( { map:texture } );
  material.transparent = true;


  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={plane.geometry}
        material={material}
        rotation={[0, 0, 0]}
      />
    </group>
  );
}