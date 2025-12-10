import React from 'react';
import { Icon } from '@iconify/react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-12 backdrop-blur-sm bg-[#02000f]/50 border-b border-white/5">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <span className="font-bold font-display text-xl tracking-wider">SPACE</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-mono text-gray-400">
        <a href="#" className="hover:text-white transition-colors">News</a>
        <a href="#" className="hover:text-white transition-colors">Works</a>
        <a href="#" className="hover:text-white transition-colors">About</a>
        <a href="#" className="hover:text-white transition-colors">Studio</a>
      </div>

      <div className="flex items-center gap-6">
        <button className="hidden md:flex border border-white/20 rounded-full px-6 py-2 text-xs font-mono uppercase hover:bg-white hover:text-black transition-all duration-300">
          Contact / Recruit
        </button>
        <button className="text-white/80 hover:text-white">
           <Icon icon="solar:hamburger-menu-broken" width="24" height="24" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;