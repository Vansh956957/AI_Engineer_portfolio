
import React from 'react';

const TelemetryBar: React.FC = () => {
  return (
    <div className="w-full border-y dark:border-white/5 border-slate-100 py-4 px-6 flex items-center justify-center gap-8 md:gap-16 text-[10px] font-mono dark:text-slate-500 text-slate-400 overflow-hidden uppercase tracking-[0.2em] whitespace-nowrap bg-transparent">
      <div className="flex items-center gap-3">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500/60 shadow-[0_0_8px_rgba(59,130,246,0.3)]"></span>
        <span>Product Analyst @ HotelKey</span>
      </div>
      <div className="hidden sm:block w-[1px] h-3 bg-slate-500/10"></div>
      <div className="flex items-center gap-3">
        <span>GenAI & RAG Systems</span>
      </div>
      <div className="hidden sm:block w-[1px] h-3 bg-slate-500/10"></div>
      <div className="flex items-center gap-3">
        <span>AWS • Python • LangChain</span>
      </div>
      <div className="hidden lg:block w-[1px] h-3 bg-slate-500/10"></div>
      <div className="hidden lg:flex items-center gap-3">
        <span>Nagpur, IN</span>
      </div>
    </div>
  );
};

export default TelemetryBar;
