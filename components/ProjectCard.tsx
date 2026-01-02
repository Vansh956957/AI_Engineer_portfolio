
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative dark:bg-[#0f172a]/20 bg-white shadow-soft hover:shadow-hard p-10 rounded-3xl border dark:border-white/[0.04] border-slate-200/60 transition-all duration-500 flex flex-col h-full overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-20 font-mono text-[10px] tracking-widest text-blue-500 uppercase">
        {project.period}
      </div>

      <div className="flex-grow space-y-8">
        <div className="space-y-4">
          <div className="w-8 h-[2px] bg-blue-500/20 rounded-full"></div>
          <h3 className="text-2xl font-bold dark:text-slate-100 text-slate-900 tracking-tight group-hover:text-blue-500 transition-colors uppercase">
            {project.name}
          </h3>
          <p className="dark:text-slate-400 text-slate-500 leading-relaxed text-sm font-normal">
            {project.description}
          </p>
        </div>

        <div className="space-y-4 pt-4">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] dark:text-slate-600 text-slate-400 flex items-center gap-2">
            Strategic Value
          </div>
          <div className="grid gap-2">
            {project.metrics.map((metric, i) => (
              <div key={metric} className="flex items-center gap-3 text-xs dark:text-slate-300 text-slate-600 dark:bg-white/[0.02] bg-slate-50/50 border dark:border-white/[0.04] border-slate-100 px-4 py-2.5 rounded-xl transition-colors group-hover:dark:border-white/10 group-hover:border-slate-200">
                <span className="text-blue-500/60 font-mono text-[9px] w-4">{i+1}</span>
                {metric}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 pt-8 border-t dark:border-white/[0.04] border-slate-100">
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t) => (
            <span key={t} className="px-3 py-1 dark:bg-white/[0.03] bg-slate-100/50 dark:border-white/5 border-slate-200/40 rounded-lg text-[9px] font-mono dark:text-slate-500 text-slate-500 tracking-tighter uppercase">
              {t}
            </span>
          ))}
        </div>
        
        <div className="flex flex-col gap-3">
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all shadow-lg active:scale-[0.98] border border-blue-500/20"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
              Launch Application
            </a>
          )}
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 py-4 dark:bg-slate-800 bg-slate-900 text-white border-white/5 hover:bg-slate-800 dark:hover:bg-slate-700 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all active:scale-[0.98] border shadow-lg"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              Github
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
