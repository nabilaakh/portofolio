import React from 'react';
import { Terminal, Award, ExternalLink } from 'lucide-react';
import { SKILLS_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';

export default function SkillsSection({ darkMode }) {
  return (
    <>
      {/* =====================================================================
          TECHNICAL SKILLS SECTION
      ===================================================================== */}
      <section
        id="keahlian"
        className={`py-20 border-t ${
          darkMode ? 'bg-slate-900/40 border-slate-800/80' : 'bg-slate-100/70 border-slate-200/80'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-500 mb-2">
              <Terminal className="w-4 h-4" />
              Tech Stack &amp; Tools
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Keahlian Teknis
            </h2>
            <p className={`mt-2 text-sm sm:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Kombinasi teknologi pengembangan web modern, manajemen basis data relasional, desain antarmuka, dan alur kerja berbantuan AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SKILLS_DATA.map((group) => {
              const IconComponent = group.icon;
              return (
                <div
                  key={group.category}
                  className={`p-6 rounded-2xl border ${
                    darkMode
                      ? 'bg-slate-900 border-slate-800'
                      : 'bg-white border-slate-200 shadow-sm'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/15 text-indigo-500 flex items-center justify-center mb-4">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold mb-4">{group.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${
                          darkMode
                            ? 'bg-slate-950 border-slate-800 text-slate-200'
                            : 'bg-slate-50 border-slate-200 text-slate-700'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          ACHIEVEMENTS & CERTIFICATIONS SECTION
      ===================================================================== */}
      <section id="sertifikasi" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-500 mb-2">
              <Award className="w-4 h-4" />
              Validasi Kompetensi
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Pencapaian &amp; Sertifikasi
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CERTIFICATIONS_DATA.map((cert, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl border flex flex-col justify-between transition-all ${
                  cert.highlight
                    ? darkMode
                      ? 'bg-gradient-to-b from-indigo-950/40 to-slate-900 border-indigo-500/40'
                      : 'bg-gradient-to-b from-indigo-50/80 to-white border-indigo-200 shadow-sm'
                    : darkMode
                    ? 'bg-slate-900/70 border-slate-800'
                    : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-semibold text-indigo-500">{cert.year}</span>
                    {cert.highlight && <Award className="w-4 h-4 text-amber-400 shrink-0" />}
                  </div>
                  <h3 className="font-bold text-sm leading-snug mb-1.5">{cert.title}</h3>
                  <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'} ${cert.credentialUrl ? 'mb-3' : ''}`}>
                    {cert.issuer}
                  </p>
                </div>

                {cert.credentialUrl && (
                  <div className={`pt-2.5 mt-2 border-t ${darkMode ? 'border-slate-800/80' : 'border-slate-200/80'}`}>
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1 text-xs font-medium transition-colors group/link ${
                        darkMode
                          ? 'text-indigo-400 hover:text-indigo-300'
                          : 'text-indigo-600 hover:text-indigo-700'
                      }`}
                    >
                      <span>Lihat Sertifikat</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-80 group-hover/link:opacity-100 transition-opacity" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
