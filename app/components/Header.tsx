'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 pt-8 pb-4">
      <div className="wrap flex items-start justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight">
          it's me
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-start gap-12">
          <Link href="#projects" className="group flex flex-col items-start relative">
            <span className="font-semibold text-[15px] flex items-center gap-1">
              My Projects
              <span className="text-xs transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
            </span>
            <span className="text-[11px] text-gray-500 max-w-[120px] leading-tight mt-1">
              See all of nice project I have done.
            </span>
          </Link>
          
          <Link href="#about" className="group flex flex-col items-start relative">
            <span className="font-semibold text-[15px] flex items-center gap-1">
              About Me
              <span className="text-xs transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
            </span>
            <span className="text-[11px] text-gray-500 max-w-[120px] leading-tight mt-1">
              Learn about my self what i do
            </span>
          </Link>

          <Link href="#contact" className="group flex flex-col items-start relative">
            <span className="font-semibold text-[15px] flex items-center gap-1">
              Contact me
              <span className="text-xs transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
            </span>
            <span className="text-[11px] text-gray-500 max-w-[140px] leading-tight mt-1">
              hidirektor@gmail.com
            </span>
          </Link>
        </nav>
        
        {/* Mobile menu could go here, omitting for simplicity of desktop mockup */}
      </div>
    </header>
  );
}
