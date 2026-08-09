export type ServiceCategory = {
  slug: string;
  id: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  desc: string;
  whyUs: string;
  imageId: string;
  imageAlt?: string;
  iconName: "home" | "wrench" | "flame" | "camera";
  services: string[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "home-renovations",
    id: "installations-renovations",
    title: "Renovations & Home Extensions",
    metaTitle: "Home Renovation Plumbing Perth",
    metaDescription:
      "Plumbing for bathroom, kitchen and laundry renovations, extensions and new builds across Perth. Vanity installs, wall chasing and concrete cutting. Free quotes.",
    desc: "From minor bathroom updates to complete structural plumbing for new builds. We work with you to ensure perfect placement and flawless finishes.",
    whyUs:
      "Renovations depend on getting rough-in plumbing right the first time. We work directly with your builder or trades to plan pipe runs before walls close up, so there are no costly reworks down the line.",
    imageId: "IMG_1969_mxa5nx",
    iconName: "home",
    services: [
      "Vanity Hanging & Installation",
      "Home Renovations",
      "Extensions & Additions",
      "Wall Chasing & Concrete Cutting",
    ],
  },
  {
    slug: "blocked-drains",
    id: "emergency-blockages",
    title: "Blocked Drains",
    metaTitle: "Blocked Drains Perth",
    metaDescription:
      "Fast, reliable blocked drain clearing across Perth. Blocked toilets, showers, basins and sinks cleared with specialised equipment. Free quotes.",
    desc: "Fast, reliable response when you need it most. We only use the highest quality equipment to ensure all blockages are cleared with ease.",
    whyUs:
      "A blocked drain rarely stays a small problem for long. We carry drain clearing equipment on every vehicle so most blockages are cleared in a single visit, without guesswork.",
    imageId: "Drain_Cleaning_yytgkv",
    imageAlt: "Unblocking a urinal waste pipe in a plumbing duct",
    iconName: "wrench",
    services: [
      "Blocked Toilets",
      "Blocked Showers",
      "Blocked Basins",
      "Blocked Sinks",
    ],
  },
  {
    slug: "cctv-drain-camera",
    id: "cctv-drain-camera",
    title: "CCTV Drain Camera Inspections & Locating",
    metaTitle: "CCTV Drain Camera Inspections Perth",
    metaDescription:
      "CCTV drain camera inspections and pipe locating across Perth. Diagnose blockages, tree root intrusion and pipe damage without digging. Free quotes.",
    desc: "See exactly what's happening underground before you dig. Our CCTV drain camera pinpoints blockages, cracks, tree root intrusion and misaligned pipes, and we can locate the exact position and depth of any pipe on your property.",
    whyUs:
      "Guessing where a pipe runs or what's actually blocking it leads to unnecessary digging and wasted cost. Camera inspection shows you the exact problem and its location first, so any repair work that follows is targeted and quoted accurately.",
    imageId: "general_repairs_1_aoxt4g",
    iconName: "camera",
    services: [
      "CCTV Drain Camera Inspections",
      "Pipe & Drain Locating",
      "Blockage & Tree Root Diagnosis",
      "Pre-Purchase Drain Inspections",
    ],
  },
  {
    slug: "hot-water-repairs",
    id: "general-maintenance",
    title: "Hot Water, Maintenance & General Repairs",
    metaTitle: "Hot Water Systems & Plumbing Repairs Perth",
    metaDescription:
      "Hot water system repairs, replacement and servicing, leaking taps, toilet repairs and reticulation fixes across Perth. Honest advice, free quotes.",
    desc: "Don't let minor leaks turn into major headaches. We handle all the day-to-day plumbing fixes to keep your home running efficiently.",
    whyUs:
      "Most hot water and general repair jobs are quoted honestly on the spot, with no more than what's needed to fix the problem properly. We stock common parts on the truck to get you sorted in one visit where possible.",
    imageId: "6F8045C7-B260-492E-8E8E-3CF72CF4C0A0_1_105_c_bbw5dd",
    iconName: "wrench",
    services: [
      "Leaking Taps",
      "General Tap & Tapware Repairs",
      "Toilet Repairs & Replacements",
      "Reticulation (Retic) Repairs",
      "Hot Water System Repairs, Replacement & Servicing",
      "Burst Pipe Repairs",
    ],
  },
  {
    slug: "gas-fitting",
    id: "gas-hot-water",
    title: "Gas Fitting",
    metaTitle: "Gas Fitting Perth | Licensed Gas Fitter",
    metaDescription:
      "Licensed gas fitting across Perth: appliance installs, general gas fitting and gas meter relocations to Australian standards. Free quotes.",
    desc: "Gas can be dangerous if appliances are not installed appropriately and by a qualified gas fitter. We install ALL gas appliances as per the manufacturer's guidelines and the Australian standards. This ensures that every single customer is safe when using their new appliance and can have absolute peace of mind that no corners were cut in the process.",
    whyUs:
      "Gas work is licensed for a reason. Every installation is certified and compliant, so you're covered by insurance and by the manufacturer's warranty.",
    imageId: "gas5_zvufds",
    iconName: "flame",
    services: [
      "Hot Water Systems (Install & Repair)",
      "General Gas Fitting",
      "Gas Meter Relocations",
    ],
  },
];
