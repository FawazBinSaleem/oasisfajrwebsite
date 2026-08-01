import { l as introduction, t as company } from "./site-DksQkufJ.mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Section, t as PageHeader } from "./PageHeader-Ciw9FcZh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/introduction-_KSgoUUa.js
var import_jsx_runtime = require_jsx_runtime();
function Introduction() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Our story",
		title: "Introduction",
		intro: `Founded in ${company.founded}, originally known as ${company.formerNames.join(" and ")}.`
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-12 lg:grid-cols-[1.2fr_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg",
			children: introduction.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, p.slice(0, 24)))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/media/thumbnail_20190221_092708.jpg",
			alt: "Oasis Fajr team on site",
			className: "h-72 w-full object-cover lg:h-full",
			loading: "lazy"
		})]
	}) })] });
}
//#endregion
export { Introduction as component };
