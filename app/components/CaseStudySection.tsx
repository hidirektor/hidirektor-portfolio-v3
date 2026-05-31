'use client';

export default function CaseStudySection() {
  const projects = [
    { 
      title: "DeepCompressLink",
      category: "AEROSPACE",
      desc: "Delay-Tolerant Adaptive Data Compression Protocol for CubeSat Telemetry.",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
    },
    { 
      title: "ONYX Thermal-Hydraulic",
      category: "SIMULATION",
      desc: "Thermal-Hydraulic Analysis Software for SMR/MMR Cooling Loops.",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
    },
    { 
      title: "CompressM2M",
      category: "IoT",
      desc: "Adaptive M2M Data Compression Protocol for Low-Power IoT Devices.",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-[#f8f9fa] dark:bg-[#050505]" id="projects">
      <div className="wrap flex flex-col gap-12">
        <div className="text-center">
          <div className="inline-flex flex-col items-center">
            <h2 className="text-3xl font-bold tracking-tight mb-3 text-black dark:text-white">CASE STUDY</h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 max-w-sm text-center">
              There are many variations of passages of software available, but the majority have suffered alteration in some form.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Featured Large Project */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white dark:bg-zinc-900 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-zinc-800 transition-colors">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 dark:bg-zinc-800">
              <img src={projects[0].img} alt={projects[0].title} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-center p-8">
              <span className="bg-black dark:bg-white text-white dark:text-black text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full w-fit mb-6 transition-colors">
                {projects[0].category}
              </span>
              <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-4 text-balance text-black dark:text-white">
                {projects[0].title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8">
                {projects[0].desc}
              </p>
              <a href="https://github.com/hidirektor" className="text-xs font-bold tracking-widest uppercase flex items-center gap-2 border-b-2 border-black dark:border-white text-black dark:text-white pb-1 w-fit hover:text-gray-600 dark:hover:text-gray-300 hover:border-gray-600 dark:hover:border-gray-300 transition-colors">
                SEE DETAILS ↗
              </a>
            </div>
          </div>

          {/* Smaller Projects */}
          {projects.slice(1).map((p, i) => (
            <div key={i} className="bg-white dark:bg-zinc-900 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-zinc-800 flex flex-col gap-6 transition-colors">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-gray-100 dark:bg-zinc-800">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col flex-1">
                <span className="bg-black dark:bg-white text-white dark:text-black text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full w-fit mb-4 transition-colors">
                  {p.category}
                </span>
                <h3 className="text-xl font-bold leading-tight mb-2 text-black dark:text-white">
                  {p.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed mb-6 flex-1">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
