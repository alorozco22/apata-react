import React, { useRef } from "react";

import * as THREE from 'three';
import * as BufferGeometryUtils from './BufferGeometryUtils';


export function Clouds(props) {
  
  var plane = new THREE.Mesh( new THREE.PlaneGeometry( 5.52, 1 ) );
  var plane2 = new THREE.Mesh( new THREE.PlaneGeometry( 5.52, 1 ) );
  
  var geometry = new THREE.BufferGeometry();

  // PRIMERO: ¡Textura de nube!
  const texture = new THREE.TextureLoader().load('cloud3.png' );  // 1. Carga la textura
  texture.magFilter = THREE.LinearMipMapLinearFilter; // 2. https://threejs.org/docs/#api/en/textures/Texture.magFilter
  texture.minFilter = THREE.LinearMipMapLinearFilter; // 3. https://threejs.org/docs/#api/en/textures/Texture.minFilter

  const material = new THREE.MeshBasicMaterial( { map:texture } );
  material.transparent = true;
  material.opacity= 0.8;

  var coordenadas = calcularCoordenadas();

  /*for (var i = 0; i < coordenadas.length; i++ ) {

    plane.position.x = coordenadas[i].x;
    plane.position.y = coordenadas[i].y;
    plane.position.z = coordenadas[i].z;

    // QUINTO: hacemos merge al plano y a la geometry que hasta ahora no hemos modificado
    geometry = BufferGeometryUtils.mergeGeometries( [geometry, plane] );
  }*/

  

  var geo = BufferGeometryUtils.mergeGeometries( [plane, plane2] );

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={geo}
        material={material}
        rotation={[0, 0, 0]}
      />
    </group>
  );
}


function calcularCoordenadas(){
    const datos = [];

    for ( let i = 0; i < 50; i++ ) {
    
      let x = Math.random() * (40 - (-50)) + (-50);
      let y = Math.random() * (3.5 - (-1)) + (-1);
      let z = Math.random() * (20 - (-150)) + (-150);
      let tipo = Math.floor(Math.random() * (4.9 - (1.1)) + (1.1));

      datos.push({'x':x, 'y':y, 'z':z});

    }
    return datos;
  }