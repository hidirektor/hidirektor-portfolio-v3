'use client';

import {useLanguage} from '../context/LanguageContext';

export default function LinkedInSection() {
  const { t } = useLanguage();
  
  const posts = [
    {
      content: t('linkedin.items.post1.content'),
      date: t('linkedin.items.post1.date'),
      url: 'https://www.linkedin.com/in/hidirektor/'
    },
    {
      content: t('linkedin.items.post2.content'),
      date: t('linkedin.items.post2.date'),
      url: 'https://www.linkedin.com/in/hidirektor/'
    },
    {
      content: t('linkedin.items.post3.content'),
      date: t('linkedin.items.post3.date'),
      url: 'https://www.linkedin.com/in/hidirektor/'
    }
  ];

  return (
    <section id="linkedin" className="py-32 bg-white dark:bg-[#050505] relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-[#0077b5]/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <div className="wrap relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-[#0077b5] text-sm font-bold tracking-widest uppercase mb-4">{t('linkedin.tag')}</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-black dark:text-white font-display">
            {t('linkedin.title')}
          </h2>
          <p className="text-black/50 dark:text-white/50 max-w-2xl text-lg font-light leading-relaxed mb-10">
            {t('linkedin.description')}
          </p>
          
          <a
            href="https://www.linkedin.com/in/hidirektor/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#0077b5] text-white font-bold text-sm tracking-wide overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              {t('linkedin.button')}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <a 
              key={i}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-[1px] rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0077b5]/10 to-transparent opacity-50 group-hover:from-[#0077b5]/30 transition-all duration-500 z-0"></div>
              <div className="relative h-full bg-zinc-50 dark:bg-[#0a0a0a] rounded-3xl flex flex-col p-8 z-10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0077b5]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#0077b5]/10 flex items-center justify-center text-[#0077b5]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </div>
                  <span className="text-xs font-bold text-black/50 dark:text-white/50">
                    {post.date}
                  </span>
                </div>
                <p className="text-base text-black/80 dark:text-white/80 leading-relaxed font-medium mt-auto">
                  {post.content}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
