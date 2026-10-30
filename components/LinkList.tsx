import { siteConfig, elsewhereLinks } from "@/lib/data";

export default function LinkList() {
  return (
    <div className="elsewhere-content">
      <p>
        Email is quickest:{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
      </p>
      <div className="elsewhere-links">
        {elsewhereLinks.map((item, index) => (
          <span key={item.label}>
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              {item.label} <span className="external-arrow">↗</span>
            </a>
            {index < elsewhereLinks.length - 1 && (
              <span className="elsewhere-separator"> · </span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
