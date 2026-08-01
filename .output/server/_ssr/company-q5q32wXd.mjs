import { g as sections, n as companyOverview } from "./site-DksQkufJ.mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Section, t as PageHeader } from "./PageHeader-Ciw9FcZh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/company-q5q32wXd.js
var import_jsx_runtime = require_jsx_runtime();
function CompanyInfo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Company as a whole",
		title: "Company Information",
		intro: companyOverview
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		className: "space-y-16",
		children: sections.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "grid gap-8 lg:grid-cols-[0.8fr_1.6fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-xs font-bold text-primary",
				children: String(i + 1).padStart(2, "0")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 text-2xl sm:text-3xl",
				children: s.title
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [s.intro && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-base leading-relaxed text-muted-foreground",
					children: s.intro
				}), s.groups.map((g, gi) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					g.heading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-bold uppercase tracking-[0.14em]",
						children: g.heading
					}),
					g.body && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted-foreground",
						children: g.body
					}),
					g.items && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid gap-2 sm:grid-cols-2",
						children: g.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border-l-2 border-primary/50 pl-3 text-sm text-muted-foreground",
							children: item
						}, item))
					})
				] }, g.heading ?? gi))]
			})]
		}, s.title))
	})] });
}
//#endregion
export { CompanyInfo as component };
