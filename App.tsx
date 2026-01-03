import React, { useState } from 'react';
import Navbar from './components/Navbar.tsx';
import TelemetryBar from './components/TelemetryBar.tsx';
import ProjectCard from './components/ProjectCard.tsx';
import { PROJECTS, TIMELINE_EVENTS, SKILL_CATEGORIES, CODING_STATS } from './constants.tsx';
import { Experience } from './types.ts';

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const getEventStyles = (type: Experience['type']) => {
    switch (type) {
      case 'work': return 'border-blue-500 text-blue-500 dark:bg-blue-500/5 bg-blue-50';
      case 'internship': return 'border-purple-500 text-purple-500 dark:bg-purple-500/5 bg-blue-50';
      case 'achievement': return 'border-amber-500 text-amber-500 dark:bg-amber-500/5 bg-amber-50';
      case 'project': return 'border-emerald-500 text-emerald-500 dark:bg-emerald-500/5 bg-emerald-50';
      case 'education': return 'border-blue-600 text-blue-600 dark:bg-white/5 bg-slate-100';
      default: return 'border-slate-500 text-slate-400';
    }
  };

  const getMarkerColor = (type: Experience['type']) => {
    switch (type) {
      case 'work': return 'bg-blue-500';
      case 'internship': return 'bg-purple-500';
      case 'achievement': return 'bg-amber-500';
      case 'project': return 'bg-emerald-500';
      default: return 'bg-slate-400';
    }
  };

  const workEvents = TIMELINE_EVENTS.filter(e => e.type === 'work');
  const educationEvent = TIMELINE_EVENTS.find(e => e.type === 'education');
  
  const internshipEvents = TIMELINE_EVENTS.filter(e => e.type === 'internship');
  const achievementEvents = TIMELINE_EVENTS.filter(e => e.type === 'achievement');
  const academicProjectEvents = TIMELINE_EVENTS.filter(e => e.type === 'project');

  const rightColumnEvents = [...internshipEvents, ...achievementEvents, ...academicProjectEvents];

  return (
    <div className="min-h-screen relative selection:bg-blue-500/20 overflow-x-hidden dark:bg-[#020617] bg-white transition-colors duration-700">
      <Navbar onHireMeClick={() => setShowModal(true)} />

      {/* Hero Section */}
      <section className="pt-56 pb-40 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-24">
          <div className="flex-1 space-y-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border dark:border-blue-500/20 border-blue-200 bg-blue-500/5 text-blue-500 dark:text-blue-400 text-[11px] font-mono tracking-[0.2em] uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Product Analyst • HotelKey
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[1.05] dark:text-white text-slate-900">
              Vansh <br />
              <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 bg-clip-text text-transparent">Rewaskar.</span>
            </h1>
            
            <p className="text-xl md:text-2xl dark:text-slate-400 text-slate-500 max-w-xl leading-relaxed font-light tracking-tight">
              AI Engineer Enthusiast & <span className="dark:text-slate-200 text-slate-800 font-medium">Product Analyst</span>. 
              Engineering scalable GenAI solutions with human-centric product strategy.
            </p>

            <div className="pt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a 
                href="https://linkedin.com/in/vansh-rewaskar-b8284a22a/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#0077b5] text-white rounded-2xl text-[11px] font-bold hover:bg-[#006097] transition-all shadow-xl uppercase tracking-[0.2em] flex items-center gap-3 border border-white/10 active:scale-95"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                LinkedIn
              </a>
              <a 
                href="https://github.com/Vansh956957" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#24292e] text-white rounded-2xl text-[11px] font-bold hover:bg-[#1b1f23] transition-all shadow-xl uppercase tracking-[0.2em] flex items-center gap-3 border border-white/10 active:scale-95"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                GitHub
              </a>
            </div>
          </div>

          <div className="relative shrink-0">
            <div className="absolute -inset-4 bg-blue-500/10 rounded-3xl blur-2xl"></div>
            <div className="relative w-80 h-80 md:w-[28rem] md:h-[36rem] dark:bg-slate-900 bg-slate-50 rounded-3xl border dark:border-white/5 border-slate-100 overflow-hidden shadow-soft transition-all duration-1000">
              <img 
                src="profile.png" 
                alt="Vansh Rewaskar" 
                className="w-full h-full object-cover scale-100 grayscale hover:grayscale-0 transition-all duration-700"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2000";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <TelemetryBar />

      {/* Skills Section */}
      <section id="skills" className="py-48 px-6 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-32 text-center">
            <h2 className="text-4xl md:text-6xl font-bold dark:text-white text-slate-900 uppercase mb-6 tracking-tight">Skills</h2>
            <div className="h-1 w-24 bg-blue-600/40 mx-auto rounded-full mb-6"></div>
            <p className="dark:text-slate-500 text-slate-400 font-mono tracking-[0.3em] uppercase text-[10px]">Technology & Methodology</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {SKILL_CATEGORIES.map((category) => (
              <div key={category.title} className="p-12 rounded-3xl dark:bg-white/[0.01] bg-slate-50/30 border dark:border-white/5 border-slate-100 transition-all hover:dark:border-white/10 hover:border-slate-200">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-500/80 mb-10 text-center">
                  {category.title}
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {category.skills.map((skill) => (
                    <span key={skill} className="px-5 py-3 dark:bg-white/[0.03] bg-white dark:text-slate-300 text-slate-600 rounded-xl text-xs font-medium border dark:border-white/5 border-slate-200/60 transition-all cursor-default hover:border-blue-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section id="projects" className="py-48 px-6 dark:bg-slate-900/10 bg-slate-50/40 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-32">
            <h2 className="text-4xl md:text-6xl font-bold dark:text-white text-slate-900 uppercase mb-6 tracking-tight">Project</h2>
            <div className="h-1 w-24 bg-blue-600/40 mx-auto rounded-full mb-10"></div>
            <p className="dark:text-slate-400 text-slate-500 text-lg max-w-2xl mx-auto font-light leading-relaxed tracking-tight">
              Orchestrating autonomous AI frameworks and architectural pipelines for large-scale enterprise integration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="experience" className="py-48 px-6 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-40">
            <h2 className="text-4xl md:text-6xl font-bold dark:text-white text-slate-900 uppercase mb-6 tracking-tight">Timeline</h2>
            <div className="h-1 w-24 bg-blue-600/40 mx-auto rounded-full"></div>
          </div>

          <div className="mb-40">
            {workEvents.map((event) => (
              <div key={event.id} className="relative p-14 md:p-20 rounded-3xl dark:bg-slate-900/40 bg-white border dark:border-white/5 border-slate-100 shadow-soft transition-all ring-1 ring-slate-100/50 dark:ring-white/5">
                <div className="absolute top-0 right-0 p-12 hidden lg:block">
                  <span className="px-6 py-2 rounded-full text-[10px] font-mono border dark:border-white/10 border-slate-200 text-slate-400 uppercase tracking-[0.4em] font-medium">Current Focus</span>
                </div>
                <div className="space-y-10">
                  <div className="text-[11px] font-mono text-blue-500/80 uppercase tracking-[0.4em] mb-2">{event.period}</div>
                  <h3 className="text-4xl md:text-6xl font-bold dark:text-white text-slate-900 tracking-tight uppercase leading-[1.1]">{event.role}</h3>
                  <div className="flex items-center gap-4">
                    <p className="text-blue-600 font-bold text-2xl uppercase tracking-tighter opacity-90">{event.company}</p>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 border-t dark:border-white/5 border-slate-100 pt-12">
                    {event.highlights.map((h, i) => (
                      <li key={i} className="dark:text-slate-400 text-slate-500 text-[17px] leading-relaxed flex items-start gap-6 font-light">
                        <span className="w-2 h-2 rounded-full mt-2.5 bg-blue-500/40 shrink-0"></span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-40">
                {educationEvent && (
                  <div className="p-12 rounded-3xl dark:bg-white/[0.01] bg-slate-50/50 border dark:border-white/5 border-slate-100">
                    <div className="flex flex-col items-start gap-8 mb-12">
                      <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-600 font-bold text-3xl border border-blue-500/20">B</div>
                      <div>
                        <span className="text-[10px] font-mono dark:text-slate-500 text-slate-400 uppercase tracking-[0.3em]">Education Foundation</span>
                        <div className="text-xs font-mono text-slate-400 mt-2 uppercase tracking-[0.2em]">{educationEvent.period}</div>
                      </div>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold dark:text-white text-slate-900 leading-[1.15] mb-6 uppercase tracking-tight">
                      {educationEvent.role}
                    </h3>
                    <p className="text-blue-500 font-bold text-lg mb-8 uppercase tracking-tight opacity-70">{educationEvent.company}</p>
                    <p className="dark:text-slate-400 text-slate-500 leading-relaxed font-light text-lg tracking-normal">
                      Deep specialization in Neural Architectures and Scalable Product Systems.
                    </p>
                    <div className="mt-12 pt-10 border-t dark:border-white/5 border-slate-200">
                      <div className="flex flex-wrap items-center gap-10">
                        <div>
                          <div className="text-4xl font-bold text-blue-500">8.88</div>
                          <div className="text-[10px] font-medium uppercase text-slate-400 tracking-widest mt-2">CGPA</div>
                        </div>
                        <div className="h-10 w-[1px] bg-slate-200/50 dark:bg-white/5"></div>
                        <div>
                          <div className="text-xl font-bold dark:text-white text-slate-800 uppercase tracking-tight">Class of 2024</div>
                          <div className="text-[10px] font-medium uppercase text-slate-400 tracking-widest mt-2">Nagpur, India</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-7 space-y-10 relative pt-2">
              <div className="absolute left-0 top-0 w-[1px] h-full dark:bg-white/5 bg-slate-200 hidden sm:block"></div>
              {rightColumnEvents.map((event) => (
                <div key={event.id} className="relative sm:pl-16 group">
                  <div className={`absolute left-[-4.5px] top-8 w-2 h-2 rounded-full hidden sm:block z-10 ${getMarkerColor(event.type)} opacity-60 transition-transform group-hover:scale-150`}></div>
                  <div className="p-10 rounded-3xl dark:bg-slate-900/20 bg-white border dark:border-white/5 border-slate-100 shadow-soft transition-all duration-500 group-hover:border-blue-500/20">
                    <div className="flex flex-wrap justify-between items-start mb-8 gap-4">
                      <div className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.3em] font-medium">{event.period}</div>
                      <span className={`px-4 py-1 rounded-full text-[9px] font-bold border-2 ${getEventStyles(event.type)} uppercase tracking-[0.2em]`}>
                        {event.type}
                      </span>
                    </div>
                    <h4 className="text-2xl font-bold dark:text-slate-100 text-slate-900 tracking-tight uppercase mb-2 group-hover:text-blue-500 transition-colors">
                      {event.role}
                    </h4>
                    <p className="font-bold text-xs mb-8 uppercase tracking-[0.1em] opacity-40">
                      {event.company}
                    </p>
                    
                    <ul className="space-y-4">
                      {event.highlights.map((h, i) => (
                        <li key={i} className="dark:text-slate-400 text-slate-500 text-sm leading-relaxed flex items-start gap-4 font-light">
                          <span className={`w-1 h-1 rounded-full mt-2 shrink-0 ${getMarkerColor(event.type)} opacity-40`}></span>
                          {h}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-10 flex flex-wrap gap-4">
                      {event.paperUrl && (
                        <a href={event.paperUrl} target="_blank" rel="noopener noreferrer" className="animate-paper-glow hover-paper-glow px-6 py-3 bg-white dark:bg-white/5 dark:text-slate-100 text-slate-900 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all flex items-center gap-3 border dark:border-blue-500/40 border-blue-200 active:scale-95">
                          <svg className="w-3.5 h-3.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                          Research Paper
                        </a>
                      )}
                      {event.demoUrl && (
                        <a href={event.demoUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-blue-600 text-white rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all flex items-center gap-3 border border-blue-500/20 hover:bg-blue-500 active:scale-95 shadow-lg shadow-blue-500/20">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
                          Launch Application
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coding Stats */}
      <section className="py-48 px-6 dark:bg-slate-900/10 bg-slate-50/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-32">
            <h2 className="text-4xl md:text-6xl font-bold dark:text-white text-slate-900 uppercase tracking-tight mb-8">Coding Platform Achievements</h2>
            <div className="h-1 w-24 bg-blue-600/40 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {CODING_STATS.map((stat) => (
              <div key={stat.platform} className="p-12 rounded-3xl dark:bg-white/[0.01] bg-white border dark:border-white/5 border-slate-100 shadow-soft text-center group transition-all duration-500 hover:border-blue-500/10">
                <div className="text-6xl mb-10 transform transition-transform group-hover:scale-110">{stat.icon}</div>
                <h3 className="text-xl font-bold dark:text-white text-slate-800 mb-4 uppercase tracking-[0.2em]">{stat.platform}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-6 tracking-tight">{stat.rank}</div>
                <p className="dark:text-slate-500 text-slate-500 text-sm leading-relaxed font-light tracking-normal">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hire Me Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-700">
          <div className="relative w-full max-w-lg bg-white rounded-[2.5rem] p-12 text-center shadow-2xl overflow-hidden animate-in zoom-in-95 duration-[1500ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-8 right-8 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            
            <div className="mb-8 flex justify-center">
              <div className="w-24 h-24 bg-blue-100 rounded-3xl flex items-center justify-center text-5xl shadow-inner animate-bounce">
                🚀
              </div>
            </div>
            
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Let's Build Together</h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              Ready to deploy innovative AI solutions? Connect with me via your preferred channel.
            </p>
            
            <div className="space-y-4">
              <a href="tel:+919325990464" className="group flex items-center justify-between w-full p-6 bg-slate-50 hover:bg-blue-600 rounded-2xl transition-all border border-slate-100 hover:border-blue-500 hover:shadow-lg active:scale-95">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-100 group-hover:bg-blue-500 rounded-xl flex items-center justify-center text-blue-600 group-hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-bold text-slate-400 group-hover:text-blue-100 uppercase tracking-widest">Direct Line</p>
                    <p className="text-slate-900 group-hover:text-white font-bold text-lg">+91 9325990464</p>
                  </div>
                </div>
              </a>

              <a href="mailto:vanshrewaskar18@gmail.com" className="group flex items-center justify-between w-full p-6 bg-slate-50 hover:bg-indigo-600 rounded-2xl transition-all border border-slate-100 hover:border-indigo-500 hover:shadow-lg active:scale-95">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-indigo-100 group-hover:bg-indigo-500 rounded-xl flex items-center justify-center text-indigo-600 group-hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-bold text-slate-400 group-hover:text-indigo-100 uppercase tracking-widest">Email</p>
                    <p className="text-slate-900 group-hover:text-white font-bold text-lg">vanshrewaskar18@gmail.com</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-48 px-6 border-t dark:border-white/5 border-slate-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-24">
          <div className="text-center md:text-left space-y-12">
            <h2 className="text-6xl md:text-8xl font-bold dark:text-white text-slate-900 leading-[0.95] tracking-tight uppercase">
              Accelerate <br/> <span className="text-blue-600/80">Innovation.</span>
            </h2>
            <div className="flex flex-wrap gap-10 justify-center md:justify-start font-bold text-[11px] tracking-[0.4em] dark:text-slate-500 text-slate-400 uppercase">
              <a href="https://linkedin.com/in/vansh-rewaskar-b8284a22a/" target="_blank" className="hover:text-blue-500 transition-colors">LINKEDIN</a>
              <a href="https://github.com/Vansh956957" target="_blank" className="hover:text-blue-500 transition-colors">GITHUB</a>
              <a href="mailto:vanshrewaskar18@gmail.com" className="hover:text-blue-500 transition-colors">EMAIL</a>
            </div>
          </div>

          <div className="relative group w-full max-sm:max-w-sm">
            <div className="p-14 rounded-3xl dark:bg-slate-900 bg-white border dark:border-white/10 border-slate-200 text-center shadow-soft">
              <h3 className="text-3xl font-bold dark:text-white text-slate-900 mb-4 uppercase tracking-tight">Curriculum</h3>
              <p className="dark:text-slate-500 text-slate-500 text-base mb-12 font-light">Strategic documentation of technical milestones and architectural achievements.</p>
              <a 
                href="https://flowcv.com/resume/2uiww5skit" 
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-6 bg-blue-600 text-white rounded-2xl font-bold uppercase text-xs tracking-[0.2em] transition-all shadow-lg active:scale-95 shadow-blue-500/10"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto mt-48 pt-20 border-t dark:border-white/5 border-slate-100 flex flex-col md:flex-row justify-between items-center gap-10 opacity-30">
          <p className="text-[10px] dark:text-slate-500 text-slate-400 font-mono tracking-[0.4em] uppercase">VANSH REWASKAR • 2025</p>
          <p className="text-[10px] dark:text-slate-500 text-slate-400 font-mono tracking-[0.4em] uppercase">NAGPUR • INDIA</p>
        </div>
      </footer>
    </div>
  );
};

export default App;