import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { StatStrip } from "@/components/StatStrip";
import { OrganizationChart } from "@/components/OrganizationChart";
import { SafetyFeature } from "@/components/SafetyFeature";
import { ContactCTA } from "@/components/ContactCTA";
import {
  company,
  companyStory,
  companyBackground,
  vision,
  missionStatements,
  coreValues,
  hse,
  quality,
  management,
} from "@/data/company";

const title = "About Oasis Fajr Contracting | Company Profile";
const description =
  "Company profile, vision, mission, values, organisation structure, HSE policy and quality policy of Oasis Fajr Contracting in Saudi Arabia.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${company.domain}/about` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: `${company.domain}/about` }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A Saudi contracting company built on delivery"
        intro={`${company.name} has operated in the Kingdom since ${company.founded}, delivering multidisciplinary contracting work for commercial, industrial and public sector clients.`}
        image="/media/IMG-20180912-WA0043.jpg"
        imageAlt="Oasis Fajr construction team on site"
      />
      <div id="main-content" />
      <StatStrip />

      <Section id="profile">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading eyebrow="Company profile" title="Who we are" />
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            {[...companyStory, ...companyBackground].map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <p>
              Formerly known as {company.formerNames.join(" and ")}, the company operates from{" "}
              {company.location}.
            </p>
          </div>
        </div>
      </Section>

      <section className="border-y border-border bg-sand">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
          <div>
            <SectionHeading eyebrow="Vision" title="Our vision" intro={vision} />
          </div>
          <div>
            <SectionHeading eyebrow="Mission" title="Our mission" as="h2" />
            <ul className="mt-6 space-y-4">
              {missionStatements.map((m) => (
                <li key={m.slice(0, 20)} className="border-l-2 border-primary pl-4 text-sm leading-relaxed text-muted-foreground">
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Section id="values">
        <SectionHeading eyebrow="Values" title="What we hold ourselves to" />
        <ul className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((v) => (
            <li key={v.title} className="bg-background p-6 lg:p-7">
              <h3 className="text-lg">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <section className="border-y border-border bg-sand" id="structure">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Organisation"
            title="Company structure"
            intro="Responsibility is defined level by level so that every project has clear ownership from management down to the site crews."
          />
          <div>
            <OrganizationChart />
            <div className="mt-10 border-t border-border pt-6">
              <h3 className="eyebrow text-muted-foreground">Management</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {management.map((m) => (
                  <li key={m.role}>
                    <span className="font-semibold">{m.name}</span>
                    <span className="text-muted-foreground"> — {m.role}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SafetyFeature withLink={false} />

      <Section id="hse">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading eyebrow="HSE policy" title="Health, safety and environment" />
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            {hse.intro.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <div>
              <h3 className="text-lg text-foreground">Reportable environmental incidents</h3>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {hse.reportable.map((r) => (
                  <li key={r} className="border border-border px-4 py-3 text-sm">
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg text-foreground">Environmental commitments</h3>
              <ul className="mt-4 space-y-3">
                {hse.environment.map((e) => (
                  <li key={e.slice(0, 20)} className="border-l-2 border-primary pl-4 text-sm leading-relaxed">
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <section className="border-t border-border bg-sand" id="quality">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20">
          <SectionHeading eyebrow="Quality policy" title="Our commitment to quality" intro={quality.intro} />
          <ul className="space-y-4">
            {quality.points.map((p) => (
              <li key={p.slice(0, 20)} className="border border-border bg-background p-5 text-sm leading-relaxed text-muted-foreground">
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactCTA title="Want the full company profile?" body="Get in touch and we will share credentials, capability statements and project references relevant to your scope." />
    </>
  );
}
