import { Clock, ShieldCheck } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { maintenanceSupport } from "@/data/company";

export function MaintenanceSupport() {
  const m = maintenanceSupport;
  return (
    <section
      id="maintenance-support"
      className="scroll-mt-24 border-t border-border bg-background"
    >
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
        <SectionHeading eyebrow={m.eyebrow} title={m.title} intro={m.intro} />

        <ul className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2">
          {m.services.map((s) => (
            <li key={s.title} className="bg-background p-6">
              <p className="font-display text-lg font-bold">{s.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.detail}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6 text-primary-dark" aria-hidden="true" />
              <h3 className="text-xl">Maintenance response commitment</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {m.responseIntro}
            </p>
            <dl className="mt-6 grid gap-px border border-border bg-border">
              {m.response.map((r) => (
                <div
                  key={r.type}
                  className="grid gap-1 bg-background px-5 py-4 sm:grid-cols-2"
                >
                  <dt className="text-sm">{r.type}</dt>
                  <dd className="text-sm font-bold sm:text-right">{r.time}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <ShieldCheck
                className="h-6 w-6 text-primary-dark"
                aria-hidden="true"
              />
              <h3 className="text-xl">Service coverage</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {m.coverage}
            </p>
            <p className="mt-6 border-l-2 border-primary bg-sand px-5 py-4 font-display text-base font-bold">
              {m.commitment}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
