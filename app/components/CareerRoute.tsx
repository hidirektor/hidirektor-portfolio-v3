'use client';

import {useEffect, useRef, useState} from 'react';

const stops = [
  {
    id: 0,
    num: 1,
    city: 'London, UK',
    role: 'Backend Developer',
    company: 'Lebara Mobile',
    period: 'Jan 2020 – Jan 2023',
    color: '#f59e0b',
    x: 19, y: 22,
    bullets: [
      'API gateway handling 10,000+ req/min on Azure',
      'React/Redux refactor — 50% performance improvement',
    ],
  },
  {
    id: 1,
    num: 2,
    city: 'Manisa, Turkey',
    role: 'R&D Engineer',
    company: 'Önder Lift',
    period: 'May – Nov 2023',
    color: '#a78bfa',
    x: 64, y: 55,
    bullets: [
      'Optimized lift control system for ESP-XL — 25% faster processing',
      'IoT integration for remote diagnostics, 20% fewer service visits',
    ],
  },
  {
    id: 2,
    num: 3,
    city: 'Istanbul, Turkey',
    role: 'Backend Developer',
    company: 'Woma Advertising',
    period: 'Dec 2023 – Feb 2024',
    color: '#34d399',
    x: 72, y: 42,
    bullets: [
      '40% faster data processing via Angular + Node.js redesign',
      'Microservices migration with zero downtime, Jenkins CI/CD',
    ],
  },
  {
    id: 3,
    num: 4,
    city: 'Istanbul, Turkey',
    role: 'Software Team Leader',
    company: 'Woma Advertising',
    period: 'Feb – Jun 2024',
    color: '#f472b6',
    x: 73, y: 36,
    bullets: [
      'Led ML-powered mobile apps — 40% user engagement increase',
      'Reduced codebase 30% via Node.js + Angular, designed CI/CD pipeline',
    ],
  },
  {
    id: 4,
    num: 5,
    city: 'Samsun, Turkey',
    role: 'Native Mobile Developer',
    company: 'Dynamic Brain Neurotechnology',
    period: 'Aug 2024 – Mar 2025',
    color: '#38bdf8',
    x: 80, y: 26,
    bullets: [
      'Cross-platform tDCS device control apps in Java, Kotlin, Swift, SwiftUI',
      'OTA firmware update management and in-app exam system',
    ],
  },
  {
    id: 5,
    num: 6,
    city: 'İzmir, Turkey',
    role: 'Full Stack Developer',
    company: 'Werover',
    period: 'Apr – Nov 2025',
    color: '#fb923c',
    x: 60, y: 62,
    bullets: [
      'Node.js/Express backend services, Docker + GitHub Actions CI/CD',
      'AWS deployments: ECS Fargate, RDS, S3, CloudWatch',
      'Next.js SSR dashboards for real-time energy monitoring',
    ],
  },
  {
    id: 6,
    num: 7,
    city: 'İzmir, Turkey',
    role: 'Software Team Lead',
    company: 'Werover',
    period: 'Nov 2025 – Present',
    color: '#00d4ff',
    x: 59, y: 67,
    bullets: [
      'Led software team focusing on innovation and scalable system design',
      'Built and shipped impactful features for real-world energy monitoring',
      'Established engineering culture: code reviews, documentation, CI/CD',
    ],
  },
];

/* SVG path that visually connects the stops in order */
function buildPath(pts: { x: number; y: number }[]) {
  if (pts.length < 2) return '';
  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 1; i < pts.length; i++) {
    const prev = pts[i - 1];
    const curr = pts[i];
    const cx1 = prev.x + (curr.x - prev.x) * 0.5;
    const cy1 = prev.y;
    const cx2 = prev.x + (curr.x - prev.x) * 0.5;
    const cy2 = curr.y;
    d += ` C ${cx1} ${cy1}, ${cx2} ${cy2}, ${curr.x} ${curr.y}`;
  }
  return d;
}

