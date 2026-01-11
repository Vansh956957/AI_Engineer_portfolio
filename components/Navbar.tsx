
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onHireMeClick: () => void;
  isShattering: boolean;
  isConnecting: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onHireMeClick, isShattering, isConnecting }) => {
  const [isDark, setIsDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-8 right-8 z-50 flex items-center gap-4 transition-all duration-700 ${isScrolled ? 'scale-90 translate-x-2' : ''}`}>
      <button 
        onClick={() => setIsDark(!isDark)}
        className="p-4 rounded-xl glass shadow-lg hover:bg-white/10 transition-all dark:text-yellow-400 text-slate-700 border dark:border-white/10 border-slate-200"
        aria-label="Toggle Theme"
      >
        {isDark ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"/></svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
        )}
      </button>

      <div className="relative">
        <button 
          onClick={onHireMeClick}
          disabled={isShattering || isConnecting}
          className={`group relative px-12 py-5 bg-blue-600 text-white rounded-xl text-xs font-black uppercase tracking-[0.25em] transition-all duration-700 shadow-[0_15px_30px_rgba(37,99,235,0.3)] border border-blue-400/20 overflow-hidden active:scale-95
            ${isShattering ? 'opacity-0 scale-50 blur-2xl pointer-events-none' : 'opacity-100 scale-100'}`}
        >
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="branch-overlay"></div>
          </div>
          
          <span className={`relative z-10 transition-all duration-300 ${isConnecting ? 'opacity-0' : 'group-hover:opacity-0 opacity-100'}`}>Hire Me</span>
          
          {isConnecting && (
            <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
               <span className="font-mono text-2xl font-black animate-tactical-connect tracking-tighter"></span>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
