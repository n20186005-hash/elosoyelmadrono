# #68 El Oso y el Madroño — 2026-11-27

Repository: n20186005-hash/elosoyelmadrono. Production baseline: 20d45ec5f2a305248bc01db7cd111e22062196a7. Work branch: codex/68-low-impressions-fixes-20261127. Date zone: Asia/Shanghai.

Status: LOCAL_VERIFIED. No commit, push or production deployment was performed by the implementation agent.

## Scope and evidence

The supplied GSC transcript covers 2026-08-26–2026-11-25. Its daily rows total 112 impressions and 0 clicks. Page-dimension rows total 115; this is not a second total of daily search performance. Three exposed URL variants do not establish the number of indexed pages or a canonicalization failure. No new live GSC read was available in this work session.

The baseline already contained 14 guides and 31 independent nearby places in Spanish, English and Chinese. These 31 places are ALREADY_DONE and are preserved. This change adds no independent attraction. It adds one sources page in three languages and improves existing guides, navigation and metadata.

## Changes

- Corrected the airport itinerary: L8 to Nuevos Ministerios, L10 towards Puerta del Sur to Tribunal, then L1 towards Valdecarros to Sol. Removed the nonexistent direct L8–L1 change and unsupported journey-time promises.
- Corrected La Mallorquina's approach to Puerta del Sol 8 / Calle Mayor 2; added branch hours, upstairs/takeaway choices and dated venue source.
- Expanded existing dining, breakfast, tapas and one-hour guides. Corrected misleading approaches to Plaza Mayor, San Miguel and San Ginés; removed invented bacalao preparation and references to nonexistent budget/vegetarian/family pages.
- All 14 existing guides now have 3 FAQs. All 31 nearby-place pages, original gallery images and nearby photos remain.
- Replaced unsupported blanket claims about toilets, charging points and universal access with practical planning information. Preserved the independent legal statement; moved general official resources and photo explanation to /[locale]/sources.
- Added aligned Guides/Nearby/Sources navigation, a usable mobile menu and localized accessibility labels. English legal links now retain /en.
- Removed incorrect “official guide” Open Graph wording and invalid placeholder AdSense tags. Legal-page titles and x-defaults are page-specific. Sitemap edit date is stable rather than changing on every request. Existing non-www production configuration remains unchanged.
- Replaced the unsupported Next 15 `next lint` command with the repository content validator and added a separate typecheck command. No dependency versions or lockfile content changed.

## Primary sources checked

- CRTM Nuevos Ministerios (L6/L8/L10): https://www.crtm.es/tu-transporte-publico/metro/estaciones/4_120/
- CRTM Tribunal (L1/L10): https://www.crtm.es/tu-transporte-publico/metro/estaciones/4_10
- CRTM L10 route: https://www.crtm.es/tu-transporte-publico/metro/lineas/4__10___
- Aena airport Metro stations and supplement: https://www.aena.es/es/adolfo-suarez-madrid-barajas/como-llegar/metro.html
- La Mallorquina branch: https://pastelerialamallorquina.es/tiendas/puerta-del-sol/
- Madrid Tourism location: https://www.esmadrid.com/compras/la-mallorquina
- Chocolatería San Ginés address: https://chocolateriasangines.com/
- Casa Labra listing: https://www.esmadrid.com/restaurantes/casa-labra
- Market reopening 26 February 2026: https://mercadodesanmiguel.es/reapertura-del-mercado-de-san-miguel-tras-las-obras-de-conservacion/

La Mallorquina's branch page gives Sunday–Thursday 09:00–20:30 and Friday–Saturday 09:00–21:00; the brand homepage and tourism listing show a different schedule, so the specific branch page is used. No new Google Maps rating was fetched: 4.6 (9,174) retains the snapshot supplied on 2026-10-23, identified on the sources page.

## Validation

- `npm ci --no-audit --no-fund`: passed, 78 packages installed; package-lock.json unchanged.
- `npm run lint`: passed, 45 topics × 3 languages, complete localized fields, 3–5 FAQs per topic, valid related routes and preserved local images.
- `npm run typecheck`: passed.
- `npm run build`: passed; 157 static pages generated including three sources routes.
- Desktop/mobile, full URL audit and production deployment verification: handed to the parent task; results are not yet included in this implementation record.
- Production-mode local server: `npm run start -- --hostname 127.0.0.1 --port 3068`. The first attempt without an explicit hostname hit this executor's `uv_interface_addresses` restriction; specifying loopback resolved it without a code change.
- Do not interpret LOCAL_VERIFIED as proof of a push or deployment. The parent task will record the final SHA and deployment receipt.
