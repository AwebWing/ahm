import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Diamond, TrendingUp, Layers } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function CompetitiveAdvantagePage() {
  const { t } = useTranslation();

  const advantages = [
    {
      icon: <TrendingUp size={28} />,
      title: t('caPage.table.attr1'),
      description: t('caPage.ctaText1'),
      tag: t('caPage.heroLabel'),
    },
    {
      icon: <Diamond size={28} />,
      title: t('caPage.table.attr2'),
      description: t('caPage.ctaText1'),
      tag: t('caPage.heroLabel'),
    },
    {
      icon: <Shield size={28} />,
      title: t('caPage.table.attr3'),
      description: t('caPage.ctaText1'),
      tag: t('caPage.heroLabel'),
    },
    {
      icon: <Layers size={28} />,
      title: t('caPage.table.attr4'),
      description: t('caPage.ctaText1'),
      tag: t('caPage.heroLabel'),
    },
  ];

  const comparisonRows = [
    { attr: t('caPage.table.attr1'), us: true, typical: false },
    { attr: t('caPage.table.attr2'), us: true, typical: false },
    { attr: t('caPage.table.attr3'), us: true, typical: false },
    { attr: t('caPage.table.attr4'), us: true, typical: false },
    { attr: t('caPage.table.attr5'), us: true, typical: false },
    { attr: t('caPage.table.attr6'), us: true, typical: false },
  ];

  return (
    <main style={{ paddingTop: '6rem', position: 'relative', zIndex: 10 }}>
      {/* Hero */}
      <section className="ca-hero section">
        <div className="container">
          <div className="section-label-center">{t('caPage.heroLabel')}</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem,4vw,3.5rem)' }}>
            {t('caPage.heroTitle').split(t('caPage.heroTitleHighlight'))[0]}
            <span>{t('caPage.heroTitleHighlight')}</span>
            {t('caPage.heroTitle').split(t('caPage.heroTitleHighlight'))[1]}
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '720px', margin: '0 auto 4rem' }}>
            {t('caPage.heroSubtitle')}
          </p>
        </div>
      </section>

      {/* Advantages Grid */}
      <section className="section" style={{ paddingTop: '0' }}>
        <div className="container">
          <div className="ca-grid">
            {advantages.map((adv, i) => (
              <div key={i} className={`glass-panel ca-card sustained`}>
                <div className="ca-icon">{adv.icon}</div>
                <div className="ca-tag">{adv.tag}</div>
                <h3 className="ca-title">{adv.title}</h3>
                <p className="ca-desc">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section comparison-section">
        <div className="container">
          <h2 className="section-title">
            {t('caPage.comparisonTitle').split(t('caPage.comparisonTitleHighlight'))[0]}
            <span>{t('caPage.comparisonTitleHighlight')}</span>
            {t('caPage.comparisonTitle').split(t('caPage.comparisonTitleHighlight'))[1]}
          </h2>
          <div className="table-wrap glass-panel">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>{t('caPage.table.capability')}</th>
                  <th>{t('caPage.table.us')}</th>
                  <th>{t('caPage.table.typical')}</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i}>
                    <td>{row.attr}</td>
                    <td className={row.us ? 'tick' : 'cross'}>{row.us ? '✓' : '✗'}</td>
                    <td className={row.typical ? 'tick' : 'cross'}>{row.typical ? '✓' : '✗'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-box glass-panel">
            <h2>{t('caPage.ctaTitle')}</h2>
            <p>
              {t('caPage.ctaText1')}
            </p>
            <p style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: '1.1rem' }}>
              {t('caPage.ctaText2')}
            </p>
            <Link to="/#contact" className="btn btn-primary" style={{ marginTop: '1rem' }}>
              {t('caPage.ctaBtn')} <ArrowRight size={18} style={{ marginLeft: '8px' }} />
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
        .ca-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 1.5rem;
        }
        @media (max-width: 700px) {
          .ca-grid { grid-template-columns: 1fr; }
        }
        .ca-card {
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          transition: var(--transition);
        }
        .ca-card:hover {
          transform: translateY(-4px);
          border-color: rgba(207,165,112,0.3);
        }
        .ca-card.sustained {
          border-color: rgba(207,165,112,0.2);
        }
        .ca-icon {
          width: 54px;
          height: 54px;
          border-radius: 12px;
          background: rgba(207,165,112,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-accent);
          margin-bottom: 0.5rem;
        }
        .ca-tag {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--color-accent);
        }
        .ca-card.temporary .ca-tag {
          color: #a0aec0;
        }
        .ca-title {
          font-size: 1.1rem;
          font-weight: 600;
          line-height: 1.3;
        }
        .ca-desc {
          color: var(--color-text-muted);
          font-size: 0.93rem;
          line-height: 1.7;
        }
        .comparison-section { padding-top: 0; }
        .table-wrap {
          overflow-x: auto;
          border-radius: 12px;
        }
        .comparison-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.95rem;
        }
        .comparison-table th {
          padding: 1.25rem 1.5rem;
          text-align: left;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--color-text-muted);
          border-bottom: 1px solid var(--color-border);
        }
        .comparison-table th:nth-child(2),
        .comparison-table th:nth-child(3) {
          text-align: center;
        }
        .comparison-table td {
          padding: 1rem 1.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .comparison-table tr:last-child td {
          border-bottom: none;
        }
        .comparison-table td.tick {
          text-align: center;
          color: var(--color-accent);
          font-size: 1.25rem;
          font-weight: 700;
        }
        .comparison-table td.cross {
          text-align: center;
          color: rgba(255,255,255,0.25);
          font-size: 1.25rem;
        }
        .comparison-table tr:hover td {
          background: rgba(255,255,255,0.02);
        }
        .cta-section { padding-top: 0; padding-bottom: 6rem; }
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
          max-width: 480px;
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
          margin: 0 auto 3rem;
          font-size: 1rem;
          line-height: 1.8;
        }
      `}</style>
    </main>
  );
}
