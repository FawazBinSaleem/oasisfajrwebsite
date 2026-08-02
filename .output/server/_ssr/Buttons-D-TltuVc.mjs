import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Buttons-D-TltuVc.js
var import_jsx_runtime = require_jsx_runtime();
var base = "inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] transition-colors duration-200";
function Shell({ to, hash, href, onClick, type, className, children, ...rest }) {
	if (to) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		...hash ? { hash } : {},
		className,
		onClick,
		...rest,
		children
	});
	if (href) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		className,
		onClick,
		...rest,
		children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: type ?? "button",
		className,
		onClick,
		...rest,
		children
	});
}
function PrimaryButton(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, {
		...props,
		className: `${base} bg-primary text-primary-foreground hover:bg-primary-dark hover:text-background ${props.className ?? ""}`
	});
}
function SecondaryButton(props) {
	const tone = props.onDark ? "border border-ink-foreground/35 text-ink-foreground hover:border-primary hover:text-primary" : "border border-border text-foreground hover:border-primary hover:text-primary-dark";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, {
		...props,
		className: `${base} ${tone} ${props.className ?? ""}`
	});
}
//#endregion
export { SecondaryButton as n, PrimaryButton as t };
