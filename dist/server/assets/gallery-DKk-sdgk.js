import { i as galleryImages } from "./site-Bt6eg8XZ.js";
import { n as Section, t as PageHeader } from "./PageHeader-Ciw9FcZh.js";
import { useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { X } from "lucide-react";
//#region src/routes/gallery.tsx?tsr-split=component
function Gallery() {
	const [active, setActive] = useState(null);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PageHeader, {
			eyebrow: "On site",
			title: "Photo Gallery",
			intro: "A look at our works in progress and completed across the Kingdom."
		}),
		/* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsx("div", {
			className: "columns-2 gap-3 md:columns-3 lg:columns-4",
			children: galleryImages.map((src, i) => /* @__PURE__ */ jsx("button", {
				type: "button",
				onClick: () => setActive(src),
				className: "mb-3 block w-full overflow-hidden bg-muted",
				children: /* @__PURE__ */ jsx("img", {
					src,
					alt: `Oasis Fajr project photo ${i + 1}`,
					loading: "lazy",
					className: "w-full transition-transform duration-500 hover:scale-105"
				})
			}, src))
		}) }),
		active && /* @__PURE__ */ jsxs("div", {
			className: "fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-4",
			onClick: () => setActive(null),
			role: "presentation",
			children: [/* @__PURE__ */ jsx("button", {
				type: "button",
				"aria-label": "Close image",
				className: "absolute right-5 top-5 text-ink-foreground",
				onClick: () => setActive(null),
				children: /* @__PURE__ */ jsx(X, { className: "h-7 w-7" })
			}), /* @__PURE__ */ jsx("img", {
				src: active,
				alt: "Enlarged project photo",
				className: "max-h-[88vh] max-w-full"
			})]
		})
	] });
}
//#endregion
export { Gallery as component };
