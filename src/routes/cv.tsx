import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { BackButton } from "@/components/site/BackButton";
import Information_Design from "../../content/CV_Portfolio/Information_Design.jpg";
import Abitur from "../../content/CV_Portfolio/Abitur.jpg";
import Primary_School from "../../content/CV_Portfolio/Primary_School.jpg";
import UX_Design_Internship from "../../content/CV_Portfolio/UX_Design_Internship.jpg";
import Service_Smashburger from "../../content/CV_Portfolio/Service_Smashburger.jpg";
import Military_Service from "../../content/CV_Portfolio/Military_Service.jpg";
import Student_Assistant from "../../content/CV_Portfolio/Student_Assistant.jpg";
import Museum_Attendant from "../../content/CV_Portfolio/Museum_Attendant.jpg";


export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "CV — Megan Mielke" },
      {
        name: "description",
        content: "Curriculum vitae of Megan Mielke — education and experience.",
      },
      { property: "og:title", content: "CV — Megan Mielke" },
      {
        property: "og:description",
        content: "Education, experience and a downloadable CV.",
      },
      { property: "og:url", content: "/cv" },
    ],
    links: [{ rel: "canonical", href: "/cv" }],
  }),
  component: CVPage,
});

type Item = {
  period: string;
  title: string;
  org: string;
  note?: string;
  image: string;
  details: string[];
};

const education: Item[] = [
  {
    period: "09/2023 – 08/2024 · 03/2025 – present",
    title: "B.A. Information Design",
    org: "Hochschule der Medien, Stuttgart",
    image: Information_Design,
    details: [
      "Studying at Hochschule der Medien Stuttgart.",
      "Focus on UX, visual communication and digital design.",
      "Working with Figma, Adobe tools and web technologies.",
    ],
  },
  {
    period: "06/2023",
    title: "Abitur (1.7)",
    org: "Martin-Gerbert-Gymnasium, Horb",
    image: Abitur,
    details: [
      "Graduated with German university entrance qualification.",
      "Final grade: 1.7.",
      "Foundation for my design studies.",
    ],
  },
  {
    period: "09/2011 – 07/2015",
    title: "Primary School",
    org: "Grundschule Eutingen im Gäu",
    image: Primary_School,
    details: [
      "Beginning of my educational path.",
      "Early development of curiosity and creativity.",
      "First structured learning environment.",
    ],
  },
];

const experience: Item[] = [
  {
    period: "From 03/2026",
    title: "UX Design Internship",
    org: "Robert Bosch GmbH",
    image: UX_Design_Internship,
    details: [
      "UX Design internship at Bosch.",
      "Working on enterprise UX and Figma prototypes.",
      "Exploring AI-supported design workflows.",
    ],
  },
  {
    period: "06/2025 – 02/2026",
    title: "Service & Social Media Marketing",
    org: "Smashburger 0711, Stuttgart",
    image: Service_Smashburger,
    details: [
      "Service work at Smashburger0711 Stuttgart.",
      "Supporting social media marketing and content creation.",
      "Experience with fast-paced customer communication.",
    ],
  },
  {
    period: "09/2024 – 02/2025",
    title: "Voluntary Military Service · Medical Corps",
    org: "Bundeswehr · Rheine & Müllheim",
    image: Military_Service,
    details: [
      "Voluntary military service in the Army Medical Service.",
      "Worked in structured and high-responsibility environments.",
      "Strengthened discipline, resilience and teamwork.",
    ],
  },
  {
    period: "2023 – 2024",
    title: "Student Assistant · Reception",
    org: "Württembergische Landesbibliothek, Stuttgart",
    image: Student_Assistant,
    details: [
      "Student assistant at Württembergische Landesbibliothek.",
      "Reception, customer communication and library workflows.",
      "Structured work in a public service environment.",
    ],
  },
  {
    period: "2022 – 2023",
    title: "Museum Attendant",
    org: "Experimenta Freudenstadt",
    image: Museum_Attendant,
    details: [
      "Greeting and guiding museum visitors.",
      "Supporting interactive exhibits and events.",
      "First touchpoint with experience design in practice.",
    ],
  },
];

