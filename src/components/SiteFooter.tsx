import { Link } from "@tanstack/react-router";
import { mainNav } from "@/data/navigation";
import { services } from "@/data/services";
import { company } from "@/data/company";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-4 lg:px-8 lg:py-16">
        <div className="lg:col-span-1">
          <img
            src={company.logo}
            alt={`${company.name} logo`}
            className="h-12 w-auto"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-foreground/70">
            {company.footerDescription}
          </p>
        </div>

        <div>
          <h2 className="eyebrow text-ink-foreground/50">Services</h2>
          <ul className="mt-5 space-y-2.5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services"
                  hash={s.slug}
                  className="text-sm text-ink-foreground/75 hover:text-primary"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow text-ink-foreground/50">Contact</h2>
          <ul className="mt-5 space-y-2.5 text-sm text-ink-foreground/75">
            <li>{company.operationManager} — Operation Manager</li>
            <li>
              {" "}
              WhatsApp:
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                {company.phoneDisplay}
              </a>
            </li>
            <li className="break-all">
              <a
                href={`mailto:${company.email}`}
                className="hover:text-primary"
              >
                {company.email}
              </a>
            </li>
            <li>{company.country}</li>
          </ul>
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
