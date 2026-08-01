import { p as ongoingProjects, r as completedProjects } from "./site-DksQkufJ.mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Section, t as PageHeader } from "./PageHeader-Ciw9FcZh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-CLs1ljlF.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectList({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-8 divide-y divide-border border-y border-border",
		children: items.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "grid gap-1 py-5 sm:grid-cols-[auto_1fr_2fr] sm:items-baseline sm:gap-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-xs font-bold text-muted-foreground/60",
					children: String(i + 1).padStart(2, "0")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold",
					children: p.client
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm leading-relaxed text-muted-foreground",
					children: p.scope
				})
			]
		}, `${p.client}-${i}`))
	});
}
function Projects() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Track record",
		title: "Projects",
		intro: `${completedProjects.length} completed projects and ${ongoingProjects.length} currently on site across the Kingdom.`
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-2xl sm:text-3xl",
			children: "Ongoing projects"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectList, { items: ongoingProjects }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-20 text-2xl sm:text-3xl",
			children: "Completed projects"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectList, { items: completedProjects })
	] })] });
}
//#endregion
export { Projects as component };
