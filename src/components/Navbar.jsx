import React, { useState, useEffect } from 'react';
import { Globe, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <a href="#" className="logo">
          <Globe className="logo-icon" color="var(--color-accent)" size={28} />
          <span className="logo-text">[Company Name]</span>
        </a>

        {/* Mobile menu button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <a href="#about" onClick={closeMobileMenu}>About</a>
          <a href="#services" onClick={closeMobileMenu}>Services</a>
          <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }} onClick={closeMobileMenu}>Contact Us</a>
        </nav>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          padding: 1.5rem 0;
          transition: var(--transition);
        }
        .navbar.scrolled {
          padding: 1rem 0;
          background: rgba(10, 15, 26, 0.85);
          backdrop-filter: var(--glass-blur);
          border-bottom: 1px solid var(--color-border);
        }
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 700;
          font-size: 1.25rem;
          letter-spacing: 0.5px;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 0.95rem;
          font-weight: 500;
        }
        .nav-links a:not(.btn):hover {
          color: var(--color-accent);
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--color-text);
          cursor: pointer;
          padding: 0.5rem;
        }

        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block;
          }
          .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            width: 280px;
            height: 100vh;
            background: rgba(10, 15, 26, 0.98);
            backdrop-filter: blur(20px);
            flex-direction: column;
            justify-content: center;
            gap: 2rem;
            transition: right 0.3s ease;
            padding: 2rem;
            border-left: 1px solid var(--color-border);
          }
          .nav-links.mobile-open {
            right: 0;
          }
          .nav-links a {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </header>
  );
}
