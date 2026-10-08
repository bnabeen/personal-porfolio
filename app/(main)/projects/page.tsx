import { projectsData } from "@/lib/data";

export const metadata = {
  title: "Projects | Nabeen Budha",
  description: "Technical projects and systems built by Nabeen Budha.",
};

export default function ProjectsPage() {
  return (
    <div className="page-container">
      <div className="wrap">
        <h1 className="display-font" style={{ fontSize: "clamp(36px, 5vw, 56px)", marginBottom: "16px" }}>
          Projects
        </h1>
        <p className="sub" style={{ fontSize: "20px", marginBottom: "48px" }}>
          Systems and tools that I&apos;ve built.
        </p>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {projectsData.map((project) => (
            <div
              key={project.slug}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                gap: "16px",
                padding: "16px 0",
                borderBottom: "1px solid var(--line)",
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: "12px", minWidth: 0 }}>
                {project.github ? (
                  <a
                    href={project.github.startsWith("http") ? project.github : `https://${project.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: "16px", color: "var(--ink)", fontWeight: 500, textDecoration: "none" }}
                  >
                    {project.title}
                  </a>
                ) : (
                  <span style={{ fontSize: "16px", color: "var(--ink)", fontWeight: 500 }}>
                    {project.title}
                  </span>
                )}
                {project.status && (
                  <span style={{ fontSize: "14px", color: "var(--muted)" }}>
                    — {project.status}
                  </span>
                )}
              </div>
              {project.date && (
                <span style={{ fontSize: "14px", color: "var(--muted)", whiteSpace: "nowrap" }}>
                  {project.date}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
