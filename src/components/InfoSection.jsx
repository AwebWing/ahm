import React from 'react';
import { Truck, ShieldCheck, Globe2 } from 'lucide-react';

export default function InfoSection() {
  const services = [
    {
      icon: <Globe2 size={32} color="var(--color-accent)" />,
      title: "Global Sourcing",
      description: "[service1Description]"
    },
    {
      icon: <Truck size={32} color="var(--color-accent)" />,
      title: "Logistics & Shipping",
      description: "[service2Description]"
    },
    {
      icon: <ShieldCheck size={32} color="var(--color-accent)" />,
      title: "Quality Assurance",
      description: "[service3Description]"
    }
  ];

  return (
    <section id="services" className="section info-section">
      <div className="container">
        <h2 className="section-title">
          Our <span>Expertise</span>
        </h2>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="glass-panel service-card">
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
          background: linear-gradient(180deg, transparent 0%, rgba(10, 15, 26, 0.5) 100%);
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-top: 3rem;
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
        }
        .service-card:hover {
          transform: translateY(-5px);
          background: var(--color-surface-hover);
          border-color: rgba(207, 165, 112, 0.3);
        }
        .icon-wrapper {
          width: 64px;
          height: 64px;
          border-radius: 12px;
          background: rgba(207, 165, 112, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }
        .card-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .card-desc {
          color: var(--color-text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
}
