import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import CookieSettingsClient from './CookieSettingsClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = 'https://elosoyelmadrono.com';
  const zhUrl = `${baseUrl}/zh/cookie-settings`;
  const enUrl = `${baseUrl}/en/cookie-settings`;
  const esUrl = `${baseUrl}/es/cookie-settings`;
  const selfUrl = locale === 'zh' ? zhUrl : locale === 'en' ? enUrl : esUrl;

  const titles: Record<string, string> = {'es': 'Configuración de cookies', 'en': 'Cookie Settings', 'zh': 'Cookie 设置'};
  return {
    title: `${titles[locale]} | El Oso y el Madroño`,
    openGraph: { title: titles[locale], url: selfUrl },
    alternates: {
      canonical: selfUrl,
      languages: {
        'zh': zhUrl,
        'en': enUrl,
        'es': esUrl,
        'x-default': esUrl,
      },
    },
  };
}

export default async function CookiePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CookieSettingsClient />;
}
