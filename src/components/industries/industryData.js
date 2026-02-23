// ─── Industry Data for OSCHK Hong Kong ───────────────────────────────────────
// Each industry reflects a real sector that commonly incorporates in Hong Kong.

export const industries = [
  {
    id: "trading-import-export",
    label: "Trading & Import/Export",
    tagline: "Gateway to global commerce through Asia's freest port",
    description:
      "Hong Kong's zero-tariff regime and world-class logistics infrastructure make it the premier hub for international trading companies. Enjoy seamless access to Mainland China and 100+ countries via bilateral trade agreements.",
    icon: (
      `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 16V8a2 2 0 012-2h1.5M3 16l3-3m-3 3l3 3M21 8v8a2 2 0 01-2 2h-1.5M21 8l-3 3m3-3l-3-3M8 6h8M8 18h8"/>
      </svg>`
    ),
    color: "blue",
    accentColor: "#2563EB",
    lightBg: "bg-blue-50",
    textColor: "text-blue-600",
    borderColor: "border-blue-200",
    services: ["Company Registration", "Business Registration Certificate", "Annual Services", "Tax Filing"],
    benefits: [
      "Zero import/export tariffs",
      "Simple tax regime — 16.5% profits tax",
      "World-class port & logistics",
      "Free flow of goods & capital",
    ],
    stats: { companies: "130,000+", growth: "8.2%", avgSetup: "3 days" },
    requirements: [
      "At least 1 director (any nationality)",
      "Registered Hong Kong address",
      "Company secretary",
      "Business Registration Certificate",
    ],
    faqs: [
      { q: "Can I trade internationally from HK?", a: "Yes — Hong Kong's free port status means zero tariffs on most goods, making it ideal for international trade." },
      { q: "Do I need a physical office?", a: "No. A registered address (which we provide) is sufficient for most trading companies." },
    ],
  },
  {
    id: "technology-startups",
    label: "Technology & Startups",
    tagline: "Asia's Silicon Harbour — where innovation meets capital",
    description:
      "Hong Kong's thriving tech ecosystem, proximity to Shenzhen's manufacturing base, and access to deep-pocketed venture capital make it the go-to launchpad for technology startups targeting the Asia-Pacific market.",
    color: "violet",
    accentColor: "#7C3AED",
    lightBg: "bg-violet-50",
    textColor: "text-violet-600",
    borderColor: "border-violet-200",
    services: ["Incorporation Packages", "Virtual Office", "Bank Account Assistance", "Employment Visa"],
    benefits: [
      "Proximity to Shenzhen tech corridor",
      "Access to APAC venture capital",
      "Cyberport & Science Park incentives",
      "Global talent acquisition friendly",
    ],
    stats: { companies: "3,700+", growth: "22%", avgSetup: "5 days" },
    requirements: [
      "At least 1 director (any nationality)",
      "Registered Hong Kong address",
      "Company secretary",
      "Share capital (min HK$1)",
    ],
    faqs: [
      { q: "Is HK good for tech startups?", a: "Absolutely — Cyberport and HKSTP offer grants, subsidies, and networking for tech companies incorporated in HK." },
      { q: "Can foreign founders incorporate here?", a: "Yes, 100% foreign ownership is permitted with no restrictions on directors' nationalities." },
    ],
  },
  {
    id: "financial-services",
    label: "Financial Services",
    tagline: "Asia's leading financial centre with robust regulatory clarity",
    description:
      "As the world's fourth-largest financial centre, Hong Kong offers unparalleled access to capital markets, a trusted regulatory environment, and seamless connectivity between global and Mainland Chinese financial systems.",
    color: "amber",
    accentColor: "#D97706",
    lightBg: "bg-amber-50",
    textColor: "text-amber-600",
    borderColor: "border-amber-200",
    services: ["Company Registration", "Bank Account Assistance", "Annual Audit", "Compliance Services"],
    benefits: [
      "No capital gains or withholding tax",
      "Access to HK Stock Exchange",
      "Offshore RMB centre",
      "World-class regulatory framework",
    ],
    stats: { companies: "8,900+", growth: "12%", avgSetup: "7 days" },
    requirements: [
      "SFC licence (if managing funds/securities)",
      "Fit and proper directors",
      "Minimum paid-up capital varies by licence",
      "AML/KYC compliance programme",
    ],
    faqs: [
      { q: "Do I need a licence to operate in financial services?", a: "Depends on activities. Fund management and securities dealing require SFC licences; consulting generally does not." },
      { q: "Can I open a multi-currency bank account?", a: "Yes — Hong Kong banks offer multi-currency accounts and we assist with the entire opening process." },
    ],
  },
  {
    id: "ecommerce-retail",
    label: "E-Commerce & Retail",
    tagline: "Sell to 4.5 billion consumers from a single HK entity",
    description:
      "Hong Kong's strategic position as a logistics hub, combined with its zero-tariff status and connectivity to Mainland China's vast consumer base, makes it the perfect operational base for e-commerce and retail businesses.",
    color: "rose",
    accentColor: "#E11D48",
    lightBg: "bg-rose-50",
    textColor: "text-rose-600",
    borderColor: "border-rose-200",
    services: ["Incorporation Packages", "Registered Address", "Annual Services", "Trademark Registration"],
    benefits: [
      "Access to Cross-Border E-Commerce zones",
      "Efficient customs clearance",
      "IP protection via HKIPO",
      "Low corporate tax on offshore profits",
    ],
    stats: { companies: "45,000+", growth: "18%", avgSetup: "3 days" },
    requirements: [
      "Company Registration",
      "Business Registration Certificate",
      "IP / Trademark Registration (recommended)",
      "Merchant account or payment gateway",
    ],
    faqs: [
      { q: "Can I sell into Mainland China from HK?", a: "Yes — HK companies have preferential access to China's Cross-Border E-Commerce Comprehensive Pilot Zones." },
      { q: "How do I protect my brand in HK?", a: "We assist with trademark registration via the HKIPO, protecting your brand across HK and facilitating China registration." },
    ],
  },
  {
    id: "professional-consulting",
    label: "Professional & Consulting",
    tagline: "Credibility, neutrality and global client reach",
    description:
      "Consulting firms, law firms, management advisors and professional service providers leverage Hong Kong's neutral legal system, English common law foundation, and international reputation to serve global clients.",
    color: "slate",
    accentColor: "#475569",
    lightBg: "bg-slate-50",
    textColor: "text-slate-600",
    borderColor: "border-slate-200",
    services: ["Standard Package", "Company Secretary", "Annual Services", "Virtual Office"],
    benefits: [
      "English common law legal system",
      "Professional credibility globally",
      "Low bureaucracy & red tape",
      "Simple profit tax structure",
    ],
    stats: { companies: "62,000+", growth: "9%", avgSetup: "3 days" },
    requirements: [
      "Professional qualifications (if regulated)",
      "Company Registration & BR",
      "Company Secretary",
      "Professional indemnity insurance (recommended)",
    ],
    faqs: [
      { q: "Can I consult for overseas clients from HK?", a: "Yes — income derived from services rendered outside HK may qualify as offshore profits, potentially tax-exempt." },
      { q: "Do I need a local office?", a: "No — a registered address is sufficient. We provide this as part of our annual services." },
    ],
  },
  {
    id: "logistics-supply-chain",
    label: "Logistics & Supply Chain",
    tagline: "The world's freest port at the heart of global supply chains",
    description:
      "With one of the world's busiest container ports and the world's largest air cargo hub, Hong Kong is the operational and legal nerve centre for logistics, freight forwarding, and supply chain management businesses.",
    color: "emerald",
    accentColor: "#059669",
    lightBg: "bg-emerald-50",
    textColor: "text-emerald-600",
    borderColor: "border-emerald-200",
    services: ["Company Registration", "Business Registration", "Annual Services", "Bank Account Assistance"],
    benefits: [
      "World's busiest air cargo hub (HKIA)",
      "Top-5 global container port",
      "Zero tariffs on cargo transit",
      "Efficient customs processing",
    ],
    stats: { companies: "28,000+", growth: "7%", avgSetup: "3 days" },
    requirements: [
      "Company Registration",
      "Business Registration Certificate",
      "Transportation licences (if operating vehicles)",
      "Customs agent licence (if applicable)",
    ],
    faqs: [
      { q: "Is HK good for freight forwarding?", a: "Yes — HK's port handles over 18M TEUs annually and its airport is the world's busiest for international cargo." },
      { q: "What taxes apply to logistics companies?", a: "Standard 16.5% profits tax applies, with potential offshore exemptions for profits earned outside HK." },
    ],
  },
  {
    id: "hospitality-tourism",
    label: "Hospitality & Tourism",
    tagline: "Welcome the world — Asia's most visited destination",
    description:
      "Hong Kong welcomes tens of millions of visitors annually, creating exceptional opportunities for hotels, restaurants, travel agencies, tour operators, and hospitality technology companies.",
    color: "orange",
    accentColor: "#EA580C",
    lightBg: "bg-orange-50",
    textColor: "text-orange-600",
    borderColor: "border-orange-200",
    services: ["Company Registration", "Employment Visa Assistance", "Annual Services", "Trademark Registration"],
    benefits: [
      "55M+ annual visitors pre-COVID",
      "Strong rebound & government tourism push",
      "Tourism licensing support",
      "Access to MICE industry",
    ],
    stats: { companies: "12,000+", growth: "31%", avgSetup: "5 days" },
    requirements: [
      "Travel agent licence (TICHK) if applicable",
      "Hotel licence (Food & Environmental Hygiene Dept)",
      "Company Registration & BR",
      "Public liability insurance",
    ],
    faqs: [
      { q: "Do I need a travel agent licence?", a: "Yes, if selling travel packages. We guide you through the TICHK licensing process as part of our consultation." },
      { q: "Can overseas staff work in HK?", a: "Yes — we assist with Employment Visa applications for foreign staff joining your HK entity." },
    ],
  },
  {
    id: "real-estate-property",
    label: "Real Estate & Property",
    tagline: "Structuring property investment through Asia's gateway",
    description:
      "Hong Kong's dynamic property market and its role as Asia's premier wealth management hub make it an ideal jurisdiction for real estate investment, property holding companies, and proptech ventures.",
    color: "teal",
    accentColor: "#0D9488",
    lightBg: "bg-teal-50",
    textColor: "text-teal-600",
    borderColor: "border-teal-200",
    services: ["Premium Package", "Bank Account Assistance", "Annual Audit", "Legal Document Review"],
    benefits: [
      "No capital gains tax on property",
      "Efficient property registration",
      "Strong rule of law & courts",
      "Access to REIT market",
    ],
    stats: { companies: "19,000+", growth: "5%", avgSetup: "5 days" },
    requirements: [
      "Estate Agent licence (if selling/leasing)",
      "Company Registration & BR",
      "Bank account for rental income",
      "Annual audit (mandatory if active)",
    ],
    faqs: [
      { q: "Is there capital gains tax on HK property?", a: "No — Hong Kong does not levy capital gains tax, making it attractive for property investment structures." },
      { q: "Can a foreign company hold HK property?", a: "Yes — through a Hong Kong incorporated entity, foreign investors can legally hold and manage HK property." },
    ],
  },
];

