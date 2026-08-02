import { p as ongoingProjects, r as completedProjects } from "./site-Bt6eg8XZ.js";
import { n as Section, t as PageHeader } from "./PageHeader-Ciw9FcZh.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/projects.tsx?tsr-split=component
function ProjectList({ items }) {
	return /* @__PURE__ */ jsx("ul", {
		className: "mt-8 divide-y divide-border border-y border-border",
		children: items.map((p, i) => /* @__PURE__ */ jsxs("li", {
			className: "grid gap-1 py-5 sm:grid-cols-[auto_1fr_2fr] sm:items-baseline sm:gap-6",
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "font-display text-xs font-bold text-muted-foreground/60",
					children: String(i + 1).padStart(2, "0")
				}),
				/* @__PURE__ */ jsx("span", {
					className: "font-semibold",
					children: p.client
				}),
				/* @__PURE__ */ jsx("span", {
					className: "text-sm leading-relaxed text-muted-foreground",
					children: p.scope
				})
			]
		}, `${p.client}-${i}`))
	});
}
function Projects() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(PageHeader, {
		eyebrow: "Track record",
		title: "Projects",
		intro: `${completedProjects.length} completed projects and ${ongoingProjects.length} currently on site across the Kingdom.`
	}), /* @__PURE__ */ jsxs(Section, { children: [
		/* @__PURE__ */ jsx("h2", {
			className: "text-2xl sm:text-3xl",
			children: "Ongoing projects"
		}),
		/* @__PURE__ */ jsx(ProjectList, { items: ongoingProjects }),
		/* @__PURE__ */ jsx("h2", {
			className: "mt-20 text-2xl sm:text-3xl",
			children: "Completed projects"
		}),
		/* @__PURE__ */ jsx(ProjectList, { items: completedProjects })
	] })] });
}
//#endregion
export { Projects as component };
