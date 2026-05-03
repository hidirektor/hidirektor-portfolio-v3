"use client";
import {useEffect, useState} from "react";

const navItems = [
  { href: "#about",      label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#tech",       label: "Tech" },
  { href: "#projects",   label: "Projects" },
  { href: "#writing",    label: "Writing" },
  { href: "#favorites",  label: "Favorites" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className="header" style={{ borderBottomColor: scrolled ? "#1f1f1f" : "transparent" }}>
      <div className="header-inner">
        <a href="#top" className="logo">
          <span className="logo-dot" aria-hidden />
          hidirektor
        </a>
        <nav aria-label="Main navigation">
          <ul className="nav">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="mailto:hidirektor@gmail.com" className="header-mail">
          hidirektor@gmail.com
        </a>
      </div>
    </header>
  );
}
