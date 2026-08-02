import { f as quality, g as vision, i as coreValues, l as management, n as companyBackground, o as hse, r as companyStory, t as company, u as missionStatements } from "./company-DmUVCXMZ.js";
import { n as Section, t as PageHero } from "./PageHero-oAOcGd7o.js";
import { t as SectionHeading } from "./SectionHeading-Bll12dsV.js";
import { n as OrganizationChart, r as StatStrip, t as SafetyFeature } from "./SafetyFeature-Cf0qppWg.js";
import { t as ContactCTA } from "./ContactCTA-BijcgTID.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/about.tsx?tsr-split=component
function AboutPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PageHero, {
			eyebrow: "About us",
			title: "A Saudi contracting company built on delivery",
			intro: `${company.name} has operated in the Kingdom since ${company.founded}, delivering multidisciplinary contracting work for commercial, industrial and public sector clients.`,
			image: "/media/IMG-20180912-WA0043.jpg",
			imageAlt: "Oasis Fajr construction team on site"
		}),
		/* @__PURE__ */ jsx("div", { id: "main-content" }),
		/* @__PURE__ */ jsx(StatStrip, {}),
		/* @__PURE__ */ jsx(Section, {
			id: "profile",
			children: /* @__PURE__ */ jsxs("div", {
				className: "grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16",
				children: [/* @__PURE__ */ jsx(SectionHeading, {
					eyebrow: "Company profile",
					title: "Who we are"
				}), /* @__PURE__ */ jsxs("div", {
					className: "space-y-5 text-base leading-relaxed text-muted-foreground",
					children: [[...companyStory, ...companyBackground].map((p) => /* @__PURE__ */ jsx("p", { children: p }, p.slice(0, 24))), /* @__PURE__ */ jsxs("p", { children: [
						"Formerly known as ",
						company.formerNames.join(" and "),
						", the company operates from ",
						company.location,
						"."
					] })]
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "border-y border-border bg-sand",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-20",
				children: [/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(SectionHeading, {
					eyebrow: "Vision",
					title: "Our vision",
					intro: vision
				}) }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(SectionHeading, {
					eyebrow: "Mission",
					title: "Our mission",
					as: "h2"
				}), /* @__PURE__ */ jsx("ul", {
					className: "mt-6 space-y-4",
					children: missionStatements.map((m) => /* @__PURE__ */ jsx("li", {
						className: "border-l-2 border-primary pl-4 text-sm leading-relaxed text-muted-foreground",
						children: m
					}, m.slice(0, 20)))
				})] })]
			})
		}),
		/* @__PURE__ */ jsxs(Section, {
			id: "values",
			children: [/* @__PURE__ */ jsx(SectionHeading, {
				eyebrow: "Values",
				title: "What we hold ourselves to"
			}), /* @__PURE__ */ jsx("ul", {
				className: "mt-10 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3",
				children: coreValues.map((v) => /* @__PURE__ */ jsxs("li", {
					className: "bg-background p-6 lg:p-7",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "text-lg",
						children: v.title
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-3 text-sm leading-relaxed text-muted-foreground",
						children: v.body
					})]
				}, v.title))
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "border-y border-border bg-sand",
			id: "structure",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20",
				children: [/* @__PURE__ */ jsx(SectionHeading, {
					eyebrow: "Organisation",
					title: "Company structure",
					intro: "Responsibility is defined level by level so that every project has clear ownership from management down to the site crews."
				}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(OrganizationChart, {}), /* @__PURE__ */ jsxs("div", {
					className: "mt-10 border-t border-border pt-6",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "eyebrow text-muted-foreground",
						children: "Management"
					}), /* @__PURE__ */ jsx("ul", {
						className: "mt-4 space-y-2 text-sm",
						children: management.map((m) => /* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
							className: "font-semibold",
							children: m.name
						}), /* @__PURE__ */ jsxs("span", {
							className: "text-muted-foreground",
							children: [" — ", m.role]
						})] }, m.role))
					})]
				})] })]
			})
		}),
		/* @__PURE__ */ jsx(SafetyFeature, { withLink: false }),
		/* @__PURE__ */ jsx(Section, {
			id: "hse",
			children: /* @__PURE__ */ jsxs("div", {
				className: "grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16",
				children: [/* @__PURE__ */ jsx(SectionHeading, {
					eyebrow: "HSE policy",
					title: "Health, safety and environment"
				}), /* @__PURE__ */ jsxs("div", {
					className: "space-y-5 text-base leading-relaxed text-muted-foreground",
					children: [
						hse.intro.map((p) => /* @__PURE__ */ jsx("p", { children: p }, p.slice(0, 24))),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
							className: "text-lg text-foreground",
							children: "Reportable environmental incidents"
						}), /* @__PURE__ */ jsx("ul", {
							className: "mt-4 grid gap-2 sm:grid-cols-2",
							children: hse.reportable.map((r) => /* @__PURE__ */ jsx("li", {
								className: "border border-border px-4 py-3 text-sm",
								children: r
							}, r))
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
							className: "text-lg text-foreground",
							children: "Environmental commitments"
						}), /* @__PURE__ */ jsx("ul", {
							className: "mt-4 space-y-3",
							children: hse.environment.map((e) => /* @__PURE__ */ jsx("li", {
								className: "border-l-2 border-primary pl-4 text-sm leading-relaxed",
								children: e
							}, e.slice(0, 20)))
						})] })
					]
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "border-t border-border bg-sand",
			id: "quality",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20",
				children: [/* @__PURE__ */ jsx(SectionHeading, {
					eyebrow: "Quality policy",
					title: "Our commitment to quality",
					intro: quality.intro
				}), /* @__PURE__ */ jsx("ul", {
					className: "space-y-4",
					children: quality.points.map((p) => /* @__PURE__ */ jsx("li", {
						className: "border border-border bg-background p-5 text-sm leading-relaxed text-muted-foreground",
						children: p
					}, p.slice(0, 20)))
				})]
			})
		}),
		/* @__PURE__ */ jsx(ContactCTA, {
			title: "Want the full company profile?",
			body: "Get in touch and we will share credentials, capability statements and project references relevant to your scope."
		})
	] });
}
//#endregion
export { AboutPage as component };
