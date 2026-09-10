import React, { useState, useEffect, useRef } from 'react';

function AnimatedCounter({ target, suffix = '', decimals = 0, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    let animationFrameId;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Smooth ease-out exponential formula
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = easeProgress * target;
      
      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible, target, duration]);

  const formattedCount = decimals > 0 
    ? count.toFixed(decimals) 
    : Math.floor(count);

  return (
    <span ref={ref}>
      {formattedCount}{suffix}
    </span>
  );
}

const stats = [
  {
    target: 50,
    suffix: '+',
    decimals: 0,
    label: 'Projects Shipped',
    sublabel: 'AI + WEB + GROWTH STACKS',
  },
  {
    target: 5,
    suffix: '',
    decimals: 0,
    label: 'Countries Live',
    sublabel: 'IN · US · UAE · KR · AU',
  },
  {
    target: 10,
    suffix: '×',
    decimals: 0,
    label: 'Faster Delivery',
    sublabel: 'VS. TRADITIONAL STUDIOS',
  },
  {
    target: 99.99,
    suffix: '%',
    decimals: 2,
    label: 'Uptime SLA',
    sublabel: 'MONITORED 24 / 7',
  },
];

export default function TrackRecord() {
  return (
    <section
      id="track-record"
      style={{
        padding: '110px 0',
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
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '380px 1fr',
            gap: '64px',
            alignItems: 'center',
          }}
          className="track-record-grid"
        >
          {/* Left Column: Heading & Description */}
          <div style={{ textAlign: 'left' }}>
            <div
              style={{
                fontSize: '0.78rem',
                fontWeight: 600,
                fontFamily: "'Space Grotesk', monospace, sans-serif",
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#8e8e93',
                marginBottom: '20px',
              }}
            >
              TRACK RECORD
            </div>

            <h2
              style={{
                fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)',
                fontWeight: 400,
                lineHeight: 1.18,
                letterSpacing: '-0.025em',
                marginBottom: '24px',
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

            <p
              style={{
                fontSize: '1.02rem',
                fontWeight: 400,
                color: '#52525b',
                lineHeight: 1.6,
                maxWidth: '360px',
                margin: 0,
              }}
            >
              Not vanity metrics — what we've actually delivered across clients and our own products.
            </p>
          </div>

          {/* Right Column: 4 Stat Numbers Grid (Animated Count-Up on Scroll) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '28px',
              alignItems: 'start',
            }}
            className="stats-grid"
          >
            {stats.map((stat, idx) => (
              <div key={idx} style={{ textAlign: 'left' }}>
                <div
                  style={{
                    fontSize: 'clamp(2.5rem, 3.8vw, 3.6rem)',
                    fontFamily: "'Instrument Serif', 'Newsreader', 'Playfair Display', Georgia, serif",
                    fontStyle: 'italic',
                    color: '#18181b',
                    lineHeight: 1,
                    marginBottom: '12px',
                  }}
                >
                  <AnimatedCounter
                    target={stat.target}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                    duration={2200}
                  />
                </div>
                <div
                  style={{
                    fontSize: '0.92rem',
                    fontWeight: 600,
                    color: '#18181b',
                    marginBottom: '4px',
                  }}
                >
                  {stat.label}
                </div>
                <div
                  style={{
                    fontSize: '0.68rem',
                    fontWeight: 500,
                    fontFamily: "'Space Grotesk', monospace, sans-serif",
                    letterSpacing: '0.06em',
                    color: '#8e8e93',
                    textTransform: 'uppercase',
                  }}
                >
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .track-record-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 36px 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