export default function CareerRoute() {
  const [active, setActive] = useState<number>(6); // latest by default
  const [traveled, setTraveled] = useState<number>(6);
  const [animating, setAnimating] = useState(false);
  const pathRef = useRef<SVGPathElement>(null);
  const [dashLen, setDashLen] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      setDashLen(pathRef.current.getTotalLength());
    }
  }, []);

  const handleStop = (idx: number) => {
    if (animating || idx === active) return;
    setAnimating(true);
    setActive(idx);
    // animate dash offset
    setTraveled(idx);
    setTimeout(() => setAnimating(false), 700);
  };

  const current = stops[active];
  const pathD = buildPath(stops.map((s) => ({ x: s.x, y: s.y })));

  // progress ratio 0..1 based on traveled index
  const progress = dashLen > 0 ? (traveled / (stops.length - 1)) : 1;

  return (
    <div className="route-root">
      {/* ─── MAP AREA ─── */}
      <div className="route-map">
        <svg
          viewBox="0 0 100 90"
          preserveAspectRatio="xMidYMid meet"
          className="route-svg"
        >
          {/* Background grid dots */}
          <defs>
            <pattern id="grid" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse">
              <circle cx="0.5" cy="0.5" r="0.3" fill="rgba(255,255,255,0.04)" />
            </pattern>
            <filter id="glow">
              <feGaussianBlur stdDeviation="0.8" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
          <rect width="100" height="90" fill="url(#grid)" />

          {/* Full muted path */}
          <path
            d={pathD}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="0.8"
            strokeLinecap="round"
          />

          {/* Animated progress path */}
          <path
            ref={pathRef}
            d={pathD}
            fill="none"
            stroke="rgba(0,212,255,0.5)"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeDasharray={dashLen}
            strokeDashoffset={dashLen - dashLen * progress}
            style={{ transition: 'stroke-dashoffset 0.7s cubic-bezier(0.4,0,0.2,1)' }}
            filter="url(#glow)"
          />

          {/* Stop waypoints */}
          {stops.map((s, i) => {
            const isActive = active === i;
            const isPassed = i <= traveled;
            return (
              <g
                key={s.id}
                className={`route-stop-g ${isActive ? 'route-stop-g--active' : ''}`}
                onClick={() => handleStop(i)}
                style={{ cursor: 'pointer' }}
              >
                {/* Pulse ring for active */}
                {isActive && (
                  <circle
                    cx={s.x}
                    cy={s.y}
                    r="2.8"
                    fill="none"
                    stroke={s.color}
                    strokeWidth="0.5"
                    opacity="0.5"
                    className="route-pulse"
                  />
                )}
                {/* Outer circle */}
                <circle
                  cx={s.x}
                  cy={s.y}
                  r={isActive ? 2.2 : 1.8}
                  fill={isPassed ? s.color : '#1a1a1a'}
                  stroke={s.color}
                  strokeWidth="0.5"
                  style={{ transition: 'all 0.3s ease', filter: isActive ? `drop-shadow(0 0 2px ${s.color})` : 'none' }}
                />
                {/* Stage number */}
                <text
                  x={s.x}
                  y={s.y + 0.45}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="1.2"
                  fill={isPassed ? '#000' : s.color}
                  fontWeight="700"
                  style={{ pointerEvents: 'none', fontFamily: 'inherit' }}
                >
                  {s.num}
                </text>
                {/* City label — shown for active or passed */}
                {(isActive || isPassed) && (
                  <text
                    x={s.x + (s.x > 60 ? -3.5 : 3.5)}
                    y={s.y - 3}
                    textAnchor={s.x > 60 ? 'end' : 'start'}
                    fontSize="1.4"
                    fill={isActive ? s.color : 'rgba(255,255,255,0.45)'}
                    fontWeight={isActive ? '700' : '400'}
                    style={{ pointerEvents: 'none', fontFamily: 'inherit', transition: 'all 0.3s' }}
                  >
                    {s.city}
                  </text>
                )}
              </g>
            );
          })}
        </svg>

        {/* Stage chips row */}
        <div className="route-chips">
          {stops.map((s, i) => (
            <button
              key={s.id}
              className={`route-chip ${active === i ? 'route-chip--active' : ''} ${i <= traveled ? 'route-chip--passed' : ''}`}
              style={{ '--chip-color': s.color } as React.CSSProperties}
              onClick={() => handleStop(i)}
            >
              <span className="route-chip-num">{s.num}</span>
              <span className="route-chip-role">{s.role.split(' ').slice(-1)[0]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ─── DETAIL PANEL ─── */}
      <div className="route-detail" key={active}>
        <div className="route-detail-header">
          <div
            className="route-stage-badge"
            style={{ background: current.color, color: '#000' }}
          >
            Stage {current.num}
          </div>
          <span className="route-detail-period">{current.period}</span>
        </div>

        <div className="route-detail-location">
          <span className="route-dot" style={{ background: current.color }} />
          {current.city}
        </div>

        <h3 className="route-detail-role" style={{ color: current.color }}>
          {current.role}
        </h3>
        <p className="route-detail-company">{current.company}</p>

        <ul className="route-detail-bullets">
          {current.bullets.map((b, i) => (
            <li key={i}>
              <span className="route-bullet-icon" style={{ color: current.color }}>›</span>
              {b}
            </li>
          ))}
        </ul>

        {/* Progress bar */}
        <div className="route-progress-bar">
          <div
            className="route-progress-fill"
            style={{
              width: `${((active + 1) / stops.length) * 100}%`,
              background: current.color,
            }}
          />
        </div>
        <p className="route-progress-label">
          Stage {active + 1} of {stops.length} · {active === stops.length - 1 ? 'Current Position 🚴' : 'Completed ✓'}
        </p>
      </div>
    </div>
  );
}
