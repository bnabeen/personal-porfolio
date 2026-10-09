"use client";

import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global Error Caught:", error);
  }, [error]);

  return (
    <>
      <Header />
      <div className="page-container wrap" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "70vh", textAlign: "center" }}>
        <h1 className="display-font" style={{ fontSize: "28px", margin: 0, color: "var(--ink)", lineHeight: 1, marginBottom: "16px" }}>Oops!</h1>
        <h2 className="display-font" style={{ fontSize: "18px", marginBottom: "16px" }}>Something went wrong</h2>
        <p style={{ color: "var(--ink)", marginBottom: "32px", fontSize: "15px", maxWidth: "400px" }}>
          We hit an unexpected snag while trying to load this page.
        </p>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
          <button onClick={() => reset()} className="hero-btn hero-btn--primary" style={{ cursor: "pointer" }}>
            Try again
          </button>
          <Link href="/" className="hero-btn hero-btn--outline">
            Go Home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
