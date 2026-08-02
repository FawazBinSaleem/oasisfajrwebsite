import { n as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Section, t as PageHero } from "./PageHero-oAOcGd7o.mjs";
import { t as ContactCTA } from "./ContactCTA-kXmgfHzy.mjs";
import { t as ProjectFilter } from "./ProjectFilter-Byo6LGHv.mjs";
import { i as projectCategories, n as allProjects, t as ProjectCard } from "./projects-CADuQ7Yb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-D12LF7Jt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var statuses = ["Ongoing", "Completed"];
function ProjectsPage() {
	const [category, setCategory] = (0, import_react.useState)("All");
	const [status, setStatus] = (0, import_react.useState)("All");
	const [active, setActive] = (0, import_react.useState)(null);
	const filtered = (0, import_react.useMemo)(() => allProjects.filter((p) => (category === "All" || p.category.includes(category)) && (status === "All" || p.status === status)), [category, status]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Projects",
			title: "Work delivered across the Kingdom",
			intro: `${allProjects.length} recorded projects for clients in retail, logistics, banking, hospitality, government and industry.`,
			image: "/media/IMG-20190409-WA0022.jpg",
			imageAlt: "Oasis Fajr project site in Saudi Arabia"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { id: "main-content" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectFilter, {
					label: "Filter by discipline",
					options: projectCategories,
					active: category,
					onChange: setCategory
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectFilter, {
					label: "Filter by status",
					options: statuses,
					active: status,
					onChange: setStatus
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				role: "status",
				className: "mt-6 text-sm text-muted-foreground",
				children: [
					"Showing ",
					filtered.length,
					" of ",
					allProjects.length,
					" projects"
				]
			}),
			filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-10 border border-border p-8 text-center text-muted-foreground",
				children: "No projects match this combination of filters."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: filtered.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
					project: p,
					onSelect: setActive,
					priority: i < 3
				}, p.slug))
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCTA, {
			title: "Looking for references in your sector?",
			body: "We can share detail on comparable projects and the teams that delivered them."
		}),
		active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			role: "dialog",
			"aria-modal": "true",
			"aria-label": active.title,
			className: "fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 p-4",
			onClick: () => setActive(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-h-[85vh] w-full max-w-xl overflow-y-auto bg-background",
				onClick: (e) => e.stopPropagation(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: active.coverImage,
					alt: `${active.title} — Oasis Fajr project`,
					className: "aspect-[16/9] w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6 lg:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "eyebrow",
							children: [
								active.status,
								" · ",
								active.location
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-2xl",
							children: active.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-muted-foreground",
							children: active.summary
						}),
						active.scope.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 flex flex-wrap gap-2",
							children: active.scope.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "border border-border px-3 py-1.5 text-[0.7rem] uppercase tracking-[0.12em] text-muted-foreground",
								children: s
							}, s))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setActive(null),
							className: "mt-8 border border-border px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] hover:border-primary hover:text-primary-dark",
							children: "Close"
						})
					]
				})]
			})
		})
	] });
}
//#endregion
export { ProjectsPage as component };
