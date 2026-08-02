import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SectionHeading-Bll12dsV.js
var import_jsx_runtime = require_jsx_runtime();
function SectionHeading({ eyebrow, title, intro, onDark = false, align = "left", as: As = "h2" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-3xl",
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `eyebrow ${onDark ? "text-primary" : "text-muted-foreground"}`,
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(As, {
				className: "mt-3 text-3xl leading-[1.1] sm:text-4xl lg:text-[2.75rem]",
				children: title
			}),
			intro && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `mt-5 text-base leading-relaxed ${onDark ? "text-ink-foreground/75" : "text-muted-foreground"}`,
				children: intro
			})
		]
	});
}
//#endregion
export { SectionHeading as t };
