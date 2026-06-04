import { createFileRoute } from "@tanstack/react-router";
import { BackButton } from "@/components/site/BackButton";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Imprint — Megan Mielke" },
      { name: "description", content: "Legal information and contact details." },
      { property: "og:title", content: "Imprint — Megan Mielke" },
      { property: "og:description", content: "Legal information and contact details." },
      { property: "og:url", content: "/impressum" },
    ],
    links: [{ rel: "canonical", href: "/impressum" }],
  }),
  component: Imprint,
});

function Imprint() {
  return (
    <>
      <BackButton />
      <article className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
        <SectionHeading eyebrow="Legal" title="Imprint" />
        <div className="mt-10 space-y-8 text-muted-foreground">
          <section>
            <h2 className="font-display text-2xl text-foreground">Information according to § 5 TMG</h2>
            <p className="mt-3">
              Megan Mielke<br />
              Sample Street 1<br />
              70173 Stuttgart<br />
              Germany
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground">Contact</h2>
            <p className="mt-3">
              Email: <a href="mailto:megan@mymielke.de" className="underline">megan@mymielke.de</a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground">Responsible for content</h2>
            <p className="mt-3">Megan Mielke, address as above.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground">Disclaimer</h2>
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. (Placeholder — to be
              replaced with legally binding text.)
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
