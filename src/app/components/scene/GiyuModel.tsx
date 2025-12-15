"use client";

import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";

export default function GiyuModel(props: GroupProps) {
  const { scene } = useGLTF("/models/tomioka.glb");

  return (
    <primitive
      object={scene}
      scale={1.2}
      position={[0, -0.7, 0]}
      rotation={[0, Math.PI / 11, 0]}
      {...props}
    />
  );
}

// Preload model (important)
useGLTF.preload("/models/tomioka.glb");
