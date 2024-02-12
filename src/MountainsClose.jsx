import React, { useLayoutEffect, useRef } from "react";
import { useGLTF, useScroll} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Color } from "three";
import gsap from "gsap";

export function MountainsClose(props) {
  const { nodes, materials } = useGLTF("/mountains.glb");

  const ref = useRef();
  const tl = useRef();

  const MOUNT_DEPTH = 20;
  const NB_MOUNTAINS = 2;

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
      x:-MOUNT_DEPTH * (NB_MOUNTAINS-1)
    },
    0);

  }, []);

  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Landscape002.geometry}
        position={[0,-1,0]}  
      >
      <meshStandardMaterial color={new Color('#105c3a').convertLinearToSRGB()} 
      />
      </mesh>
    </group>
  );
}

useGLTF.preload("/mountains.glb");