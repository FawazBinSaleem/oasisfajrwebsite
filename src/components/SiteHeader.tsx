import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { mainNav } from "@/data/navigation";
import { company } from "@/data/company";
import { MobileNavigation } from "./MobileNavigation";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[120] focus:bg-ink focus:px-4 focus:py-2 focus:text-ink-foreground"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-200 lg:px-8 ${
            scrolled ? "h-14 lg:h-16" : "h-16 lg:h-20"
          }`}
        >
          <Link
            to="/"
            className="flex items-center gap-3"
            aria-label={`${company.name} — home`}
          >
            <img
              src={company.logo}
              alt=""
              aria-hidden="true"
              className={`w-auto transition-all duration-200 ${scrolled ? "h-8" : "h-9 lg:h-11"}`}
            />
            <span className="flex flex-col leading-none">
              <span className="font-display text-sm font-extrabold uppercase tracking-[0.14em]">
                Oasis Fajr
              </span>
              <span className="mt-1 hidden text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground sm:block">
                Contracting
              </span>
            </span>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {mainNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-foreground border-primary" }}
                inactiveProps={{
                  className: "text-muted-foreground border-transparent",
                }}
                className="border-b-2 px-3 py-2 text-[0.8rem] font-semibold uppercase tracking-[0.1em] transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden bg-primary px-5 py-3 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-primary-dark hover:text-background lg:inline-block"
            >
              Request a Consultation
            </Link>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center border border-border lg:hidden"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileNavigation open={open} onClose={() => setOpen(false)} />
    </>
  );
}
