import type { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { SITE_CONFIG } from '@/config/site';
import { locales, type Locale } from '@/i18n/routing';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const copy = {
  es: { title: 'Fuentes y recursos para tu visita', description: 'Enlaces de patrimonio, transporte y establecimientos para organizar una visita al Oso y el Madroño y al centro de Madrid.', heritage: 'Historia y patrimonio', transport: 'Transportes y estaciones', food: 'Pastelerías, tabernas y mercado', photos: 'Fotografías', photoText: 'Las fotografías originales de la escultura se conservan en la galería. Cada fotografía de los lugares cercanos lleva su propia fuente y leyenda en la página de la visita.', updated: 'Actualizado el 27 de noviembre de 2026', home: 'Volver al inicio', rating: 'La valoración 4.6 (9,174 reseñas) corresponde a la ficha de Google Maps facilitada el 23 de octubre de 2026.' },
  en: { title: 'Sources and resources for your visit', description: 'Heritage, transport and venue links for planning a visit to the bear and strawberry tree and central Madrid.', heritage: 'History and heritage', transport: 'Transport and stations', food: 'Pastry shops, taverns and market', photos: 'Photographs', photoText: 'The original statue photographs remain in the gallery. Each nearby-place photograph has its own source and caption on the relevant visit page.', updated: 'Updated 27 November 2026', home: 'Back to home', rating: 'The 4.6 rating (9,174 reviews) is the Google Maps snapshot supplied on 23 October 2026.' },
  zh: { title: '资料来源与出行资源', description: '查看熊与草莓树雕像及马德里市中心的历史、交通和店家资料，安排周边步行游览。', heritage: '历史与文化遗产', transport: '交通与车站', food: '糕点店、酒馆与市场', photos: '图片说明', photoText: '雕像原有实景照片保留在图集中。周边景点照片的来源与图注，分别列在对应游览页面。', updated: '更新于2026年11月27日', home: '返回首页', rating: '评分4.6（9,174条评价）采用2026年10月23日提供的Google地图快照。' },
};
const groups = [
  { key: 'heritage' as const, links: [
    ['El Oso y el Madroño · Madrid Turismo', 'https://www.esmadrid.com/informacion-turistica/oso-madrono'],
    ['Puerta del Sol · Madrid Turismo', 'https://www.esmadrid.com/informacion-turistica/puerta-del-sol'],
    ['Monumenta Madrid', SITE_CONFIG.monumentaOfficialUrl],
    ['Memoria de Madrid', 'https://www.memoriademadrid.es/'],
    ['Comunidad de Madrid', 'https://www.comunidad.madrid/'],
    ['Spain.info', 'https://www.spain.info/'],
  ] },
  { key: 'transport' as const, links: [
    ['Aena · Metro Madrid-Barajas', 'https://www.aena.es/es/adolfo-suarez-madrid-barajas/como-llegar/metro.html'],
    ['CRTM · Nuevos Ministerios (L6, L8, L10)', 'https://www.crtm.es/tu-transporte-publico/metro/estaciones/4_120/'],
    ['CRTM · Tribunal (L1, L10)', 'https://www.crtm.es/tu-transporte-publico/metro/estaciones/4_10'],
    ['CRTM · Metro', 'https://www.crtm.es/tu-transporte-publico/metro/planos/'],
    ['Renfe · Cercanías Madrid', 'https://www.renfe.com/es/es/cercanias/cercanias-madrid'],
  ] },
  { key: 'food' as const, links: [
    ['La Mallorquina · Puerta del Sol, 8', 'https://pastelerialamallorquina.es/tiendas/puerta-del-sol/'],
    ['La Mallorquina · Madrid Turismo', 'https://www.esmadrid.com/compras/la-mallorquina'],
    ['Chocolatería San Ginés', 'https://chocolateriasangines.com/'],
    ['Casa Labra · Madrid Turismo', 'https://www.esmadrid.com/restaurantes/casa-labra'],
    ['Mercado de San Miguel', 'https://mercadodesanmiguel.es/'],
    ['Mercado de San Miguel · 26/02/2026', 'https://mercadodesanmiguel.es/reapertura-del-mercado-de-san-miguel-tras-las-obras-de-conservacion/'],
  ] },
];
export function generateStaticParams() { return locales.map(locale => ({ locale })); }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const c = copy[locale as Locale];
  const url = `${SITE_CONFIG.baseUrl}/${locale}/sources`;
  return { title: `${c.title} | El Oso y el Madroño`, description: c.description, alternates: { canonical: url, languages: { es: `${SITE_CONFIG.baseUrl}/es/sources`, en: `${SITE_CONFIG.baseUrl}/en/sources`, zh: `${SITE_CONFIG.baseUrl}/zh/sources`, 'x-default': `${SITE_CONFIG.baseUrl}/es/sources` } }, openGraph: { title: c.title, description: c.description, url } };
}
export default async function SourcesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = copy[locale as Locale];
  const t = await getTranslations('footer');
  return <><Header solid /><main className="section-padding"><div className="max-w-5xl mx-auto px-4 sm:px-6 pt-20">
    <a href={`/${locale}`} className="text-sm underline underline-offset-4 text-[var(--accent)]">{c.home}</a>
    <h1 className="font-display text-3xl sm:text-4xl font-semibold mt-6 mb-4">{c.title}</h1>
    <p className="text-lg text-[var(--text-secondary)] max-w-3xl">{c.description}</p>
    <p className="text-sm text-[var(--text-muted)] mt-4">{c.updated}</p><p className="text-sm text-[var(--text-muted)] mt-2">{c.rating}</p>
    <div className="grid md:grid-cols-2 gap-6 my-10">{groups.map(group => <section key={group.key} className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-6">
      <h2 className="font-display text-xl font-semibold mb-4">{c[group.key]}</h2>
      <ul className="space-y-3">{group.links.map(([name, url]) => <li key={url}><a href={url} target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] underline underline-offset-4 break-words">{name}</a></li>)}</ul>
    </section>)}<section className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-6"><h2 className="font-display text-xl font-semibold mb-4">{c.photos}</h2><p className="text-[var(--text-secondary)] leading-relaxed">{c.photoText}</p><p className="text-sm text-[var(--text-muted)] mt-4">{t('imageCopyright')}</p></section></div>
  </div></main><Footer /></>;
}
