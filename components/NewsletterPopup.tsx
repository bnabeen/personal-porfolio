"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import SubstackEmbed from "./SubstackEmbed";

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup whenever the site is opened
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 800); // short delay to let initial layout settle smoothly

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Lock background scrolling while popup is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        backdropFilter: "blur(4px)",
        padding: "20px",
        overflowY: "auto",
        overscrollBehavior: "contain",
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
            color: "var(--ink)",
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
          <X size={20} className="text-[var(--ink)] group-hover:text-[var(--ink)] transition-colors" />
        </button>

        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
            <div style={{ width: "8px", height: "8px", background: "var(--ink)" }}></div>
            <h2 style={{ fontSize: "18px", fontWeight: 700, color: "var(--ink)", textTransform: "uppercase", letterSpacing: "0.05em", margin: 0 }}>
              Newsletter
            </h2>
          </div>
          <p style={{ color: "var(--ink)", fontSize: "15px", fontWeight: "bold", marginBottom: "8px" }}>
            A short letter on AI, content, and growth
          </p>
          <p style={{ color: "var(--ink)", fontSize: "15px", lineHeight: 1.6, margin: 0 }}>
            What I’m learning and building, in plain language. Weekly. No spam, unsubscribe any time.
          </p>
        </div>

        <SubstackEmbed />
      </div>
    </div>
  );
}
