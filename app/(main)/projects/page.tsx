import { projectsData } from "@/lib/data";
import { ArrowRight, Github, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Projects | Nabeen Budha",
  description: "Technical projects and systems built by Nabeen Budha.",
};

export default function ProjectsPage() {
  return (
    <div className="page-container">
      <div className="wrap">
        <div style={{ paddingTop: "20px", paddingBottom: "20px", borderTop: "1px solid var(--line)" }}>
          <h1 style={{ fontSize: "13px", fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "24px", margin: 0 }}>
            Projects
          </h1>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {projectsData.map((project) => (
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
      </div>
    </div>
  );
}
