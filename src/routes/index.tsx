import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PrimaryButton, SecondaryButton } from "@/components/Buttons";
import { SectionHeading } from "@/components/SectionHeading";
import { StatStrip } from "@/components/StatStrip";
import { ServiceCard } from "@/components/ServiceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SafetyFeature } from "@/components/SafetyFeature";
import { OrganizationChart } from "@/components/OrganizationChart";
import { GalleryGrid } from "@/components/GalleryGrid";
import { ContactCTA } from "@/components/ContactCTA";
import { GalleryLightbox } from "@/components/GalleryLightbox";
import { company, heroCopy, companyStory, industries } from "@/data/company";
import { services } from "@/data/services";
import { featuredProjects } from "@/data/projects";
import { featuredGallery } from "@/data/gallery";
import { useState } from "react";
import type { Project } from "@/data/projects";

const title = "Oasis Fajr Contracting | Saudi Arabia";
const description =
  "Oasis Fajr provides civil construction, MEP, fit-out, maintenance, and landscaping services across the Kingdom of Saudi Arabia.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://oasisfajircontracting.com/" },
      {
        property: "og:image",
        content:
          "https://oasisfajircontracting.com/media/IMG-20190409-WA0022.jpg",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      {
        name: "twitter:image",
        content:
          "https://oasisfajircontracting.com/media/IMG-20190409-WA0022.jpg",
      },
    ],
    links: [{ rel: "canonical", href: "https://oasisfajircontracting.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          name: company.name,
          foundingDate: String(company.founded),
          url: company.domain,
          telephone: company.phone,
          email: company.email,
          areaServed: company.country,
          address: { "@type": "PostalAddress", addressCountry: "SA" },
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [active, setActive] = useState<Project | null>(null);

  return (
    <>
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <img
          src={heroCopy.image}
          alt={heroCopy.imageAlt}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          fetchPriority="high"
          decoding="async"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:py-28 lg:px-8 lg:py-36">
          <p className="eyebrow text-primary">{heroCopy.eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-[2.5rem] leading-[1.02] sm:text-6xl lg:text-7xl">
            {heroCopy.headline[0]}
            <br />
            {heroCopy.headline[1]}
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-ink-foreground/80 sm:text-lg">
            {heroCopy.support}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <PrimaryButton to="/projects">
              View Our Projects{" "}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </PrimaryButton>
            <SecondaryButton to="/contact" onDark>
              Request a Consultation
            </SecondaryButton>
          </div>
        </div>
      </section>

      <div id="main-content" />
      <StatStrip />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title="Built on experience. Driven by quality."
            />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              {companyStory.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 border-b border-foreground/30 pb-1 text-xs font-bold uppercase tracking-[0.14em] hover:border-primary hover:text-primary-dark"
            >
              Learn More About Us{" "}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <img
            src="/media/IMG-20180912-WA0043.jpg"
            alt="Oasis Fajr team executing structural works on a Saudi construction project"
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full border border-border object-cover"
          />
        </div>
      </section>

      <section className="border-y border-border bg-sand">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="What we do"
            title="Integrated contracting capabilities"
            intro="We coordinate civil, mechanical, electrical, and finishing work through a single project team, from planning to handover."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
          <div className="mt-10">
            <SecondaryButton to="/services">
              Explore All Services
            </SecondaryButton>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects delivered across the Kingdom"
            intro="A selection from our project record. Full details are available on request."
          />
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 border-b border-foreground/30 pb-1 text-xs font-bold uppercase tracking-[0.14em] hover:border-primary hover:text-primary-dark"
          >
            All Projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((p, i) => (
            <ProjectCard
              key={p.slug}
              project={p}
              onSelect={setActive}
              priority={i < 3}
            />
          ))}
        </div>
      </section>

      <SafetyFeature />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Industries"
          title="Sectors we can support"
          intro="Our multidisciplinary teams are set up to serve projects in the following sectors."
        />
        <ul className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <li
              key={industry}
              className="bg-background px-6 py-7 font-display text-lg font-bold"
            >
              {industry}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-border bg-sand">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Organisation"
            title="Structured for accountable delivery"
            intro="Every project is resourced through a defined chain of responsibility, so decisions and approvals are never left unowned."
          />
          <div>
            <OrganizationChart compact />
            <Link
              to="/about"
              hash="structure"
              className="mt-6 inline-flex items-center gap-2 border-b border-foreground/30 pb-1 text-xs font-bold uppercase tracking-[0.14em] hover:border-primary hover:text-primary-dark"
            >
              View Our Company Structure{" "}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Gallery" title="From our sites" />
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 border-b border-foreground/30 pb-1 text-xs font-bold uppercase tracking-[0.14em] hover:border-primary hover:text-primary-dark"
          >
            View Full Gallery{" "}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-12">
          <GalleryGrid
            images={featuredGallery}
            onSelect={setLightbox}
            eagerCount={0}
          />
        </div>
      </section>

      <ContactCTA />

      {lightbox !== null && (
        <GalleryLightbox
          images={featuredGallery}
          index={lightbox}
          onIndexChange={setLightbox}
          onClose={() => setLightbox(null)}
        />
      )}

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="max-h-[85vh] w-full max-w-lg overflow-y-auto bg-background p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="eyebrow">{active.status}</p>
            <h2 className="mt-2 text-2xl">{active.title}</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              {active.summary}
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.14em] text-primary-dark">
              {active.category.join(" · ")} — {active.location}
            </p>
            <button
              type="button"
              onClick={() => setActive(null)}
              className="mt-6 border border-border px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] hover:border-primary"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
