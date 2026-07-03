import { NextRequest, NextResponse } from "next/server";

/**
 * Ask-AI proxy.
 *
 * The legacy site called api.anthropic.com directly from the browser, exposing
 * the API key. Here the call is made server-side. If ANTHROPIC_API_KEY is set
 * the route forwards to Claude; otherwise it returns a deterministic mock reply
 * so the chat UI still works during local development (per "use dummy data,
 * no backend yet").
 */

const AI_SYSTEM = `You are the EBOSSPro AI assistant embedded on the EBOSSPro website. EBOSSPro is a fully integrated Malaysian business management platform.

MODULES: HR Suite (Attendance, Leave, Claim, Salary, Recruitment, KPI, Appraisal), Finance & Billing, e-Invoicing (LHDN MyInvois compliant), Asset Management, Inventory, POS, CMS, Work Order, FinTech (digital payments, e-wallet, loan management).

MALAYSIA REGIONS:
- Northern: Perlis, Kedah, Penang, Perak — manufacturing, agri, tourism
- Central (HQ): Selangor, W.P. Kuala Lumpur, W.P. Putrajaya — corporate, fintech, enterprise
- Southern: Johor, Melaka, Negeri Sembilan — logistics, retail, industrial
- Eastern: Pahang, Terengganu, Kelantan — resources, tourism, public sector

RULES: Keep answers concise (2–4 sentences), friendly, and accurate. For pricing or sign-up, direct to ebosspro.com. Respond in the same language the user uses (English or Malay).`;

type Msg = { role: "user" | "assistant"; content: string };

function mockReply(messages: Msg[]): string {
  const last = messages.filter((m) => m.role === "user").pop()?.content.toLowerCase() ?? "";
  if (last.includes("kuala lumpur") || last.includes(" kl"))
    return "Kuala Lumpur is served by our Central Region (HQ) — covering Selangor, W.P. Kuala Lumpur, and W.P. Putrajaya, focused on corporate, fintech, and enterprise clients.";
  if (last.includes("hr") || last.includes("payroll"))
    return "EBOSSPro's HR Suite covers Attendance, Leave, Claims, Salary/Payroll, Recruitment, KPI tracking, and Appraisal — all integrated so payroll runs straight from attendance and claims data.";
  if (last.includes("invoic"))
    return "Yes — EBOSSPro's e-Invoicing module is LHDN MyInvois compliant, so you can issue and validate e-invoices directly from your billing workflow.";
  return "Thanks for your question! EBOSSPro is an all-in-one Malaysian business platform spanning HR, Finance, POS, Inventory, and FinTech. For pricing or to get started, visit ebosspro.com. (Demo mode: set ANTHROPIC_API_KEY to enable live AI replies.)";
}

export async function POST(req: NextRequest) {
  let messages: Msg[] = [];
  try {
    const body = await req.json();
    messages = Array.isArray(body?.messages) ? body.messages : [];
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    // Graceful mock so the UI works without a backend / key.
    return NextResponse.json({ reply: mockReply(messages), mode: "mock" });
  }

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: process.env.ANTHROPIC_MODEL ?? "claude-haiku-4-5-20251001",
        max_tokens: 350,
        system: AI_SYSTEM,
        messages: messages.slice(-12),
      }),
    });
    const data = await res.json();
    const reply: string =
      data?.content?.[0]?.text ??
      "I'm having trouble right now. Please try again in a moment.";
    return NextResponse.json({ reply, mode: "live" });
  } catch {
    return NextResponse.json(
      { reply: "I'm unable to connect at the moment. Please try again shortly." },
      { status: 502 }
    );
  }
}
