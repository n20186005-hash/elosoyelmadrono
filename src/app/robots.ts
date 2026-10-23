import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/config/site';

const base = `https://${SITE_CONFIG.domain}`;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
