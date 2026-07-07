// Dummy content for the homepage sections, extracted verbatim from the legacy
// index2.php. No backend — this stands in for what PHP rendered server-side.

export interface HeroSlide {
  bgGradient: string;
  bgImage: string;
  bgOpacity: number;
  eyebrow: string;
  title: string; // may contain <br> and <em>
  body: string;
  primaryLabel: string;
  primaryHref?: string;
  outlineLabel: string;
  cardPhoto: string;
  cardBadge: string;
  cardDate: string;
  cardDateColor?: string;
  cardTitle: string;
  cardBody: string;
  cardLink: string;
  cardLinkHref: string;
}

export const heroSlides: HeroSlide[] = [
  {
    bgGradient: "linear-gradient(135deg,#1a1040 0%,#2d1b69 50%,#1e3a8a 100%)",
    bgImage: "/images/finance1.png",
    bgOpacity: 0.1,
    eyebrow: "🚀 Introducing EbossPro ALL-IN-ONE SOLUTION",
    title: "Future-ready systems<br><em>for growing organizations</em>",
    body: "EBOSSPro delivers ERP, AI-powered workflows, and managed digital services to help businesses simplify operations, improve visibility, and grow with confidence.",
    primaryLabel: "Get started free",
    outlineLabel: "Explore services",
    cardPhoto: "/images/boss1.png",
    cardBadge: "Livestream Event",
    cardDate: "May 13 | 10:00 AM",
    cardTitle: "AWFATECH Strategic Insight & User Conferences",
    cardBody:
      "Join Awfatech CEO Razali Ahmad in a strategic webinar series covering exclusive system enhancements, the Awfatech 2026–2030 roadmap, AI-powered digitalization, and new module launches.",
    cardLink: "→",
    cardLinkHref: "#",
  },
  {
    bgGradient: "linear-gradient(105deg,#1a1040 10%,#2d1b69 70%,#1e3a8a 100%)",
    bgImage: "/images/tech3.jpg",
    bgOpacity: 0.12,
    eyebrow: "💳 FLEXIBLE PRICING MODEL",
    title: "Pay As You<br><em>Grow</em>",
    body: "Start with only the modules you need today. Add users, features, and integrations as your business scales — with no upfront costs, no long-term lock-in, and zero setup fees.",
    primaryLabel: "View Pricing Plans",
    primaryHref: "/#pricing",
    outlineLabel: "Calculate My Cost",
    cardPhoto: "/images/pag2.jpg",
    cardBadge: "Grow Smarter",
    cardDate: "Flexible & Transparent",
    cardDateColor: "#6ee7b7",
    cardTitle: "No surprises. No lock-in.",
    cardBody:
      "RM0 setup cost. Month-to-month subscriptions. Add modules anytime. Scale users up or down. Only pay for what you use — built for startups to enterprises.",
    cardLink: "Explore pricing →",
    cardLinkHref: "#",
  },
  {
    bgGradient: "linear-gradient(125deg,#1a1040 0%,#2d1b69 40%,#1e3a8a 100%)",
    bgImage: "/images/tech1.jpg",
    bgOpacity: 0.15,
    eyebrow: "🤖 POWERED BY ARTIFICIAL INTELLIGENCE",
    title: "Smarter decisions.<br><em>Automated workflows.</em>",
    body: "EBOSSPro embeds AI across every module — predicting cash flow, detecting anomalies, automating approvals, and giving your team intelligence at every step of the business.",
    primaryLabel: "Explore AI Features",
    primaryHref: "/topics/ai",
    outlineLabel: "See AI in Action",
    cardPhoto: "/images/ai3.jpg",
    cardBadge: "AI Powered",
    cardDate: "AI-Powered Platform",
    cardDateColor: "#fcd34d",
    cardTitle: "From data to decisions — automatically",
    cardBody:
      "AI anomaly detection, predictive analytics, intelligent document processing, and automated approval workflows — all embedded into your existing EBOSSPro modules.",
    cardLink: "Discover AI →",
    cardLinkHref: "/topics/ai",
  },
];

export interface Stat {
  num: string;
  label: string;
}
export const stats: Stat[] = [
  { num: "15+", label: "Integrated Modules" },
  { num: "500+", label: "Enterprise Clients" },
  { num: "99.99%", label: "Uptime SLA" },
  { num: "1M+", label: "Active Users" },
  { num: "$0", label: "Setup Cost" },
];

