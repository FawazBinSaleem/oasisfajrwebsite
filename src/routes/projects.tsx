import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/PageHeader";
import { completedProjects, ongoingProjects } from "@/data/site";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | Oasis Fajr Contracting" },
      {
        name: "description",
        content:
          "Completed and ongoing projects for clients including ARAMCO contractors, Riyad Bank, Coca-Cola, NOON, Marriott and more.",
      },
      { property: "og:title", content: "Projects | Oasis Fajr Contracting" },
      {
        property: "og:description",
        content: "Completed and ongoing Oasis Fajr projects across the Kingdom.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/projects" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Projects | Oasis Fajr Contracting" },
      {
        name: "twitter:description",
        content: "Completed and ongoing Oasis Fajr projects across the Kingdom.",
      },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

function ProjectList({
  items,
}: {
  items: { client: string; scope: string }[];
}) {
  return (
    <ul className="mt-8 divide-y divide-border border-y border-border">
      {items.map((p, i) => (
        <li
          key={`${p.client}-${i}`}
          className="grid gap-1 py-5 sm:grid-cols-[auto_1fr_2fr] sm:items-baseline sm:gap-6"
        >
          <span className="font-display text-xs font-bold text-muted-foreground/60">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="font-semibold">{p.client}</span>
          <span className="text-sm leading-relaxed text-muted-foreground">{p.scope}</span>
        </li>
      ))}
    </ul>
  );
}

function Projects() {
  return (
    <>
      <PageHeader
        eyebrow="Track record"
        title="Projects"
        intro={`${completedProjects.length} completed projects and ${ongoingProjects.length} currently on site across the Kingdom.`}
      />
      <Section>
        <h2 className="text-2xl sm:text-3xl">Ongoing projects</h2>
        <ProjectList items={ongoingProjects} />

        <h2 className="mt-20 text-2xl sm:text-3xl">Completed projects</h2>
        <ProjectList items={completedProjects} />
      </Section>
    </>
  );
}
