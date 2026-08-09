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
  iconName: "home" | "wrench" | "flame" | "camera" | "construction";
  services: string[];
  gallery?: { imageId: string; alt: string }[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "home-renovations",
    id: "installations-renovations",
    title: "Renovations & Home Extensions",
    metaTitle: "Home Renovation Plumbing Perth & Fremantle",
    metaDescription:
      "Plumbing for bathroom, kitchen and laundry renovations, extensions and new builds across Fremantle and Perth. Vanity installs, wall chasing and concrete cutting. Free quotes.",
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
      "New Bathroom Plumbing",
      "New Kitchen Plumbing",
      "Laundry Plumbing Installations",
      "Dishwasher & Washing Machine Plumbing",
    ],
  },
  {
    slug: "blocked-drains",
    id: "emergency-blockages",
    title: "Blocked Drains & CCTV Camera Inspections",
    metaTitle: "Blocked Drains & CCTV Inspections Fremantle & Perth",
    metaDescription:
      "Fast blocked drain clearing and CCTV camera inspections across Fremantle, southern suburbs and Perth. Diagnose and clear blockages, tree roots and pipe damage with specialised equipment. Free quotes.",
    desc: "Fast, reliable response when you need it most. We use specialised equipment and CCTV drain cameras to clear blockages and see exactly what's happening underground before you dig.",
    whyUs:
      "A blocked drain rarely stays a small problem for long, and guessing what's causing it leads to unnecessary digging. We carry both drain clearing equipment and CCTV inspection cameras on every vehicle, so most jobs are diagnosed and fixed in a single visit.",
    imageId: "Drain_Cleaning_yytgkv",
    imageAlt: "Unblocking a urinal waste pipe in a plumbing duct",
    iconName: "wrench",
    services: [
      "Blocked Toilets",
      "Blocked Showers",
      "Blocked Basins",
      "Blocked Sinks",
      "Blocked Stormwater Drains",
      "Tree Root Removal",
      "Drain Jetting",
      "CCTV Drain Camera Inspections",
      "Pipe & Drain Locating",
      "Blockage & Tree Root Diagnosis",
      "Pre-Purchase Drain Inspections",
      "Sewer Line Camera Inspections",
      "Stormwater Drain Inspections",
    ],
    gallery: [
      {
        imageId: "Drain_Camera_u6ns9r",
        alt: "Skilled Plumbing Services technician setting up a CCTV drain camera inspection",
      },
      {
        imageId: "IMG_1194_cvyz0e",
        alt: "Drain clearing machine set up ready to clear a blocked drain",
      },
    ],
  },
  {
    slug: "hot-water-repairs",
    id: "hot-water",
    title: "Hot Water",
    metaTitle: "Hot Water System Repairs & Installation Fremantle & Perth",
    metaDescription:
      "Hot water system repairs, servicing and installation across Fremantle and Perth. Continuous flow, heat pump, gas and electric systems. Honest advice, free quotes.",
    desc: "From continuous flow units to heat pumps, we install, service and repair every type of hot water system. Fast response when you're left without hot water.",
    whyUs:
      "We work on all hot water system types and brands, so you get honest advice on whether to repair or replace, not just a sales pitch for a new unit.",
    imageId: "6F8045C7-B260-492E-8E8E-3CF72CF4C0A0_1_105_c_bbw5dd",
    iconName: "wrench",
    services: [
      "Continuous Flow / Instantaneous Hot Water Installation",
      "Heat Pump Hot Water Installation",
      "Gas Hot Water System Repairs & Replacement",
      "Electric Hot Water System Repairs & Replacement",
      "Solar Hot Water System Repairs",
      "Hot Water System Servicing & Maintenance",
      "Anode Replacement",
      "Emergency No Hot Water Repairs",
    ],
    gallery: [
      {
        imageId: "AA8950E0-47D5-496C-AAE4-F69D07FE869D_1_105_c_mtk8ri",
        alt: "Newly installed Thermann electric hot water storage tank",
      },
      {
        imageId: "440C72C4-4F27-4869-9816-D2CEF77E6715_1_105_c_ymimsl",
        alt: "Wilson SuperX instantaneous electric hot water unit installed on a wall",
      },
      {
        imageId: "3017654F-7D23-483B-8AEC-1AF0027E6597_1_105_c_xuksxe",
        alt: "Gas storage hot water system installed against a house wall",
      },
      {
        imageId: "gas1_xlsd4z",
        alt: "Rheem continuous flow gas hot water unit installed on a brick wall",
      },
      {
        imageId: "B26F9834-9A6E-4119-A236-A771B4C5144E_1_105_c_p8vzb7",
        alt: "Rheem gas continuous flow hot water unit with copper pipework",
      },
    ],
  },
  {
    slug: "maintenance-repairs",
    id: "general-maintenance",
    title: "Maintenance Plumbing & Repairs",
    metaTitle: "Plumbing Maintenance & Repairs Fremantle & Perth",
    metaDescription:
      "General plumbing repairs and maintenance across Fremantle and Perth. Leaking taps, toilet repairs, reticulation fixes, burst pipes and real estate property maintenance. Free quotes.",
    desc: "Don't let minor leaks turn into major headaches. We handle all the day-to-day plumbing fixes to keep Fremantle and Perth homes running efficiently.",
    whyUs:
      "Most repair jobs are quoted honestly on the spot, with no more than what's needed to fix the problem properly. We stock common parts on the truck to get you sorted in one visit where possible.",
    imageId: "general_repairs_1_aoxt4g",
    iconName: "wrench",
    services: [
      "Leaking Taps",
      "General Tap & Tapware Repairs",
      "Toilet Repairs & Replacements",
      "Reticulation (Retic) Repairs",
      "Burst Pipe Repairs",
      "Garden Tap Repairs & Replacement",
      "Toilet Cistern Repairs",
      "Real Estate & Rental Property Maintenance",
    ],
  },
  {
    slug: "gas-fitting",
    id: "gas-hot-water",
    title: "Gas Fitting",
    metaTitle: "Gas Fitting Fremantle & Perth | Licensed Gas Fitter",
    metaDescription:
      "Licensed gas fitting across Fremantle and Perth: appliance installs, general gas fitting and gas meter relocations to Australian standards. Free quotes.",
    desc: "Gas can be dangerous if appliances are not installed appropriately and by a qualified gas fitter. We install ALL gas appliances as per the manufacturer's guidelines and the Australian standards. This ensures that every single customer is safe when using their new appliance and can have absolute peace of mind that no corners were cut in the process.",
    whyUs:
      "Gas work is licensed for a reason. Every installation is certified and compliant, so you're covered by insurance and by the manufacturer's warranty.",
    imageId: "04B541F2-3159-4786-BA27-7A33486AC600_1_105_c_bfqsiu",
    imageAlt: "Testing gas pressure on a hot water system with a digital gauge",
    iconName: "flame",
    services: [
      "Hot Water Systems (Install & Repair)",
      "General Gas Fitting",
      "Gas Meter Relocations",
      "Gas Cooktop Installation & Replacement",
      "Gas Leak Detection & Repairs",
      "Gas Heater Installation & Servicing",
      "Gas Appliance Compliance Certificates",
    ],
    gallery: [
      {
        imageId: "53B48619-769E-45D9-AE1E-8620CAE716B5_1_105_c_azk9dh",
        alt: "New copper gas pipe outlet installed on a wall",
      },
      {
        imageId: "IMG_4313_qdudkz",
        alt: "Digging a trench for a new gas line installation near the gas meter",
      },
      {
        imageId: "F19FDD26-BD51-4F9A-AC08-A79DB215E81D_1_105_c_nt6edv",
        alt: "Testing gas pressure on a cooktop gas line under the cabinet",
      },
    ],
  },
  {
    slug: "commercial-plumbing",
    id: "commercial-plumbing",
    title: "Commercial Plumbing",
    metaTitle: "Commercial & Construction Plumbing Fremantle & Perth",
    metaDescription:
      "Ground-up construction plumbing for Fremantle and Perth builders, plus RPZD backflow testing, fire services and commercial fit-outs. High-rise, hospitality and healthcare plumbing. Free quotes.",
    desc: "Ground-up construction plumbing, high-capacity gas fitting and full-service commercial solutions for Fremantle and Perth builders and businesses — from pre-lays and trenched drainage to backflow compliance testing and fit-outs.",
    whyUs:
      "Skilled Plumbing Services works across the full lifecycle of a commercial project, from pre-lays and trenched drain installation on a new build through to scheduled backflow testing and ongoing maintenance. Builders can bring us in for ground-up construction plumbing, not just the finishing trades, with capability across high-rise apartments, hospitality, healthcare, laboratory and retail fit-outs. Businesses also get minimal disruption to daily operations and the compliance paperwork required for backflow and fire service testing.",
    imageId: "commerical_gzrzhn",
    iconName: "construction",
    services: [
      "Sewer & Stormwater Pre-Lay & Elevated Drainage Installation",
      "Deep Sewer Installation",
      "Carpark Stormwater Installation & Civils",
      "High-Rise & Multi-Storey Apartment Plumbing",
      "Backflow Installation, Testing & Servicing (RPZD)",
      "Fire Service Installation",
      "Hospital-Grade Thermostatic Mixing Valve (TMV) & Tapware Installation/Testing",
      "Commercial Gas Fitting - Catering Equipment/Kitchens",
      "Hospitality & Retail Fit-Outs (Cafes, Bars, Butchers)",
      "Healthcare, Laboratory & Shopping Centre Plumbing",
      "Trade Waste & Grease Trap Installations",
      "Strata & Body Corporate Plumbing Maintenance",
      "Commercial Hot Water Systems",
      "Commercial Drain Clearing & CCTV Inspections",
      "Remote Area Works (Mining)",
    ],
  },
];
