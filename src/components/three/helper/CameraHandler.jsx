import React from "react";
import { useFrame } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";

export default function CameraHandler() {
  const camera = useRef();

  const [maxDistance, setMaxDistance] = useState(4);
  const [minDistance, setMinDistance] = useState(2);

  //   useEffect(() => {
  //     camera.current.moveTo(...cameraFocus, true);

  //     if (needsToDolly) {
  //       camera.current.dollyTo(maxDistance, true);
  //       setNeedsToDolly(false);
  //     }

  //     updateViewOffset();

  //     window.addEventListener("resize", updateViewOffset);

  //     return () => {
  //       window.removeEventListener("resize", updateViewOffset);
  //     };
  //   }, [cameraFocus, setCameraFocus]);

  return (
    <CameraControls
      ref={camera}
      draggingSmoothTime={0.2}
      maxPolarAngle={Math.PI / 2}
      maxZoom={4}
      maxDistance={maxDistance}
      minDistance={minDistance}
      enabled={true}
    />
  );
}
