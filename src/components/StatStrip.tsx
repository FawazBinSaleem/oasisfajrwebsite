import { stats } from "@/data/company";

export function StatStrip() {
  return (
    <section className="border-y border-border bg-sand" aria-label="Company facts">
      <dl className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <div key={s.label} className="py-8 lg:py-12">
            <dt className="order-2 mt-2 text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
              {s.label}
            </dt>
            <dd className="font-display text-2xl font-extrabold leading-tight lg:text-3xl">
              {s.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
