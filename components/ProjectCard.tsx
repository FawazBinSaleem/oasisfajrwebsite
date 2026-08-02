import type { Project } from "@/data/projects";

export function ProjectCard({
  project,
  onSelect,
  priority = false,
}: {
  project: Project;
  onSelect: (project: Project) => void;
  priority?: boolean;
}) {
  return (
    <article className="group flex h-full flex-col border border-border bg-card">
      <div className="relative aspect-[4/3] overflow-hidden bg-sand">
        <img
          src={project.coverImage}
          alt={`${project.title} — Oasis Fajr project in ${project.location}`}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute left-0 top-0 bg-ink px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-ink-foreground">
          {project.status}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 lg:p-6">
        <p className="text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
          {project.location}
        </p>
        <h3 className="mt-2 text-lg leading-snug">{project.title}</h3>
        <p className="mt-3 text-xs uppercase tracking-[0.12em] text-primary-dark">
          {project.category.join(" · ")}
        </p>
        <button
          type="button"
          onClick={() => onSelect(project)}
          className="mt-5 self-start border-b border-foreground/30 pb-0.5 text-xs font-bold uppercase tracking-[0.14em] hover:border-primary hover:text-primary-dark"
        >
          View Project
        </button>
      </div>
    </article>
  );
}
