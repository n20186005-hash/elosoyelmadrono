import type { Locale } from '@/i18n/routing';
import type { TopicContent } from '@/lib/topics';
import { places, type District, type Localized } from './nearby-places';

const t = (es: string, en: string, zh: string): Localized => ({ es, en, zh });

export const nearbyTitle = t('Visitas cerca del Oso y el Madroño', 'Places to visit near El Oso y el Madroño', '熊与草莓树雕像周边景点');

const districtLabels: Record<District, Localized> = {
  sol: t('Puerta del Sol y Arenal', 'Puerta del Sol and Arenal', '太阳门与阿雷纳尔街'),
  palacio: t('Ópera y barrio de Palacio', 'Ópera and the Palace district', '歌剧院与王宫区'),
  letras: t('Barrio de las Letras y paseo del Prado', 'Literary Quarter and Paseo del Prado', '文学区与普拉多大道'),
  'gran-via': t('Gran Vía y Alcalá', 'Gran Vía and Alcalá', '格兰大道与阿尔卡拉街'),
};

const cityAccess = t('Espacio municipal de uso público. Mira desde la zona peatonal o la acera, sin entrada para esta parada exterior.', 'Municipal public space. View from the pedestrian area or pavement, with no ticket for this outdoor stop.', '这里是市政府管理的公共空间。请在步行区或人行道观看，外部参观无需门票。');

const exterior = t('Esta parada se hace desde la vía pública mantenida por el Ayuntamiento de Madrid. La propiedad y los accesos del inmueble se gestionan por separado.', 'View from the public street maintained by Madrid City Council. The building’s ownership and access are managed separately.', '请从马德里市政府维护的公共街道观看。建筑产权与内部出入另由各方管理。');

const parish = t('La parroquia gestiona el culto y el acceso interior. Confirma el horario en la puerta, especialmente durante las celebraciones.', 'The parish manages worship and interior access. Check the notice at the door, especially around services.', '礼拜与内部参观由堂区安排。请查看门口公告，尤其注意礼拜时段。');

const administration = {
  ayuntamiento: cityAccess,
  exterior,
  parroquia: parish,
  almudena: t('La Archidiócesis de Madrid y el cabildo de la catedral organizan el culto y las visitas al templo. La visita del museo y la cripta tienen condiciones propias.', 'The Archdiocese of Madrid and Cathedral Chapter organise worship and cathedral visits. Museum and crypt access follow their own arrangements.', '马德里总教区与主教座堂参事会负责礼拜及座堂参观。博物馆和地下圣堂各有入场安排。'),
  patrimonio: t('Patrimonio Nacional gestiona la visita pública. La disponibilidad, el itinerario y la tarifa dependen del tipo de visita y de la fecha.', 'Patrimonio Nacional manages public visits. Availability, the route and charges depend on the visit type and date.', '公众参观由西班牙国家遗产管理局负责。场次、路线和费用取决于所选参观方式与日期。'),
  comunidad: t('La Comunidad de Madrid administra la sede y fija las condiciones de acceso. Comprueba en su programación si la visita requiere reserva.', 'The Community of Madrid administers the site and sets access conditions. Check its listings for any booking requirement.', '马德里自治区政府管理该处并制定参观办法。请在官方安排中确认是否需要预约。'),
  teatro: t('La Fundación del Teatro Real gestiona las visitas y la programación del teatro. El exterior se puede observar desde las dos plazas públicas.', 'The Teatro Real Foundation manages visits and performances. The exterior is visible from both public squares.', '皇家歌剧院基金会负责导览和演出。两侧公共广场均可观看建筑外观。'),
  espanol: t('El teatro municipal se programa a través de Madrid Destino. Consulta la taquilla del Teatro Español para funciones, visitas y accesibilidad.', 'Madrid Destino oversees the municipal theatre programme. Ask the Teatro Español box office about performances, visits and accessibility.', '市立剧院由Madrid Destino安排节目。演出、导览及无障碍安排请向西班牙剧院票务处查询。'),
  ateneo: t('El Ateneo de Madrid gestiona su sede. Consulta la agenda de la institución y la disponibilidad de visitas antes de acudir.', 'The Ateneo de Madrid manages its premises. Check its calendar and tour availability before going.', '马德里雅典耀学会管理自己的会址。前往前请查看学会活动日历及导览场次。'),
  convento: t('La comunidad de las Trinitarias conserva el uso religioso. El acceso a la iglesia debe confirmarse en los anuncios de la comunidad.', 'The Trinitarian community retains religious use. Confirm access to the church through the community’s notices.', '三位一体会团体仍在此开展宗教活动。进入教堂前须查看团体的开放公告。'),
  congreso: t('El Congreso de los Diputados determina el acceso parlamentario y las visitas autorizadas. Comprueba su protocolo y la documentación indicada en la reserva.', 'The Congress of Deputies controls parliamentary access and authorised visits. Check the visit rules and the documents stated in the booking.', '西班牙众议院负责议会出入和获准导览。请核对参观规定及预约所要求的证件。'),
  thyssen: t('La Fundación Colección Thyssen-Bornemisza gestiona el museo y su venta de entradas. Consulta la tarifa aplicable a las salas que quieras recorrer.', 'The Thyssen-Bornemisza Collection Foundation manages the museum and ticketing. Check admission for the galleries you want to visit.', '提森-博内米萨收藏基金会负责博物馆及售票。请确认想去的展厅适用哪种门票。'),
  telefonica: t('La Fundación Telefónica gestiona el espacio cultural. Las exposiciones tienen acceso propio por Fuencarral y condiciones distintas del resto del inmueble.', 'Fundación Telefónica operates the cultural space. Exhibitions have their own entrance on Fuencarral and separate access conditions from the rest of the building.', '电信基金会运营文化空间。展厅从丰卡拉尔街单独入内，开放方式与楼内其他区域不同。'),
  oratorio: t('La Asociación Eucarística del Caballero de Gracia es la referencia para el culto en el oratorio. Consulta el horario en su acceso principal antes de entrar.', 'The Caballero de Gracia Eucharistic Association provides worship information for the oratory. Check hours at the main entrance before going in.', '祈祷堂的礼拜信息由格拉西亚骑士圣体协会提供。入内前请查看正门开放公告。'),
  circulo: t('El Círculo de Bellas Artes programa la sede y gestiona sus exposiciones y mirador. Comprueba el horario de la actividad concreta.', 'The Círculo de Bellas Artes runs the venue, including exhibitions and its viewpoint. Check hours for your chosen activity.', '马德里美术协会运营会址、展览和观景台。请查询具体活动的开放时间。'),
  centrocentro: t('El Ayuntamiento ocupa parte del edificio. Madrid Destino gestiona CentroCentro, que fija horarios y condiciones de acceso al espacio cultural.', 'City Hall occupies part of the building. Madrid Destino operates CentroCentro, which sets access hours and rules for the cultural venue.', '市政府使用建筑的一部分。Madrid Destino运营CentroCentro，文化空间的开放时间与入场办法由其公布。'),
};

