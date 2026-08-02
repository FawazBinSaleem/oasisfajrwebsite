import { n as __toESM } from "../_runtime.mjs";
import { a as heroCopy, r as companyStory, s as industries } from "./company-CM46kbbq.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as SectionHeading } from "./SectionHeading-Bll12dsV.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as SafetyFeature, r as StatStrip, t as OrganizationChart } from "./SafetyFeature-tXxnOvye.mjs";
import { n as SecondaryButton, t as PrimaryButton } from "./Buttons-D-TltuVc.mjs";
import { t as ContactCTA } from "./ContactCTA-kXmgfHzy.mjs";
import { n as GalleryLightbox, r as featuredGallery, t as GalleryGrid } from "./gallery-BWQQtmxV.mjs";
import { r as featuredProjects, t as ProjectCard } from "./projects-CADuQ7Yb.mjs";
import { t as services } from "./services-CgRdRzUv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DadyYGJN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ServiceCard({ service }) {
	const Icon = service.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "flex h-full flex-col border border-border bg-card p-6 transition-colors duration-200 hover:border-primary lg:p-7",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				className: "h-7 w-7 text-primary-dark",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-5 text-xl",
				children: service.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 flex-1 text-sm leading-relaxed text-muted-foreground",
				children: service.short
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/services",
				hash: service.slug,
				className: "mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-foreground hover:text-primary-dark",
				children: ["Learn More ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
					className: "h-4 w-4",
					"aria-hidden": "true"
				})]
			})
		]
	});
}
function HomePage() {
	const [lightbox, setLightbox] = (0, import_react.useState)(null);
	const [active, setActive] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-ink text-ink-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: heroCopy.image,
					alt: heroCopy.imageAlt,
					className: "absolute inset-0 h-full w-full object-cover opacity-30",
					fetchPriority: "high",
					decoding: "async"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-7xl px-5 py-20 sm:py-28 lg:px-8 lg:py-36",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-primary",
							children: heroCopy.eyebrow
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-5 max-w-4xl text-[2.5rem] leading-[1.02] sm:text-6xl lg:text-7xl",
							children: [
								heroCopy.headline[0],
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								heroCopy.headline[1]
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-7 max-w-xl text-base leading-relaxed text-ink-foreground/80 sm:text-lg",
							children: heroCopy.support
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PrimaryButton, {
								to: "/projects",
								children: ["View Our Projects ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									className: "h-4 w-4",
									"aria-hidden": "true"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SecondaryButton, {
								to: "/contact",
								onDark: true,
								children: "Request a Consultation"
							})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { id: "main-content" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatStrip, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Who we are",
						title: "Built on experience. Driven by quality."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 space-y-5 text-base leading-relaxed text-muted-foreground",
						children: companyStory.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, p.slice(0, 24)))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/about",
						className: "mt-8 inline-flex items-center gap-2 border-b border-foreground/30 pb-1 text-xs font-bold uppercase tracking-[0.14em] hover:border-primary hover:text-primary-dark",
						children: ["Learn More About Us ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/media/IMG-20180912-WA0043.jpg",
					alt: "Oasis Fajr team executing structural works on a Saudi construction project",
					loading: "lazy",
					decoding: "async",
					className: "aspect-[4/3] w-full border border-border object-cover"
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-sand",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "What we do",
						title: "Integrated contracting capabilities",
						intro: "We coordinate civil, mechanical, electrical, and finishing work through a single project team, from planning to handover."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3",
						children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, { service: s }, s.slug))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SecondaryButton, {
							to: "/services",
							children: "Explore All Services"
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Selected work",
					title: "Projects delivered across the Kingdom",
					intro: "A selection from our project record. Full details are available on request."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/projects",
					className: "inline-flex items-center gap-2 border-b border-foreground/30 pb-1 text-xs font-bold uppercase tracking-[0.14em] hover:border-primary hover:text-primary-dark",
					children: ["All Projects ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: featuredProjects.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
					project: p,
					onSelect: setActive,
					priority: i < 3
				}, p.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafetyFeature, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Industries",
				title: "Sectors we can support",
				intro: "Our multidisciplinary teams are set up to serve projects in the following sectors."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-10 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3",
				children: industries.map((industry) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "bg-background px-6 py-7 font-display text-lg font-bold",
					children: industry
				}, industry))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-sand",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Organisation",
					title: "Structured for accountable delivery",
					intro: "Every project is resourced through a defined chain of responsibility, so decisions and approvals are never left unowned."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrganizationChart, { compact: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/about",
					hash: "structure",
					className: "mt-6 inline-flex items-center gap-2 border-b border-foreground/30 pb-1 text-xs font-bold uppercase tracking-[0.14em] hover:border-primary hover:text-primary-dark",
					children: ["View Our Company Structure ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					})]
				})] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Gallery",
					title: "From our sites"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/gallery",
					className: "inline-flex items-center gap-2 border-b border-foreground/30 pb-1 text-xs font-bold uppercase tracking-[0.14em] hover:border-primary hover:text-primary-dark",
					children: ["View Full Gallery ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryGrid, {
					images: featuredGallery,
					onSelect: setLightbox,
					eagerCount: 0
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCTA, {}),
		lightbox !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryLightbox, {
			images: featuredGallery,
			index: lightbox,
			onIndexChange: setLightbox,
			onClose: () => setLightbox(null)
		}),
		active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			role: "dialog",
			"aria-modal": "true",
			"aria-label": active.title,
			className: "fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 p-4",
			onClick: () => setActive(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-h-[85vh] w-full max-w-lg overflow-y-auto bg-background p-6",
				onClick: (e) => e.stopPropagation(),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: active.status
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-2xl",
						children: active.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground",
						children: active.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-xs uppercase tracking-[0.14em] text-primary-dark",
						children: [
							active.category.join(" · "),
							" — ",
							active.location
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActive(null),
						className: "mt-6 border border-border px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] hover:border-primary",
						children: "Close"
					})
				]
			})
		})
	] });
}
//#endregion
export { HomePage as component };
