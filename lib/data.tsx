interface WorkItem {
  slug: string;
  num: string;
  title: string;
  tagline: string;
  desc: string;
  type: "Venture" | "Project" | "Experiment";
  role?: string;
  date?: string;
  flow?: string[];
  metrics?: { label: string; value: string; sub?: string }[];
  question?: string;
  problem?: string;
  hypothesis?: string;
  approach?: { step: string | number; title: string; desc: string }[];
  whatDidntWork?: string[];
  takeaway?: string;
}

export interface ProjectItem {
  slug: string;
  title: string;
  desc: string;
  status: string;
  tech: string[];
  date?: string;
  github?: string;
  demo?: string;
  walkthrough?: string;
}


export const worksData: WorkItem[] = [
  {
    slug: "devata-tech",
    num: "V2",
    title: "Devata Tech",
    tagline: "",
    desc: "Building a small studio that helps local businesses and brands grow online with AI and content.",
    type: "Venture",
    role: "Building",
    date: "2026 - present"
  },
  {
    slug: "ruju-factcheck",
    num: "V1",
    title: "RUJU FactCheck",
    tagline: "",
    desc: "Edited and published fact-checks for an AI-assisted fact-checking platform. Over two years I:\n- Published 200+ fact-checks\n- Helped grow its social media following by 10,000+\n- Was selected for the Youth Innovation Lab AI Innovators program",
    type: "Venture",
    role: "Editor",
    date: "2024 - 2026"
  }
];

export const projectsData: ProjectItem[] = [
  {
    slug: "billing-management-system",
    title: "Billing Management System",
    desc: "A web-based billing management system.",
    status: "",
    tech: [],
    github: "https://github.com/bnabeen/billing-management-system",
    date: ""
  },
  {
    slug: "ruju-factcheck-website",
    title: "RUJU FactCheck website",
    desc: "built to publish and organize fact-checks.",
    status: "",
    tech: [],
    github: "https://github.com/bnabeen/ruju-factcheck",
    date: ""
  }
];

