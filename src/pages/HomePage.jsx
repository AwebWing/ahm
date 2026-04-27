import React from 'react';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import InfoSection from '../components/InfoSection';
import HowWeDoIt from '../components/HowWeDoIt';
import WhyChooseUs from '../components/WhyChooseUs';
import ContactForm from '../components/ContactForm';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <main>
      <Hero />
      <AboutSection />
      <InfoSection />
      <HowWeDoIt />
      <WhyChooseUs />
      <ContactForm />
      <footer className="site-footer">
        <div className="container">
          <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
          <p className="footer-sub">{t('footer.contact')}</p>
        </div>
      </footer>

      <style>{`
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
        .footer-sub {
          margin-top: 0.4rem;
          font-size: 0.8rem;
          opacity: 0.7;
        }
      `}</style>
    </main>
  );
}
