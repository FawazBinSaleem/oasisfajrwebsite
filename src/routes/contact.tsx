import { createFileRoute } from "@tanstack/react-router";
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
            <SectionHeading eyebrow="Get in touch" title="Contact details" />
            <ContactDetails />
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
