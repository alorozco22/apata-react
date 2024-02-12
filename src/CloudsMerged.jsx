/*import React, { useRef } from "react";

import * as THREE from 'three';
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';

export function CloudsMerged(props) {
  
  // MERGE CLOUDS: Cummulative geometry
  //const mergedGeo = new THREE.BufferGeometry();

  // Bueno esto debería funcionar con geometry pero ya no sirve
  // geometry, me toca usar BufferGeometry que es la nueva.
  // Tengo un video sobre cómo hacer merge con BufferGeom pero 
  // R3F tiene algunos detalles que todavía no entiendo. vamos pues!
  // Palante!

  // Mesh to accumulate (one Cloud):
  const planeGeo = new THREE.PlaneGeometry( 7.55, 5 );
  const planeMesh = new THREE.Mesh( planeGeo );
  
  //planeMesh.updateMatrix();
  //mergedGeo.merge(planeMesh.geometry, planeMesh.matrix);

  const mergedGeo = BufferGeometryUtils.mergeBufferGeometries([planeMesh])
  const mergedMesh = new THREE.Mesh(mergedGeo);
  

  // AHORA: ¡Textura de nubes!
  const texture = new THREE.TextureLoader().load('cloud1.png' );  // 1. Carga la textura
  texture.magFilter = THREE.LinearMipMapLinearFilter; // 2. https://threejs.org/docs/#api/en/textures/Texture.magFilter
  texture.minFilter = THREE.LinearMipMapLinearFilter; // 3. https://threejs.org/docs/#api/en/textures/Texture.minFilter

  const material = new THREE.MeshBasicMaterial( { map:texture } );
  material.transparent = true;
  material.opacity= 0.8;


  //const rand = Math.random()



  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={mergedMesh.geometry}
        material={material}
        rotation={[0, 0, 0]}
      />
    </group>
  );
}*/