import { f as nav, t as company } from "./site-Bt6eg8XZ.js";
import { useEffect, useState } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Menu, X } from "lucide-react";
//#region src/styles.css?url
var styles_default = "/assets/styles-DKjjV61T.css";
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
//#region src/components/SiteHeader.tsx
function SiteHeader() {
	const [open, setOpen] = useState(false);
	return /* @__PURE__ */ jsxs("header", {
		className: "sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8",
			children: [
				/* @__PURE__ */ jsxs(Link, {
					to: "/",
					className: "flex items-center gap-3",
					onClick: () => setOpen(false),
					children: [/* @__PURE__ */ jsx("img", {
						src: "/media/oasisfajr.webp",
						alt: "Oasis Fajr Contracting logo",
						className: "h-9 w-auto"
					}), /* @__PURE__ */ jsx("span", {
						className: "hidden text-sm font-bold uppercase tracking-[0.18em] sm:block",
						children: "Oasis Fajr"
					})]
				}),
				/* @__PURE__ */ jsx("nav", {
					className: "hidden items-center gap-1 xl:flex",
					children: nav.map((item) => /* @__PURE__ */ jsx(Link, {
						to: item.to,
						className: "px-3 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground",
						activeProps: { className: "text-foreground" },
						children: item.label
					}, item.to))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ jsx("a", {
						href: `tel:${company.phone}`,
						className: "hidden bg-primary px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground transition-opacity hover:opacity-90 lg:inline-block",
						children: company.phone
					}), /* @__PURE__ */ jsx("button", {
						type: "button",
						"aria-label": open ? "Close menu" : "Open menu",
						onClick: () => setOpen((v) => !v),
						className: "inline-flex h-10 w-10 items-center justify-center border border-border xl:hidden",
						children: open ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
					})]
				})
			]
		}), open && /* @__PURE__ */ jsx("nav", {
			className: "border-t border-border bg-background xl:hidden",
			children: /* @__PURE__ */ jsx("div", {
				className: "mx-auto max-w-7xl px-5 py-3",
				children: nav.map((item) => /* @__PURE__ */ jsx(Link, {
					to: item.to,
					onClick: () => setOpen(false),
					className: "block border-b border-border/60 py-3 text-sm font-medium text-muted-foreground last:border-0",
					activeProps: { className: "text-primary" },
					children: item.label
				}, item.to))
			})
		})]
	});
}
//#endregion
//#region src/components/SiteFooter.tsx
function SiteFooter() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "mt-24 bg-ink text-ink-foreground",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 lg:px-8",
			children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("img", {
				src: "/media/oasisfajr.webp",
				alt: "Oasis Fajr Contracting logo",
				className: "h-12 w-auto"
			}), /* @__PURE__ */ jsxs("p", {
				className: "mt-4 max-w-xs text-sm text-ink-foreground/70",
				children: [
					company.name,
					" - building across the ",
					company.country,
					" since",
					" ",
					company.founded,
					"."
				]
			})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
				className: "eyebrow text-ink-foreground/50",
				children: "Get in touch"
			}), /* @__PURE__ */ jsxs("div", {
				className: "mt-4 space-y-2 text-sm text-ink-foreground/75",
				children: [
					/* @__PURE__ */ jsxs("p", { children: [company.operationManager, " - Operation Manager"] }),
					/* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("a", {
						href: `tel:${company.phone}`,
						className: "hover:text-primary",
						children: company.phone
					}) }),
					/* @__PURE__ */ jsx("p", {
						className: "break-all",
						children: /* @__PURE__ */ jsx("a", {
							href: `mailto:${company.email}`,
							className: "hover:text-primary",
							children: company.email
						})
					})
				]
			})] })]
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
var Route$10 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Oasis Fajr Contracting & Trading" },
			{
				name: "description",
				content: "Oasis Fajr Contracting & Trading — civil, MEP, fit out and landscaping contractor in Saudi Arabia since 2001."
			},
			{
				name: "author",
				content: "Oasis Fajr Contracting & Trading"
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
	const { queryClient } = Route$10.useRouteContext();
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
var $$splitComponentImporter$9 = () => import("./routes-RN3dmuSN.js");
var Route$9 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Oasis Fajr Contracting & Trading | Building in Saudi Arabia since 2001" },
			{
				name: "description",
				content: "Civil contracting, MEP, fit out and landscaping across the Kingdom of Saudi Arabia. Dream it and we build it."
			},
			{
				property: "og:title",
				content: "Oasis Fajr Contracting & Trading"
			},
			{
				property: "og:description",
				content: "Civil contracting, MEP, fit out and landscaping across the Kingdom of Saudi Arabia since 2001."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Oasis Fajr Contracting & Trading"
			},
			{
				name: "twitter:description",
				content: "Civil contracting, MEP, fit out and landscaping across the Kingdom of Saudi Arabia since 2001."
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
//#endregion
//#region src/routes/company.tsx
var $$splitComponentImporter$8 = () => import("./company-DPGfVsmL.js");
var Route$8 = createFileRoute("/company")({
	head: () => ({
		meta: [
			{ title: "Company Information | Oasis Fajr Contracting" },
			{
				name: "description",
				content: "Civil contracting, MEP, drainage, industrial electrical, fit out and landscaping services offered by Oasis Fajr."
			},
			{
				property: "og:title",
				content: "Company Information | Oasis Fajr Contracting"
			},
			{
				property: "og:description",
				content: "The full range of contracting services offered by Oasis Fajr."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:url",
				content: "/company"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Company Information | Oasis Fajr Contracting"
			},
			{
				name: "twitter:description",
				content: "The full range of contracting services offered by Oasis Fajr."
			}
		],
		links: [{
			rel: "canonical",
			href: "/company"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
//#endregion
//#region src/routes/contact.tsx
var $$splitComponentImporter$7 = () => import("./contact-COF9R0rR.js");
var Route$7 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact | Oasis Fajr Contracting" },
			{
				name: "description",
				content: "Contact Oasis Fajr Contracting & Trading — Operation Manager Saleem Ahmed, +966551908980, siaksa@oasisfajircontracting.com."
			},
			{
				property: "og:title",
				content: "Contact | Oasis Fajr Contracting"
			},
			{
				property: "og:description",
				content: "Get in touch with Oasis Fajr Contracting & Trading."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/contact"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Contact | Oasis Fajr Contracting"
			},
			{
				name: "twitter:description",
				content: "Get in touch with Oasis Fajr Contracting & Trading."
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
//#endregion
//#region src/routes/gallery.tsx
var $$splitComponentImporter$6 = () => import("./gallery-DKk-sdgk.js");
var Route$6 = createFileRoute("/gallery")({
	head: () => ({
		meta: [
			{ title: "Gallery | Oasis Fajr Contracting" },
			{
				name: "description",
				content: "Photographs from Oasis Fajr Contracting sites: concrete, steel, fit out, gypsum, MEP and landscaping works."
			},
			{
				property: "og:title",
				content: "Gallery | Oasis Fajr Contracting"
			},
			{
				property: "og:description",
				content: "Photographs from Oasis Fajr Contracting sites."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:url",
				content: "/gallery"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Gallery | Oasis Fajr Contracting"
			},
			{
				name: "twitter:description",
				content: "Photographs from Oasis Fajr Contracting sites."
			}
		],
		links: [{
			rel: "canonical",
			href: "/gallery"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
//#endregion
//#region src/routes/introduction.tsx
var $$splitComponentImporter$5 = () => import("./introduction-OKtl06cH.js");
var Route$5 = createFileRoute("/introduction")({
	head: () => ({
		meta: [
			{ title: "Introduction | Oasis Fajr Contracting" },
			{
				name: "description",
				content: "How Oasis Fajr Contracting grew from IBN AL BALAD and ASAS into a trusted Saudi contractor since 2001."
			},
			{
				property: "og:title",
				content: "Introduction | Oasis Fajr Contracting"
			},
			{
				property: "og:description",
				content: "The story of Oasis Fajr Contracting & Trading, founded in 2001."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:url",
				content: "/introduction"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Introduction | Oasis Fajr Contracting"
			},
			{
				name: "twitter:description",
				content: "The story of Oasis Fajr Contracting & Trading, founded in 2001."
			}
		],
		links: [{
			rel: "canonical",
			href: "/introduction"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
//#endregion
//#region src/routes/organization.tsx
var $$splitComponentImporter$4 = () => import("./organization-DIHyIZoJ.js");
var Route$4 = createFileRoute("/organization")({
	head: () => ({
		meta: [
			{ title: "Organizational Chart | Oasis Fajr Contracting" },
			{
				name: "description",
				content: "The management team and organizational structure of Oasis Fajr Contracting & Trading."
			},
			{
				property: "og:title",
				content: "Organizational Chart | Oasis Fajr Contracting"
			},
			{
				property: "og:description",
				content: "Management team and organizational structure of Oasis Fajr."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:url",
				content: "/organization"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Organizational Chart | Oasis Fajr Contracting"
			},
			{
				name: "twitter:description",
				content: "Management team and organizational structure of Oasis Fajr."
			}
		],
		links: [{
			rel: "canonical",
			href: "/organization"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/projects.tsx
var $$splitComponentImporter$3 = () => import("./projects-D1CjtCgx.js");
var Route$3 = createFileRoute("/projects")({
	head: () => ({
		meta: [
			{ title: "Projects | Oasis Fajr Contracting" },
			{
				name: "description",
				content: "Completed and ongoing projects for clients including ARAMCO contractors, Riyad Bank, Coca-Cola, NOON, Marriott and more."
			},
			{
				property: "og:title",
				content: "Projects | Oasis Fajr Contracting"
			},
			{
				property: "og:description",
				content: "Completed and ongoing Oasis Fajr projects across the Kingdom."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:url",
				content: "/projects"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Projects | Oasis Fajr Contracting"
			},
			{
				name: "twitter:description",
				content: "Completed and ongoing Oasis Fajr projects across the Kingdom."
			}
		],
		links: [{
			rel: "canonical",
			href: "/projects"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/safety.tsx
var $$splitComponentImporter$2 = () => import("./safety-BgH3iXbR.js");
var Route$2 = createFileRoute("/safety")({
	head: () => ({
		meta: [
			{ title: "Safety & Quality | Oasis Fajr Contracting" },
			{
				name: "description",
				content: "Our Health, Safety & Environment policy and Quality policy — Target Zero Accidents and consistent, compliant delivery."
			},
			{
				property: "og:title",
				content: "Safety & Quality | Oasis Fajr Contracting"
			},
			{
				property: "og:description",
				content: "HSE and quality policies at Oasis Fajr Contracting."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:url",
				content: "/safety"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Safety & Quality | Oasis Fajr Contracting"
			},
			{
				name: "twitter:description",
				content: "HSE and quality policies at Oasis Fajr Contracting."
			}
		],
		links: [{
			rel: "canonical",
			href: "/safety"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/specialization.tsx
var $$splitComponentImporter$1 = () => import("./specialization-DBHwDh3j.js");
var Route$1 = createFileRoute("/specialization")({
	head: () => ({
		meta: [
			{ title: "Specialization | Oasis Fajr Contracting" },
			{
				name: "description",
				content: "Fit out and decoration, turn key construction, maintenance, irrigation, landscaping, mechanical works and fiber optic networking."
			},
			{
				property: "og:title",
				content: "Specialization | Oasis Fajr Contracting"
			},
			{
				property: "og:description",
				content: "The disciplines Oasis Fajr specializes in across Saudi Arabia."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:url",
				content: "/specialization"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Specialization | Oasis Fajr Contracting"
			},
			{
				name: "twitter:description",
				content: "The disciplines Oasis Fajr specializes in across Saudi Arabia."
			}
		],
		links: [{
			rel: "canonical",
			href: "/specialization"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/vision.tsx
var $$splitComponentImporter = () => import("./vision-DcNg5ud9.js");
var Route = createFileRoute("/vision")({
	head: () => ({
		meta: [
			{ title: "Vision & Mission | Oasis Fajr Contracting" },
			{
				name: "description",
				content: "Oasis Fajr's vision and mission: uncompromising quality, integrity and the safest possible working environment."
			},
			{
				property: "og:title",
				content: "Vision & Mission | Oasis Fajr Contracting"
			},
			{
				property: "og:description",
				content: "Uncompromising quality, integrity and safety on every project."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:url",
				content: "/vision"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Vision & Mission | Oasis Fajr Contracting"
			},
			{
				name: "twitter:description",
				content: "Uncompromising quality, integrity and safety on every project."
			}
		],
		links: [{
			rel: "canonical",
			href: "/vision"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var rootRouteChildren = {
	IndexRoute: Route$9.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$10
	}),
	CompanyRoute: Route$8.update({
		id: "/company",
		path: "/company",
		getParentRoute: () => Route$10
	}),
	ContactRoute: Route$7.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$10
	}),
	GalleryRoute: Route$6.update({
		id: "/gallery",
		path: "/gallery",
		getParentRoute: () => Route$10
	}),
	IntroductionRoute: Route$5.update({
		id: "/introduction",
		path: "/introduction",
		getParentRoute: () => Route$10
	}),
	OrganizationRoute: Route$4.update({
		id: "/organization",
		path: "/organization",
		getParentRoute: () => Route$10
	}),
	ProjectsRoute: Route$3.update({
		id: "/projects",
		path: "/projects",
		getParentRoute: () => Route$10
	}),
	SafetyRoute: Route$2.update({
		id: "/safety",
		path: "/safety",
		getParentRoute: () => Route$10
	}),
	SpecializationRoute: Route$1.update({
		id: "/specialization",
		path: "/specialization",
		getParentRoute: () => Route$10
	}),
	VisionRoute: Route.update({
		id: "/vision",
		path: "/vision",
		getParentRoute: () => Route$10
	})
};
var routeTree = Route$10._addFileChildren(rootRouteChildren)._addFileTypes();
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
