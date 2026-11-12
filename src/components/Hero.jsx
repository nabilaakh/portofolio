import React from 'react';
import {
  ExternalLink,
  Code2,
  FileText
} from 'lucide-react';
import { Github, Linkedin } from './icons/SocialIcons';
import { PROFILE_DATA } from '../data/portfolioData';

export default function Hero({ darkMode, scrollToSection }) {
  return (
    <section id="tentang" className="relative pt-14 pb-20 sm:pt-20 sm:pb-24 overflow-hidden">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-indigo-500/15 blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Availability Status Badge */}
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium border mb-6 ${
              darkMode
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                : 'bg-emerald-50 border-emerald-200 text-emerald-700'
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            {PROFILE_DATA.availability}
          </div>

          {/* Name & Title */}
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-3">
            {PROFILE_DATA.name}
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-indigo-500 mb-6">
            {PROFILE_DATA.role}
          </h2>

          {/* Summary */}
          <p
            className={`text-base sm:text-lg leading-relaxed mb-8 ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            {PROFILE_DATA.summary}
          </p>

          {/* Primary & Social CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 mb-10">
            <button
              onClick={() => scrollToSection('proyek')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-600/25 cursor-pointer"
            >
              <Code2 className="w-4 h-4" />
              Lihat Proyek Unggulan
            </button>

            <a
              href={PROFILE_DATA.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-medium transition-colors ${
                darkMode
                  ? 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-200'
                  : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700 shadow-sm'
              }`}
            >
              <FileText className="w-4 h-4 text-indigo-400" />
              Unduh CV
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>

            <a
              href={PROFILE_DATA.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-medium transition-colors ${
                darkMode
                  ? 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-200'
                  : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700 shadow-sm'
              }`}
            >
              <Github className="w-4 h-4" />
              GitHub
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>

            <a
              href={PROFILE_DATA.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-medium transition-colors ${
                darkMode
                  ? 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-200'
                  : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700 shadow-sm'
              }`}
            >
              <Linkedin className="w-4 h-4 text-sky-500" />
              LinkedIn
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>

          {/* Key Highlight Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            {PROFILE_DATA.highlights.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className={`p-3.5 rounded-xl border flex items-start gap-3 ${
                    darkMode ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                  }`}
                >
                  <IconComp className={`w-5 h-5 shrink-0 mt-0.5 ${item.iconColor}`} />
                  <div>
                    <div className="text-xs font-bold">{item.title}</div>
                    <div className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {item.subtitle}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
