import { n as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { m as ChevronLeft, n as X, p as ChevronRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-BWQQtmxV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function GalleryGrid({ images, onSelect, eagerCount = 3 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3",
		children: images.map((image, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => onSelect(i),
			className: "group block w-full overflow-hidden border border-border bg-sand text-left",
			"aria-label": `Open image: ${image.caption}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block aspect-[4/3] overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: image.src,
					alt: image.alt,
					loading: i < eagerCount ? "eager" : "lazy",
					decoding: "async",
					className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block bg-card px-4 py-3 text-xs uppercase tracking-[0.12em] text-muted-foreground",
				children: image.caption
			})]
		}) }, image.src))
	});
}
function GalleryLightbox({ images, index, onClose, onIndexChange }) {
	const closeRef = (0, import_react.useRef)(null);
	const image = images[index];
	const next = (0, import_react.useCallback)(() => onIndexChange((index + 1) % images.length), [
		index,
		images.length,
		onIndexChange
	]);
	const prev = (0, import_react.useCallback)(() => onIndexChange((index - 1 + images.length) % images.length), [
		index,
		images.length,
		onIndexChange
	]);
	(0, import_react.useEffect)(() => {
		closeRef.current?.focus();
		const onKey = (e) => {
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
	}, [
		next,
		prev,
		onClose
	]);
	if (!image) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "dialog",
		"aria-modal": "true",
		"aria-label": `Image ${index + 1} of ${images.length}: ${image.caption}`,
		className: "fixed inset-0 z-[100] flex flex-col bg-ink/97 p-3 sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-4 text-ink-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs uppercase tracking-[0.16em]",
					children: [
						index + 1,
						" / ",
						images.length
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					ref: closeRef,
					type: "button",
					onClick: onClose,
					"aria-label": "Close image viewer",
					className: "inline-flex h-11 w-11 items-center justify-center border border-ink-foreground/30 hover:border-primary hover:text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
						className: "h-5 w-5",
						"aria-hidden": "true"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-0 flex-1 items-center justify-center gap-2 py-3 sm:gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: prev,
						"aria-label": "Previous image",
						className: "inline-flex h-11 w-11 shrink-0 items-center justify-center border border-ink-foreground/30 text-ink-foreground hover:border-primary hover:text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
							className: "h-5 w-5",
							"aria-hidden": "true"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: image.src,
						alt: image.alt,
						className: "max-h-full min-h-0 w-auto max-w-full object-contain"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: next,
						"aria-label": "Next image",
						className: "inline-flex h-11 w-11 shrink-0 items-center justify-center border border-ink-foreground/30 text-ink-foreground hover:border-primary hover:text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
							className: "h-5 w-5",
							"aria-hidden": "true"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "pb-1 text-center text-sm text-ink-foreground/80",
				children: image.caption
			})
		]
	});
}
var galleryCategories = [
	"Civil Works",
	"Mechanical",
	"Electrical",
	"Fit-Out",
	"Landscaping",
	"Work in Progress",
	"Completed Work"
];
/** Captions describe the visible work only — no client or contract details. */
var galleryImages = [
	{
		src: "/media/IMG-20190409-WA0022.jpg",
		caption: "Site works in progress",
		categories: ["Civil Works", "Work in Progress"]
	},
	{
		src: "/media/IMG-20180912-WA0043.jpg",
		caption: "Concrete structural works",
		categories: ["Civil Works", "Work in Progress"]
	},
	{
		src: "/media/IMG-20180912-WA0046.jpg",
		caption: "Electrical installation on site",
		categories: ["Electrical", "Work in Progress"]
	},
	{
		src: "/media/IMG-20180912-WA0054.jpg",
		caption: "Building services rough-in",
		categories: ["Mechanical", "Work in Progress"]
	},
	{
		src: "/media/IMG-20180912-WA0057.jpg",
		caption: "Interior works under way",
		categories: ["Fit-Out", "Work in Progress"]
	},
	{
		src: "/media/IMG-20190108-WA0007.jpg",
		caption: "Completed interior fit-out",
		categories: ["Fit-Out", "Completed Work"]
	},
	{
		src: "/media/IMG-20190108-WA0006.jpg",
		caption: "Ceiling and partition finishes",
		categories: ["Fit-Out", "Completed Work"]
	},
	{
		src: "/media/IMG-20190108-WA0013.jpg",
		caption: "Finished interior space",
		categories: ["Fit-Out", "Completed Work"]
	},
	{
		src: "/media/IMG-20180808-WA0034.jpg",
		caption: "Mechanical pipework installation",
		categories: ["Mechanical", "Work in Progress"]
	},
	{
		src: "/media/IMG-20180808-WA0032.jpg",
		caption: "Mechanical services installation",
		categories: ["Mechanical", "Work in Progress"]
	},
	{
		src: "/media/IMG-20180808-WA0039.jpg",
		caption: "Plant and equipment works",
		categories: ["Mechanical", "Completed Work"]
	},
	{
		src: "/media/IMG-20180909-WA0043.jpg",
		caption: "Structural works on site",
		categories: ["Civil Works", "Work in Progress"]
	},
	{
		src: "/media/IMG-20180712-WA0022.jpg",
		caption: "Building envelope works",
		categories: ["Civil Works", "Work in Progress"]
	},
	{
		src: "/media/IMG-20180628-WA0006.jpg",
		caption: "Site preparation works",
		categories: ["Civil Works", "Work in Progress"]
	},
	{
		src: "/media/IMG-20180623-WA0031.jpg",
		caption: "Maintenance and repair works",
		categories: ["Civil Works", "Completed Work"]
	},
	{
		src: "/media/IMG-20180531-WA0004.jpg",
		caption: "Concrete and masonry works",
		categories: ["Civil Works", "Work in Progress"]
	},
	{
		src: "/media/IMG-20180531-WA0007.jpg",
		caption: "Structural frame progress",
		categories: ["Civil Works", "Work in Progress"]
	},
	{
		src: "/media/IMG-20181123-WA0006.jpg",
		caption: "Finishing works on site",
		categories: ["Fit-Out", "Work in Progress"]
	},
	{
		src: "/media/IMG-20190107-WA0008.jpg",
		caption: "Completed finishing works",
		categories: ["Fit-Out", "Completed Work"]
	},
	{
		src: "/media/IMG-20190118-WA0020.jpg",
		caption: "External works in progress",
		categories: ["Landscaping", "Work in Progress"]
	},
	{
		src: "/media/IMG-20190118-WA0025 - Copy.jpg",
		caption: "Exterior hardscape works",
		categories: ["Landscaping", "Work in Progress"]
	},
	{
		src: "/media/IMG-20190120-WA0004 - Copy.jpg",
		caption: "Site external improvements",
		categories: ["Landscaping", "Work in Progress"]
	},
	{
		src: "/media/IMG-20190121-WA0002 - Copy.jpg",
		caption: "Paving and curb works",
		categories: ["Landscaping", "Completed Work"]
	},
	{
		src: "/media/IMG-20190122-WA0006 - Copy.jpg",
		caption: "External site works",
		categories: ["Landscaping", "Work in Progress"]
	},
	{
		src: "/media/IMG-20190314-WA0019 - Copy.jpg",
		caption: "Concrete works on site",
		categories: ["Civil Works", "Work in Progress"]
	},
	{
		src: "/media/IMG-20190315-WA0011 - Copy.jpg",
		caption: "Reinforcement and formwork",
		categories: ["Civil Works", "Work in Progress"]
	},
	{
		src: "/media/IMG-20190317-WA0000 - Copy.jpg",
		caption: "Structural progress on site",
		categories: ["Civil Works", "Work in Progress"]
	},
	{
		src: "/media/IMG-20190324-WA0022 - Copy.jpg",
		caption: "Site execution works",
		categories: ["Civil Works", "Work in Progress"]
	},
	{
		src: "/media/IMG-20190327-WA0010 - Copy.jpg",
		caption: "Ongoing construction works",
		categories: ["Civil Works", "Work in Progress"]
	},
	{
		src: "/media/IMG-20190401-WA0000 - Copy.jpg",
		caption: "Site works and finishes",
		categories: ["Fit-Out", "Work in Progress"]
	},
	{
		src: "/media/IMG-20190404-WA0011 - Copy.jpg",
		caption: "Landscaping and exterior works",
		categories: ["Landscaping", "Completed Work"]
	},
	{
		src: "/media/IMG-20190404-WA0015 - Copy.jpg",
		caption: "Exterior improvement works",
		categories: ["Landscaping", "Completed Work"]
	},
	{
		src: "/media/IMG-20190411-WA0002 - Copy.jpg",
		caption: "Completed external works",
		categories: ["Landscaping", "Completed Work"]
	},
	{
		src: "/media/20190423_071022.jpg",
		caption: "Project site overview",
		categories: ["Civil Works", "Work in Progress"]
	},
	{
		src: "/media/20190423_070356.jpg",
		caption: "Site progress view",
		categories: ["Civil Works", "Work in Progress"]
	},
	{
		src: "/media/IMG-20171211-WA0000.jpg",
		caption: "Interior finishing works",
		categories: ["Fit-Out", "Completed Work"]
	},
	{
		src: "/media/IMG-20171211-WA0013.jpg",
		caption: "Ceiling installation works",
		categories: ["Fit-Out", "Work in Progress"]
	},
	{
		src: "/media/IMG-20171211-WA0017.jpg",
		caption: "Partition and drywall works",
		categories: ["Fit-Out", "Work in Progress"]
	},
	{
		src: "/media/IMG-20171211-WA0019.jpg",
		caption: "Interior fit-out progress",
		categories: ["Fit-Out", "Work in Progress"]
	},
	{
		src: "/media/IMG-20171211-WA0021.jpg",
		caption: "Fit-out works on site",
		categories: ["Fit-Out", "Work in Progress"]
	},
	{
		src: "/media/IMG-20171211-WA0022.jpg",
		caption: "Finished interior detail",
		categories: ["Fit-Out", "Completed Work"]
	},
	{
		src: "/media/IMG-20171211-WA0024.jpg",
		caption: "Completed ceiling works",
		categories: ["Fit-Out", "Completed Work"]
	},
	{
		src: "/media/IMG-20171211-WA0025.jpg",
		caption: "Interior finishes handed over",
		categories: ["Fit-Out", "Completed Work"]
	},
	{
		src: "/media/IMG-20171211-WA0026.jpg",
		caption: "Lighting and ceiling detail",
		categories: ["Electrical", "Completed Work"]
	},
	{
		src: "/media/IMG-20171211-WA0027.jpg",
		caption: "Completed commercial interior",
		categories: ["Fit-Out", "Completed Work"]
	},
	{
		src: "/media/IMG-20171211-WA0028.jpg",
		caption: "Retail interior finishes",
		categories: ["Fit-Out", "Completed Work"]
	},
	{
		src: "/media/IMG-20171211-WA0029.jpg",
		caption: "Interior lighting installation",
		categories: ["Electrical", "Completed Work"]
	},
	{
		src: "/media/IMG-20171211-WA0030.jpg",
		caption: "Completed fit-out area",
		categories: ["Fit-Out", "Completed Work"]
	},
	{
		src: "/media/IMG-20171211-WA0031.jpg",
		caption: "Finishing detail on handover",
		categories: ["Fit-Out", "Completed Work"]
	},
	{
		src: "/media/IMG-20171211-WA0035.jpg",
		caption: "Completed interior works",
		categories: ["Fit-Out", "Completed Work"]
	},
	{
		src: "/media/IMG-20171211-WA0036.webp",
		caption: "Interior fit-out handover",
		categories: ["Fit-Out", "Completed Work"]
	},
	{
		src: "/media/thumbnail_20190228_214551.webp",
		caption: "Site works documentation",
		categories: ["Civil Works", "Work in Progress"]
	},
	{
		src: "/media/thumbnail_20190221_092708.jpg",
		caption: "Project site record",
		categories: ["Civil Works", "Work in Progress"]
	}
].map((i) => ({
	...i,
	alt: `${i.caption} — Oasis Fajr Contracting project in Saudi Arabia`
}));
var featuredGallery = galleryImages.slice(0, 6);
//#endregion
export { galleryImages as a, galleryCategories as i, GalleryLightbox as n, featuredGallery as r, GalleryGrid as t };
