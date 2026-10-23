import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { SITE_CONFIG } from '@/config/site';
import { routing, locales } from '@/i18n/routing';
import { TOPIC_SLUGS, getTopic } from '@/lib/topics';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TopicPage from '@/components/TopicPage';

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    TOPIC_SLUGS.map((slug) => ({ locale, topic: slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; topic: string }>;
}): Promise<Metadata> {
  const { locale, topic } = await params;
  const data = getTopic(topic);
  if (!data) return {};

  const path = `/${locale}/${topic}`;
  const canonical = `https://${SITE_CONFIG.domain}${path}`;
  const languages: Record<string, string> = {
    'es-ES': `https://${SITE_CONFIG.domain}/es/${topic}`,
    'en-US': `https://${SITE_CONFIG.domain}/en/${topic}`,
    'zh-CN': `https://${SITE_CONFIG.domain}/zh/${topic}`,
    'x-default': `https://${SITE_CONFIG.domain}/es/${topic}`,
  };

  return {
    title: data.metaTitle[locale as keyof typeof data.metaTitle] ?? data.metaTitle.es,
    description: data.description[locale as keyof typeof data.description] ?? data.description.es,
    alternates: { canonical, languages },
    robots: { index: true, follow: true },
    openGraph: {
      type: 'website',
      url: canonical,
      title: data.metaTitle[locale as keyof typeof data.metaTitle] ?? data.metaTitle.es,
      description: data.description[locale as keyof typeof data.description] ?? data.description.es,
      siteName: SITE_CONFIG.siteName,
      locale: locale === 'zh' ? 'zh_CN' : locale === 'en' ? 'en_US' : 'es_ES',
    },
  };
}

export default async function TopicRoute({
  params,
}: {
  params: Promise<{ locale: string; topic: string }>;
}) {
  const { locale, topic } = await params;
  const data = getTopic(topic);
  if (!data) notFound();

  setRequestLocale(locale);

  return (
    <>
      <Header />
      <TopicPage topic={data} locale={locale as (typeof locales)[number]} />
      <Footer />
    </>
  );
}
