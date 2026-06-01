'use client';

import {Bike, Headphones} from 'lucide-react';
import {useLanguage} from '../context/LanguageContext';

export default function EntertainmentSection() {
  const { t } = useLanguage();

  return (
    <section className="py-32 relative border-t border-white/5">
      
      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#E4007C]/10 to-[#FBDD09]/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="wrap relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5">
          <p className="text-[#FBDD09] text-sm font-bold tracking-widest uppercase mb-4">{t('entertainment.tag')}</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-white font-display leading-[1.1]">
            {t('entertainment.title').split(' ').map((word, i, arr) => 
               i === arr.length - 1 ? <span key={i}><br/>{word}</span> : word + ' '
            )}
          </h2>
          <p className="text-white/50 text-lg mb-10 font-light leading-relaxed">
            {t('entertainment.description')}
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
              <Bike className="w-6 h-6 text-[#FBDD09]" strokeWidth={2.5} />
              <span className="text-sm font-bold text-white tracking-wide">{t('entertainment.cycling')}</span>
            </div>
            <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
              <Headphones className="w-6 h-6 text-[#E4007C]" strokeWidth={2.5} />
              <span className="text-sm font-bold text-white tracking-wide">{t('entertainment.music')}</span>
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
