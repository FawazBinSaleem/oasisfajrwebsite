import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero, Section } from "@/components/PageHero";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectFilter } from "@/components/ProjectFilter";
import { ContactCTA } from "@/components/ContactCTA";
import { allProjects, projectCategories } from "@/data/projects";
import type { Project, ProjectCategory } from "@/data/projects";
import { company } from "@/data/company";

const title = "Projects | Oasis Fajr Contracting";
const description =
  "Completed and ongoing construction, MEP, fit-out and maintenance projects delivered by Oasis Fajr across the Kingdom of Saudi Arabia.";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${company.domain}/projects` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: `${company.domain}/projects` }],
  }),
  component: ProjectsPage,
});

const statuses = ["Ongoing", "Completed"] as const;

function ProjectsPage() {
  const [category, setCategory] = useState<ProjectCategory | "All">("All");
  const [status, setStatus] = useState<(typeof statuses)[number] | "All">("All");
  const [active, setActive] = useState<Project | null>(null);

  const filtered = useMemo(
    () =>
      allProjects.filter(
        (p) =>
          (category === "All" || p.category.includes(category)) &&
          (status === "All" || p.status === status),
      ),
    [category, status],
  );

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Work delivered across the Kingdom"
        intro={`${allProjects.length} recorded projects for clients in retail, logistics, banking, hospitality, government and industry.`}
        image="/media/IMG-20190409-WA0022.jpg"
        imageAlt="Oasis Fajr project site in Saudi Arabia"
      />
      <div id="main-content" />

      <Section>
        <div className="space-y-4">
          <ProjectFilter
            label="Filter by discipline"
            options={projectCategories}
            active={category}
            onChange={setCategory}
          />
          <ProjectFilter
            label="Filter by status"
            options={statuses}
            active={status}
            onChange={setStatus}
          />
        </div>

        <p role="status" className="mt-6 text-sm text-muted-foreground">
          Showing {filtered.length} of {allProjects.length} projects
        </p>

        {filtered.length === 0 ? (
          <p className="mt-10 border border-border p-8 text-center text-muted-foreground">
            No projects match this combination of filters.
          </p>
        ) : (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <ProjectCard key={p.slug} project={p} onSelect={setActive} priority={i < 3} />
            ))}
          </div>
        )}
      </Section>

      <ContactCTA
        title="Looking for references in your sector?"
        body="We can share detail on comparable projects and the teams that delivered them."
      />

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="max-h-[85vh] w-full max-w-xl overflow-y-auto bg-background"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.coverImage}
              alt={`${active.title} — Oasis Fajr project`}
              className="aspect-[16/9] w-full object-cover"
            />
            <div className="p-6 lg:p-8">
              <p className="eyebrow">
                {active.status} · {active.location}
              </p>
              <h2 className="mt-2 text-2xl">{active.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{active.summary}</p>
              {active.scope.length > 0 && (
                <ul className="mt-6 flex flex-wrap gap-2">
                  {active.scope.map((s) => (
                    <li
                      key={s}
                      className="border border-border px-3 py-1.5 text-[0.7rem] uppercase tracking-[0.12em] text-muted-foreground"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              )}
              <button
                type="button"
                onClick={() => setActive(null)}
                className="mt-8 border border-border px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] hover:border-primary hover:text-primary-dark"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
