import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/PageHeader";
import { specializations } from "@/data/site";

export const Route = createFileRoute("/specialization")({
  head: () => ({
    meta: [
      { title: "Specialization | Oasis Fajr Contracting" },
      {
        name: "description",
        content:
          "Fit out and decoration, turn key construction, maintenance, irrigation, landscaping, mechanical works and fiber optic networking.",
      },
      { property: "og:title", content: "Specialization | Oasis Fajr Contracting" },
      {
        property: "og:description",
        content: "The disciplines Oasis Fajr specializes in across Saudi Arabia.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/specialization" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Specialization | Oasis Fajr Contracting" },
      {
        name: "twitter:description",
        content: "The disciplines Oasis Fajr specializes in across Saudi Arabia.",
      },
    ],
    links: [{ rel: "canonical", href: "/specialization" }],
  }),
  component: Specialization,
});

function Specialization() {
  return (
    <>
      <PageHeader
        eyebrow="Capabilities"
        title="Specialization"
        intro="The disciplines we are specialized in and deliver turn key."
      />
      <Section>
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {specializations.map((s, i) => (
            <div key={s} className="bg-background p-7">
              <span className="font-display text-xs font-bold text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-4 text-base leading-relaxed">{s}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
