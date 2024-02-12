import { Html } from "@react-three/drei";
import * as THREE from 'three';
import { useThree } from "@react-three/fiber";

import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState, useRef } from "react";

export const Overlay = (props) => {
  const { gl } = useThree();


  return (
    <mesh >

      <Html occlude position={props.position} transform portal={{ current: gl.domElement.parentNode }} style={{ backgroundColor:'#faffe8'}} >
      <div class="w-160 h-screen">
        <section className="w-full p-10">
      <div className ="w-64 h-64 items-center justify-left">
        <div className="w-full">
          <div className="bg-white rounded-lg px-8 py-12">
            <h1 className="font-semibold font-serif text-2xl">Sendero del Oso Chingaza</h1>
        <p className="text-grey-500">Noviembre 23 de 2023</p>
        <p className="mt-3">Recuerda:</p>
        <a href="./plan.html">Ir al plan</a>
        <img src="./iconos/Altitud.png" alt="Altitud" width="500" height="600" />
        <ul className="leading-9">
          <li>Dificultad: media</li>
          <li>Altitud: 3350-3375 msnm</li>
          <li>Tiempo de caminata: 5-6 horas</li>
          <li>Longitud: 7 Km</li>
        </ul>
          </div>
        </div>
      </div>
</section>
</div>
      </Html>
    </mesh>
    );
};
