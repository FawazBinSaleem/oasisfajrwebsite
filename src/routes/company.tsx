import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/PageHeader";
import { companyOverview, sections } from "@/data/site";

export const Route = createFileRoute("/company")({
  head: () => ({
    meta: [
      { title: "Company Information | Oasis Fajr Contracting" },
      {
        name: "description",
        content:
          "Civil contracting, MEP, drainage, industrial electrical, fit out and landscaping services offered by Oasis Fajr.",
      },
      { property: "og:title", content: "Company Information | Oasis Fajr Contracting" },
      {
        property: "og:description",
        content: "The full range of contracting services offered by Oasis Fajr.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/company" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Company Information | Oasis Fajr Contracting" },
      {
        name: "twitter:description",
        content: "The full range of contracting services offered by Oasis Fajr.",
      },
    ],
    links: [{ rel: "canonical", href: "/company" }],
  }),
  component: CompanyInfo,
});

function CompanyInfo() {
  return (
    <>
      <PageHeader eyebrow="Company as a whole" title="Company Information" intro={companyOverview} />
      <Section className="space-y-16">
        {sections.map((s, i) => (
          <article key={s.title} className="grid gap-8 lg:grid-cols-[0.8fr_1.6fr]">
            <div>
              <span className="font-display text-xs font-bold text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl">{s.title}</h2>
            </div>
            <div className="space-y-6">
              {s.intro && (
                <p className="text-base leading-relaxed text-muted-foreground">{s.intro}</p>
              )}
              {s.groups.map((g, gi) => (
                <div key={g.heading ?? gi}>
                  {g.heading && (
                    <h3 className="text-sm font-bold uppercase tracking-[0.14em]">{g.heading}</h3>
                  )}
                  {g.body && (
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{g.body}</p>
                  )}
                  {g.items && (
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {g.items.map((item) => (
                        <li
                          key={item}
                          className="border-l-2 border-primary/50 pl-3 text-sm text-muted-foreground"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </article>
        ))}
      </Section>
    </>
  );
}
