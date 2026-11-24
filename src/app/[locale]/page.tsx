import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import TopicLinks from '@/components/TopicLinks';
import BasicInfo from '@/components/BasicInfo';
import HoursSection from '@/components/HoursSection';
import TicketsSection from '@/components/TicketsSection';
import InfoListSection from '@/components/InfoListSection';
import TransportSection from '@/components/TransportSection';
import RouteSection from '@/components/RouteSection';
import InfoSection from '@/components/InfoSection';
import PhotoSpotsSection from '@/components/PhotoSpotsSection';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import FAQSection from '@/components/FAQSection';
import MapEmbed from '@/components/MapEmbed';
import Footer from '@/components/Footer';
import { SITE_CONFIG } from '@/config/site';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

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
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: touristAttractionLd }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqLd }} />
      <Header />
      <main>
        <Hero />
        <Intro />
        <TopicLinks locale={locale as 'es' | 'en' | 'zh'} />
        <BasicInfo />
        <HoursSection />
        <TicketsSection />
        <InfoListSection sectionKey="amenities" />
        <InfoListSection sectionKey="parking" alternate />
        <InfoListSection sectionKey="foodDrink" />
        <InfoListSection sectionKey="lodging" alternate />
        <InfoListSection sectionKey="services" />
        <TransportSection />
        <RouteSection />
        <InfoSection />
        <PhotoSpotsSection />
        <InfoListSection sectionKey="photoEtiquette" alternate />
        <Gallery />
        <Reviews />
        <FAQSection />
        <MapEmbed />
      </main>
      <Footer />
    </>
  );
}
