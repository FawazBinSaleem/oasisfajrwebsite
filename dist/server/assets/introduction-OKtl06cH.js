import { l as introduction, t as company } from "./site-Bt6eg8XZ.js";
import { n as Section, t as PageHeader } from "./PageHeader-Ciw9FcZh.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/introduction.tsx?tsr-split=component
function Introduction() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(PageHeader, {
		eyebrow: "Our story",
		title: "Introduction",
		intro: `Founded in ${company.founded}, originally known as ${company.formerNames.join(" and ")}.`
	}), /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs("div", {
		className: "grid gap-12 lg:grid-cols-[1.2fr_1fr]",
		children: [/* @__PURE__ */ jsx("div", {
			className: "space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg",
			children: introduction.map((p) => /* @__PURE__ */ jsx("p", { children: p }, p.slice(0, 24)))
		}), /* @__PURE__ */ jsx("img", {
			src: "/media/thumbnail_20190221_092708.jpg",
			alt: "Oasis Fajr team on site",
			className: "h-72 w-full object-cover lg:h-full",
			loading: "lazy"
		})]
	}) })] });
}
//#endregion
export { Introduction as component };
