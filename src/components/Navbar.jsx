import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Navbar() {
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
          <span className="logo-text">Sino Tunisian<span className="logo-cc"> CC</span></span>
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
          <Link to="/" onClick={closeMobileMenu}>Home</Link>
          <Link to="/competitive-advantage" onClick={closeMobileMenu}>Our Competitive Advantage</Link>
          <Link to="/why-work-with-china" onClick={closeMobileMenu}>Why Work with China?</Link>
          <Link to="/#who-we-are" onClick={closeMobileMenu}>Who We Are</Link>
          <Link to="/#contact" className="btn btn-primary nav-cta" onClick={closeMobileMenu}>Contact Us</Link>
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
          flex-shrink: 0;
          text-decoration: none;
        }
        .logo-cc {
          color: var(--color-accent);
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          font-size: 0.9rem;
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
          color: var(--color-text);
          cursor: pointer;
          padding: 0.5rem;
          z-index: 200;
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
        }
      `}</style>
    </header>
  );
}
