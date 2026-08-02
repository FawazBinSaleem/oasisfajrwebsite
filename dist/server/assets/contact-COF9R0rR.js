import { t as company } from "./site-Bt6eg8XZ.js";
import { n as Section, t as PageHeader } from "./PageHeader-Ciw9FcZh.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Building2, Mail, Phone, User } from "lucide-react";
//#region src/routes/contact.tsx?tsr-split=component
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
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(PageHeader, {
		eyebrow: "Get in touch",
		title: "Contact Us",
		intro: "Reach out to discuss a project, a tender or a maintenance contract."
	}), /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsx("div", {
		className: "grid gap-px bg-border sm:grid-cols-2",
		children: details.map((d) => /* @__PURE__ */ jsxs("div", {
			className: "bg-background p-8",
			children: [
				/* @__PURE__ */ jsx(d.icon, { className: "h-5 w-5 text-primary" }),
				/* @__PURE__ */ jsx("p", {
					className: "mt-4 text-xs uppercase tracking-[0.16em] text-muted-foreground",
					children: d.label
				}),
				d.href ? /* @__PURE__ */ jsx("a", {
					href: d.href,
					className: "mt-1 block break-words font-display text-xl font-bold hover:text-primary",
					children: d.value
				}) : /* @__PURE__ */ jsx("p", {
					className: "mt-1 break-words font-display text-xl font-bold",
					children: d.value
				})
			]
		}, d.label))
	}) })] });
}
//#endregion
export { Contact as component };
