import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge">Tunisia · China · Global Trade</div>
          <h1 className="title">
            Your Bridge Between<br />
            <span className="highlight">Tunisia and China</span>
          </h1>
          <p className="subtitle">
            Sino Tunisian Commercial Cooperation connects Tunisian businesses with verified
            Chinese factories and suppliers. We handle sourcing, logistics, and customs
            across all major industries — so you can focus on growing your business.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Get a Quote <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </a>
            <a href="#who-we-are" className="btn btn-outline">
              Learn More
            </a>
          </div>
        </div>
      </div>

      <a href="#who-we-are" className="scroll-indicator" aria-label="Scroll down">
        <ChevronDown size={24} />
      </a>

      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          z-index: 10;
          padding-top: 5rem;
        }
        .hero-container {
          width: 100%;
        }
        .hero-content {
          max-width: 820px;
          animation: fadeInUp 0.9s ease both;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .badge {
          display: inline-block;
          padding: 0.35rem 1rem;
          background: rgba(207, 165, 112, 0.1);
          color: var(--color-accent);
          border: 1px solid rgba(207, 165, 112, 0.4);
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 1.75rem;
        }
        .title {
          font-size: clamp(2.8rem, 5vw, 4.5rem);
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }
        .highlight {
          color: var(--color-accent);
        }
        .subtitle {
          font-size: 1.1rem;
          color: var(--color-text-muted);
          margin-bottom: 2.5rem;
          max-width: 620px;
          line-height: 1.8;
        }
        .hero-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .scroll-indicator {
          position: absolute;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          color: var(--color-text-muted);
          animation: bounce 2s infinite;
          cursor: pointer;
          z-index: 10;
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }

        @media (max-width: 768px) {
          .hero-actions {
            flex-direction: column;
          }
          .hero-actions .btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