export type Operator = keyof typeof administration;

const localeKeys: Locale[] = ['es', 'en', 'zh'];

function translate(format: (locale: Locale) => string): Localized {
  return Object.fromEntries(localeKeys.map((locale) => [locale, format(locale)])) as Localized;
}

export const nearbyGroups = (locale: Locale) =>
  Object.entries(districtLabels).map(([district, labels]) => ({
    title: labels[locale],
    items: places.filter((place) => place.district === district).map((place) => place.slug),
  }));

export const nearbyTopics: TopicContent[] = places.map((place) => {
  const { slug, district, title, address, operator, history, details, walk, question, answer, detailQuestion, detailAnswer, source, photo, photoSource, caption } = place;
  const group = districtLabels[district];
  const access = administration[operator];
  const about = t(`Sobre ${title.es}`, `About ${title.en}`, `关于${title.zh}`);
  const photoStop = operator === 'ayuntamiento' || operator === 'exterior';
  const visit = photoStop
    ? t('Parada exterior · 10–20 min sugeridos', 'Outdoor stop · allow 10–20 min', '室外停留建议10至20分钟')
    : t('Exterior: 10–20 min sugeridos. Para el interior, consulta la actividad.', 'Allow 10–20 min for the exterior. Check the activity listing for an inside visit.', '外观建议停留10至20分钟，内部参观时长请看场馆公告。');
  const description = translate((locale) => history[locale].split(/(?<=\.)\s/)[0]);
  const intro = t(
    `Visita ${title.es} desde el Oso y el Madroño. ${description.es}`,
    `Walk from El Oso y el Madroño to ${title.en}. ${description.en}`,
    `从熊与草莓树雕像步行到${title.zh}。${history.zh.split('。')[0]}。`,
  );
  const mapQuery = `${title.es}, ${address}, Madrid, España`;
  const related = places.filter((other) => other.district === district && other.slug !== slug).map((other) => other.slug);

  return {
    slug,
    group,
    title,
    metaTitle: t(`${title.es} · Cómo llegar desde Sol`, `${title.en} · Walk from Puerta del Sol`, `${title.zh} · 从马德里太阳门出发`),
    description,
    intro,
    sections: [
      { id: 'about', title: about, content: access },
      { id: 'history', title: t('Historia', 'History', '历史'), content: history },
      { id: 'details', title: t('Qué mirar y por dónde seguir', 'What to look for and where to go next', '观察要点与顺路去处'), content: details },
    ],
    faq: [
      { question, answer },
      {
        question: t(`¿Cómo llego a ${title.es} desde Sol?`, `How do I reach ${title.en} from Sol?`, `从太阳门怎样走到${title.zh}？`),
        answer: walk,
      },
      { question: detailQuestion, answer: detailAnswer },
    ],
    related,
    updated: t('Última actualización: noviembre de 2026', 'Last updated: November 2026', '更新于2026年11月'),
    place: { address, walk, visit, mapQuery, source, photo, photoSource, caption },
  };
});
