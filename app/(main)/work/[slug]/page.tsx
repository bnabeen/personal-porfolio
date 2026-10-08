import { notFound } from "next/navigation";
import Link from "next/link";
import { worksData } from "@/lib/data";
import { ArrowLeft, CheckCircle2, AlertTriangle, Sparkles, ArrowRight } from "lucide-react";

export async function generateStaticParams() {
  return worksData.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const item = worksData.find((w) => w.slug === params.slug);
  if (!item) return { title: "Work Not Found" };
  return {
    title: `${item.title} | Nabeen Budha`,
    description: item.tagline,
  };
}

export default function WorkDetailPage({ params }: { params: { slug: string } }) {
  const item = worksData.find((w) => w.slug === params.slug);

  if (!item) {
    notFound();
  }

  return (
    <div style={{ paddingTop: "40px", paddingBottom: "96px" }}>
      <div className="wrap" style={{ maxWidth: "900px" }}>
        <Link href="/work" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--blue)", fontWeight: 600, fontSize: "15px", marginBottom: "32px" }}>
          <ArrowLeft size={18} /> Back to Work
        </Link>

        <div style={{ marginBottom: "32px" }}>
          <span className="badge" style={{ marginBottom: "16px" }}>{item.type} #{item.num}</span>
          <h1 style={{ fontSize: "clamp(32px, 4.5vw, 52px)", lineHeight: 1.1, marginBottom: "16px" }}>
            {item.title}
          </h1>
          <p style={{ fontSize: "20px", color: "var(--muted)", fontWeight: 500 }}>
            {item.tagline}
          </p>
        </div>

        {/* System Flow Diagram if exists */}
        {item.flow && (
          <div style={{ padding: "24px 32px", background: "var(--soft)", borderRadius: "20px", border: "1px solid var(--line)", marginBottom: "48px" }}>
            <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "12px" }}>
              System Architecture Flow
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center", fontSize: "15px", fontWeight: 700, color: "var(--blue)" }}>
              {item.flow.map((step, idx) => (
                <span key={step} style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ background: "var(--bg)", border: "1px solid var(--line)", padding: "6px 14px", borderRadius: "999px" }}>
                    {step}
                  </span>
                  {idx < item.flow!.length - 1 && <span style={{ color: "var(--muted)" }}>→</span>}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Metrics Grid */}
        {item.metrics && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginBottom: "48px" }}>
            {item.metrics.map((m) => (
              <div key={m.label} style={{ background: "var(--soft)", padding: "24px", borderRadius: "18px", border: "1px solid var(--line)" }}>
                <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--muted)", textTransform: "uppercase" }}>{m.label}</span>
                <div style={{ fontSize: "36px", fontWeight: 800, color: "var(--blue)", margin: "4px 0" }}>{m.value}</div>
                <p style={{ fontSize: "13px", color: "var(--muted)", margin: 0 }}>{m.sub}</p>
              </div>
            ))}
          </div>
        )}

        {/* Core Question & Problem */}
        <div style={{ display: "grid", gap: "28px", fontSize: "17px", lineHeight: 1.7 }}>
          {item.question && (
            <div style={{ background: "var(--soft)", padding: "28px", borderRadius: "16px", borderLeft: "4px solid var(--blue)" }}>
              <h3 style={{ fontSize: "18px", color: "var(--blue)", marginBottom: "8px" }}>The Core Question</h3>
              <p style={{ margin: 0, fontWeight: 500 }}>&ldquo;{item.question}&rdquo;</p>
            </div>
          )}

          {item.problem && (
            <div>
              <h3 style={{ fontSize: "22px", marginBottom: "8px" }}>The Problem</h3>
              <p>{item.problem}</p>
            </div>
          )}

          {item.hypothesis && (
            <div style={{ background: "var(--soft)", padding: "24px", borderRadius: "16px", borderLeft: "4px solid var(--green)" }}>
              <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>Hypothesis</h3>
              <p style={{ margin: 0 }}>{item.hypothesis}</p>
            </div>
          )}

          {/* Detailed Approach */}
          {item.approach && (
            <div style={{ marginTop: "16px" }}>
              <h3 style={{ fontSize: "24px", marginBottom: "20px" }}>Detailed Approach</h3>
              <div style={{ display: "grid", gap: "12px" }}>
                {item.approach.map((step) => (
                  <div key={step.step} style={{ display: "flex", alignItems: "center", gap: "16px", background: "var(--soft)", padding: "16px 24px", borderRadius: "14px" }}>
                    <span style={{ width: "32px", height: "32px", borderRadius: "50%", background: "var(--badge-bg)", color: "var(--blue)", display: "grid", placeItems: "center", fontWeight: 700, flexShrink: 0 }}>
                      {step.step}
                    </span>
                    <div>
                      <strong style={{ fontSize: "16px" }}>{step.title}</strong>
                      <p style={{ fontSize: "14px", color: "var(--muted)", margin: 0 }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {item.whatDidntWork && (
            <div style={{ background: "var(--soft)", padding: "24px", borderRadius: "16px", borderLeft: "4px solid #F59E0B", marginTop: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#F59E0B", fontWeight: 700, marginBottom: "8px" }}>
                <AlertTriangle size={18} /> What Didn&apos;t Work
              </div>
              <p style={{ margin: 0, fontSize: "15px", color: "var(--muted)" }}>{item.whatDidntWork}</p>
            </div>
          )}

          <div style={{ marginTop: "32px", padding: "28px", background: "var(--card)", color: "var(--card-ink)", borderRadius: "20px" }}>
            <h3 style={{ fontSize: "20px", color: "var(--card-ink)", marginBottom: "8px" }}>Key Takeaway</h3>
            <p style={{ margin: 0, opacity: 0.9 }}>{item.takeaway}</p>
          </div>
        </div>

        <div style={{ marginTop: "64px", paddingTop: "32px", borderTop: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link href="/work" className="pill" style={{ background: "var(--soft)", color: "var(--ink)", border: "1px solid var(--line)", boxShadow: "none" }}>
            ← Back to Work
          </Link>
          <Link href="/contact" className="pill">
            Discuss a Project <i>→</i>
          </Link>
        </div>
      </div>
    </div>
  );
}
