import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { BackButton } from "@/components/site/BackButton";

export const Route = createFileRoute("/projects/gallery")({
  head: () => ({
    meta: [
      { title: "Visual Archive — Megan Mielke" },
      {
        name: "description",
        content:
          "A gallery of visual, editorial and experimental design work by Megan Mielke.",
      },
      { property: "og:title", content: "Visual Archive — Megan Mielke" },
      {
        property: "og:description",
        content: "Posters, typography, digital art and handcrafted work.",
      },
      { property: "og:url", content: "/projects/gallery" },
    ],
    links: [{ rel: "canonical", href: "/projects/gallery" }],
  }),
  component: GalleryPage,
});

type GallerySize = "lg" | "md" | "sm" | "wide" | "tall";

type GalleryImage = {
  title: string;
  category: string;
  context: string;
  year: string;
  src: string;
  size: GallerySize;
};

const CATEGORIES = [
  "Poster",
  "Typography",
  "Digital Art",
  "Handcrafted",
  "Series",
  "Social",
];

const SIZES: GallerySize[] = ["lg", "sm", "tall", "md", "wide", "sm", "tall", "md", "sm", "lg", "tall", "md"];

const ASPECT: Record<GallerySize, string> = {
  lg: "aspect-[4/3] lg:aspect-[16/10]",
  md: "aspect-[4/3]",
  sm: "aspect-[4/3]",
  wide: "aspect-[4/3] lg:aspect-[16/9]",
  tall: "aspect-[4/3] lg:aspect-[4/5]",
};

const SPAN: Record<GallerySize, string> = {
  lg: "lg:col-span-4",
  wide: "lg:col-span-4",
  md: "lg:col-span-3",
  tall: "lg:col-span-2",
  sm: "lg:col-span-2",
};

const IMAGES: GalleryImage[] = Array.from({ length: 12 }).map((_, i) => ({
  title: `Untitled ${i + 1}`,
  category: CATEGORIES[i % CATEGORIES.length],
  context:
    "Part of an ongoing exploration of form, material and rhythm. Created as a self-initiated study to push compositional boundaries.",
  year: `${2023 + (i % 3)}`,
  src: `https://picsum.photos/seed/archive-${i}/900/1100`,
  size: SIZES[i],
}));

function GalleryPage() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight")
        setActive((a) => (a === null ? a : (a + 1) % IMAGES.length));
      if (e.key === "ArrowLeft")
        setActive((a) => (a === null ? a : (a - 1 + IMAGES.length) % IMAGES.length));
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <>
      <BackButton to="/projects" label="Back to projects" />
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <SectionHeading
          eyebrow="Visual Archive"
          title="Full gallery."
          subtitle="A curated selection of visual, editorial and experimental design work. Click any image to enlarge."
        />

        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {IMAGES.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className="group relative block overflow-hidden rounded-2xl shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_color-mix(in_oklab,var(--pink-strong)_70%,transparent)] text-left"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-2 p-3">
                  <span className="font-display text-sm leading-tight tracking-tight text-white">
                    {img.title}
                  </span>
                  <span className="rounded-full border border-white/30 bg-white/10 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.18em] text-white backdrop-blur-md">
                    {img.category}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-xl p-4 md:p-10 animate-in fade-in"
          onClick={() => setActive(null)}
          role="dialog"
          aria-label={IMAGES[active].title}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-colors hover:border-pink-strong hover:text-pink-strong"
            aria-label="Close"
          >
            <X size={18} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActive((a) => (a === null ? a : (a - 1 + IMAGES.length) % IMAGES.length));
            }}
            className="absolute left-4 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-colors hover:border-pink-strong hover:text-pink-strong md:left-8"
            aria-label="Previous image"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActive((a) => (a === null ? a : (a + 1) % IMAGES.length));
            }}
            className="absolute right-4 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-colors hover:border-pink-strong hover:text-pink-strong md:right-8"
            aria-label="Next image"
          >
            <ChevronRight size={22} />
          </button>

          <div
            className="flex max-h-[90vh] w-full max-w-6xl flex-col gap-6 overflow-hidden md:flex-row md:items-start"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={IMAGES[active].src}
              alt={IMAGES[active].title}
              className="max-h-[60vh] w-full object-contain md:max-h-[90vh] md:flex-1"
            />
            <div className="shrink-0 rounded-xl bg-card/30 p-6 text-foreground backdrop-blur-xl md:w-80">
              <span className="text-[10px] uppercase tracking-[0.22em] text-pink-strong">
                {IMAGES[active].category} · {IMAGES[active].year}
              </span>
              <h3 className="mt-2 font-display text-2xl leading-tight tracking-tight">
                {IMAGES[active].title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-foreground">
                {IMAGES[active].context}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
