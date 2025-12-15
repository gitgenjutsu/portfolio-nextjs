import { useEffect } from "react";

export function useOutsideClick(
  refs: React.RefObject<HTMLElement>[],
  handler: () => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (
        refs.some(
          (ref) =>
            ref.current &&
            ref.current.contains(event.target as Node)
        )
      ) {
        return;
      }
      handler();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [refs, handler]);
}
