'use client';

import {useState} from 'react';

export default function SettingsWidget() {
  const [lang, setLang] = useState('EN');

  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <div className="preferences-widget-btn fixed bottom-16 right-0 z-[9999] h-14 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 shadow-2xl transition-all duration-500 ease-in-out flex items-center overflow-hidden cursor-pointer w-14 rounded-l-[1rem]">
      <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings w-6 h-6 transition-transform duration-500" aria-hidden="true">
          <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      </div>
      
      <div className="pref-content flex-1 flex items-center gap-4 px-2 whitespace-nowrap transition-opacity duration-300 opacity-0">
        <div className="h-8 w-px bg-white/20 dark:bg-zinc-900/20"></div>
        
        <button onClick={toggleTheme} className="flex items-center gap-2 hover:opacity-70 transition-opacity" aria-label="Toggle theme">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon" aria-hidden="true">
            <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path>
          </svg>
        </button>
        
        <div className="h-8 w-px bg-white/20 dark:bg-zinc-900/20"></div>
        
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe" aria-hidden="true">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
            <path d="M2 12h20"></path>
          </svg>
          
          <div className="flex bg-white/10 dark:bg-zinc-900/10 rounded-md p-0.5">
            {['EN', 'TR', 'DE'].map((l) => (
              <button 
                key={l}
                onClick={() => setLang(l)}
                className={`px-2 py-1 text-xs font-bold rounded-sm transition-colors ${
                  lang === l 
                    ? 'bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white' 
                    : 'hover:bg-white/20 dark:hover:bg-zinc-900/20 text-white/70 dark:text-zinc-900/70 hover:text-white dark:hover:text-zinc-900'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
