import React, { useState } from 'react';
import { Mail, MapPin, MessageCircle, Send } from 'lucide-react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-bg-overlay" />
      <div className="container">
        <div className="contact-header">
          <div className="section-label-center">Contact Us</div>
          <h2 className="section-title" style={{ color: '#fff' }}>
            Let's <span>Talk Business</span>
          </h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Tell us what you need. We'll handle the rest — sourcing, logistics, customs, delivery.
          </p>
        </div>

        <div className="contact-grid">
          {/* Info side */}
          <div className="contact-info">
            <div className="info-cards">
              <a href="https://wa.me/21652773919" target="_blank" rel="noopener noreferrer" className="info-card">
                <div className="info-card-icon">
                  <MessageCircle size={22} />
                </div>
                <div>
                  <div className="info-card-label">WhatsApp</div>
                  <div className="info-card-value">+216 52 773 919</div>
                </div>
              </a>
              <a href="mailto:ahmed@sinotuncc.com" className="info-card">
                <div className="info-card-icon">
                  <Mail size={22} />
                </div>
                <div>
                  <div className="info-card-label">Email</div>
                  <div className="info-card-value">ahmed@sinotuncc.com</div>
                </div>
              </a>
              <div className="info-card">
                <div className="info-card-icon">
                  <MapPin size={22} />
                </div>
                <div>
                  <div className="info-card-label">Location</div>
                  <div className="info-card-value">Tunis, Tunisia</div>
                </div>
              </div>
            </div>

            <div className="contact-tagline">
              <div className="tagline-line">"We're not just a trading company.</div>
              <div className="tagline-line accent">We're your bridge to global success."</div>
            </div>
          </div>

          {/* Form side */}
          <div className="glass-panel form-wrapper">
            {submitted ? (
              <div className="form-success">
                <div className="success-icon">✓</div>
                <h3>Message Sent!</h3>
                <p>We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">Name</label>
                    <input id="contact-name" type="text" placeholder="Your full name" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-company">Company</label>
                    <input id="contact-company" type="text" placeholder="Your company name" className="form-control" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="contact-phone">Phone / WhatsApp</label>
                  <input id="contact-phone" type="tel" placeholder="+216 XX XXX XXX" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea id="contact-message" rows="5" placeholder="What product or service are you looking for? Include specs, quantity, and any relevant details." className="form-control" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary submit-btn">
                  <Send size={16} style={{ marginRight: '8px' }} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          position: relative;
          overflow: hidden;
        }
        .contact-bg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(15,20,35,0.97) 0%, rgba(30,20,10,0.95) 100%);
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 150px);
          mask-image: linear-gradient(to bottom, transparent 0%, black 150px);
          z-index: -1;
        }
        .contact-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 50% at 20% 50%, rgba(207,165,112,0.08) 0%, transparent 70%),
            radial-gradient(ellipse 50% 60% at 80% 50%, rgba(10,20,50,0.5) 0%, transparent 70%);
          z-index: -1;
        }
        .contact-header {
          margin-bottom: 3.5rem;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 4rem;
          align-items: start;
        }
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
        .info-cards {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 3rem;
        }
        .info-card {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.25rem 1.5rem;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          transition: var(--transition);
          cursor: default;
          text-decoration: none;
          color: var(--color-text);
        }
        a.info-card {
          cursor: pointer;
        }
        a.info-card:hover {
          background: rgba(207,165,112,0.08);
          border-color: rgba(207,165,112,0.25);
        }
        .info-card-icon {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(207,165,112,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-accent);
          flex-shrink: 0;
        }
        .info-card-label {
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: rgba(255,255,255,0.45);
          margin-bottom: 0.2rem;
        }
        .info-card-value {
          font-size: 0.95rem;
          font-weight: 500;
        }
        .contact-tagline {
          padding: 1.5rem;
          border-left: 3px solid var(--color-accent);
          font-size: 1rem;
          font-style: italic;
          line-height: 1.7;
          color: rgba(255,255,255,0.7);
        }
        .contact-tagline .accent {
          color: var(--color-accent);
          font-weight: 600;
        }
        .form-wrapper {
          padding: 2.5rem;
          background: rgba(20,26,40,0.6) !important;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        @media (max-width: 560px) {
          .form-row {
            grid-template-columns: 1fr;
          }
        }
        .form-group {
          margin-bottom: 1.25rem;
        }
        .form-group label {
          display: block;
          margin-bottom: 0.4rem;
          font-size: 0.85rem;
          font-weight: 500;
          color: rgba(255,255,255,0.6);
        }
        .form-control {
          width: 100%;
          background: rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 0.8rem 1rem;
          border-radius: 8px;
          color: var(--color-text);
          font-family: inherit;
          font-size: 0.95rem;
          transition: var(--transition);
        }
        .form-control::placeholder {
          color: rgba(255,255,255,0.3);
        }
        .form-control:focus {
          outline: none;
          border-color: var(--color-accent);
          background: rgba(0, 0, 0, 0.4);
        }
        textarea.form-control {
          resize: vertical;
          min-height: 130px;
        }
        .submit-btn {
          width: 100%;
          margin-top: 0.5rem;
          justify-content: center;
          font-size: 1rem;
          padding: 1rem;
        }
        .form-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4rem 2rem;
          text-align: center;
          gap: 1rem;
        }
        .success-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(207,165,112,0.15);
          border: 2px solid var(--color-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.75rem;
          color: var(--color-accent);
        }
        .form-success h3 {
          font-size: 1.5rem;
          font-weight: 600;
        }
        .form-success p {
          color: var(--color-text-muted);
        }
      `}</style>
    </section>
  );
}
