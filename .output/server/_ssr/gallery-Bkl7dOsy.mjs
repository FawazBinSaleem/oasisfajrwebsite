import { n as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Section, t as PageHero } from "./PageHero-oAOcGd7o.mjs";
import { t as ContactCTA } from "./ContactCTA-kXmgfHzy.mjs";
import { a as galleryImages, i as galleryCategories, n as GalleryLightbox, t as GalleryGrid } from "./gallery-BWQQtmxV.mjs";
import { t as ProjectFilter } from "./ProjectFilter-Byo6LGHv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-Bkl7dOsy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function GalleryPage() {
	const [category, setCategory] = (0, import_react.useState)("All");
	const [index, setIndex] = (0, import_react.useState)(null);
	const images = (0, import_react.useMemo)(() => category === "All" ? galleryImages : galleryImages.filter((i) => i.categories.includes(category)), [category]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Gallery",
			title: "Site photography",
			intro: "A visual record of works in progress and completed scopes from our projects across the Kingdom."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { id: "main-content" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectFilter, {
				label: "Filter gallery by category",
				options: galleryCategories,
				active: category,
				onChange: setCategory
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				role: "status",
				className: "mt-6 text-sm text-muted-foreground",
				children: [
					"Showing ",
					images.length,
					" of ",
					galleryImages.length,
					" photographs"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryGrid, {
					images,
					onSelect: setIndex
				})
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCTA, {}),
		index !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryLightbox, {
			images,
			index,
			onIndexChange: setIndex,
			onClose: () => setIndex(null)
		})
	] });
}
//#endregion
export { GalleryPage as component };
