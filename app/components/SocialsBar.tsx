'use client';

export default function SocialsBar() {
  return (
    <div className="border-b border-gray-100 dark:border-zinc-800 py-6">
      <div className="wrap flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-bold tracking-widest text-gray-500 dark:text-gray-400 uppercase">
        <div className="flex items-center gap-8">
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">FACEBOOK</a>
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">YOUTUBE</a>
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">TWITTER</a>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          <a href="mailto:hidirektor@gmail.com" className="hover:text-black dark:hover:text-white transition-colors">HIDIREKTOR@GMAIL.COM</a>
        </div>
      </div>
    </div>
  );
}
