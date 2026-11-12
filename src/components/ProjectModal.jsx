import React, { useState, useEffect } from 'react';
import { X, ChevronRight, ChevronLeft, ExternalLink } from 'lucide-react';
import { Github } from './icons/SocialIcons';
import { ProjectMockup } from './ProjectCard';

export default function ProjectModal({ project, darkMode, onClose }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Reset slide index saat project berubah
  useEffect(() => {
    setActiveImageIndex(0);
  }, [project?.id]);

  if (!project) return null;

  const galleryImages =
    project.images && project.images.length > 0
      ? project.images
      : project.image
      ? [project.image]
      : [];

  const hasMultipleImages = galleryImages.length > 1;

  const hasLiveUrl =
    project.liveUrl && project.liveUrl.trim() !== '' && project.liveUrl !== '#';
  const formattedLiveUrl = hasLiveUrl
    ? project.liveUrl.startsWith('http://') || project.liveUrl.startsWith('https://')
      ? project.liveUrl
      : `https://${project.liveUrl}`
    : null;

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border shadow-2xl ${
          darkMode
            ? 'bg-slate-900 border-slate-800 text-slate-100'
            : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Header Modal: Carousel / Single Image / UI Mockup */}
        <div className="relative">
          {galleryImages.length === 0 ? (
            <ProjectMockup project={project} darkMode={darkMode} />
          ) : hasMultipleImages ? (
            <div>
              {/* Main Image Slider Viewport */}
              <div className="relative aspect-video w-full flex items-center justify-center overflow-hidden select-none">
                <img
                  src={galleryImages[activeImageIndex]}
                  alt={`${project.title} screenshot ${activeImageIndex + 1}`}
                  className={`w-full h-full object-contain transition-opacity duration-300 ${
                    darkMode ? 'bg-slate-900/50' : 'bg-slate-100'
                  }`}
                />

                {/* Counter Badge */}
                <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-slate-950/75 backdrop-blur-sm text-[11px] font-mono text-white border border-white/15">
                  {activeImageIndex + 1} / {galleryImages.length}
                </div>

                {/* Prev Button */}
                <button
                  onClick={handlePrev}
                  aria-label="Foto Sebelumnya"
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white border border-white/20 transition-all backdrop-blur-sm hover:scale-105 cursor-pointer shadow-lg"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  aria-label="Foto Selanjutnya"
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white border border-white/20 transition-all backdrop-blur-sm hover:scale-105 cursor-pointer shadow-lg"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Dot Indicators */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/65 backdrop-blur-sm border border-white/10">
                  {galleryImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImageIndex(i);
                      }}
                      aria-label={`Lihat gambar ke-${i + 1}`}
                      className={`transition-all rounded-full cursor-pointer ${
                        activeImageIndex === i
                          ? 'w-5 h-1.5 bg-indigo-500'
                          : 'w-1.5 h-1.5 bg-white/50 hover:bg-white'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Thumbnail Strip */}
              <div
                className={`flex items-center gap-2 px-4 py-2.5 overflow-x-auto border-b ${
                  darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-100/90 border-slate-200'
                }`}
              >
                {galleryImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIndex(i)}
                    className={`relative h-12 w-20 shrink-0 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                      activeImageIndex === i
                        ? 'border-indigo-500 ring-2 ring-indigo-500/30'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Single Image View */
            <div className="relative aspect-video w-full overflow-hidden flex items-center justify-center">
              <img
                src={galleryImages[0]}
                alt={project.title}
                className={`w-full h-full object-contain ${
                  darkMode ? 'bg-slate-900/50' : 'bg-slate-100'
                }`}
              />
            </div>
          )}

          {/* Close Modal Button */}
          <button
            onClick={onClose}
            aria-label="Tutup Modal"
            className="absolute top-3 right-3 z-20 p-2 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white border border-white/15 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Isi Detail Proyek */}
        <div className="p-6 sm:p-7 space-y-5">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-indigo-500/15 text-indigo-400 border border-indigo-500/30">
                {project.badge}
              </span>
              <span className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                • {project.period}
              </span>
            </div>
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <p className="text-sm font-medium text-indigo-500 mt-0.5">
              {project.organization}
            </p>
          </div>

          <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            {project.description}
          </p>

          {/* Dampak / Solusi */}
          <div
            className={`p-4 rounded-xl border ${
              darkMode
                ? 'bg-slate-950/70 border-slate-800'
                : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div className="text-xs font-bold uppercase tracking-wider text-indigo-500 mb-1">
              Masalah &amp; Dampak Solusi
            </div>
            <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              {project.problemSolved}
            </p>
          </div>

          {/* Fitur Utama */}
          <div>
            <h4 className="text-sm font-bold mb-2.5">Fitur Utama yang Dikembangkan:</h4>
            <ul className="space-y-2">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm">
                  <ChevronRight className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                  <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Teknologi &amp; Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className={`px-3 py-1 rounded-lg text-xs font-mono border ${
                    darkMode
                      ? 'bg-slate-950 border-slate-800 text-indigo-300'
                      : 'bg-indigo-50 border-indigo-100 text-indigo-700'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-slate-800/40 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2.5">
              {formattedLiveUrl && (
                <a
                  href={formattedLiveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-all shadow-md shadow-indigo-600/25 cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4" />
                  Kunjungi Website
                </a>
              )}

              {project.githubUrl && project.githubUrl !== '#' && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border transition-colors cursor-pointer ${
                    formattedLiveUrl
                      ? darkMode
                        ? 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-200'
                        : 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-800'
                      : 'bg-indigo-600 hover:bg-indigo-500 text-white border-transparent'
                  }`}
                >
                  <Github className="w-4 h-4" />
                  Lihat Repositori GitHub
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold border transition-colors cursor-pointer ${
                darkMode
                  ? 'border-slate-700 hover:bg-slate-800 text-slate-300'
                  : 'border-slate-300 hover:bg-slate-100 text-slate-700'
              }`}
            >
              Tutup Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
