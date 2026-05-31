'use client';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#050505] pt-40 pb-12">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/assets/images/hero-background.jpg" 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-70"
        />
        {/* Gradients for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-transparent to-[#050505] z-0" />
      </div>

      {/* Giant Text */}
      <div className="relative z-10 w-full text-center px-4 flex-1 flex flex-col justify-center">
        <h1 className="text-[12vw] md:text-[10vw] font-bold tracking-tighter leading-none text-[#eaeaea] opacity-90 select-none flex flex-col" style={{ letterSpacing: '-0.05em' }}>
          <span>Halil İbrahim</span>
          <span>DİREKTÖR</span>
        </h1>
      </div>

      {/* Bottom Layout */}
      <div className="relative z-10 w-full px-12 md:px-24 lg:px-32 mt-auto">
        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 text-[#999999] text-[11px] md:text-xs font-medium tracking-wide mb-16">
          
          <div className="flex flex-col gap-1">
            <span className="text-white font-bold mb-1">Software Architect &</span>
            <span>Embedded Systems Engineer</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-white font-bold mb-1">Specializes in</span>
            <span>Backend Development</span>
            <span>Cloud Infrastructure</span>
            <span>IoT Solutions</span>
          </div>

          <div className="flex flex-col gap-2">
            <p className="leading-relaxed">
              Halil İbrahim is a software architect and embedded systems engineer focusing on web design, scalable backend, and branding. He helps companies connect with their audience and grow their businesses through robust and meaningful digital products.
            </p>
          </div>
        </div>

        {/* Bottom Action Buttons */}
        <div className="flex items-center justify-between text-[#eaeaea] text-[10px] md:text-xs font-bold tracking-widest uppercase">
          <a href="#contact" className="relative px-8 py-4 hover:text-white transition-all duration-300 group hover:bg-white/5">
            {/* Broken Borders [ ] - expands on hover */}
            <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/30 group-hover:border-white group-hover:w-full group-hover:h-full transition-all duration-500" />
            <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/30 group-hover:border-white group-hover:w-full group-hover:h-full transition-all duration-500" />
            <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/30 group-hover:border-white group-hover:w-full group-hover:h-full transition-all duration-500" />
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/30 group-hover:border-white group-hover:w-full group-hover:h-full transition-all duration-500" />
            Discover Me
          </a>

          <a href="#experience" className="text-white/40 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
            <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">↓</span>
            [ Lets Scroll ]
            <span className="opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
