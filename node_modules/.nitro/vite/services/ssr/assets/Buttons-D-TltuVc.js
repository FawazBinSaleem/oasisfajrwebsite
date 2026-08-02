import { Link } from "@tanstack/react-router";
import { jsx } from "react/jsx-runtime";
//#region src/components/Buttons.tsx
var base = "inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] transition-colors duration-200";
function Shell({ to, hash, href, onClick, type, className, children, ...rest }) {
	if (to) return /* @__PURE__ */ jsx(Link, {
		to,
		...hash ? { hash } : {},
		className,
		onClick,
		...rest,
		children
	});
	if (href) return /* @__PURE__ */ jsx("a", {
		href,
		className,
		onClick,
		...rest,
		children
	});
	return /* @__PURE__ */ jsx("button", {
		type: type ?? "button",
		className,
		onClick,
		...rest,
		children
	});
}
function PrimaryButton(props) {
	return /* @__PURE__ */ jsx(Shell, {
		...props,
		className: `${base} bg-primary text-primary-foreground hover:bg-primary-dark hover:text-background ${props.className ?? ""}`
	});
}
function SecondaryButton(props) {
	const tone = props.onDark ? "border border-ink-foreground/35 text-ink-foreground hover:border-primary hover:text-primary" : "border border-border text-foreground hover:border-primary hover:text-primary-dark";
	return /* @__PURE__ */ jsx(Shell, {
		...props,
		className: `${base} ${tone} ${props.className ?? ""}`
	});
}
//#endregion
export { SecondaryButton as n, PrimaryButton as t };
