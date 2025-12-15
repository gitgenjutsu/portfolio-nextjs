"use client";

import { useRef } from "react";

type Props = {
  children: React.ReactNode;
  href: string;
  className?: string;
};

export default function WaterButton({ children, href, className }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    el.style.setProperty("--x", `${x}%`);
    el.style.setProperty("--y", `${y}%`);
  };

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      className={`relative overflow-hidden ${className}`}
      style={{
        // default center
        ["--x" as any]: "50%",
        ["--y" as any]: "50%",
      }}
    >
      <span
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(120px at var(--x) var(--y), rgba(255,255,255,0.25), transparent 60%)",
        }}
      />

      <span className="relative z-10">{children}</span>
    </a>
  );
}
