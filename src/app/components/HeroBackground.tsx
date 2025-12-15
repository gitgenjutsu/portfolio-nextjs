"use client";

import { useEffect, useRef } from "react";

export default function HeroBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let x = 50;
    let y = 50;
    let targetX = 50;
    let targetY = 50;

    const onMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth) * 100;
      targetY = (e.clientY / window.innerHeight) * 100;
    };

    const animate = () => {
      x += (targetX - x) * 0.05;
      y += (targetY - y) * 0.05;

      el.style.background = `
        radial-gradient(
          600px at ${x}% ${y}%,
          rgba(56, 130, 246, 0.08),
          transparent 70%
        )
      `;

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 -z-10 pointer-events-none" />
  );
}
