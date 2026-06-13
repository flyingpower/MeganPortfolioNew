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
            <h2 className="font-display text-2xl text-foreground">
              Information according to § 5 TMG
            </h2>
            <p className="mt-3">
              Megan Mielke
              <br />
              Werfmershalde 7<br />
              70190 Stuttgart
              <br />
              Germany
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground">Contact</h2>
            <p className="mt-3">
              Email:{" "}
              <a href="mailto:megan@mymielke.de" className="underline">
                megan@mymielke.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground">Responsible for content</h2>
            <p className="mt-3">Megan Mielke, address as above.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground">Liability for Contents</h2>
            <p className="mt-3">
              As a service provider, I am responsible for my own content on these pages under
              general law, pursuant to § 7(1) TMG. According to §§ 8 to 10 TMG, however, as a
              service provider, I am not obligated to monitor transmitted or stored third-party
              information or to investigate circumstances that suggest illegal activity. Obligations
              to remove or block the use of information under general law remain unaffected.
              However, liability in this regard is only possible from the moment that knowledge of a
              specific breach of law is obtained. Upon notification of such breaches, I will remove
              this content immediately.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground">Liability for Links</h2>
            <p className="mt-3">
              My website contains links to external third-party websites over whose content I have
              no control. Therefore, I cannot accept any liability for these external contents. The
              respective provider or operator of the pages is always responsible for the content of
              the linked pages. At the time of linking, the pages were checked for possible legal
              violations. No illegal content was identifiable at the time of linking. However,
              constant monitoring of the linked pages' content is not reasonable without specific
              evidence of a violation. Upon notification of violations, I will remove such links
              immediately.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground">Copyright</h2>
            <p className="mt-3">
              The content and works created by the page operators on these pages are subject to
              German copyright law. Reproduction, processing, distribution, and any kind of use
              beyond the limits of copyright law require the written consent of the respective
              author or creator. Downloads and copies of this site are only permitted for private,
              non-commercial use. Insofar as the content on this site was not created by the
              operator, the copyrights of third parties are respected. Should you nevertheless
              become aware of a copyright infringement, please inform me accordingly. Upon
              notification of violations, I will remove such content immediately.
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
