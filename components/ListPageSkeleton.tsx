/* Generic skeleton for list-based pages (Blogs, Projects, Work) */
export default function ListPageSkeleton({ rows = 6 }: { rows?: number }) {
  return (
    <div className="wrap page-container">
      {/* Page heading */}
      <div className="skeleton skeleton--subheading" style={{ width: "260px", marginBottom: "12px" }} />
      <div className="skeleton skeleton--text"      style={{ width: "420px", marginBottom: "48px" }} />

      {/* Card rows */}
      {Array.from({ length: rows }).map((_, i) => (
        <div
          key={i}
          style={{
            padding: "24px 0",
            borderBottom: "1px solid var(--line)",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div className="skeleton skeleton--text" style={{ width: "40%", height: "20px" }} />
          <div className="skeleton skeleton--text" style={{ width: "70%" }} />
          <div className="skeleton skeleton--text" style={{ width: "50%" }} />
        </div>
      ))}
    </div>
  );
}
