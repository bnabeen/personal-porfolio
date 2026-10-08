import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";
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
            <dt style={{ color: "var(--muted)", fontWeight: 600, fontSize: "clamp(14px, 3.5vw, 15px)" }}>Now</dt>
            <dd style={{ color: "var(--ink)", fontWeight: 500, fontSize: "clamp(16px, 4.5vw, 18px)" }}>Student | Building system around Content</dd>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <dt style={{ color: "var(--muted)", fontWeight: 600, fontSize: "clamp(14px, 3.5vw, 15px)" }}>Focus</dt>
            <dd style={{ color: "var(--ink)", fontWeight: 500, fontSize: "clamp(16px, 4.5vw, 18px)" }}>Content, Applied AI & Digital Growth</dd>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <dt style={{ color: "var(--muted)", fontWeight: 600, fontSize: "clamp(14px, 3.5vw, 15px)" }}>Based in</dt>
            <dd style={{ color: "var(--ink)", fontWeight: 500, fontSize: "clamp(16px, 4.5vw, 18px)" }}>Kathmandu, Nepal</dd>
          </div>
        </dl>

        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginTop: "8px" }}>
          <a href="https://github.com/bnabeen" target="_blank" rel="noopener noreferrer" style={{ color: "var(--muted)" }} aria-label="GitHub"><Github size={20} /></a>
          <a href="https://linkedin.com/in/bnabeen" target="_blank" rel="noopener noreferrer" style={{ color: "var(--muted)" }} aria-label="LinkedIn"><Linkedin size={20} /></a>
          <a href="https://instagram.com/nabeen.me" target="_blank" rel="noopener noreferrer" style={{ color: "var(--muted)" }} aria-label="Instagram"><Instagram size={20} /></a>
        </div>
      </div>

      {/* Latest Blogs */}
      <div style={{ marginTop: "16px", paddingTop: "32px", borderTop: "1px solid var(--line)" }}>
        <h3 style={{ fontSize: "13px", fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "16px" }}>
          Latest Writing
        </h3>
        <ul className="latest-writing-list">
          {topBlogs.map((blog) => (
            <li key={blog.slug}>
              <Link href={`/blogs/${blog.slug}`} style={{ textDecoration: "none", display: "block" }} className="group">
                <span style={{ fontSize: "15px", fontWeight: 600, color: "var(--ink)", display: "block", marginBottom: "4px", transition: "color 0.2s" }} className="group-hover:text-blue">
                  {blog.title}
                </span>
                <span style={{ fontSize: "13px", color: "var(--muted)" }}>{blog.readTime} · {blog.category}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
