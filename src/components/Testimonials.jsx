import React from 'react';

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{
        padding: '110px 20px',
        background: '#f7f7f4',
        position: 'relative',
        zIndex: 2,
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        {/* Main Quote Block */}
        <blockquote
          style={{
            margin: 0,
            padding: 0,
            fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)',
            fontWeight: 400,
            fontStyle: 'italic',
            fontFamily: "'Newsreader', 'Playfair Display', 'Instrument Serif', Georgia, serif",
            color: '#18181b',
            lineHeight: 1.45,
            letterSpacing: '-0.015em',
            marginBottom: '40px',
          }}
        >
          <span style={{ color: '#3b5998', marginRight: '2px' }}>“</span>
          If you're a startup that needs to ship AI products fast without
          <br />
          compromising on quality, these are the guys.
          <span style={{ color: '#3b5998', marginLeft: '2px' }}>”</span>
        </blockquote>

        {/* Author Metadata */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
          <div
            style={{
              fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
              fontStyle: 'italic',
              fontSize: '1.2rem',
              fontWeight: 500,
              color: '#3b5998',
            }}
          >
            Misung Ku
          </div>
          <div
            style={{
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
              fontSize: '0.82rem',
              fontWeight: 400,
              color: '#71717a',
              letterSpacing: '0.01em',
            }}
          >
            CEO · Blux.ai
          </div>
        </div>
      </div>
    </section>
  );
}
