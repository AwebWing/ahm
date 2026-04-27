import React, { useEffect, useRef, useState } from 'react';
import { MessageSquare, Search, Package, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function StepCard({ step, index, visible }) {
  const labelRef = useRef(null);
  const [slideDist, setSlideDist] = useState(160); // default fallback

  useEffect(() => {
    const el = labelRef.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;

    const updateDist = () => {
      const parentWidth = parent.offsetWidth;
      const maxSlide = Math.max(0, parentWidth - 48); // 48 for icon
      const desiredSlide = el.scrollWidth + 14; //
      setSlideDist(Math.min(desiredSlide, maxSlide));
    };

    const observer = new ResizeObserver(() => {
      updateDist();
    });

    observer.observe(el);
    observer.observe(parent);
    updateDist();

    return () => observer.disconnect();
  }, [step.title]);

  return (
    <div
      className={`step-card ${visible ? 'step-visible' : ''}`}
      style={{
        '--delay': `${index * 0.12}s`,
        '--slide-dist': `${slideDist}px`
      }}
    >
      <div className="step-hover-row">
        <div className="step-icon-wrap">
          {step.icon}
        </div>
        <span className="step-hover-label" ref={labelRef}>{step.title}</span>
      </div>

      <p className="step-desc">{step.description}</p>
    </div>
  );
}

export default function HowWeDoIt() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const steps = [
    {
      icon: <MessageSquare size={24} />,
      title: t('how.steps.need.title'),
      description: t('how.steps.need.desc'),
    },
    {
      icon: <Search size={24} />,
      title: t('how.steps.find.title'),
      description: t('how.steps.find.desc'),
    },
    {
      icon: <Package size={24} />,
      title: t('how.steps.manage.title'),
      description: t('how.steps.manage.desc'),
    },
    {
      icon: <CheckCircle size={24} />,
      title: t('how.steps.receive.title'),
      description: t('how.steps.receive.desc'),
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section how-section" ref={sectionRef}>
      <div className="container">
        <div className="section-label-center">{t('how.label')}</div>
        <h2 className="section-title">
          {t('how.title').split(t('how.titleHighlight'))[0]}
          <span>{t('how.titleHighlight')}</span>
          {t('how.title').split(t('how.titleHighlight'))[1]}
        </h2>
        <p className="section-subtitle">
          {t('how.subtitle')}
        </p>

        <div className="steps-grid">
          {steps.map((step, i) => (
            <StepCard key={i} step={step} index={i} visible={visible} />
          ))}
        </div>
      </div>

      <style>{`
        .how-section {
          background: linear-gradient(180deg, rgba(10,15,26,0.4) 0%, transparent 100%);
        }

        /* ── Grid ── */
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          position: relative;
          background: var(--color-surface);
          backdrop-filter: var(--glass-blur);
          -webkit-backdrop-filter: var(--glass-blur);
          border-radius: 12px;
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-elem);
          overflow: hidden;
        }
        @media (max-width: 960px) {
          .steps-grid { grid-template-columns: 1fr 1fr; gap: 0; }
        }
        @media (max-width: 560px) {
          .steps-grid { grid-template-columns: 1fr; }
        }

        /* ── Card ── */
        .step-card {
          padding: 2.5rem 1.5rem;
          position: relative;
          border-right: 1px solid var(--color-border);
          cursor: default;

          opacity: 0;
          transform: translateY(22px);
          transition:
            opacity 0.55s ease var(--delay),
            transform 0.55s ease var(--delay),
            background 0.3s ease;
        }
        .step-card.step-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .step-card:hover {
          background: rgba(207,165,112,0.04);
        }
        .step-card:last-child { border-right: none; }

        @media (max-width: 960px) {
          .step-card {
            border-right: none;
            border-bottom: 1px solid var(--color-border);
            padding-bottom: 2.25rem;
          }
          .step-card:nth-child(even) { border-left: 1px solid var(--color-border); }
          .step-card:last-child,
          .step-card:nth-last-child(2) { border-bottom: none; }
        }
        @media (max-width: 560px) {
          .step-card { border-right: none; border-left: none; }
        }

        /* ── Hover row: fixed height ── */
        .step-hover-row {
          position: relative;
          height: 48px;
          margin-bottom: 1.25rem;
          /* overflow removed to allow icon's box-shadow to glow naturally */
        }

        /* Icon: absolutely at left:0, on top of text, slides right on hover */
        .step-icon-wrap {
          position: absolute;
          left: 0;
          top: 0;
          width: 48px;
          height: 48px;
          border-radius: 10px;
          background: rgba(207,165,112,0.1);
          border: 1px solid rgba(207,165,112,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-accent);
          z-index: 2;
          transition:
            transform    0.45s cubic-bezier(0.3, 0.8, 0.3, 1),
            background   0.3s ease,
            box-shadow   0.3s ease;
        }

        /* Text: behind icon at left:0, revealed by clip-path wipe */
        .step-hover-label {
          position: absolute;
          left: 0;
          top: 0;
          height: 48px;
          display: flex;
          align-items: center;
          padding-left: 8px;
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--color-accent);
          white-space: normal;
          max-width: calc(100% - 62px);
          line-height: 1.2;
          z-index: 1;
          /* Fully hidden — clipped from the right */
          clip-path: inset(0 100% 0 0);
          /* Text starts very faint, hits full opacity when slide concludes */
          opacity: 0.1;
          transition:
            clip-path 0.45s cubic-bezier(0.3, 0.8, 0.3, 1),
            opacity   0.45s cubic-bezier(0.3, 0.8, 0.3, 1);
        }

        /* On hover: icon slides dynamic width, text wipe syncs perfectly */
        .step-card:hover .step-icon-wrap {
          transform:  translateX(var(--slide-dist));
          background: rgba(207,165,112,0.18);
          box-shadow: 0 0 16px rgba(207,165,112,0.35);
        }
        .step-card:hover .step-hover-label {
          clip-path: inset(0 0% 0 0);
          opacity: 1;
        }

        /* ── Description ── */
        .step-desc {
          color: var(--color-text-muted);
          font-size: 0.92rem;
          line-height: 1.7;
        }
      `}</style>
    </section>
  );
}
