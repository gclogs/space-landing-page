import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    // Trigger Unicorn Studio init if it wasn't caught by the global script yet
    if ((window as any).UnicornStudio) {
      (window as any).UnicornStudio.init();
    }

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      
      {/* Unicorn Studio Background Embed - Updated Project */}
      <div className="absolute inset-0 z-0">
        <div 
          data-us-project="HKs2staaueEZcwt9A3VJ" 
          style={{ width: '100%', height: '100%' }}
        ></div>
        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#02000f]/30 via-transparent to-[#02000f] pointer-events-none"></div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-6 text-center">
        
        {/* Beta Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 group cursor-pointer"
        >
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
            </span>
            <span className="text-[10px] md:text-xs font-mono tracking-wider text-gray-300 uppercase">
              Public Beta Test Live
            </span>
            <Icon icon="solar:alt-arrow-right-linear" className="w-3 h-3 text-gray-400 group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.div>

        {/* Main Title - Reduced Size slightly */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tighter text-white mb-6 mix-blend-overlay"
        >
          SPACE
        </motion.h1>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-base md:text-lg text-gray-400 font-light max-w-lg leading-relaxed"
        >
          We craft immersive digital experiences that blend aesthetic precision with intelligent systems. Defining the visual language of the future.
        </motion.p>

      </div>

      {/* Technical UI Overlays */}
      <TechnicalOverlay />

      <div className="absolute bottom-10 right-10 md:right-20 text-xs font-mono text-gray-500 max-w-[200px] text-right hidden md:block">
        <h3 className="text-white mb-2 uppercase tracking-widest">Updates</h3>
        <ul className="space-y-4">
          <li className="hover:text-brand-cyan transition-colors cursor-pointer">
            <span className="block text-[10px] text-gray-600">2025.06.26</span>
            System Upgrade v2.4
          </li>
          <li className="hover:text-brand-cyan transition-colors cursor-pointer">
            <span className="block text-[10px] text-gray-600">2025.05.16</span>
            Global Design Awards
          </li>
        </ul>
      </div>

      <div className="absolute bottom-10 left-10 md:left-20 text-[10px] font-mono text-gray-500 space-y-1 hidden md:block">
        <div className="flex gap-4 items-center">
          <span>Engine Status</span>
          <span className="text-brand-cyan">Online</span>
        </div>
        <div className="flex gap-4 items-center">
          <span className="w-20">latency</span>
          <div className="w-12 h-[1px] bg-gray-700 relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-1 bg-white"></div>
          </div>
          <span>12ms</span>
        </div>
      </div>

    </section>
  );
};

const TechnicalOverlay = () => {
  return (
    <>
      {/* Top Right Widget */}
      <div className="absolute top-28 right-10 md:right-20 w-32 hidden lg:block opacity-50">
         <div className="text-[10px] font-mono text-right text-gray-500 mb-2">Network</div>
         <div className="flex gap-1 justify-end">
            <div className="w-1 h-4 bg-brand-cyan/20 animate-pulse"></div>
            <div className="w-1 h-6 bg-brand-cyan/40 animate-pulse delay-75"></div>
            <div className="w-1 h-3 bg-brand-cyan/60 animate-pulse delay-100"></div>
            <div className="w-1 h-5 bg-brand-cyan/80 animate-pulse delay-150"></div>
         </div>
      </div>
      
      {/* Grid Crosshairs */}
      <div className="absolute top-1/2 left-10 text-white/10 text-xl font-light hidden md:block">+</div>
      <div className="absolute top-1/2 right-10 text-white/10 text-xl font-light hidden md:block">+</div>
      <div className="absolute bottom-20 left-1/2 text-white/10 text-xl font-light">-</div>
    </>
  );
}

export default Hero;