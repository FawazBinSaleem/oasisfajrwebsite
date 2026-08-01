import { Link } from "@tanstack/react-router";
import { nav, company } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 lg:px-8">
        <div>
          <img
            src="/media/oasisfajr.webp"
            alt="Oasis Fajr Contracting logo"
            className="h-12 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm text-ink-foreground/70">
            {company.name} — building across the {company.country} since {company.founded}.
          </p>
        </div>

        <div>
          <p className="eyebrow text-ink-foreground/50">Navigate</p>
          <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm text-ink-foreground/75 transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow text-ink-foreground/50">Get in touch</p>
          <div className="mt-4 space-y-2 text-sm text-ink-foreground/75">
            <p>{company.operationManager} — Operation Manager</p>
            <p>
              <a href={`tel:${company.phone}`} className="hover:text-primary">
                {company.phone}
              </a>
            </p>
            <p className="break-all">
              <a href={`mailto:${company.email}`} className="hover:text-primary">
                {company.email}
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10">
        <div className="mx-auto max-w-7xl px-5 py-5 text-xs text-ink-foreground/50 lg:px-8">
          © {new Date().getFullYear()} {company.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
