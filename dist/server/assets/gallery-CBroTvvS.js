import { n as Section, t as PageHero } from "./PageHero-oAOcGd7o.js";
import { t as ContactCTA } from "./ContactCTA-BijcgTID.js";
import { a as GalleryGrid, i as GalleryLightbox, n as galleryCategories, r as galleryImages } from "./gallery-BWQQtmxV.js";
import { t as ProjectFilter } from "./ProjectFilter-Byo6LGHv.js";
import { useMemo, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/gallery.tsx?tsr-split=component
function GalleryPage() {
	const [category, setCategory] = useState("All");
	const [index, setIndex] = useState(null);
	const images = useMemo(() => category === "All" ? galleryImages : galleryImages.filter((i) => i.categories.includes(category)), [category]);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PageHero, {
			eyebrow: "Gallery",
			title: "Site photography",
			intro: "A visual record of works in progress and completed scopes from our projects across the Kingdom."
		}),
		/* @__PURE__ */ jsx("div", { id: "main-content" }),
		/* @__PURE__ */ jsxs(Section, { children: [
			/* @__PURE__ */ jsx(ProjectFilter, {
				label: "Filter gallery by category",
				options: galleryCategories,
				active: category,
				onChange: setCategory
			}),
			/* @__PURE__ */ jsxs("p", {
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
			/* @__PURE__ */ jsx("div", {
				className: "mt-8",
				children: /* @__PURE__ */ jsx(GalleryGrid, {
					images,
					onSelect: setIndex
				})
			})
		] }),
		/* @__PURE__ */ jsx(ContactCTA, {}),
		index !== null && /* @__PURE__ */ jsx(GalleryLightbox, {
			images,
			index,
			onIndexChange: setIndex,
			onClose: () => setIndex(null)
		})
	] });
}
//#endregion
export { GalleryPage as component };
