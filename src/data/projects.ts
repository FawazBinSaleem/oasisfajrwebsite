/**
 * Project records. Every entry below is taken from the company's own project log.
 * Categories and cover images are editable metadata — nothing here invents
 * dates, values, or contract scopes.
 */

export type ProjectCategory =
  | "Civil"
  | "Mechanical"
  | "Electrical"
  | "Fit-Out"
  | "Maintenance"
  | "Landscaping";

export type Project = {
  slug: string;
  title: string;
  location: string;
  category: ProjectCategory[];
  status: "Completed" | "Ongoing";
  year?: string;
  clientLabel?: string;
  summary: string;
  scope: string[];
  coverImage: string;
  images: string[];
};

export const projectCategories: ProjectCategory[] = [
  "Civil",
  "Mechanical",
  "Electrical",
  "Fit-Out",
  "Maintenance",
  "Landscaping",
];

const covers: string[] = [
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
  "/media/IMG-20180909-WA0043.jpg",
];

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 70);

function categorise(text: string): ProjectCategory[] {
  const t = text.toLowerCase();
  const out = new Set<ProjectCategory>();
  if (
    /(concrete|block|steel|shuttering|civil|building|structure|barrier|interlock|curb|foundation|coring|slab|masonry)/.test(
      t,
    )
  )
    out.add("Civil");
  if (
    /(gas|pipe|hvac|duct|insulation|plumb|water|pump|fire|mechanical|tank|exhaust|irrigation)/.test(
      t,
    )
  )
    out.add("Mechanical");
  if (
    /(electric|cctv|panel|sub-station|substation|lighting|fiber|public address|low current|cabinet)/.test(
      t,
    )
  )
    out.add("Electrical");
  if (
    /(gypsum|ceiling|partition|fit out|fit-out|finishing|decoration|show ?room|ceramic|flooring|paint|renovation|toilet|joinery)/.test(
      t,
    )
  )
    out.add("Fit-Out");
  if (/(maintenance|repair|signage|upkeep)/.test(t)) out.add("Maintenance");
  if (
    /(landscap|hardscape|softscape|planting|garden|gazebo|walkway|interlock|curb|fountain|swimming pool)/.test(
      t,
    )
  )
    out.add("Landscaping");
  if (out.size === 0) out.add("Civil");
  return [...out];
}

function locationOf(text: string): string {
  const t = text.toLowerCase();
  if (t.includes("riyadh")) return "Riyadh, Saudi Arabia";
  if (t.includes("kharj")) return "Al Kharj, Saudi Arabia";
  return "Kingdom of Saudi Arabia";
}

function build(
  records: { client: string; scope: string }[],
  status: Project["status"],
  offset = 0,
): Project[] {
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
      coverImage: covers[(offset + i) % covers.length]!,
      images: [covers[(offset + i) % covers.length]!],
    };
  });
}

