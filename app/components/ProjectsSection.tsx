'use client';

const projects = [
  {
    title: 'Class Roll Call Management System',
    date: 'Oct 2025 - Nov 2025',
    description: 'A real-time attendance tracking system for educational institutions featuring dynamic QR codes, robust backend API, Redis caching, and an administrative dashboard.',
    tech: ['Next.js', 'React', 'Node.js', 'MySQL', 'Redis', 'Docker'],
    links: [
      { label: 'Live', url: 'https://kampus.mcbu.edu.tr' },
      { label: 'Backend', url: 'https://github.com/motivexintelligence/class-roll-call-backend-api-v2' },
      { label: 'Frontend', url: 'https://github.com/motivexintelligence/class-roll-call-web' }
    ]
  },
  {
    title: 'Open-Source Web 3.0 & IoT Mobile Integration',
    date: 'Mar 2024 - May 2025',
    description: 'TÜBİTAK 2209-B Awarded Project. A modular IIoT platform for industrial systems enabling real-time data collection from PLC using STM32, Modbus, FreeRTOS, and Node.js.',
    tech: ['C++', 'FreeRTOS', 'Node.js', 'MQTT', 'Modbus'],
    links: []
  },
  {
    title: 'Delivery Boy Mobile Application',
    date: 'Dec 2023 - Apr 2024',
    description: 'Real-time order tracking service for e-commerce with Spring Boot backend, native Android (Java) app, and native iOS (Swift) app for cross-platform delivery management.',
    tech: ['Java', 'Spring Boot', 'Node.js', 'Swift', 'Android'],
    links: [
      { label: 'API', url: 'https://github.com/hidirektor/gelkurye-backend-api' },
      { label: 'Android', url: 'https://github.com/hidirektor/gelkurye-mobile-android' },
      { label: 'Web', url: 'https://github.com/hidirektor/gelkurye-web' }
    ]
  },
  {
    title: 'TFEncryption Chat',
    date: 'Nov 2021 - Dec 2021',
    description: 'A desktop chat application utilizing WebRTC, Cactoos, and Concurrency. Allows secure file and message transfers encrypted via SPN, SHA256, or MD5 algorithms.',
    tech: ['Java', 'JavaFX', 'WebRTC'],
    links: [
      { label: 'GitHub', url: 'https://github.com/hidirektor/TFEncrpytion' }
    ]
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 bg-[#050505] relative">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-[#E4007C]/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <div className="wrap relative z-10">
        <div className="mb-20 flex flex-col items-center text-center">
          <p className="text-[#E4007C] text-sm font-bold tracking-widest uppercase mb-4">Portfolio</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-white font-display">
            Current Projects
          </h2>
          <p className="text-white/50 max-w-2xl text-lg font-light leading-relaxed">
            A selection of my recent technical endeavors, ranging from IoT hardware integrations to full-stack scalable web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div 
              key={i}
              className="group relative p-[1px] rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-1"
            >
              {/* Animated border gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 group-hover:from-[#E4007C]/50 group-hover:via-[#FBDD09]/50 group-hover:to-transparent transition-all duration-500 z-0"></div>
              
              {/* Card content */}
              <div className="relative h-full bg-[#0a0a0a] rounded-3xl p-8 md:p-10 flex flex-col justify-between z-10">
                
                {/* Radial glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="relative z-20">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                    <h3 className="text-2xl font-bold tracking-tight text-white font-display group-hover:text-[#E4007C] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-white/40 whitespace-nowrap">
                      {project.date}
                    </span>
                  </div>
                  
                  <p className="text-base text-white/50 mb-8 leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                <div className="relative z-20">
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span 
                        key={t}
                        className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.05] text-xs font-semibold tracking-wide text-white/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-6">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-white/60 hover:text-white flex items-center gap-2 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white hover:after:w-full after:transition-all after:duration-300 pb-1"
                      >
                        {link.label} 
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
