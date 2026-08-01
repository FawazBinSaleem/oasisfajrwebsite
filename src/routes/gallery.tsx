import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { PageHeader, Section } from "@/components/PageHeader";
import { galleryImages } from "@/data/site";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Oasis Fajr Contracting" },
      {
        name: "description",
        content:
          "Photographs from Oasis Fajr Contracting sites: concrete, steel, fit out, gypsum, MEP and landscaping works.",
      },
      { property: "og:title", content: "Gallery | Oasis Fajr Contracting" },
      { property: "og:description", content: "Photographs from Oasis Fajr Contracting sites." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/gallery" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Gallery | Oasis Fajr Contracting" },
      {
        name: "twitter:description",
        content: "Photographs from Oasis Fajr Contracting sites.",
      },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

function Gallery() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <PageHeader
        eyebrow="On site"
        title="Photo Gallery"
        intro="A look at our works in progress and completed across the Kingdom."
      />
      <Section>
        <div className="columns-2 gap-3 md:columns-3 lg:columns-4">
          {galleryImages.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(src)}
              className="mb-3 block w-full overflow-hidden bg-muted"
            >
              <img
                src={src}
                alt={`Oasis Fajr project photo ${i + 1}`}
                loading="lazy"
                className="w-full transition-transform duration-500 hover:scale-105"
              />
            </button>
          ))}
        </div>
      </Section>

      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-4"
          onClick={() => setActive(null)}
          role="presentation"
        >
          <button
            type="button"
            aria-label="Close image"
            className="absolute right-5 top-5 text-ink-foreground"
            onClick={() => setActive(null)}
          >
            <X className="h-7 w-7" />
          </button>
          <img src={active} alt="Enlarged project photo" className="max-h-[88vh] max-w-full" />
        </div>
      )}
    </>
  );
}
