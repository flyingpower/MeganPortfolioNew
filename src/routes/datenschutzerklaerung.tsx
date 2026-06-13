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
            <h2 className="font-display text-2xl text-foreground">
              1. Data Protection at a Glance
            </h2>
            <h3 className="font-display mt-4 text-xl text-foreground">General Information</h3>
            <p className="mt-3">
              The following notes provide a simple overview of what happens to your personal data
              when you visit this website. Personal data is any data with which you could be
              personally identified.
            </p>
            <h3 className="font-display mt-4 text-xl text-foreground">
              Data collection on this website
            </h3>
            <p className="mt-3">
              <strong>Who is responsible for data collection on this website?</strong>
              <br />
              The data processing on this website is carried out by the website operator. You can
              find their contact details in the "Controller" section of this privacy policy.
            </p>
            <p className="mt-3">
              <strong>How do I collect your data?</strong>
              <br />
              On the one hand, your data is collected when you communicate it to me. This could, for
              example, be data you enter into an email. Other data is collected automatically or
              after your consent by IT systems when you visit the website. This is primarily
              technical data (e.g., internet browser, operating system, or time of the page
              request).
            </p>
            <p className="mt-3">
              <strong>What do I use your data for?</strong>
              <br />
              Part of the data is collected to ensure the error-free provision of the website.
            </p>
            <p className="mt-3">
              <strong>What rights do you have regarding your data?</strong>
              <br />
              You have the right to receive information about the origin, recipient, and purpose of
              your stored personal data free of charge at any time. You also have a right to request
              the correction or deletion of this data. If you have given your consent to data
              processing, you can revoke this consent at any time for the future. You also have the
              right to request the restriction of the processing of your personal data under certain
              circumstances. Furthermore, you have the right to lodge a complaint with the competent
              supervisory authority.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground">2. Hosting</h2>
            <p className="mt-3">
              This website is hosted externally. Personal data collected on this website is stored
              on the host's servers. This may primarily include IP addresses, contact requests, meta
              and communication data, contract data, contact details, names, website access, and
              other data generated via a website. The external hosting serves the purpose of
              fulfilling the contract with potential and existing customers (Art. 6(1)(b) GDPR) and
              the interest of a secure, fast, and efficient provision of my online offering by a
              professional provider (Art. 6(1)(f) GDPR).
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground">
              3. General Notes and Mandatory Information
            </h2>
            <h3 className="font-display mt-4 text-xl text-foreground">Controller</h3>
            <p className="mt-3">
              The responsible party for data processing on this website is:
              <br />
              <br />
              Megan Mielke
              <br />
              Werfmershalde 7<br />
              70190 Stuttgart
              <br />
              Email:{" "}
              <a
                href="mailto:megan@mymielke.de"
                className="underline hover:text-foreground transition-colors"
              >
                megan@mymielke.de
              </a>
            </p>
            <p className="mt-3">
              The controller is the natural or legal person who alone or jointly with others
              determines the purposes and means of the processing of personal data (e.g., names,
              email addresses, etc.).
            </p>
            <h3 className="font-display mt-4 text-xl text-foreground">
              Revocation of your consent to data processing
            </h3>
            <p className="mt-3">
              Many data processing operations are only possible with your express consent. You can
              revoke consent you have already given at any time. The legality of the data processing
              carried out until the revocation remains unaffected by the revocation.
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
