export interface WorkItem {
  title: string;
  period: string;
  description: string;
  role?: string;
  link?: string | null;
}

export interface ProjectItem {
  title: string;
  period: string;
  description: string;
  link: string;
  linkLabel: string;
}

export interface ElsewhereLink {
  label: string;
  href: string;
}

export const siteConfig = {
  name: "Nabeen Budha",
  descriptor: "Student. Building @Devata",
  title: "Nabeen Budha",
  description:
    "Nabeen Budha, a BCA student in Kathmandu currently Building Devata, a creative & content agency for local businesses",
  footer: "© 2026 Nabeen Budha",
  email: "bnabeen.me@gmail.com",
};

export const introParagraphs: string[] = [
  "I’m a BCA student in Kathmandu, in my sixth semester. For almost two years I did fact-checking and verification at RUJU FactCheck. Now I’m starting Devata, a Small studio for local businesses, and I make content on personal growth and technology.",
  "The rest of my time goes to books and writing.",
];

export const workItems: WorkItem[] = [
  {
    title: "Devata",
    period: "2026 to now",
    description: "Websites, content and branding for local businesses. Just starting.",
    link: null,
  },
  {
    title: "RUJU FactCheck",
    period: "2024 to 2026",
    role: "Editorial Lead",
    description:
      "Two years of checking claims that spread on social media, with 200+ fact-checks published.",
    link: "https://theruju.com/",
  },
];

export const projectItems: ProjectItem[] = [
  {
    title: "RUJU – Fact Checking System",
    period: "2025",
    description:
      "A web-based fact-checking system designed to support the process of reviewing information, investigating claims, and combating misinformation.",
    link: "https://github.com/bnabeen/ruju-factcheck",
    linkLabel: "GitHub",
  },
  {
    title: "Billing Management System",
    period: "2025",
    description:
      "A simple Billing Management System designed for small retail stores (Kirana stores).",
    link: "https://github.com/bnabeen/billing-management-system",
    linkLabel: "GitHub",
  },
];

export const elsewhereLinks: ElsewhereLink[] = [
  { label: "GitHub", href: "https://github.com/bnabeen" },
  { label: "LinkedIn", href: "https://linkedin.com/in/bnabeen" },
  { label: "Instagram", href: "https://instagram.com/bnabeen.me" },
  { label: "Goodreads", href: "https://goodreads.com/bnabeen" },
  { label: "Substack", href: "https://bnabeen.substack.com" },
];
