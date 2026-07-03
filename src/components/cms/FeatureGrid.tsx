import type { CSSProperties } from "react";

export interface Feature {
  icon: string;
  title: string;
  desc: string;
  hl?: boolean;
}

export default function FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <div className="cms-grid">
      {features.map((f, i) => (
        <div
          key={f.title}
          className={`cms-tile cms-reveal${f.hl ? " hl" : ""}`}
          style={{ "--d": `${(i % 3) * 80}ms` } as CSSProperties}
        >
          <div className="cms-tile-ico">{f.icon}</div>
          <h4>{f.title}</h4>
          <p>{f.desc}</p>
        </div>
      ))}
    </div>
  );
}
