import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <article className="flex h-full flex-col border border-border bg-card p-6 transition-colors duration-200 hover:border-primary lg:p-7">
      <Icon className="h-7 w-7 text-primary-dark" aria-hidden="true" />
      <h3 className="mt-5 text-xl">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {service.short}
      </p>
      <Link
        to="/services"
        hash={service.slug}
        className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-foreground hover:text-primary-dark"
      >
        Learn More <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}
