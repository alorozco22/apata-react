import { Logo1 } from "./logo1";
import { useProgress } from "@react-three/drei";

import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useLoader } from '@react-three/fiber';
import { BackgroundApata } from './ApataHorizontal';

import { LogoBlanco } from "./logo-blanco";
import { StartSound } from "./StartSound";
import { StartNoSound } from "./StartNoSound";

export function LoadingScreen({started, onStarted, onStartedNoSound}){
    //https://www.youtube.com/watch?v=L12wIvuZTOY
    const { progress } = useProgress();
    

	return (
		<>
            
            <ambientLight intensity={3} />
            <LogoBlanco position={[-4.8,11,0]} clickEvent={()=> onStarted()} /> 
            <StartSound clickEvent={()=> onStarted()} /> 
            <StartNoSound clickEvent={()=> onStartedNoSound()} />
            <BackgroundApata position={[-10,10,-10]} scale={[30,30,30]} /> 
            
        </>
		);
}
