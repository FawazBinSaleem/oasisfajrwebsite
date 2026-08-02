import { d as organization, h as stats, m as safetyStatement, p as safetyPractices } from "./company-DmUVCXMZ.js";
import { t as SectionHeading } from "./SectionHeading-Bll12dsV.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ShieldCheck } from "lucide-react";
//#region src/components/StatStrip.tsx
function StatStrip() {
	return /* @__PURE__ */ jsx("section", {
		className: "border-y border-border bg-sand",
		"aria-label": "Company facts",
		children: /* @__PURE__ */ jsx("dl", {
			className: "mx-auto grid max-w-7xl grid-cols-1 gap-x-8 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8",
			children: stats.map((s) => /* @__PURE__ */ jsxs("div", {
				className: "py-8 lg:py-12",
				children: [/* @__PURE__ */ jsx("dt", {
					className: "order-2 mt-2 text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground",
					children: s.label
				}), /* @__PURE__ */ jsx("dd", {
					className: "font-display text-2xl font-extrabold leading-tight lg:text-3xl",
					children: s.value
				})]
			}, s.label))
		})
	});
}
//#endregion
//#region src/components/OrganizationChart.tsx
function OrganizationChart({ compact = false }) {
	return /* @__PURE__ */ jsx("ol", {
		className: "relative space-y-px border-l-2 border-primary/60 pl-5 sm:pl-7",
		children: organization.map((node, i) => /* @__PURE__ */ jsxs("li", {
			className: "relative py-4",
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "absolute -left-[calc(1.25rem+5px)] top-6 h-2 w-2 bg-primary sm:-left-[calc(1.75rem+5px)]",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "font-display text-[0.7rem] font-bold tracking-[0.18em] text-muted-foreground",
					children: String(i + 1).padStart(2, "0")
				}),
				/* @__PURE__ */ jsx("h3", {
					className: "mt-1 text-lg",
					children: node.level
				}),
				!compact && /* @__PURE__ */ jsx("p", {
					className: "mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground",
					children: node.body
				})
			]
		}, node.level))
	});
}
//#endregion
//#region src/components/SafetyFeature.tsx
function SafetyFeature({ withLink = true }) {
	return /* @__PURE__ */ jsx("section", {
		className: "bg-ink text-ink-foreground",
		id: "safety",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24",
			children: [
				/* @__PURE__ */ jsx(SectionHeading, {
					eyebrow: "Safety & Quality",
					title: "Safety and quality at every stage",
					intro: safetyStatement,
					onDark: true
				}),
				/* @__PURE__ */ jsx("ul", {
					className: "mt-12 grid gap-px bg-ink-foreground/15 sm:grid-cols-2 lg:grid-cols-3",
					children: safetyPractices.map((p) => /* @__PURE__ */ jsxs("li", {
						className: "bg-ink p-6 lg:p-7",
						children: [
							/* @__PURE__ */ jsx(ShieldCheck, {
								className: "h-6 w-6 text-primary",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "mt-4 text-lg",
								children: p.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2 text-sm leading-relaxed text-ink-foreground/70",
								children: p.body
							})
						]
					}, p.title))
				}),
				withLink && /* @__PURE__ */ jsx(Link, {
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
export { OrganizationChart as n, StatStrip as r, SafetyFeature as t };
