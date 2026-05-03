'use client';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '2.5rem 1.75rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap' as const,
      gap: '1.25rem',
      maxWidth: '1080px',
      margin: '0 auto',
    }}>
      {/* Left */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' as const }}>
        <a
          href="#top"
          style={{
            display: 'flex', alignItems: 'center', gap: '0.4rem',
            fontWeight: 700, fontSize: '0.82rem', letterSpacing: '-0.02em',
            color: 'rgba(255,255,255,0.45)', textDecoration: 'none',
            transition: 'color 0.15s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#fafafa')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
        >
          <span style={{
            width: '16px', height: '16px',
            background: 'linear-gradient(135deg,#00d4ff,#7c3aed)',
            borderRadius: '4px', flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '0.48rem', fontWeight: 800, color: '#000',
          }}>HI</span>
          hidirektor
        </a>

        <span style={{ width: '1px', height: '14px', background: 'rgba(255,255,255,0.08)' }} aria-hidden />

        <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.02em' }}>
          © {year}
        </span>

        <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.2)' }}>
          Software Architect · İzmir 🚴
        </span>
      </div>

      {/* Right */}
      <nav style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }} aria-label="Footer links">
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
            style={{
              fontSize: '0.75rem',
              color: 'rgba(255,255,255,0.28)',
              textDecoration: 'none',
              transition: 'color 0.15s',
              letterSpacing: '0.01em',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.28)')}
          >
            {l.label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
