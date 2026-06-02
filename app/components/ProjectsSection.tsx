'use client';

import {useLanguage} from '../context/LanguageContext';
import {Card, CardHeader, CardTag} from './Card';

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
    <section id="projects" className="py-32 bg-white dark:bg-[#050505] relative">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-[#E4007C]/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <div className="wrap relative z-10">
        <div className="flex flex-col items-center text-center" style={{ marginBottom: '80px' }}>
          <p className="text-[#E4007C] text-sm font-bold tracking-widest uppercase mb-4">{t('projects.tag')}</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-black dark:text-white font-display">
            {t('projects.title')}
          </h2>
          <p className="text-black/50 dark:text-white/50 max-w-2xl text-lg font-light leading-relaxed">
            {t('projects.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16">
          {projects.map((project, i) => (
            <div key={i} className="h-full">
              <Card 
                className="h-full"
                innerClassName="!bg-zinc-50 dark:!bg-[#0a0a0a]"
                gradientClassName="from-black/10 dark:from-white/10"
                hoverGradientClassName="group-hover:from-[#E4007C]/50 group-hover:via-[#FBDD09]/50 group-hover:to-transparent"
              >
                <div className="flex flex-col justify-between h-full">
                  <div className="relative z-20">
                    <CardHeader className="mb-10 sm:items-start">
                      <h3 className="text-xl md:text-2xl font-bold tracking-tight text-black dark:text-white font-display group-hover:text-[#E4007C] transition-colors duration-300 flex-1 min-w-[200px] leading-tight">
                        {project.title}
                      </h3>
                      <CardTag className="shrink-0">{project.date}</CardTag>
                    </CardHeader>
                    
                    <p className="text-base text-black/50 dark:text-white/50 mb-12 leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>

                  <div className="relative z-20 mt-auto">
                    <div className="flex flex-wrap items-center gap-4 mb-12">
                      {project.tech.map((t) => (
                        <span 
                          key={t}
                          className="px-4 py-2 rounded-xl bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-sm font-semibold tracking-wide text-black/80 dark:text-white/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-8 mt-auto">
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-bold text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white flex items-center gap-2 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-black dark:after:bg-white hover:after:w-full after:transition-all after:duration-300 pb-1"
                        >
                          {link.label} 
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
