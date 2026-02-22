// Service data shared across all service pages
export const serviceData = {
  // Government Fees
  mandatoryFees: [
    {
      id: 1,
      name: "Company Registration (electronic)",
      price: "HK$1,545",
      description: "Fee paid to Companies Registry for legal incorporation and company number",
      features: ["Legal existence", "Registration number", "Certificate of Incorporation"],
      note: "Mandatory government fee"
    },
    {
      id: 2,
      name: "Business Registration (1-year, levy waived)",
      price: "HK$2,200",
      description: "Tax license from Inland Revenue Department for business operations",
      features: ["Business Registration Certificate", "Tax filing authority", "Display requirement"],
      note: "Levy of HK$250 currently waived"
    }
  ],

  // Packages
  packages: [
    {
      id: "basic",
      name: "Basic Package",
      price: "HK$4,500–6,000",
      tagline: "Essential Setup",
      features: [
        "Government fees payment",
        "Document preparation",
        "Corporate kit",
        "Certificate of Incorporation",
        "Business Registration Certificate",
        "Email support"
      ],
      excludes: ["Company Secretary", "Registered Address"]
    },
    {
      id: "standard",
      name: "Standard Package",
      price: "HK$7,000–9,000",
      tagline: "Complete Compliance",
      features: [
        "Everything in Basic Package",
        "1st Year Company Secretary",
        "1st Year Registered Office Address",
        "Annual Return preparation",
        "Compliance consultation",
        "Phone & email support",
        "Priority processing"
      ],
      recommended: true
    },
    {
      id: "premium",
      name: "Premium Package",
      price: "HK$10,000–15,000",
      tagline: "Full Business Setup",
      features: [
        "Everything in Standard Package",
        "Bank Account Opening Assistance",
        "Company Seals & Chops (full set)",
        "Virtual Office Setup (3 months)",
        "Visa consultation session",
        "Dedicated account manager",
        "Legal document review"
      ]
    }
  ],

  // Annual Services
  annualServices: [
    {
      id: 1,
      name: "Company Secretary",
      price: "HK$2,500–4,000/year",
      description: "Mandatory appointment for compliance with HK company law",
      features: ["Annual Return filing", "Statutory records", "Compliance monitoring"],
      note: "Required by law for all HK companies"
    },
    {
      id: 2,
      name: "Registered Office Address",
      price: "HK$1,500–3,000/year",
      description: "Local HK address for official government correspondence",
      features: ["Mail handling", "Legal compliance", "Address verification"],
      note: "Mandatory requirement"
    },
    {
      id: 3,
      name: "Accounting & Bookkeeping",
      price: "HK$4,000–10,000/year",
      description: "Maintaining financial records to HK standards",
      features: ["Monthly bookkeeping", "Financial statements", "Expense tracking"]
    },
    {
      id: 4,
      name: "Audit (mandatory if active)",
      price: "HK$8,000–20,000+",
      description: "Annual audit by Certified Public Accountant as required by law",
      features: ["Financial audit", "Compliance report", "Tax preparation"],
      note: "Legal requirement for active companies"
    },
    {
      id: 5,
      name: "Tax Filing",
      price: "HK$3,000–6,000",
      description: "Preparation and submission of Profits Tax Return",
      features: ["Tax computation", "Return preparation", "IRD liaison"]
    }
  ],

  // One-off Services
  oneOffServices: [
    {
      id: 101,
      name: "Bank Account Opening Assistance",
      price: "HK$4,000–8,000",
      description: "Help with HK banking requirements and documentation",
      features: ["Bank selection", "Document preparation", "Meeting coordination"],
      note: "Highly recommended for non-resident directors"
    },
    {
      id: 102,
      name: "Trademark Registration",
      price: "HK$3,000–5,000",
      description: "Register brand/logo with HK Intellectual Property Department",
      features: ["Trademark search", "Application filing", "Registration"]
    },
    {
      id: 103,
      name: "Employment Visa Assistance",
      price: "HK$5,000–10,000",
      description: "Support for foreign employees securing HK work visas",
      features: ["Document preparation", "Application submission", "Immigration liaison"]
    },
    {
      id: 104,
      name: "Company Name Change",
      price: "HK$1,000–2,000",
      description: "Legal process for changing company name",
      features: ["Name approval", "Certificate update", "Document amendments"]
    },
    {
      id: 105,
      name: "Deregistration/Strike-off",
      price: "HK$3,000–5,000",
      description: "Legal closure of your Hong Kong company",
      features: ["Application preparation", "Government liaison", "Final compliance"]
    }
  ]
};