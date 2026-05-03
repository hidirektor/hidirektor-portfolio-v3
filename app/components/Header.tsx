import Link from "next/link";

const menuItems = [
  { href: "#top", label: "Home" },
  { href: "#who", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#resources", label: "Resources" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-[1180px] items-center justify-between px-6 lg:px-10">
        <Link href="#top" className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-sky-400" aria-hidden />
          <span className="text-sm font-semibold tracking-[0.22em] text-zinc-950">
            ELOQWNT
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[13px] font-medium tracking-[0.08em] text-zinc-600 transition-colors hover:text-zinc-950"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-zinc-950 px-5 py-2 text-xs font-semibold tracking-[0.08em] text-white transition-colors hover:bg-zinc-800"
        >
          Let&apos;s chat
        </a>
      </div>
    </header>
  );
}
