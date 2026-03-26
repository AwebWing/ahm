import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <a href="#" className="logo">
          <Globe className="logo-icon" color="var(--color-accent)" size={28} />
          <span className="logo-text">[Company Name]</span>
        </a>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Contact Us</a>
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
      `}</style>
    </header>
  );
}
