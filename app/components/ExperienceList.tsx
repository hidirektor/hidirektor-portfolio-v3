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
        <h2 className="text-2xl font-bold tracking-tight mb-2">EXPERIENCE</h2>
        <p className="text-xs text-gray-500 max-w-sm mx-auto">
          A track record of leading teams and shipping scalable products across various industries.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {experience.map((exp, i) => (
          <div 
            key={i}
            className={`
              flex flex-col md:flex-row md:items-center justify-between p-6 border transition-colors
              ${exp.active ? 'bg-[#111] border-[#111] text-white' : 'bg-white border-gray-200 text-black hover:border-gray-300'}
            `}
          >
            <div>
              <h3 className="font-bold text-[17px] mb-1 tracking-tight">{exp.role}</h3>
              <p className={`text-[13px] ${exp.active ? 'text-gray-400' : 'text-gray-500'}`}>
                {exp.company}
              </p>
            </div>
            
            <div className={`
              mt-4 md:mt-0 text-[10px] font-bold tracking-widest uppercase border-l pl-4
              ${exp.active ? 'border-gray-700 text-gray-300' : 'border-gray-200 text-gray-600'}
            `}>
              JOB DURATION - {exp.period}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
