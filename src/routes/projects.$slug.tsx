import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getProject, projects, type Project } from "@/data/projects";
import { BackButton } from "@/components/site/BackButton";


export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => ({
    meta: [
      { title: `${loaderData?.project.title ?? "Case study"} — Megan Mielke` },
      {
        name: "description",
        content: loaderData?.project.description ?? "Case study by Megan Mielke.",
      },
      {
        property: "og:title",
        content: `${loaderData?.project.title ?? "Case study"} — Megan Mielke`,
      },
      {
        property: "og:description",
        content: loaderData?.project.description ?? "Case study by Megan Mielke.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `/projects/${params.slug}` },
    ],
    links: [{ rel: "canonical", href: `/projects/${params.slug}` }],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h1 className="font-display text-5xl">Project not found</h1>
      <Link to="/" className="mt-6 inline-block underline">
        Back to home
      </Link>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h1 className="font-display text-3xl">Couldn't load this case study.</h1>
      <button onClick={reset} className="mt-6 underline">Try again</button>
    </div>
  ),
  component: CaseStudy,
});

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Expand } from "lucide-react";
import { useState } from "react";

function SmallImage({ label, cover, src }: { label: string; cover: string; src?: string }) {
  const isVideo = src?.endsWith(".mp4") || src?.endsWith(".webm") || src?.endsWith(".mov");
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className="relative w-full max-w-xl cursor-pointer overflow-hidden rounded-xl border border-hairline"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {src ? (
            isVideo ? (
              <video
                src={src}
                autoPlay
                loop
                muted
                playsInline
                className="block h-auto w-full"
              />
            ) : (
              <img
                src={src}
                alt={label}
                className="block h-auto w-full"
              />
            )
          ) : (
            <div className={`aspect-[16/9] w-full bg-gradient-to-br ${cover}`} />
          )}

          <AnimatePresence>
            {isHovered && !isVideo && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 grid place-items-center bg-black/40"
              >
                <Expand size={32} className="text-white" />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="absolute bottom-3 left-3 rounded-full bg-background/85 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-foreground/70 backdrop-blur-sm">
            {label}
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] max-w-[90vw] overflow-y-auto p-2">
        <img src={src} alt={label} className="h-auto w-full" />
      </DialogContent>
    </Dialog>
  );
}

function CaseStudy() {
  const { project } = Route.useLoaderData() as { project: Project };
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  const sections = project.caseStudy;

  return (
    <article>
      <BackButton />


      {/* HERO — text-first */}
      <header className="mx-auto max-w-3xl px-6 pt-10 pb-12 md:pt-14 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            <span className="h-px w-8 bg-pink-strong" />
            {project.category} · {project.year}
          </p>
          <h1 className="font-display mt-5 text-4xl leading-[1.02] tracking-tight md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 border-y border-hairline py-5 text-sm md:grid-cols-4">
            {[
              ["Year", project.year],
              ["Role", project.role],
              ["Category", project.category],
              ["Tools", project.tools.join(" · ")],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {k}
                </dt>
                <dd className="mt-1">{v}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </header>

      {/* CASE STUDY SECTIONS — text-heavy */}
      <div className="mx-auto max-w-3xl px-6 pb-20 md:pb-28">
        <div className="space-y-14 md:space-y-16">
          {sections.map((section, idx) => (
            <motion.section
              key={section.heading}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-baseline gap-3">
                <span className="font-display text-xl text-pink-strong/70">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-2xl tracking-tight md:text-3xl">
                  {section.heading}
                </h2>
              </div>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-[17px]">
                {section.body}
              </p>
              {section.image && (
                <div className="mt-6">
                  <SmallImage label={section.image.caption} cover={project.cover} src={section.image.src} />
                </div>
              )}
            </motion.section>
          ))}
        </div>
      </div>

      {/* NEXT PROJECTS */}
      <section className="border-t border-hairline bg-card/40">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-10">
          <div className="flex items-end justify-between gap-4">
            <h3 className="font-display text-2xl md:text-3xl">Other projects</h3>
            <Link to="/projects" className="text-sm underline-offset-4 hover:underline">
              View all
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((p) => (
              <Link
                key={p.slug}
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group flex items-center justify-between rounded-2xl border border-white/40 bg-card/50 backdrop-blur-xl p-4 transition-all hover:-translate-y-0.5 hover:border-pink-strong hover:bg-pink-strong hover:text-pink-foreground active:scale-[0.985]"
              >
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] opacity-60">
                    {p.category}
                  </p>
                  <p className="font-display mt-1 text-lg">{p.title}</p>
                </div>
                <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
