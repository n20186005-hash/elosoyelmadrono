import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
import { TOPIC_SLUGS } from '@/lib/topics';

const topicPathnames = Object.fromEntries(
  TOPIC_SLUGS.map((slug) => [`/${slug}`, `/${slug}`]),
) as Record<string, string>;

export const routing = defineRouting({
  locales: ['zh', 'en', 'es'],
  defaultLocale: 'es',
  localePrefix: {
    mode: 'always',
  },
  pathnames: {
    '/': '/',
    '/privacy-policy': '/privacy-policy',
    '/terms-of-service': '/terms-of-service',
    '/cookie-settings': '/cookie-settings',
    ...topicPathnames,
  },
});

export const locales = routing.locales;

export type Locale = (typeof routing.locales)[number];

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
