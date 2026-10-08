"use client";

import { Github, Linkedin, Instagram, ArrowUp } from "lucide-react";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer style={{ padding: "32px 0", background: "var(--bg)", borderTop: "1px solid var(--line)" }}>
      <div className="wrap" style={{ textAlign: "center" }}>
        <span style={{ fontSize: "14px", color: "var(--muted)" }}>
          © 2026 Nabeen Budha. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
