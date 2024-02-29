import { useLayoutEffect, useRef , useState} from "react";
import { useFrame } from "@react-three/fiber";
import { Mountains } from "./Mountains";
import { MountainsClose } from "./MountainsClose";
import { Pico1 } from "./Pico1";
import { Pico1a } from "./Pico1a";
import { Pico1b } from "./Pico1b";
import { Pico2 } from "./Pico2";
import { Pico2a } from "./Pico2a";
import { Pico3 } from "./Pico3";
import { Pico4 } from "./Pico4";
import { Pico4a } from "./Pico4a";
import { Pico6 } from "./Pico6";
import { Ground } from "./ground";
import { Cloud } from "./cloud";
import { Cloud1 } from "./Cloud1";
import { Cloud2 } from "./Cloud2";
import { Cloud3 } from "./Cloud3";
import { Cloud4 } from "./Cloud4";
import { Cloud5 } from "./Cloud5";
import { Clouds } from "./Clouds";
import { UIDifAlta } from "./UI-dif-alta";

import { TituloSenderoOsoBig } from "./TituloSenderoOsoBig";
import { ReservaAndesBig } from "./ReservaAndesBig";
import { SantaIsabelTituloBig } from "./SantaIsabelTituloBig";
import { SenderoPazTituloBig } from "./SenderoPazTituloBig";
import { SutatausaTituloBig } from "./SutatausaTituloBig";


import { LogoBlanco } from "./logo-blanco";
import { LogoNegro } from "./logo-negro";
import { Facebook } from "./facebook";
import { Insta } from "./insta";
import { Waa } from "./waa";


import { Logo1 } from "./logo1";
import { WaterCloud } from "./WaterCloud";
import { Fog } from "three";
import { Overlay } from "./Overlay";
import { OverlayGeo } from "./OverlayGeo";
import { Html, Scroll } from "@react-three/drei";
import * as THREE from 'three';

import { useGLTF, useScroll} from "@react-three/drei";
import { PerspectiveCamera } from '@react-three/drei'

import gsap from "gsap";


export const Scene = () => {
	
	
	
  const ref = useRef();
  const tl = useRef();

  const MOUNT_DEPTH = 20;
  const NB_MOUNTAINS = 6;

  const scroll = useScroll();

  useFrame(()=>{
    tl.current.seek(scroll.offset * tl.current.duration())
  });

  useLayoutEffect(()=>{
    tl.current = gsap.timeline();

    //Animation
    tl.current.to(
      ref.current.position,
      {duration:2,
      z:-MOUNT_DEPTH * (NB_MOUNTAINS-1)
    },
    0);

  }, []);


  // GENERAMOS TODAS LAS NUBES Y LAS GUARDAMOS EN CHILDREN:
  

  function calcularCoordenadas(){
  	const datos = [];

  	for ( let i = 0; i < 30; i++ ) {
  	
			let x = Math.random() * (40 - (-50)) + (-50);
			let y = Math.random() * (3.5 - (-1)) + (-1);
			let z = Math.random() * (20 - (-150)) + (-150);
			let tipo = Math.floor(Math.random() * (4.9 - (1.1)) + (1.1));

			datos.push({'x':x, 'y':y, 'z':z});

		}
		return datos;
  }


  // Mapeamos los cuatro tipos de nubes (La 2 no quedó bonita)
	const children1 = calcularCoordenadas().map((val) => (
      < Cloud1 position={[val.x,val.y,val.z]} rotation={[0,0,0]} />
    ));

	const children3 = calcularCoordenadas().map((val) => (
      < Cloud3 position={[val.x,val.y,val.z]} rotation={[0,0,0]} />
    ));

	const children4 = calcularCoordenadas().map((val) => (
      < Cloud4 position={[val.x,val.y,val.z]} rotation={[0,0,0]} />
    ));

	const children5 = calcularCoordenadas().map((val) => (
      < Cloud5 position={[val.x,val.y,val.z]} rotation={[0,0,0]} />
    ));



	const overlays = [
	{
		i:0,x:-5,y:7.5,z:-10
	},
	{
		i:1,x:3,y:7.5,z:-20
	},
	{
		i:2,x:-2,y:7.5,z:-40
	},
	{
		i:3,x:3,y:7.5,z:-60
	},
	{
		i:4,x:-4,y:8,z:-80
	}
		];


	const overlaysRefs = useRef([]);

	overlaysRefs.current = [];

	const addToRefs = (over) => {
		if (over && !overlaysRefs.current.includes(over)){
			overlaysRefs.current.push(over);
		}
	}


	for ( var i = 0; i < overlaysRefs.current.length; i ++ ) {
		overlaysRefs.current[i].userData.clickable = true;
	}


	



	
	return (
		<>

		<ambientLight intensity={2.5} />

		<group ref={ref}>
		<PerspectiveCamera 
			
			makeDefault
			position={[-2, 7, 20]}
			fov={40}
		/>

		< Facebook />
		< Insta />
		< Waa />

		< LogoNegro />
		</group>

		<directionalLight color="white" position = {[500,100,500]} castShadow/>
		
		<fog attach="fog" args={['white', 1, 50]} />
		
		<group dispose={null} >
		
		
		< Pico1b position={[0,0,0]} />
		< TituloSenderoOsoBig />
		< ReservaAndesBig />
		< SantaIsabelTituloBig />
		< SenderoPazTituloBig />
		< SutatausaTituloBig />

		< Pico2a position={[-10,0,-20]} />
		
		< Pico1b position={[7,0,-40]} />
		< Pico4a position={[-10,0,-60]} />
		< Pico2a position={[5,0,-80]} />
		
		< Ground position={[0,0,27]} />
		< Ground position={[0,0,-20]} />
		< Ground position={[0,0,-67]} />
		< Ground position={[0,0,-114]} />

		
		


		</group>

		
		</>
	);
};

/*
		{
			overlays.map((val) =>{
				return (<OverlayGeo key={val.i} position ={[val.x,val.y,val.z]} ref={addToRefs} />)
			})
		}
*/

/*
{children1}
		{children3}
		{children4}
		{children5}
*/