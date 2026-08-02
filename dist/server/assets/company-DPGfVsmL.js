import { g as sections, n as companyOverview } from "./site-Bt6eg8XZ.js";
import { n as Section, t as PageHeader } from "./PageHeader-Ciw9FcZh.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/company.tsx?tsr-split=component
function CompanyInfo() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(PageHeader, {
		eyebrow: "Company as a whole",
		title: "Company Information",
		intro: companyOverview
	}), /* @__PURE__ */ jsx(Section, {
		className: "space-y-16",
		children: sections.map((s, i) => /* @__PURE__ */ jsxs("article", {
			className: "grid gap-8 lg:grid-cols-[0.8fr_1.6fr]",
			children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
				className: "font-display text-xs font-bold text-primary",
				children: String(i + 1).padStart(2, "0")
			}), /* @__PURE__ */ jsx("h2", {
				className: "mt-2 text-2xl sm:text-3xl",
				children: s.title
			})] }), /* @__PURE__ */ jsxs("div", {
				className: "space-y-6",
				children: [s.intro && /* @__PURE__ */ jsx("p", {
					className: "text-base leading-relaxed text-muted-foreground",
					children: s.intro
				}), s.groups.map((g, gi) => /* @__PURE__ */ jsxs("div", { children: [
					g.heading && /* @__PURE__ */ jsx("h3", {
						className: "text-sm font-bold uppercase tracking-[0.14em]",
						children: g.heading
					}),
					g.body && /* @__PURE__ */ jsx("p", {
						className: "mt-2 text-sm leading-relaxed text-muted-foreground",
						children: g.body
					}),
					g.items && /* @__PURE__ */ jsx("ul", {
						className: "grid gap-2 sm:grid-cols-2",
						children: g.items.map((item) => /* @__PURE__ */ jsx("li", {
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
