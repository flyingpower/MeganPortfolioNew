import img1 from "@/assets/project-placeholder-1.jpg";
import img2 from "@/assets/project-placeholder-2.jpg";
import img3 from "@/assets/project-placeholder-3.jpg";
import img4 from "@/assets/project-placeholder-4.jpg";
import img5 from "@/assets/project-placeholder-5.jpg";
import img6 from "@/assets/project-placeholder-6.jpg";

export type ProjectSize = "lg" | "md" | "sm" | "wide" | "tall";

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  year: string;
  role: string;
  tools: string[];
  cover: string; // gradient class
  image: string; // placeholder image path
  accent: "pink" | "green" | "neutral";
  size: ProjectSize;
  layoutVariant: 1 | 2 | 3 | 4 | 5 | 6;
  caseStudy: {
    introduction: string;
    context: string;
    challenge: string;
    myRole: string;
    process: string;
    designDecisions: string;
    outcome: string;
    learnings: string;
  };
};

const placeholder = {
  introduction:
    "A short introduction to the project — what it is, who it's for and why it matters. Replace this placeholder copy in src/data/projects.ts.",
  context:
    "Describe the context: the client, the brief, the timeframe, the people involved, and the environment the product lives in.",
  challenge:
    "Describe the problem you set out to solve, the constraints, and the people affected by it.",
  myRole:
    "Outline your responsibilities: research, wireframing, visual design, prototyping, hand-off.",
  process:
    "Walk through your process step by step: discovery, ideation, iteration, testing. Add images and details later.",
  designDecisions:
    "Explain the key design decisions: information architecture, visual language, interaction patterns, and the trade-offs you made.",
  outcome:
    "Describe the result, the deliverables, and any measurable impact or feedback received.",
  learnings:
    "Reflect on what you learned, what you would do differently, and the skills this project sharpened.",
};

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    category: "UX Case Study",
    description:
      "A short one-line description of the project — replace with real copy when ready.",
    year: "2025",
    role: "UX & Visual Design",
    tools: ["Figma", "Miro", "User Research"],
    cover: "from-pink/70 via-pink-soft to-background",
    image: img1,
    accent: "pink",
    size: "wide",
    layoutVariant: 1,
    caseStudy: placeholder,
  },
  {
    slug: "project-two",
    title: "Project Two",
    category: "Information Design",
    description: "Editorial information design piece — placeholder description.",
    year: "2025",
    role: "Concept & Design",
    tools: ["Illustrator", "InDesign"],
    cover: "from-green/55 via-green/20 to-background",
    image: img2,
    accent: "green",
    size: "tall",
    layoutVariant: 2,
    caseStudy: placeholder,
  },
  {
    slug: "project-three",
    title: "Project Three",
    category: "Mobile App",
    description: "Concept for a mobile experience — replace placeholder text.",
    year: "2024",
    role: "UX/UI Design",
    tools: ["Figma", "Prototyping"],
    cover: "from-foreground/85 via-foreground/45 to-background",
    image: img3,
    accent: "neutral",
    size: "tall",
    layoutVariant: 3,
    caseStudy: placeholder,
  },
  {
    slug: "project-four",
    title: "Project Four",
    category: "Brand & Identity",
    description: "Visual identity exploration — placeholder description.",
    year: "2024",
    role: "Visual Design",
    tools: ["Illustrator", "Photoshop"],
    cover: "from-pink/60 via-green/25 to-background",
    image: img4,
    accent: "pink",
    size: "wide",
    layoutVariant: 4,
    caseStudy: placeholder,
  },
  {
    slug: "project-five",
    title: "Project Five",
    category: "Web Design",
    description: "Responsive website concept — replace this placeholder.",
    year: "2024",
    role: "Design & Front-end",
    tools: ["Figma", "HTML", "CSS"],
    cover: "from-green/65 via-pink/25 to-background",
    image: img5,
    accent: "green",
    size: "md",
    layoutVariant: 5,
    caseStudy: placeholder,
  },
  {
    slug: "project-six",
    title: "Project Six",
    category: "Research",
    description: "User research deep-dive — placeholder description.",
    year: "2023",
    role: "UX Research",
    tools: ["Interviews", "Affinity Mapping"],
    cover: "from-foreground/60 via-pink/25 to-background",
    image: img6,
    accent: "neutral",
    size: "md",
    layoutVariant: 6,
    caseStudy: placeholder,
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
