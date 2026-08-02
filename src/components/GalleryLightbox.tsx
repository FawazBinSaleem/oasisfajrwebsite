import { useCallback, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "@/data/gallery";

export function GalleryLightbox({
  images,
  index,
  onClose,
  onIndexChange,
}: {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const image = images[index];

  const next = useCallback(
    () => onIndexChange((index + 1) % images.length),
    [index, images.length, onIndexChange],
  );
  const prev = useCallback(
    () => onIndexChange((index - 1 + images.length) % images.length),
    [index, images.length, onIndexChange],
  );

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [next, prev, onClose]);

  if (!image) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Image ${index + 1} of ${images.length}: ${image.caption}`}
      className="fixed inset-0 z-[100] flex flex-col bg-ink/97 p-3 sm:p-6"
    >
      <div className="flex items-center justify-between gap-4 text-ink-foreground">
        <p className="text-xs uppercase tracking-[0.16em]">
          {index + 1} / {images.length}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close image viewer"
          className="inline-flex h-11 w-11 items-center justify-center border border-ink-foreground/30 hover:border-primary hover:text-primary"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <div className="flex min-h-0 flex-1 items-center justify-center gap-2 py-3 sm:gap-4">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous image"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-ink-foreground/30 text-ink-foreground hover:border-primary hover:text-primary"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <img
          src={image.src}
          alt={image.alt}
          className="max-h-full min-h-0 w-auto max-w-full object-contain"
        />
        <button
          type="button"
          onClick={next}
          aria-label="Next image"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-ink-foreground/30 text-ink-foreground hover:border-primary hover:text-primary"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <p className="pb-1 text-center text-sm text-ink-foreground/80">
        {image.caption}
      </p>
    </div>
  );
}
