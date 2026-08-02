import { u as management } from "./site-Bt6eg8XZ.js";
import { n as Section, t as PageHeader } from "./PageHeader-Ciw9FcZh.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/organization.tsx?tsr-split=component
function Organization() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(PageHeader, {
		eyebrow: "Structure",
		title: "Organizational Chart",
		intro: "How Oasis Fajr is organized, from management down to site execution."
	}), /* @__PURE__ */ jsxs(Section, { children: [
		/* @__PURE__ */ jsx("p", {
			className: "eyebrow",
			children: "Management team"
		}),
		/* @__PURE__ */ jsx("div", {
			className: "mt-6 grid gap-px bg-border sm:grid-cols-2",
			children: management.map((m) => /* @__PURE__ */ jsxs("div", {
				className: "bg-background p-7",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-xs uppercase tracking-[0.16em] text-primary",
					children: m.role
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-2 font-display text-2xl font-extrabold",
					children: m.name
				})]
			}, m.role))
		}),
		/* @__PURE__ */ jsx("div", {
			className: "mt-12 border border-border bg-card p-4 sm:p-8",
			children: /* @__PURE__ */ jsx("img", {
				src: "/media/orgtrans.png",
				alt: "Oasis Fajr Contracting organizational chart",
				className: "mx-auto w-full max-w-4xl",
				loading: "lazy"
			})
		})
	] })] });
}
//#endregion
export { Organization as component };
