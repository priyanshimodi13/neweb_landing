import React, { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';

const serviceDetails = {
  '01 AI Software Development': {
    badge: 'BUILD',
    title: 'AI Software Development',
    description:
      'Custom LLM apps, RAG pipelines, predictive models, and autonomous agents — shipped on your stack, in your cloud, under your policies. Week-one prototypes. Production in weeks.',
    bullets: [
      'Custom LLM apps & copilots',
      'RAG over docs, tickets, and code',
      'Predictive analytics & ML pipelines',
      'Autonomous workflow agents',
    ],
    buttonText: 'Explore service',
  },
  '02 B2B Lead Generation': {
    badge: 'GROW',
    title: 'B2B Lead Generation',
    description:
      'Autonomous outbound sales engines, AI data enrichment, and hyper-personalized campaign workflows — driving qualified meetings directly to your calendar on autopilot.',
    bullets: [
      'AI lead scraping & data enrichment',
      'Hyper-personalized email sequences',
      'Automated LinkedIn & multi-channel outreach',
      'Real-time intent data & signal tracking',
    ],
    buttonText: 'Explore service',
  },
  '03 Employee Pods': {
    badge: 'SCALE',
    title: 'Employee Pods',
    description:
      'Dedicated senior engineering & AI pods integrated seamlessly into your workflow — scaling your build capacity instantly without hiring friction or management overhead.',
    bullets: [
      'Senior AI & full-stack engineers',
      'Embedded product & design leaders',
      'Daily async updates & weekly sprints',
      'Zero onboarding lag, day-one velocity',
    ],
    buttonText: 'Explore service',
  },
  '04 SaaS Product Studio': {
    badge: 'SHIP',
    title: 'SaaS Product Studio',
    description:
      'From raw concept to battle-tested MVP and market launch. We architect, design, build, and deploy production-ready SaaS platforms in 30 days flat.',
    bullets: [
      'Full-stack architecture & design systems',
      'Billing, auth, & multi-tenant infra',
      'Production security & SOC-2 compliance',
      'Post-launch scaling & growth analytics',
    ],
    buttonText: 'Explore service',
  },
};

export default function LaunchSection() {
  const [activePill, setActivePill] = useState('01 AI Software Development');

  const accordionItems = [
    { id: '01', title: '01 AI Software Development' },
    { id: '02', title: '02 B2B Lead Generation' },
    { id: '03', title: '03 Employee Pods' },
    { id: '04', title: '04 SaaS Product Studio' },
  ];

  const currentService = serviceDetails[activePill] || serviceDetails['01 AI Software Development'];

  return (
    <section
      id="launch"
      style={{
        padding: '100px 0',
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
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '400px 1fr',
            gap: '48px',
            alignItems: 'start',
          }}
          className="launch-grid"
        >
          {/* Left Column: Eyebrow, Heading, Paragraph & Accordion List */}
          <div style={{ textAlign: 'left' }}>
            {/* Eyebrow Label */}
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
              1.0 – LAUNCH
            </div>

            {/* Main Headline */}
            <h2
              style={{
                fontSize: 'clamp(1.9rem, 2.5vw, 2.4rem)',
                fontWeight: 400,
                lineHeight: 1.18,
                letterSpacing: '-0.025em',
                marginBottom: '24px',
                color: '#18181b',
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
              }}
            >
              <span style={{ display: 'block' }}>Four services.</span>
              <span style={{ display: 'block' }}>
                <span style={{ color: '#8e8e93', fontWeight: 400 }}>One promise.</span>
              </span>
            </h2>

            {/* Subtitle Description */}
            <p
              style={{
                fontSize: '0.96rem',
                fontWeight: 400,
                color: '#52525b',
                lineHeight: 1.65,
                marginBottom: '36px',
                maxWidth: '400px',
              }}
            >
              AI-native. Outcome-priced. Delivered by the same senior pod you meet on day one.
            </p>

            {/* 4 Accordion Pill Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {accordionItems.map((item) => {
                const isActive = activePill === item.title;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActivePill(item.title)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justify: 'space-between',
                      width: '100%',
                      padding: '16px 22px',
                      background: '#ffffff',
                      border: isActive ? '1px solid rgba(0, 0, 0, 0.2)' : '1px solid rgba(0, 0, 0, 0.06)',
                      borderRadius: '16px',
                      cursor: 'pointer',
                      boxShadow: isActive ? '0 4px 16px rgba(0, 0, 0, 0.06)' : '0 2px 6px rgba(0, 0, 0, 0.02)',
                      transition: 'all 0.2s ease',
                      textAlign: 'left',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        color: '#18181b',
                        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                      }}
                    >
                      {item.title}
                    </span>
                    <span style={{ color: '#8e8e93', display: 'flex', alignItems: 'center' }}>
                      {isActive ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Service Detail Card matching reference design */}
          <div
            style={{
              background: '#f4ede6',
              borderRadius: '24px',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              padding: '48px 52px',
              minHeight: '480px',
              display: 'flex',
              flexDirection: 'column',
              justify: 'space-between',
              alignItems: 'flex-start',
              textAlign: 'left',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)',
              transition: 'all 0.3s ease',
            }}
            className="service-card-panel"
          >
            <div>
              {/* Badge Tag */}
              <div
                style={{
                  display: 'inline-block',
                  background: 'rgba(0, 0, 0, 0.06)',
                  color: '#475569',
                  padding: '5px 14px',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '24px',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {currentService.badge}
              </div>

              {/* Serif / Italic Title */}
              <h3
                style={{
                  fontFamily: "'Instrument Serif', 'Newsreader', 'Playfair Display', Georgia, serif",
                  fontStyle: 'italic',
                  fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)',
                  fontWeight: 400,
                  color: '#1e293b',
                  lineHeight: 1.15,
                  marginBottom: '28px',
                  letterSpacing: '-0.01em',
                }}
              >
                {currentService.title}
              </h3>

              {/* Description Paragraph */}
              <p
                style={{
                  fontSize: '1.05rem',
                  color: '#475569',
                  lineHeight: 1.65,
                  marginBottom: '36px',
                  maxWidth: '680px',
                  fontWeight: 400,
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {currentService.description}
              </p>

              {/* Bullets List with Arrow icons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
                {currentService.bullets.map((bullet, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      color: '#334155',
                      fontSize: '1rem',
                      fontWeight: 400,
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    <ArrowRight size={16} style={{ color: '#475569', flexShrink: 0 }} />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Explore Service Button */}
            <a
              href="#cta"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: '#0f172a',
                color: '#ffffff',
                padding: '12px 24px',
                borderRadius: '10px',
                fontSize: '0.92rem',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 14px rgba(15, 23, 42, 0.25)',
              }}
            >
              <span>{currentService.buttonText}</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .launch-grid {
            grid-template-columns: 1fr !important;
          }
          .service-card-panel {
            padding: 32px 28px !important;
          }
        }
      `}</style>
    </section>
  );
}
