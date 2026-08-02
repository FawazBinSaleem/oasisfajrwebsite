import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/PageHero.tsx
function PageHero({ eyebrow, title, intro, image, imageAlt, children }) {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative overflow-hidden bg-ink text-ink-foreground",
		children: [image && /* @__PURE__ */ jsx("img", {
			src: image,
			alt: imageAlt ?? "",
			className: "absolute inset-0 h-full w-full object-cover opacity-25",
			loading: "eager",
			decoding: "async"
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8 lg:py-28",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "eyebrow text-primary",
					children: eyebrow
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "mt-4 max-w-4xl text-[2.25rem] leading-[1.05] sm:text-5xl lg:text-6xl",
					children: title
				}),
				intro && /* @__PURE__ */ jsx("p", {
					className: "mt-6 max-w-2xl text-base leading-relaxed text-ink-foreground/75 sm:text-lg",
					children: intro
				}),
				children && /* @__PURE__ */ jsx("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children
				})
			]
		})]
	});
}
function Section({ children, className = "", id }) {
	return /* @__PURE__ */ jsx("section", {
		id,
		className: `mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20 ${className}`,
		children
	});
}
//#endregion
export { Section as n, PageHero as t };