function Timeline({
  items,
  accent,
  onHover,
}: {
  items: Item[];
  accent: "pink" | "green";
  onHover: (i: number | null) => void;
}) {
  return (
    <ol className="relative space-y-8 border-l border-hairline pl-6">
      {items.map((it, i) => (
        <li
          key={i}
          className="relative cursor-pointer rounded-lg p-2 -ml-2 transition-colors hover:bg-card/60"
          onMouseEnter={() => onHover(i)}
          onMouseLeave={() => onHover(null)}
        >
          <span
            className={`absolute -left-[21px] top-3.5 h-2.5 w-2.5 rounded-full ${
              accent === "pink" ? "bg-pink" : "bg-green"
            } ring-4 ring-background`}
          />
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {it.period}
          </p>
          <p className="font-display mt-1 text-xl">{it.title}</p>
          <p className="text-sm text-muted-foreground">{it.org}</p>
          {it.note && <p className="mt-1 text-sm">{it.note}</p>}
        </li>
      ))}
    </ol>
  );
}

function HoverPanel({ item }: { item: Item }) {
  const isLandscape = typeof window !== 'undefined' ?
    (document.querySelector(`img[src="${item.image}"]`) as HTMLImageElement)?.naturalWidth >
    (document.querySelector(`img[src="${item.image}"]`) as HTMLImageElement)?.naturalHeight : false;

  return (
    <div className={`overflow-hidden rounded-2xl border border-pink-strong/30 bg-card/80 shadow-[0_20px_50px_-15px_color-mix(in_oklab,var(--pink-strong)_60%,transparent)] backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200 ${isLandscape ? 'max-w-[600px]' : 'max-w-[440px]'}`}>
      <img
        src={item.image}
        alt={item.title}
        className="block h-auto w-full max-h-[60vh] object-contain bg-black/5"
      />
      <div className="p-6">
        <p className="font-display text-xl">{item.title}</p>
        <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
          {item.details.slice(0, 3).map((d, i) => (
            <li key={i}>— {d}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function CVPage() {
  const [hoveredEdu, setHoveredEdu] = useState<number | null>(null);
  const [hoveredExp, setHoveredExp] = useState<number | null>(null);

  return (
    <>
    <BackButton />
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">

      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Curriculum Vitae"
          title="Education & experience."
          subtitle="A short timeline of where I've studied and worked."
        />
        <a
          href="/CV_Megan_Mielke.pdf"
          download
          className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm text-background transition-colors hover:bg-foreground/90"
        >
          <Download
            size={16}
            className="transition-transform duration-300 ease-out group-hover:translate-y-0.5 group-hover:animate-bounce"
          />{" "}
          Download CV (PDF)
        </a>
      </div>

      <div className="mt-16 grid gap-16 md:grid-cols-2">
        {/* Education column */}
        <div>
          <h3 className="font-display mb-8 text-3xl">Education</h3>
          <Timeline items={education} accent="pink" onHover={setHoveredEdu} />
        </div>

        {/* Experience column */}
        <div>
          <h3 className="font-display mb-8 text-3xl">Experience</h3>
          <Timeline items={experience} accent="green" onHover={setHoveredExp} />
        </div>
      </div>

      {/* Viewport-anchored hover panels — half page width with margin */}
      {hoveredExp !== null && (
        <div className="pointer-events-none fixed left-8 top-1/2 z-40 hidden w-[calc(50vw-4rem)] -translate-y-1/2 md:block">
          <HoverPanel item={experience[hoveredExp]} />
        </div>
      )}
      {hoveredEdu !== null && (
        <div className="pointer-events-none fixed right-8 top-1/2 z-40 hidden w-[calc(50vw-4rem)] -translate-y-1/2 md:block">
          <HoverPanel item={education[hoveredEdu]} />
        </div>
      )}
    </section>
    </>
  );

}
