"use client";

import { Github, Linkedin, Instagram, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--line)", padding: "48px 0 64px", background: "var(--bg)" }}>
      <div className="wrap">
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "32px", marginBottom: "40px" }}>
          <div>
            <a href="#top" style={{ display: "inline-block", textDecoration: "none" }}>
              <span
                className="display-font"
                style={{
                  fontSize: "26px",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  color: "var(--ink)",
                  lineHeight: 1,
                }}
              >
                bnabeen
              </span>
            </a>
            <p style={{ color: "var(--muted)", fontSize: "15px", maxWidth: "24em", marginTop: "16px" }}>
              Building in Public. Digital Growth, Applied AI, and the Systems.
            </p>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "center" }}>
            <a
              href="https://linkedin.com/in/bnabeen"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--muted)", fontSize: "14px", fontWeight: 600 }}
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <a
              href="https://github.com/bnabeen"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--muted)", fontSize: "14px", fontWeight: 600 }}
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="https://instagram.com/nabeen.me"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--muted)", fontSize: "14px", fontWeight: 600 }}
            >
              <Instagram size={18} /> Instagram
            </a>
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px", borderTop: "1px solid var(--line)", paddingTop: "24px", fontSize: "14px", color: "var(--muted)" }}>
          <span>© {new Date().getFullYear()} Nabeen Budha. All rights reserved.</span>
          
          <button className="back-to-top-text" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Back to top <ArrowUp size={16} />
          </button>
          
          <button className="fab-mobile" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
            <ArrowUp size={24} />
          </button>
        </div>
      </div>
    </footer>
  );
}
