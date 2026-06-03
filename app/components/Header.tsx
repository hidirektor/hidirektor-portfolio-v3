'use client';

import Link from 'next/link';
import {useEffect, useState} from 'react';
import {useLanguage} from '../context/LanguageContext';

const CV_URL = 'https://www.overleaf.com/read/nzxczqqpswhr#7afb2f';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);
  const [photoOpen, setPhotoOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when any modal is open
  useEffect(() => {
    document.body.style.overflow = (cvOpen || photoOpen) ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [cvOpen, photoOpen]);

  // Close photo lightbox on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setPhotoOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

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
              <button className="cv-close-btn" onClick={() => setCvOpen(false)} aria-label="Close">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            {/* CV Scrollable Body */}
            <div className="cv-modal-body cv-scroll-body">
              {/* ── Hero section ── */}
              <div className="cv-preview-body">
                {/* Glow blobs */}
                <div className="cv-blob cv-blob--pink" />
                <div className="cv-blob cv-blob--yellow" />

                {/* Avatar — click/hover to open full photo */}
                <div
                  className="cv-avatar-ring cv-avatar-ring--clickable"
                  onClick={() => setPhotoOpen(true)}
                  title="View photo"
                >
                  <img
                    src="/assets/images/profile.jpeg"
                    alt="Halil İbrahim Direktör"
                    className="cv-avatar"
                  />
                  <div className="cv-avatar-hover-hint">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"/>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                      <line x1="11" y1="8" x2="11" y2="14"/>
                      <line x1="8" y1="11" x2="14" y2="11"/>
                    </svg>
                  </div>
                </div>

                {/* Name & Title */}
                <h2 className="cv-name">Halil İbrahim Direktör</h2>
                <p className="cv-role">Software Architect</p>

                {/* Fancy quote */}
                <p className="cv-quote">It's memory, stupid.</p>

                {/* Divider */}
                <div className="cv-divider" />

                {/* CTA */}
                <a href={CV_URL} target="_blank" rel="noopener noreferrer" className="cv-open-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                  View Full CV on Overleaf
                </a>
                <p className="cv-hint">Opens in a new tab</p>

                {/* Scroll indicator */}
                <div className="cv-scroll-indicator">
                  <span className="cv-scroll-label">Scroll to view CV</span>
                  <div className="cv-mouse">
                    <div className="cv-mouse-wheel" />
                  </div>
                </div>
              </div>

              {/* ── CV Content Sections ── */}
              <div className="cv-sections">

                {/* Experience */}
                <div className="cv-section">
                  <div className="cv-section-label">Experience</div>
                  <div className="cv-entries">
                    <div className="cv-entry">
                      <div className="cv-entry-header">
                        <span className="cv-entry-title">Software Architect</span>
                        <span className="cv-entry-date">2023 — Present</span>
                      </div>
                      <span className="cv-entry-sub">Freelance / Independent</span>
                      <p className="cv-entry-desc">Designing and building scalable full-stack systems, IoT integrations, and cloud-native architectures for clients across multiple industries.</p>
                    </div>
                    <div className="cv-entry">
                      <div className="cv-entry-header">
                        <span className="cv-entry-title">Embedded Systems Engineer</span>
                        <span className="cv-entry-date">2022 — 2023</span>
                      </div>
                      <span className="cv-entry-sub">TÜBİTAK 2209-B Project</span>
                      <p className="cv-entry-desc">Developed a modular IIoT platform using STM32, FreeRTOS, Modbus protocol, and Node.js backend. Award-winning project for industrial IoT data collection.</p>
                    </div>
                    <div className="cv-entry">
                      <div className="cv-entry-header">
                        <span className="cv-entry-title">Full-Stack Developer</span>
                        <span className="cv-entry-date">2021 — 2022</span>
                      </div>
                      <span className="cv-entry-sub">Personal Projects</span>
                      <p className="cv-entry-desc">Built cross-platform delivery management systems with Spring Boot, native Android (Java) and iOS (Swift) applications.</p>
                    </div>
                  </div>
                </div>

                <div className="cv-section-divider" />

                {/* Education */}
                <div className="cv-section">
                  <div className="cv-section-label">Education</div>
                  <div className="cv-entries">
                    <div className="cv-entry">
                      <div className="cv-entry-header">
                        <span className="cv-entry-title">Computer Engineering</span>
                        <span className="cv-entry-date">2020 — Present</span>
                      </div>
                      <span className="cv-entry-sub">Undergraduate</span>
                      <p className="cv-entry-desc">Focused on software architecture, embedded systems, distributed systems, and machine learning.</p>
                    </div>
                  </div>
                </div>

                <div className="cv-section-divider" />

                {/* Skills */}
                <div className="cv-section">
                  <div className="cv-section-label">Tech Stack</div>
                  <div className="cv-skills-grid">
                    {[
                      { cat: 'Backend',   items: ['Spring Boot', 'Node.js', 'PostgreSQL', 'Redis'] },
                      { cat: 'Frontend',  items: ['Next.js', 'React', 'TypeScript', 'Tailwind'] },
                      { cat: 'Embedded',  items: ['STM32', 'FreeRTOS', 'Modbus', 'MQTT'] },
                      { cat: 'DevOps',    items: ['Kubernetes', 'Docker', 'CI/CD', 'AWS'] },
                      { cat: 'ML / AI',   items: ['PyTorch', 'Python', 'NumPy', 'Pandas'] },
                    ].map(({ cat, items }) => (
                      <div key={cat} className="cv-skill-group">
                        <span className="cv-skill-cat">{cat}</span>
                        <div className="cv-skill-items">
                          {items.map(i => <span key={i} className="cv-skill-chip">{i}</span>)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>


          </div>
        </div>
      )}

      {/* ── Photo Lightbox ── */}
      {photoOpen && (
        <div
          className="photo-lightbox-overlay"
          onClick={() => setPhotoOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Profile photo"
        >
          <img
            src="/assets/images/profile.jpeg"
            alt="Halil İbrahim Direktör"
            className="photo-lightbox-img"
            onClick={e => e.stopPropagation()}
          />
          <button
            className="photo-lightbox-close"
            onClick={() => setPhotoOpen(false)}
            aria-label="Close"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
          <p className="photo-lightbox-hint">Tap anywhere or press Esc to close</p>
        </div>
      )}

    </>
  );
}
