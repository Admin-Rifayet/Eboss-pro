import type { LegacyPageData } from "@/components/layout/LegacyPage";
import erp from "./erp";
import msaas from "./msaas";
import ai from "./ai";
import type { LegacyEntry } from "../industries";

export const topics: Record<string, LegacyEntry> = {
  erp: {
    data: erp,
    title: "ERP — Scale from startup to enterprise | EbossPro",
    description:
      "Enterprise Resource Planning that scales from startup operations to enterprise-level management.",
  },
  msaas: {
    data: msaas,
    title: "Managed SaaS — Automated business operations | EbossPro",
    description:
      "Managed Software as a Service: automated finance, reconciliation, and business operations.",
  },
  ai: {
    data: ai,
    title: "AI — Smarter workflows, faster decisions | EbossPro",
    description:
      "AI-powered workflows, faster decisions, and automated operations embedded across EBOSSPro.",
  },
};

export const topicSlugs = Object.keys(topics);
