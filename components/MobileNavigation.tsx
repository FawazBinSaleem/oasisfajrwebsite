import { Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { mainNav } from "@/data/navigation";
import { company } from "@/data/company";

export function MobileNavigation({ open, onClose }: { open: boolean; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    panelRef.current?.querySelector<HTMLElement>("a,button")?.focus();
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      id="mobile-navigation"
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      className="fixed inset-0 z-[90] flex flex-col bg-ink text-ink-foreground lg:hidden"
    >
      <div className="flex h-16 items-center justify-between border-b border-ink-foreground/15 px-5">
        <span className="font-display text-sm font-bold uppercase tracking-[0.18em]">
          {company.short}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="inline-flex h-11 w-11 items-center justify-center border border-ink-foreground/30"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto px-5 py-4">
        {mainNav.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            onClick={onClose}
            activeOptions={{ exact: item.to === "/" }}
            activeProps={{ className: "text-primary" }}
            className="block border-b border-ink-foreground/10 py-4 font-display text-xl font-bold tracking-tight text-ink-foreground"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="border-t border-ink-foreground/15 p-5">
        <Link
          to="/contact"
          onClick={onClose}
          className="flex w-full items-center justify-center bg-primary px-6 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground"
        >
          Request a Consultation
        </Link>
        <a
          href={company.whatsapp} target="_blank" rel="noreferrer"
          className="mt-3 block text-center text-sm text-ink-foreground/70"
        >
          {company.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
