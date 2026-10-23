import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/config/site';
import { locales } from '@/i18n/routing';
import { TOPIC_SLUGS } from '@/lib/topics';

const domain = SITE_CONFIG.domain;
const base = `https://${domain}`;

function alt(p: string) {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = `${base}/${l}${p}`;
  languages['x-default'] = `${base}/es${p}`;
  return { languages };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ['', '/privacy-policy', '/terms-of-service', '/cookie-settings'];
  const urls: MetadataRoute.Sitemap = [];

  for (const p of staticPaths) {
    for (const locale of locales) {
      urls.push({
        url: `${base}/${locale}${p}`,
        lastModified: new Date(),
        alternates: alt(p),
        priority: p === '' ? 1 : 0.4,
      });
    }
  }

  for (const slug of TOPIC_SLUGS) {
    const p = `/${slug}`;
    for (const locale of locales) {
      urls.push({
        url: `${base}/${locale}${p}`,
        lastModified: new Date(),
        alternates: alt(p),
        priority: 0.7,
      });
    }
  }

  return urls;
}
