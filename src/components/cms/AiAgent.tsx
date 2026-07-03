import type { CSSProperties } from "react";
import AutoVideo from "./AutoVideo";

const CARDS = [
  {
    base: "ai-color-template",
    prompt: "“Make it warm and trustworthy”",
    title: "AI Color Templates",
    desc: "Describe a vibe and the agent generates a complete, on-brand color theme for the entire site — applied live, no design skills needed.",
  },
  {
    base: "ai-news-title",
    prompt: "“Summarize this into a headline”",
    title: "AI News Titles",
    desc: "The agent reads your article and writes sharp, publish-ready headlines in seconds — so content goes out faster.",
  },
];

export default function AiAgent() {
  return (
    <section className="cms-section cms-ai" id="ai">
      <div className="cms-ai-bg" aria-hidden>
        <div className="cms-ai-grid-lines" />
        <div className="cms-mesh" />
      </div>

      <div className="cms-wrap" style={{ position: "relative", zIndex: 2 }}>
        <div className="cms-ai-head cms-reveal">
          <span className="cms-ai-eyebrow">✦ AI Agent</span>
          <h2 className="cms-ai-title">
            Your CMS, with an <span className="grad">AI agent</span> inside
          </h2>
          <p className="cms-ai-lead">
            Not a bolt-on chatbot — a working agent built into the studio. It
            designs themes and writes copy for your team, on demand.
          </p>
        </div>

        <div className="cms-ai-cards">
          {CARDS.map((c, i) => (
            <div
              key={c.base}
              className="cms-ai-card cms-reveal-scale"
              style={{ "--d": `${i * 120}ms` } as CSSProperties}
            >
              <div className="cms-ai-card-inner">
                <div className="cms-ai-video">
                  <span className="cms-ai-badge">✦ AI</span>
                  <AutoVideo base={c.base} className="cms-ai-media" />
                </div>
                <div className="cms-ai-body">
                  <span className="cms-ai-prompt">{c.prompt}</span>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
