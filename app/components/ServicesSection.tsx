'use client';

export default function ServicesSection() {
  const services = [
    {
      title: "SOFTWARE ARCHITECTURE",
      desc: "Designing scalable, robust, and maintainable systems from monoliths to microservices.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      dark: true
    },
    {
      title: "EMBEDDED SYSTEMS",
      desc: "Firmware development, RTOS, and hardware-software integration for IoT devices.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      dark: false
    },
    {
      title: "CLOUD INFRASTRUCTURE",
      desc: "AWS, Azure deployments, CI/CD pipelines, Docker, and Kubernetes orchestration.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      dark: false
    }
  ];

  return (
    <section className="py-24 bg-white" id="services">
      <div className="wrap flex flex-col gap-12">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="text-xs font-bold tracking-widest text-gray-400 mb-4 uppercase">
              — My Services ?
            </p>
            <h2 className="text-4xl md:text-[3.5rem] font-bold leading-none tracking-tight">
              WHAT I'M <br /> OFFERING
            </h2>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center gap-6 max-w-md">
            <p className="text-[13px] text-gray-500 leading-relaxed">
              From low-level embedded firmware to high-level cloud architecture, I build complete end-to-end solutions that are scalable, reliable, and performant.
            </p>
            <button className="bg-black text-white px-8 py-3.5 rounded-full font-medium text-[13px] whitespace-nowrap hover:bg-gray-800 transition-colors flex-shrink-0">
              ALL SERVICE
            </button>
          </div>
        </div>
        
        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div 
              key={i}
              className={`
                flex flex-col justify-between p-10 min-h-[320px] transition-transform hover:-translate-y-2
                ${s.dark ? 'bg-[#0a0a0a] text-white' : 'bg-white text-black border border-gray-200'}
              `}
            >
              <div className={`mb-12 ${s.dark ? 'text-white' : 'text-black'}`}>
                {s.icon}
              </div>
              
              <div>
                <h3 className="text-xl font-bold tracking-tight leading-tight mb-4 max-w-[200px]">
                  {s.title}
                </h3>
                <a href="#contact" className={`text-xs font-semibold tracking-wider flex items-center gap-2 ${s.dark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black'} transition-colors`}>
                  READ MORE
                  <span className="text-[10px]">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
