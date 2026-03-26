import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge">slogan</div>
          <h1 className="title">
            str ggggg<br />
            <span className="highlight">C and T</span>
          </h1>
          <p className="subtitle">
            [heroSubtitleText]
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              contact <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </a>
            <a href="#about" className="btn btn-outline">
              info
            </a>
          </div>
        </div>
      </div>

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
          max-width: 800px;
        }
        .badge {
          display: inline-block;
          padding: 0.35rem 1rem;
          background: rgba(207, 165, 112, 0.1);
          color: var(--color-accent);
          border: 1px solid var(--color-accent);
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
        }
        .title {
          font-size: clamp(3rem, 5vw, 4.5rem);
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
          max-width: 600px;
          line-height: 1.8;
        }
        .hero-actions {
          display: flex;
          gap: 1rem;
        }
        
        @media (max-width: 768px) {
          .hero-actions {
            flex-direction: column;
          }
          .hero-actions .btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
