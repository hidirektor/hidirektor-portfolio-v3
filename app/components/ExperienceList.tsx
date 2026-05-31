'use client';

export default function ExperienceList() {
  const experience = [
    { period: "2 YEARS", role: "Software Team Lead", company: "Werover - Turkey", active: true },
    { period: "1 YEAR", role: "Full Stack Developer", company: "Werover - Turkey", active: false },
    { period: "1 YEAR", role: "Native Mobile Developer", company: "Dynamic Brain - Turkey", active: false },
    { period: "6 MONTHS", role: "Software Team Leader", company: "Woma - Turkey", active: false },
    { period: "3 MONTHS", role: "Backend Developer", company: "Woma - Turkey", active: false },
    { period: "6 MONTHS", role: "R&D Engineer", company: "Önder Lift - Turkey", active: false },
    { period: "3 YEARS", role: "Backend Developer", company: "Lebara Mobile - UK", active: false },
  ];

  return (
    <div className="flex flex-col w-full max-w-3xl mx-auto md:mx-0 md:ml-auto">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold tracking-tight mb-2 text-black dark:text-white">EXPERIENCE</h2>
        <p className="text-xs text-gray-500 dark:text-gray-400 max-w-sm mx-auto">
          A track record of leading teams and shipping scalable products across various industries.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {experience.map((exp, i) => (
          <div 
            key={i}
            className={`
              flex flex-col md:flex-row md:items-center justify-between p-6 border transition-colors
              ${exp.active 
                ? 'bg-[#111] dark:bg-zinc-800 border-[#111] dark:border-zinc-800 text-white' 
                : 'bg-white dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 text-black dark:text-white hover:border-gray-300 dark:hover:border-zinc-600'}
            `}
          >
            <div>
              <h3 className="font-bold text-[17px] mb-1 tracking-tight">{exp.role}</h3>
              <p className={`text-[13px] ${exp.active ? 'text-gray-400 dark:text-gray-300' : 'text-gray-500 dark:text-gray-400'}`}>
                {exp.company}
              </p>
            </div>
            
            <div className={`
              mt-4 md:mt-0 text-[10px] font-bold tracking-widest uppercase border-l pl-4
              ${exp.active 
                ? 'border-gray-700 dark:border-zinc-700 text-gray-300 dark:text-gray-200' 
                : 'border-gray-200 dark:border-zinc-700 text-gray-600 dark:text-gray-400'}
            `}>
              JOB DURATION - {exp.period}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
