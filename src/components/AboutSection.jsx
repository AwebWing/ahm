import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              Our <span>Mission</span>
            </h2>
            <p className="about-text">
              [missionText]
            </p>
            <p className="about-text">
              [aboutCompanyText]
            </p>
            
            <div className="stats-row">
              <div className="stat-item">
                <h4 className="stat-number">[0]</h4>
                <p className="stat-label">Years Experience</p>
              </div>
              <div className="stat-item">
                <h4 className="stat-number">[0]</h4>
                <p className="stat-label">Shipments Delivered</p>
              </div>
              <div className="stat-item">
                <h4 className="stat-number">[0]</h4>
                <p className="stat-label">Client Satisfaction</p>
              </div>
            </div>
          </div>
          
          <div className="about-visual">
            <div className="glass-panel image-placeholder">
              <p>[Add a professional overview image, warehouse, or map here]</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          padding-top: 2rem;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }
        .about-text {
          color: var(--color-text-muted);
          font-size: 1.05rem;
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }
        .stats-row {
          display: flex;
          gap: 2rem;
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid var(--color-border);
        }
        .stat-number {
          font-size: 2rem;
          color: var(--color-accent);
          font-weight: 700;
          margin-bottom: 0.25rem;
        }
        .stat-label {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .image-placeholder {
          aspect-ratio: 4/3;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 2rem;
          color: var(--color-text-muted);
          background: rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </section>
  );
}
