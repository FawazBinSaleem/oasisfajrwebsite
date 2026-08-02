import type { GalleryImage } from "@/data/gallery";

export function GalleryGrid({
  images,
  onSelect,
  eagerCount = 3,
}: {
  images: GalleryImage[];
  onSelect: (index: number) => void;
  eagerCount?: number;
}) {
  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((image, i) => (
        <li key={image.src}>
          <button
            type="button"
            onClick={() => onSelect(i)}
            className="group block w-full overflow-hidden border border-border bg-sand text-left"
            aria-label={`Open image: ${image.caption}`}
          >
            <span className="block aspect-[4/3] overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                loading={i < eagerCount ? "eager" : "lazy"}
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </span>
            <span className="block bg-card px-4 py-3 text-xs uppercase tracking-[0.12em] text-muted-foreground">
              {image.caption}
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}
