import React from 'react';
import { Mail, MapPin, Copy, Check, ExternalLink } from 'lucide-react';
import { Github, Linkedin } from './icons/SocialIcons';
import { PROFILE_DATA } from '../data/portfolioData';

export default function Footer({ darkMode, copiedText, onCopy }) {
  return (
    <footer
      id="kontak"
      className={`py-16 border-t ${
        darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 text-white shadow-2xl shadow-indigo-950/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
                Mari Berkolaborasi &amp; Bangun Solusi Digital
              </h2>
              <p className="text-indigo-100 text-sm sm:text-base leading-relaxed mb-6">
                Terbuka untuk peluang <strong>Web Developer</strong> maupun proyek pengembangan aplikasi web secara <em>remote</em> atau berbasis di Semarang. Siap berkontribusi penuh dengan komunikasi responsif.
              </p>
              <div className="flex items-center gap-2 text-xs text-indigo-200">
                <MapPin className="w-4 h-4" />
                <span>{PROFILE_DATA.location}</span>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-3">
              {/* Active & Copyable Email Card */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15">
                <a
                  href={`mailto:${PROFILE_DATA.email}`}
                  className="flex items-center gap-3 min-w-0 group/mail"
                  title="Klik untuk membuka aplikasi email"
                >
                  <Mail className="w-5 h-5 text-indigo-200 shrink-0 group-hover/mail:text-white transition-colors" />
                  <div className="truncate">
                    <div className="text-[11px] text-indigo-200 flex items-center gap-1">
                      Email
                      <ExternalLink className="w-3 h-3 opacity-60 inline" />
                    </div>
                    <div className="text-sm font-semibold truncate group-hover/mail:underline">
                      {PROFILE_DATA.email}
                    </div>
                  </div>
                </a>
                <button
                  onClick={() => onCopy(PROFILE_DATA.email, 'Alamat Email')}
                  className="px-3 py-1.5 rounded-lg bg-white text-indigo-700 hover:bg-indigo-50 text-xs font-bold flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer ml-2"
                >
                  {copiedText === 'Alamat Email' ? (
                    <>
                      <Check className="w-3.5 h-3.5" /> Tersalin
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> Salin
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>© 2026 {PROFILE_DATA.name}. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <a
              href={PROFILE_DATA.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 transition-colors flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5" /> github.com/nabilaakh
            </a>
            <a
              href={PROFILE_DATA.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 transition-colors flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5" /> linkedin.com/in/nabilakdp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
