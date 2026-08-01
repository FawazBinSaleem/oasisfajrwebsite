import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, User, Building2 } from "lucide-react";
import { PageHeader, Section } from "@/components/PageHeader";
import { company } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Oasis Fajr Contracting" },
      {
        name: "description",
        content:
          "Contact Oasis Fajr Contracting & Trading — Operation Manager Saleem Ahmed, +966551908980, siaksa@oasisfajircontracting.com.",
      },
      { property: "og:title", content: "Contact | Oasis Fajr Contracting" },
      { property: "og:description", content: "Get in touch with Oasis Fajr Contracting & Trading." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact | Oasis Fajr Contracting" },
      {
        name: "twitter:description",
        content: "Get in touch with Oasis Fajr Contracting & Trading.",
      },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const details = [
    { icon: Building2, label: "Firm name", value: company.name },
    { icon: User, label: "Operation Manager", value: company.operationManager },
    { icon: Phone, label: "Phone number", value: company.phone, href: `tel:${company.phone}` },
    { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="Contact Us"
        intro="Reach out to discuss a project, a tender or a maintenance contract."
      />
      <Section>
        <div className="grid gap-px bg-border sm:grid-cols-2">
          {details.map((d) => (
            <div key={d.label} className="bg-background p-8">
              <d.icon className="h-5 w-5 text-primary" />
              <p className="mt-4 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {d.label}
              </p>
              {d.href ? (
                <a
                  href={d.href}
                  className="mt-1 block break-words font-display text-xl font-bold hover:text-primary"
                >
                  {d.value}
                </a>
              ) : (
                <p className="mt-1 break-words font-display text-xl font-bold">{d.value}</p>
              )}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
