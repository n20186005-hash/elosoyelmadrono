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
  const messages = (await import(`@/messages/${locale}.json`)).default;
  const baseUrl = SITE_CONFIG.baseUrl;

  const zhUrl = `${baseUrl}/zh`;
  const enUrl = `${baseUrl}/en`;
  const esUrl = `${baseUrl}/es`;
  const selfUrl =
    locale === 'zh' ? zhUrl : locale === 'en' ? enUrl : esUrl;

  const country = SITE_CONFIG.countryName[locale as 'es' | 'en' | 'zh'];
  const nearby1 = SITE_CONFIG.nearby1[locale as 'es' | 'en' | 'zh'];
  const nearby2 = SITE_CONFIG.nearby2[locale as 'es' | 'en' | 'zh'];

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
    es: `Guía oficial del visitante para ${SITE_CONFIG.attractionFullName} en ${SITE_CONFIG.cityName}, ${SITE_CONFIG.stateProvince}, ${country}.`,
    en: `Official visitor guide to ${SITE_CONFIG.attractionFullName} in ${SITE_CONFIG.cityName}, ${SITE_CONFIG.stateProvince}, ${country}.`,
    zh: `${SITE_CONFIG.attractionFullName} 官方游客指南，位于${country} ${SITE_CONFIG.stateProvince} ${SITE_CONFIG.cityName}。`,
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
      url: baseUrl,
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

  const country = SITE_CONFIG.countryName[locale as 'es' | 'en' | 'zh'];
  const nearby1 = SITE_CONFIG.nearby1[locale as 'es' | 'en' | 'zh'];
  const nearby2 = SITE_CONFIG.nearby2[locale as 'es' | 'en' | 'zh'];

  const attractionDescriptions: Record<string, string> = {
    es: `Guía completa del visitante para ${SITE_CONFIG.attractionFullName} en ${SITE_CONFIG.cityName}, ${SITE_CONFIG.stateProvince}, ${country}.`,
    en: `Comprehensive visitor guide to ${SITE_CONFIG.attractionFullName} in ${SITE_CONFIG.cityName}, ${SITE_CONFIG.stateProvince}, ${country}.`,
    zh: `${SITE_CONFIG.attractionFullName} 完整游客指南，位于${country} ${SITE_CONFIG.stateProvince} ${SITE_CONFIG.cityName}。`,
  };

  const faqItems = [
    {
      name:
        locale === 'es'
          ? `¿Dónde se encuentra ${SITE_CONFIG.attractionFullName}?`
          : locale === 'en'
            ? `Where is ${SITE_CONFIG.attractionFullName} located?`
            : `${SITE_CONFIG.attractionFullName} 位于哪里？`,
      text:
        locale === 'es'
          ? `${SITE_CONFIG.attractionFullName} se encuentra en ${SITE_CONFIG.cityName}, ${SITE_CONFIG.stateProvince}, ${country}, en la Puerta del Sol.`
          : locale === 'en'
            ? `${SITE_CONFIG.attractionFullName} is located at Puerta del Sol in ${SITE_CONFIG.cityName}, ${SITE_CONFIG.stateProvince}, ${country}.`
            : `${SITE_CONFIG.attractionFullName} 位于${country} ${SITE_CONFIG.stateProvince} ${SITE_CONFIG.cityName} 的太阳门广场。`,
    },
    {
      name:
        locale === 'es'
          ? `¿Es gratuita la visita a ${SITE_CONFIG.attractionShortName}?`
          : locale === 'en'
            ? `Is ${SITE_CONFIG.attractionShortName} free to visit?`
            : `参观 ${SITE_CONFIG.attractionShortName} 是否免费？`,
      text:
        locale === 'es'
          ? `Sí, ${SITE_CONFIG.attractionFullName} es un espacio público y es gratuito para visitar durante todo el año.`
          : locale === 'en'
            ? `Yes, ${SITE_CONFIG.attractionFullName} is a public space and is free to visit year-round.`
            : `是的，${SITE_CONFIG.attractionFullName} 是公共空间，全年免费向公众开放。`,
    },
    {
      name:
        locale === 'es'
          ? `¿Qué hay cerca de ${SITE_CONFIG.attractionFullName}?`
          : locale === 'en'
            ? `What is near ${SITE_CONFIG.attractionFullName}?`
            : `${SITE_CONFIG.attractionFullName} 附近有什么景点？`,
      text:
        locale === 'es'
          ? `Al visitar ${SITE_CONFIG.attractionFullName}, los visitantes pueden explorar fácilmente monumentos históricos y lugares de interés cercanos, incluidos ${nearby1} y ${nearby2}.`
          : locale === 'en'
            ? `When visiting ${SITE_CONFIG.attractionFullName}, visitors can easily explore surrounding historical landmarks and points of interest, including ${nearby1} and ${nearby2}.`
            : `参观 ${SITE_CONFIG.attractionFullName} 时，游客可便捷游览周边的历史地标与景点，包括 ${nearby1} 和 ${nearby2}。`,
    },
  ];

  const touristAttractionLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    '@id': `https://${SITE_CONFIG.domain}/#attraction`,
    name: SITE_CONFIG.attractionFullName,
    alternateName: [
      SITE_CONFIG.attractionShortName,
      `${SITE_CONFIG.cityName} ${SITE_CONFIG.attractionFullName}`,
    ],
    description: attractionDescriptions[locale],
    url: `https://${SITE_CONFIG.domain}`,
    image: [SITE_CONFIG.heroImage],
    isAccessibleForFree: true,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Puerta del Sol, 1, Centro',
      addressLocality: SITE_CONFIG.cityName,
      addressRegion: SITE_CONFIG.stateProvince,
      postalCode: SITE_CONFIG.postalCode,
      addressCountry: SITE_CONFIG.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE_CONFIG.latitude,
      longitude: SITE_CONFIG.longitude,
    },
    hasMap: SITE_CONFIG.mapsShareUrl,
    sameAs: [SITE_CONFIG.mapsShareUrl, SITE_CONFIG.govtTourismUrl, SITE_CONFIG.monumentaOfficialUrl],
  });

  const faqLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.name,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.text,
      },
    })),
  });

  return (
    <html lang={locale === 'zh' ? 'zh-CN' : locale === 'en' ? 'en' : 'es'} suppressHydrationWarning>
      <head>
        <link rel="canonical" href={`https://${SITE_CONFIG.domain}/${locale}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: touristAttractionLd }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: faqLd }}
        />
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
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX" crossOrigin="anonymous" />
        <meta name="google-adsense-account" content="ca-pub-XXXXXXXXXX" />
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
