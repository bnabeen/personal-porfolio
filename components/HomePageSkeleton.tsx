/* ──────────────────────────────────────────────
   Home page skeleton — mirrors the sidebar-layout
────────────────────────────────────────────── */
export default function HomePageSkeleton() {
  return (
    <div className="wrap page-container">
      {/* Fake header placeholder bar */}
      <div className="skeleton-header-bar" />

      <div className="sidebar-layout">
        {/* Left column */}
        <div>
          {/* Hero heading */}
          <div style={{ paddingBottom: "48px" }}>
            <div className="skeleton skeleton--heading" style={{ width: "90%", marginBottom: "12px" }} />
            <div className="skeleton skeleton--heading" style={{ width: "70%", marginBottom: "36px" }} />

            {/* Subtext lines */}
            <div className="skeleton skeleton--text" style={{ width: "100%", marginBottom: "8px" }} />
            <div className="skeleton skeleton--text" style={{ width: "85%", marginBottom: "8px" }} />
            <div className="skeleton skeleton--text" style={{ width: "60%", marginBottom: "32px" }} />

            {/* CTA buttons */}
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <div className="skeleton skeleton--btn" style={{ width: "160px" }} />
              <div className="skeleton skeleton--btn" style={{ width: "160px" }} />
            </div>
          </div>

          {/* Mobile profile block */}
          <div className="mobile-only home-profile">
            <div className="skeleton skeleton--avatar home-profile-photo" />
            <div className="home-profile-info" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div className="skeleton skeleton--text" style={{ width: "80%" }} />
              <div className="skeleton skeleton--text" style={{ width: "70%" }} />
              <div className="skeleton skeleton--text" style={{ width: "55%" }} />
            </div>
          </div>

          {/* About section */}
          <div style={{ paddingTop: "48px", borderTop: "1px solid var(--line)" }}>
            <div className="skeleton skeleton--subheading" style={{ width: "40%", marginBottom: "16px" }} />
            <div className="skeleton skeleton--text" style={{ width: "100%", marginBottom: "8px" }} />
            <div className="skeleton skeleton--text" style={{ width: "95%", marginBottom: "8px" }} />
            <div className="skeleton skeleton--text" style={{ width: "80%", marginBottom: "24px" }} />
            <div className="skeleton skeleton--text" style={{ width: "100%", marginBottom: "8px" }} />
            <div className="skeleton skeleton--text" style={{ width: "90%" }} />
          </div>
        </div>

        {/* Right sidebar */}
        <aside style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <div className="desktop-only" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div className="skeleton skeleton--avatar" style={{ width: "100%", maxWidth: "280px", aspectRatio: "1/1", borderRadius: "4px" }} />
            <div className="skeleton skeleton--text" style={{ width: "90%" }} />
            <div className="skeleton skeleton--text" style={{ width: "75%" }} />
            <div className="skeleton skeleton--text" style={{ width: "60%" }} />
          </div>
          {/* Latest writing list */}
          <div style={{ paddingTop: "24px", borderTop: "1px solid var(--line)", display: "flex", flexDirection: "column", gap: "16px" }}>
            {[1, 2, 3, 4].map(i => (
              <div key={i}>
                <div className="skeleton skeleton--text" style={{ width: "85%", marginBottom: "6px" }} />
                <div className="skeleton skeleton--text" style={{ width: "50%" }} />
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
