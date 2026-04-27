import React from 'react';
import { MapPin, Network, CheckCircle2, Languages } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function WhyChooseUs() {
  const { t } = useTranslation();

  const reasons = [
    {
      icon: <MapPin size={28} />,
      title: t('whyUs.reasons.tunisia.title'),
      description: t('whyUs.reasons.tunisia.desc'),
    },
    {
      icon: <Network size={28} />,
      title: t('whyUs.reasons.china.title'),
      description: t('whyUs.reasons.china.desc'),
    },
    {
      icon: <CheckCircle2 size={28} />,
      title: t('whyUs.reasons.verified.title'),
      description: t('whyUs.reasons.verified.desc'),
    },
    {
      icon: <Languages size={28} />,
      title: t('whyUs.reasons.languages.title'),
      description: t('whyUs.reasons.languages.desc'),
    },
  ];

  return (
    <section className="section why-section">
      <div className="container">
        <div className="section-label-center">{t('whyUs.label')}</div>
        <h2 className="section-title">
          {t('whyUs.title').split(t('whyUs.titleHighlight'))[0]}
          <span>{t('whyUs.titleHighlight')}</span>
          {t('whyUs.title').split(t('whyUs.titleHighlight'))[1]}
        </h2>
        <p className="section-subtitle">
          {t('whyUs.subtitle')}
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
