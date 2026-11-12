import React from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

export default function Navbar({
  darkMode,
  setDarkMode,
  scrollToSection,
  mobileMenuOpen,
  setMobileMenuOpen
}) {
  const navItems = [
    { id: 'tentang', label: 'Tentang' },
    { id: 'proyek', label: 'Proyek' },
    { id: 'pengalaman', label: 'Pengalaman' },
    { id: 'keahlian', label: 'Keahlian' },
    { id: 'sertifikasi', label: 'Sertifikasi' }
  ];

  const mobileNavItems = [
    { id: 'tentang', label: 'Tentang' },
    { id: 'proyek', label: 'Proyek Unggulan' },
    { id: 'pengalaman', label: 'Pengalaman & Pendidikan' },
    { id: 'keahlian', label: 'Keahlian Teknis' },
    { id: 'sertifikasi', label: 'Pencapaian & Sertifikasi' },
    { id: 'kontak', label: 'Kontak' }
  ];

  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors ${
        darkMode
          ? 'bg-slate-950/80 border-slate-800/80'
          : 'bg-white/85 border-slate-200/80'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('tentang')}
          className="flex items-center gap-2 font-bold text-lg tracking-tight group cursor-pointer"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-mono text-sm shadow-md shadow-indigo-500/20">
            {PROFILE_DATA.initials}
          </span>
          <span>
            {PROFILE_DATA.brand}
            <span className="text-indigo-500">{PROFILE_DATA.brandSuffix}</span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`transition-colors hover:text-indigo-500 cursor-pointer ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Actions: Theme Toggle & Contact CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Dark Mode"
            className={`p-2 rounded-lg border transition-colors cursor-pointer ${
              darkMode
                ? 'border-slate-800 bg-slate-900 text-amber-400 hover:bg-slate-800'
                : 'border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => scrollToSection('kontak')}
            className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-all shadow-sm shadow-indigo-600/25 cursor-pointer"
          >
            Hubungi Saya
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Dark Mode"
            className={`p-2 rounded-lg border cursor-pointer ${
              darkMode
                ? 'border-slate-800 bg-slate-900 text-amber-400'
                : 'border-slate-200 bg-slate-100 text-slate-700'
            }`}
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            className={`p-2 rounded-lg border cursor-pointer ${
              darkMode ? 'border-slate-800 text-slate-200' : 'border-slate-200 text-slate-700'
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden border-b px-4 py-4 space-y-2 ${
            darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
          }`}
        >
          {mobileNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left px-3 py-2 rounded-lg text-sm font-medium hover:bg-indigo-500/10 hover:text-indigo-500 cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

