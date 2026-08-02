import { t as company } from "./company-CM46kbbq.mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as SecondaryButton, t as PrimaryButton } from "./Buttons-D-TltuVc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ContactCTA-kXmgfHzy.js
var import_jsx_runtime = require_jsx_runtime();
function ContactCTA({ title = "Planning your next project?", body = "Speak with Oasis Fajr about your contracting, fit-out, maintenance, or project delivery requirements." }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-ink text-ink-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl sm:text-4xl",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-ink-foreground/75",
					children: body
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
					to: "/contact",
					children: "Request a Consultation"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SecondaryButton, {
					href: company.whatsapp,
					target: "_blank",
					rel: "noreferrer",
					onDark: true,
					children: "WhatsApp Us"
				})]
			})]
		})
	});
}
//#endregion
export { ContactCTA as t };
