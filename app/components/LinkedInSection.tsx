'use client';

import {useEffect, useState} from 'react';
import {useLanguage} from '../context/LanguageContext';
import {Card, CardHeader} from './Card';

interface Post {
  id: string;
  content: string;
  date: string;
  url: string;
}

export default function LinkedInSection() {
  const { t } = useLanguage();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/linkedin')
      .then(res => res.json())
      .then(data => {
        if (data.posts) {
          setPosts(data.posts);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch linkedin posts', err);
        setLoading(false);
      });
  }, [t]);

  const latest = posts.length > 0 ? posts[0] : null;
  const others = posts.length > 1 ? posts.slice(1) : [];

  return (
    <section id="linkedin" className="py-32 bg-white dark:bg-[#050505] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-[#0077b5]/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <div className="wrap relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-10 mb-20">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
            <p className="text-[#0077b5] text-sm font-bold tracking-widest uppercase mb-4">{t('linkedin.tag')}</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-black dark:text-white font-display">
              {t('linkedin.title')}
            </h2>
            <p className="text-black/50 dark:text-white/50 text-lg font-light leading-relaxed">
              {t('linkedin.description')}
            </p>
          </div>
          
          <a
            href="https://www.linkedin.com/in/hidirektor/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 group relative p-[1px] rounded-full overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0077b5]/10"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0077b5]/40 via-[#0077b5]/10 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-white dark:bg-[#050505] rounded-full px-8 py-4 flex items-center justify-center gap-3 z-10 transition-colors duration-500 group-hover:bg-[#f8fafc] dark:group-hover:bg-[#0a0a0a]">
              <span className="font-bold text-sm tracking-widest text-[#0077b5] uppercase">
                {t('linkedin.button')}
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-500 group-hover:translate-x-1 text-[#0077b5]"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </div>
          </a>
        </div>

        {loading ? (
          <div className="flex flex-col xl:flex-row gap-8 xl:h-[500px] animate-pulse">
            <div className="xl:w-1/2 h-full min-h-[400px] bg-black/5 dark:bg-white/5 rounded-[2rem]"></div>
            <div className="xl:w-1/2 flex flex-col gap-6 overflow-hidden">
              <div className="w-full h-[250px] bg-black/5 dark:bg-white/5 rounded-[2rem] flex-shrink-0"></div>
              <div className="w-full h-[250px] bg-black/5 dark:bg-white/5 rounded-[2rem] flex-shrink-0"></div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col xl:flex-row gap-8 xl:h-[500px]">
            {/* Latest Post - Prominent */}
            {latest && (
              <div className="xl:w-1/2 flex-shrink-0">
                <Card 
                  href={latest.url} 
                  className="h-full min-h-[400px]"
                  innerClassName="!bg-[#f8fafc] dark:!bg-[#0a0a0a]"
                  gradientClassName="from-[#0077b5]/20"
                  hoverGradientClassName="group-hover:from-[#0077b5]/60"
                  innerGradientClassName="from-[#0077b5]/[0.03]"
                >
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#0077b5]/10 flex items-center justify-center text-[#0077b5] shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                      </div>
                      <span className="text-sm font-bold text-black/50 dark:text-white/50 uppercase tracking-widest break-words">
                        Latest • {latest.date}
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#0077b5]/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#0077b5]"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </div>
                  </CardHeader>
                  
                  <p className="text-xl md:text-2xl text-black/80 dark:text-white/80 leading-relaxed font-light mt-auto max-w-xl whitespace-pre-wrap">
                    {latest.content}
                  </p>
                </Card>
              </div>
            )}

            {/* Older Posts - Scrollable List */}
            {others.length > 0 && (
              <div className="xl:w-1/2 flex flex-col overflow-y-auto overflow-x-hidden gap-6 pr-1 [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar-thumb]:bg-transparent scrollbar-none" style={{ scrollbarWidth: 'none' }}>
                {others.map((post, i) => (
                  <Card 
                    key={i} 
                    href={post.url} 
                    className="flex-shrink-0 min-h-[250px]"
                    innerClassName="!bg-[#f8fafc] dark:!bg-[#0a0a0a]"
                    gradientClassName="from-[#0077b5]/20"
                    hoverGradientClassName="group-hover:from-[#0077b5]/60"
                    innerGradientClassName="from-[#0077b5]/[0.03]"
                  >
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#0077b5]/10 flex items-center justify-center text-[#0077b5] shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </div>
                        <span className="text-xs font-bold text-black/50 dark:text-white/50 uppercase tracking-widest break-words">
                          {post.date}
                        </span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#0077b5]/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#0077b5]"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                      </div>
                    </CardHeader>
                    
                    <p className="text-sm md:text-base text-black/70 dark:text-white/70 leading-relaxed font-light mt-auto line-clamp-4 whitespace-pre-wrap">
                      {post.content}
                    </p>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
