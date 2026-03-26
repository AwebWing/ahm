import React from 'react';
import Background3D from './components/Background3D';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import AboutSection from './components/AboutSection';
import ContactForm from './components/ContactForm';
import './index.css';

function App() {
  return (
    <>
      <Background3D />
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <InfoSection />
        <ContactForm />
      </main>
      <footer style={{
        padding: '2rem 0',
        textAlign: 'center',
        borderTop: '1px solid var(--color-border)',
        color: 'var(--color-text-muted)',
        fontSize: '0.9rem',
        position: 'relative',
        zIndex: 10
      }}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} [Company Name]. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
