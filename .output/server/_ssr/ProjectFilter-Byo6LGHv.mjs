import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProjectFilter-Byo6LGHv.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectFilter({ options, active, onChange, label }) {
	const all = ["All", ...options];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "group",
		"aria-label": label,
		className: "flex flex-wrap gap-2",
		children: all.map((option) => {
			const isActive = option === active;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-pressed": isActive,
				onClick: () => onChange(option),
				className: `border px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.14em] transition-colors ${isActive ? "border-ink bg-ink text-ink-foreground" : "border-border bg-transparent text-muted-foreground hover:border-primary hover:text-primary-dark"}`,
				children: option
			}, option);
		})
	});
}
//#endregion
export { ProjectFilter as t };
