import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoSection from './components/BentoSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#02000f] text-white selection:bg-purple-500/30 overflow-x-hidden relative">
      {/* Background Grid - Global */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.15]" 
           style={{ 
             backgroundSize: '40px 40px', 
             backgroundImage: 'linear-gradient(to right, #4f46e5 1px, transparent 1px), linear-gradient(to bottom, #4f46e5 1px, transparent 1px)' 
           }}>
      </div>
      
      {/* Vignette */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#02000f_100%)]"></div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <BentoSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;