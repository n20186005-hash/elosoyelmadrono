'use client';

import { useTranslations, useLocale } from 'next-intl';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';
import { useState, useEffect } from 'react';

export default function Header({ solid = false }: { solid?: boolean }) {
  const t = useTranslations('header');
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);
  const filled = scrolled || solid || menuOpen;
  const home = `/${locale}`;
  const items = [
    { label: t('gallery'), href: `${home}#gallery` },
    { label: t('reviews'), href: `${home}#reviews` },
    { label: t('map'), href: `${home}#map` },
    { label: t('nearby'), href: `${home}#nearby` },
    { label: t('guides'), href: `${home}#guides` },
    { label: t('sources'), href: `${home}/sources` },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={{ background: filled ? 'var(--bg-secondary)' : 'transparent', borderBottom: filled ? '1px solid var(--border-color)' : 'none', backdropFilter: filled ? 'blur(12px)' : 'none' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 min-h-16 flex items-center justify-between gap-3">
        <a href={home} className="font-display text-sm sm:text-lg font-semibold tracking-tight min-w-0 max-w-40 sm:max-w-none leading-tight" style={{ color: filled ? 'var(--text-primary)' : '#fff' }}>El Oso y el Madroño</a>
        <nav aria-label={t('navigation')} className="hidden lg:flex items-center gap-4">
          {items.map(item => <a key={item.href} href={item.href} className="text-sm font-medium whitespace-nowrap hover:underline underline-offset-4" style={{ color: filled ? 'var(--text-secondary)' : 'rgba(255,255,255,0.9)' }}>{item.label}</a>)}
        </nav>
        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <ThemeToggle />
          <LanguageToggle />
          <button type="button" aria-label={t('menu')} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 rounded-md" style={{ color: filled ? 'var(--text-primary)' : '#fff' }}>
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d={menuOpen ? 'M6 6l12 12M6 18L18 6' : 'M3 6h18M3 12h18M3 18h18'} /></svg>
          </button>
        </div>
      </div>
      {menuOpen && <nav id="mobile-navigation" aria-label={t('navigation')} className="lg:hidden grid grid-cols-2 gap-2 px-4 pb-4" style={{ background: 'var(--bg-secondary)' }}>
        {items.map(item => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="rounded-lg border border-[var(--border-color)] px-4 py-3 text-sm" style={{ color: 'var(--text-primary)' }}>{item.label}</a>)}
      </nav>}
    </header>
  );
}
