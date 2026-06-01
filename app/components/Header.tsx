'use client';

import Link from 'next/link';
import {useEffect, useState} from 'react';
import {useLanguage} from '../context/LanguageContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Change the text when scrolled past 50px
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger initially just in case it's already scrolled
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'pt-6 pb-4 bg-white/80 dark:bg-[#050505]/80 backdrop-blur-md shadow-sm dark:shadow-none' : 'pt-16 pb-4 absolute'}`}>
      <div className="wrap flex flex-col gap-4">
        <div className="flex items-start justify-between">
          {/* Logo */}
          <Link href="/" className="group relative pb-1 text-2xl font-medium tracking-tight">
            <span className="transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FBDD09] group-hover:via-[#E4007C] group-hover:to-[#D30026] block text-black dark:text-white">
              {isScrolled ? "Halil İbrahim" : "it's me"}
            </span>
            {/* Animated Bottom Border */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-black dark:bg-white transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FBDD09] via-[#E4007C] to-[#D30026] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-start gap-12">
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
  );
}
