import React, { useState, useRef, useEffect } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";

import CameraHandler from "./helper/CameraHandler";
import DavidHead from "./models/DavidHead";

export default function Scene() {
  const camSettings = {
    fov: 75,
    zoom: 1,
    near: 0.1,
    far: 200,
    position: [0, 0, 4],
  };
  // Component for the mask
  function Mask({ position }) {
    return (
      <mesh position={position}>
        <planeGeometry args={[10, 10]} />
        <meshBasicMaterial color='black' transparent opacity={0.5} />
      </mesh>
    );
  }
  return (
    <Canvas
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
    >
      <CameraHandler />

      <Mask position={[0, 0, -0.01]} />
      <Mask position={[0, 0, 1]} />

      <ambientLight intensity={0.5} />

      <DavidHead
        position={[0, -2, 0]}
        rotation={[0, Math.PI / 3, 0]}
        scale={3.5}
      />

      <directionalLight position={[-4, 2, 3]} intensity={2} />
    </Canvas>
  );
}
