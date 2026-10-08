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


export const venturesData: WorkItem[] = [
  {
    slug: "devata-tech",
    num: "V1",
    title: "Devata Tech",
    tagline: "Digital growth & content agency for SMEs",
    desc: "A digital growth and content agency tailored for SMEs.",
    type: "Venture",
    role: "Co-founder & Growth Strategist",
    date: "2024 – Present"
  },
  {
    slug: "ruju-factcheck",
    num: "V2",
    title: "RUJU Fact Check",
    tagline: "Editor",
    desc: "Worked as an Editor. Tried to implement an AI assisted factchecking system. (Closed)",
    type: "Venture",
    role: "Editor",
    date: "2023 – 2024"
  }
];

export const projectsData: ProjectItem[] = [
  {
    slug: "safairoute",
    title: "SafaiRoute",
    desc: "A smart waste collection system with dynamic route management, proposed at university.",
    status: "University Proposal",
    tech: ["Next.js", "Node.js", "MongoDB", "Routing Algorithm"],
    github: "https://github.com/nabeenbudha/safairoute",
    walkthrough: "#",
    date: "2024"
  },
  {
    slug: "ai-content-generator-pipeline",
    title: "AI Content Generator Pipeline",
    desc: "Automated multi-format script and post generation from qualitative research notes.",
    status: "In Development",
    tech: ["Python", "FastAPI", "OpenAI API", "PostgreSQL"],
    github: "https://github.com/nabeenbudha/ai-content-pipeline",
    walkthrough: "#",
    date: "2024"
  }
];

export const experimentsData: WorkItem[] = [
  {
    slug: "100-days-public-speaking",
    num: "E1",
    title: "100 Days of Public Speaking",
    tagline: "Building confidence and communication skills in public.",
    desc: "A daily challenge to speak publicly, test messaging, and grow a YouTube channel from scratch.",
    type: "Experiment",
    role: "Creator & Speaker",
    date: "2024"
  },
  {
    slug: "youtube-channels",
    num: "E2",
    title: "YouTube Channels & Initiatives",
    tagline: "Testing content formats and distribution.",
    desc: "Various channels launched to test audience retention, hook strategies, and algorithmic reach.",
    type: "Experiment",
    role: "Content Strategist",
    date: "2023 – Present"
  }
];

export const worksData = [...venturesData, ...experimentsData];

