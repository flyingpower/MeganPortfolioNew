import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

const TEASERS = [
  { src: "https://picsum.photos/seed/archive-0/600/750", alt: "Poster teaser" },
  { src: "https://picsum.photos/seed/archive-2/600/750", alt: "Digital art teaser" },
  { src: "https://picsum.photos/seed/archive-4/600/750", alt: "Series teaser" },
];

export function VisualArchiveCTA() {
  return (
    <Link
      to="/projects/gallery"
      className="group mt-16 flex flex-col gap-6 overflow-hidden rounded-3xl border border-white/40 bg-card/50 p-6 backdrop-blur-xl backdrop-saturate-150 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:border-pink-strong/50 hover:shadow-[0_20px_50px_-15px_color-mix(in_oklab,var(--pink-strong)_70%,transparent)] md:flex-row md:items-center md:gap-10 md:p-8"
    >
      {/* Teaser images */}
      <div className="flex shrink-0 -space-x-6 md:-space-x-8">
        {TEASERS.map((t, i) => (
          <div
            key={i}
            className="relative h-28 w-24 overflow-hidden rounded-xl border border-white/60 bg-card shadow-[0_8px_20px_-8px_rgba(0,0,0,0.25)] transition-all duration-500 md:h-36 md:w-28"
            style={{
              transform: `rotate(${(i - 1) * 6}deg)`,
              zIndex: TEASERS.length - i,
            }}
          >
            <img
              src={t.src}
              alt={t.alt}
              loading="lazy"
              className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
            />
          </div>
        ))}
      </div>

      {/* Text + arrow */}
      <div className="flex flex-1 items-center justify-between gap-6">
        <div>
          <span className="text-[10px] uppercase tracking-[0.22em] text-pink-strong">
            Explore more
          </span>
          <h3 className="mt-2 font-display text-2xl leading-tight tracking-tight md:text-3xl">
            Visual Archive
          </h3>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            A curated gallery of visual, editorial and experimental design work — posters, typography, digital art and more.
          </p>
        </div>

        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-white/60 bg-background/60 text-foreground shadow-sm backdrop-blur-md transition-all duration-300 group-hover:bg-pink-strong group-hover:text-pink-foreground group-hover:border-pink-strong md:h-16 md:w-16">
          <ArrowUpRight
            size={22}
            className="transition-transform duration-300 ease-out group-hover:rotate-45"
          />
        </div>
      </div>
    </Link>
  );
}
