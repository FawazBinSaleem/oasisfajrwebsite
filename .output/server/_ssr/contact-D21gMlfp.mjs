import { t as company } from "./site-DksQkufJ.mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Section, t as PageHeader } from "./PageHeader-Ciw9FcZh.mjs";
import { a as Mail, n as User, o as Building2, r as Phone } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-D21gMlfp.js
var import_jsx_runtime = require_jsx_runtime();
function Contact() {
	const details = [
		{
			icon: Building2,
			label: "Firm name",
			value: company.name
		},
		{
			icon: User,
			label: "Operation Manager",
			value: company.operationManager
		},
		{
			icon: Phone,
			label: "Phone number",
			value: company.phone,
			href: `tel:${company.phone}`
		},
		{
			icon: Mail,
			label: "Email",
			value: company.email,
			href: `mailto:${company.email}`
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Get in touch",
		title: "Contact Us",
		intro: "Reach out to discuss a project, a tender or a maintenance contract."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-px bg-border sm:grid-cols-2",
		children: details.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-background p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(d.icon, { className: "h-5 w-5 text-primary" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-xs uppercase tracking-[0.16em] text-muted-foreground",
					children: d.label
				}),
				d.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: d.href,
					className: "mt-1 block break-words font-display text-xl font-bold hover:text-primary",
					children: d.value
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 break-words font-display text-xl font-bold",
					children: d.value
				})
			]
		}, d.label))
	}) })] });
}
//#endregion
export { Contact as component };
