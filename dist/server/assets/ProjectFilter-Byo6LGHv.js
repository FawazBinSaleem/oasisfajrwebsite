import { jsx } from "react/jsx-runtime";
//#region src/components/ProjectFilter.tsx
function ProjectFilter({ options, active, onChange, label }) {
	const all = ["All", ...options];
	return /* @__PURE__ */ jsx("div", {
		role: "group",
		"aria-label": label,
		className: "flex flex-wrap gap-2",
		children: all.map((option) => {
			const isActive = option === active;
			return /* @__PURE__ */ jsx("button", {
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