export interface IndustryCard {
  href: string;
  cat: string;
  image: string;
  tag: string;
  title: string; // may contain &
  body: string;
}
export const industryCards: IndustryCard[] = [
  {
    href: "/industries/education",
    cat: "hr",
    image: "/images/industries/education.png",
    tag: "Education",
    title: "Education",
    body: "Manage student records, finance, attendance, HR, and communication in one centralized platform for schools, kindergartens, tahfiz centers, tuition centers, and academies.",
  },
  {
    href: "/industries/sme-corporate",
    cat: "finance",
    image: "/images/industries/sme.png",
    tag: "Business",
    title: "SMEs & Corporate",
    body: "Simplify daily operations with integrated ERP solutions covering finance, HR, payroll, CRM, inventory, and reporting — built for growing businesses.",
  },
  {
    href: "/industries/workshop",
    cat: "operations",
    image: "/images/industries/workshop.png",
    tag: "Operations",
    title: "Workshops & Service Centers",
    body: "Track jobs, customer records, quotations, invoicing, stock usage, and technician workflows with smarter operational management.",
  },
  {
    href: "/industries/ngo",
    cat: "technology",
    image: "/images/industries/ngo.png",
    tag: "Non-Profit",
    title: "NGOs & Non-Profit Organizations",
    body: "Improve transparency and operational efficiency with donation tracking, volunteer management, reporting, and automated financial monitoring.",
  },
  {
    href: "/industries/fnb-retail",
    cat: "finance",
    image: "/images/industries/fnb.png",
    tag: "Retail",
    title: "F&B & Retail",
    body: "Streamline POS operations, inventory management, staff attendance, customer loyalty, and business analytics for restaurants, cafés, and retail outlets.",
  },
  {
    href: "/industries/property",
    cat: "technology",
    image: "/images/industries/strata.png",
    tag: "Property",
    title: "Property & Strata Management",
    body: "Handle visitor management, maintenance requests, billing, announcements, facility bookings, and community operations efficiently.",
  },
];

export interface CarouselSlide {
  photo: string;
  tag: string;
  headline: string;
}
export const carouselSlides: CarouselSlide[] = [
  {
    photo: "/images/carousel5.jpg",
    tag: "Automotive",
    headline:
      "Workshop network cuts job turnaround time by 30% with EBOSSPro",
  },
  {
    photo: "/images/carousel2.jpg",
    tag: "Retail & F&B",
    headline: "Café chain unifies 40 outlets on one POS with EBOSSPro",
  },
  {
    photo: "/images/carousel3.jpg",
    tag: "Education",
    headline:
      "Academy automates fees and attendance for 5,000+ students",
  },
  {
    photo: "/images/carousel4.jpg",
    tag: "Manufacturing",
    headline: "Manufacturer closes monthly payroll in hours, not days",
  },
  {
    photo: "/images/carousel1.jpg",
    tag: "Enterprise",
    headline:
      "Holding group consolidates finance across 12 companies",
  },
];

export interface Region {
  id: string;
  color: string;
  name: string;
  states: string;
  desc: string;
}
export const regions: Region[] = [
  {
    id: "northern",
    color: "#7c3aed",
    name: "Northern Region",
    states: "Perlis · Kedah · Penang · Perak",
    desc: "EBOSSPro Northern Hub — serving manufacturing, agri, and tourism sectors",
  },
  {
    id: "central",
    color: "#2563eb",
    name: "Central Region",
    states: "Selangor · W.P. Kuala Lumpur · W.P. Putrajaya",
    desc: "EBOSSPro HQ — corporate, fintech, and enterprise clients",
  },
  {
    id: "southern",
    color: "#059669",
    name: "Southern Region",
    states: "Johor · Melaka · Negeri Sembilan",
    desc: "EBOSSPro Southern Hub — logistics, retail, and industrial",
  },
  {
    id: "eastern",
    color: "#dc2626",
    name: "Eastern Region",
    states: "Pahang · Terengganu · Kelantan",
    desc: "EBOSSPro Eastern Hub — resources, tourism, and public sector",
  },
];

export const aiSuggestions: { label: string; prompt: string }[] = [
  { label: "Which region covers KL?", prompt: "Which EBOSSPro region covers Kuala Lumpur?" },
  { label: "What HR modules are available?", prompt: "What HR modules does EBOSSPro offer?" },
  { label: "How does payroll work?", prompt: "How does payroll processing work in EBOSSPro?" },
  { label: "LHDN e-Invoicing support?", prompt: "Does EBOSSPro support e-Invoicing for LHDN?" },
];

export interface FooterColumn {
  heading: string;
  links: string[];
}
export const footerColumns: FooterColumn[] = [
  { heading: "Product", links: ["Finance", "Human Resource", "Education", "KPI Tracking", "Appraisal"] },
  { heading: "Operations", links: ["Billing", "Inventory", "Asset Management", "POS", "Workorder"] },
  { heading: "Platform", links: ["CMS", "FinTech", "e-Invoicing", "API Reference", "Integrations"] },
  { heading: "Resources", links: ["Documentation", "Training & Certs", "Solution Library", "Whitepapers", "Blog"] },
  { heading: "Company", links: ["About Us", "Careers", "Press", "Partners", "Contact"] },
];

export const navButtons = ["Discover", "Products", "Solutions", "Pricing", "Resources"] as const;
export const topbarLinks = ["Contact Us", "Marketplace", "Support", "My Account"];
export const footerLegal = ["Privacy Policy", "Terms of Use", "Cookie Settings", "Site Map"];
