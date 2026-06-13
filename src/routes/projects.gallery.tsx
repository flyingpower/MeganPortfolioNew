import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { BackButton } from "@/components/site/BackButton";

import img_Smashburger_Video from "../../content/Visual Archive/Smashburger_Video.mp4";
import img_Smashburger_Tiktok from "../../content/Visual Archive/Smashburger_Tiktok.mp4";
import img_Theater_Poster from "../../content/Visual Archive/Theater_Poster.jpg";
import img_The_great_Search from "../../content/Visual Archive/The_great_Search.jpg";
import img_A_Window_in_my_Life from "../../content/Visual Archive/A_Window_in_my_Life.jpg";
import img_Smashburger_Story from "../../content/Visual Archive/Smashburger_Story.jpg";
import img_Woman_Illustration from "../../content/Visual Archive/Woman_Illustration.jpg";
import img_Visual_Design_Poster_3 from "../../content/Visual Archive/Visual_Design_Poster_3.jpg";
import img_Willy_Poster from "../../content/Visual Archive/Willy_Poster.jpeg";
import img_Theater_Flyer from "../../content/Visual Archive/Theater_Flyer.jpg";
import img_Typo_Poster from "../../content/Visual Archive/Typo_Poster.jpeg";
import img_Smashburger_Post from "../../content/Visual Archive/Smashburger_Post.jpg";
import img_WKV_Website from "../../content/Visual Archive/WKV_Website.jpeg";
import img_Ramen_Illustration from "../../content/Visual Archive/Ramen_Illustration.jpg";

export const Route = createFileRoute("/projects/gallery")({
  head: () => ({
    meta: [
      { title: "Visual Archive — Megan Mielke" },
      {
        name: "description",
        content: "A gallery of visual, editorial and experimental design work by Megan Mielke.",
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

const IMAGES: GalleryImage[] = [
  {
    title: "Smashburger Restaurant Promo Video",
    category: "VIDEO DESIGN",
    context:
      "Edit of a promotional video piece exploring motion, food branding and engaging social media storytelling.",
    year: "2025",
    src: img_Smashburger_Video,
    size: "wide",
  },
  {
    title: "Smashburger Restaurant Christmas Promotion (TikTok)",
    category: "VIDEO DESIGN",
    context:
      "A short-form video concept designed for social media attention, establishing customer loyalty and fast brand communication.",
    year: "2025",
    src: img_Smashburger_Tiktok,
    size: "tall",
  },
  {
    title: "Alice in Wonderland Poster",
    category: "POSTER DESIGN",
    context:
      "A bold theater poster translating the surreal atmosphere of Alice in Wonderland into a strong graphic composition.",
    year: "2025",
    src: img_Theater_Poster,
    size: "tall",
  },
  {
    title: "The Great Search for Mrs. Mümmel",
    category: "GAME CONCEPT",
    context:
      "An interactive teaching media prototype using storytelling and playful interaction to support learning and exploration.",
    year: "2025",
    src: img_The_great_Search,
    size: "wide",
  },
  {
    title: "A Window in My Life",
    category: "PAPERCRAFT",
    context:
      "A handcrafted paper object exploring personal perspective, spatial layering and material storytelling.",
    year: "2024",
    src: img_A_Window_in_my_Life,
    size: "tall",
  },
  {
    title: "Smashburger Restaurant Christmas Promotion (Post)",
    category: "SOCIAL MEDIA",
    context:
      "A promotional Instagram story design created for quick visual impact, clear messaging and brand-related food communication.",
    year: "2025",
    src: img_Smashburger_Story,
    size: "tall",
  },
  {
    title: "Greek Mythology Illustration",
    category: "ILLUSTRATION",
    context:
      "A digital illustration focused on stylized character design, composition and expressive visual atmosphere.",
    year: "2024",
    src: img_Woman_Illustration,
    size: "md",
  },
  {
    title: "Life Tracking",
    category: "VISUAL DESIGN",
    context:
      "A visual data poster comparing one week of university life with one week on vacation through personal routines, mood, activity and media habits.",
    year: "2025",
    src: img_Visual_Design_Poster_3,
    size: "wide",
  },
  {
    title: "WLB-Willy",
    category: "EMBODIED DESIGN",
    context:
      "A concept poster for a library assistance robot, combining persona development, service design and visual communication.",
    year: "2024",
    src: img_Willy_Poster,
    size: "tall",
  },
  {
    title: "Theater Flyer Series",
    category: "COMMUNICATION DESIGN",
    context:
      "A compact flyer design combining event communication, visual storytelling and a consistent graphic direction.",
    year: "2025",
    src: img_Theater_Flyer,
    size: "wide",
  },
  {
    title: "Bembo Type Poster",
    category: "TYPOGRAPHY",
    context:
      "A typographic poster exploring the character, history and visual qualities of the typeface Bembo.",
    year: "2024",
    src: img_Typo_Poster,
    size: "tall",
  },
  {
    title: "Smashburger Restaurant Instagram Post",
    category: "SOCIAL MEDIA",
    context:
      "A social media post concept combining bold visuals, promotional messaging and a youthful visual tone.",
    year: "2025",
    src: img_Smashburger_Post,
    size: "tall",
  },
  {
    title: "WKV Website Redesign",
    category: "WEB DESIGN",
    context:
      "A website concept for the Württembergischer Kunstverein Stuttgart, focusing on clearer structure, navigation and visual hierarchy.",
    year: "2025",
    src: img_WKV_Website,
    size: "tall",
  },
  {
    title: "Ramen Illustration",
    category: "ILLUSTRATION",
    context: "A playful food illustration exploring color, detail and soft digital rendering.",
    year: "2021",
    src: img_Ramen_Illustration,
    size: "md",
  },
];

function GalleryPage() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((a) => (a === null ? a : (a + 1) % IMAGES.length));
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
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-black/5">
                {img.src.endsWith(".mp4") || img.src.endsWith(".mov") ? (
                  <video
                    src={img.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                  />
                ) : (
                  <img
                    src={img.src}
                    alt={img.title}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                  />
                )}
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
            className="flex max-h-[90vh] w-full max-w-6xl flex-col gap-6 overflow-y-auto rounded-3xl md:flex-row md:items-center md:overflow-hidden bg-black/20 md:bg-transparent"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex min-h-0 flex-1 items-center justify-center md:h-full md:rounded-2xl md:bg-black/20">
              {IMAGES[active].src.endsWith(".mp4") || IMAGES[active].src.endsWith(".mov") ? (
                <video
                  src={IMAGES[active].src}
                  autoPlay
                  loop
                  controls
                  playsInline
                  className="max-h-[50vh] w-full object-contain md:max-h-[90vh] md:rounded-2xl"
                />
              ) : (
                <img
                  src={IMAGES[active].src}
                  alt={IMAGES[active].title}
                  className="max-h-[50vh] w-full object-contain md:max-h-[90vh] md:rounded-2xl"
                />
              )}
            </div>
            <div className="shrink-0 p-6 text-foreground md:w-96 lg:w-[400px]">
              <div className="rounded-2xl bg-card/50 p-6 shadow-2xl backdrop-blur-2xl">
                <span className="text-[10px] uppercase tracking-[0.22em] text-pink-strong">
                  {IMAGES[active].category} · {IMAGES[active].year}
                </span>
                <h3 className="mt-2 font-display text-2xl leading-tight tracking-tight">
                  {IMAGES[active].title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {IMAGES[active].context}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
