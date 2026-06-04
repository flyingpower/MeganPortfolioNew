import { createFileRoute, Link } from "@tanstack/react-router";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/site/SectionHeading";
import { BackButton } from "@/components/site/BackButton";
import { BackgroundBlobs } from "@/components/site/BackgroundBlobs";
import portrait from "@/assets/megan-portrait-cutout-about.png";




export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Megan Mielke" },
      {
        name: "description",
        content:
          "Megan Mielke is an Information Design student at HdM Stuttgart, focused on UX, visual communication and user-centered design.",
      },
      { property: "og:title", content: "About — Megan Mielke" },
      {
        property: "og:description",
        content:
          "Information Design student with a focus on UX, visual communication and user-centered digital experiences.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
    <BackButton />
    <article className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
      <SectionHeading eyebrow="About" title="A creative mind for clear systems." />


      <div className="mt-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7 md:col-start-1">
          <p className="text-xl leading-relaxed text-foreground md:text-2xl">
            I'm Megan — a 20-year-old Information Design student at Hochschule
            der Medien Stuttgart, with a strong focus on UX design, visual
            communication and user-centered digital experiences.
          </p>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              My work lives at the intersection of structure and personality. I
              love research, typographic detail, and the small interactions that
              make a product feel considered. I'm just as interested in the
              system behind a design as in the surface of it.
            </p>
            <p>
              Outside of design I'm into art, languages, history, music and
              fashion — all of which quietly shape how I think about visual
              storytelling and rhythm. In 2026 I'll be joining{" "}
              <span className="text-foreground">Robert Bosch GmbH</span> for a UX
              design internship.
            </p>
            <p>
              I'm currently open to UX, product design and information design
              opportunities. If we share a wavelength, I'd love to hear from
              you.
            </p>
          </div>

          <div className="mt-10 rounded-3xl bg-pink p-8 text-pink-foreground">
            <p className="font-display text-2xl leading-snug md:text-3xl">
              "Good design is invisible until it isn't — I aim for the
              <span className="italic"> calm in between</span>."
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/projects" className="btn-primary">
              See projects <ArrowUpRight size={16} className="btn-arrow" />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Get in touch <ArrowUpRight size={16} className="btn-arrow" />
            </Link>
          </div>

        </div>

        <aside className="md:col-span-4 md:col-start-9">
          <div className="relative isolate aspect-[3/4] w-full">
            <BackgroundBlobs variant="soft" className="rounded-3xl" />
            <motion.div
              aria-hidden
              animate={{ rotate: 360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute inset-2 -z-10 rounded-full border border-dashed border-pink-strong/35"
            />
            <img
              src={portrait}
              alt="Megan Mielke"
              className="absolute inset-x-0 top-0 h-full w-full object-cover object-top"
              style={{ objectPosition: "50% 0%" }}
            />
          </div>


          <dl className="mt-8 divide-y divide-hairline border-y border-hairline text-sm">
            {[
              ["Based in", "Stuttgart, DE"],
              ["Studying", "Information Design, HdM"],
              ["Focus", "UX · UI · Visual Design"],
              ["Languages", "German · English (C2) · French (B1/B2)"],
              ["Available", "From March 2026"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 py-3">
                <dt className="text-muted-foreground">{k}</dt>
                <dd className="text-right">{v}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </article>
    </>
  );

}
