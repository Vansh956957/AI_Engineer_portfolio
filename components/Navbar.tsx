import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onHireMeClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onHireMeClick }) => {
  const [isDark, setIsDark] = useState(true);
  const [scrollState, setScrollState] = useState<'solid' | 'faded'>('solid');
  const [isFooter, setIsFooter] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      
      const nearHero = scrollY < 200;
      const nearFooter = scrollY + winHeight > docHeight - 300;

      setIsFooter(nearFooter);
      
      if (nearHero || nearFooter) {
        setScrollState('solid');
      } else {
        setScrollState('faded');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed top-8 right-8 z-50 flex items-center gap-3 transition-all duration-1000 ease-in-out group
        ${scrollState === 'faded' ? 'opacity-30 hover:opacity-100 scale-95 hover:scale-100' : 'opacity-100 scale-100'}`}
    >
      <button 
        onClick={() => setIsDark(!isDark)}
        className="p-3 rounded-2xl glass shadow-lg hover:scale-110 transition-all dark:text-yellow-400 text-slate-700 border dark:border-white/10 border-slate-200"
        aria-label="Toggle Theme"
      >
        {isDark ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"/></svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
        )}
      </button>
      
      <button 
        onClick={onHireMeClick}
        className={`px-8 py-4 bg-blue-600 text-white rounded-2xl text-[11px] font-bold hover:bg-blue-500 transition-all shadow-xl uppercase tracking-[0.2em] active:scale-95 border border-blue-400/20
          ${isFooter ? 'footer-hire-glow' : ''}`}
      >
        Hire Me
      </button>
    </div>
  );
};

export default Navbar;