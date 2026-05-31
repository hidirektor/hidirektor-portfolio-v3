'use client';

import Link from 'next/link';
import SettingsWidget from './SettingsWidget';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 pt-16 pb-4">
      <div className="wrap flex items-start justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-medium tracking-tight border-b-2 border-black dark:border-white pb-1">
          it&apos;s me
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-start gap-12">
          <Link href="#projects" className="group flex flex-col items-start relative w-[170px]">
            {/* Top Border & Title row */}
            <div className="w-full flex items-center justify-between border-t border-black dark:border-white pt-4 mb-2">
              <span className="font-bold text-[16px]">My Projects</span>
              <span className="text-[12px] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
            </div>
            {/* Subtitle */}
            <span className="text-[12px] text-gray-500 leading-tight">
              See all of nice project<br/>i have done.
            </span>
          </Link>
          
          <Link href="#about" className="group flex flex-col items-start relative w-[160px]">
            <div className="w-full flex items-center justify-between border-t border-black dark:border-white pt-4 mb-2">
              <span className="font-bold text-[16px]">About Me</span>
              <span className="text-[12px] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
            </div>
            <span className="text-[12px] text-gray-500 leading-tight">
              Learn about my self<br/>what i do
            </span>
          </Link>

          <Link href="#contact" className="group flex flex-col items-start relative w-[180px]">
            <div className="w-full flex items-center justify-between border-t border-black dark:border-white pt-4 mb-2">
              <span className="font-bold text-[16px]">Contact me</span>
              <span className="text-[12px] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
            </div>
            <span className="text-[12px] text-gray-500 leading-tight">
              hidirektor@gmail.com
            </span>
          </Link>
        </nav>
      </div>

      <SettingsWidget />
    </header>
  );
}
