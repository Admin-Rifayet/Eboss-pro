import Link from "next/link";
import { industryCards } from "@/data/home";

export default function IndustryGallery() {
  return (
    <section className="section" style={{ background: "#f9fafb" }}>
      <div className="container">
        <div className="gallery-header">
          <div>
            <div className="section-title">
              Built for the future of intelligent business
            </div>
            <div className="section-sub" style={{ marginBottom: 0 }}>
              See how EBOSSPro empowers businesses with ERP, AI, and managed
              automation solutions.
            </div>
          </div>
        </div>

        <div className="gallery-grid" id="galleryGrid">
          {industryCards.map((card) => (
            <Link
              key={card.href}
              className="gallery-card"
              href={card.href}
              data-cat={card.cat}
            >
              <div
                className="gallery-card-img"
                style={{ backgroundImage: `url('${card.image}')` }}
              >
                <span className="gc-tag">{card.tag}</span>
              </div>
              <div className="gallery-card-body" style={{ paddingBottom: 48 }}>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
                <span className="gc-arrow-default">→</span>
                <span className="gc-view-link">View industry →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
