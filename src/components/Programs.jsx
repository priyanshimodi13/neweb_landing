import React from 'react';
import { Globe, Sparkles, Monitor, Landmark, Grid, Code } from 'lucide-react';

const programs = [
  {
    icon: Globe,
    title: 'AIFOD',
    subtitle: 'UNITED NATIONS · AI FOR DEVELOPMENT',
  },
  {
    icon: Sparkles,
    title: 'AI for Good',
    subtitle: 'GLOBAL AI FOR SOCIAL IMPACT',
  },
  {
    icon: Monitor,
    title: 'Gitex Global',
    subtitle: "WORLD'S LARGEST TECH EXPO",
  },
  {
    icon: Landmark,
    title: 'Startup India',
    subtitle: 'DPIIT RECOGNIZED · GOVT. OF INDIA',
  },
  {
    icon: Grid,
    title: 'Microsoft for Startups',
    subtitle: 'FOUNDERS HUB PARTNER',
  },
  {
    icon: Code,
    title: 'Function1',
    subtitle: 'INDUSTRY EVENT & COMMUNITY',
  },
];

export default function Programs() {
  return (
    <section
      style={{
        padding: '40px 0 50px 0',
        background: 'var(--bg-dark)',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div className="container">
        {/* Card Grid Row (Matching Mockup Design) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
            gap: '16px',
            marginBottom: '32px',
          }}
        >
          {programs.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                style={{
                  background: '#f2f2ec',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  borderRadius: '14px',
                  padding: '24px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.03)',
                  transition: 'all 0.25s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Icon size={20} strokeWidth={1.6} color="#4b5563" />
                  <span
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      color: '#374151',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {item.title}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: '0.62rem',
                    color: '#9ca3af',
                    letterSpacing: '0.05em',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    lineHeight: 1.2,
                  }}
                >
                  {item.subtitle}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Centered Text with Color Highlight Sweep Animation */}
        <div
          style={{
            textAlign: 'center',
            fontSize: '0.92rem',
            lineHeight: 1.6,
          }}
        >
          <span className="color-highlight-sweep">
            Part of the <strong>AI for Good</strong> (UN), <strong>Microsoft for Startups</strong>,{' '}
            <strong>Startup India</strong>, <strong>Gitex Global</strong>, <strong>AIFOD</strong>, and{' '}
            <strong>Function1</strong> programs.
          </span>
        </div>
      </div>

      <style>{`
        .color-highlight-sweep {
          background: linear-gradient(
            110deg,
            #6b7280 0%,
            #374151 20%,
            #6366f1 40%,
            #06b6d4 50%,
            #8b5cf6 60%,
            #374151 80%,
            #6b7280 100%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: highlightColorSweep 3.5s linear infinite;
          display: inline-block;
        }

        .color-highlight-sweep strong {
          font-weight: 600;
        }

        @keyframes highlightColorSweep {
          0% {
            background-position: 100% 0;
          }
          100% {
            background-position: -100% 0;
          }
        }
      `}</style>
    </section>
  );
}
