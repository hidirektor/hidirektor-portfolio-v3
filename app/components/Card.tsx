import React from 'react';

export function Card({ 
  children, 
  href,
  className = '',
  innerClassName = '',
  gradientClassName = 'from-black/15 dark:from-white/15',
  hoverGradientClassName = 'group-hover:from-black/40 dark:group-hover:from-white/40',
  innerGradientClassName = 'from-black/[0.03] dark:from-white/[0.03]'
}: { 
  children: React.ReactNode, 
  href?: string,
  className?: string,
  innerClassName?: string,
  gradientClassName?: string,
  hoverGradientClassName?: string,
  innerGradientClassName?: string
}) {
  const Component = href ? 'a' : ('div' as any);
  const props = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {};
  
  return (
    <Component 
      {...props}
      className={`group relative block rounded-[2rem] transition-all duration-500 hover:-translate-y-2 flex flex-col w-full ${className}`}
    >
      {/* 1px gradient border — sits behind everything, never clips content */}
      <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br ${gradientClassName} to-transparent opacity-50 ${hoverGradientClassName} transition-all duration-500`}></div>
      
      {/* Inner card — m-[1px] exposes the border layer above */}
      <div className={`relative flex-1 bg-white dark:bg-[#0a0a0a] rounded-[calc(2rem-1px)] m-[1px] p-8 md:p-10 lg:p-12 flex flex-col z-10 shadow-lg dark:shadow-none ${innerClassName}`}>
        {/* Hover glow overlay */}
        <div className={`absolute inset-0 rounded-[calc(2rem-1px)] bg-gradient-to-br ${innerGradientClassName} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
        <div className="relative z-20 flex flex-col h-full w-full">
          {children}
        </div>
      </div>
    </Component>
  );
}

export function CardHeader({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`flex flex-col sm:flex-row sm:items-center justify-between mb-6 md:mb-8 gap-4 w-full ${className}`}>
      {children}
    </div>
  );
}

export function CardTag({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <span className={`inline-flex items-center justify-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-[10px] md:text-xs font-bold text-black/60 dark:text-white/60 tracking-widest uppercase shrink-0 ${className}`}>
      {children}
    </span>
  );
}
