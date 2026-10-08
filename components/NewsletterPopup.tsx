"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import SubstackEmbed from "./SubstackEmbed";

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already seen or closed the popup
    const hasSeen = localStorage.getItem("hasSeenNewsletterPopup");
    if (!hasSeen) {
      // Small delay to let the page load first
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000); // 3 seconds delay
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("hasSeenNewsletterPopup", "true");
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      zIndex: 9999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      backdropFilter: "blur(4px)",
      padding: "20px"
    }}>
      <div style={{
        position: "relative",
        width: "100%",
        maxWidth: "500px",
        backgroundColor: "var(--bg)",
        border: "1px solid var(--line)",
        borderRadius: "12px",
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        padding: "32px 24px",
        display: "flex",
        flexDirection: "column",
        gap: "24px"
      }}>
        <button
          onClick={handleClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            background: "transparent",
            border: "none",
            color: "var(--muted)",
            cursor: "pointer",
            padding: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "4px",
            transition: "color 0.2s, background-color 0.2s"
          }}
          aria-label="Close"
          className="group hover:bg-[var(--active-bg)] hover:text-[var(--ink)]"
        >
          <X size={20} className="text-[var(--muted)] group-hover:text-[var(--ink)] transition-colors" />
        </button>

        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
            <div style={{ width: "8px", height: "8px", background: "var(--ink)" }}></div>
            <h2 style={{ fontSize: "13px", fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.05em", margin: 0 }}>
              Newsletter
            </h2>
          </div>
          <p style={{ color: "var(--muted)", fontSize: "16px", lineHeight: 1.6, margin: 0 }}>
            Occasional letters on digital growth, applied AI, and the systems I build. No spam, unsubscribe any time.
          </p>
        </div>

        <SubstackEmbed />
      </div>
    </div>
  );
}
