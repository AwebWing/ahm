import React from 'react';
import { Sun, Thermometer, Zap, Hammer, Factory, Package } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function InfoSection() {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Sun size={28} />,
      title: t('services.items.solar.title'),
      description: t('services.items.solar.desc'),
      badge: t('services.items.solar.badge'),
    },
    {
      icon: <Thermometer size={28} />,
      title: t('services.items.pumps.title'),
      description: t('services.items.pumps.desc'),
    },
    {
      icon: <Zap size={28} />,
      title: t('services.items.lighting.title'),
      description: t('services.items.lighting.desc'),
    },
    {
      icon: <Hammer size={28} />,
      title: t('services.items.construction.title'),
      description: t('services.items.construction.desc'),
    },
    {
      icon: <Factory size={28} />,
      title: t('services.items.industrial.title'),
      description: t('services.items.industrial.desc'),
    },
    {
      icon: <Package size={28} />,
      title: t('services.items.custom.title'),
      description: t('services.items.custom.desc'),
    },
  ];

  return (
    <section id="services" className="section info-section">
      <div className="container">
        <div className="section-label-center">{t('services.label')}</div>
        <h2 className="section-title">
          {t('services.title').split(t('services.titleHighlight'))[0]}
          <span>{t('services.titleHighlight')}</span>
          {t('services.title').split(t('services.titleHighlight'))[1]}
        </h2>
        <p className="section-subtitle">
          {t('services.subtitle')}
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
