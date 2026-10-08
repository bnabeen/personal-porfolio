interface ContactLink {
  label: string;
  value: string;
  href: string;
}

const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "info.nabeenbudha@gmail.com",
    href: "mailto:info.nabeenbudha@gmail.com",
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
    value: "@nabeen.me",
    href: "https://instagram.com/nabeen.me",
  },
  {
    label: "Substack",
    value: "bnabeen.substack.com",
    href: "https://bnabeen.substack.com",
  },
];

export default function ContactSection() {
  return (
    <div className="page-container">
      <div className="wrap">
        <h1 className="display-font" style={{ fontSize: "clamp(36px, 5vw, 56px)", marginBottom: "16px" }}>
          Contact
        </h1>
        <p className="sub" style={{ fontSize: "20px", marginBottom: "48px" }}>
          Get in touch for collaborations, questions, or just to say hi.
        </p>

        {/* Primary Direct Email */}
        <div style={{ marginBottom: "56px" }}>
          <p style={{ color: "var(--muted)", fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600, marginBottom: "8px" }}>
            Direct Email
          </p>
          <a
            href="mailto:info.nabeenbudha@gmail.com"
            style={{
              fontSize: "clamp(22px, 4vw, 36px)",
              fontWeight: 600,
              color: "var(--ink)",
              textDecoration: "none",
              display: "inline-block",
              borderBottom: "2px solid var(--ink)",
              paddingBottom: "4px",
            }}
          >
            info.nabeenbudha@gmail.com
          </a>
        </div>

        {/* Channels List (Minimalist text list) */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {contactLinks.map((item) => (
            <div
              key={item.label}
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
                  alignItems: "baseline",
                  gap: "16px",
                  textDecoration: "none",
                  width: "100%",
                }}
              >
                <span style={{ fontSize: "16px", color: "var(--ink)", fontWeight: 500 }}>
                  {item.label}
                </span>
                <span style={{ fontSize: "14px", color: "var(--muted)", whiteSpace: "nowrap" }}>
                  {item.value} ↗
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
