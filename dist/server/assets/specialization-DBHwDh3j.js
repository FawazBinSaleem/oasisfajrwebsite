import { _ as specializations } from "./site-Bt6eg8XZ.js";
import { n as Section, t as PageHeader } from "./PageHeader-Ciw9FcZh.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/specialization.tsx?tsr-split=component
function Specialization() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(PageHeader, {
		eyebrow: "Capabilities",
		title: "Specialization",
		intro: "The disciplines we are specialized in and deliver turn key."
	}), /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsx("div", {
		className: "grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3",
		children: specializations.map((s, i) => /* @__PURE__ */ jsxs("div", {
			className: "bg-background p-7",
			children: [/* @__PURE__ */ jsx("span", {
				className: "font-display text-xs font-bold text-primary",
				children: String(i + 1).padStart(2, "0")
			}), /* @__PURE__ */ jsx("p", {
				className: "mt-4 text-base leading-relaxed",
				children: s
			})]
		}, s))
	}) })] });
}
//#endregion
export { Specialization as component };
