import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { BackButton } from "@/components/site/BackButton";


export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Megan Mielke" },
      {
        name: "description",
        content:
          "Skills of Megan Mielke across UX/UI, visual design, tools, web technologies and languages.",
      },
      { property: "og:title", content: "Skills — Megan Mielke" },
      {
        property: "og:description",
        content: "UX/UI, visual design, tools, web technologies and languages.",
      },
      { property: "og:url", content: "/skills" },
    ],
    links: [{ rel: "canonical", href: "/skills" }],
  }),
  component: SkillsPage,
});

const groups: { title: string; items: string[]; accent: "pink" | "green" | "neutral" }[] = [
  {
    title: "UX / UI",
    accent: "pink",
    items: [
      "User Research",
      "Information Architecture",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
      "Interaction Design",
      "Design Systems",
    ],
  },
  {
    title: "Visual Design",
    accent: "green",
    items: [
      "Typography",
      "Editorial Layout",
      "Brand Systems",
      "Iconography",
      "Color & Composition",
    ],
  },
  {
    title: "Tools",
    accent: "neutral",
    items: [
      "Figma",
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Adobe InDesign",
      "Visual Studio Code",
      "Microsoft 365",
      "Stitch · Gemini · ChatGPT · M365 Copilot · Lovable",
    ],
  },

  {
    title: "Web Technologies",
    accent: "pink",
    items: ["HTML", "CSS", "JavaScript", "Processing"],
  },
  {
    title: "Languages",
    accent: "green",
    items: ["German (native)", "English (C2)", "French (B1/B2)"],
  },
];

const accentMap = {
  pink: "bg-pink text-pink-foreground",
  green: "bg-green text-green-foreground",
  neutral: "bg-card text-foreground",
};

function SkillsPage() {
  return (
    <>
    <BackButton />
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
      <SectionHeading

        eyebrow="Skills"
        title="A toolkit, organised."
        subtitle="Methods, software and languages I work with most often."
      />

      <div className="mt-16 divide-y divide-hairline border-y border-hairline">
        {groups.map((g) => (
          <div key={g.title} className="grid gap-6 py-8 md:grid-cols-12 md:py-10">
            <div className="md:col-span-4">
              <div className="flex items-center gap-3">
                <span className={`h-2 w-2 rounded-full ${
                  g.accent === "pink" ? "bg-pink" : g.accent === "green" ? "bg-green" : "bg-foreground"
                }`} />
                <h3 className="font-display text-2xl md:text-3xl">{g.title}</h3>
              </div>
            </div>
            <div className="flex min-w-0 flex-wrap gap-2 md:col-span-8">
              {g.items.map((i) => (
                <span
                  key={i}
                  className={`inline-flex max-w-full items-center rounded-full px-4 py-2 text-sm leading-tight break-words ${accentMap[g.accent]} ${
                    g.accent === "neutral" ? "border border-hairline" : ""
                  }`}
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );

}
