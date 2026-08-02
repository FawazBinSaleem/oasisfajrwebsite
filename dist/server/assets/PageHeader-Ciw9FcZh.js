import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/PageHeader.tsx
function PageHeader({ eyebrow, title, intro }) {
	return /* @__PURE__ */ jsx("section", {
		className: "border-b border-border bg-sand",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "eyebrow",
					children: eyebrow
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "mt-3 max-w-3xl text-4xl leading-[1.05] sm:text-5xl lg:text-6xl",
					children: title
				}),
				intro && /* @__PURE__ */ jsx("p", {
					className: "mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg",
					children: intro
				})
			]
		})
	});
}
function Section({ children, className = "" }) {
	return /* @__PURE__ */ jsx("section", {
		className: `mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20 ${className}`,
		children
	});
}
//#endregion
export { Section as n, PageHeader as t };
