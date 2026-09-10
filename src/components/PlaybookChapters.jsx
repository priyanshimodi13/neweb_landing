import React from 'react';

const chapters = [
  {
    num: '1.',
    title: '1. System Review',
    description: 'We align early on the problem, constraints, and decision flow — clarifying users, data dependencies, and success criteria before execution begins.',
    roman: 'PHASE I',
    image: '/chapters/chapter1.png',
    by: 'by Cofounder',
    year: '2026',
    readText: 'Read about System Review (I)',
  },
  {
    num: '2.',
    title: '2. Weekly Delivery',
    description: 'Work progresses in steady weekly increments, with continuous integration and regular reviews that keep momentum high while allowing scope to adapt.',
    roman: 'PHASE II',
    image: '/chapters/chapter2.png',
    by: 'by Cofounder',
    year: '2026',
    readText: 'Read about Weekly Delivery (II)',
  },
  {
    num: '3.',
    title: '3. Production',
    description: 'Security, reliability, and operational readiness are built in from the start — with clear documentation and smooth handover to support long-term use.',
    roman: 'PHASE III',
    image: '/chapters/chapter3.png',
    by: 'by Cofounder',
    year: '2026',
    readText: 'Read about Production (III)',
  },
];

export default function PlaybookChapters() {
  return (
    <section
      id="playbook"
      style={{
        padding: '100px 0 140px 0',
        background: '#f7f7f4',
        position: 'relative',
        zIndex: 2,
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 32px',
        }}
      >
        {/* 3 Column Grid of Chapter Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px',
            alignItems: 'start',
          }}
          className="chapters-grid"
        >
          {chapters.map((ch, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
              }}
            >
              {/* Outer Frosted Glass Pocket Frame */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '460px',
                  background: 'rgba(255, 255, 255, 0.45)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(0, 0, 0, 0.07)',
                  borderRadius: '28px',
                  padding: '16px',
                  boxShadow: '0 12px 36px rgba(0, 0, 0, 0.04)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                }}
                className="chapter-card-wrapper"
              >
                {/* Main White Card Book Cover */}
                <div
                  style={{
                    background: '#ffffff',
                    borderRadius: '20px',
                    padding: '32px 28px 24px 28px',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.02)',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {/* Card Title Header */}
                  <div style={{ marginBottom: '20px', textAlign: 'left' }}>
                    <div
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: 400,
                        color: '#18181b',
                        lineHeight: 1.2,
                        letterSpacing: '-0.025em',
                        marginBottom: '10px',
                      }}
                    >
                      {ch.title}
                    </div>
                    <p
                      style={{
                        fontSize: '0.88rem',
                        fontWeight: 400,
                        color: '#52525b',
                        lineHeight: 1.55,
                        margin: 0,
                      }}
                    >
                      {ch.description}
                    </p>
                  </div>

                  {/* Chapter Roman Label */}
                  <div
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: "'Space Grotesk', monospace, sans-serif",
                      color: '#8e8e93',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      marginBottom: '14px',
                      textAlign: 'left',
                    }}
                  >
                    {ch.roman}
                  </div>

                  {/* Pixel Art Illustration Container */}
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '240px',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      marginBottom: '16px',
                      border: '1px solid rgba(0, 0, 0, 0.06)',
                    }}
                  >
                    <img
                      src={ch.image}
                      alt={ch.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                  </div>

                  {/* Card Footer Credits */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      width: '100%',
                      alignItems: 'center',
                      fontSize: '0.72rem',
                      fontFamily: "'Space Grotesk', monospace, sans-serif",
                      color: '#a1a1aa',
                      paddingTop: '6px',
                    }}
                  >
                    <span>{ch.by}</span>
                    <span>{ch.year}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Label under Card */}
              <div
                style={{
                  marginTop: '16px',
                  fontSize: '0.8rem',
                  fontFamily: "'Space Grotesk', monospace, sans-serif",
                  color: '#8e8e93',
                  letterSpacing: '0.05em',
                  textAlign: 'center',
                }}
              >
                {ch.readText}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .chapter-card-wrapper:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.07) !important;
        }

        @media (max-width: 868px) {
          .chapters-grid {
            grid-template-columns: 1fr !important;
            row-gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
