import { Canvas } from "@react-three/fiber";
//import { OrbitControls } from "@react-three/drei";
import { Scene } from "./Scene";
import { ScrollControls, Loader } from "@react-three/drei";
import * as THREE from 'three';

import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useLoader } from '@react-three/fiber';
import { Suspense, useState, useEffect } from 'react';
import { LoadingScreen } from './loading';


const audio = new Audio("./midnight-forest-184304.mp3")
export function FiberContainer() {

  const texture = useLoader(TextureLoader, "./blue-wall-background.jpg");
  const [start, setStart] = useState(false);
  const [startNoSound, setStartNoSound] = useState(false);

  useEffect(()=>{
    if(start){
      if (!startNoSound){
        audio.play();
      }
      
    }
  }, [start])

  return (
    <>
      
      <Canvas camera={{ position: [-2, 7, 20], fov: 40, rotation:[0,0,0] }} shadows>

        {
          !start && <LoadingScreen started={start} onStarted={()=> setStart(true)} onStartedNoSound={()=> {setStart(true);setStartNoSound(true)}} />
        }
        
        <ScrollControls pages ={6} damping={0.25}>
        
        <Suspense fallback = {null}>
          {
            start && <Scene  />
          }
        </Suspense>
        
        </ScrollControls>
        
        
        
      </Canvas>
      
      
    </>
  );
}
// <OrbitControls minDistance={1} maxDistance={200} />
// <Loader  />