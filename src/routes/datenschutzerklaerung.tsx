import { createFileRoute } from "@tanstack/react-router";
import { BackButton } from "@/components/site/BackButton";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/datenschutzerklaerung")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Megan Mielke" },
      { name: "description", content: "Information on the processing of personal data." },
      { property: "og:title", content: "Privacy Policy — Megan Mielke" },
      { property: "og:description", content: "Information on the processing of personal data." },
      { property: "og:url", content: "/datenschutzerklaerung" },
    ],
    links: [{ rel: "canonical", href: "/datenschutzerklaerung" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <>
      <BackButton />
      <article className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
        <SectionHeading eyebrow="Legal" title="Privacy Policy" />
        <div className="mt-10 space-y-8 text-muted-foreground">
          <section>
            <h2 className="font-display text-2xl text-foreground">1. Overview</h2>
            <p className="mt-3">
              The following notes provide a simple overview of what happens to your
              personal data when you visit this website. (Lorem ipsum.)
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground">2. Responsible party</h2>
            <p className="mt-3">
              Megan Mielke<br />
              Sample Street 1<br />
              70173 Stuttgart<br />
              Email: <a href="mailto:megan@mymielke.de" className="underline">megan@mymielke.de</a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground">3. Data collection</h2>
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground">4. Your rights</h2>
            <p className="mt-3">
              You have the right at any time to access, correct, delete and restrict
              the processing of your data. (Placeholder)
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
