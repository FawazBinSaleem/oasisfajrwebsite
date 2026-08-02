import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/ProjectCard.tsx
function ProjectCard({ project, onSelect, priority = false }) {
	return /* @__PURE__ */ jsxs("article", {
		className: "group flex h-full flex-col border border-border bg-card",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative aspect-[4/3] overflow-hidden bg-sand",
			children: [/* @__PURE__ */ jsx("img", {
				src: project.coverImage,
				alt: `${project.title} — Oasis Fajr project in ${project.location}`,
				loading: priority ? "eager" : "lazy",
				decoding: "async",
				className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
			}), /* @__PURE__ */ jsx("span", {
				className: "absolute left-0 top-0 bg-ink px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-ink-foreground",
				children: project.status
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex flex-1 flex-col p-5 lg:p-6",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground",
					children: project.location
				}),
				/* @__PURE__ */ jsx("h3", {
					className: "mt-2 text-lg leading-snug",
					children: project.title
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-3 text-xs uppercase tracking-[0.12em] text-primary-dark",
					children: project.category.join(" · ")
				}),
				/* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: () => onSelect(project),
					className: "mt-5 self-start border-b border-foreground/30 pb-0.5 text-xs font-bold uppercase tracking-[0.14em] hover:border-primary hover:text-primary-dark",
					children: "View Project"
				})
			]
		})]
	});
}
//#endregion
//#region src/data/projects.ts
var projectCategories = [
	"Civil",
	"Mechanical",
	"Electrical",
	"Fit-Out",
	"Maintenance",
	"Landscaping"
];
var covers = [
	"/media/IMG-20190409-WA0022.jpg",
	"/media/IMG-20180912-WA0043.jpg",
	"/media/IMG-20171211-WA0021.jpg",
	"/media/IMG-20190108-WA0007.jpg",
	"/media/IMG-20180808-WA0034.jpg",
	"/media/IMG-20190404-WA0011 - Copy.jpg",
	"/media/IMG-20180912-WA0046.jpg",
	"/media/IMG-20171211-WA0027.jpg",
	"/media/20190423_071022.jpg",
	"/media/IMG-20180531-WA0004.jpg",
	"/media/IMG-20190107-WA0008.jpg",
	"/media/IMG-20180909-WA0043.jpg"
];
var slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 70);
function categorise(text) {
	const t = text.toLowerCase();
	const out = /* @__PURE__ */ new Set();
	if (/(concrete|block|steel|shuttering|civil|building|structure|barrier|interlock|curb|foundation|coring|slab|masonry)/.test(t)) out.add("Civil");
	if (/(gas|pipe|hvac|duct|insulation|plumb|water|pump|fire|mechanical|tank|exhaust|irrigation)/.test(t)) out.add("Mechanical");
	if (/(electric|cctv|panel|sub-station|substation|lighting|fiber|public address|low current|cabinet)/.test(t)) out.add("Electrical");
	if (/(gypsum|ceiling|partition|fit out|fit-out|finishing|decoration|show ?room|ceramic|flooring|paint|renovation|toilet|joinery)/.test(t)) out.add("Fit-Out");
	if (/(maintenance|repair|signage|upkeep)/.test(t)) out.add("Maintenance");
	if (/(landscap|hardscape|softscape|planting|garden|gazebo|walkway|interlock|curb|fountain|swimming pool)/.test(t)) out.add("Landscaping");
	if (out.size === 0) out.add("Civil");
	return [...out];
}
function locationOf(text) {
	const t = text.toLowerCase();
	if (t.includes("riyadh")) return "Riyadh, Saudi Arabia";
	if (t.includes("kharj")) return "Al Kharj, Saudi Arabia";
	return "Kingdom of Saudi Arabia";
}
function build(records, status, offset = 0) {
	return records.map((r, i) => {
		const text = `${r.client} ${r.scope}`;
		return {
			slug: slugify(`${r.client}-${r.scope}`) || `project-${offset + i}`,
			title: r.scope,
			location: locationOf(text),
			category: categorise(text),
			status,
			clientLabel: r.client,
			summary: `${r.scope} carried out for ${r.client}.`,
			scope: [r.scope],
			coverImage: covers[(offset + i) % covers.length],
			images: [covers[(offset + i) % covers.length]]
		};
	});
}
var completedRecords = [
	{
		client: "Abunayyan Electric Group",
		scope: "CCTV camera installation in warehouses"
	},
	{
		client: "SEDER Group",
		scope: "SAMA toilets renovation work"
	},
	{
		client: "CCE Contracting",
		scope: "Al-Rajhi Tower electrical panel installation"
	},
	{
		client: "ASAD SAID Contracting",
		scope: "Sub-station structural and electrical works"
	},
	{
		client: "Saudi Bin Ladin Group",
		scope: "KSU — steel, shuttering and concreting work"
	},
	{
		client: "Jabil Najah Group",
		scope: "Block works, ARAMCO Riyadh"
	},
	{
		client: "J&P Contracting",
		scope: "Al-Bustan Housing block works"
	},
	{
		client: "South Korea (SK) Engineering",
		scope: "Ceramic flooring on ARAMCO housing project, Riyadh"
	},
	{
		client: "Al-Rashid Trading & Contracting Co Ltd — Riyadh, K.S.A.",
		scope: "Supply and installation of gypsum ceiling works at KFMC Riyadh"
	},
	{
		client: "Coca-Cola Company",
		scope: "Civil maintenance works and signage repairing at the Coca-Cola Riyadh plant"
	},
	{
		client: "Oroba East Trading",
		scope: "Show room and offices at BILDA shopping center"
	},
	{
		client: "SEDER Group",
		scope: "Supply and installation of New Jersey concrete barriers, Seder Village Riyadh"
	},
	{
		client: "M&M Company",
		scope: "Gas pipelines with complete system from gas storage area to kitchen hall at HRH Mohammad bin Fhad bin Abdul Aziz Palace, Riyadh"
	},
	{
		client: "M&M Company",
		scope: "New fiber insulation installation to roof ducts of 12 buildings at HRH Mohammad bin Fhad bin Abdul Aziz Palace, Riyadh"
	},
	{
		client: "AMAQ Contracting Company",
		scope: "Gypsum walls and ceiling works for Riyad Bank at Takhassusi, Riyadh"
	},
	{
		client: "Al-Hammadi Hospital Construction Management Group",
		scope: "False ceiling and ceramic flooring on Hammadi Hospital project, Suwaidi Riyadh"
	},
	{
		client: "SUBGATE Interior Design Company",
		scope: "Finishing works for GODIVA, Tanagara and Baby Dior show room project, Riyadh"
	},
	{
		client: "AMAQ Construction Company",
		scope: "Dry wall partition work and gypsum ceiling work for Riyad Bank project, Olaya Riyadh"
	},
	{
		client: "MASKAN Arabia",
		scope: "Gypsum wall and gypsum ceiling works at FUND project, Riyadh"
	},
	{
		client: "Molaim Contracting Company",
		scope: "Gypsum wall and gypsum ceiling works for all six floors of Riyad Bank cooperative offices"
	},
	{
		client: "Seadan Real Estate",
		scope: "Concrete works for SRD Hotel project of Marriott"
	},
	{
		client: "Apparel UAE",
		scope: "INGLOT show rooms at Salam Mall, Shahra Mall and Othaim Mall"
	},
	{
		client: "AZDHAR Real Estate",
		scope: "Gypsum, paint and ceramic works for Azdhar housing compound — 300 apartments"
	},
	{
		client: "Road Burger",
		scope: "Restaurant chain outlet at Al Kharj"
	},
	{
		client: "LONAZE Beauty Clinic",
		scope: "Music and public address system, Riyadh"
	},
	{
		client: "ATS Contracting Company",
		scope: "ELM Head Quarter — complete gypsum works, 21,000 m²"
	},
	{
		client: "ATS Contracting Company",
		scope: "ELM Head Quarter — finishing works at lobbies"
	},
	{
		client: "DESIGNLAB",
		scope: "Renovation works at MOYA Water Company"
	},
	{
		client: "DESIGNLAB",
		scope: "Renovation work at Circle Restaurant, Riyadh"
	},
	{
		client: "KEIRCOM Company",
		scope: "Head office renovation works"
	},
	{
		client: "C&P Contracting Company",
		scope: "Gypsum works for Ministry of Information head office"
	},
	{
		client: "Arial Construction Company",
		scope: "Gypsum works on Al Faisaliah Tower, Riyadh"
	},
	{
		client: "Arial Construction Company",
		scope: "Gypsum work at metro stations H1 & K1"
	},
	{
		client: "RMZ Contracting Company",
		scope: "Renovation works at Sigal Dental Clinic"
	},
	{
		client: "Mohit Al Mamar Company",
		scope: "Renovation works at Basmat Narjis Clinic"
	},
	{
		client: "Star Wedding Company",
		scope: "VIP toilet and kitchen building for marriage hall"
	},
	{
		client: "Strong Line Construction",
		scope: "Fit out works for Shawarmer restaurant, Malqa Riyadh"
	},
	{
		client: "Strong Line Construction",
		scope: "Fit out works for Shawarmer restaurant, Andalus Riyadh"
	},
	{
		client: "Strong Line Construction",
		scope: "Fit out works for Al Finar restaurant, Takhassusi Riyadh"
	},
	{
		client: "Strong Line Construction",
		scope: "Fit out works for Charcozi restaurant, Exit 7 Riyadh"
	},
	{
		client: "Strong Line Construction",
		scope: "Fit out works for Al Awani restaurant, Takhassusi Riyadh"
	},
	{
		client: "Middle Sea Telecom",
		scope: "STC fiber optic networks, 4 cabinets in West Riyadh"
	},
	{
		client: "Alrugaib Group Company",
		scope: "Villa 1 — roof ducts fabric installation for Alrugaib Villas"
	},
	{
		client: "Mithaq Contracting Company",
		scope: "LPG tanks concrete works for Alrugaib Villas project"
	},
	{
		client: "Mithaq Contracting Company",
		scope: "Water fountain wall concrete works for Alrugaib Villas project"
	},
	{
		client: "Mithaq Contracting Company",
		scope: "Builder works for Villas 2, 4 and 5, Alrugaib Villas project"
	},
	{
		client: "Al Tala Commercial Building",
		scope: "Curb stone and interlock works"
	},
	{
		client: "SACO Show Room",
		scope: "Gypsum work with AMAQ Construction Company, Riyadh"
	},
	{
		client: "Civil Earth Construction",
		scope: "Interlock and curb stone works, Al Ghaidir Hotel Riyadh"
	},
	{
		client: "SEDER Group Company",
		scope: "Security gate works at SAMA head office"
	}
];
var ongoingRecords = [
	{
		client: "Alrugaib Group Company",
		scope: "Villa 3 — swimming pool concrete work"
	},
	{
		client: "Alrugaib Group Company",
		scope: "Concrete work for hardscape area"
	},
	{
		client: "Alrugaib Group Company",
		scope: "Gazebo concrete work, Villas project"
	},
	{
		client: "Alrugaib Group Company",
		scope: "Ceramic and roof tiles for Alrugaib Villas project"
	},
	{
		client: "Private Palace",
		scope: "Gypsum works for Khalid Bin Qarar — 4 villas and palace"
	},
	{
		client: "SHAHRAHA Mall",
		scope: "New cafeteria area — civil and finishing works"
	},
	{
		client: "SHAHRAHA Mall",
		scope: "Fit out works for garbage room"
	},
	{
		client: "SHAHRAHA Mall",
		scope: "Coring in concrete slabs for central fire exhaust fan system"
	},
	{
		client: "SHAHRAHA Mall",
		scope: "Irrigation water tanks concrete works"
	},
	{
		client: "SHAHRAHA Mall",
		scope: "Concrete foundation for sign boards"
	},
	{
		client: "NOON",
		scope: "Civil, electrical, mechanical and fit out works in NOON warehouses across the Kingdom"
	},
	{
		client: "NOON Dark Stores",
		scope: "Civil, electrical, mechanical and fit out works in Riyadh"
	}
];
var ongoingProjects = build(ongoingRecords, "Ongoing");
var completedProjects = build(completedRecords, "Completed", ongoingRecords.length);
var allProjects = [...ongoingProjects, ...completedProjects];
/** Hand-picked cards for the homepage. */
var featuredProjects = [
	ongoingProjects.find((p) => p.clientLabel === "NOON"),
	completedProjects.find((p) => p.title.startsWith("ELM Head Quarter — complete")),
	completedProjects.find((p) => p.title.startsWith("Civil maintenance works")),
	completedProjects.find((p) => p.title.startsWith("Concrete works for SRD")),
	ongoingProjects.find((p) => p.title.startsWith("Concrete work for hardscape")),
	completedProjects.find((p) => p.title.startsWith("Gypsum works on Al Faisaliah"))
].filter(Boolean);
//#endregion
export { ProjectCard as i, featuredProjects as n, projectCategories as r, allProjects as t };
