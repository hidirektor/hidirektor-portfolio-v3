'use client';

import {useLanguage} from '../context/LanguageContext';

export default function EntertainmentSection() {
  const { t } = useLanguage();

  return (
    <section className="py-32 relative border-t border-black/5 dark:border-white/5">
      
      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#E4007C]/10 to-[#FBDD09]/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="wrap relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5">
          <p className="text-[#FBDD09] text-sm font-bold tracking-widest uppercase mb-4">{t('entertainment.tag')}</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-black dark:text-white font-display leading-[1.1]">
            {t('entertainment.title').split(' ').map((word, i, arr) => 
               i === arr.length - 1 ? <span key={i}><br/>{word}</span> : word + ' '
            )}
          </h2>
          <p className="text-black/50 dark:text-white/50 text-lg mb-10 font-light leading-relaxed">
            {t('entertainment.description')}
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-5 px-8 py-5 rounded-2xl bg-black/[0.04] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 backdrop-blur-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#FBDD09]">
                <circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 4-3 2 3h2"/>
              </svg>
              <span className="text-sm font-bold text-black dark:text-white tracking-wide">{t('entertainment.cycling')}</span>
            </div>
            <div className="flex items-center gap-5 px-8 py-5 rounded-2xl bg-black/[0.04] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 backdrop-blur-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#E4007C]">
                <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>
              </svg>
              <span className="text-sm font-bold text-black dark:text-white tracking-wide">{t('entertainment.music')}</span>
            </div>
          </div>
        </div>

        {/* Premium Spotify container */}
        <div className="lg:col-span-7 relative group">
          {/* Glowing frame */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#E4007C]/50 via-white/10 to-[#FBDD09]/50 rounded-[2rem] blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative w-full h-[400px] bg-[#0a0a0a] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col justify-center items-center">
            {/* Spotify Embed */}
            <iframe 
              className="relative z-10 w-full h-full rounded-[2rem]"
              src="https://open.spotify.com/embed/playlist/6xu2mVVwb8YqM2W30NPSJJ?utm_source=generator&theme=0" 
              width="100%" 
              height="100%" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
