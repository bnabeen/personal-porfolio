"use client";

import { Github, Linkedin, Instagram, ArrowUp } from "lucide-react";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer style={{ padding: "32px 0", background: "var(--bg)", borderTop: "1px solid var(--line)" }}>
      <div className="wrap" style={{ textAlign: "center" }}>
        <span style={{ fontSize: "15px", color: "var(--ink)" }}>
          © 2026 Nabeen Budha. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
