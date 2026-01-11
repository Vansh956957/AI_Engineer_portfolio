import React from 'react';
import { Project } from '../types.ts';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative flex flex-col h-full dark:bg-[#0f172a]/40 bg-white p-10 lg:p-12 rounded-[2.5rem] border dark:border-white/[0.06] border-slate-200 transition-all duration-500 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10">
      
      <div className="flex justify-between items-start mb-12">
        <div className="space-y-1">
          <p className="text-[10px] font-mono font-bold text-blue-500 uppercase tracking-[0.4em]">Project ID</p>
          <p className="text-[11px] font-mono dark:text-slate-500 text-slate-400 uppercase tracking-widest">{project.period}</p>
        </div>
        <div className="w-12 h-12 rounded-2xl bg-blue-500/5 border border-blue-500/10 flex items-center justify-center">
          <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
        </div>
      </div>

      <div className="flex-grow space-y-8">
        <h3 className="text-3xl lg:text-4xl font-extrabold dark:text-white text-slate-900 tracking-tighter leading-none uppercase group-hover:text-blue-500 transition-colors">
          {project.name}
        </h3>
        
        <p className="dark:text-slate-400 text-slate-600 leading-relaxed text-base font-light italic">
          "{project.description}"
        </p>

        <div className="space-y-6">
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] dark:text-slate-500 text-slate-400 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-blue-500/40"></span>
            Key Benchmarks
          </div>
          <div className="space-y-3">
            {project.metrics.map((metric, i) => (
              <div key={metric} className="flex items-center gap-4 text-xs dark:text-slate-300 text-slate-700 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500/60"></span>
                {metric}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 space-y-8">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="px-3 py-1.5 dark:bg-white/[0.05] bg-slate-100 rounded-lg text-[9px] font-mono dark:text-slate-400 text-slate-500 uppercase tracking-widest border dark:border-white/5 border-slate-200">
              {t}
            </span>
          ))}
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" className="flex items-center justify-center gap-3 py-4 bg-blue-600 text-white rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:brightness-110 active:scale-95 shadow-lg shadow-blue-500/20">
              Deployment
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" className="flex items-center justify-center gap-3 py-4 dark:bg-slate-800 bg-slate-900 text-white rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:brightness-110 active:scale-95">
              Codebase
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;