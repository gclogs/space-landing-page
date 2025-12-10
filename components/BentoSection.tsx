import React from 'react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const BentoSection: React.FC = () => {
  const cardVariant = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  return (
    <section className="relative py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
      {/* Section Header */}
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-2 text-white tracking-tight">
            System Architecture
          </h2>
          <p className="text-gray-400 max-w-lg text-sm md:text-base font-light">
            Our proprietary design engine integrates seamlessly with your mission objectives, delivering high-fidelity assets at light speed.
          </p>
        </div>
        <button className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-cyan border border-brand-cyan/20 px-4 py-2 rounded-full hover:bg-brand-cyan/10 transition-colors">
          View Full Specs <Icon icon="solar:arrow-right-linear" />
        </button>
      </div>

      {/* Bento Grid - 4 Column Compact Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[240px]">
        
        {/* Card 1: Orbital Analytics (Large) */}
        <motion.div 
          variants={cardVariant}
          initial="initial"
          whileInView="whileInView"
          className="col-span-1 md:col-span-2 row-span-1 glass-card rounded-2xl p-6 relative overflow-hidden group border border-white/5 hover:border-brand-cyan/30 transition-colors"
        >
          <div className="absolute top-0 right-0 p-6 opacity-50 group-hover:opacity-100 transition-opacity">
            <Icon icon="solar:chart-square-linear" className="w-6 h-6 text-brand-cyan" />
          </div>
          <div className="h-full flex flex-col justify-between relative z-10">
            <div>
              <h3 className="text-lg font-medium text-white">Orbital Analytics</h3>
              <p className="text-xs text-gray-500 font-mono mt-1">Real-time data visualization</p>
            </div>
            
            {/* Visual: Graph */}
            <div className="relative h-24 w-full mt-4 flex items-end gap-1">
               {[40, 65, 50, 80, 55, 90, 70, 95, 85, 100].map((h, i) => (
                 <div key={i} className="flex-1 bg-brand-cyan/20 rounded-t-sm relative group-hover:bg-brand-cyan/40 transition-colors overflow-hidden" style={{ height: `${h}%` }}>
                    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-brand-cyan/40 to-transparent"></div>
                 </div>
               ))}
               {/* Overlay Line */}
               <div className="absolute top-0 left-0 w-full h-full border-t border-brand-cyan/30 border-dashed"></div>
            </div>
          </div>
          {/* Bg Glow */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-cyan/10 blur-[50px] rounded-full"></div>
        </motion.div>

        {/* Card 2: Core Processor (Small) */}
        <motion.div 
          variants={cardVariant}
          initial="initial"
          whileInView="whileInView"
          transition={{ delay: 0.1 }}
          className="col-span-1 glass-card rounded-2xl p-6 relative flex flex-col justify-between overflow-hidden group border border-white/5 hover:border-purple-500/30 transition-colors"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          <div className="flex justify-between items-start">
             <Icon icon="solar:cpu-bolt-linear" className="w-8 h-8 text-brand-purple" />
             <div className="flex gap-1">
               <div className="w-1 h-1 bg-white/20 rounded-full"></div>
               <div className="w-1 h-1 bg-white/20 rounded-full"></div>
             </div>
          </div>

          <div className="mt-4 flex items-center justify-center py-4">
             <div className="relative w-16 h-16 border border-brand-purple/30 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
                <div className="w-10 h-10 bg-brand-purple/20 rounded-full blur-md absolute"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
             </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-white">Neural Core</h3>
            <p className="text-[10px] text-gray-500 font-mono">AI Processing Unit</p>
          </div>
        </motion.div>

        {/* Card 3: Shield Security (Small) */}
        <motion.div 
          variants={cardVariant}
          initial="initial"
          whileInView="whileInView"
          transition={{ delay: 0.2 }}
          className="col-span-1 glass-card rounded-2xl p-6 relative flex flex-col justify-between overflow-hidden group border border-white/5 hover:border-green-500/30 transition-colors"
        >
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-green-500/5 blur-[40px] rounded-full"></div>
          
          <div className="flex justify-between items-start">
             <div className="px-2 py-0.5 rounded text-[10px] font-mono bg-green-500/10 text-green-400 border border-green-500/20">
               SECURE
             </div>
             <Icon icon="solar:shield-check-linear" className="w-5 h-5 text-gray-500 group-hover:text-green-400 transition-colors" />
          </div>

          <div className="space-y-2 mt-4">
             <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-green-500/50"></div>
             </div>
             <div className="h-1 w-2/3 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-1/2 bg-green-500/30"></div>
             </div>
             <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-full bg-green-500/20"></div>
             </div>
          </div>

          <div className="mt-auto">
            <h3 className="text-sm font-medium text-white">Encrypted</h3>
            <p className="text-[10px] text-gray-500 font-mono">End-to-end protection</p>
          </div>
        </motion.div>

        {/* Card 4: Design Systems (Small) */}
        <motion.div 
          variants={cardVariant}
          initial="initial"
          whileInView="whileInView"
          transition={{ delay: 0.3 }}
          className="col-span-1 glass-card rounded-2xl p-0 relative flex flex-col overflow-hidden group border border-white/5 hover:border-white/20 transition-colors"
        >
           {/* Abstract UI Visual */}
           <div className="flex-1 bg-white/5 p-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
              {/* Floating Elements */}
              <div className="absolute top-4 left-4 w-12 h-12 rounded-lg border border-white/10 bg-black/40 backdrop-blur-sm transform group-hover:-translate-y-1 transition-transform"></div>
              <div className="absolute top-8 left-10 w-12 h-12 rounded-lg border border-white/10 bg-white/10 backdrop-blur-sm transform group-hover:translate-x-1 transition-transform z-10"></div>
           </div>
           
           <div className="p-4 bg-[#050510]">
              <h3 className="text-sm font-medium text-white">Atomic Design</h3>
              <p className="text-[10px] text-gray-500 font-mono">Modular Components</p>
           </div>
        </motion.div>

        {/* Card 5: Mission Control (Large) */}
        <motion.div 
          variants={cardVariant}
          initial="initial"
          whileInView="whileInView"
          transition={{ delay: 0.4 }}
          className="col-span-1 md:col-span-2 glass-card rounded-2xl p-6 relative overflow-hidden group border border-white/5 hover:border-brand-cyan/30 transition-colors"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          <div className="flex items-center justify-between mb-6">
             <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                 <Icon icon="solar:user-circle-linear" className="text-white" />
               </div>
               <div>
                  <h3 className="text-sm font-medium text-white">Pilot Status</h3>
                  <p className="text-[10px] text-green-400 font-mono">● Online</p>
               </div>
             </div>
             <Icon icon="solar:settings-linear" className="text-gray-500 hover:text-white transition-colors cursor-pointer" />
          </div>

          <div className="grid grid-cols-3 gap-2">
             <div className="bg-white/5 rounded-lg p-3 text-center border border-white/5 hover:bg-white/10 transition-colors">
                <Icon icon="solar:download-linear" className="w-5 h-5 mx-auto mb-2 text-brand-cyan" />
                <div className="text-[10px] text-gray-400">Assets</div>
             </div>
             <div className="bg-white/5 rounded-lg p-3 text-center border border-white/5 hover:bg-white/10 transition-colors">
                <Icon icon="solar:upload-linear" className="w-5 h-5 mx-auto mb-2 text-brand-purple" />
                <div className="text-[10px] text-gray-400">Deploy</div>
             </div>
             <div className="bg-white/5 rounded-lg p-3 text-center border border-white/5 hover:bg-white/10 transition-colors">
                <Icon icon="solar:bell-linear" className="w-5 h-5 mx-auto mb-2 text-white" />
                <div className="text-[10px] text-gray-400">Alerts</div>
             </div>
          </div>
          
          <div className="mt-4 text-[10px] text-gray-500 font-mono text-center">
             System Version 2.4.0 • <span className="text-gray-400">Stable</span>
          </div>
        </motion.div>

        {/* Card 6: Global Network (Small) */}
        <motion.div 
          variants={cardVariant}
          initial="initial"
          whileInView="whileInView"
          transition={{ delay: 0.5 }}
          className="col-span-1 glass-card rounded-2xl p-6 relative flex flex-col justify-between overflow-hidden group border border-white/5 hover:border-blue-500/30 transition-colors"
        >
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
             {/* Simple Globe/Grid Effect */}
             <div className="w-32 h-32 border border-white/10 rounded-full flex items-center justify-center">
                <div className="w-24 h-24 border border-white/10 rounded-full flex items-center justify-center">
                   <div className="w-16 h-16 border border-white/10 rounded-full"></div>
                </div>
             </div>
          </div>
          <div className="relative z-10 flex justify-between w-full">
            <Icon icon="solar:globe-linear" className="text-blue-400 w-6 h-6" />
            <Icon icon="solar:satellite-linear" className="text-gray-500 w-5 h-5" />
          </div>

          <div className="relative z-10 mt-auto">
             <h3 className="text-sm font-medium text-white">Global Link</h3>
             <p className="text-[10px] text-gray-500 font-mono">Latency: 12ms</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default BentoSection;