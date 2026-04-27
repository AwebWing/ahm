import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, DollarSign, Cpu, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function WhyWorkWithChinaPage() {
  const { t } = useTranslation();

  const pillars = [
    {
      icon: <DollarSign size={32} />,
      title: t('chinaPage.pillarsTitle'),
      description: t('chinaPage.heroSubtitle'),
    },
    {
      icon: <Cpu size={32} />,
      title: t('chinaPage.pillarsTitle'),
      description: t('chinaPage.heroSubtitle'),
    },
    {
      icon: <Zap size={32} />,
      title: t('chinaPage.pillarsTitle'),
      description: t('chinaPage.heroSubtitle'),
    },
  ];

  const facts = [
    { value: '#1', label: t('chinaPage.facts.hub') },
    { value: '28%', label: t('chinaPage.facts.output') },
    { value: '200+', label: t('chinaPage.facts.exports') },
    { value: '~2B', label: t('chinaPage.facts.products') },
  ];

  return (
    <main style={{ paddingTop: '6rem', position: 'relative', zIndex: 10 }}>

      {/* Hero */}
      <section className="section china-hero">
        <div className="container">
          <div className="section-label-center">{t('chinaPage.heroLabel')}</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem,4.5vw,3.75rem)' }}>
            {t('chinaPage.heroTitle').split(t('chinaPage.heroTitleHighlight'))[0]}
            <span>{t('chinaPage.heroTitleHighlight')}</span>
            {t('chinaPage.heroTitle').split(t('chinaPage.heroTitleHighlight'))[1]}
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '700px', margin: '0 auto' }}>
            {t('chinaPage.heroSubtitle')}
          </p>
        </div>
      </section>

      {/* Facts Strip */}
      <section className="facts-strip">
        <div className="container">
          <div className="facts-grid">
            {facts.map((f, i) => (
              <div key={i} className="fact-item">
                <div className="fact-value">{f.value}</div>
                <div className="fact-label">{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="section pillars-section">
        <div className="container">
          <h2 className="section-title">
            {t('chinaPage.pillarsTitle').split(t('chinaPage.pillarsTitleHighlight'))[0]}
            <span>{t('chinaPage.pillarsTitleHighlight')}</span>
            {t('chinaPage.pillarsTitle').split(t('chinaPage.pillarsTitleHighlight'))[1]}
          </h2>
          <div className="pillars-grid">
            {pillars.map((p, i) => (
              <div key={i} className="glass-panel pillar-card">
                <div className="pillar-icon">{p.icon}</div>
                <h3 className="pillar-title">{p.title}</h3>
                <p className="pillar-desc">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body content */}
      <section className="section context-section">
        <div className="container">
          <div className="context-grid">
            <div>
              <h2 className="section-title" style={{ textAlign: 'left', fontSize: '2rem' }}>
                {t('chinaPage.contextTitle').split(t('chinaPage.contextTitleHighlight'))[0]}
                <span>{t('chinaPage.contextTitleHighlight')}</span>
                {t('chinaPage.contextTitle').split(t('chinaPage.contextTitleHighlight'))[1]}
              </h2>
              <div className="context-points">
                {t('chinaPage.points', { returnObjects: true }).map((point, i) => (
                  <div key={i} className="context-point">
                    <span className="cp-num">{String(i + 1).padStart(2, '0')}</span>
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel closing-card">
              <div className="closing-quote">
                "{t('chinaPage.closingQuote')}"
              </div>
              <p className="closing-body">
                {t('chinaPage.closingBody')}
              </p>
              <div className="closing-steps">
                <div className="cs-step">{t('chinaPage.steps.spec')}</div>
                <div className="cs-arrow">→</div>
                <div className="cs-step">{t('chinaPage.steps.source')}</div>
                <div className="cs-arrow">→</div>
                <div className="cs-step">{t('chinaPage.steps.receive')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section-china">
        <div className="container">
          <div className="cta-box glass-panel">
            <h2>{t('chinaPage.ctaTitle')}</h2>
            <p>
              {t('chinaPage.ctaText')}
            </p>
            <Link to="/#contact" className="btn btn-primary">
              {t('chinaPage.ctaBtn')} <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </Link>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
        </div>
      </footer>

      <style>{`
        .china-hero { padding-bottom: 0; }

        .facts-strip {
          padding: 3rem 0;
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
          background: rgba(207,165,112,0.03);
          position: relative;
          z-index: 10;
        }
        .facts-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          text-align: center;
        }
        @media (max-width: 768px) {
          .facts-grid { grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
        }
        .fact-value {
          font-size: 2rem;
          font-weight: 800;
          color: var(--color-accent);
          line-height: 1;
          margin-bottom: 0.4rem;
        }
        .fact-label {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--color-text-muted);
        }

        .pillars-section { }
        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 768px) {
          .pillars-grid { grid-template-columns: 1fr; }
        }
        .pillar-card {
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          transition: var(--transition);
          text-align: center;
          align-items: center;
        }
        .pillar-card:hover {
          transform: translateY(-5px);
          border-color: rgba(207,165,112,0.3);
        }
        .pillar-icon {
          width: 68px;
          height: 68px;
          border-radius: 50%;
          background: rgba(207,165,112,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-accent);
        }
        .pillar-title {
          font-size: 1.25rem;
          font-weight: 700;
        }
        .pillar-desc {
          color: var(--color-text-muted);
          line-height: 1.7;
          font-size: 0.95rem;
        }

        .context-section { padding-top: 0; }
        .context-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        @media (max-width: 900px) {
          .context-grid { grid-template-columns: 1fr; gap: 3rem; }
        }
        .context-points {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-top: 2rem;
        }
        .context-point {
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
        }
        .cp-num {
          font-size: 0.8rem;
          font-weight: 800;
          color: var(--color-accent);
          opacity: 0.5;
          flex-shrink: 0;
          margin-top: 3px;
          font-variant-numeric: tabular-nums;
        }
        .context-point p {
          color: var(--color-text-muted);
          line-height: 1.7;
          font-size: 0.95rem;
        }
        .closing-card {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .closing-quote {
          font-size: 1.25rem;
          font-weight: 700;
          font-style: italic;
          color: var(--color-accent);
          line-height: 1.4;
          border-left: 3px solid var(--color-accent);
          padding-left: 1.25rem;
        }
        .closing-body {
          color: var(--color-text-muted);
          line-height: 1.7;
          font-size: 0.95rem;
        }
        .closing-steps {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-top: 0.5rem;
        }
        .cs-step {
          background: rgba(207,165,112,0.1);
          border: 1px solid rgba(207,165,112,0.2);
          border-radius: 8px;
          padding: 0.5rem 0.9rem;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--color-accent);
        }
        .cs-arrow {
          color: var(--color-text-muted);
          font-size: 1rem;
        }

        .cta-section-china { padding-top: 0; padding-bottom: 6rem; }
        .cta-box {
          padding: 4rem 3rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
          background: rgba(207,165,112,0.04) !important;
          border-color: rgba(207,165,112,0.2) !important;
        }
        .cta-box h2 {
          font-size: 2rem;
          font-weight: 700;
        }
        .cta-box p {
          color: var(--color-text-muted);
          max-width: 520px;
          line-height: 1.8;
        }
        .site-footer {
          padding: 2rem 0;
          text-align: center;
          border-top: 1px solid var(--color-border);
          color: var(--color-text-muted);
          font-size: 0.875rem;
          position: relative;
          z-index: 10;
          background: rgba(10,15,26,0.9);
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
          margin: 1rem auto 0;
          font-size: 1rem;
          line-height: 1.8;
        }
      `}</style>
    </main>
  );
}
