'use client';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#050505] pt-40 pb-12">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/hero-bg.png" 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-70"
        />
        {/* Gradients for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-transparent to-[#050505] z-0" />
      </div>

      {/* Giant Text */}
      <div className="relative z-10 w-full text-center px-4 flex-1 flex flex-col justify-center">
        <h1 className="text-[14vw] md:text-[12vw] font-bold tracking-tighter leading-none text-[#eaeaea] opacity-90 select-none" style={{ letterSpacing: '-0.05em' }}>
          Halil İbrahim
        </h1>
      </div>

      {/* Bottom Layout */}
      <div className="relative z-10 w-full px-8 md:px-16 mt-auto">
        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 text-[#999999] text-[11px] md:text-xs font-medium tracking-wide mb-12">
          
          <div className="flex flex-col gap-1">
            <span className="text-white font-bold mb-1">Software Architect &</span>
            <span>Embedded Systems Engineer</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-white font-bold mb-1">Based In</span>
            <span>İzmir, Turkey</span>
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
          <a href="#contact" className="relative px-6 py-4 hover:text-white transition-colors group">
            {/* Broken Borders [ ] */}
            <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 group-hover:border-white transition-colors" />
            <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/30 group-hover:border-white transition-colors" />
            <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/30 group-hover:border-white transition-colors" />
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30 group-hover:border-white transition-colors" />
            Discover Me
          </a>

          <span className="text-white/40">
            [ Lets Scroll ]
          </span>
        </div>
      </div>
    </section>
  );
}
