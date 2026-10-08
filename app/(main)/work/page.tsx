import { worksData } from "@/lib/data";

export const metadata = {
  title: "Work Experience | Nabeen Budha",
  description: "Work experience and roles of Nabeen Budha.",
};

export default function WorkPage() {
  return (
    <div className="page-container">
      <div className="wrap">
        <h1 className="display-font" style={{ fontSize: "clamp(36px, 5vw, 56px)", marginBottom: "16px" }}>
          Work Experience
        </h1>
        <p className="sub" style={{ fontSize: "20px", marginBottom: "48px" }}>
          Companies and roles I&apos;ve worked with.
        </p>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {worksData.map((exp) => {
            const roleCompany = exp.role ? `${exp.role} — ${exp.title}` : exp.title;
            return (
              <div
                key={exp.slug}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  gap: "16px",
                  padding: "16px 0",
                  borderBottom: "1px solid var(--line)",
                }}
              >
                <span style={{ fontSize: "16px", color: "var(--ink)", fontWeight: 500 }}>
                  {roleCompany}
                </span>
                {exp.date && (
                  <span style={{ fontSize: "14px", color: "var(--muted)", whiteSpace: "nowrap" }}>
                    {exp.date}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
