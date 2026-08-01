import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/PageHeader";
import { management } from "@/data/site";

export const Route = createFileRoute("/organization")({
  head: () => ({
    meta: [
      { title: "Organizational Chart | Oasis Fajr Contracting" },
      {
        name: "description",
        content: "The management team and organizational structure of Oasis Fajr Contracting & Trading.",
      },
      { property: "og:title", content: "Organizational Chart | Oasis Fajr Contracting" },
      {
        property: "og:description",
        content: "Management team and organizational structure of Oasis Fajr.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/organization" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Organizational Chart | Oasis Fajr Contracting" },
      {
        name: "twitter:description",
        content: "Management team and organizational structure of Oasis Fajr.",
      },
    ],
    links: [{ rel: "canonical", href: "/organization" }],
  }),
  component: Organization,
});

function Organization() {
  return (
    <>
      <PageHeader
        eyebrow="Structure"
        title="Organizational Chart"
        intro="How Oasis Fajr is organized, from management down to site execution."
      />
      <Section>
        <p className="eyebrow">Management team</p>
        <div className="mt-6 grid gap-px bg-border sm:grid-cols-2">
          {management.map((m) => (
            <div key={m.role} className="bg-background p-7">
              <p className="text-xs uppercase tracking-[0.16em] text-primary">{m.role}</p>
              <p className="mt-2 font-display text-2xl font-extrabold">{m.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 border border-border bg-card p-4 sm:p-8">
          <img
            src="/media/orgtrans.png"
            alt="Oasis Fajr Contracting organizational chart"
            className="mx-auto w-full max-w-4xl"
            loading="lazy"
          />
        </div>
      </Section>
    </>
  );
}
