import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/SectionHeading.tsx
function SectionHeading({ eyebrow, title, intro, onDark = false, align = "left", as: As = "h2" }) {
	return /* @__PURE__ */ jsxs("div", {
		className: align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-3xl",
		children: [
			eyebrow && /* @__PURE__ */ jsx("p", {
				className: `eyebrow ${onDark ? "text-primary" : "text-muted-foreground"}`,
				children: eyebrow
			}),
			/* @__PURE__ */ jsx(As, {
				className: "mt-3 text-3xl leading-[1.1] sm:text-4xl lg:text-[2.75rem]",
				children: title
			}),
			intro && /* @__PURE__ */ jsx("p", {
				className: `mt-5 text-base leading-relaxed ${onDark ? "text-ink-foreground/75" : "text-muted-foreground"}`,
				children: intro
			})
		]
	});
}
//#endregion
export { SectionHeading as t };
