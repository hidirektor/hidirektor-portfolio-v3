'use client';

import {useEffect, useState} from 'react';
import {useLanguage} from '../context/LanguageContext';

interface Article {
  title: string;
  url: string;
  date: string;
  description: string;
  thumbnail?: string;
}

export default function MediumSection() {
  const { t } = useLanguage();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/medium')
      .then(res => res.json())
      .then(data => {
        if (data.articles && data.articles.length > 0) {
          setArticles(data.articles);
        } else {
          // Fallback if RSS fails or is empty
          setArticles([
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
          ]);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch medium articles', err);
        setLoading(false);
      });
  }, [t]);

  const latest = articles.length > 0 ? articles[0] : null;
  const others = articles.length > 1 ? articles.slice(1) : [];

  return (
    <section id="medium" className="py-32 bg-[#fafafa] dark:bg-[#050505] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-black/[0.03] dark:bg-white/[0.03] blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <div className="wrap relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-10 mb-20">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
            <p className="text-black/50 dark:text-white/50 text-sm font-bold tracking-widest uppercase mb-4">{t('medium.tag')}</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-black dark:text-white font-display">
              {t('medium.title')}
            </h2>
            <p className="text-black/50 dark:text-white/50 text-lg font-light leading-relaxed">
              {t('medium.description')}
            </p>
          </div>
          
          <a
            href="https://medium.com/@hidirektor"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 group relative inline-flex items-center justify-center px-8 py-4 rounded-full bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 font-bold text-sm tracking-wide overflow-hidden transition-transform duration-300 hover:scale-105 shadow-xl"
          >
            <span className="relative z-10 flex items-center gap-2">
              {t('medium.button')}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </span>
          </a>
        </div>

        {loading ? (
          <div className="flex flex-col xl:flex-row gap-8 animate-pulse">
            <div className="xl:w-1/2 h-[400px] bg-black/5 dark:bg-white/5 rounded-[2rem]"></div>
            <div className="xl:w-1/2 flex gap-6 overflow-hidden">
              <div className="w-[300px] md:w-[400px] h-[350px] bg-black/5 dark:bg-white/5 rounded-[2rem] flex-shrink-0"></div>
              <div className="w-[300px] md:w-[400px] h-[350px] bg-black/5 dark:bg-white/5 rounded-[2rem] flex-shrink-0"></div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col xl:flex-row gap-8 xl:h-[500px]">
            {/* Latest Article - Prominent */}
            {latest && (
              <div className="xl:w-1/2 flex-shrink-0">
                <a 
                  href={latest.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-[1px] rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col h-full min-h-[400px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-black/15 dark:from-white/15 to-transparent opacity-50 group-hover:from-black/40 dark:group-hover:from-white/40 transition-all duration-500 z-0"></div>
                  <div className="relative flex-1 bg-white dark:bg-[#0a0a0a] rounded-[2rem] p-10 lg:p-14 flex flex-col z-10 overflow-hidden shadow-lg dark:shadow-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-black/[0.03] dark:from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    
                    <div className="relative z-20 flex flex-col h-full">
                      <div className="flex items-center justify-between mb-10">
                        <span className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs font-bold text-black/60 dark:text-white/60 uppercase tracking-widest">
                          Latest • {latest.date}
                        </span>
                        <div className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-black dark:text-white"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </div>
                      </div>
                      
                      <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-black dark:text-white font-display group-hover:text-black/70 dark:group-hover:text-white/70 transition-colors duration-300 leading-tight mb-8">
                        {latest.title}
                      </h3>
                      
                      <p className="text-lg text-black/60 dark:text-white/60 leading-relaxed font-light mt-auto max-w-xl">
                        {latest.description}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            )}

            {/* Older Articles - Scrollable List */}
            {others.length > 0 && (
              <div className="xl:w-1/2 flex flex-col overflow-y-auto gap-6 pr-4 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-black/10 dark:[&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-track]:bg-transparent">
                {others.map((article, i) => (
                  <a 
                    key={i}
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-[1px] rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col w-full flex-shrink-0 min-h-[250px]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-black/15 dark:from-white/15 to-transparent opacity-50 group-hover:from-black/40 dark:group-hover:from-white/40 transition-all duration-500 z-0"></div>
                    <div className="relative flex-1 bg-white dark:bg-[#0a0a0a] rounded-[2rem] p-8 flex flex-col z-10 overflow-hidden shadow-lg dark:shadow-none">
                      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.03] dark:from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                      
                      <div className="relative z-20 flex flex-col h-full">
                        <div className="flex items-center justify-between mb-8">
                          <span className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs font-bold text-black/60 dark:text-white/60">
                            {article.date}
                          </span>
                          <div className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-black dark:text-white"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                          </div>
                        </div>
                        
                        <h3 className="text-xl md:text-2xl font-bold tracking-tight text-black dark:text-white font-display group-hover:text-black/70 dark:group-hover:text-white/70 transition-colors duration-300 leading-tight mb-6">
                          {article.title}
                        </h3>
                        
                        <p className="text-sm md:text-base text-black/60 dark:text-white/60 leading-relaxed font-light mt-auto line-clamp-3">
                          {article.description}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
