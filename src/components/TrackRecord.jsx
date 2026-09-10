import React from 'react';

export default function TrackRecord() {
  return (
    <section
      style={{
        padding: '110px 0 110px 0',
        background: '#f7f7f4',
        position: 'relative',
        zIndex: 2,
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '0 32px',
        }}
      >
        <div style={{ maxWidth: '640px', textAlign: 'left' }}>
          {/* Eyebrow Label */}
          <div
            style={{
              fontSize: '0.78rem',
              fontWeight: 500,
              fontFamily: "'Space Grotesk', monospace, sans-serif",
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#8e8e93',
              marginBottom: '24px',
            }}
          >
            TRACK RECORD
          </div>

          {/* Multi-tone Title matching screenshot typography */}
          <h2
            style={{
              fontSize: 'clamp(2.4rem, 4vw, 3.4rem)',
              fontWeight: 400,
              lineHeight: 1.18,
              letterSpacing: '-0.025em',
              marginBottom: '28px',
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
            }}
          >
            <span style={{ color: '#18181b', display: 'block' }}>
              Shipped in the last
            </span>
            <span style={{ color: '#71717a', display: 'block' }}>
              24 months.
            </span>
          </h2>

          {/* Subtitle description paragraph */}
          <p
            style={{
              fontSize: '1.02rem',
              fontWeight: 400,
              color: '#52525b',
              lineHeight: 1.6,
              maxWidth: '520px',
              margin: 0,
            }}
          >
            Not vanity metrics — what we've actually delivered across clients and our own products.
          </p>
        </div>
      </div>
    </section>
  );
}
