import Link from "next/link";
import { ReactNode } from "react";

interface EntryRowProps {
  title: string;
  date: string;
  description?: ReactNode;
  link?: string | null;
}

export default function EntryRow({
  title,
  date,
  description,
  link,
}: EntryRowProps) {
  const isExternal = link?.startsWith("http");

  return (
    <div className="entry-row">
      <div className="entry-header">
        <span className="entry-title">
          {link ? (
            isExternal ? (
              <a href={link} target="_blank" rel="noopener noreferrer">
                {title} <span className="external-arrow">↗</span>
              </a>
            ) : (
              <Link href={link}>{title}</Link>
            )
          ) : (
            title
          )}
        </span>
        <span className="entry-date">{date}</span>
      </div>
      {description && <div className="entry-desc">{description}</div>}
    </div>
  );
}
