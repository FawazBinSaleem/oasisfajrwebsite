import { t as company } from "./company-DmUVCXMZ.js";
import { t as services } from "./services-CgRdRzUv.js";
import { useEffect, useRef, useState } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useRouter } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Menu, X } from "lucide-react";
//#region src/styles.css?url
var styles_default = "/assets/styles-0306p-8F.css";
//#endregion
//#region src/lib/lovable-error-reporting.ts
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
//#endregion
//#region src/data/navigation.ts
var mainNav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/projects",
		label: "Projects"
	},
	{
		to: "/gallery",
		label: "Gallery"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
//#endregion
//#region src/components/MobileNavigation.tsx
function MobileNavigation({ open, onClose }) {
	const panelRef = useRef(null);
	useEffect(() => {
		if (!open) return;
		const previous = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		const onKey = (e) => {
			if (e.key === "Escape") onClose();
		};
		document.addEventListener("keydown", onKey);
		panelRef.current?.querySelector("a,button")?.focus();
		return () => {
			document.body.style.overflow = previous;
			document.removeEventListener("keydown", onKey);
		};
	}, [open, onClose]);
	if (!open) return null;
	return /* @__PURE__ */ jsxs("div", {
		id: "mobile-navigation",
		ref: panelRef,
		role: "dialog",
		"aria-modal": "true",
		"aria-label": "Site navigation",
		className: "fixed inset-0 z-[90] flex flex-col bg-ink text-ink-foreground lg:hidden",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex h-16 items-center justify-between border-b border-ink-foreground/15 px-5",
				children: [/* @__PURE__ */ jsx("span", {
					className: "font-display text-sm font-bold uppercase tracking-[0.18em]",
					children: company.short
				}), /* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: onClose,
					"aria-label": "Close menu",
					className: "inline-flex h-11 w-11 items-center justify-center border border-ink-foreground/30",
					children: /* @__PURE__ */ jsx(X, {
						className: "h-5 w-5",
						"aria-hidden": "true"
					})
				})]
			}),
			/* @__PURE__ */ jsx("nav", {
				className: "flex-1 overflow-y-auto px-5 py-4",
				children: mainNav.map((item) => /* @__PURE__ */ jsx(Link, {
					to: item.to,
					onClick: onClose,
					activeOptions: { exact: item.to === "/" },
					activeProps: { className: "text-primary" },
					className: "block border-b border-ink-foreground/10 py-4 font-display text-xl font-bold tracking-tight text-ink-foreground",
					children: item.label
				}, item.to))
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "border-t border-ink-foreground/15 p-5",
				children: [/* @__PURE__ */ jsx(Link, {
					to: "/contact",
					onClick: onClose,
					className: "flex w-full items-center justify-center bg-primary px-6 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground",
					children: "Request a Consultation"
				}), /* @__PURE__ */ jsx("a", {
					href: company.whatsapp,
					target: "_blank",
					rel: "noreferrer",
					className: "mt-3 block text-center text-sm text-ink-foreground/70",
					children: company.phoneDisplay
				})]
			})
		]
	});
}
//#endregion
//#region src/components/SiteHeader.tsx
function SiteHeader() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("a", {
			href: "#main-content",
			className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[120] focus:bg-ink focus:px-4 focus:py-2 focus:text-ink-foreground",
			children: "Skip to content"
		}),
		/* @__PURE__ */ jsx("header", {
			className: "sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur",
			children: /* @__PURE__ */ jsxs("div", {
				className: `mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-200 lg:px-8 ${scrolled ? "h-14 lg:h-16" : "h-16 lg:h-20"}`,
				children: [
					/* @__PURE__ */ jsxs(Link, {
						to: "/",
						className: "flex items-center gap-3",
						"aria-label": `${company.name} — home`,
						children: [/* @__PURE__ */ jsx("img", {
							src: company.logo,
							alt: "",
							"aria-hidden": "true",
							className: `w-auto transition-all duration-200 ${scrolled ? "h-8" : "h-9 lg:h-11"}`
						}), /* @__PURE__ */ jsxs("span", {
							className: "flex flex-col leading-none",
							children: [/* @__PURE__ */ jsx("span", {
								className: "font-display text-sm font-extrabold uppercase tracking-[0.14em]",
								children: "Oasis Fajr"
							}), /* @__PURE__ */ jsx("span", {
								className: "mt-1 hidden text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground sm:block",
								children: "Contracting"
							})]
						})]
					}),
					/* @__PURE__ */ jsx("nav", {
						"aria-label": "Main",
						className: "hidden items-center gap-1 lg:flex",
						children: mainNav.map((item) => /* @__PURE__ */ jsx(Link, {
							to: item.to,
							activeOptions: { exact: item.to === "/" },
							activeProps: { className: "text-foreground border-primary" },
							inactiveProps: { className: "text-muted-foreground border-transparent" },
							className: "border-b-2 px-3 py-2 text-[0.8rem] font-semibold uppercase tracking-[0.1em] transition-colors hover:text-foreground",
							children: item.label
						}, item.to))
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ jsx(Link, {
							to: "/contact",
							className: "hidden bg-primary px-5 py-3 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-primary-dark hover:text-background lg:inline-block",
							children: "Request a Consultation"
						}), /* @__PURE__ */ jsx("button", {
							type: "button",
							"aria-label": "Open menu",
							"aria-expanded": open,
							"aria-controls": "mobile-navigation",
							onClick: () => setOpen(true),
							className: "inline-flex h-11 w-11 items-center justify-center border border-border lg:hidden",
							children: /* @__PURE__ */ jsx(Menu, {
								className: "h-5 w-5",
								"aria-hidden": "true"
							})
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ jsx(MobileNavigation, {
			open,
			onClose: () => setOpen(false)
		})
	] });
}
//#endregion
//#region src/components/SiteFooter.tsx
function SiteFooter() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "bg-ink text-ink-foreground",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-4 lg:px-8 lg:py-16",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-1",
					children: [/* @__PURE__ */ jsx("img", {
						src: company.logo,
						alt: `${company.name} logo`,
						className: "h-12 w-auto"
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-5 max-w-xs text-sm leading-relaxed text-ink-foreground/70",
						children: company.footerDescription
					})]
				}),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
					className: "eyebrow text-ink-foreground/50",
					children: "Services"
				}), /* @__PURE__ */ jsx("ul", {
					className: "mt-5 space-y-2.5",
					children: services.map((s) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
						to: "/services",
						hash: s.slug,
						className: "text-sm text-ink-foreground/75 hover:text-primary",
						children: s.title
					}) }, s.slug))
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
					className: "eyebrow text-ink-foreground/50",
					children: "Contact"
				}), /* @__PURE__ */ jsxs("ul", {
					className: "mt-5 space-y-2.5 text-sm text-ink-foreground/75",
					children: [
						/* @__PURE__ */ jsxs("li", { children: [company.operationManager, " — Operation Manager"] }),
						/* @__PURE__ */ jsxs("li", { children: [
							" ",
							"WhatsApp:",
							/* @__PURE__ */ jsx("a", {
								href: company.whatsapp,
								target: "_blank",
								rel: "noreferrer",
								className: "hover:text-primary",
								children: company.phoneDisplay
							})
						] }),
						/* @__PURE__ */ jsx("li", {
							className: "break-all",
							children: /* @__PURE__ */ jsx("a", {
								href: `mailto:${company.email}`,
								className: "hover:text-primary",
								children: company.email
							})
						}),
						/* @__PURE__ */ jsx("li", { children: company.country })
					]
				})] })
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "border-t border-ink-foreground/10",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-7xl px-5 py-5 text-xs text-ink-foreground/50 lg:px-8",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					company.name,
					". All rights reserved."
				]
			})
		})]
	});
}
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	useEffect(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ jsx("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Oasis Fajr Contracting" },
			{
				name: "description",
				content: "Oasis Fajr Contracting — civil, MEP, fit out and landscaping contractor in Saudi Arabia since 2001."
			},
			{
				name: "author",
				content: "Oasis Fajr Contracting"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700;800;900&family=Barlow:wght@300;400;500;600&display=swap"
			},
			{
				rel: "icon",
				href: "/media/favicontrans.png",
				type: "image/png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	return /* @__PURE__ */ jsx(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ jsx(SiteHeader, {}),
				/* @__PURE__ */ jsx("main", {
					className: "flex-1",
					children: /* @__PURE__ */ jsx(Outlet, {})
				}),
				/* @__PURE__ */ jsx(SiteFooter, {})
			]
		})
	});
}
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter$5 = () => import("./routes-BuSmmMLZ.js");
var title$5 = "Oasis Fajr Contracting | Saudi Arabia";
var description$5 = "Oasis Fajr provides civil construction, MEP, fit-out, maintenance, and landscaping services across the Kingdom of Saudi Arabia.";
var Route$5 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: title$5 },
			{
				name: "description",
				content: description$5
			},
			{
				property: "og:title",
				content: title$5
			},
			{
				property: "og:description",
				content: description$5
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://oasisfajircontracting.com/"
			},
			{
				property: "og:image",
				content: "https://oasisfajircontracting.com/media/IMG-20190409-WA0022.jpg"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: title$5
			},
			{
				name: "twitter:description",
				content: description$5
			},
			{
				name: "twitter:image",
				content: "https://oasisfajircontracting.com/media/IMG-20190409-WA0022.jpg"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://oasisfajircontracting.com/"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "GeneralContractor",
				name: company.name,
				foundingDate: String(company.founded),
				url: company.domain,
				telephone: company.phone,
				email: company.email,
				areaServed: company.country,
				address: {
					"@type": "PostalAddress",
					addressCountry: "SA"
				}
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
//#endregion
//#region src/routes/about.tsx
var $$splitComponentImporter$4 = () => import("./about-By8GH65k.js");
var title$4 = "About Oasis Fajr Contracting | Company Profile";
var description$4 = "Company profile, vision, mission, values, organisation structure, HSE policy and quality policy of Oasis Fajr Contracting in Saudi Arabia.";
var Route$4 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: title$4 },
			{
				name: "description",
				content: description$4
			},
			{
				property: "og:title",
				content: title$4
			},
			{
				property: "og:description",
				content: description$4
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: `${company.domain}/about`
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: title$4
			},
			{
				name: "twitter:description",
				content: description$4
			}
		],
		links: [{
			rel: "canonical",
			href: `${company.domain}/about`
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/contact.tsx
var $$splitComponentImporter$3 = () => import("./contact-3V6dD9Sp.js");
var title$3 = "Contact Oasis Fajr Contracting | Saudi Arabia";
var description$3 = "Contact Oasis Fajr Contracting to discuss civil, MEP, fit-out, maintenance or landscaping requirements in the Kingdom of Saudi Arabia.";
var Route$3 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: title$3 },
			{
				name: "description",
				content: description$3
			},
			{
				property: "og:title",
				content: title$3
			},
			{
				property: "og:description",
				content: description$3
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: `${company.domain}/contact`
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: title$3
			},
			{
				name: "twitter:description",
				content: description$3
			}
		],
		links: [{
			rel: "canonical",
			href: `${company.domain}/contact`
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/gallery.tsx
var $$splitComponentImporter$2 = () => import("./gallery-CBroTvvS.js");
var title$2 = "Project Gallery | Oasis Fajr Contracting";
var description$2 = "Photographs from Oasis Fajr construction, mechanical, electrical, fit-out and landscaping sites across Saudi Arabia.";
var Route$2 = createFileRoute("/gallery")({
	head: () => ({
		meta: [
			{ title: title$2 },
			{
				name: "description",
				content: description$2
			},
			{
				property: "og:title",
				content: title$2
			},
			{
				property: "og:description",
				content: description$2
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: `${company.domain}/gallery`
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: title$2
			},
			{
				name: "twitter:description",
				content: description$2
			}
		],
		links: [{
			rel: "canonical",
			href: `${company.domain}/gallery`
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/projects.tsx
var $$splitComponentImporter$1 = () => import("./projects-NwW_BQU2.js");
var title$1 = "Projects | Oasis Fajr Contracting";
var description$1 = "Completed and ongoing construction, MEP, fit-out and maintenance projects delivered by Oasis Fajr across the Kingdom of Saudi Arabia.";
var Route$1 = createFileRoute("/projects")({
	head: () => ({
		meta: [
			{ title: title$1 },
			{
				name: "description",
				content: description$1
			},
			{
				property: "og:title",
				content: title$1
			},
			{
				property: "og:description",
				content: description$1
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: `${company.domain}/projects`
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: title$1
			},
			{
				name: "twitter:description",
				content: description$1
			}
		],
		links: [{
			rel: "canonical",
			href: `${company.domain}/projects`
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/services.tsx
var $$splitComponentImporter = () => import("./services-DY_NWAGi.js");
var title = "Contracting Services | Civil, MEP, Fit-Out & Maintenance";
var description = "Civil construction, mechanical, electrical, fit-out and finishing, maintenance and landscaping services delivered by Oasis Fajr across Saudi Arabia.";
var Route = createFileRoute("/services")({
	head: () => ({
		meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: `${company.domain}/services`
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: title
			},
			{
				name: "twitter:description",
				content: description
			}
		],
		links: [{
			rel: "canonical",
			href: `${company.domain}/services`
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var rootRouteChildren = {
	IndexRoute: Route$5.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	AboutRoute: Route$4.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$6
	}),
	ContactRoute: Route$3.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$6
	}),
	GalleryRoute: Route$2.update({
		id: "/gallery",
		path: "/gallery",
		getParentRoute: () => Route$6
	}),
	ProjectsRoute: Route$1.update({
		id: "/projects",
		path: "/projects",
		getParentRoute: () => Route$6
	}),
	ServicesRoute: Route.update({
		id: "/services",
		path: "/services",
		getParentRoute: () => Route$6
	})
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
