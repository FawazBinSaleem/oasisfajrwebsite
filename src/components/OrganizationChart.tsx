import { organization } from "@/data/company";

export function OrganizationChart({ compact = false }: { compact?: boolean }) {
  return (
    <ol className="relative space-y-px border-l-2 border-primary/60 pl-5 sm:pl-7">
      {organization.map((node, i) => (
        <li key={node.level} className="relative py-4">
          <span
            className="absolute -left-[calc(1.25rem+5px)] top-6 h-2 w-2 bg-primary sm:-left-[calc(1.75rem+5px)]"
            aria-hidden="true"
          />
          <p className="font-display text-[0.7rem] font-bold tracking-[0.18em] text-muted-foreground">
            {String(i + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-1 text-lg">{node.level}</h3>
          {!compact && (
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {node.body}
            </p>
          )}
        </li>
      ))}
    </ol>
  );
}
