import { t as company } from "./company-DmUVCXMZ.js";
import { n as Section, t as PageHero } from "./PageHero-oAOcGd7o.js";
import { t as SectionHeading } from "./SectionHeading-Bll12dsV.js";
import { t as PrimaryButton } from "./Buttons-D-TltuVc.js";
import { useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Mail, MapPin, MessageCircle, User } from "lucide-react";
//#region src/components/ContactForm.tsx
var projectTypes = [
	"Civil Construction",
	"Mechanical",
	"Electrical",
	"Fit-Out",
	"Maintenance",
	"Landscaping",
	"General Inquiry"
];
var field = "mt-2 w-full border border-border bg-card px-3 py-2.5 text-base text-foreground placeholder:text-muted-foreground/70 focus:border-primary-dark";
var labelClass = "block text-[0.7rem] font-bold uppercase tracking-[0.16em] text-muted-foreground";
function ContactForm() {
	const [sent, setSent] = useState(false);
	function handleSubmit(event) {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const get = (k) => String(data.get(k) ?? "").trim();
		const subject = `Project inquiry — ${get("projectType") || "General Inquiry"}`;
		const body = [
			`Name: ${get("fullName")}`,
			`Company: ${get("companyName")}`,
			`Email: ${get("email")}`,
			`Phone: ${get("phone")}`,
			`Project type: ${get("projectType")}`,
			"",
			get("message")
		].join("\n");
		window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
		setSent(true);
	}
	return /* @__PURE__ */ jsxs("form", {
		onSubmit: handleSubmit,
		className: "border border-border bg-card p-6 lg:p-8",
		children: [
			/* @__PURE__ */ jsx("h2", {
				className: "text-2xl",
				children: "Send us your requirements"
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: "Complete the details below and your email application will open with the message ready to send. Nothing is stored on this website."
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-8 grid gap-5 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
						className: labelClass,
						htmlFor: "fullName",
						children: "Full Name"
					}), /* @__PURE__ */ jsx("input", {
						id: "fullName",
						name: "fullName",
						required: true,
						autoComplete: "name",
						className: field
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
						className: labelClass,
						htmlFor: "companyName",
						children: "Company"
					}), /* @__PURE__ */ jsx("input", {
						id: "companyName",
						name: "companyName",
						autoComplete: "organization",
						className: field
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
						className: labelClass,
						htmlFor: "email",
						children: "Work Email"
					}), /* @__PURE__ */ jsx("input", {
						id: "email",
						name: "email",
						type: "email",
						required: true,
						autoComplete: "email",
						className: field
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
						className: labelClass,
						htmlFor: "phone",
						children: "Phone"
					}), /* @__PURE__ */ jsx("input", {
						id: "phone",
						name: "phone",
						type: "tel",
						autoComplete: "tel",
						className: field
					})] }),
					/* @__PURE__ */ jsxs("div", {
						className: "sm:col-span-2",
						children: [/* @__PURE__ */ jsx("label", {
							className: labelClass,
							htmlFor: "projectType",
							children: "Project Type"
						}), /* @__PURE__ */ jsx("select", {
							id: "projectType",
							name: "projectType",
							defaultValue: "General Inquiry",
							className: field,
							children: projectTypes.map((t) => /* @__PURE__ */ jsx("option", {
								value: t,
								children: t
							}, t))
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "sm:col-span-2",
						children: [/* @__PURE__ */ jsx("label", {
							className: labelClass,
							htmlFor: "message",
							children: "Message"
						}), /* @__PURE__ */ jsx("textarea", {
							id: "message",
							name: "message",
							rows: 5,
							required: true,
							className: field
						})]
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-8 flex flex-wrap items-center gap-4",
				children: [/* @__PURE__ */ jsx(PrimaryButton, {
					type: "submit",
					children: "Open Email Draft"
				}), sent && /* @__PURE__ */ jsx("p", {
					role: "status",
					className: "text-sm text-muted-foreground",
					children: "Your email application should now be open with your message."
				})]
			})
		]
	});
}
//#endregion
//#region src/components/ContactDetails.tsx
function ContactDetails() {
	const items = [
		{
			icon: User,
			label: "Operation Manager",
			value: company.operationManager,
			href: void 0
		},
		{
			icon: MessageCircle,
			label: "WhatsApp",
			value: company.phoneDisplay,
			href: company.whatsapp
		},
		{
			icon: Mail,
			label: "Email",
			value: company.email,
			href: `mailto:${company.email}`
		},
		{
			icon: MapPin,
			label: "Location",
			value: company.country,
			href: void 0
		}
	];
	return /* @__PURE__ */ jsx("ul", {
		className: "mt-10 space-y-6",
		children: items.map((item) => {
			const Icon = item.icon;
			return /* @__PURE__ */ jsxs("li", {
				className: "flex gap-4",
				children: [/* @__PURE__ */ jsx(Icon, {
					className: "mt-1 h-5 w-5 shrink-0 text-primary-dark",
					"aria-hidden": "true"
				}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
					className: "text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground",
					children: item.label
				}), item.href ? /* @__PURE__ */ jsx("a", {
					href: item.href,
					className: "break-all text-base hover:text-primary-dark",
					children: item.value
				}) : /* @__PURE__ */ jsx("p", {
					className: "text-base",
					children: item.value
				})] })]
			}, item.label);
		})
	});
}
//#endregion
//#region src/routes/contact.tsx?tsr-split=component
function ContactPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PageHero, {
			eyebrow: "Contact",
			title: "Let's discuss your project",
			intro: "Share your scope, drawings or requirements and our operations team will respond with next steps."
		}),
		/* @__PURE__ */ jsx("div", { id: "main-content" }),
		/* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs("div", {
			className: "grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16",
			children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(SectionHeading, {
				eyebrow: "Get in touch",
				title: "Contact details"
			}), /* @__PURE__ */ jsx(ContactDetails, {})] }), /* @__PURE__ */ jsx(ContactForm, {})]
		}) })
	] });
}
//#endregion
export { ContactPage as component };
