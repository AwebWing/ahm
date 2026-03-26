import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactForm() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">
          Get in <span>Touch</span>
        </h2>
        
        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="info-title">let us now</h3>
            <p className="info-desc">
              [contactDescriptionText]
            </p>
            
            <div className="info-list">
              <div className="info-item">
                <Mail className="info-icon" />
                <div>
                  <h4>Email Us</h4>
                  <p>[emailAddress]</p>
                </div>
              </div>
              <div className="info-item">
                <Phone className="info-icon" />
                <div>
                  <h4>Call Us</h4>
                  <p>[phoneNumber]</p>
                </div>
              </div>
              <div className="info-item">
                <MapPin className="info-icon" />
                <div>
                  <h4>Office</h4>
                  <p>[officeLocation]</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel form-wrapper">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Your name" className="form-control" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="you@example.com" className="form-control" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="4" placeholder="How can we help?" className="form-control"></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 4rem;
          align-items: center;
        }
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
        .info-title {
          font-size: 1.75rem;
          margin-bottom: 1rem;
        }
        .info-desc {
          color: var(--color-text-muted);
          margin-bottom: 3rem;
          line-height: 1.6;
        }
        .info-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }
        .info-icon {
          color: var(--color-accent);
          margin-top: 0.2rem;
        }
        .info-item h4 {
          font-size: 1rem;
          margin-bottom: 0.2rem;
        }
        .info-item p {
          color: var(--color-text-muted);
          font-size: 0.95rem;
        }
        
        .form-wrapper {
          padding: 3rem;
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--color-text-muted);
        }
        .form-control {
          width: 100%;
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid var(--color-border);
          padding: 0.8rem 1rem;
          border-radius: 8px;
          color: var(--color-text);
          font-family: inherit;
          font-size: 1rem;
          transition: var(--transition);
        }
        .form-control:focus {
          outline: none;
          border-color: var(--color-accent);
          background: rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </section>
  );
}
