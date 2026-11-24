import type { Locale } from '@/i18n/routing';
import type { TopicContent } from '@/lib/topics';

export const nearbyUi = {
  es: {
    details: 'Datos para la visita', address: 'Dirección', area: 'Zona', time: 'Tiempo sugerido',
    walk: 'Recorrido a pie', map: 'Mapa y opiniones', openMap: 'Abrir ficha y reseñas en Google Maps',
    nearby: 'Volver a las visitas cercanas', source: 'Más información', photo: 'Fuente de la imagen',
  },
  en: {
    details: 'Visitor information', address: 'Address', area: 'Area', time: 'Allow',
    walk: 'Walking route', map: 'Map and reviews', openMap: 'Open the place and reviews in Google Maps',
    nearby: 'Return to nearby places', source: 'Read more about this place', photo: 'Image source',
  },
  zh: {
    details: '参观实用信息', address: '地址', area: '区域', time: '建议停留',
    walk: '步行路线', map: '地图与评价', openMap: '在 Google 地图查看景点与评价',
    nearby: '返回周边景点', source: '景点资料', photo: '图片来源',
  },
} satisfies Record<Locale, Record<string, string>>;

export default function NearbyVisit({ place, locale, mapUrl }: {
  place: NonNullable<TopicContent['place']>;
  locale: Locale;
  mapUrl: string;
}) {
  const labels = nearbyUi[locale];
  const walkingSteps = place.walk[locale].split(locale === 'zh' ? /(?<=。)/ : /(?<=\.)\s/u);
  return (
    <>
      {place.photo && (
        <figure className="mb-8">
          {/* The source for each photograph is linked in its caption. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={place.photo} alt={place.caption[locale]} loading="lazy" className="rounded-xl w-full max-h-[34rem] object-contain bg-[var(--bg-secondary)]" />
          <figcaption className="mt-2 text-sm text-[var(--text-muted)]">
            {place.caption[locale]} · <a className="underline" href={place.photoSource}>{labels.photo}</a>
          </figcaption>
        </figure>
      )}
      <section className="mb-8">
        <h2 className="font-display text-2xl font-semibold mb-3">{labels.details}</h2>
        <dl className="divide-y divide-[var(--border-color)] border-y border-[var(--border-color)]">
          {[[labels.address, place.address], [labels.area, 'Centro, Madrid'], [labels.time, place.visit[locale]]].map(([label, value]) => (
            <div key={label} className="grid grid-cols-3 gap-3 py-2">
              <dt className="font-medium">{label}</dt>
              <dd className="col-span-2 text-[var(--text-secondary)]">{value}</dd>
            </div>
          ))}
        </dl>
        <a className="inline-block mt-3 underline underline-offset-4" href={place.source}>{labels.source}</a>
      </section>
      <section className="mb-8">
        <h2 className="font-display text-2xl font-semibold mb-3">{labels.walk}</h2>
        <ol className="list-decimal pl-6 space-y-2 text-[var(--text-secondary)]">
          {walkingSteps.filter(Boolean).map((step) => <li key={step}>{step}</li>)}
        </ol>
      </section>
      <section id="visit-map" className="mb-8 scroll-mt-24">
        <h2 className="font-display text-2xl font-semibold mb-3">{labels.map}</h2>
        <iframe
          title={`${labels.map} · ${place.caption[locale]}`}
          className="w-full h-72 rounded-xl border border-[var(--border-color)]"
          src={`https://maps.google.com/maps?q=${encodeURIComponent(place.mapQuery)}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <a className="inline-block mt-3 underline underline-offset-4" href={mapUrl}>{labels.openMap}</a>
      </section>
    </>
  );
}
