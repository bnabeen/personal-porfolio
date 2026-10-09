import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="page-container wrap" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "70vh", textAlign: "center" }}>
        <h1 className="display-font" style={{ fontSize: "28px", margin: 0, color: "var(--ink)", lineHeight: 1 }}>404</h1>
        <h2 className="display-font" style={{ fontSize: "18px", marginTop: "16px", marginBottom: "16px" }}>Page Not Found</h2>
        <p style={{ color: "var(--ink)", marginBottom: "32px", fontSize: "15px", maxWidth: "400px" }}>
          The page you are looking for doesn't exist, has been moved, or is temporarily unavailable.
        </p>
        <Link href="/" className="hero-btn hero-btn--primary">
          Back to Home
        </Link>
      </div>
      <Footer />
    </>
  );
}
