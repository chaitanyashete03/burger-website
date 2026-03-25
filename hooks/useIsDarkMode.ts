"use client";

import { useEffect, useState } from "react";

/**
 * Hook to detect and listen to the 'dark' mode class on document.documentElement.
 */
export function useIsDarkMode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Initial check
    const checkIsDark = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkIsDark();

    // Listen for theme changes via MutationObserver
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          checkIsDark();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Also listen for storage events (if theme is changed in another tab)
    const handleStorage = (e: StorageEvent) => {
      if (e.key === "theme") {
        checkIsDark();
      }
    };
    window.addEventListener("storage", handleStorage);

    return () => {
      observer.disconnect();
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  return isDark;
}
