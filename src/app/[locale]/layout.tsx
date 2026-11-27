import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/config/site';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = SITE_CONFIG.baseUrl;

  const zhUrl = `${baseUrl}/zh`;
  const enUrl = `${baseUrl}/en`;
  const esUrl = `${baseUrl}/es`;
  const selfUrl =
    locale === 'zh' ? zhUrl : locale === 'en' ? enUrl : esUrl;

  const country = SITE_CONFIG.countryName[locale as 'es' | 'en' | 'zh'];

  const titles: Record<string, string> = {
    es: `${SITE_CONFIG.attractionFullName}: cómo llegar y qué ver cerca | ${SITE_CONFIG.cityName}`,
    en: `${SITE_CONFIG.attractionFullName}: How to Get There & What to See Nearby | ${SITE_CONFIG.cityName}`,
    zh: `${SITE_CONFIG.attractionFullName}（熊与草莓树雕像）: 怎么去、周边玩什么 | ${SITE_CONFIG.cityName}`,
  };
  const descriptions: Record<string, string> = {
    es: `Descubre la historia del ${SITE_CONFIG.attractionFullName}, cómo llegar a su ubicación en Puerta del Sol y dónde comer, pasear y disfrutar de ${SITE_CONFIG.cityName} a pie.`,
    en: `Discover the history of ${SITE_CONFIG.attractionFullName}, how to reach its location in Puerta del Sol, and where to eat, stroll and enjoy ${SITE_CONFIG.cityName} on foot.`,
    zh: `了解${SITE_CONFIG.attractionFullName}（熊与草莓树雕像）的历史，如何到达太阳门广场的位置，以及在哪里吃饭、散步、享受${SITE_CONFIG.cityName}。`,
  };
  const ogTitles: Record<string, string> = {
    es: `${SITE_CONFIG.attractionFullName} - Guía de viaje en ${SITE_CONFIG.cityName}`,
    en: `${SITE_CONFIG.attractionFullName} - ${SITE_CONFIG.cityName} Travel Guide`,
    zh: `${SITE_CONFIG.attractionFullName} - ${SITE_CONFIG.cityName} 旅行指南`,
  };
  const ogDescriptions: Record<string, string> = {
    es: `Guía de viaje para ${SITE_CONFIG.attractionFullName} en ${SITE_CONFIG.cityName}, ${SITE_CONFIG.stateProvince}, ${country}.`,
    en: `Travel guide to ${SITE_CONFIG.attractionFullName} in ${SITE_CONFIG.cityName}, ${SITE_CONFIG.stateProvince}, ${country}.`,
    zh: `${SITE_CONFIG.attractionFullName} 旅行指南，位于${country} ${SITE_CONFIG.stateProvince} ${SITE_CONFIG.cityName}。`,
  };
  const ogImageAlts: Record<string, string> = {
    es: `${SITE_CONFIG.attractionFullName} en ${SITE_CONFIG.cityName}`,
    en: `${SITE_CONFIG.attractionFullName} in ${SITE_CONFIG.cityName}`,
    zh: `${SITE_CONFIG.attractionFullName} 位于 ${SITE_CONFIG.cityName}`,
  };

  return {
    metadataBase: new URL(baseUrl),
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: selfUrl,
      languages: {
        'zh': zhUrl,
        'en': enUrl,
        'es': esUrl,
        'x-default': esUrl,
      },
    },
    openGraph: {
      title: ogTitles[locale],
      description: ogDescriptions[locale],
      url: selfUrl,
      siteName: SITE_CONFIG.attractionFullName,
      locale: locale === 'zh' ? 'zh_CN' : locale === 'en' ? 'en_US' : 'es_ES',
      type: 'website',
      images: [
        {
          url: SITE_CONFIG.heroImage,
          width: 1600,
          height: 900,
          alt: ogImageAlts[locale],
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitles[locale],
      description: ogDescriptions[locale],
      images: [SITE_CONFIG.heroImage],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale === 'zh' ? 'zh-CN' : locale === 'en' ? 'en' : 'es'} suppressHydrationWarning>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HXM22WWPKP" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HXM22WWPKP');
            `,
          }}
        />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#142d1c" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="El Oso y el Madroño" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function () {
                  navigator.serviceWorker.register('/sw.js').catch(function (err) {
                    console.error('SW registration failed:', err);
                  });
                });
              }
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
