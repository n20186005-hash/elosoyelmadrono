import type { ReactNode } from 'react';
import type { Locale } from '@/i18n/routing';
import type { TopicContent } from '@/lib/topics';
import editorial from '@/lib/nearby-editorial.json';

export const nearbyUi = {
  es: { details: 'Datos para la visita', address: 'Dirección', area: 'Zona', time: 'Tiempo sugerido', walk: 'Recorrido a pie', map: 'Mapa y dirección', openMap: 'Abrir ficha y reseñas en Google Maps', nearby: 'Volver a las visitas cercanas', source: 'Fuentes para esta visita', record: 'Historia y patrimonio', visitor: 'Información de visita', photo: 'Fuente de la imagen', hours: 'Horarios y acceso', price: 'Entradas y precios', getting: 'Cómo llegar', photoSpots: 'Dónde hacer fotos', stay: 'Dónde alojarse', photos: 'Fotografías', reviews: 'Opiniones de visitantes' },
  en: { details: 'Visitor information', address: 'Address', area: 'Area', time: 'Suggested time', walk: 'Walking route', map: 'Map and address', openMap: 'Open the place and reviews in Google Maps', nearby: 'Return to nearby places', source: 'Sources for this visit', record: 'Heritage information', visitor: 'Visitor information', photo: 'Image source', hours: 'Opening and access', price: 'Tickets and admission', getting: 'Getting there', photoSpots: 'Photography viewpoints', stay: 'Where to stay', photos: 'Photographs', reviews: 'Visitor reviews' },
  zh: { details: '参观实用信息', address: '地址', area: '区域', time: '建议停留', walk: '步行路线', map: '交通指南与地图', openMap: '在 Google 地图查看景点与评价', nearby: '返回周边景点', source: '资料来源', record: '历史与景点资料', visitor: '开放与入场资料', photo: '图片来源', hours: '开放时间与参观条件', price: '门票价格', getting: '交通方式', photoSpots: '拍照机位', stay: '住宿建议', photos: '实景照片', reviews: '游客评价' },
} satisfies Record<Locale, Record<string, string>>;

function Section({ title, children, id }: { title: string; children: ReactNode; id?: string }) {
  return <section className="mb-10 sm:mb-12 scroll-mt-24" id={id}>
    <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">{title}</h2>
    <div className="leading-relaxed text-[var(--text-secondary)]">{children}</div>
  </section>;
}

export default function NearbyVisit({ topic, place, locale, mapUrl }: {
  topic: TopicContent; place: NonNullable<TopicContent['place']>; locale: Locale; mapUrl: string;
}) {
  const labels = nearbyUi[locale];
  const copy = editorial[topic.slug as keyof typeof editorial];
  const [about, history, highlights] = topic.sections;
  return <>
    <section className="mb-10 p-6 sm:p-8 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
      <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">{about.title[locale]}</h2>
      <p className="leading-relaxed mb-3">{copy.scene[locale]}</p>
      <p className="leading-relaxed text-[var(--text-secondary)]">{about.content[locale]}</p>
    </section>
    <Section title={labels.details}><dl className="grid sm:grid-cols-2 gap-4">
      {[[labels.address,place.address],[labels.area,topic.group[locale]],[labels.time,place.visit[locale]]].map(([label,value]) => <div key={label} className="rounded-xl p-5 border border-[var(--border-color)]"><dt className="font-semibold">{label}</dt><dd>{value}</dd></div>)}
    </dl></Section>
    <Section title={labels.hours} id="opening"><p>{copy.hours[locale]}</p></Section>
    <Section title={labels.price}><p>{copy.price[locale]}</p></Section>
    <Section title={labels.getting}><p>{place.walk[locale]}</p></Section>
    <Section title={history.title[locale]}><p>{history.content[locale]}</p></Section>
    <Section title={highlights.title[locale]}><p>{highlights.content[locale]}</p></Section>
    <Section title={labels.walk}><ol className="list-decimal pl-6 space-y-2">{copy.stages[locale].map(step=><li key={step}>{step}</li>)}</ol></Section>
    <Section title={labels.photoSpots}><p>{copy.photography[locale]}</p></Section>
    <Section title={labels.stay}><p>{copy.stay[locale]}</p></Section>
    <Section title={labels.photos}><figure>
      <img src={place.photo} alt={place.caption[locale]} loading="lazy" className="rounded-xl w-full max-h-[34rem] object-contain bg-[var(--bg-secondary)]" />
      <figcaption className="mt-2 text-sm text-[var(--text-muted)]">{place.caption[locale]} · <a className="underline" href={place.photoSource}>{labels.photo}</a></figcaption>
    </figure></Section>
    <Section title={labels.reviews}><a className="underline" href={mapUrl}>{labels.openMap} · {topic.title[locale]}</a></Section>
    <Section title={labels.map} id="visit-map"><p className="mb-3">{place.address} · Madrid</p><iframe title={`${labels.map} · ${place.caption[locale]}`} className="w-full h-72 rounded-xl border border-[var(--border-color)]" src={`https://maps.google.com/maps?q=${encodeURIComponent(place.mapQuery)}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><a className="inline-block mt-3 underline" href={mapUrl}>{labels.openMap}</a></Section>
    <Section title={labels.source}><p>{topic.updated[locale]}</p><div className="flex flex-wrap gap-4 mt-2"><a className="underline" href={place.source}>{labels.record}</a>{place.source!==copy.source && <a className="underline" href={copy.source}>{labels.visitor}</a>}</div></Section>
  </>;
}
