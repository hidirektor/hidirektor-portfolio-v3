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
          
          {/* Waiting for Logos UI */}
          <div className="flex justify-center items-center h-24">
            <div className="px-8 py-3 rounded-full bg-white/[0.02] border border-white/5 backdrop-blur-sm flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E4007C] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#E4007C]"></span>
              </span>
              <p className="text-white/40 text-sm font-medium tracking-wide">
                Logos will be placed here
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
