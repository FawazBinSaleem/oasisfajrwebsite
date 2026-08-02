import { s as industries } from "./company-CM46kbbq.mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Section, t as PageHero } from "./PageHero-oAOcGd7o.mjs";
import { t as SectionHeading } from "./SectionHeading-Bll12dsV.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as ContactCTA } from "./ContactCTA-kXmgfHzy.mjs";
import { t as services } from "./services-CgRdRzUv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-C0kfCqRs.js
var import_jsx_runtime = require_jsx_runtime();
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Services",
			title: "Multidisciplinary contracting under one team",
			intro: "From structure to finishes and building systems, our disciplines are coordinated by a single project team — reducing interfaces, delays and rework.",
			image: "/media/IMG-20180808-WA0034.jpg",
			imageAlt: "Oasis Fajr mechanical installation works"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { id: "main-content" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			"aria-label": "Services",
			className: "flex flex-wrap gap-2",
			children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/services",
				hash: s.slug,
				className: "border border-border px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-muted-foreground hover:border-primary hover:text-primary-dark",
				children: s.title
			}, s.slug))
		}) }),
		services.map((service, index) => {
			const Icon = service.icon;
			const reversed = index % 2 === 1;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: service.slug,
				className: `scroll-mt-24 border-t border-border ${reversed ? "bg-sand" : ""}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: reversed ? "lg:order-2" : "",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "h-9 w-9 text-primary-dark",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
								eyebrow: `0${index + 1}`,
								title: service.title,
								intro: service.overview
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-8 grid gap-px border border-border bg-border sm:grid-cols-2",
								children: service.scope.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: `px-4 py-3 text-sm ${reversed ? "bg-sand" : "bg-background"}`,
									children: item
								}, item))
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: service.image,
						alt: service.imageAlt,
						loading: "lazy",
						decoding: "async",
						className: `aspect-[4/3] w-full border border-border object-cover ${reversed ? "lg:order-1" : ""}`
					})]
				})
			}, service.slug);
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Industries",
					title: "Sectors we serve",
					intro: "Our teams are structured to work across the following sectors in the Kingdom."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3",
					children: industries.map((industry) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "bg-background px-6 py-7 font-display text-lg font-bold",
						children: industry
					}, industry))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCTA, {
			title: "Need a scope priced?",
			body: "Send us your drawings, BOQ or scope of works and we will come back with a proposal."
		})
	] });
}
//#endregion
export { ServicesPage as component };
