import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="cta" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <div
          className="glass-panel"
          style={{
            padding: '72px 32px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(99, 102, 241, 0.15) 50%, rgba(6, 182, 212, 0.1) 100%)',
            border: '1px solid rgba(99, 102, 241, 0.3)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), var(--shadow-glow)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ maxWidth: '640px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
            <div className="badge" style={{ marginBottom: '20px' }}>
              <Sparkles size={16} color="var(--cyan)" />
              <span>Ready to Scale?</span>
            </div>

            <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '16px' }}>
              Start Growing Your Brand with <br />
              <span className="gradient-text">CommerciaX Today</span>
            </h2>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '36px' }}>
              Join hundreds of high-growth DTC stores driving millions in autonomous revenue. Get full access for 14 days.
            </p>

            {submitted ? (
              <div
                style={{
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid #10b981',
                  borderRadius: 'var(--radius-md)',
                  padding: '20px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  color: '#fff',
                  fontSize: '1.05rem',
                  fontWeight: 400
                }}
              >
                <CheckCircle2 size={24} color="#10b981" />
                <span>Thank you! Your 14-day free trial invitation is on its way to {email}.</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: 'flex',
                  gap: '12px',
                  maxWidth: '520px',
                  margin: '0 auto',
                  flexWrap: 'wrap'
                }}
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your work email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: 1,
                    minWidth: '260px',
                    padding: '16px 20px',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(15, 23, 42, 0.8)',
                    border: '1px solid var(--border-color)',
                    color: '#fff',
                    fontSize: '1rem',
                    outline: 'none'
                  }}
                />
                <button type="submit" className="btn btn-primary btn-lg" style={{ padding: '16px 32px' }}>
                  <span>Claim Free Trial</span>
                  <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
