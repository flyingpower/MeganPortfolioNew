import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import portrait from "@/assets/megan-portrait-cutout.png";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/site/ProjectCard";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Megan Mielke — Information Design & UX" },
      {
        name: "description",
        content:
          "Portfolio of Megan Mielke, an Information Design student and aspiring UX designer based in Stuttgart.",
      },
      { property: "og:title", content: "Megan Mielke — Information Design & UX" },
      {
        property: "og:description",
        content:
          "Selected work, case studies, and CV of Megan Mielke — Information Design student & aspiring UX designer.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY < 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <>
      {/* ───────────────── HERO ───────────────── */}
      <section className="relative isolate overflow-x-clip">

        <div className="w-full px-4 pt-20 md:px-6 md:pt-24 lg:px-8 lg:pt-28">
          {/* Stacked editorial name + portrait composition */}
          <div className="relative grid grid-cols-12 items-stretch gap-y-6 md:gap-x-2 lg:gap-x-4">
            {/* Top-left: "Hi, my name is" */}
            <div className="col-span-12 md:col-span-4 flex items-center justify-start md:pl-5">
              <motion.h1
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="font-display flex flex-col text-left leading-[0.85] tracking-[-0.03em] text-[14vw] md:text-[9vw] lg:text-[8vw]"
              >
                <span className="italic text-pink-strong">Hi,</span>
                <span>my</span>
                <span>name</span>
                <span>is</span>
              </motion.h1>
            </div>

            {/* Portrait — center */}
            <div className="relative col-span-12 mx-auto flex aspect-square w-full max-w-[640px] items-end justify-center md:col-span-4 md:max-w-none">
              <motion.svg
                aria-hidden
                viewBox="-100 -100 200 200"
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -inset-[7.5%] -z-10 h-[115%] w-[115%] drop-shadow-[0_40px_100px_rgba(236,72,153,0.25)]"
              >
                <defs>
                  <linearGradient id="blobFill" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="var(--pink)" />
                    <stop offset="100%" stopColor="var(--pink-soft)" />
                  </linearGradient>
                </defs>
                <path
                  d="M48,-62C61,-52,70,-36,74,-19C78,-2,77,16,68,30C59,44,43,54,25,62C7,70,-13,76,-31,70C-49,64,-65,46,-71,26C-77,6,-73,-16,-62,-31C-51,-46,-34,-54,-17,-61C0,-68,17,-72,48,-62Z"
                  fill="url(#blobFill)"
                  opacity="0.7"
                />
              </motion.svg>

              <motion.svg
                aria-hidden
                viewBox="0 0 200 200"
                animate={{ rotate: 360 }}
                transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                style={{ left: "50%", top: "50%", x: "-50%", y: "calc(-50% - 50px)" }}
                className="pointer-events-none absolute -z-20 h-[160%] w-[160%] text-pink-strong/55"

              >
                <g transform="translate(100 100)">
                  {[0, 72, 144, 216, 288].map((deg) => (
                    <ellipse
                      key={deg}
                      cx="0"
                      cy="-42"
                      rx="28"
                      ry="46"
                      transform={`rotate(${deg})`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.8"
                      strokeDasharray="2 5"
                    />
                  ))}
                  <circle
                    cx="0"
                    cy="0"
                    r="14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.8"
                    strokeDasharray="2 5"
                  />
                </g>
              </motion.svg>
              <motion.img
                src={portrait}
                alt="Portrait of Megan Mielke"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 h-[125%] w-auto max-w-none object-contain drop-shadow-[0_24px_40px_rgba(0,0,0,0.18)]"
                style={{
                  maskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 78%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 78%, transparent 100%)",
                }}
              />
            </div>

            {/* Bottom-right: "Megan Mielke" */}
            <div className="col-span-12 md:col-span-4 flex items-center justify-end md:pr-5">
              <motion.h1
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="font-display flex flex-col items-end text-right leading-[0.85] tracking-[-0.03em] text-[14vw] md:text-[9vw] lg:text-[8vw] text-pink-strong"
              >
                <span>Megan</span>
                <span>Mielke</span>
              </motion.h1>
            </div>
          </div>



          {/* Short role line */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mx-auto mt-16 max-w-md text-center text-sm uppercase tracking-[0.25em] text-muted-foreground md:mt-24"
          >
            Information Design & UX · HdM Stuttgart
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 flex flex-wrap justify-center gap-3 pb-14 md:pb-20"
          >
            <Link to="/projects" className="btn-primary">
              View Projects
              <ArrowUpRight size={16} className="btn-arrow" />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact Me
              <ArrowUpRight size={16} className="btn-arrow" />
            </Link>

          </motion.div>
        </div>

        {/* Scroll indicator */}
        <AnimatePresence>
          {showScroll && (
            <motion.button
              type="button"
              onClick={scrollDown}
              aria-label="Scroll down"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="group fixed bottom-8 right-8 z-40"
            >
              <span className="grid h-14 w-14 place-items-center rounded-full border border-transparent bg-transparent text-pink-strong transition-all duration-300 group-hover:border-pink-strong/50 group-hover:bg-background/70 group-hover:shadow-[0_8px_30px_-8px_color-mix(in_oklab,var(--pink-strong)_60%,transparent)] group-hover:backdrop-blur-md">
                <motion.span
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative flex flex-col items-center leading-none"
                >
                  <ChevronDown size={30} strokeWidth={3} className="-mb-4" />
                  <ChevronDown size={30} strokeWidth={3} />
                </motion.span>
              </span>
            </motion.button>
          )}
        </AnimatePresence>
      </section>

      {/* ───────────────── PROJECTS — compact grid ───────────────── */}
      <section className="relative mx-auto max-w-7xl px-6 pt-14 pb-20 md:px-10 md:pt-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Selected Work · 5 Projects"
            title="My work"
            subtitle="A curated selection across UX, information design and visual systems."
          />
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-sm underline-offset-4 hover:underline"
          >
            Projects
            <ArrowUpRight size={16} className="btn-arrow" />
          </Link>
        </div>

        {/* Magazine / bento grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6 auto-rows-auto">
          {projects.map((project, i) => {
            const span =
              project.size === "lg" || project.size === "wide"
                ? "lg:col-span-4"
                : project.size === "tall"
                  ? "lg:col-span-2"
                  : project.size === "md"
                    ? "lg:col-span-3"
                    : "lg:col-span-2";
            return (
              <div key={project.slug} className={span}>
                <ProjectCard project={project} index={i} />
              </div>
            );
          })}
        </div>
      </section>





      {/* ABOUT TEASER */}
      <section className="relative border-y border-hairline bg-card/40">
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32">
          <div className="md:col-span-5">
            <SectionHeading eyebrow="About" title="Curious by design." />
          </div>
          <div className="md:col-span-7">
            <p className="text-balance text-lg leading-relaxed text-muted-foreground md:text-xl">
              I study Information Design at Hochschule der Medien Stuttgart, with
              a focus on UX, visual communication and user-centered digital
              experiences. I love translating complexity into clarity — through
              research, type, structure and a little bit of softness.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/about" className="btn-secondary">
                More about me <ArrowUpRight size={16} className="btn-arrow" />
              </Link>
              <Link to="/cv" className="btn-primary">
                See CV <ArrowUpRight size={16} className="btn-arrow" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-hairline bg-foreground px-8 py-16 text-background md:px-16 md:py-24">
          <div className="relative max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-pink/80">
              Let's collaborate
            </p>
            <h2 className="font-display mt-4 text-balance text-4xl leading-[1.02] md:text-6xl">
              Have a project in mind? <span className="italic text-pink">Let's talk.</span>
            </h2>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-secondary">
                Get in touch <ArrowUpRight size={16} className="btn-arrow" />
              </Link>
              <a href="mailto:megan@mymielke.de" className="btn-dark">
                megan@mymielke.de<ArrowUpRight size={16} className="btn-arrow ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
