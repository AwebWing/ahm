import React from 'react';
import { MapPin, Network, CheckCircle2, Languages } from 'lucide-react';

const reasons = [
  {
    icon: <MapPin size={28} />,
    title: 'Based in Tunisia',
    description: 'On-the-ground understanding of the local business environment, regulations, culture, and market dynamics — you\'re never dealing with someone who doesn\'t know Tunisia.',
  },
  {
    icon: <Network size={28} />,
    title: 'Deep Connections in China',
    description: 'We speak the language, know the system, and have built real relationships with factories over years of direct engagement — things a newcomer cannot shortcut.',
  },
  {
    icon: <CheckCircle2 size={28} />,
    title: 'Verified Suppliers Only',
    description: 'No middlemen, no guesswork, no scams. Every supplier is vetted for certifications, performance history, and production capacity before we recommend them.',
  },
  {
    icon: <Languages size={28} />,
    title: 'Full Communication in 4 Languages',
    description: 'We communicate fluently in Arabic, French, English, and Chinese — eliminating every communication barrier across your entire supply chain.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section why-section">
      <div className="container">
        <div className="section-label-center">Why Choose Us?</div>
        <h2 className="section-title">
          Our <span>Competitive Edge</span>
        </h2>
        <p className="section-subtitle">
          We don't just broker deals — we're your strategic partner, combining local expertise with
          an unmatched Chinese supplier network.
        </p>

        <div className="why-grid">
          {reasons.map((r, i) => (
            <div key={i} className="why-card glass-panel">
              <div className="why-icon">{r.icon}</div>
              <div>
                <h3 className="why-title">{r.title}</h3>
                <p className="why-desc">{r.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .why-section {
          background: linear-gradient(180deg, transparent 0%, rgba(10, 15, 26, 0.5) 100%);
        }
        .why-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        @media (max-width: 768px) {
          .why-grid {
            grid-template-columns: 1fr;
          }
        }
        .why-card {
          padding: 2.5rem;
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
          transition: var(--transition);
        }
        .why-card:hover {
          transform: translateY(-4px);
          border-color: rgba(207,165,112,0.3);
          background: var(--color-surface-hover);
        }
        .why-icon {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          background: rgba(207, 165, 112, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-accent);
          flex-shrink: 0;
        }
        .why-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.6rem;
        }
        .why-desc {
          color: var(--color-text-muted);
          font-size: 0.93rem;
          line-height: 1.7;
        }
      `}</style>
    </section>
  );
}
