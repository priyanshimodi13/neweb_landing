import React, { useState } from 'react';
import { ArrowRight, ExternalLink, Check, Zap } from 'lucide-react';

export default function CompanyTools() {
  const [activeTab, setActiveTab] = useState('neweb');

  const projects = {
    neweb: {
      id: 'neweb',
      name: 'Neweb.ai',
      badgeLabel: 'FLAGSHIP · LIVE',
      category: 'AI WEBSITE & ONLINE PRESENCE',
      tagline: 'your entire online presence, on AI.',
      description:
        'More than an AI website builder. Neweb handles your whole web presence — site, copy, design, SEO, content, social, analytics, and ongoing growth. Describe your business once. Neweb runs the internet for you.',
      bullets: [
        'Full AI website build in < 90 seconds',
        'Automated SEO (schema, sitemaps, Core Web Vitals)',
        'Content & social agents posting on autopilot',
        'A/B testing & growth experiments that ship winners',
      ],
      stats: [
        { label: 'Site generation', val: '90s' },
        { label: 'Avg conversion lift', val: '40%' },
        { label: 'SEO health score', val: '99/100' },
      ],
      url: 'https://neweb.ai',
      domain: 'neweb.ai',
      previewUrl: 'neweb.ai/studio',
      statusList: [
        { text: 'Site architecture generated', status: 'completed' },
        { text: 'SEO & Meta Schema indexed', status: 'completed' },
        { text: 'Autopilot social agent active', status: 'running' },
      ],
    },
    fonda: {
      id: 'fonda',
      name: 'Fonda.co',
      badgeLabel: 'FLAGSHIP · LIVE',
      category: 'AI CO-FOUNDER ENGINE',
      tagline: 'the AI co-founder for your idea.',
      description:
        'Fonda is an AI co-founder for aspiring and early-stage founders. Feed it your raw idea — it comes back with a validated business plan, an investor-ready pitch deck, a financial model, a go-to-market strategy, and the rest of the founder toolkit.',
      bullets: [
        'Idea validation & competitor teardown in minutes',
        'Full 18-page business plan & investor pitch deck',
        'Dynamic financial model & cap table (Sheets + Excel)',
        'GTM strategy, customer personas, & launch roadmap',
      ],
      stats: [
        { label: 'Time to deck', val: '10 mins' },
        { label: 'Founders assisted', val: '1,200+' },
        { label: 'Investor accuracy', val: '98%' },
      ],
      url: 'https://fonda.co',
      domain: 'fonda.co',
      previewUrl: 'fonda.co/deck-builder',
      statusList: [
        { text: 'TAM & Market validation complete', status: 'completed' },
        { text: '12-slide Pitch Deck generated', status: 'completed' },
        { text: 'Financial model rendering...', status: 'running' },
      ],
    },
  };

  const current = projects[activeTab];

  return (
    <section
      id="tools-and-systems"
      style={{
        position: 'relative',
        width: '100%',
        padding: '140px 0 110px 0',
        overflow: 'hidden',
        backgroundColor: '#358be8',
        backgroundImage: 'url(/sky_frame_bg.png)',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1080px',
          margin: '0 auto',
          padding: '0 20px',
        }}
      >
        {/* Main Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 32px auto' }}>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)',
              fontWeight: 500,
              color: '#ffffff',
              lineHeight: 1.2,
              letterSpacing: '-0.025em',
              marginBottom: '12px',
              textShadow: '0 2px 12px rgba(0, 0, 0, 0.25)',
            }}
          >
            Two SaaS products, one promise.
          </h2>
          <p
            style={{
              fontSize: '1.02rem',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.92)',
              lineHeight: 1.5,
              margin: 0,
              textShadow: '0 1px 6px rgba(0, 0, 0, 0.2)',
            }}
          >
            Forged on our own delivery frontlines. Battle-tested, self-serve, and ready for your team.
          </p>
        </div>

        {/* 2 Pill Tabs Bar (Sleek Compact Proportions) */}
        <div
          style={{
            display: 'flex',
            justify: 'center',
            alignItems: 'stretch',
            maxWidth: '620px',
            margin: '0 auto 28px auto',
            background: 'rgba(255, 255, 255, 0.16)',
            backdropFilter: 'blur(16px)',
            borderRadius: '14px',
            padding: '5px',
            border: '1px solid rgba(255, 255, 255, 0.35)',
            boxShadow: '0 6px 24px rgba(0, 0, 0, 0.08)',
          }}
        >
          {/* Tab 1: Neweb.ai */}
          <button
            onClick={() => setActiveTab('neweb')}
            style={{
              flex: 1,
              padding: '10px 14px',
              borderRadius: '10px',
              border: 'none',
              background: activeTab === 'neweb' ? '#ffffff' : 'transparent',
              color: activeTab === 'neweb' ? '#0f172a' : '#ffffff',
              boxShadow: activeTab === 'neweb' ? '0 4px 14px rgba(0,0,0,0.12)' : 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              justify: 'center',
              borderLeft: activeTab === 'neweb' ? '3px solid #2563eb' : '3px solid transparent',
            }}
          >
            <div style={{ fontSize: '0.88rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontFamily: "'Newsreader', Georgia, serif", fontStyle: 'italic', fontSize: '1.05rem' }}>Neweb.ai</span>
              <span
                style={{
                  fontSize: '0.6rem',
                  padding: '1px 5px',
                  borderRadius: '3px',
                  background: activeTab === 'neweb' ? '#dbeafe' : 'rgba(255,255,255,0.22)',
                  color: activeTab === 'neweb' ? '#1d4ed8' : '#ffffff',
                  fontWeight: 600,
                }}
              >
                LIVE
              </span>
            </div>
            <div
              style={{
                fontSize: '0.72rem',
                color: activeTab === 'neweb' ? '#475569' : 'rgba(255, 255, 255, 0.85)',
                marginTop: '2px',
                lineHeight: 1.2,
              }}
            >
              AI Website Presence
            </div>
          </button>

          {/* Divider line */}
          <div style={{ width: '1px', background: 'rgba(255, 255, 255, 0.25)', margin: '6px 0' }}></div>

          {/* Tab 2: Fonda.co */}
          <button
            onClick={() => setActiveTab('fonda')}
            style={{
              flex: 1,
              padding: '10px 14px',
              borderRadius: '10px',
              border: 'none',
              background: activeTab === 'fonda' ? '#ffffff' : 'transparent',
              color: activeTab === 'fonda' ? '#0f172a' : '#ffffff',
              boxShadow: activeTab === 'fonda' ? '0 4px 14px rgba(0,0,0,0.12)' : 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              justify: 'center',
              borderLeft: activeTab === 'fonda' ? '3px solid #2563eb' : '3px solid transparent',
            }}
          >
            <div style={{ fontSize: '0.88rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontFamily: "'Newsreader', Georgia, serif", fontStyle: 'italic', fontSize: '1.05rem' }}>Fonda.co</span>
              <span
                style={{
                  fontSize: '0.6rem',
                  padding: '1px 5px',
                  borderRadius: '3px',
                  background: activeTab === 'fonda' ? '#dbeafe' : 'rgba(255,255,255,0.22)',
                  color: activeTab === 'fonda' ? '#1d4ed8' : '#ffffff',
                  fontWeight: 600,
                }}
              >
                LIVE
              </span>
            </div>
            <div
              style={{
                fontSize: '0.72rem',
                color: activeTab === 'fonda' ? '#475569' : 'rgba(255, 255, 255, 0.85)',
                marginTop: '2px',
                lineHeight: 1.2,
              }}
            >
              AI Co-Founder Engine
            </div>
          </button>
        </div>

        {/* Refined Compact Framed White Box Container */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: '20px',
            padding: '32px 36px',
            border: '1px solid rgba(255, 255, 255, 0.9)',
            boxShadow: '0 20px 48px rgba(0, 0, 0, 0.12)',
            maxWidth: '920px',
            margin: '0 auto',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.05fr 0.95fr',
              gap: '32px',
              alignItems: 'center',
            }}
            className="sky-card-grid"
          >
            {/* Left Content Column */}
            <div style={{ textAlign: 'left' }}>
              {/* Badges */}
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap' }}>
                <span
                  style={{
                    background: '#f1f5f9',
                    color: '#334155',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    padding: '3px 8px',
                    borderRadius: '5px',
                    textTransform: 'uppercase',
                  }}
                >
                  {current.badgeLabel}
                </span>
                <span
                  style={{
                    background: '#dbeafe',
                    color: '#1d4ed8',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    padding: '3px 8px',
                    borderRadius: '5px',
                    textTransform: 'uppercase',
                  }}
                >
                  {current.category}
                </span>
              </div>

              {/* Title & Tagline */}
              <h3
                style={{
                  fontSize: 'clamp(1.4rem, 2.2vw, 1.9rem)',
                  fontWeight: 600,
                  color: '#0f172a',
                  lineHeight: 1.2,
                  letterSpacing: '-0.02em',
                  marginBottom: '12px',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
                    fontStyle: 'italic',
                    fontWeight: 400,
                    color: '#1e3a8a',
                    marginRight: '8px',
                  }}
                >
                  {current.name}
                </span>
                — {current.tagline}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.86rem',
                  color: '#475569',
                  lineHeight: 1.55,
                  marginBottom: '18px',
                }}
              >
                {current.description}
              </p>

              {/* Bullet Points */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                {current.bullets.map((bullet, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#334155' }}>
                    <div
                      style={{
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        background: '#eff6ff',
                        color: '#2563eb',
                        display: 'flex',
                        alignItems: 'center',
                        justify: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Check size={11} />
                    </div>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Stats Box Row */}
              <div style={{ display: 'flex', gap: '10px', marginBottom: '24px' }}>
                {current.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      borderRadius: '10px',
                      padding: '8px 12px',
                      flex: 1,
                      minWidth: '80px',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Newsreader', Georgia, serif",
                        fontStyle: 'italic',
                        fontSize: '1.35rem',
                        color: '#1e3a8a',
                        lineHeight: 1,
                        marginBottom: '3px',
                      }}
                    >
                      {stat.val}
                    </div>
                    <div style={{ fontSize: '0.66rem', color: '#64748b' }}>{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
                <a
                  href={current.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    padding: '9px 18px',
                    background: '#0f172a',
                    color: '#ffffff',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                  }}
                >
                  <span>Explore {current.name}</span>
                  <ArrowRight size={14} />
                </a>

                <a
                  href={current.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    padding: '9px 14px',
                    background: '#ffffff',
                    color: '#0f172a',
                    border: '1px solid #cbd5e1',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                  }}
                >
                  <span>{current.domain}</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Right Side Mockup Panel */}
            <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  width: '100%',
                  background: '#fafafa',
                  borderRadius: '14px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 12px 32px rgba(0, 0, 0, 0.05)',
                  overflow: 'hidden',
                }}
              >
                {/* Window Bar */}
                <div
                  style={{
                    background: '#f1f5f9',
                    padding: '9px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'space-between',
                    borderBottom: '1px solid #e2e8f0',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ display: 'flex', gap: '5px' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }}></span>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#eab308' }}></span>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }}></span>
                    </div>
                    <span style={{ fontSize: '0.7rem', color: '#64748b', fontFamily: 'monospace', marginLeft: '4px' }}>
                      {current.previewUrl}
                    </span>
                  </div>
                  <span style={{ fontSize: '0.65rem', background: '#e2e8f0', color: '#475569', padding: '2px 6px', borderRadius: '4px', fontWeight: 600 }}>
                    ACTIVE ENGINE
                  </span>
                </div>

                {/* Dashboard Panel Body */}
                <div style={{ padding: '18px 16px', background: '#ffffff' }}>
                  {activeTab === 'neweb' ? (
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                        <div>
                          <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#0f172a' }}>Live Site Builder</div>
                          <div style={{ fontSize: '0.7rem', color: '#64748b' }}>AI generating brand identity &amp; assets</div>
                        </div>
                        <span style={{ fontSize: '0.66rem', background: '#fef3c7', color: '#b45309', padding: '3px 8px', borderRadius: '10px', fontWeight: 600 }}>
                          • Ready to review
                        </span>
                      </div>

                      {/* Mockup Progress Bar */}
                      <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '10px', border: '1px solid #f1f5f9', marginBottom: '12px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#334155', marginBottom: '6px' }}>
                          <span>Deploying Landing Page...</span>
                          <span style={{ fontWeight: 600, color: '#2563eb' }}>90%</span>
                        </div>
                        <div style={{ height: '6px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
                          <div style={{ width: '90%', height: '100%', background: '#2563eb', borderRadius: '3px' }}></div>
                        </div>
                      </div>

                      {/* Live Agent Activity List */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {current.statusList.map((item, idx) => (
                          <div
                            key={idx}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justify: 'space-between',
                              padding: '8px 10px',
                              background: item.status === 'running' ? '#eff6ff' : '#f8fafc',
                              borderRadius: '6px',
                              border: item.status === 'running' ? '1px solid #bfdbfe' : '1px solid #f1f5f9',
                            }}
                          >
                            <span style={{ fontSize: '0.74rem', color: '#334155' }}>{item.text}</span>
                            <span
                              style={{
                                fontSize: '0.62rem',
                                padding: '2px 6px',
                                borderRadius: '8px',
                                background: item.status === 'running' ? '#dbeafe' : '#dcfce7',
                                color: item.status === 'running' ? '#1d4ed8' : '#15803d',
                                fontWeight: 600,
                              }}
                            >
                              {item.status === 'running' ? '> Running' : '• Completed'}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                        <div>
                          <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#0f172a' }}>Venture Intelligence Deck</div>
                          <div style={{ fontSize: '0.7rem', color: '#64748b' }}>AI processing market data &amp; financials</div>
                        </div>
                        <span style={{ fontSize: '0.66rem', background: '#dcfce7', color: '#15803d', padding: '3px 8px', borderRadius: '10px', fontWeight: 600 }}>
                          • Model Verified
                        </span>
                      </div>

                      <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '10px', border: '1px solid #f1f5f9', marginBottom: '12px' }}>
                        <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#0f172a', marginBottom: '4px' }}>
                          Idea: Autonomous E-Commerce OS
                        </div>
                        <div style={{ fontSize: '0.72rem', color: '#475569', lineHeight: 1.3 }}>
                          Target Market: $4.2B global SMB e-commerce storefronts.
                        </div>
                      </div>

                      {/* Live Agent Activity List */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {current.statusList.map((item, idx) => (
                          <div
                            key={idx}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justify: 'space-between',
                              padding: '8px 10px',
                              background: item.status === 'running' ? '#eff6ff' : '#f8fafc',
                              borderRadius: '6px',
                              border: item.status === 'running' ? '1px solid #bfdbfe' : '1px solid #f1f5f9',
                            }}
                          >
                            <span style={{ fontSize: '0.74rem', color: '#334155' }}>{item.text}</span>
                            <span
                              style={{
                                fontSize: '0.62rem',
                                padding: '2px 6px',
                                borderRadius: '8px',
                                background: item.status === 'running' ? '#dbeafe' : '#dcfce7',
                                color: item.status === 'running' ? '#1d4ed8' : '#15803d',
                                fontWeight: 600,
                              }}
                            >
                              {item.status === 'running' ? '> Running' : '• Completed'}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer Tag Selector Bar */}
                <div
                  style={{
                    background: '#f8fafc',
                    padding: '8px 12px',
                    borderTop: '1px solid #e2e8f0',
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'center',
                    gap: '6px',
                    flexWrap: 'wrap',
                  }}
                >
                  {['Support', 'Marketing', 'Sales', 'Legal', 'Design', 'Finance', 'Engineering'].map((tag, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '0.68rem',
                        padding: '2px 8px',
                        borderRadius: '10px',
                        background: i === 0 || i === 6 ? '#ffffff' : '#f1f5f9',
                        color: i === 0 || i === 6 ? '#0f172a' : '#64748b',
                        border: '1px solid #e2e8f0',
                        fontWeight: i === 0 || i === 6 ? 600 : 400,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          .sky-card-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
        }
      `}</style>
    </section>
  );
}
