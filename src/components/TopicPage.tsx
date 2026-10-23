import { setRequestLocale } from 'next-intl/server';
import { SITE_CONFIG } from '@/config/site';
import type { Locale } from '@/i18n/routing';
import RichInline from '@/components/RichInline';
import { getTopic, type TopicContent } from '@/lib/topics';

export default function TopicPage({
  topic,
  locale,
}: {
  topic: TopicContent;
  locale: Locale;
}) {
  setRequestLocale(locale);

  const homePath = `/${locale}`;
  const topicPath = `/${locale}/${topic.slug}`;
  const canonical = `https://${SITE_CONFIG.domain}${topicPath}`;
  const domain = `https://${SITE_CONFIG.domain}`;

  const breadcrumbList = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: SITE_CONFIG.attractionFullName,
        item: `${domain}${homePath}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: topic.title[locale],
        item: canonical,
      },
    ],
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: topic.faq.map((f) => ({
      '@type': 'Question',
      name: f.question[locale],
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer[locale].replace(/\*\*/g, ''),
      },
    })),
  };

  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${domain}#webpage-${topic.slug}`,
    url: canonical,
    name: topic.metaTitle[locale],
    description: topic.description[locale],
    inLanguage: locale,
    about: { '@id': `${domain}#attraction` },
    isPartOf: { '@id': `${domain}#website` },
  };

  const faqHeading =
    locale === 'es' ? 'Preguntas frecuentes' : locale === 'en' ? 'Frequently asked questions' : '常见问题';
  const relatedHeading =
    locale === 'es' ? 'También te puede interesar' : locale === 'en' ? 'You may also like' : '你可能还感兴趣';

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
      />

      <main>
        <section className="section-padding">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <nav aria-label="Breadcrumb" className="text-sm mb-6 text-[var(--text-muted)]">
              <a href={homePath} className="underline-offset-2 hover:underline">
                {SITE_CONFIG.attractionFullName}
              </a>
              <span aria-hidden="true"> / </span>
              <span>{topic.title[locale]}</span>
            </nav>

            <h1 className="font-display text-3xl sm:text-4xl font-bold mb-4">{topic.title[locale]}</h1>
            <p className="text-lg leading-relaxed text-[var(--text-secondary)] mb-10">
              <RichInline text={topic.intro[locale]} />
            </p>

            {topic.sections.map((section) => (
              <section key={section.id ?? section.title[locale]} className="mb-8">
                <h2 className="font-display text-2xl font-semibold mb-3 mt-10">
                  {section.title[locale]}
                </h2>
                <p className="leading-relaxed text-[var(--text-secondary)]">
                  <RichInline text={section.content[locale]} />
                </p>
              </section>
            ))}

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-3 mt-10">{faqHeading}</h2>
              <div className="divide-y divide-[var(--border-color)] border-y border-[var(--border-color)]">
                {topic.faq.map((f, i) => (
                  <details key={i} className="py-3">
                    <summary className="cursor-pointer font-medium text-[var(--text-primary)]">
                      {f.question[locale]}
                    </summary>
                    <p className="pt-3 leading-relaxed text-[var(--text-secondary)]">
                      <RichInline text={f.answer[locale]} />
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {topic.related.length > 0 && (
              <section className="mb-8">
                <h2 className="font-display text-2xl font-semibold mb-3 mt-10">{relatedHeading}</h2>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {topic.related.map((slug) => {
                    const rel = getTopic(slug);
                    if (!rel) return null;
                    return (
                      <li key={slug}>
                        <a
                          href={`/${locale}/${slug}`}
                          className="block rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] px-4 py-3 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                        >
                          {rel.title[locale]}
                        </a>
                      </li>
                    );
                  })}
                </ul>
                <p className="mt-6 text-sm text-[var(--text-muted)]">{topic.updated[locale]}</p>
              </section>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
