import Link from "next/link";
import { getAllBlogs } from "@/lib/blogs";
import { ArrowRight } from "lucide-react";
import SubstackEmbed from "@/components/SubstackEmbed";

export const metadata = {
  title: "Blogs | Nabeen Budha",
  description: "Writings on digital growth, applied AI, and content creation.",
};

export default function BlogsPage() {
  const blogs = getAllBlogs();

  return (
    <div className="page-container">
      <div className="wrap">
        <div style={{ paddingTop: "20px", paddingBottom: "20px", borderTop: "1px solid var(--line)" }}>
          <h1 style={{ fontSize: "13px", fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "24px", margin: 0 }}>
            Latest Writing
          </h1>

        {/* Blog Post List (Minimalist text list) */}
        <div style={{ display: "flex", flexDirection: "column", marginBottom: "64px" }}>
          {blogs.map((post) => (
            <div
              key={post.slug}
              className="group"
              style={{
                padding: "16px 0",
                borderBottom: "1px solid var(--line)",
              }}
            >
              <Link
                href={`/blogs/${post.slug}`}
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
                  <span
                    style={{
                      fontSize: "16px",
                      color: "var(--ink)",
                      fontWeight: 500,
                    }}
                  >
                    {post.title}
                  </span>
                  <ArrowRight size={16} className="opacity-0 -translate-x-4 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0" style={{ color: "var(--muted)" }} />
                </div>
                {post.date && (
                  <span
                    style={{
                      fontSize: "14px",
                      color: "var(--muted)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {post.date}
                  </span>
                )}
              </Link>
            </div>
          ))}

          {blogs.length === 0 && (
            <p style={{ color: "var(--muted)", padding: "32px 0" }}>No posts found.</p>
          )}
        </div>

        </div>

        {/* Newsletter Section */}
        <div style={{ padding: "20px 0", borderTop: "1px solid var(--line)" }}>
          <div className="box-padding newsletter-grid" style={{
            border: "1px solid var(--line)",
            borderRadius: "12px",
            background: "transparent"
          }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                <div style={{ width: "8px", height: "8px", background: "var(--ink)" }}></div>
                <h2 style={{ fontSize: "13px", fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.05em", margin: 0 }}>
                  Newsletter
                </h2>
              </div>
              <p style={{ color: "var(--muted)", fontSize: "16px", lineHeight: 1.6, maxWidth: "40ch", margin: 0 }}>
                Occasional letters on digital growth, applied AI, and the systems I build. No spam, unsubscribe any time.
              </p>
            </div>
            <SubstackEmbed />
          </div>
        </div>
      </div>
    </div>
  );
}
