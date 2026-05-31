'use client';

export default function Footer() {
  return (
    <footer className="relative w-full pt-32 md:pt-48 pb-16 md:pb-24 overflow-hidden flex flex-col items-center justify-center bg-[#050505] text-white">
      
      {/* Top Gradient Fade to smooth transition from previous section */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-transparent pointer-events-none z-20"></div>

      {/* Giant Text Layered Effect */}
      <div className="relative w-full flex justify-center items-center leading-none select-none pointer-events-auto cursor-default">
        <div className="relative w-full flex justify-center items-center">
          
          {/* Background Text (Relative to give height to the footer) */}
          <div className="relative text-[20vw] md:text-[18vw] font-bold tracking-tighter text-white/5 leading-[0.75] z-0 flex whitespace-nowrap justify-center">
            {"DİREKTÖR".split('').map((char, i) => (
              <span key={i} className="transition-colors duration-300 hover:text-white/20">
                {char}
              </span>
            ))}
          </div>
          
          {/* Foreground Text (Absolute, perfectly centered on top of the background text) */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[8vw] md:text-[6vw] font-bold tracking-tighter text-white leading-[0.75] z-10 flex whitespace-nowrap">
            {"Halil İbrahim".split('').map((char, i) => (
              <span key={i} className="transition-colors duration-300 hover:text-[#E4007C]">
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent pointer-events-none z-0"></div>
    </footer>
  );
}
