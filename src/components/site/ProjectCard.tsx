import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Project, ProjectSize } from "@/data/projects";

const ASPECT: Record<ProjectSize, string> = {
  lg: "aspect-[4/3] lg:aspect-[16/10]",
  md: "aspect-[4/3]",
  sm: "aspect-[4/3]",
  wide: "aspect-[4/3] lg:aspect-[16/9]",
  tall: "aspect-[4/3] lg:aspect-[4/5]",
};


export function ProjectCard({
  project,
  index = 0,
  forceSixteenNine = false,
}: {
  project: Project;
  index?: number;
  forceSixteenNine?: boolean;
}) {
  const displayImage = project.thumbnail || project.image;
  const aspectClass = forceSixteenNine ? "aspect-[16/9]" : (ASPECT[project.size] ?? "aspect-[4/3]");

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <Link
        to="/projects/$slug"
        params={{ slug: project.slug }}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/40 bg-card/50 backdrop-blur-xl backdrop-saturate-150 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:border-pink-strong/50 hover:shadow-[0_20px_50px_-15px_color-mix(in_oklab,var(--pink-strong)_70%,transparent)] active:scale-[0.985]"
      >
        {/* IMAGE */}
        <div className={`relative w-full overflow-hidden flex-1 ${aspectClass}`}>

          <img
            src={displayImage}
            alt={project.title}
            loading="lazy"
            className={`h-full w-full object-cover ${!forceSixteenNine && project.slug === "bird-app" ? "object-right" : "object-center"} grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 group-active:scale-105 group-active:grayscale-0 group-focus-visible:scale-105 group-focus-visible:grayscale-0`}
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-card/90 to-transparent" />

          {/* arrow — glassy, unified pink hover */}
          <div className="absolute bottom-3 right-3 grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-white/60 bg-background/60 text-foreground shadow-sm backdrop-blur-md transition-all duration-300 group-hover:bg-pink-strong group-hover:text-pink-foreground group-hover:border-pink-strong group-active:bg-pink-strong group-active:text-pink-foreground group-active:border-pink-strong group-focus-visible:bg-pink-strong group-focus-visible:text-pink-foreground group-focus-visible:border-pink-strong group-active:scale-90">
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 ease-out group-hover:rotate-45 group-active:rotate-45 group-focus-visible:rotate-45"
            />
          </div>
        </div>


        {/* TEXT */}
        <div className="flex flex-col p-4">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-display text-lg leading-tight tracking-tight">
              {project.title}
            </h3>
            <span className="shrink-0 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              {project.year}
            </span>
          </div>
          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground line-clamp-2">
            {project.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tools.slice(0, 3).map((t) => (
              <span
                key={t}
                className="rounded-full border border-hairline bg-background px-3 py-1 text-xs text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
