'use client';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 dark:border-zinc-800 py-10 px-6 bg-white dark:bg-black transition-colors">
      <div className="wrap flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left */}
        <div className="flex items-center gap-6 flex-wrap justify-center md:justify-start">
          <a href="#top" className="flex items-center gap-2 font-bold text-sm tracking-tight text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
            <span className="w-4 h-4 bg-black dark:bg-white rounded flex items-center justify-center text-[8px] font-extrabold text-white dark:text-black transition-colors">
              HI
            </span>
            hidirektor
          </a>

          <span className="w-px h-4 bg-gray-200 dark:bg-zinc-800" aria-hidden />

          <span className="text-xs text-gray-400 dark:text-gray-500 tracking-wide">
            © {year}
          </span>

          <span className="text-xs text-gray-400 dark:text-gray-500">
            Software Architect · İzmir
          </span>
        </div>

        {/* Right */}
        <nav className="flex items-center gap-6" aria-label="Footer links">
          {[
            { label: 'GitHub',   href: 'https://github.com/hidirektor' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/hidirektor' },
            { label: 'Medium',   href: 'https://medium.com/@hidirektor' },
            { label: 'Mail',     href: 'mailto:hidirektor@gmail.com' },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-xs text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white transition-colors tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
