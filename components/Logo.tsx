import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
      <span
        style={{
          fontSize: "18px",
          fontWeight: 500,
          color: "var(--ink)",
          lineHeight: 1,
          letterSpacing: "-0.01em",
        }}
      >
        bnabeen
      </span>
    </Link>
  );
}
