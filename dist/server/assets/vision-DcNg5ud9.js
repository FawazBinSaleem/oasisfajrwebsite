import { d as mission, t as company, v as vision } from "./site-Bt6eg8XZ.js";
import { n as Section, t as PageHeader } from "./PageHeader-Ciw9FcZh.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/vision.tsx?tsr-split=component
function Vision() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(PageHeader, {
		eyebrow: "Vision & Mission",
		title: company.tagline,
		intro: vision
	}), /* @__PURE__ */ jsxs(Section, { children: [/* @__PURE__ */ jsx("p", {
		className: "eyebrow",
		children: "Our mission"
	}), /* @__PURE__ */ jsx("div", {
		className: "mt-8 grid gap-px bg-border md:grid-cols-3",
		children: mission.map((m, i) => /* @__PURE__ */ jsxs("div", {
			className: "bg-background p-7",
			children: [/* @__PURE__ */ jsx("span", {
				className: "font-display text-xs font-bold text-primary",
				children: String(i + 1).padStart(2, "0")
			}), /* @__PURE__ */ jsx("p", {
				className: "mt-4 text-base leading-relaxed text-muted-foreground",
				children: m
			})]
		}, m.slice(0, 20)))
	})] })] });
}
//#endregion
export { Vision as component };
