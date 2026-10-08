"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Click {
  id: number;
  x: number;
  y: number;
}

export default function ClickEffect() {
  const [clicks, setClicks] = useState<Click[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newClick = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      setClicks((prev) => [...prev, newClick]);

      // Remove the click after animation finishes
      setTimeout(() => {
        setClicks((prev) => prev.filter((click) => click.id !== newClick.id));
      }, 500);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <AnimatePresence>
        {clicks.map((click) => (
          <motion.div
            key={click.id}
            initial={{ opacity: 0.8, scale: 0 }}
            animate={{ opacity: 0, scale: 2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              position: "absolute",
              left: click.x - 20,
              top: click.y - 20,
              width: 40,
              height: 40,
              borderRadius: "50%",
              backgroundColor: "rgba(150, 150, 150, 0.4)",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
