import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, Phone } from "lucide-react";

import { PageHero, Section } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { ContactDetails } from "@/components/ContactDetails";
import { SectionHeading } from "@/components/SectionHeading";
import { company } from "@/data/company";

const title = "Contact Oasis Fajr Contracting | Saudi Arabia";

const description =
  "Contact Oasis Fajr Contracting to discuss civil, MEP, fit-out, maintenance or landscaping requirements in the Kingdom of Saudi Arabia.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${company.domain}/contact` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: `${company.domain}/contact` }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's discuss your project"
        intro="Share your scope, drawings or requirements and our operations team will respond with next steps."
      />

      <div id="main-content" />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Get in touch" title="" />

            {/* Quick Contact Actions */}
            <div className="mb-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              <a
                href={`tel:${company.phone}`}
                className="inline-flex items-center justify-center gap-2 border border-border px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] transition-colors hover:border-primary hover:text-primary-dark"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call
              </a>

              <a
                href={company.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#1ebe5d]"
                aria-label={`Chat with ${company.short} on WhatsApp`}
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp
              </a>

              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center justify-center gap-2 border border-border px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] transition-colors hover:border-primary hover:text-primary-dark"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email
              </a>
            </div>

            <ContactDetails />
          </div>

          <ContactForm />
        </div>
      </Section>
    </>
  );
}
