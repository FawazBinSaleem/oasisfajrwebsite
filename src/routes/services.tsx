import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactCTA } from "@/components/ContactCTA";
import { services } from "@/data/services";
import { company, industries } from "@/data/company";

const title = "Contracting Services | Civil, MEP, Fit-Out & Maintenance";
const description =
  "Civil construction, mechanical, electrical, fit-out and finishing, maintenance and landscaping services delivered by Oasis Fajr across Saudi Arabia.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${company.domain}/services` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: `${company.domain}/services` }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Multidisciplinary contracting under one team"
        intro="From structure to finishes and building systems, our disciplines are coordinated by a single project team — reducing interfaces, delays and rework."
        image="/media/IMG-20180808-WA0034.jpg"
        imageAlt="Oasis Fajr mechanical installation works"
      />
      <div id="main-content" />

      <Section>
        <nav aria-label="Services" className="flex flex-wrap gap-2">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/services"
              hash={s.slug}
              className="border border-border px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-muted-foreground hover:border-primary hover:text-primary-dark"
            >
              {s.title}
            </Link>
          ))}
        </nav>
      </Section>

      {services.map((service, index) => {
        const Icon = service.icon;
        const reversed = index % 2 === 1;
        return (
          <section
            key={service.slug}
            id={service.slug}
            className={`scroll-mt-24 border-t border-border ${reversed ? "bg-sand" : ""}`}
          >
            <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
              <div className={reversed ? "lg:order-2" : ""}>
                <Icon className="h-9 w-9 text-primary-dark" aria-hidden="true" />
                <SectionHeading
                  eyebrow={`0${index + 1}`}
                  title={service.title}
                  intro={service.overview}
                />
                <ul className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2">
                  {service.scope.map((item) => (
                    <li
                      key={item}
                      className={`px-4 py-3 text-sm ${reversed ? "bg-sand" : "bg-background"}`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <img
                src={service.image}
                alt={service.imageAlt}
                loading="lazy"
                decoding="async"
                className={`aspect-[4/3] w-full border border-border object-cover ${reversed ? "lg:order-1" : ""}`}
              />
            </div>
          </section>
        );
      })}

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Industries"
            title="Sectors we serve"
            intro="Our teams are structured to work across the following sectors in the Kingdom."
          />
          <ul className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <li key={industry} className="bg-background px-6 py-7 font-display text-lg font-bold">
                {industry}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactCTA
        title="Need a scope priced?"
        body="Send us your drawings, BOQ or scope of works and we will come back with a proposal."
      />
    </>
  );
}
