'use client';

export default function ScrollingBanner() {
  // We duplicate the text array a few times to ensure smooth infinite scroll
  const items = [
    "SOFTWARE ARCHITECTURE", "EMBEDDED SYSTEMS", "BACKEND DEVELOPMENT", "CLOUD INFRASTRUCTURE", "IoT SOLUTIONS"
  ];
  
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full bg-[#0a0a0a] dark:bg-white py-5 overflow-hidden flex whitespace-nowrap border-y border-gray-800 dark:border-gray-200">
      <div className="flex items-center gap-10 animate-scroll">
        {duplicatedItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-10">
            <span className="text-white dark:text-black font-bold text-sm tracking-[0.2em] uppercase">
              {item}
            </span>
            <span className="text-gray-600 dark:text-gray-400 text-lg">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