const completedRecords = [
  {
    client: "Abunayyan Electric Group",
    scope: "CCTV camera installation in warehouses",
  },
  { client: "SEDER Group", scope: "SAMA toilets renovation work" },
  {
    client: "CCE Contracting",
    scope: "Al-Rajhi Tower electrical panel installation",
  },
  {
    client: "ASAD SAID Contracting",
    scope: "Sub-station structural and electrical works",
  },
  {
    client: "Saudi Bin Ladin Group",
    scope: "KSU — steel, shuttering and concreting work",
  },
  { client: "Jabil Najah Group", scope: "Block works, ARAMCO Riyadh" },
  { client: "J&P Contracting", scope: "Al-Bustan Housing block works" },
  {
    client: "South Korea (SK) Engineering",
    scope: "Ceramic flooring on ARAMCO housing project, Riyadh",
  },
  {
    client: "Al-Rashid Trading & Contracting Co Ltd — Riyadh, K.S.A.",
    scope: "Supply and installation of gypsum ceiling works at KFMC Riyadh",
  },
  {
    client: "Coca-Cola Company",
    scope:
      "Civil maintenance works and signage repairing at the Coca-Cola Riyadh plant",
  },
  {
    client: "Oroba East Trading",
    scope: "Show room and offices at BILDA shopping center",
  },
  {
    client: "SEDER Group",
    scope:
      "Supply and installation of New Jersey concrete barriers, Seder Village Riyadh",
  },
  {
    client: "M&M Company",
    scope:
      "Gas pipelines with complete system from gas storage area to kitchen hall at HRH Mohammad bin Fhad bin Abdul Aziz Palace, Riyadh",
  },
  {
    client: "M&M Company",
    scope:
      "New fiber insulation installation to roof ducts of 12 buildings at HRH Mohammad bin Fhad bin Abdul Aziz Palace, Riyadh",
  },
  {
    client: "AMAQ Contracting Company",
    scope:
      "Gypsum walls and ceiling works for Riyad Bank at Takhassusi, Riyadh",
  },
  {
    client: "Al-Hammadi Hospital Construction Management Group",
    scope:
      "False ceiling and ceramic flooring on Hammadi Hospital project, Suwaidi Riyadh",
  },
  {
    client: "SUBGATE Interior Design Company",
    scope:
      "Finishing works for GODIVA, Tanagara and Baby Dior show room project, Riyadh",
  },
  {
    client: "AMAQ Construction Company",
    scope:
      "Dry wall partition work and gypsum ceiling work for Riyad Bank project, Olaya Riyadh",
  },
  {
    client: "MASKAN Arabia",
    scope: "Gypsum wall and gypsum ceiling works at FUND project, Riyadh",
  },
  {
    client: "Molaim Contracting Company",
    scope:
      "Gypsum wall and gypsum ceiling works for all six floors of Riyad Bank cooperative offices",
  },
  {
    client: "Seadan Real Estate",
    scope: "Concrete works for SRD Hotel project of Marriott",
  },
  {
    client: "Apparel UAE",
    scope: "INGLOT show rooms at Salam Mall, Shahra Mall and Othaim Mall",
  },
  {
    client: "AZDHAR Real Estate",
    scope:
      "Gypsum, paint and ceramic works for Azdhar housing compound — 300 apartments",
  },
  { client: "Road Burger", scope: "Restaurant chain outlet at Al Kharj" },
  {
    client: "LONAZE Beauty Clinic",
    scope: "Music and public address system, Riyadh",
  },
  {
    client: "ATS Contracting Company",
    scope: "ELM Head Quarter — complete gypsum works, 21,000 m²",
  },
  {
    client: "ATS Contracting Company",
    scope: "ELM Head Quarter — finishing works at lobbies",
  },
  { client: "DESIGNLAB", scope: "Renovation works at MOYA Water Company" },
  {
    client: "DESIGNLAB",
    scope: "Renovation work at Circle Restaurant, Riyadh",
  },
  { client: "KEIRCOM Company", scope: "Head office renovation works" },
  {
    client: "C&P Contracting Company",
    scope: "Gypsum works for Ministry of Information head office",
  },
  {
    client: "Arial Construction Company",
    scope: "Gypsum works on Al Faisaliah Tower, Riyadh",
  },
  {
    client: "Arial Construction Company",
    scope: "Gypsum work at metro stations H1 & K1",
  },
  {
    client: "RMZ Contracting Company",
    scope: "Renovation works at Sigal Dental Clinic",
  },
  {
    client: "Mohit Al Mamar Company",
    scope: "Renovation works at Basmat Narjis Clinic",
  },
  {
    client: "Star Wedding Company",
    scope: "VIP toilet and kitchen building for marriage hall",
  },
  {
    client: "Strong Line Construction",
    scope: "Fit out works for Shawarmer restaurant, Malqa Riyadh",
  },
  {
    client: "Strong Line Construction",
    scope: "Fit out works for Shawarmer restaurant, Andalus Riyadh",
  },
  {
    client: "Strong Line Construction",
    scope: "Fit out works for Al Finar restaurant, Takhassusi Riyadh",
  },
  {
    client: "Strong Line Construction",
    scope: "Fit out works for Charcozi restaurant, Exit 7 Riyadh",
  },
  {
    client: "Strong Line Construction",
    scope: "Fit out works for Al Awani restaurant, Takhassusi Riyadh",
  },
  {
    client: "Middle Sea Telecom",
    scope: "STC fiber optic networks, 4 cabinets in West Riyadh",
  },
  {
    client: "Alrugaib Group Company",
    scope: "Villa 1 — roof ducts fabric installation for Alrugaib Villas",
  },
  {
    client: "Mithaq Contracting Company",
    scope: "LPG tanks concrete works for Alrugaib Villas project",
  },
  {
    client: "Mithaq Contracting Company",
    scope: "Water fountain wall concrete works for Alrugaib Villas project",
  },
  {
    client: "Mithaq Contracting Company",
    scope: "Builder works for Villas 2, 4 and 5, Alrugaib Villas project",
  },
  {
    client: "Al Tala Commercial Building",
    scope: "Curb stone and interlock works",
  },
  {
    client: "SACO Show Room",
    scope: "Gypsum work with AMAQ Construction Company, Riyadh",
  },
  {
    client: "Civil Earth Construction",
    scope: "Interlock and curb stone works, Al Ghaidir Hotel Riyadh",
  },
  {
    client: "SEDER Group Company",
    scope: "Security gate works at SAMA head office",
  },
];

