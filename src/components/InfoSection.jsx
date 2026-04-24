import React from 'react';
import { Sun, Thermometer, Zap, Hammer, Factory, Package } from 'lucide-react';

const services = [
  {
    icon: <Sun size={28} />,
    title: 'Solar Panels & Accessories',
    description: 'Official representative of Yingli Solar in North Africa — bringing world-class, tier-1 certified photovoltaic systems to the Tunisian market.',
    badge: 'Yingli Solar Partner',
  },
  {
    icon: <Thermometer size={28} />,
    title: 'Heat Pumps',
    description: 'High-efficiency heat pump solutions sourced directly from leading Chinese manufacturers for residential and commercial applications.',
  },
  {
    icon: <Zap size={28} />,
    title: 'Electricity & Lighting',
    description: 'A comprehensive range of electrical components, switchgear, and professional lighting solutions at competitive wholesale prices.',
  },
  {
    icon: <Hammer size={28} />,
    title: 'Construction Machines & Materials',
    description: 'Heavy machinery, construction materials, and tools sourced on-demand from verified Chinese factories — no minimum catalog restrictions.',
  },
  {
    icon: <Factory size={28} />,
    title: 'Industrial Equipment',
    description: 'Industrial machinery and materials across a broad range of sectors, tailored to your specifications and sourced from certified suppliers.',
  },
  {
    icon: <Package size={28} />,
    title: 'Custom Sourcing',
    description: 'Tell us what you need — from any sector — and we find the right factory. Our order-based model means you only import what you need.',
  },
];

export default function InfoSection() {
  return (
    <section id="services" className="section info-section">
      <div className="container">
        <div className="section-label-center">What We Do</div>
        <h2 className="section-title">
          Products & <span>Services</span>
        </h2>
        <p className="section-subtitle">
          From solar energy to industrial equipment, we source the products your business needs —
          directly from verified Chinese factories, with full logistics support.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className={`glass-panel service-card ${service.badge ? 'featured' : ''}`}>
              {service.badge && <div className="service-badge">{service.badge}</div>}
              <div className="icon-wrapper">
                {service.icon}
              </div>
              <h3 className="card-title">{service.title}</h3>
              <p className="card-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .info-section {
          background: linear-gradient(180deg, transparent 0%, rgba(10, 15, 26, 0.4) 100%);
        }
        .section-label-center {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--color-accent);
          text-align: center;
          margin-bottom: 0.75rem;
        }
        .section-subtitle {
          text-align: center;
          color: var(--color-text-muted);
          max-width: 600px;
          margin: 0 auto 3.5rem;
          font-size: 1rem;
          line-height: 1.8;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
        .service-card {
          padding: 2.5rem 2rem;
          transition: var(--transition);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          position: relative;
          overflow: hidden;
        }
        .service-card.featured {
          border-color: rgba(207, 165, 112, 0.35);
          background: rgba(207, 165, 112, 0.04);
        }
        .service-card:hover {
          transform: translateY(-5px);
          background: var(--color-surface-hover);
          border-color: rgba(207, 165, 112, 0.3);
        }
        .service-badge {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--color-accent);
          background: rgba(207, 165, 112, 0.12);
          border: 1px solid rgba(207, 165, 112, 0.3);
          padding: 0.2rem 0.65rem;
          border-radius: 50px;
          margin-bottom: 1.25rem;
        }
        .icon-wrapper {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          background: rgba(207, 165, 112, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
          color: var(--color-accent);
        }
        .card-title {
          font-size: 1.15rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }
        .card-desc {
          color: var(--color-text-muted);
          font-size: 0.93rem;
          line-height: 1.7;
        }
      `}</style>
    </section>
  );
}
