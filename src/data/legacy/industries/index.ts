import type { LegacyPageData } from "@/components/layout/LegacyPage";
import education from "./education";
import smeCorporate from "./sme-corporate";
import workshop from "./workshop";
import ngo from "./ngo";
import fnbRetail from "./fnb-retail";
import property from "./property";

export interface LegacyEntry {
  data: LegacyPageData;
  title: string;
  description: string;
}

export const industries: Record<string, LegacyEntry> = {
  education: {
    data: education,
    title: "Education & Institutions | EBOSSPro Industry Solutions",
    description:
      "Manage student records, finance, attendance, HR, and communication in one centralized platform for education institutions.",
  },
  "sme-corporate": {
    data: smeCorporate,
    title: "SMEs & Corporate | EBOSSPro Industry Solutions",
    description:
      "Integrated ERP for finance, HR, payroll, CRM, inventory, and reporting — built for growing businesses.",
  },
  workshop: {
    data: workshop,
    title: "Workshops & Service Centers | EBOSSPro Industry Solutions",
    description:
      "Track jobs, customers, quotations, invoicing, stock, and technician workflows with smarter operational management.",
  },
  ngo: {
    data: ngo,
    title: "NGOs & Non-Profit Organizations | EBOSSPro Industry Solutions",
    description:
      "Donation tracking, volunteer management, reporting, and automated financial monitoring for non-profits.",
  },
  "fnb-retail": {
    data: fnbRetail,
    title: "F&B & Retail | EBOSSPro Industry Solutions",
    description:
      "POS, inventory, staff attendance, customer loyalty, and analytics for restaurants, cafés, and retail outlets.",
  },
  property: {
    data: property,
    title: "Property & Strata Management | EBOSSPro Industry Solutions",
    description:
      "Visitor management, maintenance requests, billing, announcements, facility bookings, and community operations.",
  },
};

export const industrySlugs = Object.keys(industries);
