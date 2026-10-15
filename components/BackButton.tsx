import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  href?: string;
  label?: string;
  style?: React.CSSProperties;
  className?: string;
}

export default function BackButton({
  href = "/",
  label = "Back to Home",
  style,
  className = "",
}: BackButtonProps) {
  return (
    <div style={{ marginBottom: "16px", ...style }} className={className}>
      <Link
        href={href}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          color: "var(--ink)",
          fontSize: "14px",
          fontWeight: 500,
          textDecoration: "none",
          opacity: 0.8,
          transition: "opacity 0.2s ease, transform 0.2s ease",
        }}
        className="group hover:opacity-100"
      >
        <ArrowLeft
          size={16}
          className="transition-transform duration-200 ease-out group-hover:-translate-x-1"
          style={{ color: "var(--ink)" }}
        />
        <span>{label}</span>
      </Link>
    </div>
  );
}
