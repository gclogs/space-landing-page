import React from 'react';
import { Icon } from '@iconify/react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-[#02000f] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
           <h2 className="text-2xl font-bold font-display tracking-widest mb-2">SPACE</h2>
           <p className="text-gray-500 text-xs font-mono">
             © 2025 SPACE STUDIO<br />
             TOKYO / NEW YORK / LONDON
           </p>
        </div>
        
        <div className="flex gap-6">
           <a href="#" className="p-2 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">
             <Icon icon="solar:brand-twitter-filled" />
           </a>
           <a href="#" className="p-2 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">
             <Icon icon="solar:brand-instagram-bold" />
           </a>
           <a href="#" className="p-2 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">
             <Icon icon="solar:brand-linkedin-bold" />
           </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;