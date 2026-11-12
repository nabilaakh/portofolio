import React, { useState } from 'react';

export const ProjectMockup = ({ project }) => {
  const themeStyles = {
    indigo: {
      bg: 'from-indigo-600 via-blue-600 to-violet-700',
      accent: 'bg-indigo-400',
      pill: 'bg-indigo-500/30 text-indigo-100 border-indigo-300/30'
    },
    emerald: {
      bg: 'from-emerald-600 via-teal-600 to-cyan-700',
      accent: 'bg-emerald-400',
      pill: 'bg-emerald-500/30 text-emerald-100 border-emerald-300/30'
    },
    violet: {
      bg: 'from-purple-600 via-fuchsia-600 to-indigo-700',
      accent: 'bg-purple-400',
      pill: 'bg-purple-500/30 text-purple-100 border-purple-300/30'
    },
    amber: {
      bg: 'from-amber-500 via-orange-600 to-red-600',
      accent: 'bg-amber-300',
      pill: 'bg-amber-500/30 text-amber-100 border-amber-300/30'
    },
    rose: {
      bg: 'from-rose-500 via-pink-600 to-purple-700',
      accent: 'bg-rose-300',
      pill: 'bg-rose-500/30 text-rose-100 border-rose-300/30'
    },
    cyan: {
      bg: 'from-sky-500 via-cyan-600 to-blue-700',
      accent: 'bg-sky-300',
      pill: 'bg-sky-500/30 text-sky-100 border-sky-300/30'
    }
  };

  const style = themeStyles[project.mockupTheme] || themeStyles.indigo;

  return (
    <div className={`relative h-48 w-full bg-gradient-to-br ${style.bg} p-4 overflow-hidden select-none`}>
      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '14px 14px'
        }}
      />

      {/* Simulated Browser Window */}
      <div className="relative z-10 h-full w-full rounded-lg bg-slate-950/85 backdrop-blur-md border border-white/15 shadow-2xl flex flex-col overflow-hidden transition-transform duration-300 group-hover:scale-[1.03]">
        {/* Browser Top Bar */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 bg-white/5">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400/90" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/90" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/90" />
          </div>
          <div className="px-2.5 py-0.5 rounded text-[10px] font-mono text-slate-300 bg-white/10 truncate max-w-[170px]">
            {project.id}.app
          </div>
          <div className="w-4" />
        </div>

        {/* Simulated App Interface Content */}
        <div className="p-3 flex-1 flex flex-col justify-between gap-2">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="h-2 w-24 rounded bg-white/80" />
              <div className="h-1.5 w-16 rounded bg-white/40" />
            </div>
            <span className={`px-2 py-0.5 rounded-full text-[9px] font-medium border ${style.pill}`}>
              {project.category}
            </span>
          </div>

          {/* Mini Dashboard Cards / Chart Bars */}
          <div className="grid grid-cols-3 gap-2 my-auto">
            <div className="rounded bg-white/10 p-2 border border-white/5">
              <div className="h-1.5 w-8 rounded bg-white/40 mb-1.5" />
              <div className="h-3 w-12 rounded bg-white/90" />
            </div>
            <div className="rounded bg-white/10 p-2 border border-white/5">
              <div className="h-1.5 w-10 rounded bg-white/40 mb-1.5" />
              <div className={`h-3 w-10 rounded ${style.accent}`} />
            </div>
            <div className="rounded bg-white/10 p-2 border border-white/5 flex items-end gap-1 h-11">
              <div className="w-1/4 h-3 bg-white/40 rounded-t" />
              <div className="w-1/4 h-5 bg-white/60 rounded-t" />
              <div className={`w-1/4 h-7 ${style.accent} rounded-t`} />
              <div className="w-1/4 h-4 bg-white/50 rounded-t" />
            </div>
          </div>

          {/* Bottom status line */}
          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-white/10">
            <span className="truncate">{project.techStack.slice(0, 3).join(' • ')}</span>
            <span className="text-white/80 font-medium">Preview →</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProjectVisual = ({ project, darkMode }) => {
  const [imgError, setImgError] = useState(false);
  const primaryImage =
    (project.images && project.images.length > 0 && project.images[0]) || project.image;

  if (primaryImage && !imgError) {
    return (
      <div className="relative h-48 w-full bg-slate-950 overflow-hidden">
        <img
          src={primaryImage}
          alt={project.title}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
        {project.images && project.images.length > 1 && (
          <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-slate-950/75 backdrop-blur-sm text-[10px] font-medium text-white border border-white/15">
            +{project.images.length} Gambar
          </div>
        )}
      </div>
    );
  }

  return <ProjectMockup project={project} darkMode={darkMode} />;
};

export default function ProjectCard({ project, darkMode, onSelectProject }) {
  return (
    <div
      onClick={() => onSelectProject(project)}
      className={`group cursor-pointer rounded-2xl border overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 ${
        darkMode
          ? 'bg-slate-900 border-slate-800 hover:border-indigo-500/60 hover:shadow-xl hover:shadow-indigo-950/40'
          : 'bg-white border-slate-200 hover:border-indigo-400 hover:shadow-xl hover:shadow-slate-200/70'
      }`}
    >
      {/* Visual Preview / Image (images[0]) / Mockup */}
      <ProjectVisual project={project} darkMode={darkMode} />

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <span
            className={`inline-block px-2.5 py-0.5 rounded-md text-[11px] font-semibold ${
              project.featured
                ? darkMode
                  ? 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/30'
                  : 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                : darkMode
                ? 'bg-slate-800 text-slate-300'
                : 'bg-slate-100 text-slate-600'
            }`}
          >
            {project.badge}
          </span>
        </div>

        <h3 className="text-lg font-bold leading-snug group-hover:text-indigo-500 transition-colors mb-1">
          {project.title}
        </h3>
        <p className={`text-xs mb-3 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
          {project.organization}
        </p>

        <p
          className={`text-sm line-clamp-3 mb-4 flex-1 ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/40">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className={`px-2 py-0.5 rounded text-[11px] font-mono ${
                darkMode
                  ? 'bg-slate-800/90 text-slate-300'
                  : 'bg-slate-100 text-slate-700'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
