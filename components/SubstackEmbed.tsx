"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function SubstackEmbed() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <div className="newsletter-embed" style={{ position: "relative" }}>
      {mounted ? (
        <iframe
          id="home-substack-embed"
          src={`https://bnabeen.substack.com/embed`}
          width="100%"
          height="150"
          style={{
            border: "none",
            background: "white",
            maxWidth: "480px",
            // The magic CSS blending trick for opaque iframes
            mixBlendMode: isDark ? "screen" : "multiply",
            filter: isDark ? "invert(1) hue-rotate(180deg)" : "none",
          }}
          frameBorder="0"
          scrolling="no"
          title="Subscribe to Nabeen's Substack newsletter"
        />
      ) : (
        <div style={{ width: "100%", height: "150px", maxWidth: "480px" }} />
      )}
    </div>
  );
}
