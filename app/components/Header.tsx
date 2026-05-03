"use client";
import {useEffect, useState} from "react";

const navItems = [
  { href: "#about",       label: "About" },
  { href: "#experience",  label: "Experience" },
  { href: "#tech",        label: "Tech Stack" },
  { href: "#projects",    label: "Projects" },
  { href: "#writing",     label: "Writing" },
  { href: "#favorites",   label: "Favorites" },
  { href: "#contact",     label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="header"
      style={{
        boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.4)" : "none",
      }}
    >
      <div className="header-inner">
        {/* Logo */}
        <a href="#top" className="header-logo">
          <span className="header-logo-dot" aria-hidden />
          <span className="header-logo-text">
            HI<span>D</span>IREKTOR
          </span>
        </a>

        {/* Nav */}
        <nav aria-label="Main navigation">
          <ul className="header-nav">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Email shortcut */}
        <a
          href="mailto:hidirektor@gmail.com"
          className="btn btn-outline"
          style={{ fontSize: "0.78rem", padding: "0.5rem 1.1rem" }}
        >
          hidirektor@gmail.com
        </a>
      </div>
    </header>
  );
}
