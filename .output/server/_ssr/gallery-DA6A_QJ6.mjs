import { n as __toESM } from "../_runtime.mjs";
import { i as galleryImages } from "./site-DksQkufJ.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Section, t as PageHeader } from "./PageHeader-Ciw9FcZh.mjs";
import { t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-DA6A_QJ6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Gallery() {
	const [active, setActive] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "On site",
			title: "Photo Gallery",
			intro: "A look at our works in progress and completed across the Kingdom."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "columns-2 gap-3 md:columns-3 lg:columns-4",
			children: galleryImages.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setActive(src),
				className: "mb-3 block w-full overflow-hidden bg-muted",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src,
					alt: `Oasis Fajr project photo ${i + 1}`,
					loading: "lazy",
					className: "w-full transition-transform duration-500 hover:scale-105"
				})
			}, src))
		}) }),
		active && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-4",
			onClick: () => setActive(null),
			role: "presentation",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": "Close image",
				className: "absolute right-5 top-5 text-ink-foreground",
				onClick: () => setActive(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-7 w-7" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: active,
				alt: "Enlarged project photo",
				className: "max-h-[88vh] max-w-full"
			})]
		})
	] });
}
//#endregion
export { Gallery as component };
