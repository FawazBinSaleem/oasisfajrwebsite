export type GalleryCategory =
  | "Civil Works"
  | "Mechanical"
  | "Electrical"
  | "Fit-Out"
  | "Landscaping"
  | "Work in Progress"
  | "Completed Work";

export type GalleryImage = {
  src: string;
  alt?: string;
  caption: string;
  categories: GalleryCategory[];
};

export const galleryCategories: GalleryCategory[] = [
  "Civil Works",
  "Mechanical",
  "Electrical",
  "Fit-Out",
  "Landscaping",
  "Work in Progress",
  "Completed Work",
];

/** Captions describe the visible work only — no client or contract details. */
export const galleryImages: GalleryImage[] = [
  { src: "/media/IMG-20190409-WA0022.jpg", caption: "Site works in progress", categories: ["Civil Works", "Work in Progress"] },
  { src: "/media/IMG-20180912-WA0043.jpg", caption: "Concrete structural works", categories: ["Civil Works", "Work in Progress"] },
  { src: "/media/IMG-20180912-WA0046.jpg", caption: "Electrical installation on site", categories: ["Electrical", "Work in Progress"] },
  { src: "/media/IMG-20180912-WA0054.jpg", caption: "Building services rough-in", categories: ["Mechanical", "Work in Progress"] },
  { src: "/media/IMG-20180912-WA0057.jpg", caption: "Interior works under way", categories: ["Fit-Out", "Work in Progress"] },
  { src: "/media/IMG-20190108-WA0007.jpg", caption: "Completed interior fit-out", categories: ["Fit-Out", "Completed Work"] },
  { src: "/media/IMG-20190108-WA0006.jpg", caption: "Ceiling and partition finishes", categories: ["Fit-Out", "Completed Work"] },
  { src: "/media/IMG-20190108-WA0013.jpg", caption: "Finished interior space", categories: ["Fit-Out", "Completed Work"] },
  { src: "/media/IMG-20180808-WA0034.jpg", caption: "Mechanical pipework installation", categories: ["Mechanical", "Work in Progress"] },
  { src: "/media/IMG-20180808-WA0032.jpg", caption: "Mechanical services installation", categories: ["Mechanical", "Work in Progress"] },
  { src: "/media/IMG-20180808-WA0039.jpg", caption: "Plant and equipment works", categories: ["Mechanical", "Completed Work"] },
  { src: "/media/IMG-20180909-WA0043.jpg", caption: "Structural works on site", categories: ["Civil Works", "Work in Progress"] },
  { src: "/media/IMG-20180712-WA0022.jpg", caption: "Building envelope works", categories: ["Civil Works", "Work in Progress"] },
  { src: "/media/IMG-20180628-WA0006.jpg", caption: "Site preparation works", categories: ["Civil Works", "Work in Progress"] },
  { src: "/media/IMG-20180623-WA0031.jpg", caption: "Maintenance and repair works", categories: ["Civil Works", "Completed Work"] },
  { src: "/media/IMG-20180531-WA0004.jpg", caption: "Concrete and masonry works", categories: ["Civil Works", "Work in Progress"] },
  { src: "/media/IMG-20180531-WA0007.jpg", caption: "Structural frame progress", categories: ["Civil Works", "Work in Progress"] },
  { src: "/media/IMG-20181123-WA0006.jpg", caption: "Finishing works on site", categories: ["Fit-Out", "Work in Progress"] },
  { src: "/media/IMG-20190107-WA0008.jpg", caption: "Completed finishing works", categories: ["Fit-Out", "Completed Work"] },
  { src: "/media/IMG-20190118-WA0020.jpg", caption: "External works in progress", categories: ["Landscaping", "Work in Progress"] },
  { src: "/media/IMG-20190118-WA0025 - Copy.jpg", caption: "Exterior hardscape works", categories: ["Landscaping", "Work in Progress"] },
  { src: "/media/IMG-20190120-WA0004 - Copy.jpg", caption: "Site external improvements", categories: ["Landscaping", "Work in Progress"] },
  { src: "/media/IMG-20190121-WA0002 - Copy.jpg", caption: "Paving and curb works", categories: ["Landscaping", "Completed Work"] },
  { src: "/media/IMG-20190122-WA0006 - Copy.jpg", caption: "External site works", categories: ["Landscaping", "Work in Progress"] },
  { src: "/media/IMG-20190314-WA0019 - Copy.jpg", caption: "Concrete works on site", categories: ["Civil Works", "Work in Progress"] },
  { src: "/media/IMG-20190315-WA0011 - Copy.jpg", caption: "Reinforcement and formwork", categories: ["Civil Works", "Work in Progress"] },
  { src: "/media/IMG-20190317-WA0000 - Copy.jpg", caption: "Structural progress on site", categories: ["Civil Works", "Work in Progress"] },
  { src: "/media/IMG-20190324-WA0022 - Copy.jpg", caption: "Site execution works", categories: ["Civil Works", "Work in Progress"] },
  { src: "/media/IMG-20190327-WA0010 - Copy.jpg", caption: "Ongoing construction works", categories: ["Civil Works", "Work in Progress"] },
  { src: "/media/IMG-20190401-WA0000 - Copy.jpg", caption: "Site works and finishes", categories: ["Fit-Out", "Work in Progress"] },
  { src: "/media/IMG-20190404-WA0011 - Copy.jpg", caption: "Landscaping and exterior works", categories: ["Landscaping", "Completed Work"] },
  { src: "/media/IMG-20190404-WA0015 - Copy.jpg", caption: "Exterior improvement works", categories: ["Landscaping", "Completed Work"] },
  { src: "/media/IMG-20190411-WA0002 - Copy.jpg", caption: "Completed external works", categories: ["Landscaping", "Completed Work"] },
  { src: "/media/20190423_071022.jpg", caption: "Project site overview", categories: ["Civil Works", "Work in Progress"] },
  { src: "/media/20190423_070356.jpg", caption: "Site progress view", categories: ["Civil Works", "Work in Progress"] },
  { src: "/media/IMG-20171211-WA0000.jpg", caption: "Interior finishing works", categories: ["Fit-Out", "Completed Work"] },
  { src: "/media/IMG-20171211-WA0013.jpg", caption: "Ceiling installation works", categories: ["Fit-Out", "Work in Progress"] },
  { src: "/media/IMG-20171211-WA0017.jpg", caption: "Partition and drywall works", categories: ["Fit-Out", "Work in Progress"] },
  { src: "/media/IMG-20171211-WA0019.jpg", caption: "Interior fit-out progress", categories: ["Fit-Out", "Work in Progress"] },
  { src: "/media/IMG-20171211-WA0021.jpg", caption: "Fit-out works on site", categories: ["Fit-Out", "Work in Progress"] },
  { src: "/media/IMG-20171211-WA0022.jpg", caption: "Finished interior detail", categories: ["Fit-Out", "Completed Work"] },
  { src: "/media/IMG-20171211-WA0024.jpg", caption: "Completed ceiling works", categories: ["Fit-Out", "Completed Work"] },
  { src: "/media/IMG-20171211-WA0025.jpg", caption: "Interior finishes handed over", categories: ["Fit-Out", "Completed Work"] },
  { src: "/media/IMG-20171211-WA0026.jpg", caption: "Lighting and ceiling detail", categories: ["Electrical", "Completed Work"] },
  { src: "/media/IMG-20171211-WA0027.jpg", caption: "Completed commercial interior", categories: ["Fit-Out", "Completed Work"] },
  { src: "/media/IMG-20171211-WA0028.jpg", caption: "Retail interior finishes", categories: ["Fit-Out", "Completed Work"] },
  { src: "/media/IMG-20171211-WA0029.jpg", caption: "Interior lighting installation", categories: ["Electrical", "Completed Work"] },
  { src: "/media/IMG-20171211-WA0030.jpg", caption: "Completed fit-out area", categories: ["Fit-Out", "Completed Work"] },
  { src: "/media/IMG-20171211-WA0031.jpg", caption: "Finishing detail on handover", categories: ["Fit-Out", "Completed Work"] },
  { src: "/media/IMG-20171211-WA0035.jpg", caption: "Completed interior works", categories: ["Fit-Out", "Completed Work"] },
  { src: "/media/IMG-20171211-WA0036.webp", caption: "Interior fit-out handover", categories: ["Fit-Out", "Completed Work"] },
  { src: "/media/thumbnail_20190228_214551.webp", caption: "Site works documentation", categories: ["Civil Works", "Work in Progress"] },
  { src: "/media/thumbnail_20190221_092708.jpg", caption: "Project site record", categories: ["Civil Works", "Work in Progress"] },
].map((i) => ({ ...i, alt: `${i.caption} — Oasis Fajr Contracting project in Saudi Arabia` })) as GalleryImage[];

export const featuredGallery = galleryImages.slice(0, 6);
