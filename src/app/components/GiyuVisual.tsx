"use client";

import dynamic from "next/dynamic";

const GiyuScene = dynamic(() => import("./scene/GiyuScene"), { ssr: false });

export default function GiyuVisual() {
  return (
    <div className="w-full h-full">
      <GiyuScene />
    </div>
  );
}
