import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { EXPERIENCE_DATA, EDUCATION_DATA } from '../data/portfolioData';

export default function ExperienceSection({ darkMode }) {
  return (
    <section id="pengalaman" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Work & Organization Experience */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-500 mb-2">
              <Briefcase className="w-4 h-4" />
              Rekam Jejak
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8">
              Pengalaman Magang &amp; Organisasi
            </h2>

            <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-3.5 before:w-0.5 before:bg-indigo-500/30">
              {EXPERIENCE_DATA.map((exp, idx) => (
                <div key={idx} className="relative pl-10">
                  {/* Timeline Dot */}
                  <span className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-indigo-600 border-4 border-slate-950 ring-2 ring-indigo-500/40" />

                  <div
                    className={`p-5 rounded-2xl border ${
                      darkMode
                        ? 'bg-slate-900/80 border-slate-800'
                        : 'bg-white border-slate-200 shadow-sm'
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h3 className="font-bold text-base">{exp.role}</h3>
                      <span
                        className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                          darkMode
                            ? 'bg-indigo-500/15 text-indigo-300'
                            : 'bg-indigo-50 text-indigo-700'
                        }`}
                      >
                        {exp.period}
                      </span>
                    </div>

                    <div className="text-sm font-medium text-indigo-500 mb-3">
                      {exp.company} • <span className="opacity-80">{exp.location}</span>
                    </div>

                    <ul
                      className={`space-y-1.5 text-sm list-disc pl-4 ${
                        darkMode ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {exp.highlights.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-500 mb-2">
              <GraduationCap className="w-4 h-4" />
              Latar Belakang Akademik
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8">
              Pendidikan
            </h2>

            <div className="space-y-5">
              {EDUCATION_DATA.map((edu, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border ${
                    darkMode
                      ? 'bg-slate-900/80 border-slate-800'
                      : 'bg-white border-slate-200 shadow-sm'
                  }`}
                >
                  <span className="text-xs font-semibold text-indigo-500">{edu.period}</span>
                  <h3 className="text-lg font-bold mt-1">{edu.institution}</h3>
                  <div className={`text-sm font-medium mt-0.5 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                    {edu.degree}
                  </div>
                  <div className="inline-block mt-2 px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                    {edu.gpa}
                  </div>
                  <p className={`text-sm mt-3 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

