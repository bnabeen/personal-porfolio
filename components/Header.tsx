import Link from "next/link";
import { siteConfig } from "@/lib/data";

interface HeaderProps {
  isHome?: boolean;
}

export default function Header({ isHome = false }: HeaderProps) {
  if (!isHome) {
    return (
      <header className="site-header">
        <Link href="/" className="site-home-link">
          {siteConfig.name}
        </Link>
      </header>
    );
  }

  return (
    <header className="site-header">
      <h1 className="site-name">{siteConfig.name}</h1>
      <p className="site-descriptor">{siteConfig.descriptor}</p>
    </header>
  );
}
