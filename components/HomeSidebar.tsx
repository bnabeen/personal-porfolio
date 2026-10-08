import Link from "next/link";
import { Github, Linkedin, Instagram, ArrowRight } from "lucide-react";
import { getAllBlogs } from "@/lib/blogs";

export default function HomeSidebar() {
  const topBlogs = getAllBlogs().slice(0, 5);

  return (
    <aside className="home-sidebar" style={{ display: "flex", flexDirection: "column", gap: "32px", width: "100%" }}>
      <div className="desktop-only" style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        <div style={{
          aspectRatio: "1/1",
          width: "100%",
          maxWidth: "280px",
          background: "var(--line)",
          borderRadius: "4px",
          overflow: "hidden",
          position: "relative"
        }}>
          <img
            src="/profile.jpeg"
            alt="Nabeen Budha"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>

        <dl style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <dt style={{ color: "var(--muted)", fontWeight: 600, fontSize: "13px" }}>Now</dt>
            <dd style={{ color: "var(--ink)", fontWeight: 500, fontSize: "15px" }}>Student | Building system around Content</dd>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <dt style={{ color: "var(--muted)", fontWeight: 600, fontSize: "13px" }}>Focus</dt>
            <dd style={{ color: "var(--ink)", fontWeight: 500, fontSize: "15px" }}>Content, Applied AI & Digital Growth</dd>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <dt style={{ color: "var(--muted)", fontWeight: 600, fontSize: "13px" }}>Based in</dt>
            <dd style={{ color: "var(--ink)", fontWeight: 500, fontSize: "15px" }}>Kathmandu, Nepal</dd>
          </div>
        </dl>

        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginTop: "8px" }}>
          <a href="https://github.com/bnabeen" target="_blank" rel="noopener noreferrer" style={{ color: "var(--muted)" }} aria-label="GitHub"><Github size={20} /></a>
          <a href="https://linkedin.com/in/bnabeen" target="_blank" rel="noopener noreferrer" style={{ color: "var(--muted)" }} aria-label="LinkedIn"><Linkedin size={20} /></a>
          <a href="https://instagram.com/bnabeen.me" target="_blank" rel="noopener noreferrer" style={{ color: "var(--muted)" }} aria-label="Instagram"><Instagram size={20} /></a>
        </div>
      </div>

      {/* Latest Blogs */}
      <div className="desktop-only">
        <div id="blogs-desktop" style={{ marginTop: "16px", paddingTop: "32px", borderTop: "1px solid var(--line)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
            <h3 style={{ fontSize: "13px", fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.05em", margin: 0 }}>
              Latest Writing
            </h3>
            <Link href="/blogs" style={{ fontSize: "13px", fontWeight: 500, color: "var(--muted)", textDecoration: "none", transition: "color 0.2s" }}>
              [view all]
            </Link>
          </div>
          <ul className="latest-writing-list">
            {topBlogs.map((blog) => (
              <li key={blog.slug}>
                <Link href={`/blogs/${blog.slug}`} style={{ textDecoration: "none", display: "block" }} className="group">
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                    <span style={{ fontSize: "15px", fontWeight: 600, color: "var(--ink)", transition: "color 0.2s" }}>
                      {blog.title}
                    </span>
                    <ArrowRight size={14} className="opacity-0 -translate-x-4 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0" style={{ color: "var(--muted)" }} />
                  </div>
                  <span style={{ fontSize: "13px", color: "var(--muted)" }}>{blog.date} · {blog.category}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
