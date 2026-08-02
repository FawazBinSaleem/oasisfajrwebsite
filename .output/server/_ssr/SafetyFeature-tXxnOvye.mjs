import { f as safetyPractices, m as stats, p as safetyStatement, u as organization } from "./company-CM46kbbq.mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as SectionHeading } from "./SectionHeading-Bll12dsV.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as ShieldCheck } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SafetyFeature-tXxnOvye.js
var import_jsx_runtime = require_jsx_runtime();
function StatStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-border bg-sand",
		"aria-label": "Company facts",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
			className: "mx-auto grid max-w-7xl grid-cols-1 gap-x-8 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8",
			children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "py-8 lg:py-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "order-2 mt-2 text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground",
					children: s.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "font-display text-2xl font-extrabold leading-tight lg:text-3xl",
					children: s.value
				})]
			}, s.label))
		})
	});
}
function OrganizationChart({ compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "relative space-y-px border-l-2 border-primary/60 pl-5 sm:pl-7",
		children: organization.map((node, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "relative py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute -left-[calc(1.25rem+5px)] top-6 h-2 w-2 bg-primary sm:-left-[calc(1.75rem+5px)]",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-[0.7rem] font-bold tracking-[0.18em] text-muted-foreground",
					children: String(i + 1).padStart(2, "0")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-1 text-lg",
					children: node.level
				}),
				!compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground",
					children: node.body
				})
			]
		}, node.level))
	});
}
function SafetyFeature({ withLink = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-ink text-ink-foreground",
		id: "safety",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Safety & Quality",
					title: "Safety and quality at every stage",
					intro: safetyStatement,
					onDark: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-12 grid gap-px bg-ink-foreground/15 sm:grid-cols-2 lg:grid-cols-3",
					children: safetyPractices.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "bg-ink p-6 lg:p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
								className: "h-6 w-6 text-primary",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-lg",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-ink-foreground/70",
								children: p.body
							})
						]
					}, p.title))
				}),
				withLink && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/about",
					hash: "safety",
					className: "mt-10 inline-flex text-xs font-bold uppercase tracking-[0.16em] text-primary hover:text-ink-foreground",
					children: "Read our safety and quality policy"
				})
			]
		})
	});
}
//#endregion
export { SafetyFeature as n, StatStrip as r, OrganizationChart as t };
