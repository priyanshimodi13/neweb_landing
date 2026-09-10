import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';

const offerings = ['AI agents', 'SaaS products', 'B2B pipelines', 'remote pods', 'growth engines'];

export default function Hero() {
  const videoRef = useRef(null);
  const [index, setIndex] = useState(0);

  // Cycle through offerings smoothly
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % offerings.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  // Ensure video autoplay works across all browsers
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn('Video autoplay notice:', err);
        });
      }
    }
  }, []);

  return (
    <section
      className="font-inter"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '680px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-start',
        paddingTop: '170px',
        background: '#f7f7f4',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Full-Size Viewport Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          zIndex: 0,
        }}
      >
        <source src="/hero_video.mp4" type="video/mp4" />
        <source src="/hero_video/futuristic_ai_campus_pixel_animation.mp4" type="video/mp4" />
        <source src="/hero%20video/futuristic_ai_campus_pixel_animation.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      {/* Hero Content Stack - Positioned under the Drone on Left Side */}
      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '1280px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px',
            alignItems: 'flex-start',
          }}
        >
          {/* Left Content Stack - No Background Box, Under the Drone */}
          <div
            style={{
              maxWidth: '580px',
              textAlign: 'left',
              background: 'transparent',
              padding: '0',
            }}
          >
            <h1
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(2.4rem, 4.2vw, 3.8rem)',
                fontWeight: 400,
                color: '#ffffff',
                lineHeight: 1.2,
                marginBottom: '20px',
                letterSpacing: '-0.02em',
                textShadow: '0 2px 16px rgba(0, 0, 0, 0.95), 0 0 30px rgba(0, 0, 0, 0.9)',
              }}
            >
              We ship{' '}
              <span
                style={{
                  color: '#0B1F3A',
                  fontWeight: 400,
                  display: 'inline-block',
                  transition: 'all 0.3s ease',
                  textShadow: '0 1px 8px rgba(255, 255, 255, 0.4), 0 0 12px rgba(255, 255, 255, 0.2)',
                }}
              >
                {offerings[index]}
              </span>{' '}
              at light-speed.
            </h1>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '1.15rem',
                fontWeight: 400,
                color: '#ffffff',
                lineHeight: 1.6,
                marginBottom: '0px',
                maxWidth: '540px',
                textShadow: '0 2px 14px rgba(0, 0, 0, 0.95), 0 0 24px rgba(0, 0, 0, 0.9)',
              }}
            >
              AI + senior engineers ship production-grade software 10× faster — from concept to deployed in weeks, not quarters.
            </p>
          </div>

          {/* Right Floating Status Pills */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              alignItems: 'flex-end',
              paddingTop: '20px',
            }}
            className="hero-task-pills"
          >
            <div
              className="glass-panel font-inter"
              style={{
                fontFamily: "'Inter', sans-serif",
                padding: '10px 20px',
                background: 'rgba(15, 23, 42, 0.75)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: 'var(--radius-full)',
                color: '#ffffff',
                fontSize: '0.85rem',
                fontWeight: 400,
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
              }}
            >
              <span className="badge-pulse"></span>
              <span>Task running <span style={{ color: '#a5b4fc', fontWeight: 400 }}>bug fix</span></span>
            </div>

            <div
              className="glass-panel font-inter"
              style={{
                fontFamily: "'Inter', sans-serif",
                padding: '10px 20px',
                background: 'rgba(15, 23, 42, 0.75)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: 'var(--radius-full)',
                color: '#ffffff',
                fontSize: '0.85rem',
                fontWeight: 400,
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
              }}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }}></span>
              <span>Task Completed <span style={{ color: '#fff', fontWeight: 400 }}>SEO Optimization</span></span>
            </div>

            <div
              className="glass-panel font-inter"
              style={{
                fontFamily: "'Inter', sans-serif",
                padding: '10px 20px',
                background: 'rgba(15, 23, 42, 0.75)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: 'var(--radius-full)',
                color: '#ffffff',
                fontSize: '0.85rem',
                fontWeight: 400,
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
              }}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }}></span>
              <span>Task Completed <span style={{ color: '#fff', fontWeight: 400 }}>Marketing Campaign</span></span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-task-pills {
            align-items: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}


