'use client';

import {useLanguage} from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative w-full pt-32 md:pt-48 pb-16 md:pb-24 flex flex-col items-center justify-center text-white bg-transparent">
      
      {/* Giant Text Layered Effect */}
      <div className="relative w-full flex justify-center items-center leading-none select-none pointer-events-auto cursor-default">
        <div className="relative w-full flex justify-center items-center">
          
          {/* Background Text (Relative to give height to the footer) */}
          <div className="relative text-[20vw] md:text-[18vw] font-bold tracking-tighter text-white/5 leading-[0.75] z-0 flex whitespace-nowrap justify-center">
            {t('footer.backgroundText').split('').map((char, i) => (
              <span key={i} className="transition-colors duration-300 hover:text-white/20">
                {char}
              </span>
            ))}
          </div>
          
          {/* Foreground Text (Absolute, perfectly centered on top of the background text) */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[8vw] md:text-[6vw] font-bold tracking-tighter bg-gradient-to-r from-[#FBDD09] via-[#E4007C] to-[#D30026] text-transparent bg-clip-text leading-[0.75] z-10 flex whitespace-nowrap">
            {t('footer.foregroundText').split('').map((char, i) => (
              <span key={i} className="transition-transform duration-300 hover:scale-110 hover:-translate-y-2 inline-block">
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}
