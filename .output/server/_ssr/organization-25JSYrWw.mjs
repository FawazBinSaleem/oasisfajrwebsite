import { u as management } from "./site-DksQkufJ.mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Section, t as PageHeader } from "./PageHeader-Ciw9FcZh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/organization-25JSYrWw.js
var import_jsx_runtime = require_jsx_runtime();
function Organization() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Structure",
		title: "Organizational Chart",
		intro: "How Oasis Fajr is organized, from management down to site execution."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "eyebrow",
			children: "Management team"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 grid gap-px bg-border sm:grid-cols-2",
			children: management.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-background p-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.16em] text-primary",
					children: m.role
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-display text-2xl font-extrabold",
					children: m.name
				})]
			}, m.role))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 border border-border bg-card p-4 sm:p-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
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
