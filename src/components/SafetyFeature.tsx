import { ShieldCheck } from "lucide-react";
import { safetyPractices, safetyStatement } from "@/data/company";
import { SectionHeading } from "./SectionHeading";
import { Link } from "@tanstack/react-router";

export function SafetyFeature({ withLink = true }: { withLink?: boolean }) {
  return (
    <section className="bg-ink text-ink-foreground" id="safety">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Safety & Quality"
          title="Safety and quality at every stage"
          intro={safetyStatement}
          onDark
        />
        <ul className="mt-12 grid gap-px bg-ink-foreground/15 sm:grid-cols-2 lg:grid-cols-3">
          {safetyPractices.map((p) => (
            <li key={p.title} className="bg-ink p-6 lg:p-7">
              <ShieldCheck className="h-6 w-6 text-primary" aria-hidden="true" />
              <h3 className="mt-4 text-lg">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-foreground/70">{p.body}</p>
            </li>
          ))}
        </ul>
        {withLink && (
          <Link
            to="/about"
            hash="safety"
            className="mt-10 inline-flex text-xs font-bold uppercase tracking-[0.16em] text-primary hover:text-ink-foreground"
          >
            Read our safety and quality policy
          </Link>
        )}
      </div>
    </section>
  );
}
