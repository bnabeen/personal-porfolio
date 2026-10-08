import Link from "next/link";
import { getAllBlogs } from "@/lib/blogs";

export const metadata = {
  title: "Blogs | Nabeen Budha",
  description: "Writings on digital growth, applied AI, and content creation.",
};

export default function BlogsPage() {
  const blogs = getAllBlogs();

  return (
    <div className="page-container">
      <div className="wrap">
        <h1 className="display-font" style={{ fontSize: "clamp(36px, 5vw, 56px)", marginBottom: "16px" }}>
          Blogs
        </h1>
        <p className="sub" style={{ fontSize: "20px", marginBottom: "40px" }}>
          Writings on digital growth, applied AI, and content creation.
        </p>

        {/* Blog Post List (Minimalist text list) */}
        <div style={{ display: "flex", flexDirection: "column", marginBottom: "64px" }}>
          {blogs.map((post) => (
            <div
              key={post.slug}
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
                  alignItems: "baseline",
                  gap: "16px",
                  textDecoration: "none",
                  width: "100%",
                }}
              >
                <span
                  style={{
                    fontSize: "16px",
                    color: "var(--ink)",
                    fontWeight: 500,
                  }}
                >
                  {post.title}
                </span>
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

        {/* Substack Newsletter Embed */}
        <div style={{ 
          marginBottom: "64px", 
          padding: "48px 40px", 
          border: "1px solid var(--line)", 
          borderRadius: "4px",
          background: "transparent",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
          gap: "48px",
          alignItems: "center"
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
              <div style={{ width: "8px", height: "8px", background: "var(--ink)" }}></div>
              <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                NEWSLETTER
              </span>
            </div>
            <h2 className="display-font" style={{ fontSize: "28px", marginBottom: "16px" }}>Digital Growth & AI</h2>
            <p style={{ color: "var(--muted)", fontSize: "16px", lineHeight: 1.6, maxWidth: "40ch", margin: 0 }}>
              Occasional letters on digital growth, applied AI, and the systems I build. No spam, unsubscribe any time.
            </p>
          </div>
          <div style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
            <iframe 
              src="https://bnabeen.substack.com/embed" 
              width="100%" 
              height="150" 
              style={{ border: "none", background: "transparent", maxWidth: "480px" }} 
              frameBorder="0" 
              scrolling="no"
              title="Substack Newsletter"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
