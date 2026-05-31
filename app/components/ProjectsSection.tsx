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
    <section id="projects" className="py-24 bg-white dark:bg-[#050505]">
      <div className="wrap">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-black dark:text-white">
            Current Projects
          </h2>
          <p className="text-gray-500 max-w-xl text-lg">
            A selection of my recent technical endeavors, ranging from IoT hardware integrations to full-stack scalable web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div 
              key={i}
              className="group p-8 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 hover:border-black/10 dark:hover:border-white/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-bold tracking-tight text-black dark:text-white group-hover:text-[#E4007C] transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs font-medium text-gray-400 whitespace-nowrap ml-4">
                    {project.date}
                  </span>
                </div>
                
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span 
                      key={t}
                      className="px-2 py-1 rounded bg-black/5 dark:bg-white/5 text-[10px] font-bold tracking-wider uppercase text-gray-600 dark:text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-black dark:text-white hover:text-[#E4007C] dark:hover:text-[#E4007C] flex items-center gap-1 transition-colors"
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
