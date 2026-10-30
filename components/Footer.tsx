import { siteConfig } from "@/lib/data";

export default function Footer() {
  return <footer className="site-footer">{siteConfig.footer}</footer>;
}
