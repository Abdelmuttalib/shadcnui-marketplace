"use client";

import { useEffect } from "react";

const STORAGE_KEY = "component-playground-scroll";

export function ScrollRestoration() {
  useEffect(() => {
    // Restore the previous scroll position.
    const savedPosition = sessionStorage.getItem(STORAGE_KEY);

    if (savedPosition !== null) {
      const position = Number(savedPosition);

      requestAnimationFrame(() => {
        window.scrollTo({
          top: position,
          behavior: "instant",
        });
      });
    }

    // Save the position as the user scrolls.
    let timeout: ReturnType<typeof setTimeout>;

    const savePosition = () => {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        sessionStorage.setItem(STORAGE_KEY, String(window.scrollY));
      }, 100);
    };

    window.addEventListener("scroll", savePosition, {
      passive: true,
    });

    // Save immediately before a full page reload.
    const saveBeforeUnload = () => {
      sessionStorage.setItem(STORAGE_KEY, String(window.scrollY));
    };

    window.addEventListener("beforeunload", saveBeforeUnload);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", savePosition);
      window.removeEventListener("beforeunload", saveBeforeUnload);
    };
  }, []);

  return null;
}
