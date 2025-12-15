"use client";

import { useEffect, useRef } from "react";

export function useWaterMotion<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let x = 0;
    let y = 0;
    let targetX = 0;
    let targetY = 0;

    const strength = 18;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);

      targetX = dx / rect.width;
      targetY = dy / rect.height;
    };

    const onLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const animate = () => {
      x += (targetX - x) * 0.07;
      y += (targetY - y) * 0.07;

      el.style.transform = `
        translate3d(${x * strength}px, ${y * strength}px, 0)
      `;

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    animate();

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return ref;
}
