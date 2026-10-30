"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Prose from "@/components/Prose";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <>
      <Header />
      <main>
        <Prose>
          <p>Something went wrong.</p>
          <p>
            <button
              onClick={() => reset()}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                font: "inherit",
                cursor: "pointer",
                color: "var(--ink)",
                textDecoration: "underline",
              }}
            >
              Try again
            </button>{" "}
            or <Link href="/">go home</Link>.
          </p>
        </Prose>
      </main>
      <Footer />
    </>
  );
}
