import { useEffect } from "react";

export function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    if (!locked) return;

    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    const originalStyle = window.getComputedStyle(document.body).overflow;

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollBarWidth}px`;

    return () => {
      document.body.style.overflow = originalStyle;
      document.body.style.paddingRight = "";
    };
  }, [locked]);
}
