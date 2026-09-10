import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Showcase from './components/Showcase';
import TrackRecord from './components/TrackRecord';
import LaunchSection from './components/LaunchSection';
import Testimonials from './components/Testimonials';
import PlaybookChapters from './components/PlaybookChapters';
import CompanyTools from './components/CompanyTools';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg-dark)' }}>
      {/* Background ambient lighting mesh */}
      <div className="ambient-bg">
        <div className="ambient-orb ambient-orb-1"></div>
        <div className="ambient-orb ambient-orb-2"></div>
        <div className="ambient-orb ambient-orb-3"></div>
      </div>

      {/* Landing Page Content Stack */}
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <Showcase />
        <TrackRecord />
        <LaunchSection />
        <Testimonials />
        <PlaybookChapters />
        <CompanyTools />
      </main>
      <Footer />
    </div>
  );
}

export default App;
