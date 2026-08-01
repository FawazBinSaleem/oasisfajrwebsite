import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/PageHeader";
import { company, introduction } from "@/data/site";

export const Route = createFileRoute("/introduction")({
  head: () => ({
    meta: [
      { title: "Introduction | Oasis Fajr Contracting" },
      {
        name: "description",
        content:
          "How Oasis Fajr Contracting grew from IBN AL BALAD and ASAS into a trusted Saudi contractor since 2001.",
      },
      { property: "og:title", content: "Introduction | Oasis Fajr Contracting" },
      {
        property: "og:description",
        content: "The story of Oasis Fajr Contracting & Trading, founded in 2001.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/introduction" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Introduction | Oasis Fajr Contracting" },
      {
        name: "twitter:description",
        content: "The story of Oasis Fajr Contracting & Trading, founded in 2001.",
      },
    ],
    links: [{ rel: "canonical", href: "/introduction" }],
  }),
  component: Introduction,
});

function Introduction() {
  return (
    <>
      <PageHeader
        eyebrow="Our story"
        title="Introduction"
        intro={`Founded in ${company.founded}, originally known as ${company.formerNames.join(" and ")}.`}
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {introduction.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <img
            src="/media/thumbnail_20190221_092708.jpg"
            alt="Oasis Fajr team on site"
            className="h-72 w-full object-cover lg:h-full"
            loading="lazy"
          />
        </div>
      </Section>
    </>
  );
}