const ongoingRecords = [
  {
    client: "Alrugaib Group Company",
    scope: "Villa 3 — swimming pool concrete work",
  },
  {
    client: "Alrugaib Group Company",
    scope: "Concrete work for hardscape area",
  },
  {
    client: "Alrugaib Group Company",
    scope: "Gazebo concrete work, Villas project",
  },
  {
    client: "Alrugaib Group Company",
    scope: "Ceramic and roof tiles for Alrugaib Villas project",
  },
  {
    client: "Private Palace",
    scope: "Gypsum works for Khalid Bin Qarar — 4 villas and palace",
  },
  {
    client: "SHAHRAHA Mall",
    scope: "New cafeteria area — civil and finishing works",
  },
  { client: "SHAHRAHA Mall", scope: "Fit out works for garbage room" },
  {
    client: "SHAHRAHA Mall",
    scope: "Coring in concrete slabs for central fire exhaust fan system",
  },
  { client: "SHAHRAHA Mall", scope: "Irrigation water tanks concrete works" },
  { client: "SHAHRAHA Mall", scope: "Concrete foundation for sign boards" },
  {
    client: "NOON",
    scope:
      "Civil, electrical, mechanical and fit out works in NOON warehouses across the Kingdom",
  },
  {
    client: "NOON Dark Stores",
    scope: "Civil, electrical, mechanical and fit out works in Riyadh",
  },
];

export const ongoingProjects: Project[] = build(ongoingRecords, "Ongoing");
export const completedProjects: Project[] = build(
  completedRecords,
  "Completed",
  ongoingRecords.length,
);
export const allProjects: Project[] = [
  ...ongoingProjects,
  ...completedProjects,
];

/** Hand-picked cards for the homepage. */
export const featuredProjects: Project[] = [
  ongoingProjects.find((p) => p.clientLabel === "NOON")!,
  completedProjects.find((p) =>
    p.title.startsWith("ELM Head Quarter — complete"),
  )!,
  completedProjects.find((p) => p.title.startsWith("Civil maintenance works"))!,
  completedProjects.find((p) => p.title.startsWith("Concrete works for SRD"))!,
  ongoingProjects.find((p) =>
    p.title.startsWith("Concrete work for hardscape"),
  )!,
  completedProjects.find((p) =>
    p.title.startsWith("Gypsum works on Al Faisaliah"),
  )!,
].filter(Boolean);
