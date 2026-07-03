import { stats } from "@/data/home";

export default function Stats() {
  return (
    <div className="stats-banner">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
