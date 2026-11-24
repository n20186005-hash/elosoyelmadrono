import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { SITE_CONFIG } from '@/config/site';
import { routing, locales } from '@/i18n/routing';
import { TOPIC_SLUGS, getTopic } from '@/lib/topics';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TopicPage from '@/components/TopicPage';

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

  const currentLocale = locale as (typeof locales)[number];
  const title = data.metaTitle[currentLocale] ?? data.metaTitle.es;
  const description = data.description[currentLocale] ?? data.description.es;
  const photo = data.place?.photo;
  const path = `/${locale}/${topic}`;
  const canonical = `https://${SITE_CONFIG.domain}${path}`;
  const languages: Record<string, string> = {
    'es': `https://${SITE_CONFIG.domain}/es/${topic}`,
    'en': `https://${SITE_CONFIG.domain}/en/${topic}`,
    'zh': `https://${SITE_CONFIG.domain}/zh/${topic}`,
    'x-default': `https://${SITE_CONFIG.domain}/es/${topic}`,
  };

  return {
    title,
    description,
    alternates: { canonical, languages },
    robots: { index: true, follow: true },
    openGraph: {
      type: 'website',
      url: canonical,
      title,
      description,
      siteName: SITE_CONFIG.siteName,
      ...(photo && { images: [{ url: photo, alt: data.title[currentLocale] }] }),
      locale: locale === 'zh' ? 'zh_CN' : locale === 'en' ? 'en_US' : 'es_ES',
    },
    ...(photo && { twitter: { card: 'summary_large_image', title, description, images: [photo] } }),
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
      <Header solid={!data.place} />
      <TopicPage topic={data} locale={locale as (typeof locales)[number]} />
      <Footer />
    </>
  );
}
