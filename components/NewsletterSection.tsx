import SubstackEmbed from "@/components/SubstackEmbed";

interface NewsletterSectionProps {
  style?: React.CSSProperties;
  className?: string;
}

export default function NewsletterSection({ style, className }: NewsletterSectionProps) {
  return (
    <div style={{ padding: "20px 0", borderTop: "1px solid var(--line)", ...style }} className={className}>
      <div
        className="box-padding newsletter-grid"
        style={{
          border: "1px solid var(--line)",
          borderRadius: "12px",
          background: "transparent",
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
            <div style={{ width: "8px", height: "8px", background: "var(--ink)" }}></div>
            <h2
              style={{
                fontSize: "18px",
                fontWeight: 700,
                color: "var(--ink)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                margin: 0,
              }}
            >
              Newsletter
            </h2>
          </div>
          <p style={{ color: "var(--ink)", fontSize: "15px", fontWeight: "bold", marginBottom: "8px" }}>
            A short letter on AI, content, and growth
          </p>
          <p style={{ color: "var(--ink)", fontSize: "15px", lineHeight: 1.6, maxWidth: "40ch", margin: 0 }}>
            What I’m learning and building, in plain language. Weekly. No spam, unsubscribe any time.
          </p>
        </div>
        <SubstackEmbed />
      </div>
    </div>
  );
}
