import { useTranslations, useLocale } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  return (
    <footer className="py-10 px-4 sm:px-6" style={{ background: 'var(--bg-tertiary)', borderTop: '1px solid var(--border-color)' }}>
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-start gap-6">
        <div className="max-w-2xl text-sm space-y-3" style={{ color: 'var(--text-muted)' }}>
          <p>{t('rights')}</p>
          <p className="text-xs leading-relaxed">{t('disclaimer')}</p>
        </div>
        <nav aria-label={t('legalNavigation')} className="flex flex-wrap gap-x-5 gap-y-3 text-sm shrink-0" style={{ color: 'var(--text-secondary)' }}>
          <a href={`/${locale}/privacy-policy`} className="hover:underline">{t('privacy')}</a>
          <a href={`/${locale}/terms-of-service`} className="hover:underline">{t('terms')}</a>
          <a href={`/${locale}/cookie-settings`} className="hover:underline">{t('cookies')}</a>
        </nav>
      </div>
    </footer>
  );
}
