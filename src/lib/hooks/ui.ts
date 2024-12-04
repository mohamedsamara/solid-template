import { createEffect, onCleanup } from "solid-js";

export const useEscapeKey = (onClose: () => void) => {
  createEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    onCleanup(() => {
      document.removeEventListener("keydown", handleEscape);
    });
  });
};
