import { ArrowRight } from "lucide-react";

interface ContactLink {
  label: string;
  value: string;
  href: string;
}

const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "bnabeen.me@gmail.com",
    href: "mailto:bnabeen.me@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "@bnabeen",
    href: "https://linkedin.com/in/bnabeen",
  },
  {
    label: "GitHub",
    value: "@bnabeen",
    href: "https://github.com/bnabeen",
  },
  {
    label: "Instagram",
    value: "@bnabeen.me",
    href: "https://instagram.com/bnabeen.me",
  },
  {
    label: "Substack",
    value: "bnabeen.substack.com",
    href: "https://bnabeen.substack.com",
  },
];

export default function ContactSection() {
  return (
    <div id="contact" style={{ padding: "20px 0", borderTop: "1px solid var(--line)" }}>
      <h2 style={{ fontSize: "18px", fontWeight: 700, color: "var(--ink)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "8px" }}>Get in Touch</h2>
      <p style={{ fontSize: "15px", color: "var(--ink)", marginBottom: "24px" }}>Reply within 5 working days.</p>

      {/* Channels List (Minimalist text list) */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {contactLinks.map((item) => (
          <div
            key={item.label}
            className="group"
            style={{
              padding: "16px 0",
              borderBottom: "1px solid var(--line)",
            }}
          >
            <a
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "16px",
                textDecoration: "none",
                width: "100%",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "15px", color: "var(--ink)", fontWeight: "bold", transition: "color 0.2s" }}>
                  {item.label}
                </span>
                <ArrowRight size={14} className="opacity-0 -translate-x-4 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0" style={{ color: "var(--ink)" }} />
              </div>
              <span style={{ fontSize: "15px", color: "var(--ink)", whiteSpace: "nowrap" }}>
                {item.value}
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
