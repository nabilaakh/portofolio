import React, { useState, useEffect } from 'react';
import { Layers, CheckCircle2 } from 'lucide-react';
import { PROJECTS_DATA } from './data/portfolioData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [activeProject, setActiveProject] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedText, setCopiedText] = useState('');

  const categories = ['Semua', 'Full-Stack Web', 'Sistem Enterprise', 'UI/UX & Dashboard'];

  const filteredProjects =
    selectedCategory === 'Semua'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  // Tutup modal dengan tombol Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(''), 2500);
  };

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans selection:bg-indigo-500 selection:text-white ${
        darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Toast Notification saat Salin Teks */}
      {copiedText && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-indigo-600 text-white text-sm font-medium shadow-xl shadow-indigo-600/30 animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-emerald-300" />
          <span>{copiedText} berhasil disalin ke clipboard!</span>
        </div>
      )}

      {/* 1. Sticky Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        scrollToSection={scrollToSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* 2. Hero Section */}
      <Hero darkMode={darkMode} scrollToSection={scrollToSection} />

      {/* 3. Featured Projects Section */}
      <section
        id="proyek"
        className={`py-20 border-t ${
          darkMode ? 'bg-slate-900/40 border-slate-800/80' : 'bg-slate-100/70 border-slate-200/80'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-500 mb-2">
                <Layers className="w-4 h-4" />
                Portofolio Teknis
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Proyek Unggulan &amp; Studi Kasus
              </h2>
              <p className={`mt-2 text-sm sm:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Klik kartu proyek untuk melihat rincian fitur, permasalahan yang diselesaikan, dan arsitektur teknis.
              </p>
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25'
                      : darkMode
                      ? 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                darkMode={darkMode}
                onSelectProject={setActiveProject}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Experience & Education Section */}
      <ExperienceSection darkMode={darkMode} />

      {/* 5. Technical Skills & Certifications Section */}
      <SkillsSection darkMode={darkMode} />

      {/* 6. Contact & Footer */}
      <Footer
        darkMode={darkMode}
        copiedText={copiedText}
        onCopy={handleCopy}
      />

      {/* 7. Modal Detail Proyek Interaktif */}
      <ProjectModal
        project={activeProject}
        darkMode={darkMode}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
}
