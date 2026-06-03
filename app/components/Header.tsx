'use client';

import Link from 'next/link';
import {useEffect, useState} from 'react';
import {useLanguage} from '../context/LanguageContext';

const CV_URL = 'https://www.overleaf.com/read/nzxczqqpswhr#7afb2f';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = cvOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [cvOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'pt-6 pb-4' : 'pt-16 pb-4'} bg-white/80 backdrop-blur-md shadow-sm ${isScrolled ? 'dark:bg-[#050505]/80 dark:shadow-none' : 'dark:bg-transparent dark:backdrop-blur-none dark:shadow-none'}`}>
        <div className="wrap flex flex-col gap-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group relative pb-1 mt-1 text-2xl font-medium tracking-tight">
              <span className="transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FBDD09] group-hover:via-[#E4007C] group-hover:to-[#D30026] block text-black dark:text-white">
                {isScrolled ? "Halil İbrahim" : "it's me"}
              </span>
              {/* Animated Bottom Border */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-black dark:bg-white transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FBDD09] via-[#E4007C] to-[#D30026] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Link>

            {/* Navigation + CV Button */}
            <div className="hidden md:flex items-center gap-8">
              <nav className="flex items-start gap-12">
                <Link href="#projects" className="group flex flex-col items-start relative w-[170px]">
                  {/* Top Border & Title row */}
                  <div className="w-full relative pt-4 mb-2 flex items-center justify-between">
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-black dark:bg-white">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#FBDD09] via-[#E4007C] to-[#D30026] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <span className="font-bold text-[16px] text-black dark:text-white transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FBDD09] group-hover:via-[#E4007C] group-hover:to-[#D30026]">{t('header.myProjects')}</span>
                    <span className="text-[12px] text-black dark:text-white transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#E4007C]">↗</span>
                  </div>
                  {/* Subtitle */}
                  <span className="text-[12px] text-gray-500 leading-tight" dangerouslySetInnerHTML={{__html: t('header.myProjectsDesc')}}>
                  </span>
                </Link>

                <Link href="#about" className="group flex flex-col items-start relative w-[160px]">
                  <div className="w-full relative pt-4 mb-2 flex items-center justify-between">
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-black dark:bg-white">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#FBDD09] via-[#E4007C] to-[#D30026] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <span className="font-bold text-[16px] text-black dark:text-white transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FBDD09] group-hover:via-[#E4007C] group-hover:to-[#D30026]">{t('header.aboutMe')}</span>
                    <span className="text-[12px] text-black dark:text-white transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#E4007C]">↗</span>
                  </div>
                  <span className="text-[12px] text-gray-500 leading-tight" dangerouslySetInnerHTML={{__html: t('header.aboutMeDesc')}}>
                  </span>
                </Link>

                <Link href="#contact" className="group flex flex-col items-start relative w-[180px]">
                  <div className="w-full relative pt-4 mb-2 flex items-center justify-between">
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-black dark:bg-white">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#FBDD09] via-[#E4007C] to-[#D30026] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <span className="font-bold text-[16px] text-black dark:text-white transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FBDD09] group-hover:via-[#E4007C] group-hover:to-[#D30026]">{t('header.contactMe')}</span>
                    <span className="text-[12px] text-black dark:text-white transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#E4007C]">↗</span>
                  </div>
                  <span className="text-[12px] text-gray-500 leading-tight" dangerouslySetInnerHTML={{__html: t('header.contactMeDesc')}}>
                  </span>
                </Link>
              </nav>

              {/* ── CV Button ── */}
              <button
                id="cv-button"
                onClick={() => setCvOpen(true)}
                className="cv-btn"
                aria-label="View CV"
              >
                <span className="cv-btn-label">it's my CV</span>
              </button>
            </div>
          </div>

          {/* Second Row: Social Links */}
          <div className="hidden md:flex justify-center items-center gap-6 pb-2">
            <a href="https://instagram.com/hidirektor" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-gray-500 hover:text-black dark:hover:text-white transition-colors duration-300 flex items-center gap-1 group">
              Instagram
              <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
            </a>
            <a href="https://www.linkedin.com/in/hidirektor/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-gray-500 hover:text-black dark:hover:text-white transition-colors duration-300 flex items-center gap-1 group">
              LinkedIn
              <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
            </a>
            <a href="https://medium.com/@hidirektor" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-gray-500 hover:text-black dark:hover:text-white transition-colors duration-300 flex items-center gap-1 group">
              Medium
              <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
            </a>
            <a href="https://github.com/hidirektor" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-gray-500 hover:text-black dark:hover:text-white transition-colors duration-300 flex items-center gap-1 group">
              GitHub
              <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
            </a>
          </div>
        </div>
      </header>

      {/* ── CV Modal ── */}
      {cvOpen && (
        <div className="cv-modal-overlay" onClick={() => setCvOpen(false)} role="dialog" aria-modal="true" aria-label="CV Preview">
          <div className="cv-modal" onClick={e => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="cv-modal-header">
              <div className="cv-modal-title">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
                <span style={{textTransform: 'none', fontVariant: 'normal'}}>Curriculum Vitae</span>
              </div>
              <div className="cv-modal-actions">
                <a
                  href={CV_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cv-external-btn"
                  title="Open in Overleaf"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                  Open in Overleaf
                </a>
                <button className="cv-close-btn" onClick={() => setCvOpen(false)} aria-label="Close">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* iframe Preview */}
            <div className="cv-modal-body">
              <iframe
                src={CV_URL}
                title="CV Preview"
                className="cv-iframe"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              />
            </div>
          </div>
        </div>
      )}

    </>
  );
}
