'use client';

export default function TrustedLogos() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-[#050505] overflow-hidden">
      {/* Subtle top/bottom gradient lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="wrap flex flex-col items-center gap-12 relative z-10">
        <p className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-white/40 uppercase text-center">
          Trusted By Industry Leaders
        </p>
        
        {/* Logos Container */}
        <div className="w-full relative">
          {/* Fading edges for infinite scroll illusion */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>
          
          {/* Logos List */}
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 relative z-0 py-4">
            <img 
              src="/assets/images/trusted-logo/Logo_Lebara.png" 
              alt="Lebara" 
              className="h-8 md:h-12 object-contain opacity-40 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100" 
            />
            <img 
              src="/assets/images/trusted-logo/logo-onder.png.webp" 
              alt="Önder Grup" 
              className="h-10 md:h-14 object-contain opacity-40 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100" 
            />
            <img 
              src="/assets/images/trusted-logo/logo-bg.png" 
              alt="Motivex" 
              className="h-8 md:h-12 object-contain opacity-40 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
