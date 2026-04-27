import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import logoImg from '../assets/logo.png';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle scroll position on route or hash change
  useEffect(() => {
    setMobileMenuOpen(false);
    
    if (location.hash) {
      // Timeout ensures the DOM has updated before trying to scroll
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  const closeMobileMenu = () => setMobileMenuOpen(false);


  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <Link to="/" className="logo">
          <img src={logoImg} alt="Sino Tunisian CC Logo" className="logo-image" style={{ height: '36px', width: 'auto', objectFit: 'contain' }} />
          <span className="logo-text"><span>{t('logo.text')}</span></span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/" onClick={closeMobileMenu}>{t('nav.home')}</Link>
          <Link to="/competitive-advantage" onClick={closeMobileMenu}>{t('nav.advantage')}</Link>
          <Link to="/why-work-with-china" onClick={closeMobileMenu}>{t('nav.whyChina')}</Link>
          <Link to="/#who-we-are" onClick={closeMobileMenu}>{t('nav.whoWeAre')}</Link>
          <Link to="/#contact" className="btn btn-primary nav-cta" onClick={closeMobileMenu}>{t('nav.contact')}</Link>
          
          <div className="lang-selector">
            <Globe size={16} className="lang-icon" />
            <select 
              className="lang-select" 
              value={i18n.language.split('-')[0]} 
              onChange={(e) => i18n.changeLanguage(e.target.value)}
            >
              <option value="en">EN</option>
              <option value="fr">FR</option>
              <option value="zh">ZH</option>
            </select>
          </div>
        </nav>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          padding: 1.25rem 0;
          transition: var(--transition);
        }
        .navbar.scrolled {
          padding: 0.85rem 0;
          background: rgba(10, 15, 26, 0.92);
          backdrop-filter: var(--glass-blur);
          border-bottom: 1px solid var(--color-border);
          box-shadow: 0 4px 24px rgba(0,0,0,0.3);
        }
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 700;
          font-size: 1.1rem;
          letter-spacing: 0.3px;
          flex-shrink: 1; /* Allow logo to shrink if needed */
          min-width: 0;
          text-decoration: none;
          color: #ffffff;
        }
        .logo-text {
          font-size: 1.1rem;
          font-weight: 700;
          white-space: nowrap;
          color: #ffffff;
        }
        
        @media (max-width: 1200px) {
          .logo {
            gap: 0.5rem;
          }
          .nav-links {
            gap: 1rem;
            font-size: 0.85rem;
          }
          .logo-text {
            font-size: 1rem;
          }
        }

        @media (max-width: 900px) {
          .logo-text {
            font-size: 1rem;
            max-width: 240px;
            overflow: hidden;
          }
          
          .logo-text span {
            display: inline-block;
            white-space: nowrap;
            animation: spotify-slide 10s ease-in-out infinite;
          }
        }

        @keyframes spotify-slide {
          0%, 15% { transform: translateX(0); }
          40%, 60% { transform: translateX(calc(-100% + 230px)); }
          85%, 100% { transform: translateX(0); }
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          font-size: 0.85rem;
          font-weight: 500;
        }
        .nav-links a:not(.btn) {
          position: relative;
          padding-bottom: 2px;
          transition: color 0.2s;
          text-decoration: none;
          color: var(--color-text);
          white-space: nowrap;
        }
        .nav-links a:not(.btn)::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0;
          height: 1.5px;
          background: var(--color-accent);
          transition: width 0.25s ease;
        }
        .nav-links a:not(.btn):hover {
          color: var(--color-accent);
        }
        .nav-links a:not(.btn):hover::after {
          width: 100%;
        }
        .nav-cta {
          padding: 0.5rem 1.25rem !important;
          font-size: 0.9rem !important;
          white-space: nowrap;
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: #ffffff; /* Use white explicitly to be sure */
          cursor: pointer;
          padding: 0.5rem;
          z-index: 200;
          flex-shrink: 0;
        }

        @media (max-width: 900px) {
          .mobile-menu-btn {
            display: block;
          }
          .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            width: 300px;
            height: 100vh;
            background: rgba(10, 15, 26, 0.98);
            backdrop-filter: blur(20px);
            flex-direction: column;
            justify-content: center;
            gap: 2rem;
            transition: right 0.3s ease;
            padding: 2rem;
            border-left: 1px solid var(--color-border);
            z-index: 150;
          }
          .nav-links.mobile-open {
            right: 0;
          }
          .nav-links a {
            font-size: 1.05rem;
          }
          .nav-cta {
            width: 100%;
            justify-content: center;
          }
          .lang-selector {
            margin-top: 1rem;
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .logo-text {
            max-width: 140px;
          }
        }
        
        .lang-selector {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          margin-left: 0.5rem;
          padding: 0.3rem 0.6rem;
          background: rgba(255,255,255,0.05);
          border-radius: 20px;
          border: 1px solid var(--color-border);
          transition: var(--transition);
        }
        .lang-selector:hover {
          background: rgba(255,255,255,0.1);
          border-color: var(--color-accent);
        }
        .lang-icon {
          color: var(--color-accent);
          opacity: 0.8;
        }
        .lang-select {
          background: transparent;
          border: none;
          color: var(--color-text);
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          outline: none;
          padding-right: 0.2rem;
          text-transform: uppercase;
        }
        .lang-select option {
          background: #0a0f1a;
          color: white;
        }
      `}</style>
    </header>
  );
}
