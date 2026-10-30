import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EntryRow from "@/components/EntryRow";
import { getAllPosts } from "@/lib/blogs";

export const metadata: Metadata = {
  title: "Writing",
  description: "All writings, notes and essays by Nabeen Budha.",
  alternates: {
    canonical: "https://nabinbudha.com.np/writing",
  },
  openGraph: {
    title: "Writing · Nabeen Budha",
    description: "All writings, notes and essays by Nabeen Budha.",
    url: "https://nabinbudha.com.np/writing",
    type: "website",
  },
};

export default function WritingArchivePage() {
  const posts = getAllPosts();

  return (
    <>
      <Header />

      <main>
        <section className="section" style={{ marginTop: 0 }}>
          <h1 className="section-label">Writing</h1>

          <div className="entries-list">
            {posts.map((post) => (
              <EntryRow
                key={post.slug}
                title={post.title}
                date={post.date}
                description={post.excerpt}
                link={`/writing/${post.slug}`}
              />
            ))}
          </div>

          <div style={{ marginTop: "var(--space-40)" }}>
            <Link href="/" className="back-link">
              ← Back to home
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
