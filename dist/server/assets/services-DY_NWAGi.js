import { c as maintenanceSupport, s as industries } from "./company-DmUVCXMZ.js";
import { t as services } from "./services-CgRdRzUv.js";
import { n as Section, t as PageHero } from "./PageHero-oAOcGd7o.js";
import { t as SectionHeading } from "./SectionHeading-Bll12dsV.js";
import { t as ContactCTA } from "./ContactCTA-BijcgTID.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Clock, ShieldCheck } from "lucide-react";
//#region src/components/MaintenceSupport.tsx
function MaintenanceSupport() {
	const m = maintenanceSupport;
	return /* @__PURE__ */ jsx("section", {
		id: "maintenance-support",
		className: "scroll-mt-24 border-t border-border bg-background",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20",
			children: [
				/* @__PURE__ */ jsx(SectionHeading, {
					eyebrow: m.eyebrow,
					title: m.title,
					intro: m.intro
				}),
				/* @__PURE__ */ jsx("ul", {
					className: "mt-10 grid gap-px border border-border bg-border sm:grid-cols-2",
					children: m.services.map((s) => /* @__PURE__ */ jsxs("li", {
						className: "bg-background p-6",
						children: [/* @__PURE__ */ jsx("p", {
							className: "font-display text-lg font-bold",
							children: s.title
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: s.detail
						})]
					}, s.title))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14",
					children: [/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ jsx(Clock, {
								className: "h-6 w-6 text-primary-dark",
								"aria-hidden": "true"
							}), /* @__PURE__ */ jsx("h3", {
								className: "text-xl",
								children: "Maintenance response commitment"
							})]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: m.responseIntro
						}),
						/* @__PURE__ */ jsx("dl", {
							className: "mt-6 grid gap-px border border-border bg-border",
							children: m.response.map((r) => /* @__PURE__ */ jsxs("div", {
								className: "grid gap-1 bg-background px-5 py-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ jsx("dt", {
									className: "text-sm",
									children: r.type
								}), /* @__PURE__ */ jsx("dd", {
									className: "text-sm font-bold sm:text-right",
									children: r.time
								})]
							}, r.type))
						})
					] }), /* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ jsx(ShieldCheck, {
								className: "h-6 w-6 text-primary-dark",
								"aria-hidden": "true"
							}), /* @__PURE__ */ jsx("h3", {
								className: "text-xl",
								children: "Service coverage"
							})]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: m.coverage
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-6 border-l-2 border-primary bg-sand px-5 py-4 font-display text-base font-bold",
							children: m.commitment
						})
					] })]
				})
			]
		})
	});
}
//#endregion
//#region src/routes/services.tsx?tsr-split=component
function ServicesPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PageHero, {
			eyebrow: "Services",
			title: "Multidisciplinary contracting under one team",
			intro: "From structure to finishes and building systems, our disciplines are coordinated by a single project team — reducing interfaces, delays and rework.",
			image: "/media/IMG-20180808-WA0034.jpg",
			imageAlt: "Oasis Fajr mechanical installation works"
		}),
		/* @__PURE__ */ jsx("div", { id: "main-content" }),
		/* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsx("nav", {
			"aria-label": "Services",
			className: "flex flex-wrap gap-2",
			children: services.map((s) => /* @__PURE__ */ jsx(Link, {
				to: "/services",
				hash: s.slug,
				className: "border border-border px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-muted-foreground hover:border-primary hover:text-primary-dark",
				children: s.title
			}, s.slug))
		}) }),
		services.map((service, index) => {
			const Icon = service.icon;
			const reversed = index % 2 === 1;
			return /* @__PURE__ */ jsx("section", {
				id: service.slug,
				className: `scroll-mt-24 border-t border-border ${reversed ? "bg-sand" : ""}`,
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20",
					children: [/* @__PURE__ */ jsxs("div", {
						className: reversed ? "lg:order-2" : "",
						children: [
							/* @__PURE__ */ jsx(Icon, {
								className: "h-9 w-9 text-primary-dark",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ jsx(SectionHeading, {
								eyebrow: `0${index + 1}`,
								title: service.title,
								intro: service.overview
							}),
							/* @__PURE__ */ jsx("ul", {
								className: "mt-8 grid gap-px border border-border bg-border sm:grid-cols-2",
								children: service.scope.map((item) => /* @__PURE__ */ jsx("li", {
									className: `px-4 py-3 text-sm ${reversed ? "bg-sand" : "bg-background"}`,
									children: item
								}, item))
							})
						]
					}), /* @__PURE__ */ jsx("img", {
						src: service.image,
						alt: service.imageAlt,
						loading: "lazy",
						decoding: "async",
						className: `aspect-[4/3] w-full border border-border object-cover ${reversed ? "lg:order-1" : ""}`
					})]
				})
			}, service.slug);
		}),
		/* @__PURE__ */ jsx("section", {
			className: "border-t border-border",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20",
				children: [/* @__PURE__ */ jsx(SectionHeading, {
					eyebrow: "Industries",
					title: "Sectors we serve",
					intro: "Our teams are structured to work across the following sectors in the Kingdom."
				}), /* @__PURE__ */ jsx("ul", {
					className: "mt-10 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3",
					children: industries.map((industry) => /* @__PURE__ */ jsx("li", {
						className: "bg-background px-6 py-7 font-display text-lg font-bold",
						children: industry
					}, industry))
				})]
			})
		}),
		/* @__PURE__ */ jsx(MaintenanceSupport, {}),
		/* @__PURE__ */ jsx(ContactCTA, {
			title: "Need a scope priced?",
			body: "Send us your drawings, BOQ or scope of works and we will come back with a proposal."
		})
	] });
}
//#endregion
export { ServicesPage as component };
