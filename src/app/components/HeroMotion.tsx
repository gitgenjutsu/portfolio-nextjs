"use client";

import { useWaterMotion } from "@/hooks/useWaterMotion";
import { ReactNode } from "react";

export default function HeroMotion({ children }: { children: ReactNode }) {
  const ref = useWaterMotion<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="will-change-transform transition-transform duration-300"
    >
      {children}
    </div>
  );
}
