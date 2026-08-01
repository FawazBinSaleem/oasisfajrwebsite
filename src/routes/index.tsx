import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import {
  company,
  introduction,
  specializations,
  completedProjects,
  ongoingProjects,
  sections,
} from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oasis Fajr Contracting & Trading | Building in Saudi Arabia since 2001" },
      {
        name: "description",
        content:
          "Civil contracting, MEP, fit out and landscaping across the Kingdom of Saudi Arabia. Dream it and we build it.",
      },
      { property: "og:title", content: "Oasis Fajr Contracting & Trading" },
      {
        property: "og:description",
        content:
          "Civil contracting, MEP, fit out and landscaping across the Kingdom of Saudi Arabia since 2001.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Oasis Fajr Contracting & Trading" },
      {
        name: "twitter:description",
        content:
          "Civil contracting, MEP, fit out and landscaping across the Kingdom of Saudi Arabia since 2001.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const stats = [
    { value: `${new Date().getFullYear() - company.founded}+`, label: "Years in the Kingdom" },
    { value: `${completedProjects.length}+`, label: "Completed projects" },
    { value: `${ongoingProjects.length}`, label: "Ongoing projects" },
    { value: "6", label: "Areas of specialization" },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <img
          src="/media/IMG-20190409-WA0022.jpg"
          alt="Oasis Fajr construction site in Riyadh"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-36">
          <p className="eyebrow text-primary">Est. {company.founded} · {company.country}</p>
          <h1 className="mt-5 max-w-4xl text-5xl leading-[0.98] sm:text-6xl lg:text-8xl">
            Dream it and
            <br />
            we build it.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-ink-foreground/75 sm:text-lg">
            {company.name} delivers civil construction, mechanical and electrical works, fit out
            and landscaping to the highest standards of quality across Saudi Arabia.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/introduction"
              className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              Our story <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 border border-ink-foreground/30 px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] transition-colors hover:border-primary hover:text-primary"
            >
              View projects
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-sand">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 lg:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.label} className="py-10 pr-6">
              <p className="font-display text-4xl font-extrabold lg:text-5xl">{s.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="eyebrow">Introduction</p>
            <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">
              A trusted name in Saudi contracting
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            {introduction.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <Link
              to="/company"
              className="inline-flex items-center gap-2 pt-2 text-sm font-semibold text-foreground hover:text-primary"
            >
              Company information <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <p className="eyebrow">What we do</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Our sections</h2>
          <div className="mt-10 grid gap-px bg-border sm:grid-cols-2">
            {sections.map((s, i) => (
              <div key={s.title} className="bg-secondary p-7">
                <span className="font-display text-xs font-bold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.intro}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Specialization</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Where we go deepest</h2>
          </div>
          <Link
            to="/specialization"
            className="inline-flex items-center gap-2 text-sm font-semibold hover:text-primary"
          >
            All specializations <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {specializations.map((s) => (
            <li key={s} className="rule-accent text-sm leading-relaxed text-muted-foreground">
              {s}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8 px-5 py-16 lg:px-8">
          <div>
            <h2 className="text-3xl sm:text-4xl">Have a project in mind?</h2>
            <p className="mt-3 text-ink-foreground/70">
              Talk to {company.operationManager}, our Operation Manager.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            Contact us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
