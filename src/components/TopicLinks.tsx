import type { Locale } from '@/i18n/routing';
import { getTopic } from '@/lib/topics';

type Group = { title: string; items: string[] };

const GROUPS: Record<Locale, Group[]> = {
  es: [
    {
      title: 'Conocer y llegar',
      items: ['historia-significado', 'como-llegar', 'fotos'],
    },
    {
      title: 'Comer y beber cerca',
      items: ['comer', 'desayunar-cerca-sol', 'la-mallorquina', 'chocolateria-san-gines', 'tapas-cerca-sol'],
    },
    {
      title: 'Ver cerca',
      items: ['puerta-del-sol', 'kilometro-cero', 'plaza-mayor-desde-sol'],
    },
    {
      title: 'Planificar',
      items: ['sol-en-una-hora'],
    },
  ],
  en: [
    {
      title: 'Learn and arrive',
      items: ['historia-significado', 'como-llegar', 'fotos'],
    },
    {
      title: 'Eat and drink nearby',
      items: ['comer', 'desayunar-cerca-sol', 'la-mallorquina', 'chocolateria-san-gines', 'tapas-cerca-sol'],
    },
    {
      title: 'See nearby',
      items: ['puerta-del-sol', 'kilometro-cero', 'plaza-mayor-desde-sol'],
    },
    {
      title: 'Plan your visit',
      items: ['sol-en-una-hora'],
    },
  ],
  zh: [
    {
      title: '了解与到达',
      items: ['historia-significado', 'como-llegar', 'fotos'],
    },
    {
      title: '周边吃喝',
      items: ['comer', 'desayunar-cerca-sol', 'la-mallorquina', 'chocolateria-san-gines', 'tapas-cerca-sol'],
    },
    {
      title: '周边游玩',
      items: ['puerta-del-sol', 'kilometro-cero', 'plaza-mayor-desde-sol'],
    },
    {
      title: '行程安排',
      items: ['sol-en-una-hora'],
    },
  ],
};

export default function TopicLinks({ locale }: { locale: Locale }) {
  const groups = GROUPS[locale];
  const heading =
    locale === 'es' ? 'Guías para tu visita' : locale === 'en' ? 'Guides for your visit' : '为你的行程准备的导览';

  return (
    <section className="section-padding bg-[var(--bg-tertiary)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 text-center">{heading}</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5"
            >
              <h3 className="font-display text-lg font-semibold mb-3">{group.title}</h3>
              <ul className="space-y-2 text-sm">
                {group.items.map((slug) => {
                  const topic = getTopic(slug);
                  if (!topic) return null;
                  return (
                    <li key={slug}>
                      <a
                        href={`/${locale}/${slug}`}
                        className="text-[var(--text-secondary)] hover:text-[var(--accent)] hover:underline underline-offset-2"
                      >
                        {topic.title[locale]}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
