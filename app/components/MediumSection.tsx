'use client';

import {useLanguage} from '../context/LanguageContext';

export default function MediumSection() {
  const { t } = useLanguage();
  
  const articles = [
    {
      title: t('medium.items.article1.title'),
      date: t('medium.items.article1.date'),
      description: t('medium.items.article1.description'),
      url: 'https://medium.com/@hidirektor'
    },
    {
      title: t('medium.items.article2.title'),
      date: t('medium.items.article2.date'),
      description: t('medium.items.article2.description'),
      url: 'https://medium.com/@hidirektor'
    },
    {
      title: t('medium.items.article3.title'),
      date: t('medium.items.article3.date'),
      description: t('medium.items.article3.description'),
      url: 'https://medium.com/@hidirektor'
    }
  ];

  return (
    <section id="medium" className="py-32 bg-zinc-50 dark:bg-[#0a0a0a] relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-[#000000]/5 dark:bg-[#ffffff]/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <div className="wrap relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-black/50 dark:text-white/50 text-sm font-bold tracking-widest uppercase mb-4">{t('medium.tag')}</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-black dark:text-white font-display">
            {t('medium.title')}
          </h2>
          <p className="text-black/50 dark:text-white/50 max-w-2xl text-lg font-light leading-relaxed mb-10">
            {t('medium.description')}
          </p>
          
          <a
            href="https://medium.com/@hidirektor"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full bg-black dark:bg-white text-white dark:text-black font-bold text-sm tracking-wide overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              {t('medium.button')}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <a 
              key={i}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-[1px] rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/10 dark:from-white/10 to-transparent opacity-50 group-hover:from-black/30 dark:group-hover:from-white/30 transition-all duration-500 z-0"></div>
              <div className="relative h-full bg-white dark:bg-[#111] rounded-3xl flex flex-col p-8 z-10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-black/[0.02] dark:from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="mb-6">
                  <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs font-bold text-black/50 dark:text-white/50 whitespace-nowrap mb-4">
                    {article.date}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-black dark:text-white font-display group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300 leading-tight">
                    {article.title}
                  </h3>
                </div>
                <p className="text-sm text-black/60 dark:text-white/60 leading-relaxed font-light mt-auto">
                  {article.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
