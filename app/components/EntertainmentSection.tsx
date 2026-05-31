'use client';

import {useLanguage} from '../context/LanguageContext';

export default function EntertainmentSection() {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      
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
            <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <span className="text-2xl">🚴‍♂️</span>
              <span className="text-sm font-bold text-white tracking-wide">{t('entertainment.cycling')}</span>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <span className="text-2xl">🎧</span>
              <span className="text-sm font-bold text-white tracking-wide">{t('entertainment.music')}</span>
            </div>
          </div>
        </div>

        {/* Premium Spotify container */}
        <div className="lg:col-span-7 relative group">
          {/* Glowing frame */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#E4007C]/50 via-white/10 to-[#FBDD09]/50 rounded-[2rem] blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative w-full h-[400px] bg-[#0a0a0a] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col justify-center items-center">
            
            {/* Overlay placeholder when no iframe */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-0 bg-[url('https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center">
              <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 border border-white/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 font-display">{t('entertainment.playlistTitle')}</h3>
                <p className="text-sm text-white/50 max-w-sm">
                  {t('entertainment.playlistDesc')}
                </p>
              </div>
            </div>

            {/* Spotify Embed - Example 
                (To use, remove the placeholder above and uncomment this iframe)
            <iframe 
              className="relative z-10 w-full h-full"
              src="https://open.spotify.com/embed/playlist/37i9dQZF1DX8Uebhn9wzrS?utm_source=generator&theme=0" 
              width="100%" 
              height="100%" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              style={{ border: 0 }}
            ></iframe>
            */}
          </div>
        </div>
      </div>
    </section>
  );
}
