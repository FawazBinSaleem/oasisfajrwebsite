export function ProjectFilter<T extends string>({
  options,
  active,
  onChange,
  label,
}: {
  options: readonly T[];
  active: T | "All";
  onChange: (value: T | "All") => void;
  label: string;
}) {
  const all: (T | "All")[] = ["All", ...options];
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2">
      {all.map((option) => {
        const isActive = option === active;
        return (
          <button
            key={option}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(option)}
            className={`border px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.14em] transition-colors ${
              isActive
                ? "border-ink bg-ink text-ink-foreground"
                : "border-border bg-transparent text-muted-foreground hover:border-primary hover:text-primary-dark"
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
