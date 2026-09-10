import React from 'react';
import { Lock, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      style={{
        position: 'relative',
        background: '#f7f7f4',
        paddingTop: '80px',
        paddingBottom: '0px',
        overflow: 'hidden',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        border: 'none',
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: '1180px',
          margin: '0 auto',
          padding: '0 32px',
          paddingBottom: '60px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 340px',
            gap: '64px',
            alignItems: 'start',
          }}
          className="footer-grid"
        >
          {/* Left Main Column */}
          <div style={{ textAlign: 'left' }}>
            {/* Top Headline */}
            <h2
              style={{
                fontSize: 'clamp(2.2rem, 3.8vw, 3rem)',
                fontWeight: 400,
                color: '#18181b',
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                marginBottom: '28px',
              }}
            >
              Run an entire company
              <span
                style={{
                  display: 'block',
                  color: '#71717a',
                  fontWeight: 400,
                  marginTop: '2px',
                }}
              >
                with AI agents
              </span>
            </h2>

            {/* Sub-nav Pill Filter Items */}
            <div
              style={{
                display: 'flex',
                gap: '20px',
                alignItems: 'center',
                marginBottom: '36px',
                flexWrap: 'wrap',
                fontSize: '0.88rem',
              }}
            >
              <a href="#" style={{ color: '#71717a', textDecoration: 'none' }}>
                How to
              </a>
              <a href="#" style={{ color: '#18181b', fontWeight: 600, textDecoration: 'none' }}>
                How to start
              </a>
              <a href="#" style={{ color: '#71717a', textDecoration: 'none' }}>
                How to build
              </a>
              <a href="#" style={{ color: '#71717a', textDecoration: 'none' }}>
                How to sell
              </a>
              <a href="#" style={{ color: '#71717a', textDecoration: 'none' }}>
                How to scale
              </a>
            </div>

            {/* 2 Navigation Link Columns */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '140px 160px',
                gap: '24px',
                marginBottom: '36px',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a href="/" style={{ color: '#27272a', fontSize: '0.88rem', fontWeight: 500, textDecoration: 'none' }}>
                  Homepage
                </a>
                <a href="#resources" style={{ color: '#27272a', fontSize: '0.88rem', fontWeight: 500, textDecoration: 'none' }}>
                  Resources
                </a>
                <a href="#pricing" style={{ color: '#27272a', fontSize: '0.88rem', fontWeight: 500, textDecoration: 'none' }}>
                  Pricing
                </a>
                <a href="#careers" style={{ color: '#27272a', fontSize: '0.88rem', fontWeight: 500, textDecoration: 'none' }}>
                  Careers
                </a>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a href="#privacy" style={{ color: '#27272a', fontSize: '0.88rem', fontWeight: 500, textDecoration: 'none' }}>
                  Privacy Policy
                </a>
                <a href="#terms" style={{ color: '#27272a', fontSize: '0.88rem', fontWeight: 500, textDecoration: 'none' }}>
                  Terms of Service
                </a>
                <a href="#docs" style={{ color: '#27272a', fontSize: '0.88rem', fontWeight: 500, textDecoration: 'none' }}>
                  Docs
                </a>
              </div>
            </div>

            {/* Social Buttons Row */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '32px' }}>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: '#ffffff',
                  border: '1px solid #e4e4e7',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  color: '#18181b',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)',
                }}
              >
                𝕏
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: '#ffffff',
                  border: '1px solid #e4e4e7',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  color: '#18181b',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)',
                }}
              >
                in
              </a>
            </div>

            {/* Security Badge Line */}
            <div style={{ fontSize: '0.78rem', color: '#71717a', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>Automate with</span>
              <span
                style={{
                  background: '#ffffff',
                  border: '1px solid #e4e4e7',
                  borderRadius: '5px',
                  padding: '2px 7px',
                  fontSize: '0.72rem',
                  color: '#3f3f46',
                  fontWeight: 500,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <Lock size={10} /> SOC 2
              </span>
              <span>compliant security</span>
            </div>

            {/* Copyright & Credit Lines */}
            <div style={{ fontSize: '0.76rem', color: '#a1a1aa', lineHeight: 1.6 }}>
              <div>Copyright © 2026 CommerciaX Inc. All rights reserved.</div>
              <div style={{ marginTop: '8px' }}>Design by CommerciaX</div>
            </div>
          </div>

          {/* Right Sunflower Pixel Card */}
          <div style={{ position: 'relative', width: '100%', height: '440px', display: 'flex', justifyContent: 'flex-end' }}>
            <div
              style={{
                width: '320px',
                height: '100%',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.9)',
                boxShadow: '0 16px 40px rgba(0, 0, 0, 0.08)',
                position: 'relative',
                overflow: 'hidden',
                backgroundImage: 'url(/footer_sunflower_card.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>
        </div>
      </div>

      {/* Bottom Pixel Grass Banner & Credit */}
      <div
        style={{
          width: '100%',
          position: 'relative',
          marginTop: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justify: 'flex-end',
          overflow: 'hidden',
        }}
      >
        <img
          src="/pixel_grass_bottom.png"
          alt="Pixel Grass Trim"
          style={{
            width: '100%',
            height: 'auto',
            minHeight: '80px',
            maxHeight: '130px',
            objectFit: 'cover',
            objectPosition: 'bottom center',
            display: 'block',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '10px',
            left: 0,
            width: '100%',
            fontSize: '0.74rem',
            color: '#1a3814',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            justify: 'center',
            gap: '4px',
            textShadow: '0 1px 3px rgba(255, 255, 255, 0.8)',
            zIndex: 2,
          }}
        >
          <span>Made with</span>
          <Heart size={12} fill="#1a3814" color="#1a3814" />
          <span>by CommerciaX</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </footer>
  );
}
