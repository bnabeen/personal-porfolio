"use client";

import React, { useRef } from "react";
import { Moon, Sun } from "lucide-react";

interface AnimatedThemeTogglerProps {
  theme?: string;
  onThemeChange?: (theme: string, e?: React.MouseEvent<HTMLButtonElement>) => void;
}

export function AnimatedThemeToggler({
  theme,
  onThemeChange,
}: AnimatedThemeTogglerProps) {
  const isDark = theme === "dark";
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const nextTheme = isDark ? "light" : "dark";

    // Fallback if View Transitions API is not supported in the browser
    if (typeof document === "undefined" || !("startViewTransition" in document)) {
      onThemeChange?.(nextTheme, e);
      return;
    }

    const button = buttonRef.current || e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // Calculate maximum radius to the furthest corner of the viewport
    const right = window.innerWidth - x;
    const bottom = window.innerHeight - y;
    const maxRadius = Math.hypot(Math.max(x, right), Math.max(y, bottom));

    // Start View Transition with circular clip-path reveal
    const transition = (document as any).startViewTransition(() => {
      onThemeChange?.(nextTheme, e);
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${maxRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 550,
          easing: "cubic-bezier(0.4, 0, 0.2, 1)",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={handleClick}
      aria-label="Toggle color theme"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        background: "transparent",
        border: "none",
        color: "var(--ink)",
        cursor: "pointer",
        display: "grid",
        placeItems: "center",
        width: "42px",
        height: "42px",
        borderRadius: "50%",
        position: "relative",
        transition: "background-color 0.2s ease, transform 0.15s ease",
      }}
      className="hover:bg-[var(--active-bg)] active:scale-95"
    >
      <div
        style={{
          position: "absolute",
          display: "grid",
          placeItems: "center",
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease",
          transform: isDark ? "rotate(0deg) scale(1)" : "rotate(-90deg) scale(0.5)",
          opacity: isDark ? 1 : 0,
          pointerEvents: "none",
        }}
      >
        <Moon size={18} />
      </div>

      <div
        style={{
          position: "absolute",
          display: "grid",
          placeItems: "center",
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease",
          transform: !isDark ? "rotate(0deg) scale(1)" : "rotate(90deg) scale(0.5)",
          opacity: !isDark ? 1 : 0,
          pointerEvents: "none",
        }}
      >
        <Sun size={18} />
      </div>
    </button>
  );
}
