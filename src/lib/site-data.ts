export const brand = {
  name: "Cush",
  legal: "Cush Payments",
  tagline: "Africa's payment platform.",
  promise:
    "The go-to place for sending money to and within Africa. Fast, cheap, secure and regulated.",
};

export type Product = "payments" | "core";

export const paymentsNav = [
  { to: "/payments", label: "Send money", hint: "To family in Africa" },
  { to: "/business", label: "Business", hint: "Pay staff and suppliers" },
  { to: "/company", label: "About", hint: "Who we are" },
] as const;

export const coreNav = [
  { to: "/core", label: "Platform", hint: "The stack you license" },
  { to: "/company", label: "Company", hint: "Who builds it" },
] as const;

export function productFromPath(pathname: string): Product {
  return pathname.startsWith("/core") ? "core" : "payments";
}

export type Currency = "GBP" | "USD" | "EUR" | "GHS" | "NGN" | "KES" | "ETB" | "ZAR";

export type Corridor = {
  id: string;
  from: Currency;
  to: Currency;
  fromCity: string;
  toCity: string;
  fromCountry: string;
  toCountry: string;
  label: string;
  rate: number;
  status: "active" | "soon";
  wallet: string;
  rail: string;
};

export const corridors: Corridor[] = [
  {
    id: "uk-gh",
    from: "GBP",
    to: "GHS",
    fromCity: "London",
    toCity: "Accra",
    fromCountry: "United Kingdom",
    toCountry: "Ghana",
    label: "UK → Ghana",
    rate: 15.16,
    status: "soon",
    wallet: "MTN MoMo · Bank",
    rail: "Faster Payments → PAPSS → GHIPSS",
  },
  {
    id: "us-ng",
    from: "USD",
    to: "NGN",
    fromCity: "New York",
    toCity: "Lagos",
    fromCountry: "United States",
    toCountry: "Nigeria",
    label: "US → Nigeria",
    rate: 1480,
    status: "soon",
    wallet: "Bank · OPay · PalmPay",
    rail: "ACH / Fedwire → PAPSS",
  },
  {
    id: "uk-ke",
    from: "GBP",
    to: "KES",
    fromCity: "London",
    toCity: "Nairobi",
    fromCountry: "United Kingdom",
    toCountry: "Kenya",
    label: "UK → Kenya",
    rate: 167.4,
    status: "soon",
    wallet: "M-Pesa · Bank",
    rail: "Faster Payments → PAPSS",
  },
  {
    id: "uk-ng",
    from: "GBP",
    to: "NGN",
    fromCity: "Manchester",
    toCity: "Lagos",
    fromCountry: "United Kingdom",
    toCountry: "Nigeria",
    label: "UK → Nigeria",
    rate: 1890,
    status: "soon",
    wallet: "Bank · Mobile money",
    rail: "Faster Payments → PAPSS",
  },
  {
    id: "eu-gh",
    from: "EUR",
    to: "GHS",
    fromCity: "Amsterdam",
    toCity: "Accra",
    fromCountry: "Eurozone",
    toCountry: "Ghana",
    label: "EU → Ghana",
    rate: 13.02,
    status: "soon",
    wallet: "MTN MoMo · Bank",
    rail: "SEPA → PAPSS → GHIPSS",
  },
  {
    id: "uk-et",
    from: "GBP",
    to: "ETB",
    fromCity: "London",
    toCity: "Addis Ababa",
    fromCountry: "United Kingdom",
    toCountry: "Ethiopia",
    label: "UK → Ethiopia",
    rate: 178.2,
    status: "soon",
    wallet: "Bank",
    rail: "Faster Payments → PAPSS",
  },
];

export const CUSH_FEE = 0.018;

export const providers = [
  { id: "cush", name: "Cush", feePct: 0.018, fxMarkup: 0, recommended: true },
  { id: "wise", name: "Wise", feePct: 0.025, fxMarkup: 0, recommended: false },
  { id: "remitly", name: "Remitly", feePct: 0.04, fxMarkup: 0.008, recommended: false },
  { id: "wu", name: "Western Union", feePct: 0.075, fxMarkup: 0.018, recommended: false },
] as const;

export const markets = [
  { name: "Ghana", city: "Accra", status: "Opening first", flag: "GH" },
  { name: "Nigeria", city: "Lagos", status: "Opening", flag: "NG" },
  { name: "Kenya", city: "Nairobi", status: "Opening", flag: "KE" },
  { name: "Ethiopia", city: "Addis Ababa", status: "Opening", flag: "ET" },
  { name: "South Africa", city: "Johannesburg", status: "Opening", flag: "ZA" },
];

