
import React, { useState } from 'react';
import Navbar from './components/Navbar.tsx';
import TelemetryBar from './components/TelemetryBar.tsx';
import ProjectCard from './components/ProjectCard.tsx';
import { PROJECTS, TIMELINE_EVENTS, SKILL_CATEGORIES } from './constants.tsx';
import { Experience } from './types.ts';

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [isShattering, setIsShattering] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);

  const triggerConnectionSequence = () => {
    setIsConnecting(true);
    // Phase 1: Connection indicator (Brief handshake)
    setTimeout(() => {
      setIsConnecting(false);
      setIsShattering(true);
      // Phase 2: Screen shatter effect + Initializing state (User requested longer duration)
      setTimeout(() => {
        setShowModal(true);
        setIsShattering(false);
      }, 1500); // Increased from 1200ms to 1500ms for a more impactful transition
    }, 600);
  };

  const getEventStyles = (type: Experience['type']) => {
    switch (type) {
      case 'work': return 'border-blue-500 text-blue-500 dark:bg-blue-500/5';
      case 'internship': return 'border-purple-500 text-purple-500 dark:bg-purple-500/5';
      case 'achievement': return 'border-amber-500 text-amber-500 dark:bg-amber-500/5';
      case 'project': return 'border-emerald-500 text-emerald-500 dark:bg-emerald-500/5';
      case 'education': return 'border-blue-600 text-blue-600 dark:bg-white/5';
      default: return 'border-slate-500 text-slate-400';
    }
  };

  const renderCenteredParticles = () => {
    const count = 75; // Increased count for more drama
    return Array.from({ length: count }).map((_, i) => {
      const tx = (Math.random() - 0.5) * 1800; 
      const ty = (Math.random() - 0.5) * 1200; 
      const rot = (Math.random() - 0.5) * 3600; 
      const size = Math.random() * 8 + 2;
      return (
        <div 
          key={i} 
          className="particle rounded-full bg-blue-400 shadow-[0_0_15px_#60a5fa]" 
          style={{ 
            width: `${size}px`,
            height: `${size}px`,
            '--tw-translate-x': `${tx}px`, 
            '--tw-translate-y': `${ty}px`,
            '--tw-rotate': `${rot}deg`,
            left: '50%',
            top: '50%',
          } as any}
        />
      );
    });
  };

  return (
    <div className="min-h-screen relative selection:bg-blue-500/20 overflow-x-hidden dark:bg-[#020617] bg-white transition-colors duration-700 font-sans">
      <Navbar onHireMeClick={triggerConnectionSequence} isShattering={isShattering} isConnecting={isConnecting} />

      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-48 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border dark:border-blue-500/30 border-blue-200 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[11px] font-mono tracking-[0.2em] uppercase font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
                Product Analyst • HotelKey
              </div>
              <h1 className="text-6xl md:text-8xl xl:text-9xl font-extrabold tracking-tight leading-[0.9] dark:text-white text-slate-900">
                Vansh <br />
                <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 bg-clip-text text-transparent italic">Rewaskar.</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl lg:text-3xl dark:text-slate-300 text-slate-700 max-w-2xl leading-relaxed font-light">
              AI Engineer Enthusiast & <span className="text-blue-600 dark:text-blue-400 font-bold">Product Analyst</span>. <br/>
              <span className="opacity-70">Engineering scalable GenAI solutions with human-centric product strategy.</span>
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="https://flowcv.com/resume/2uiww5skit" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-blue-600 text-white rounded-pro text-[11px] font-black hover:brightness-110 transition-all shadow-xl uppercase tracking-[0.3em] flex items-center gap-3 active:scale-95">Download CV</a>
              <a href="https://github.com/Vansh956957" target="_blank" className="px-10 py-5 bg-[#24292e] dark:bg-slate-800 text-white rounded-pro text-[11px] font-black hover:brightness-110 transition-all shadow-xl uppercase tracking-[0.3em] flex items-center gap-3 active:scale-95">GitHub</a>
            </div>
          </div>
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="absolute -inset-10 bg-blue-500/10 rounded-full blur-[100px]"></div>
            <div className="relative w-72 h-96 lg:w-[32rem] lg:h-[42rem] dark:bg-slate-900 bg-slate-50 rounded-[3rem] border dark:border-white/10 border-slate-200 overflow-hidden shadow-2xl rotate-2 transition-transform hover:rotate-0 duration-700">
              <img src="profile.png" alt="Vansh Rewaskar" className="w-full h-full object-cover scale-110 grayscale hover:grayscale-0 transition-all duration-1000" onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2000"; }} />
            </div>
          </div>
        </div>
      </section>

      <TelemetryBar />

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 lg:px-8 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-4 space-y-6">
              <h2 className="text-4xl lg:text-5xl font-extrabold dark:text-white text-slate-900 uppercase tracking-tighter">Stack</h2>
              <div className="h-1.5 w-16 bg-blue-600 rounded-full"></div>
              <p className="dark:text-slate-400 text-slate-500 font-mono text-xs uppercase tracking-[0.3em]">Toolkit v2025.01</p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {SKILL_CATEGORIES.map((category) => (
                <div key={category.title} className="p-10 rounded-[2.5rem] dark:bg-white/[0.02] bg-slate-50 border dark:border-white/5 border-slate-200 transition-all hover:border-blue-500/30">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500 mb-8">{category.title}</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => (
                      <span key={skill} className="px-5 py-2.5 dark:bg-white/[0.05] bg-white dark:text-slate-300 text-slate-700 rounded-pro text-xs font-medium border dark:border-white/5 border-slate-200 shadow-sm">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 lg:px-8 bg-slate-50/50 dark:bg-slate-900/10 scroll-mt-24">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-extrabold dark:text-white text-slate-900 uppercase tracking-tighter">Projects</h2>
              <div className="h-1.5 w-16 bg-blue-600 rounded-full"></div>
            </div>
            <p className="dark:text-slate-400 text-slate-600 max-w-xl text-lg lg:text-right font-light italic opacity-80">Deploying autonomous AI frameworks that bridge the gap between abstract research and enterprise value.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">{PROJECTS.map((project) => (<ProjectCard key={project.id} project={project} />))}</div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 lg:px-8 scroll-mt-24">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="space-y-6 text-center">
            <h2 className="text-4xl lg:text-5xl font-extrabold dark:text-white text-slate-900 uppercase tracking-tighter">Experience</h2>
            <div className="h-1.5 w-16 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-5xl mx-auto relative">
            <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-[1px] bg-slate-200 dark:bg-white/10 -translate-x-1/2 hidden lg:block"></div>
            
            <div className="space-y-24">
              {TIMELINE_EVENTS.map((event, idx) => (
                <div key={event.id} className={`relative flex items-center justify-between gap-16 flex-col lg:flex-row ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="absolute left-0 lg:left-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-[#020617] bg-blue-600 -translate-x-1/2 hidden lg:block z-20 shadow-blue-glow"></div>
                  
                  <div className="w-full lg:w-[45%] group">
                    <div className="p-10 rounded-[3rem] dark:bg-white/[0.02] bg-white border dark:border-white/5 border-slate-200 shadow-soft transition-all duration-500 hover:border-blue-500/40 hover:-translate-y-2">
                      <div className="flex justify-between items-start mb-8">
                        <span className="text-[10px] font-mono text-blue-500 uppercase tracking-[0.4em] font-bold">{event.period}</span>
                        <span className={`px-4 py-1.5 rounded-full text-[9px] font-bold border ${getEventStyles(event.type)} uppercase tracking-[0.2em]`}>{event.type}</span>
                      </div>
                      <h3 className="text-2xl font-black dark:text-white text-slate-900 mb-2 group-hover:text-blue-500 transition-colors uppercase tracking-tight">{event.role}</h3>
                      <p className="text-blue-600 font-bold text-sm mb-8 opacity-90 uppercase tracking-[0.2em]">{event.company}</p>
                      <ul className="space-y-5">
                        {event.highlights.map((h, i) => (
                          <li key={i} className="dark:text-slate-400 text-slate-600 text-[13px] leading-relaxed flex items-start gap-5 font-light">
                            <span className="w-2 h-[1px] bg-blue-500/40 mt-2 shrink-0"></span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="hidden lg:block lg:w-[45%]"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-24 px-8 border-t dark:border-white/5 border-slate-100">
        
        {/* CTA Section */}
        <div className="max-w-7xl mx-auto py-32 flex flex-col items-center justify-center border-t dark:border-white/10 border-slate-200">
          <div className="text-center space-y-8 mb-20">
            <h3 className="text-4xl md:text-6xl font-black dark:text-white text-slate-900 uppercase tracking-tighter">Build the Future.</h3>
            <p className="dark:text-slate-400 text-slate-500 text-lg font-light tracking-widest max-w-2xl mx-auto uppercase opacity-60">Strategic AI Engineering • Human-Centric Analysis</p>
          </div>
          
          <div className="relative">
            <button 
              onClick={triggerConnectionSequence}
              disabled={isShattering || isConnecting}
              className={`group relative px-20 py-7 bg-blue-600 text-white rounded-xl text-sm font-black uppercase tracking-[0.6em] transition-all duration-700 hover:scale-[1.05] active:scale-95 overflow-hidden shadow-[0_20px_50px_rgba(37,99,235,0.3)] border border-blue-400/20
                ${isShattering ? 'opacity-0 scale-75 blur-2xl pointer-events-none' : 'opacity-100 scale-100'}`}
            >
              <div className="absolute inset-0 z-0 pointer-events-none">
                 <div className="branch-overlay"></div>
              </div>

              <span className={`relative z-20 transition-all duration-300 ${isConnecting ? 'opacity-0' : 'group-hover:opacity-0 opacity-100'}`}>Initialize Contact</span>
              
              {isConnecting && (
                <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                  <span className="text-3xl font-black font-mono tracking-tighter animate-tactical-connect">>></span>
                </div>
              )}
            </button>
          </div>
        </div>
        
        {/* Footer Info */}
        <div className="max-w-7xl mx-auto mt-24 pt-24 border-t dark:border-white/20 border-slate-300 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <p className="text-[18px] dark:text-white text-slate-900 font-black font-mono tracking-[0.8em] uppercase">VANSH REWASKAR</p>
            <p className="text-[11px] dark:text-blue-400 text-blue-600 font-black font-mono tracking-[0.4em] uppercase opacity-70">SYSTEM_ARCH_2025 • INTEGRITY_SECURED</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4">
            <p className="text-[18px] dark:text-white text-slate-900 font-black font-mono tracking-[0.8em] uppercase">NAGPUR • INDIA</p>
            <p className="text-[11px] dark:text-slate-400 text-slate-500 font-black font-mono tracking-[0.4em] uppercase opacity-70">COORDS: 21.1458° N, 79.0882° E</p>
          </div>
        </div>
      </footer>

      {/* Full Screen Particles during Shatter Sequence - Enhanced with Blur Backdrop */}
      {isShattering && (
        <div className="fixed inset-0 pointer-events-none z-[150] flex items-center justify-center overflow-hidden backdrop-blur-2xl bg-slate-950/40 transition-all duration-700">
          {renderCenteredParticles()}
          <div className="absolute z-50 text-blue-500 font-mono font-black uppercase tracking-[1.5em] text-[12px] animate-pulse">Initializing Interface...</div>
        </div>
      )}

      {/* Pop-up Window: Dark Glassmorphism */}
      {showModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-slate-950/60 backdrop-blur-md transition-all duration-700">
          <div className="relative w-full max-w-xl glass-morphism-dark rounded-[3rem] p-16 text-center shadow-tactical border border-white/5 animate-modal">
            <button onClick={() => setShowModal(false)} className="absolute top-10 right-10 text-slate-500 hover:text-white transition-colors p-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            
            <div className="mb-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[9px] font-mono tracking-[0.4em] uppercase">
               Authorized Access
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-16 tracking-tighter uppercase leading-[1.1] font-sans">Let's connect...</h2>
            
            <div className="grid gap-6 text-left">
              <a href="mailto:vanshrewaskar18@gmail.com" 
                 className="group flex flex-col gap-3 p-10 bg-white/[0.03] rounded-3xl transition-all duration-500 border-2 border-transparent shadow-blue-base hover:border-emerald-500 hover:shadow-green-hover">
                <div className="flex justify-between items-center">
                  <span className="font-arial font-black text-slate-400 text-xs tracking-[0.3em] uppercase">Email Protocol</span>
                  <svg className="w-6 h-6 text-slate-600 group-hover:text-emerald-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <span className="font-arial text-xl text-white font-bold transition-colors">vanshrewaskar18@gmail.com</span>
              </a>

              <a href="https://linkedin.com/in/vansh-rewaskar-b8284a22a/" target="_blank" rel="noopener noreferrer" 
                 className="group flex flex-col gap-3 p-10 bg-white/[0.03] rounded-3xl transition-all duration-500 border-2 border-transparent shadow-blue-base hover:border-blue-500 hover:shadow-blue-glow">
                <div className="flex justify-between items-center">
                  <span className="font-arial font-black text-slate-400 text-xs tracking-[0.3em] uppercase">LinkedIn Profile</span>
                  <svg className="w-6 h-6 text-slate-600 group-hover:text-blue-500 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </div>
                <span className="font-arial text-xl text-white font-bold transition-colors">Vansh Rewaskar</span>
              </a>
            </div>
            
            <p className="mt-16 text-[9px] font-mono text-slate-500 uppercase tracking-[0.5em] font-medium italic">Secure Channel • Nagpur, IN</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
