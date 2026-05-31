'use client';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#050505] pt-40 pb-12">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full bg-[#050505]">
        <img 
          src="/assets/images/hero-background.jpg" 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
        {/* Solid dark overlay (balanced opacity) */}
        <div className="absolute inset-0 bg-black/50 z-0" />
        {/* Gradients for top/bottom edge blending and text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-transparent to-[#050505]/90 z-0" />
      </div>

      {/* Giant Text */}
      <div className="relative z-10 w-full text-center px-4 flex-1 flex flex-col justify-center">
        <h1 className="text-[12vw] md:text-[10vw] font-bold tracking-tighter leading-none text-[#eaeaea] opacity-90 select-none flex flex-col" style={{ letterSpacing: '-0.05em' }}>
          <span>Halil İbrahim</span>
          <span>DİREKTÖR</span>
        </h1>
      </div>

      {/* Bottom Layout */}
      <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 mt-auto flex justify-center pb-8">
        
        {/* Center: Title, Desc, Lets Scroll */}
        <div className="flex flex-col items-center text-center max-w-md gap-5">
          <div className="flex flex-col gap-2">
            <h3 className="text-white font-bold text-sm tracking-widest uppercase">Software Architect</h3>
            <p className="text-[#999999] text-xs font-medium leading-relaxed">
              Hello! I'm a software architect and embedded systems engineer. I love bridging the gap between hardware and the cloud, turning complex problems into elegant, scalable solutions. From robust backends to pixel-perfect web experiences, I'm here to bring meaningful ideas to life.
            </p>
          </div>
          <a href="#experience" className="text-white/40 hover:text-white text-[10px] md:text-xs font-bold tracking-widest uppercase transition-colors duration-300 flex items-center gap-2 group mt-2">
            <span className="opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">↓</span>
            <span className="transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FBDD09] group-hover:via-[#E4007C] group-hover:to-[#D30026] group-hover:bg-[length:200%_auto] group-hover:animate-wave">
              [ Lets Scroll ]
            </span>
            <span className="opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">↓</span>
          </a>
        </div>

      </div>
    </section>
  );
}