export const rails = [
  { name: "Faster Payments", region: "United Kingdom" },
  { name: "SEPA", region: "Europe" },
  { name: "Fedwire / ACH", region: "United States" },
  { name: "SWIFT", region: "International" },
  { name: "PAPSS", region: "Pan-African" },
  { name: "GHIPSS", region: "Ghana" },
  { name: "Mobile money", region: "Last mile" },
];

export const coreLayers = [
  {
    id: "products",
    kicker: "01",
    title: "Product catalogue",
    summary: "Accounts, cards, lending, remittance and payroll — issued in your brand.",
    body: "Run a single product or a full set. Current and savings accounts, card issuing, personal and secured lending, diaspora remittance, and bulk payouts. Start with one. Add the rest without changing core.",
    points: [
      "Accounts, cards and lending in your brand",
      "Remittance and payroll as first-class products",
      "Onboarding and KYC journeys included",
    ],
  },
  {
    id: "agents",
    kicker: "02",
    title: "Orchestration",
    summary: "Routing, risk, reconciliation and support, under policy you control.",
    body: "Cush Core is AI-native. Agents score risk in flight, select the cheapest viable rail, reconcile exceptions, and handle first-line operations. Policy stays with you.",
    points: [
      "Multi-rail routing against cost and success rate",
      "In-flight risk scoring and AML orchestration",
      "Automated reconciliation and exception handling",
    ],
  },
  {
    id: "ledger",
    kicker: "03",
    title: "Immutable ledger",
    summary: "The system of record. Built to be examined.",
    body: "Every posting is sealed. Supervisors, partners and your risk team can verify history without trusting a black box. This is the official record, not a reporting copy.",
    points: [
      "Cryptographically sealed postings",
      "Double-entry, multi-entity, multi-currency",
      "Designed for examination, not just dashboards",
    ],
  },
  {
    id: "rails",
    kicker: "04",
    title: "Multi-rail connectivity",
    summary: "UK, Europe and US on the way in. PAPSS, GHIPSS and mobile money on the way out.",
    body: "Cush Core treats PAPSS and local mobile money as first-class rails, not add-ons to a European core. Correspondent hops are the exception, not the design.",
    points: [
      "Faster Payments, SEPA, Fedwire, SWIFT",
      "PAPSS local-currency settlement",
      "GHIPSS and mobile-money last mile",
    ],
  },
] as const;

export const coreModules = [
  {
    title: "Accounts & savings",
    body: "Current and savings accounts in your brand. Every balance posts to the ledger.",
  },
  {
    title: "Cards",
    body: "Issue and manage cards linked to platform accounts, with full transaction visibility.",
  },
  {
    title: "Loans",
    body: "Personal and secured lending, with terms and approval policy you set.",
  },
  {
    title: "Payments & remittance",
    body: "The corridors that power Cush Payments, available as a product you can offer.",
  },
  {
    title: "Onboarding & KYC",
    body: "Identity, screening, and a guided application journey — ready on day one.",
  },
  {
    title: "Embedded APIs",
    body: "Interfaces so partners can embed accounts and payouts inside their own products.",
  },
];

export const leadership = [
  {
    name: "Matthew Ekow Folson",
    role: "Founder & CEO",
    years: "25+ years",
    initials: "MF",
    linkedin: "https://www.linkedin.com/in/matthew-folson-8632b51",
    bio: "Payments, banking and compliance. HSBC and Metro Bank. Led the first non-bank payment company to become a Direct CHAPS member at the Bank of England.",
    tags: ["Payments", "Banking", "Compliance"],
  },
  {
    name: "Jose Luis Caldeira",
    role: "CTO",
    years: "20+ years",
    initials: "JC",
    linkedin: "https://www.linkedin.com/in/luiscaldeira/",
    bio: "Banking systems, data and digital architecture. Designs the Cush Core ledger, orchestration and multi-rail connectivity.",
    tags: ["Architecture", "Payments", "Data"],
  },
];

export const quotes = [
  {
    quote: "You see the fee before you send.",
    meta: "No hidden exchange-rate markup",
  },
  {
    quote: "Money lands in a wallet or a bank account.",
    meta: "Not a cash-pickup queue",
  },
  {
    quote: "UK to Ghana opens first.",
    meta: "Then Nigeria, Kenya and more",
  },
];
