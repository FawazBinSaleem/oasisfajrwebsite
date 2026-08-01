import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/PageHeader";
import {
  hseIntro,
  hseReportable,
  hseResponsibility,
  hseEnvironment,
  qualityIntro,
  qualityPoints,
} from "@/data/site";

export const Route = createFileRoute("/safety")({
  head: () => ({
    meta: [
      { title: "Safety & Quality | Oasis Fajr Contracting" },
      {
        name: "description",
        content:
          "Our Health, Safety & Environment policy and Quality policy — Target Zero Accidents and consistent, compliant delivery.",
      },
      { property: "og:title", content: "Safety & Quality | Oasis Fajr Contracting" },
      {
        property: "og:description",
        content: "HSE and quality policies at Oasis Fajr Contracting.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/safety" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Safety & Quality | Oasis Fajr Contracting" },
      {
        name: "twitter:description",
        content: "HSE and quality policies at Oasis Fajr Contracting.",
      },
    ],
    links: [{ rel: "canonical", href: "/safety" }],
  }),
  component: Safety,
});

function Safety() {
  return (
    <>
      <PageHeader
        eyebrow="We care"
        title="Health, Safety & Environment Policy"
        intro="Our people and the environment are the two assets we protect above all else."
      />

      <Section className="space-y-16">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.6fr]">
          <h2 className="text-2xl sm:text-3xl">Health, safety and environment</h2>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            {hseIntro.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.6fr]">
          <h2 className="text-2xl sm:text-3xl">Accountability</h2>
          <div className="space-y-5">
            <p className="text-base leading-relaxed text-muted-foreground">
              All personnel are accountable for their performance and responsible for reporting
              accidents, incidents and near misses involving environmental matters like:
            </p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {hseReportable.map((r) => (
                <li key={r} className="border-l-2 border-primary/50 pl-3 text-sm">
                  {r}
                </li>
              ))}
            </ul>
            {hseResponsibility.map((p) => (
              <p key={p.slice(0, 24)} className="text-base leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.6fr]">
          <h2 className="text-2xl sm:text-3xl">Environmental planning</h2>
          <div>
            <p className="text-base leading-relaxed text-muted-foreground">
              We consider the environmental impact during the planning stage of all our projects and
              plan actions to reduce and avoid matters likely to cause environmental damage by:
            </p>
            <ul className="mt-5 space-y-3">
              {hseEnvironment.map((e) => (
                <li key={e.slice(0, 24)} className="rule-accent text-sm leading-relaxed text-muted-foreground">
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <p className="eyebrow">Quality policy</p>
          <h2 className="mt-3 max-w-3xl text-3xl sm:text-4xl">Consistent quality, every phase</h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
            {qualityIntro}
          </p>
          <div className="mt-10 grid gap-px bg-border md:grid-cols-2">
            {qualityPoints.map((q, i) => (
              <div key={q.slice(0, 20)} className="bg-secondary p-7">
                <span className="font-display text-xs font-bold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{q}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
