import React from 'react';
import { Globe2, Handshake, Languages, CheckCircle2 } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function AboutSection() {
  const highlights = [
    { icon: <Globe2 size={20} />, text: 'Based in Tunis — understanding local business' },
    { icon: <Handshake size={20} />, text: 'Deep connections in China — we know the system' },
    { icon: <CheckCircle2 size={20} />, text: 'Verified suppliers only — no middlemen, no scams' },
    { icon: <Languages size={20} />, text: 'Arabic, French, English & Chinese — no communication gaps' },
  ];

  return (
    <section id="who-we-are" className="section about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <div className="section-label">Who We Are</div>
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              A Trusted <span>Partner</span> in International Trade
            </h2>
            <p className="about-text">
              Sino Tunisian Commercial Cooperation connects Tunisian businesses with verified
              Chinese factories and suppliers. Based in Tunis, we handle sourcing, logistics,
              and customs across all major industries — so you can focus on growing your business.
            </p>
            <p className="about-text">
              As the <strong style={{ color: 'var(--color-accent)' }}>official Yingli Solar representative in North Africa</strong>,
              we bring world-class products and exclusive partnerships to the Tunisian market.
              Our order-based model means you only import what you need — no wasted inventory, no unnecessary risk.
            </p>

            <div className="highlights-list">
              {highlights.map((h, i) => (
                <div className="highlight-item" key={i}>
                  <span className="highlight-icon">{h.icon}</span>
                  <span>{h.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-visual">
            <div className="visual-card glass-panel">
              <div className="logo-container">
                <img
                  src={logoImg}
                  alt="Sino Tunisian Commercial Cooperation"
                  className="brand-logo-large"
                />
              </div>
              <div className="stats-container">
                <div className="stats-grid">
                  <div className="stat-item">
                    <span className="stat-number">4</span>
                    <span className="stat-label">Languages</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">100%</span>
                    <span className="stat-label">Verified Suppliers</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">A–Z</span>
                    <span className="stat-label">End-to-End Service</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">B2B</span>
                    <span className="stat-label">Focus</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          padding-top: 4rem;
        }
        .section-label {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--color-accent);
          margin-bottom: 1rem;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }
        @media (max-width: 960px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
        .about-text {
          color: var(--color-text-muted);
          font-size: 1.05rem;
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }
        .highlights-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          margin-top: 2rem;
        }
        .highlight-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.95rem;
          color: var(--color-text);
        }
        .highlight-icon {
          color: var(--color-accent);
          flex-shrink: 0;
        }
        .visual-card {
          padding: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow: hidden;
        }
        .logo-container {
          width: 100%;
          background: #0c101b;
          padding: 3rem 2.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .stats-container {
          width: 100%;
          padding: 2.5rem;
          border-top: 1px solid var(--color-border);
        }
        .brand-logo-large {
          width: 100%;
          max-width: 280px;
          object-fit: contain;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          width: 100%;
        }
        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.3rem;
        }
        .stat-number {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--color-accent);
        }
        .stat-label {
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--color-text-muted);
        }
      `}</style>
    </section>
  );
}
