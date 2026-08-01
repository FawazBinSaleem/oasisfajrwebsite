import { a as hseEnvironment, c as hseResponsibility, h as qualityPoints, m as qualityIntro, o as hseIntro, s as hseReportable } from "./site-DksQkufJ.mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Section, t as PageHeader } from "./PageHeader-Ciw9FcZh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/safety-D96SjaaA.js
var import_jsx_runtime = require_jsx_runtime();
function Safety() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "We care",
			title: "Health, Safety & Environment Policy",
			intro: "Our people and the environment are the two assets we protect above all else."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "space-y-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 lg:grid-cols-[0.7fr_1.6fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl sm:text-3xl",
						children: "Health, safety and environment"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-5 text-base leading-relaxed text-muted-foreground",
						children: hseIntro.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, p.slice(0, 24)))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 lg:grid-cols-[0.7fr_1.6fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl sm:text-3xl",
						children: "Accountability"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-base leading-relaxed text-muted-foreground",
								children: "All personnel are accountable for their performance and responsible for reporting accidents, incidents and near misses involving environmental matters like:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "grid gap-2 sm:grid-cols-2",
								children: hseReportable.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "border-l-2 border-primary/50 pl-3 text-sm",
									children: r
								}, r))
							}),
							hseResponsibility.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-base leading-relaxed text-muted-foreground",
								children: p
							}, p.slice(0, 24)))
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 lg:grid-cols-[0.7fr_1.6fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl sm:text-3xl",
						children: "Environmental planning"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base leading-relaxed text-muted-foreground",
						children: "We consider the environmental impact during the planning stage of all our projects and plan actions to reduce and avoid matters likely to cause environmental damage by:"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-3",
						children: hseEnvironment.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rule-accent text-sm leading-relaxed text-muted-foreground",
							children: e
						}, e.slice(0, 24)))
					})] })]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-secondary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Quality policy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 max-w-3xl text-3xl sm:text-4xl",
						children: "Consistent quality, every phase"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground",
						children: qualityIntro
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-px bg-border md:grid-cols-2",
						children: qualityPoints.map((q, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-secondary p-7",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xs font-bold text-primary",
								children: String(i + 1).padStart(2, "0")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: q
							})]
						}, q.slice(0, 20)))
					})
				]
			})
		})
	] });
}
//#endregion
export { Safety as component };
