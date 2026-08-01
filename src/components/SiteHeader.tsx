import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, company } from "@/data/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src="/media/oasisfajr.webp" alt="Oasis Fajr Contracting logo" className="h-9 w-auto" />
          <span className="hidden text-sm font-bold uppercase tracking-[0.18em] sm:block">
            Oasis Fajr
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-3 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${company.phone}`}
            className="hidden bg-primary px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground transition-opacity hover:opacity-90 lg:inline-block"
          >
            {company.phone}
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center border border-border xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background xl:hidden">
          <div className="mx-auto max-w-7xl px-5 py-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block border-b border-border/60 py-3 text-sm font-medium text-muted-foreground last:border-0"
                activeProps={{ className: "text-primary" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
