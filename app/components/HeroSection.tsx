'use client';

export default function HeroSection() {
  return (
    <section className="relative pt-[120px] pb-[80px] min-h-[90vh] flex items-center overflow-hidden">
      <div className="mesh-bg" />
      
      <div className="wrap relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        {/* Left Content */}
        <div className="anim-fade-up">
          <div className="text-3xl mb-4">👋</div>
          <h1 className="text-[3rem] md:text-[4.5rem] font-bold leading-[1.1] tracking-tight mb-4 text-balance">
            Hello! I'm <br /> Halil İbrahim
          </h1>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xl font-medium">Software Architect</span>
            <span className="text-xl">✦</span>
          </div>
          
          <p className="text-[15px] leading-relaxed text-gray-600 max-w-md mb-8">
            Hello! I'm Halil İbrahim. I'm a <strong>software architect, embedded systems engineer, backend developer</strong>, and a long-distance cycling enthusiast!
          </p>
          
          <ul className="space-y-3 mb-10 text-[14.5px] font-medium text-gray-800">
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-black flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
              Systems must be scalable
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-black flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
              Solve complex problems elegantly
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-black flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
              Firmware to Cloud integration
            </li>
          </ul>
          
          <div className="flex flex-wrap items-center gap-6">
            <a href="#contact" className="bg-black text-white px-8 py-3.5 rounded-full font-medium text-[15px] hover:bg-gray-800 transition-colors">
              Let's Talk
            </a>
            <a href="#" className="font-semibold text-[15px] border-b-2 border-black pb-0.5 hover:text-gray-600 hover:border-gray-600 transition-colors flex items-center gap-1">
              Download Cv
              <span className="text-sm">↓</span>
            </a>
          </div>
        </div>
        
        {/* Right Content - Image Placeholder */}
        <div className="relative w-full aspect-[4/5] md:aspect-square flex items-center justify-center anim-fade-up delay-200">
          <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-[2rem] bg-gray-100 border-2 border-white shadow-xl overflow-hidden flex items-center justify-center">
            {/* Real image would go here. Using a placeholder for now. */}
            <div className="text-center p-6">
              <p className="text-gray-400 font-medium text-sm tracking-widest uppercase mb-2">Portrait</p>
              <p className="text-gray-300 text-xs">Add your photo here</p>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-[10%] left-[0%] w-16 h-16 border-t-2 border-l-2 border-black rounded-tl-3xl opacity-20" />
          <div className="absolute bottom-[20%] right-[5%] w-24 h-24 border-b-2 border-r-2 border-black rounded-br-3xl opacity-20" />
          
          <div className="absolute top-[30%] -left-8 bg-black text-white px-6 py-3 rounded-full font-medium transform -rotate-12 shadow-lg">
            Hello!
          </div>
        </div>
      </div>
    </section>
  );
}
