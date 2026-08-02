import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHero-oAOcGd7o.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ eyebrow, title, intro, image, imageAlt, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-ink text-ink-foreground",
		children: [image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: image,
			alt: imageAlt ?? "",
			className: "absolute inset-0 h-full w-full object-cover opacity-25",
			loading: "eager",
			decoding: "async"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8 lg:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-primary",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 max-w-4xl text-[2.25rem] leading-[1.05] sm:text-5xl lg:text-6xl",
					children: title
				}),
				intro && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-base leading-relaxed text-ink-foreground/75 sm:text-lg",
					children: intro
				}),
				children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children
				})
			]
		})]
	});
}
function Section({ children, className = "", id }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: `mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20 ${className}`,
		children
	});
}
//#endregion
export { Section as n, PageHero as t };
