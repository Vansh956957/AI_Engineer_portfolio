import React from 'react';

const TelemetryBar: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        <div className="relative w-full rounded-[2rem] border dark:border-blue-500/20 border-slate-200 py-10 px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-center bg-white/40 dark:bg-blue-500/5 backdrop-blur-2xl shadow-2xl">
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)] animate-pulse"></span>
              <p className="text-[10px] font-mono font-bold dark:text-blue-400 text-blue-600 uppercase tracking-widest">Active Node</p>
            </div>
            <p className="text-xl font-extrabold dark:text-white text-slate-900 tracking-tight uppercase leading-none">Product Analyst @ HotelKey</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              <p className="text-[10px] font-mono font-bold dark:text-indigo-400 text-indigo-600 uppercase tracking-widest">Specialization</p>
            </div>
            <p className="text-xl font-extrabold dark:text-white text-slate-900 tracking-tight uppercase leading-none">GenAI & RAG Systems</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              <p className="text-[10px] font-mono font-bold dark:text-purple-400 text-purple-600 uppercase tracking-widest">Environment</p>
            </div>
            <p className="text-xl font-extrabold dark:text-white text-slate-900 tracking-tight uppercase leading-none">AWS • Python • LangChain</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
              <p className="text-[10px] font-mono font-bold dark:text-emerald-400 text-emerald-600 uppercase tracking-widest">Location</p>
            </div>
            <p className="text-xl font-extrabold dark:text-white text-slate-900 tracking-tight uppercase leading-none">Nagpur, India</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TelemetryBar;