export const industryStats = [
  { value: "1.3M+", label: "Companies Registered in HK", sublabel: "As of 2024" },
  { value: "16.5%", label: "Maximum Corporate Tax", sublabel: "Among Asia's lowest" },
  { value: "3–5", label: "Days to Incorporate", sublabel: "Electronic registration" },
  { value: "100%", label: "Foreign Ownership", sublabel: "No local partner required" },
];

export const whyHongKong = [
  {
    title: "Rule of Law",
    desc: "Independent judiciary based on English common law — trusted globally for contracts and dispute resolution.",
    icon: "⚖️",
  },
  {
    title: "Low & Simple Taxes",
    desc: "16.5% profits tax, no VAT, no capital gains tax, no withholding tax on dividends.",
    icon: "💰",
  },
  {
    title: "Free Port",
    desc: "Zero tariffs on virtually all imports and exports, with frictionless access to global markets.",
    icon: "🚢",
  },
  {
    title: "China Gateway",
    desc: "Preferential access to Mainland China's 1.4 billion consumers via CEPA and the GBA framework.",
    icon: "🔗",
  },
  {
    title: "World-Class Infrastructure",
    desc: "Top-ranked airport, port, financial system, and digital infrastructure in Asia.",
    icon: "🏙️",
  },
  {
    title: "Talent & Capital",
    desc: "Deep talent pool, world-leading universities, and Asia's premier venture and private equity hub.",
    icon: "🎓",
  },
];