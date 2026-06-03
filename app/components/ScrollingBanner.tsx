'use client';

import {useLanguage} from '../context/LanguageContext';

const icons: Record<string, string> = {
  'SCALABLE SYSTEMS':       '⚡',
  'REAL-TIME IoT':          '🌐',
  'FULL-STACK ARCHITECTURE':'🏗️',
  'CLOUD DEPLOYMENTS':      '☁️',
  'MACHINE LEARNING':       '🤖',
  // TR fallbacks
  'ÖLÇEKLENEBILIR SİSTEMLER': '⚡',
  'GERÇEK ZAMANLI IoT':        '🌐',
  'TAM YIĞIN MİMARİSİ':        '🏗️',
  'BULUT DAĞITIMI':             '☁️',
  'MAKİNE ÖĞRENMESİ':          '🤖',
  // DE fallbacks
  'SKALIERBARE SYSTEME':        '⚡',
  'ECHTZEIT-IoT':               '🌐',
  'FULL-STACK-ARCHITEKTUR':     '🏗️',
  'CLOUD-DEPLOYMENTS':          '☁️',
  'MASCHINELLES LERNEN':        '🤖',
};

function getIcon(text: string) {
  return icons[text.toUpperCase()] ?? '✦';
}

export default function ScrollingBanner() {
  const { t } = useLanguage();

  const rowA = [
    t('banner.item1'),
    t('banner.item2'),
    t('banner.item3'),
    t('banner.item4'),
    t('banner.item5'),
  ];

  // Second row is reversed order for the reverse-scroll direction
  const rowB = [...rowA].reverse();

  const repeat = (arr: string[]) => [...arr, ...arr, ...arr, ...arr];

  return (
    <div className="banner-wrapper">
      {/* ── Gradient edges (fade out) ── */}
      <div className="banner-fade-left" />
      <div className="banner-fade-right" />

      {/* ── Row 1 — scrolls LEFT ── */}
      <div className="banner-track banner-track--left">
        {repeat(rowA).map((text, i) => (
          <BannerPill key={i} text={text} variant="primary" />
        ))}
      </div>

      {/* ── Row 2 — scrolls RIGHT ── */}
      <div className="banner-track banner-track--right">
        {repeat(rowB).map((text, i) => (
          <BannerPill key={i} text={text} variant="secondary" />
        ))}
      </div>
    </div>
  );
}

function BannerPill({ text, variant }: { text: string; variant: 'primary' | 'secondary' }) {
  const isPrimary = variant === 'primary';
  return (
    <div className={`banner-pill ${isPrimary ? 'banner-pill--primary' : 'banner-pill--secondary'}`}>
      <span className="banner-pill-icon">{getIcon(text)}</span>
      <span className="banner-pill-text">{text}</span>
    </div>
  );
}
