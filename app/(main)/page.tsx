import Link from "next/link";
import HomeSidebar from "@/components/HomeSidebar";
import SubstackEmbed from "@/components/SubstackEmbed";
import ContactSection from "@/components/ContactSection";
import { projectsData, venturesData } from "@/lib/data";
import { getAllBlogs } from "@/lib/blogs";
import { ArrowRight, Github, ExternalLink } from "lucide-react";

export default function Home() {
  const topBlogs = getAllBlogs().slice(0, 5);

  return (
    <div className="wrap page-container">
      <div className="sidebar-layout main-content-gap">

        {/* Left Content Column */}
        <div>
          {/* Hero Section */}
          <div style={{ paddingBottom: "20px" }}>
            <h1 className="display-font hero-title" style={{
              fontSize: "24px",
              marginBottom: "24px"
            }}>
              I build systems for digital growth and content creation.
            </h1>

            <p style={{
              fontSize: "18px",
              color: "var(--muted)",
              lineHeight: 1.6,
              maxWidth: "60ch",
              marginBottom: "36px"
            }}>
              I'm Nabeen — a student and builder focused on applied AI, marketing, and content systems. I help businesses and creators turn ideas into measurable growth.
            </p>

            <div className="hero-buttons">
              <Link href="/#contact" className="hero-btn hero-btn--primary">
                Let's talk <span aria-hidden="true" style={{ opacity: 0.7 }}>→</span>
              </Link>
              <Link href="/blogs" className="hero-btn hero-btn--outline">
                Read the blog <span aria-hidden="true" style={{ opacity: 0.7 }}>→</span>
              </Link>
            </div>
          </div>
          {/* Mobile / Tablet Profile Section */}
          <div className="mobile-only home-profile" style={{ marginBottom: "20px" }}>
            <div className="home-profile-photo" style={{ aspectRatio: "1/1", background: "var(--line)", borderRadius: "4px", overflow: "hidden", position: "relative" }}>
              <img src="/profile.jpeg" alt="Nabeen Budha" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>

            <div className="home-profile-info">
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

              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <a href="https://github.com/bnabeen" target="_blank" rel="noopener noreferrer" style={{ color: "var(--muted)" }} aria-label="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.6 0-1.4-.5-2.5-1.5-3.4.1-.3.7-1.6-.1-3.4 0 0-1.2-.4-3.9 1.4a12.3 12.3 0 0 0-7.2 0C4.8 2.2 3.6 2.6 3.6 2.6c-.8 1.8-.2 3.1-.1 3.4-1 1-1.5 2-1.5 3.4 0 3.6 3 5.6 6 5.6a4.8 4.8 0 0 0-1 3.2v4"></path><path d="M9 18c-4.5 1.5-5-2.5-7-3"></path></svg>
                </a>
                <a href="https://linkedin.com/in/bnabeen" target="_blank" rel="noopener noreferrer" style={{ color: "var(--muted)" }} aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="https://instagram.com/bnabeen.me" target="_blank" rel="noopener noreferrer" style={{ color: "var(--muted)" }} aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                </a>
              </div>
            </div>
          </div>

          <div id="projects" style={{ paddingTop: "20px", paddingBottom: "20px", borderTop: "1px solid var(--line)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
              <h2 style={{ fontSize: "13px", fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.05em", margin: 0 }}>Projects</h2>
              <Link href="/projects" style={{ fontSize: "13px", fontWeight: 500, color: "var(--muted)", textDecoration: "none", transition: "color 0.2s" }}>
                [view all]
              </Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {projectsData.slice(0, 5).map((project) => (
                <div
                  key={project.slug}
                  className="group"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "16px",
                    padding: "16px 0",
                    borderBottom: "1px solid var(--line)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", minWidth: 0 }}>
                    <span style={{ fontSize: "15px", color: "var(--ink)", fontWeight: 600 }}>
                      {project.title}
                    </span>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    {project.walkthrough && (
                      <a
                        href={project.walkthrough.startsWith("http") ? project.walkthrough : (project.walkthrough === "#" ? "#" : `https://${project.walkthrough}`)}
                        target={project.walkthrough === "#" ? undefined : "_blank"}
                        rel={project.walkthrough === "#" ? undefined : "noopener noreferrer"}
                        className="icon-link"
                        style={{ fontSize: "13px", fontWeight: 500, textDecoration: "none" }}
                      >
                        Walk through
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github.startsWith("http") ? project.github : `https://${project.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-link"
                        aria-label="GitHub Repository"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo.startsWith("http") ? project.demo : `https://${project.demo}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-link"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Works Section */}
          <div id="work" style={{ paddingTop: "20px", paddingBottom: "20px", borderTop: "1px solid var(--line)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
              <h2 style={{ fontSize: "13px", fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.05em", margin: 0 }}>Works</h2>
              <Link href="/work" style={{ fontSize: "13px", fontWeight: 500, color: "var(--muted)", textDecoration: "none", transition: "color 0.2s" }}>
                [view all]
              </Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {venturesData.slice(0, 3).map((exp) => {
                return (
                  <div
                    key={exp.slug}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                      padding: "20px 0",
                      borderBottom: "1px solid var(--line)",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px" }}>
                      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px" }}>
                        <span style={{ fontSize: "16px", color: "var(--ink)", fontWeight: 600 }}>
                          {exp.role || exp.title}
                        </span>
                        {exp.role && (
                          <>
                            <span style={{ fontSize: "15px", color: "var(--muted)" }}>·</span>
                            <span style={{ fontSize: "15px", color: "var(--muted)" }}>
                              {exp.title}
                            </span>
                          </>
                        )}
                      </div>
                      {exp.date && (
                        <span style={{ fontSize: "14px", color: "var(--muted)", whiteSpace: "nowrap", marginTop: "2px" }}>
                          {exp.date}
                        </span>
                      )}
                    </div>
                    
                    {exp.tagline && (
                      <div style={{ fontSize: "14px", color: "var(--muted)", fontWeight: 500 }}>
                        {exp.tagline}
                      </div>
                    )}
                    
                    {exp.desc && (
                      <div style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.6 }}>
                        {exp.desc}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Blogs Section */}
          <div className="mobile-only" id="blogs" style={{ flexDirection: "column", paddingTop: "20px", paddingBottom: "20px", borderTop: "1px solid var(--line)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
              <h2 style={{ fontSize: "13px", fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.05em", margin: 0 }}>Latest Writing</h2>
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


          {/* About Section */}
          <div style={{ paddingTop: "20px", paddingBottom: "20px", borderTop: "1px solid var(--line)" }}>
            <h2 style={{ fontSize: "13px", fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "24px", margin: 0 }}>A Little About Me</h2>
            <div style={{ marginTop: "16px" }}>
              <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.7, marginBottom: "20px" }}>
                I am a student specializing in digital growth, applied AI, and content creation. I build systems and run experiments that help businesses and creators turn ideas into measurable growth.
              </p>
              <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.7, margin: 0 }}>
                My focus is at the intersection of technology and marketing — exploring how tools like AI can optimize workflows without losing the human touch, and how strategic content distribution earns attention and trust.
              </p>
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

        {/* Right Sidebar Column */}
        <HomeSidebar />

      </div>


      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
