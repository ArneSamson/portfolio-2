import React, { useState, useRef, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  CameraControls,
  Environment,
  useFBO,
  RoundedBox,
  MeshTransmissionMaterial,
} from "@react-three/drei";

import CameraHandler from "./helper/CameraHandler";
import Lights from "./lights/Lights";

import DavidHead from "./models/DavidHead";

export default function Scene() {
  const camSettings = {
    fov: 75,
    zoom: 1,
    near: 0.1,
    far: 200,
    position: [0, 0, 4],
  };

  function Mask({ position }) {
    const davidRef = useRef();
    const maskRef = useRef();
    const buffer = useFBO();

    useFrame((state) => {
      davidRef.current.visible = true;
      maskRef.current.visible = false;
      state.gl.setRenderTarget(buffer);
      state.gl.render(state.scene, state.camera);
      state.gl.setRenderTarget(null);
      davidRef.current.visible = false;
      maskRef.current.visible = true;
    });

    return (
      <>
        <group ref={davidRef}>
          <DavidHead
            position={[0, -2, 0]}
            rotation={[0, Math.PI / 3, 0]}
            scale={3.5}
          />
        </group>

        <mesh position={position} ref={maskRef}>
          <MeshTransmissionMaterial
            transmission={1}
            roughness={0}
            color={"#ffffff"}
            buffer={buffer.texture}
            transparent={true}
            opacity={1}
          />

          {/* <meshBasicMaterial
            transparent
            opacity={0.5} // Adjust opacity as needed
            color={"#ffffff"}
            map={buffer.texture} // You can also use texture as map if needed
          /> */}

          <planeGeometry args={[1.5, 2]} />
        </mesh>

        {/* <RoundedBox
          position={position}
          ref={maskRef}
          args={[1.5, 2, 0.12]}
          radius={0.03}
        >
          <MeshTransmissionMaterial
            transmission={1}
            roughness={0}
            color={"#ffffff"}
            buffer={buffer.texture}
          />
        </RoundedBox> */}
      </>
    );
  }

  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const preventScroll = (event) => {
      event.preventDefault();
    };

    // Add event listener to prevent scroll events
    canvas.addEventListener("wheel", preventScroll, { passive: false });

    return () => {
      // Cleanup: remove event listener when component unmounts
      canvas.removeEventListener("wheel", preventScroll);
    };
  }, []);

  return (
    <>
      <Canvas
        ref={canvasRef}
        className='canvas'
        camera={camSettings}
        gl={{
          antialias: true,
          outputColorSpace: THREE.SRGBColorSpace,
          toneMappingExposure: 1,
          alpha: true,
        }}
        shadows={true}
        dpr={window.devicePixelRatio}
        style={{ background: "transparent", pointerEvents: "none" }}
      >
        <CameraHandler />

        <Environment preset='city' />

        {/* <DavidHead
          position={[0, -2, 0]}
          rotation={[0, Math.PI / 3, 0]}
          scale={3.5}
        /> */}

        <Mask position={[1, 1, 0]} />
        <Mask position={[-1, 0, 0]} />
        <Mask position={[1, -1.3, 0]} />

        {/* <directionalLight position={[-4, 2, 3]} intensity={2} /> */}

        <Lights />
      </Canvas>
    </>
  );
}
