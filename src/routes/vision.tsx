import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/PageHeader";
import { vision, mission, company } from "@/data/site";

export const Route = createFileRoute("/vision")({
  head: () => ({
    meta: [
      { title: "Vision & Mission | Oasis Fajr Contracting" },
      {
        name: "description",
        content:
          "Oasis Fajr's vision and mission: uncompromising quality, integrity and the safest possible working environment.",
      },
      { property: "og:title", content: "Vision & Mission | Oasis Fajr Contracting" },
      {
        property: "og:description",
        content: "Uncompromising quality, integrity and safety on every project.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/vision" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Vision & Mission | Oasis Fajr Contracting" },
      {
        name: "twitter:description",
        content: "Uncompromising quality, integrity and safety on every project.",
      },
    ],
    links: [{ rel: "canonical", href: "/vision" }],
  }),
  component: Vision,
});

function Vision() {
  return (
    <>
      <PageHeader eyebrow="Vision & Mission" title={company.tagline} intro={vision} />
      <Section>
        <p className="eyebrow">Our mission</p>
        <div className="mt-8 grid gap-px bg-border md:grid-cols-3">
          {mission.map((m, i) => (
            <div key={m.slice(0, 20)} className="bg-background p-7">
              <span className="font-display text-xs font-bold text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{m}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
