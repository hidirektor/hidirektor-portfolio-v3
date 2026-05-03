'use client';

import {useCallback, useEffect, useState} from 'react';

const NAV = [
  { href: '#about',      label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#tech',       label: 'Tech' },
  { href: '#projects',   label: 'Projects' },
  { href: '#writing',    label: 'Writing' },
  { href: '#contact',    label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active,   setActive]   = useState('');
  const [open,     setOpen]     = useState(false);

  const tick = useCallback(() => {
    const y   = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    setScrolled(y > 60);
    setProgress(max > 0 ? y / max : 0);
    let cur = '';
    for (const n of NAV) {
      const el = document.getElementById(n.href.slice(1));
      if (el && el.getBoundingClientRect().top <= 96) cur = n.href;
    }
    setActive(cur);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', tick, { passive: true });
    tick();
    return () => window.removeEventListener('scroll', tick);
  }, [tick]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      {/* ── thin progress line at very top ───────────────────── */}
      <div
        aria-hidden
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, height: '1px',
          zIndex: 300,
          background: 'linear-gradient(90deg,#00d4ff,#7c3aed)',
          transformOrigin: 'left',
          transform: `scaleX(${progress})`,
          transition: 'transform 0.08s linear',
        }}
      />

      {/* ── floating pill header ──────────────────────────────── */}
      <header
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: scrolled ? '0 1.5rem' : '0 1.5rem',
          height: '60px',
          transition: 'background 0.4s, border-color 0.4s, backdrop-filter 0.4s',
          background: scrolled ? 'rgba(2,2,2,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(18px) saturate(180%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(18px) saturate(180%)' : 'none',
          borderBottom: `1px solid ${scrolled ? 'rgba(255,255,255,0.07)' : 'transparent'}`,
        }}
      >
        {/* Logo */}
        <a
          href="#top"
          onClick={() => setOpen(false)}
          style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            fontWeight: 700, fontSize: '0.875rem', letterSpacing: '-0.03em',
            color: '#fafafa', textDecoration: 'none', userSelect: 'none',
          }}
        >
          <span style={{
            width: '22px', height: '22px',
            background: 'linear-gradient(135deg,#00d4ff 0%,#7c3aed 100%)',
            borderRadius: '6px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '0.65rem', fontWeight: 800, color: '#000', letterSpacing: 0,
            flexShrink: 0,
          }}>HI</span>
          hidirektor
        </a>

        {/* Desktop nav — floating pill centered */}
        <nav
          style={{
            display: 'flex', alignItems: 'center', gap: '0.125rem',
            background: scrolled ? 'rgba(255,255,255,0.04)' : 'transparent',
            border: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
            borderRadius: '999px',
            padding: '0.3rem',
            transition: 'all 0.4s',
          }}
          className="hdr-desknav"
          aria-label="Main navigation"
        >
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              style={{
                fontSize: '0.75rem',
                padding: '0.3rem 0.75rem',
                borderRadius: '999px',
                color: active === n.href ? '#fafafa' : 'rgba(255,255,255,0.4)',
                background: active === n.href ? 'rgba(255,255,255,0.09)' : 'transparent',
                transition: 'all 0.2s',
                textDecoration: 'none',
                letterSpacing: '0.01em',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                if (active !== n.href)
                  (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.75)';
              }}
              onMouseLeave={e => {
                if (active !== n.href)
                  (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.4)';
              }}
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Availability pill */}
          <a
            href="mailto:hidirektor@gmail.com"
            style={{
              display: 'flex', alignItems: 'center', gap: '0.4rem',
              fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '999px',
              padding: '0.3rem 0.75rem',
              textDecoration: 'none',
              transition: 'color 0.15s, border-color 0.15s',
              whiteSpace: 'nowrap',
            }}
            className="hdr-avail"
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.color = 'rgba(255,255,255,0.9)';
              el.style.borderColor = 'rgba(255,255,255,0.18)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.color = 'rgba(255,255,255,0.5)';
              el.style.borderColor = 'rgba(255,255,255,0.08)';
            }}
          >
            <span style={{
              width: '5px', height: '5px', borderRadius: '50%',
              background: '#22c55e', flexShrink: 0,
              animation: 'hdr-blink 2.5s ease infinite',
            }} />
            Available
          </a>

          {/* Burger */}
          <button
            onClick={() => setOpen(v => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="hdr-burger"
            style={{
              display: 'none',
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '6px', borderRadius: '6px', gap: '5px',
              flexDirection: 'column', alignItems: 'center',
            }}
          >
            <span style={{
              display: 'block', width: '18px', height: '1.5px',
              background: '#fafafa', borderRadius: '2px',
              transition: 'transform 0.28s, opacity 0.2s',
              transform: open ? 'translateY(6.5px) rotate(45deg)' : 'none',
            }} />
            <span style={{
              display: 'block', width: '18px', height: '1.5px',
              background: '#fafafa', borderRadius: '2px',
              transition: 'opacity 0.2s, transform 0.2s',
              opacity: open ? 0 : 1,
            }} />
            <span style={{
              display: 'block', width: '18px', height: '1.5px',
              background: '#fafafa', borderRadius: '2px',
              transition: 'transform 0.28s, opacity 0.2s',
              transform: open ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
            }} />
          </button>
        </div>
      </header>

      {/* ── Mobile full-screen menu ───────────────────────────── */}
      <div
        aria-hidden={!open}
        style={{
          position: 'fixed', inset: 0, zIndex: 190,
          background: '#010101',
          display: 'flex', flexDirection: 'column',
          padding: '80px 2rem 3rem',
          transform: open ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.38s cubic-bezier(0.4,0,0.2,1)',
          pointerEvents: open ? 'auto' : 'none',
        }}
      >
        <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '0' }}>
          {NAV.map((n, i) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              style={{
                fontSize: 'clamp(2rem,8vw,3.5rem)',
                fontWeight: 700,
                letterSpacing: '-0.04em',
                color: active === n.href ? '#fafafa' : 'rgba(255,255,255,0.18)',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                padding: '0.5rem 0',
                textDecoration: 'none',
                transition: 'color 0.15s',
                display: 'flex', alignItems: 'baseline', gap: '1rem',
                opacity: open ? 1 : 0,
                transform: open ? 'none' : 'translateY(10px)',
                transitionDelay: open ? `${i * 45}ms` : '0ms',
              }}
            >
              <span style={{
                fontSize: '0.65rem', fontWeight: 400,
                color: 'rgba(255,255,255,0.2)', letterSpacing: '0.08em',
                minWidth: '1.5rem',
              }}>0{i + 1}</span>
              {n.label}
            </a>
          ))}
        </nav>
        <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)', marginTop: '2rem' }}>
          hidirektor@gmail.com
        </p>
      </div>

      <style>{`
        @keyframes hdr-blink {
          0%,100%{ opacity:1; } 50%{ opacity:0.4; }
        }
        @media (max-width: 768px) {
          .hdr-desknav { display: none !important; }
          .hdr-avail   { display: none !important; }
          .hdr-burger  { display: flex !important; }
        }
      `}</style>
    </>
  );
}
