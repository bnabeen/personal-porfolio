import Link from "next/link";
import HomeSidebar from "@/components/HomeSidebar";

export default function Home() {
  return (
    <div className="wrap page-container">
      <div className="sidebar-layout">
        
        {/* Left Content Column */}
        <div>
          {/* Hero Section */}
          <div style={{ paddingBottom: "64px" }}>
            <h1 className="display-font hero-title" style={{ 
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
              <Link href="/work" className="hero-btn hero-btn--primary">
                View projects <span aria-hidden="true" style={{ opacity: 0.7 }}>→</span>
              </Link>
              <Link href="/blogs" className="hero-btn hero-btn--outline">
                Read the blog <span aria-hidden="true" style={{ opacity: 0.7 }}>→</span>
              </Link>
            </div>
          </div>

          {/* Mobile / Tablet Profile Section */}
          <div className="mobile-only home-profile">
            <div className="home-profile-photo" style={{ aspectRatio: "1/1", background: "var(--line)", borderRadius: "4px", overflow: "hidden", position: "relative" }}>
              <img src="/profile.jpeg" alt="Nabeen Budha" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>

            <div className="home-profile-info">
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

            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <a href="https://github.com/bnabeen" target="_blank" rel="noopener noreferrer" style={{ color: "var(--muted)" }} aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.6 0-1.4-.5-2.5-1.5-3.4.1-.3.7-1.6-.1-3.4 0 0-1.2-.4-3.9 1.4a12.3 12.3 0 0 0-7.2 0C4.8 2.2 3.6 2.6 3.6 2.6c-.8 1.8-.2 3.1-.1 3.4-1 1-1.5 2-1.5 3.4 0 3.6 3 5.6 6 5.6a4.8 4.8 0 0 0-1 3.2v4"></path><path d="M9 18c-4.5 1.5-5-2.5-7-3"></path></svg>
              </a>
              <a href="https://linkedin.com/in/bnabeen" target="_blank" rel="noopener noreferrer" style={{ color: "var(--muted)" }} aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://instagram.com/nabeen.me" target="_blank" rel="noopener noreferrer" style={{ color: "var(--muted)" }} aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
            </div>
            </div>
          </div>

          {/* About Section */}
          <div style={{ paddingTop: "48px", borderTop: "1px solid var(--line)" }}>
            <h2 className="display-font" style={{ fontSize: "clamp(28px, 4vw, 38px)", marginBottom: "12px", letterSpacing: "-0.02em" }}>About Me</h2>
            <p style={{ color: "var(--muted)", fontSize: "18px", marginBottom: "20px" }}>Student & Builder</p>
            <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.7, marginBottom: "20px" }}>
              I am a student specializing in digital growth, applied AI, and content creation. I build systems and run experiments that help businesses and creators turn ideas into measurable growth.
            </p>
            <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.7, margin: 0 }}>
              My focus is at the intersection of technology and marketing — exploring how tools like AI can optimize workflows without losing the human touch, and how strategic content distribution earns attention and trust.
            </p>
          </div>
        </div>

        {/* Right Sidebar Column */}
        <HomeSidebar />

      </div>

      {/* Newsletter Section */}
      <div style={{ padding: "48px 0", borderTop: "1px solid var(--line)" }}>
        <div className="box-padding newsletter-grid" style={{ 
          border: "1px solid var(--line)", 
          borderRadius: "12px",
          background: "transparent"
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
          <div className="newsletter-embed">
            <iframe
              id="home-substack-embed"
              src="https://bnabeen.substack.com/embed"
              width="100%"
              height="150"
              style={{ border: "none", background: "transparent", maxWidth: "480px" }}
              frameBorder="0"
              scrolling="no"
              title="Subscribe to Nabeen's Substack newsletter"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
