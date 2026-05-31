'use client';

import {useLanguage} from '../context/LanguageContext';

export default function ProjectsSection() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('projects.items.project1.title'),
      date: 'Oct 2025 - Nov 2025',
      description: t('projects.items.project1.description'),
      tech: ['Next.js', 'React', 'Node.js', 'MySQL', 'Redis', 'Docker'],
      links: [
        { label: 'Live', url: 'https://kampus.mcbu.edu.tr' },
        { label: 'Backend', url: 'https://github.com/motivexintelligence/class-roll-call-backend-api-v2' },
        { label: 'Frontend', url: 'https://github.com/motivexintelligence/class-roll-call-web' }
      ]
    },
    {
      title: t('projects.items.project2.title'),
      date: 'Mar 2024 - May 2025',
      description: t('projects.items.project2.description'),
      tech: ['C++', 'FreeRTOS', 'Node.js', 'MQTT', 'Modbus'],
      links: []
    },
    {
      title: t('projects.items.project3.title'),
      date: 'Dec 2023 - Apr 2024',
      description: t('projects.items.project3.description'),
      tech: ['Java', 'Spring Boot', 'Node.js', 'Swift', 'Android'],
      links: [
        { label: 'API', url: 'https://github.com/hidirektor/gelkurye-backend-api' },
        { label: 'Android', url: 'https://github.com/hidirektor/gelkurye-mobile-android' },
        { label: 'Web', url: 'https://github.com/hidirektor/gelkurye-web' }
      ]
    },
    {
      title: t('projects.items.project4.title'),
      date: 'Nov 2021 - Dec 2021',
      description: t('projects.items.project4.description'),
      tech: ['Java', 'JavaFX', 'WebRTC'],
      links: [
        { label: 'GitHub', url: 'https://github.com/hidirektor/TFEncrpytion' }
      ]
    }
  ];

  return (
    <section id="projects" className="py-32 bg-[#050505] relative">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-[#E4007C]/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <div className="wrap relative z-10">
        <div className="mb-20 flex flex-col items-center text-center">
          <p className="text-[#E4007C] text-sm font-bold tracking-widest uppercase mb-4">{t('projects.tag')}</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-white font-display">
            {t('projects.title')}
          </h2>
          <p className="text-white/50 max-w-2xl text-lg font-light leading-relaxed">
            {t('projects.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, i) => (
            <div 
              key={i}
              className="group relative p-[1px] rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
            >
              {/* Animated border gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 group-hover:from-[#E4007C]/50 group-hover:via-[#FBDD09]/50 group-hover:to-transparent transition-all duration-500 z-0"></div>
              
              {/* Card content */}
              <div className="relative h-full bg-[#0a0a0a] rounded-3xl p-8 lg:p-12 flex flex-col justify-between z-10">
                
                {/* Radial glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="relative z-20">
                  <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-4 mb-8">
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white font-display group-hover:text-[#E4007C] transition-colors duration-300 flex-1 pr-4 leading-tight">
                      {project.title}
                    </h3>
                    <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs font-bold text-white/50 whitespace-nowrap shrink-0">
                      {project.date}
                    </span>
                  </div>
                  
                  <p className="text-base text-white/50 mb-10 leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                <div className="relative z-20 mt-auto">
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

                  <div className="flex flex-wrap gap-6 mt-auto">
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
