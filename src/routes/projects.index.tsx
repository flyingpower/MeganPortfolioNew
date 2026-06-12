import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ProjectCard } from "@/components/site/ProjectCard";
import { BackButton } from "@/components/site/BackButton";
import { VisualArchiveCTA } from "@/components/site/VisualArchiveCTA";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Megan Mielke" },
      {
        name: "description",
        content: "Selected UX, information design and visual projects by Megan Mielke.",
      },
      { property: "og:title", content: "Projects — Megan Mielke" },
      {
        property: "og:description",
        content:
          "A collection of UX, information design and visual projects with detailed case studies.",
      },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const allTools = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tools.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, []);

  const [active, setActive] = useState<string | null>(null);

  const visible = useMemo(
    () => (active ? projects.filter((p) => p.tools.includes(active)) : projects),
    [active],
  );

  return (
    <>
      <BackButton />
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <SectionHeading
          eyebrow="Projects · 2023 — 2026"
          title="Selected work."
          subtitle="Five projects across UX, information design and visual systems. Click any tile to open the case study."
        />

        {/* Filter pills */}
        <div className="mt-10 flex flex-wrap items-center gap-2">
          <span className="mr-2 inline-flex items-center text-foreground" aria-label="Filter">
            <SlidersHorizontal size={22} />
          </span>
          <button
            type="button"
            onClick={() => setActive(null)}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              active === null
                ? "border-pink-strong bg-pink-strong text-black"
                : "border-hairline bg-card text-foreground hover:border-pink-strong"
            }`}
          >
            All
          </button>
          {allTools.map((t) => (
            <button
              type="button"
              key={t}
              onClick={() => setActive(t)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                active === t
                  ? "border-pink-strong bg-pink-strong text-black"
                  : "border-hairline bg-card text-foreground hover:border-pink-strong"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} forceSixteenNine={true} />
          ))}
        </div>

        <VisualArchiveCTA />
      </section>
    </>
  );
}
