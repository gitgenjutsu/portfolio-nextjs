"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import GiyuModel from "./GiyuModel";

export default function GiyuScene() {
  return (
    <Canvas
      dpr={[1, 1.2]}
      camera={{ position: [19, 1.4, 14], fov: 30 }}
      style={{ width: "100%", height: "100%" }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <directionalLight position={[-5, 3, -5]} intensity={0.4} />

      {/* Model */}
      <GiyuModel />

      {/* Environment for realism */}
      <Environment preset="city" />

      <OrbitControls
        enableZoom={false}
        enablePan={true}
        enableRotate={true}
        autoRotate
      />
    </Canvas>
  );
}
