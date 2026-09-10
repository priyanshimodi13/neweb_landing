import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [pastHero, setPastHero] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroThreshold = (window.innerHeight || 650) - 100;
      setPastHero(window.scrollY > heroThreshold);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        background: pastHero ? 'rgba(247, 247, 244, 0.82)' : 'transparent',
        backdropFilter: pastHero ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: pastHero ? 'blur(16px)' : 'none',
        borderBottom: pastHero ? '1px solid rgba(0, 0, 0, 0.06)' : 'none',
        boxShadow: pastHero ? '0 4px 20px rgba(0, 0, 0, 0.04)' : 'none',
        padding: pastHero ? '12px 24px' : '18px 24px',
      }}
    >
      <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Text positioned at left corner using Silkscreen font */}
        <a
          href="#"
          className="silkscreen-regular"
          style={{
            fontSize: '1.4rem',
            fontWeight: 400,
            textDecoration: 'none',
            color: pastHero ? '#18181b' : '#ffffff',
            letterSpacing: '0.04em',
            transition: 'color 0.3s ease, text-shadow 0.3s ease',
            textShadow: pastHero ? 'none' : '0 2px 10px rgba(0, 0, 0, 0.6)',
          }}
        >
          commerciax
        </a>

        {/* Desktop Nav Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
          }}
          className="desktop-links"
        >
          <a href="#features" style={{ color: pastHero ? '#27272a' : '#ffffff', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s', textShadow: pastHero ? 'none' : '0 1px 4px rgba(0, 0, 0, 0.6)' }}>
            Features
          </a>
          <a href="#showcase" style={{ color: pastHero ? '#27272a' : '#ffffff', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s', textShadow: pastHero ? 'none' : '0 1px 4px rgba(0, 0, 0, 0.6)' }}>
            Platform
          </a>
          <a href="#pricing" style={{ color: pastHero ? '#27272a' : '#ffffff', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s', textShadow: pastHero ? 'none' : '0 1px 4px rgba(0, 0, 0, 0.6)' }}>
            Pricing
          </a>
          <a href="#testimonials" style={{ color: pastHero ? '#27272a' : '#ffffff', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s', textShadow: pastHero ? 'none' : '0 1px 4px rgba(0, 0, 0, 0.6)' }}>
            Reviews
          </a>
        </div>

        {/* Action Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a
            href="#cta"
            className="btn"
            style={{
              padding: '10px 22px',
              fontSize: '0.9rem',
              background: '#ffffff',
              color: '#18181b',
              fontWeight: 500,
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)',
              transition: 'all 0.2s ease',
            }}
          >
            <span>Get Call</span>
            <ArrowRight size={16} />
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: pastHero ? '#374151' : '#fff',
              cursor: 'pointer',
              display: 'none',
            }}
            className="mobile-toggle"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(15, 23, 42, 0.95)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--border-color)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
          }}
        >
          <a href="#features" onClick={() => setMobileMenuOpen(false)} style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1rem' }}>Features</a>
          <a href="#showcase" onClick={() => setMobileMenuOpen(false)} style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1rem' }}>Platform</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)} style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1rem' }}>Pricing</a>
          <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1rem' }}>Reviews</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-links { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
}

