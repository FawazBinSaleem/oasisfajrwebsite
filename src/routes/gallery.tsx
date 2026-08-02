import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero, Section } from "@/components/PageHero";
import { GalleryGrid } from "@/components/GalleryGrid";
import { GalleryLightbox } from "@/components/GalleryLightbox";
import { ProjectFilter } from "@/components/ProjectFilter";
import { ContactCTA } from "@/components/ContactCTA";
import { galleryImages, galleryCategories } from "@/data/gallery";
import type { GalleryCategory } from "@/data/gallery";
import { company } from "@/data/company";

const title = "Project Gallery | Oasis Fajr Contracting";
const description =
  "Photographs from Oasis Fajr construction, mechanical, electrical, fit-out and landscaping sites across Saudi Arabia.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${company.domain}/gallery` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: `${company.domain}/gallery` }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [category, setCategory] = useState<GalleryCategory | "All">("All");
  const [index, setIndex] = useState<number | null>(null);

  const images = useMemo(
    () =>
      category === "All"
        ? galleryImages
        : galleryImages.filter((i) => i.categories.includes(category)),
    [category],
  );

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Site photography"
        intro="A visual record of works in progress and completed scopes from our projects across the Kingdom."
      />
      <div id="main-content" />

      <Section>
        <ProjectFilter
          label="Filter gallery by category"
          options={galleryCategories}
          active={category}
          onChange={setCategory}
        />
        <p role="status" className="mt-6 text-sm text-muted-foreground">
          Showing {images.length} of {galleryImages.length} photographs
        </p>
        <div className="mt-8">
          <GalleryGrid images={images} onSelect={setIndex} />
        </div>
      </Section>

      <ContactCTA />

      {index !== null && (
        <GalleryLightbox
          images={images}
          index={index}
          onIndexChange={setIndex}
          onClose={() => setIndex(null)}
        />
      )}
    </>
  );
}
