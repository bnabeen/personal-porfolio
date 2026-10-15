import { worksData } from "@/lib/data";
import BackButton from "@/components/BackButton";

export const metadata = {
  title: "Work Experience | Nabeen Budha",
  description: "Work experience and roles of Nabeen Budha.",
};

export default function WorkPage() {
  return (
    <div className="page-container">
      <div className="wrap">
        <BackButton />
        <div style={{ paddingTop: "20px", paddingBottom: "20px", borderTop: "1px solid var(--line)" }}>
          <h1 style={{ fontSize: "28px", fontWeight: 700, color: "var(--ink)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "24px", margin: 0 }}>
            Work Experience
          </h1>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {worksData.map((exp) => {
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
                    <span style={{ fontSize: "15px", color: "var(--ink)", fontWeight: "bold" }}>
                      {exp.role || exp.title}
                    </span>
                    {exp.role && (
                      <>
                        <span style={{ fontSize: "15px", color: "var(--ink)" }}>·</span>
                        <span style={{ fontSize: "15px", color: "var(--ink)" }}>
                          {exp.title}
                        </span>
                      </>
                    )}
                  </div>
                  {exp.date && (
                    <span style={{ fontSize: "15px", color: "var(--ink)", whiteSpace: "nowrap", marginTop: "2px" }}>
                      {exp.date}
                    </span>
                  )}
                </div>
                
                {exp.tagline && (
                  <div style={{ fontSize: "15px", color: "var(--ink)", fontWeight: 500 }}>
                    {exp.tagline}
                  </div>
                )}
                
                {exp.desc && (
                  <div style={{ fontSize: "15px", color: "var(--ink)", lineHeight: 1.6 }}>
                    {exp.desc}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>
  );
}
