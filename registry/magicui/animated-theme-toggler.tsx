"use client";

import React from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

interface AnimatedThemeTogglerProps {
  theme?: string;
  onThemeChange?: (theme: string) => void;
}

export function AnimatedThemeToggler({
  theme,
  onThemeChange,
}: AnimatedThemeTogglerProps) {
  const isDark = theme === "dark";

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.15 }}
      onClick={() => onThemeChange?.(isDark ? "light" : "dark")}
      aria-label="Toggle color theme"
      style={{
        background: "transparent",
        border: "none",
        color: "var(--muted)",
        cursor: "pointer",
        display: "grid",
        placeItems: "center",
        width: "42px",
        height: "42px",
        position: "relative",
      }}
    >
      <motion.div
        initial={false}
        animate={{
          scale: isDark ? 1 : 0.5,
          opacity: isDark ? 1 : 0,
          rotate: isDark ? 0 : -90,
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        style={{ position: "absolute" }}
      >
        <Moon size={18} />
      </motion.div>

      <motion.div
        initial={false}
        animate={{
          scale: !isDark ? 1 : 0.5,
          opacity: !isDark ? 1 : 0,
          rotate: !isDark ? 0 : 90,
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        style={{ position: "absolute" }}
      >
        <Sun size={18} />
      </motion.div>
    </motion.button>
  );
}
