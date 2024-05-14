import React, { useRef, memo } from "react";
import { Color, MeshStandardMaterial } from "three";
import {
  useTexture,
  useGLTF,
  MeshTransmissionMaterial,
  Instances,
  Instance,
} from "@react-three/drei";

export default function DavidHead(props) {
  const { nodes, materials } = useGLTF("./models/david-head.glb");

  const material = new MeshStandardMaterial({
    color: new Color(0xffffff),
    roughness: 0.5,
    metalness: 0.2,
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["smk55-kas2232-head-of-david"].geometry}
        material={material}
        rotation={[0, 0, 0]}
        scale={0.007}
      />
    </group>
  );
}
