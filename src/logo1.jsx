import * as React from "react";
import { Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export function Logo1(){

    const { gl } = useThree();
    return (
        <mesh>
        <Html position={[0,0,0]} portal={{ current: gl.domElement.parentNode }} style={{ position:'absolute',top: '80px', right: 0, width: '200px', height: '100px' }}>
        <img src="./Apata - Logo - Negro.png" alt="APATA Logo" />
        </Html>
        </mesh>
        );
}