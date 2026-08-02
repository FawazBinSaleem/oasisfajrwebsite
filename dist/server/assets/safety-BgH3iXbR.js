import { a as hseEnvironment, c as hseResponsibility, h as qualityPoints, m as qualityIntro, o as hseIntro, s as hseReportable } from "./site-Bt6eg8XZ.js";
import { n as Section, t as PageHeader } from "./PageHeader-Ciw9FcZh.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/safety.tsx?tsr-split=component
function Safety() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PageHeader, {
			eyebrow: "We care",
			title: "Health, Safety & Environment Policy",
			intro: "Our people and the environment are the two assets we protect above all else."
		}),
		/* @__PURE__ */ jsxs(Section, {
			className: "space-y-16",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "grid gap-8 lg:grid-cols-[0.7fr_1.6fr]",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-2xl sm:text-3xl",
						children: "Health, safety and environment"
					}), /* @__PURE__ */ jsx("div", {
						className: "space-y-5 text-base leading-relaxed text-muted-foreground",
						children: hseIntro.map((p) => /* @__PURE__ */ jsx("p", { children: p }, p.slice(0, 24)))
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "grid gap-8 lg:grid-cols-[0.7fr_1.6fr]",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-2xl sm:text-3xl",
						children: "Accountability"
					}), /* @__PURE__ */ jsxs("div", {
						className: "space-y-5",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "text-base leading-relaxed text-muted-foreground",
								children: "All personnel are accountable for their performance and responsible for reporting accidents, incidents and near misses involving environmental matters like:"
							}),
							/* @__PURE__ */ jsx("ul", {
								className: "grid gap-2 sm:grid-cols-2",
								children: hseReportable.map((r) => /* @__PURE__ */ jsx("li", {
									className: "border-l-2 border-primary/50 pl-3 text-sm",
									children: r
								}, r))
							}),
							hseResponsibility.map((p) => /* @__PURE__ */ jsx("p", {
								className: "text-base leading-relaxed text-muted-foreground",
								children: p
							}, p.slice(0, 24)))
						]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "grid gap-8 lg:grid-cols-[0.7fr_1.6fr]",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-2xl sm:text-3xl",
						children: "Environmental planning"
					}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: "text-base leading-relaxed text-muted-foreground",
						children: "We consider the environmental impact during the planning stage of all our projects and plan actions to reduce and avoid matters likely to cause environmental damage by:"
					}), /* @__PURE__ */ jsx("ul", {
						className: "mt-5 space-y-3",
						children: hseEnvironment.map((e) => /* @__PURE__ */ jsx("li", {
							className: "rule-accent text-sm leading-relaxed text-muted-foreground",
							children: e
						}, e.slice(0, 24)))
					})] })]
				})
			]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-secondary",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "eyebrow",
						children: "Quality policy"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-3 max-w-3xl text-3xl sm:text-4xl",
						children: "Consistent quality, every phase"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground",
						children: qualityIntro
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-10 grid gap-px bg-border md:grid-cols-2",
						children: qualityPoints.map((q, i) => /* @__PURE__ */ jsxs("div", {
							className: "bg-secondary p-7",
							children: [/* @__PURE__ */ jsx("span", {
								className: "font-display text-xs font-bold text-primary",
								children: String(i + 1).padStart(2, "0")
							}), /* @__PURE__ */ jsx("p", {
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
