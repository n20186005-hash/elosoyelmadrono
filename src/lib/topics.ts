import type { Locale } from '@/i18n/routing';

export type TopicSection = {
  id?: string;
  title: Record<Locale, string>;
  content: Record<Locale, string>;
};

export type TopicFaq = {
  question: Record<Locale, string>;
  answer: Record<Locale, string>;
};

export type TopicContent = {
  slug: string;
  group: Record<Locale, string>;
  title: Record<Locale, string>;
  metaTitle: Record<Locale, string>;
  description: Record<Locale, string>;
  intro: Record<Locale, string>;
  sections: TopicSection[];
  faq: TopicFaq[];
  related: string[];
  updated: Record<Locale, string>;
};

const HOME: Record<Locale, string> = {
  es: 'El Oso y el Madroño',
  en: 'El Oso y el Madroño',
  zh: '熊与草莓树雕像',
};

const UPDATED: Record<Locale, string> = {
  es: 'Última actualización: octubre de 2026',
  en: 'Last updated: October 2026',
  zh: '最近更新：2026 年 10 月',
};

export const TOPICS: TopicContent[] = [
  // 1. Historia y significado
  {
    slug: 'historia-significado',
    group: HOME,
    title: {
      es: 'Historia y significado del Oso y el Madroño',
      en: 'History and Meaning of El Oso y el Madroño',
      zh: '熊与草莓树雕像的历史与意义',
    },
    metaTitle: {
      es: 'Historia y significado del Oso y el Madroño | Madrid',
      en: 'History and Meaning of El Oso y el Madroño | Madrid',
      zh: '熊与草莓树雕像的历史与意义 | 马德里',
    },
    description: {
      es: 'Por qué el oso y el madroño son el símbolo de Madrid, quién hizo la escultura y cómo llegó a la Puerta del Sol.',
      en: 'Why the bear and the strawberry tree are Madrid’s symbol, who made the sculpture and how it reached Puerta del Sol.',
      zh: '为什么熊与草莓树是马德里的象征、谁创作了这座雕像，以及它如何来到太阳门广场。',
    },
    intro: {
      es: `El **Oso y el Madroño** es mucho más que una escultura: es la representación del escudo de **Madrid**. La obra de bronce que hoy preside la **Puerta del Sol** explica, de forma visible para cualquier visitante, el origen de las armas de la ciudad. En esta página repasamos su historia, su significado heráldico y los hitos que llevaron la estatua a su ubicación actual.`,
      en: `The **Oso y el Madroño** is far more than a sculpture: it is the depiction of **Madrid’s** coat of arms. The bronze work that now stands in **Puerta del Sol** visibly explains the origin of the city’s arms. This page covers its history, its heraldic meaning and the milestones that brought the statue to its current spot.`,
      zh: `**熊与草莓树雕像** 不只是一尊雕塑，它是 **马德里** 城徽的具象呈现。如今矗立于 **太阳门广场（Puerta del Sol）** 的青铜作品，直观解释了这座城市徽记的由来。本页梳理它的历史、纹章意义，以及雕像如何抵达今天的位置。`,
    },
    sections: [
      {
        id: 'heraldic',
        title: {
          es: 'El origen heráldico: oso y madroño',
          en: 'The heraldic origin: bear and strawberry tree',
          zh: '纹章起源：熊与草莓树',
        },
        content: {
          es: `Las figuras del oso y el madroño proceden de las armas que la Villa adoptó ya en tiempos de **Alfonso VIII**. Un pleito medieval con el Cabildo de Curas por la propiedad de pastos y arboledas acabó por repartir los símbolos: el Cabildo se quedó con el oso y la Villa, con los árboles y la caza, adoptó para su escudo el **madroño** (el árbol de fresa) y el oso empinado ante él. El blasón actual, dividido en tres cuarteles, se fijó en 1859.`,
          en: `The bear and the strawberry tree come from the arms the town adopted as far back as the time of **Alfonso VIII**. A medieval dispute with the Cabildo de Curas over pastures and woodlands ended up splitting the symbols: the Cabildo kept the bear, while the town took the trees and the hunt, adopting the **strawberry tree** (arbutus) and the bear rearing up against it. The present three-quarter shield was settled in 1859.`,
          zh: `熊与草莓树的形象，源自 **阿方索八世（Alfonso VIII）** 时代马德里城所采用的徽记。中世纪时，市政与神职公会（Cabildo de Curas）因牧场与林地的归属发生争端，最终分割了象征物：公会保留了熊，而城邦取走了林木与狩猎，将 **草莓树（madroño）** 与倚树而立的熊纳入城徽。如今分为三格的盾徽于 1859 年定型。`,
        },
      },
      {
        id: 'creation',
        title: {
          es: 'Creación e inauguración (1967)',
          en: 'Creation and inauguration (1967)',
          zh: '创作与揭幕（1967 年）',
        },
        content: {
          es: `La escultura fue creada por el artista **Antonio Navarro Santafé** e inaugurada el **19 de enero de 1967**. Representa al oso empinado al madroño, apoyado sobre una basa de caliza y un pedestal de granito. Sus dimensiones son 4,50 × 2,50 × 2,00 m y está firmada «NAVARRO SANTAFÉ - MCMLVI»; el fundidor «ÁNGEL» figura en la parte posterior. Es la tercera versión instalada tras varios traslados, y desde **2009** ocupa su emplazamiento de referencia junto al inicio de la Calle de Alcalá.`,
          en: `The sculpture was created by artist **Antonio Navarro Santafé** and unveiled on **19 January 1967**. It shows the bear rearing up against the strawberry tree, resting on a limestone base and a granite pedestal. It measures 4.50 × 2.50 × 2.00 m and is signed «NAVARRO SANTAFÉ - MCMLVI»; the founder «ÁNGEL» appears on the back. It is the third version, installed after several moves, and since **2009** it has stood at its reference location by the start of Calle de Alcalá.`,
          zh: `雕像由艺术家 **Antonio Navarro Santafé** 创作，于 **1967 年 1 月 19 日** 揭幕。它表现熊倚着草莓树而立，下方是石灰岩基座与花岗岩台座。尺寸为 4.50 × 2.50 × 2.00 米，侧面刻有「NAVARRO SANTAFÉ - MCMLVI」，背面有铸造者「ÁNGEL」。这是第三个版本，历经数次迁址后，自 **2009 年** 起固定在阿尔卡拉街（Calle de Alcalá）起点的参考位置上。`,
        },
      },
      {
        id: 'symbol',
        title: {
          es: 'Por qué es el símbolo de Madrid',
          en: 'Why it is the symbol of Madrid',
          zh: '为何成为马德里的象征',
        },
        content: {
          es: `El oso y el madroño condensan la identidad de la ciudad: el oso evoca la vida silvestre de los bosques originales y el madroño es un árbol típico de la **Comunidad de Madrid**. Por eso la escultura funciona como punto de encuentro obligado y aparece en el escudo oficial, en obras literarias y en la imaginación de madrileños y visitantes.`,
          en: `The bear and the strawberry tree distil the city’s identity: the bear evokes the wildlife of the original forests and the strawberry tree is typical of the **Community of Madrid**. That is why the sculpture is a must-see meeting point and appears on the official shield, in literature and in the imagination of locals and visitors alike.`,
          zh: `熊与草莓树凝聚了这座城市的身份：熊让人联想到原始森林中的野生动物，草莓树则是 **马德里自治区** 的典型树种。正因如此，这座雕像成为必到的聚会地标，并出现在官方城徽、文学作品以及马德里人与游客的共同记忆中。`,
        },
      },
    ],
    faq: [
      {
        question: {
          es: '¿Quién hizo el Oso y el Madroño?',
          en: 'Who made El Oso y el Madroño?',
          zh: '熊与草莓树雕像是谁创作的？',
        },
        answer: {
          es: 'La escultura es obra del artista español **Antonio Navarro Santafé**, inaugurada el 19 de enero de 1967 en la Puerta del Sol.',
          en: 'The sculpture is the work of Spanish artist **Antonio Navarro Santafé**, unveiled on 19 January 1967 in Puerta del Sol.',
          zh: '雕像由西班牙艺术家 **Antonio Navarro Santafé** 创作，于 1967 年 1 月 19 日在太阳门广场揭幕。',
        },
      },
      {
        question: {
          es: '¿Qué significa el oso y el madroño?',
          en: 'What do the bear and the strawberry tree mean?',
          zh: '熊与草莓树代表什么？',
        },
        answer: {
          es: 'Representan el escudo de Madrid: el oso procede de un pleito medieval por los pastos y el madroño (árbol de fresa) simboliza los montes arbolados que la Villa se quedó en ese reparto.',
          en: 'They represent the coat of arms of Madrid: the bear comes from a medieval dispute over pastures, and the strawberry tree (arbutus) symbolises the wooded hills the town kept in that settlement.',
          zh: '它们代表马德里的城徽：熊源于中世纪关于牧场的争端，草莓树（arbutus）象征城邦在分割中保留下来的林木山丘。',
        },
      },
      {
        question: {
          es: '¿Cuándo se inauguró y dónde está ahora?',
          en: 'When was it unveiled and where is it now?',
          zh: '它何时揭幕，现在在哪里？',
        },
        answer: {
          es: 'Se inauguró el 19 de enero de 1967 y, tras varios traslados, ocupa desde 2009 su ubicación actual en la Puerta del Sol, junto al inicio de la Calle de Alcalá.',
          en: 'It was unveiled on 19 January 1967 and, after several relocations, has stood since 2009 at its current spot in Puerta del Sol, by the start of Calle de Alcalá.',
          zh: '它于 1967 年 1 月 19 日揭幕，历经数次迁址后，自 2009 年起固定在太阳门广场、阿尔卡拉街起点的现址。',
        },
      },
    ],
    related: ['como-llegar', 'puerta-del-sol', 'kilometro-cero'],
    updated: UPDATED,
  },

  // 3. Cómo llegar
  {
    slug: 'como-llegar',
    group: HOME,
    title: {
      es: 'Cómo llegar al Oso y el Madroño',
      en: 'How to Get to El Oso y el Madroño',
      zh: '如何前往熊与草莓树雕像',
    },
    metaTitle: {
      es: 'Cómo llegar al Oso y el Madroño (Puerta del Sol) | Madrid',
      en: 'How to Get to El Oso y el Madroño (Puerta del Sol) | Madrid',
      zh: '如何前往熊与草莓树雕像（太阳门广场）| 马德里',
    },
    description: {
      es: 'Metro, cercanías y caminando: la forma más sencilla de llegar a la estatua en la Puerta del Sol y dónde encontrarla una vez allí.',
      en: 'Metro, commuter rail and on foot: the easiest way to reach the statue in Puerta del Sol and where to find it once you are there.',
      zh: '地铁、近郊铁路与步行：抵达太阳门广场雕像最便捷的方式，以及到了之后如何找到它。',
    },
    intro: {
      es: `El **Oso y el Madroño** está en la **Puerta del Sol**, en el kilómetro cero de las carreteras españolas y en el corazón peatonal de **Madrid**. Llegar es fácil porque Sol es la mayor estación de intercambio de la ciudad. Aquí explicamos las mejores opciones y dónde localizar la escultura nada más salir de transporte.`,
      en: `The **Oso y el Madroño** stands in **Puerta del Sol**, at the kilometre zero of Spain’s roads and in the pedestrian heart of **Madrid**. Getting there is easy because Sol is the city’s biggest transport interchange. We explain the best options and where to spot the statue as soon as you exit public transport.`,
      zh: `**熊与草莓树雕像** 位于 **太阳门广场**，即西班牙公路的零公里起点、马德里步行核心区。由于太阳门是全城最大的换乘枢纽，前往十分方便。我们介绍最佳方式与出站后如何一眼找到雕像。`,
    },
    sections: [
      {
        id: 'metro',
        title: {
          es: 'En metro y cercanías',
          en: 'By metro and commuter rail',
          zh: '乘地铁与近郊铁路',
        },
        content: {
          es: `La estación **Sol** reúne las líneas de metro **L1, L2 y L3** y las cercanías **C3 y C4**. Al salir a la superficie por cualquier boca de la Puerta del Sol, la escultura está a vista de pocos pasos: busca el cruce de la Calle de Alcalá con la propia plaza. Si vienes desde Atocha, el autobús urbano o un corto trayecto de metro (L1) te dejan en Sol en pocos minutos.`,
          en: `**Sol** station combines metro lines **L1, L2 and L3** with commuter rail **C3 and C4**. From any exit onto Puerta del Sol, the sculpture is a few steps away: look for the junction of Calle de Alcalá with the square itself. From Atocha, a city bus or a short metro ride (L1) gets you to Sol in minutes.`,
          zh: `**太阳门（Sol）** 站汇聚地铁 **1、2、3 号线** 与近郊铁路 **C3、C4 线**。从太阳门广场任一出口上到地面，雕像就在几步之内：找阿尔卡拉街与广场交汇处即可。从阿托查（Atocha）出发，乘市内公交或短途地铁（1 号线）几分钟即可抵达太阳门。`,
        },
      },
      {
        id: 'walking',
        title: {
          es: 'Caminando desde el centro',
          en: 'Walking from the centre',
          zh: '从市中心步行',
        },
        content: {
          es: `Desde la **Plaza Mayor** son unos **5 minutos a pie** (sal por la calle Mayor o la calle Arenal). Desde **Gran Vía** o **Callao**, baja por la Calle del Carmen y llegarás directo a la Puerta del Sol. La plaza es peatonal, así que la última parte siempre es andando.`,
          en: `From **Plaza Mayor** it is about a **5-minute walk** (leave via Calle Mayor or Calle Arenal). From **Gran Vía** or **Callao**, walk down Calle del Carmen and you arrive straight at Puerta del Sol. The square is pedestrianised, so the final stretch is always on foot.`,
          zh: `从 **马约尔广场（Plaza Mayor）** 步行约 **5 分钟**（经马约尔街 Calle Mayor 或阿雷纳尔街 Calle Arenal）。从 **格兰大道（Gran Vía）** 或卡亚俄（Callao），沿卡门街（Calle del Carmen）下行即直达太阳门广场。广场为步行区，最后一段始终需步行。`,
        },
      },
      {
        id: 'airport',
        title: {
          es: 'Desde el aeropuerto',
          en: 'From the airport',
          zh: '从机场前往',
        },
        content: {
          es: `Desde el **Aeropuerto de Madrid-Barajas** toma la línea 8 de metro hasta Nuevos Ministerios y allí enlaza con la L1 hasta Sol (unos 40-50 min en total). También puedes usar el tren de cercanías C1 hasta Chamartín y luego C3/C4 a Sol, o un taxi/VTC, teniendo en cuenta que no hay parada dentro de la plaza.`,
          en: `From **Madrid-Barajas Airport**, take metro line 8 to Nuevos Ministerios and change to L1 to Sol (about 40-50 min total). You can also take commuter train C1 to Chamartín and then C3/C4 to Sol, or a taxi/VTC — bearing in mind there is no rank inside the square.`,
          zh: `从 **马德里-巴拉哈斯机场（Madrid-Barajas）**，乘地铁 8 号线至新部委站（Nuevos Ministerios），换乘 1 号线到太阳门（全程约 40–50 分钟）。也可乘近郊铁路 C1 到查马丁（Chamartín），再转 C3/C4 到太阳门；或打车/VTC——但请留意广场内不设上客点。`,
        },
      },
    ],
    faq: [
      {
        question: {
          es: '¿En qué metro está el Oso y el Madroño?',
          en: 'Which metro station is the statue at?',
          zh: '雕像在哪个地铁站？',
        },
        answer: {
          es: 'En la estación **Sol** (líneas L1, L2 y L3), en plena Puerta del Sol. La escultura está a pocos pasos de cualquier salida.',
          en: 'At **Sol** station (lines L1, L2 and L3), right on Puerta del Sol. The sculpture is steps from any exit.',
          zh: '在 **太阳门（Sol）** 站（1、2、3 号线），就在广场上。雕像距任一出口都只有几步路。',
        },
      },
      {
        question: {
          es: '¿A cuánto está de la Plaza Mayor?',
          en: 'How far is it from Plaza Mayor?',
          zh: '离马约尔广场有多远？',
        },
        answer: {
          es: 'Una caminata de unos **5 minutos** por la calle Mayor o la calle Arenal.',
          en: 'About a **5-minute walk** via Calle Mayor or Calle Arenal.',
          zh: '经马约尔街或阿雷纳尔街步行约 **5 分钟**。',
        },
      },
      {
        question: {
          es: '¿Se puede ir en coche hasta la plaza?',
          en: 'Can you drive to the square?',
          zh: '可以开车到广场吗？',
        },
        answer: {
          es: 'La Puerta del Sol es peatonal y está prohibido estacionar o detenerse en su interior. Si vas en coche, deja el vehículo en un parking subterráneo de las calles adyacentes y termina a pie.',
          en: 'Puerta del Sol is pedestrianised and stopping or parking inside is prohibited. If driving, leave the car in an underground car park on the surrounding streets and finish on foot.',
          zh: '太阳门广场为步行区，禁止在内部停车或临时停靠。若自驾，请将车停在周边街道的地下停车场，再步行抵达。',
        },
      },
    ],
    related: ['puerta-del-sol', 'kilometro-cero', 'plaza-mayor-desde-sol'],
    updated: UPDATED,
  },

  // 4. Fotos
  {
    slug: 'fotos',
    group: HOME,
    title: {
      es: 'Fotos del Oso y el Madroño',
      en: 'Photos of El Oso y el Madroño',
      zh: '熊与草莓树雕像拍照指南',
    },
    metaTitle: {
      es: 'Fotos del Oso y el Madroño: ángulos y consejos | Madrid',
      en: 'Photos of El Oso y el Madroño: angles and tips | Madrid',
      zh: '熊与草莓树雕像拍照：角度与建议 | 马德里',
    },
    description: {
      es: 'Los mejores ángulos para fotografiar la escultura, la hora dorada y dónde encuadrar el madroño sin bloquear el paso.',
      en: 'The best angles to photograph the sculpture, golden hour and how to frame the strawberry tree without blocking the way.',
      zh: '拍摄雕像的最佳角度、黄金时刻，以及如何在不阻碍通行的情况下取景草莓树。',
    },
    intro: {
      es: `El **Oso y el Madroño** es, con diferencia, el monumento más fotografiado de la **Puerta del Sol**. Como está al aire libre y en una plaza siempre concurrida, conviene saber cuándo y desde dónde disparar para conseguir una buena imagen sin molestar a quienes pasan. Aquí tienes nuestros consejos prácticos.`,
      en: `The **Oso y el Madroño** is by far the most photographed monument in **Puerta del Sol**. Because it is outdoors and on a permanently busy square, it helps to know when and from where to shoot for a good image without disturbing passers-by. Here are our practical tips.`,
      zh: `**熊与草莓树雕像** 无疑是 **太阳门广场** 上被拍摄最多的纪念碑。由于它露天陈列、广场终日人流如织，掌握拍摄的时机与机位，才能既拍出好照片又不打扰路人。以下是我们整理的实用建议。`,
    },
    sections: [
      {
        id: 'light',
        title: {
          es: 'La mejor luz: hora dorada y azul',
          en: 'Best light: golden and blue hour',
          zh: '最佳光线：黄金时刻与蓝调时刻',
        },
        content: {
          es: `Las franjas más recomendables son las dos horas tras la salida del sol y las dos anteriores a la puesta (hora dorada y hora azul). A mediodía la luz es dura y crea sombras bajo el pedestal. De noche, la escultura queda iluminada por proyectores y es ideal para retratos urbanos con la plaza de fondo.`,
          en: `The best windows are the two hours after sunrise and the two before sunset (golden and blue hour). At midday the light is harsh and casts shadows under the pedestal. At night the sculpture is lit by spotlights and works well for urban portraits with the square behind.`,
          zh: `最推荐的时间段是日出后两小时与日落前兩小时（黄金时刻与蓝调时刻）。正午光线生硬，会在台座下方投下浓重阴影。入夜后雕像由射灯照亮，非常适合以广场为背景拍摄城市人像。`,
        },
      },
      {
        id: 'angles',
        title: {
          es: 'Ángulos que funcionan',
          en: 'Angles that work',
          zh: '好用的取景角度',
        },
        content: {
          es: `El encuadre clásico frente a la escultura, a la altura del oso, deja ver el madroño y el escudo al completo. Para una toma distinta, prueba desde el inicio de la **Calle de Alcalá** (la estatua queda en diagonal) o desde un lateral para evitar las columnas de viandantes. Subir un poco el encuadre incluye los edificios de la Puerta del Sol al fondo.`,
          en: `The classic frame, straight in front of the sculpture at the bear’s height, shows the strawberry tree and the full shield. For a different shot, try from the start of **Calle de Alcalá** (the statue sits diagonally) or from the side to avoid the crowds. Raising the frame a little includes the Puerta del Sol buildings in the background.`,
          zh: `经典机位是在雕像正前方、与熊等高的位置，可完整呈现草莓树与城徽。想拍出不同感觉，可从 **阿尔卡拉街** 起点（雕像呈对角）或侧面取景以避开人流。略微抬高画面，还能将太阳门广场的建筑纳入背景。`,
        },
      },
      {
        id: 'etiquette',
        title: {
          es: 'Buenas prácticas y normas',
          en: 'Etiquette and rules',
          zh: '拍摄礼仪与规范',
        },
        content: {
          es: `Haz fotos en los laterales y zonas libres de paso, sin formar corrillos en los pasos peatonales ni en las bocas de metro. No te subas al pedestal ni toques el bronce, y respeta el derecho a la imagen de terceros en retratos comerciales. En Nochevieja y Navidad la densidad humana es enorme, así que llégate con antelación.`,
          en: `Shoot from the sides and open areas, without gathering in pedestrian crossings or at metro entrances. Do not climb the pedestal or touch the bronze, and respect others’ image rights in commercial portraits. On New Year’s Eve and at Christmas the crowds are huge, so arrive early.`,
          zh: `请在侧方与空旷区域拍摄，勿在人行横道或地铁口聚集。不要爬上台座或触摸青铜，商业人像请尊重他人肖像权。跨年与圣诞期间人潮极密，建议提前到场。`,
        },
      },
    ],
    faq: [
      {
        question: {
          es: '¿Cuándo hay menos gente para fotos?',
          en: 'When are there fewer people for photos?',
          zh: '什么时候拍照人最少？',
        },
        answer: {
          es: 'Primeras horas de la mañana (justo tras abrir el metro, sobre las 7-8 h) y en días laborables la afluencia es menor que los fines de semana y festivos.',
          en: 'Early morning (just after the metro opens, around 7-8 am) and on weekdays is quieter than weekends and holidays.',
          zh: '清晨（地铁刚运营、约 7–8 点）以及工作日，人流少于周末与节假日。',
        },
      },
      {
        question: {
          es: '¿Se puede usar trípode?',
          en: 'Can you use a tripod?',
          zh: '可以使用三脚架吗？',
        },
        answer: {
          es: 'Un trípode pequeño de uso personal no suele requerir autorización si no obstaculiza el paso. Para equipo profesional o iluminación hay que consultar la normativa municipal de ocupación de la vía pública.',
          en: 'A small personal tripod is usually fine if it does not block the way. For professional gear or lighting you must check the municipal rules on using public space.',
          zh: '小型自用三脚架只要不妨碍通行通常无需许可。专业设备或灯光须查阅市政关于占用公共空间的规定。',
        },
      },
      {
        question: {
          es: '¿Qué se ve detrás de la estatua?',
          en: 'What is behind the statue?',
          zh: '雕像背后是什么？',
        },
        answer: {
          es: 'Al fondo aparecen los edificios de la Puerta del Sol y, al alejar el encuadre, la confluencia de la Calle de Alcalá con la plaza, uno de los rincones más fotografiados de Madrid.',
          en: 'Behind it are the Puerta del Sol buildings, and pulling back the frame shows the junction of Calle de Alcalá with the square — one of Madrid’s most photographed corners.',
          zh: '背景是太阳门广场的建筑；拉远画面则可见阿尔卡拉街与广场的交汇处，是马德里最常入镜的角落之一。',
        },
      },
    ],
    related: ['puerta-del-sol', 'historia-significado', 'kilometro-cero'],
    updated: UPDATED,
  },

  // 6. Qué ver en la Puerta del Sol
  {
    slug: 'puerta-del-sol',
    group: HOME,
    title: {
      es: 'Qué ver en la Puerta del Sol',
      en: 'What to See in Puerta del Sol',
      zh: '太阳门广场有什么看',
    },
    metaTitle: {
      es: 'Qué ver en la Puerta del Sol: guía de la plaza | Madrid',
      en: 'What to See in Puerta del Sol: plaza guide | Madrid',
      zh: '太阳门广场有什么看：广场导览 | 马德里',
    },
    description: {
      es: 'De la estatua del Oso al Reloj de las Campanadas, pasando por el Kilómetro Cero y la Real Casa de Correos: qué no perderte en la plaza.',
      en: 'From the Bear statue to the New Year bell, via Kilometre Zero and the Royal House of the Post Office: what not to miss on the square.',
      zh: '从熊雕像到跨年钟楼，再到零公里标志与邮政宫：广场上不可错过的看点。',
    },
    intro: {
      es: `La **Puerta del Sol** no es solo el punto donde está el **Oso y el Madroño**: es el kilómetro cero de España, escenario de las campanadas de Nochevieja y un nudo de calles madrileñas. Si vas a ver la estatua, aprovecha para recorrer sus otros hitos, todos a pocos metros.`,
      en: `**Puerta del Sol** is not just where the **Oso y el Madroño** stands: it is Spain’s kilometre zero, the stage for the New Year’s Eve bells and a hub of Madrid’s streets. While you are there for the statue, take in its other landmarks, all a few metres apart.`,
      zh: `**太阳门广场** 不只是 **熊与草莓树雕像** 所在之处：它是西班牙的零公里起点、跨年钟声的舞台，也是马德里街巷的枢纽。既然为雕像而来，不妨顺道看看几步之遥的其他地标。`,
    },
    sections: [
      {
        id: 'sol-landmarks',
        title: {
          es: 'Imperdibles de la plaza',
          en: 'Unmissable spots on the square',
          zh: '广场上不可错过的看点',
        },
        content: {
          es: `Además del **Oso y el Madroño**, busca el **Kilómetro Cero** (la placa en el suelo frente a la Real Casa de Correos), el **Reloj de la Puerta del Sol** (desde el que se dan las doce uvas de fin de año) y la fachada de la antigua **Real Casa de Correos**, hoy sede de la Vicepresidencia de la Comunidad de Madrid. Más cerca del suelo, la estatua de la **Mariblanca** recuerda la antigua fuente dieciochesca.`,
          en: `Beyond the **Oso y el Madroño**, look for **Kilometre Zero** (the plaque on the ground in front of the Royal House of the Post Office), the **Puerta del Sol clock** (which rings in the twelve grapes at New Year) and the façade of the former **Royal House of the Post Office**, now the seat of the Community of Madrid’s Vice-Presidency. Closer to the ground, the **Mariblanca** statue recalls the 18th-century fountain.`,
          zh: `除 **熊与草莓树雕像** 外，请留意 **零公里标志**（邮政宫前地面上的铜牌）、**太阳门钟楼**（跨年十二响葡萄的报时处），以及旧 **皇家邮政宫** 立面（现为马德里自治区副主席府）。靠近地面处，**玛丽布兰卡（Mariblanca）** 雕像让人想起十八世纪的喷泉。`,
        },
      },
      {
        id: 'streets',
        title: {
          es: 'Calles que arrancan de Sol',
          en: 'Streets starting at Sol',
          zh: '从太阳门延伸出的街道',
        },
        content: {
          es: `De la plaza salen algunas de las calles más conocidas de Madrid: la **Calle Mayor** (hacia la Plaza Mayor), la **Calle de Alcalá**, la **Calle del Carmen** (hacia Gran Vía) y la **Calle de Arenal** (hacia el Teatro Real y Ópera). Caminar cualquiera de ellas es ya un paseo por el Madrid histórico.`,
          en: `Some of Madrid’s best-known streets start at the square: **Calle Mayor** (towards Plaza Mayor), **Calle de Alcalá**, **Calle del Carmen** (towards Gran Vía) and **Calle de Arenal** (towards the Teatro Real and Ópera). Walking any of them is already a stroll through historic Madrid.`,
          zh: `几条马德里最知名的街道都从广场起步：**马约尔街**（通往马约尔广场）、**阿尔卡拉街**、**卡门街**（通往格兰大道），以及 **阿雷纳尔街**（通往皇家剧院与歌剧院）。随意走进其中一条，便已踏入历史马德里。`,
        },
      },
    ],
    faq: [
      {
        question: {
          es: '¿Por qué es importante la Puerta del Sol?',
          en: 'Why is Puerta del Sol important?',
          zh: '太阳门广场为什么重要？',
        },
        answer: {
          es: 'Es el kilómetro cero de las carreteras españolas, escenario de las campanadas de Nochevieja y uno de los lugares más concurridos y fotografiados de Madrid.',
          en: 'It is the kilometre zero of Spain’s roads, the stage for the New Year’s Eve bells and one of Madrid’s busiest, most photographed places.',
          zh: '它是西班牙公路的零公里起点、跨年钟声的舞台，也是马德里最热闹、最常入镜的地点之一。',
        },
      },
      {
        question: {
          es: '¿Cuánto tiempo se tarda en verla?',
          en: 'How long does it take to see it?',
          zh: '看一圈要多久？',
        },
        answer: {
          es: 'Una visita tranquila a la plaza y sus hitos lleva unos **30-45 minutos**; si sumas el paseo a la Plaza Mayor, cuenta una hora (ver ruta de una hora).',
          en: 'A relaxed look at the square and its landmarks takes about **30-45 minutes**; add the walk to Plaza Mayor and budget an hour (see the one-hour route).',
          zh: '从容参观广场及其地标约需 **30–45 分钟**；若加上前往马约尔广场的步行，建议预留一小时（见「一小时路线」）。',
        },
      },
    ],
    related: ['kilometro-cero', 'plaza-mayor-desde-sol', 'sol-en-una-hora'],
    updated: UPDATED,
  },

  // 7. Kilómetro Cero
  {
    slug: 'kilometro-cero',
    group: HOME,
    title: {
      es: 'Kilómetro Cero de Madrid',
      en: 'Kilometre Zero of Madrid',
      zh: '马德里零公里标志',
    },
    metaTitle: {
      es: 'Kilómetro Cero de Madrid: dónde está y qué significa | Puerta del Sol',
      en: 'Kilometre Zero of Madrid: where it is and what it means | Puerta del Sol',
      zh: '马德里零公里标志：在哪里、有何含义 | 太阳门广场',
    },
    description: {
      es: 'Dónde está la placa del Kilómetro Cero, qué significa y por qué se considera el centro de las carreteras españolas.',
      en: 'Where the Kilometre Zero plaque is, what it means and why it is considered the centre of Spain’s roads.',
      zh: '零公里铜牌在哪里、有何含义，以及为何被视为西班牙公路的中心。',
    },
    intro: {
      es: `A unos pasos del **Oso y el Madroño**, incrustada en el pavimento frente a la **Real Casa de Correos**, está la placa del **Kilómetro Cero**. Es el punto desde el que se miden las distancias de la red radial de carreteras de España y un lugar obligado para una foto «estoy en el centro».`,
      en: `A few steps from the **Oso y el Madroño**, set into the pavement in front of the **Royal House of the Post Office**, is the **Kilometre Zero** plaque. It is the point from which distances on Spain’s radial road network are measured and a must for a «I’m at the centre» photo.`,
      zh: `在 **熊与草莓树雕像** 几步之外、嵌入 **皇家邮政宫** 前地面的，便是 **零公里** 铜牌。它是西班牙放射状公路网里程的起算点，也是必拍的「我在中心」打卡地。`,
    },
    sections: [
      {
        id: 'where',
        title: {
          es: 'Dónde encontrarlo',
          en: 'Where to find it',
          zh: '在哪里找到它',
        },
        content: {
          es: `La placa está en el suelo, justo frente a la fachada de la **Real Casa de Correos** (el edificio con el reloj de las campanadas), en el lado de la Puerta del Sol opuesto a la salida hacia la Calle Mayor. Es fácil de reconocer: un disco de piedra con un mapa radial de España grabado.`,
          en: `The plaque is on the ground, right in front of the façade of the **Royal House of the Post Office** (the building with the New Year clock), on the side of Puerta del Sol opposite the exit towards Calle Mayor. It is easy to spot: a stone disc engraved with a radial map of Spain.`,
          zh: `铜牌位于地面，正对 **皇家邮政宫** 立面（即跨年钟楼所在建筑），在太阳门广场朝向马约尔街出口的另一侧。它不难辨认：一块刻有西班牙放射状地图的石质圆盘。`,
        },
      },
      {
        id: 'meaning',
        title: {
          es: 'Qué significa',
          en: 'What it means',
          zh: '它的含义',
        },
        content: {
          es: `El Kilómetro Cero marca el origen de las seis carreteras radiales que salen de Madrid hacia el resto del país. Todas las distancias por carretera en España se miden a partir de este punto. La placa actual es la última de varias versiones instaladas desde 1950.`,
          en: `Kilometre Zero marks the start of the six radial roads leaving Madrid for the rest of the country. All road distances in Spain are measured from this point. The current plaque is the latest of several versions installed since 1950.`,
          zh: `零公里标志着从马德里通往全国各地的六条放射状公路的起点。西班牙所有公路里程都以此为起点计算。目前的铜牌是自 1950 年以来多版中的最新一版。`,
        },
      },
    ],
    faq: [
      {
        question: {
          es: '¿Está junto al Oso y el Madroño?',
          en: 'Is it next to the Oso y el Madroño?',
          zh: '它就在熊与草莓树雕像旁边吗？',
        },
        answer: {
          es: 'No justo al lado: está a unos 50-80 m, frente a la Real Casa de Correos, en el otro extremo de la plaza respecto a la escultura.',
          en: 'Not right beside it: it is about 50-80 m away, in front of the Royal House of the Post Office, at the opposite end of the square from the sculpture.',
          zh: '并非紧邻：相距约 50–80 米，在广场另一端、正对皇家邮政宫，与雕像相对。',
        },
      },
      {
        question: {
          es: '¿Por qué es el centro de España?',
          en: 'Why is it the centre of Spain?',
          zh: '为什么它是西班牙的中心？',
        },
        answer: {
          es: 'Por convención, es el punto cero de la red radial de carreteras; no es el centro geográfico del país, pero sí el origen de las distancias por carretera.',
          en: 'By convention it is the zero point of the radial road network; it is not the geographic centre of the country, but the origin of road distances.',
          zh: '按惯例，它是放射状公路网的零点；它并非国家的地理中心，却是公路里程的起算原点。',
        },
      },
    ],
    related: ['puerta-del-sol', 'como-llegar'],
    updated: UPDATED,
  },

  // 11. Plaza Mayor desde Sol
  {
    slug: 'plaza-mayor-desde-sol',
    group: HOME,
    title: {
      es: 'Plaza Mayor desde Puerta del Sol',
      en: 'Plaza Mayor from Puerta del Sol',
      zh: '从太阳门广场前往马约尔广场',
    },
    metaTitle: {
      es: 'De Puerta del Sol a Plaza Mayor: ruta a pie | Madrid',
      en: 'From Puerta del Sol to Plaza Mayor: walking route | Madrid',
      zh: '太阳门广场到马约尔广场：步行路线 | 马德里',
    },
    description: {
      es: 'Cómo ir de la Puerta del Sol a la Plaza Mayor en 5 minutos, qué ver al llegar y dónde comer cerca de la plaza.',
      en: 'How to walk from Puerta del Sol to Plaza Mayor in 5 minutes, what to see on arrival and where to eat near the square.',
      zh: '如何从太阳门广场步行 5 分钟到马约尔广场、到了看什么，以及广场附近吃什么。',
    },
    intro: {
      es: `La **Plaza Mayor** es la siguiente parada natural tras ver el **Oso y el Madroño** y la **Puerta del Sol**. Está a unos **5 minutos a pie** y es una de las plazas porticadas más famosas de España. Te contamos la ruta más sencilla, qué mirar y dónde picar algo al llegar.`,
      en: `**Plaza Mayor** is the natural next stop after the **Oso y el Madroño** and **Puerta del Sol**. It is about a **5-minute walk** away and is one of Spain’s most famous arcaded squares. We cover the simplest route, what to look at and where to grab a bite on arrival.`,
      zh: `看完 **熊与草莓树雕像** 与 **太阳门广场** 后，**马约尔广场** 是最自然的下一站。步行约 **5 分钟** 即达，是西班牙最著名的拱廊广场之一。我们介绍最简便的路线、到了看什么，以及抵达后在哪里小吃。`,
    },
    sections: [
      {
        id: 'route',
        title: {
          es: 'La ruta a pie',
          en: 'The walking route',
          zh: '步行路线',
        },
        content: {
          es: `Sal de la Puerta del Sol por la **Calle Mayor** (hacia el sur, en dirección opuesta a la Gran Vía) y camina recto unos 350 m. Verás la **Plaza de la Villa** a un lado y, al final, el arco de entrada a la Plaza Mayor (arco de Cuchilleros). También puedes ir por la **Calle de Arenal** y girar en la calle del Espejo; ambas llegan en 5-7 minutos.`,
          en: `Leave Puerta del Sol along **Calle Mayor** (south, opposite the Gran Vía direction) and walk straight for about 350 m. You will pass **Plaza de la Villa** on one side and, at the end, the entrance arch to Plaza Mayor (Cuchilleros arch). You can also go via **Calle de Arenal** and turn onto Calle del Espejo; both take 5-7 minutes.`,
          zh: `从太阳门广场沿 **马约尔街**（向南、与格兰大道方向相反）直行约 350 米。途中会经过一侧的 **比利亚广场（Plaza de la Villa）**，尽头便是马约尔广场的入口拱门（库奇列罗斯拱门 Cuchilleros）。也可经 **阿雷纳尔街** 再转埃斯佩霍街（Calle del Espejo）；两条路都约 5–7 分钟。`,
        },
      },
      {
        id: 'see',
        title: {
          es: 'Qué ver en la Plaza Mayor',
          en: 'What to see in Plaza Mayor',
          zh: '马约尔广场上有什么看',
        },
        content: {
          es: `La plaza rectangular, rodeada de edificios porticados y presidida por la **Casa de la Panadería** (con su fachada pintada), es perfecta para pasear y sentarse en una terraza. En el centro destaca la estatua ecuestre de **Felipe III**. Alrededor hay muchas opciones para comer; el **Mercado de San Miguel** está a un par de minutos.`,
          en: `The rectangular square, ringed by arcaded buildings and dominated by the **Casa de la Panadería** (with its painted façade), is perfect for a stroll and a terrace seat. In the centre stands the equestrian statue of **Felipe III**. Around it are many places to eat; the **Mercado de San Miguel** is a couple of minutes away.`,
          zh: `这座长方形广场被拱廊建筑环绕，中央是 **面包房之家（Casa de la Panadería）**（立面绘有彩画）主导，非常适合散步与露天小坐。广场中央矗立着 **腓力三世（Felipe III）** 骑马像。四周有不少用餐选择；**圣米格尔市场（Mercado de San Miguel）** 步行两三分钟即达。`,
        },
      },
    ],
    faq: [
      {
        question: {
          es: '¿Cuánto se tarda desde Sol?',
          en: 'How long from Sol?',
          zh: '从太阳门要走多久？',
        },
        answer: {
          es: 'Unos **5 minutos** por la Calle Mayor a paso tranquilo; 7-8 si te detienes a mirar la Plaza de la Villa.',
          en: 'About **5 minutes** along Calle Mayor at an easy pace; 7-8 if you stop to look at Plaza de la Villa.',
          zh: '沿马约尔街从容步行约 **5 分钟**；若驻足看比利亚广场则需 7–8 分钟。',
        },
      },
      {
        question: {
          es: '¿Dónde comer cerca?',
          en: 'Where to eat nearby?',
          zh: '附近在哪里吃？',
        },
        answer: {
          es: 'En los portales de la propia plaza y en el Mercado de San Miguel (a 2 min). Para el bocadillo de calamares, mira la ruta de tapas y el propio Mercado.',
          en: 'In the arcades of the square itself and at the Mercado de San Miguel (2 min away). For a squid sandwich, see the tapas route and the market itself.',
          zh: '可在广场拱廊内及圣米格尔市场（2 分钟）用餐。想吃鱿鱼三明治，参见小吃路线与市场本身。',
        },
      },
    ],
    related: ['puerta-del-sol', 'mercado-san-miguel', 'tapas-cerca-sol', 'comer'],
    updated: UPDATED,
  },

  // 14. Dónde comer
  {
    slug: 'comer',
    group: HOME,
    title: {
      es: 'Dónde comer cerca de Puerta del Sol',
      en: 'Where to Eat Near Puerta del Sol',
      zh: '太阳门广场附近去哪吃',
    },
    metaTitle: {
      es: 'Dónde comer cerca de Puerta del Sol: guía de opciones | Madrid',
      en: 'Where to Eat Near Puerta del Sol: options guide | Madrid',
      zh: '太阳门广场附近去哪吃：选择指南 | 马德里',
    },
    description: {
      es: 'Tipos de comida, presupuestos y locales concretos recomendados cerca de la Puerta del Sol, con opciones para todos los gustos.',
      en: 'Kinds of food, budgets and specific recommended spots near Puerta del Sol, with options for every taste.',
      zh: '太阳门广场附近的美食类型、预算与具体推荐店家，满足各种口味。',
    },
    intro: {
      es: `Comer cerca de la **Puerta del Sol** es fácil: el centro de **Madrid** concentra una de las mayores densidades gastronómicas de Europa. Para ayudarte a elegir, agrupamos las opciones por tipo y destacamos algunos locales concretos con ubicación y por qué ir. Recuerda que somos una guía independiente de terceros: indicamos criterios de selección y fechas de comprobación, pero no somos la web oficial de ningún local.`,
      en: `Eating near **Puerta del Sol** is easy: central **Madrid** packs one of Europe’s highest culinary densities. To help you choose, we group options by type and highlight a few specific places with location and reasons to go. We are an independent third-party guide: we state selection criteria and check dates, but we are not any venue’s official site.`,
      zh: `在 **太阳门广场** 附近用餐很方便：**马德里** 市中心汇聚了欧洲最密集的美食之一。为帮你选择，我们按类型归类，并重点列出几家具体店家及其位置与推荐理由。我们是独立的第三方指南：会说明选取标准与核实日期，但并非任何店家的官方网站。`,
    },
    sections: [
      {
        id: 'types',
        title: {
          es: 'Tipos de opciones',
          en: 'Types of options',
          zh: '美食类型',
        },
        content: {
          es: `En unos minutos a pie encuentras **tabernas y bares de tapas**, **restaurantes con servicio a la mesa** (desde menús del día económicos hasta alta cocina), **comida para llevar** (incluido el clásico bocadillo de calamares), **cafeterías y pastelerías**, **brunch** y **heladerías**. También hay opciones **vegetarianas y veganas** cada vez más numerosas.`,
          en: `Within a few minutes’ walk you will find **tapas bars and taverns**, **table-service restaurants** (from cheap daily menus to fine dining), **takeaway** (including the classic squid sandwich), **cafés and bakeries**, **brunch** and **ice cream**. **Vegetarian and vegan** choices are increasingly common too.`,
          zh: `步行几分钟之内，你能找到 **小吃酒馆（tapas）**、**堂食餐厅**（从平价每日套餐到高端料理）、**外带**（含经典的鱿鱼三明治）、**咖啡与糕点店**、**早午餐** 与 **冰淇淋**。素食与纯素选择也越来越多。`,
        },
      },
      {
        id: 'picks',
        title: {
          es: 'Lugares concretos para empezar',
          en: 'Specific spots to start with',
          zh: '值得一去的店家',
        },
        content: {
          es: `Para **dulces y desayuno**, **La Mallorquina** está en la propia Puerta del Sol. Para **chocolate con churros**, **San Ginés** queda a pocos minutos. Para **bacalao** y tapas clásicas, **Casa Labra** está a 3-5 min. Para **comer de mercado**, el **Mercado de San Miguel** (reabierto en 2026 tras obras) está pegado a la Plaza Mayor. Consulta las páginas de cada local para ubicación y precios comprobados.`,
          en: `For **pastries and breakfast**, **La Mallorquina** is on Puerta del Sol itself. For **chocolate con churros**, **San Ginés** is a few minutes away. For **bacalao** and classic tapas, **Casa Labra** is 3-5 min off. For **market food**, the **Mercado de San Miguel** (reopened in 2026 after works) sits next to Plaza Mayor. See each venue’s page for location and checked prices.`,
          zh: `**甜点与早餐** 可选广场上的 **La Mallorquina**；**巧克力配油条（churros）** 去几分钟外的 **San Ginés**；**鳕鱼（bacalao）** 与经典小吃可选 3–5 分钟外的 **Casa Labra**；**市场美食** 则去紧邻马约尔广场、2026 年修缮后重新开放的 **圣米格尔市场（Mercado de San Miguel）**。各店详情页含位置与核实价格。`,
        },
      },
      {
        id: 'budget',
        title: {
          es: 'Presupuesto y reserva',
          en: 'Budget and booking',
          zh: '预算与预订',
        },
        content: {
          es: `El rango de precios es muy amplio. Para ahorrar, elige menú del día, bocadillo de calamares o tapas de pie; para sentarte con servicio, cuenta 15-30 € por persona según el local. En fechas de alta demanda (Navidad, San Isidro) muchos restaurantes piden reserva: confirma siempre en la web del local.`,
          en: `Prices vary widely. To save, pick the daily menu, a squid sandwich or standing tapas; for a sit-down meal budget 15-30 € per person depending on the venue. At peak times (Christmas, San Isidro) many restaurants ask for a reservation: always confirm on the venue’s own website.`,
          zh: `价格区间很大。想省钱可选每日套餐、鱿鱼三明治或站着吃的小吃；堂食则按店家不同预留每人 15–30 欧元。旺季（圣诞、圣伊西德罗节）许多餐厅要求预订：请务必在店家官网确认。`,
        },
      },
    ],
    faq: [
      {
        question: {
          es: '¿Dónde comer barato cerca de Sol?',
          en: 'Where to eat cheaply near Sol?',
          zh: '太阳门附近哪里吃得便宜？',
        },
        answer: {
          es: 'El bocadillo de calamares, las tapas de pie y los menús del día son las opciones más económicas; consulta la página de comer barato cerca de Sol para comparativas con precios comprobados.',
          en: 'The squid sandwich, standing tapas and daily menus are the cheapest options; see the eat-cheap-near-Sol page for comparisons with checked prices.',
          zh: '鱿鱼三明治、站着吃的小吃与每日套餐最划算；实惠对比见「太阳门附近平价用餐」页（含核实价格）。',
        },
      },
      {
        question: {
          es: '¿Hay opciones vegetarianas?',
          en: 'Are there vegetarian options?',
          zh: '有素食选择吗？',
        },
        answer: {
          es: 'Sí, cada vez más locales ofrecen menús vegetarianos y veganos; consulta la página de opciones vegetarianas cerca de Sol para selecciones comprobadas.',
          en: 'Yes, more and more places offer vegetarian and vegan menus; see the vegetarian options near Sol page for checked selections.',
          zh: '有，越来越多店家提供素食与纯素菜单；经核实的选择见「太阳门附近素食」页。',
        },
      },
      {
        question: {
          es: '¿Necesito reserva?',
          en: 'Do I need a reservation?',
          zh: '需要预订吗？',
        },
        answer: {
          es: 'Para restaurantes con servicio a la mesa en fecha señalada, sí; para tapas de pie o comida rápida, normalmente no.',
          en: 'For table-service restaurants on a special date, yes; for standing tapas or fast food, usually not.',
          zh: '节假日期间的堂食餐厅建议预订；站着吃的小吃或快餐通常无需预订。',
        },
      },
    ],
    related: ['la-mallorquina', 'chocolateria-san-gines', 'casa-labra', 'mercado-san-miguel', 'tapas-cerca-sol'],
    updated: UPDATED,
  },

  // 15. Tapas cerca de Sol
  {
    slug: 'tapas-cerca-sol',
    group: HOME,
    title: {
      es: 'Tapas cerca de Sol',
      en: 'Tapas Near Sol',
      zh: '太阳门附近的小吃（Tapas）',
    },
    metaTitle: {
      es: 'Tapas cerca de Sol: dónde ir y qué pedir | Madrid',
      en: 'Tapas Near Sol: where to go and what to order | Madrid',
      zh: '太阳门附近的小吃：去哪、点什么 | 马德里',
    },
    description: {
      es: 'Diferencias entre tapeo, bar de stand-up y restaurante, y lugares concretos para picar cerca de la Puerta del Sol.',
      en: 'Differences between tapas crawl, stand-up bar and restaurant, and specific spots to snack near Puerta del Sol.',
      zh: '西班牙小吃「tapas」、站吧与餐厅的区别，以及太阳门广场附近可小酌小食的具体去处。',
    },
    intro: {
      es: `El **tapeo** es una de las experiencias madrileñas por excelencia y la **Puerta del Sol** está en el centro de la acción. Antes de salir, conviene distinguir tres formas de picar: la **tapeo** de bar en bar, el **bar de pie** (raciones rápidas) y el **restaurante** con mesa. Aquí comparamos y sugerimos sitios concretos.`,
      en: `**Tapas** crawling is a quintessential Madrid experience and **Puerta del Sol** sits in the middle of it. Before you go, it helps to tell three ways to snack apart: the **crawl** bar to bar, the **stand-up bar** (quick raciones) and the **restaurant** with a table. We compare and suggest specific spots.`,
      zh: `**tapas（西班牙小吃）** 是马德里的标志性体验，而 **太阳门广场** 正位于活动中心。出发前，不妨先分清三种小酌方式：**逐店漫游**、**站吧**（快速份菜）与 **餐厅堂食**。我们做对比并给出具体去处。`,
    },
    sections: [
      {
        id: 'styles',
        title: {
          es: 'Tres formas de picar',
          en: 'Three ways to snack',
          zh: '三种小酌方式',
        },
        content: {
          es: `El **tapeo** consiste en recorrer varios bares pidiendo una tapa y una bebida en cada uno. El **bar de pie** sirve raciones y tapas acompañadas de vino, cerveza, vermut o refresco, a menudo con la tapa de cortesía. El **restaurante** ofrece mesa asignada y carta, con reserva recomendada. Para una primera visita, el tapeo de pie es lo más ágil.`,
          en: `The **crawl** means visiting several bars and ordering a tapa and a drink in each. The **stand-up bar** serves raciones and tapas with wine, beer, vermouth or soft drinks, often with a courtesy tapa. The **restaurant** gives you a table and a menu, with booking advised. For a first visit, stand-up tapas are the quickest.`,
          zh: `**逐店漫游** 指连走几家酒吧、每家点一份小吃配一杯酒。**站吧** 供应份菜与小吃，配葡萄酒、啤酒、味美思或软饮，常附赠小食。**餐厅** 则提供固定座位与菜单，建议预订。初次到访，站着吃的小吃最省时。`,
        },
      },
      {
        id: 'where',
        title: {
          es: 'Dónde ir desde el Oso y el Madroño',
          en: 'Where to go from the statue',
          zh: '从雕像出发去哪里',
        },
        content: {
          es: `A 3-5 min hacia Callao/ Gran Vía están **Casa Labra** (famoso por el bacalao) y varias tabernas centenarias. Hacia la Plaza Mayor, el **Mercado de San Miguel** reúne puestos de tapas y vinos. Para vermut de la casa, pregunta en las tabernas de la calle de la Cruz o de la calle de las Tetuán. Todos quedan a menos de 10 min a pie.`,
          en: `3-5 min towards Callao/Gran Vía you will find **Casa Labra** (famous for bacalao) and several century-old taverns. Towards Plaza Mayor, the **Mercado de San Miguel** gathers tapas and wine stalls. For house vermouth, ask in the taverns on Calle de la Cruz or Calle de las Tetuán. All are within a 10-minute walk.`,
          zh: `朝卡亚俄/格兰大道走 3–5 分钟，有以鳕鱼闻名的 **Casa Labra** 与数家百年酒馆。朝马约尔广场方向，**圣米格尔市场** 汇集小吃与葡萄酒摊位。想喝店家味美思，可问克鲁斯街（Calle de la Cruz）或特图安街（Calle de las Tetuán）的酒馆。均在步行 10 分钟内。`,
        },
      },
    ],
    faq: [
      {
        question: {
          es: '¿Qué es una tapa de cortesía?',
          en: 'What is a courtesy tapa?',
          zh: '什么是赠送小食（tapa de cortesía）？',
        },
        answer: {
          es: 'En muchos bares madrileños, al pedir una bebida te sirven una pequeña tapa gratis (aceitunas, patatas, etc.). No ocurre en todos, así que no lo des por hecho.',
          en: 'In many Madrid bars, ordering a drink comes with a small free tapa (olives, crisps, etc.). Not everywhere does this, so do not take it for granted.',
          zh: '在马德里许多酒吧，点一杯酒会附赠一份小食（橄榄、薯片等）。并非每家都有，故请勿想当然。',
        },
      },
      {
        question: {
          es: '¿Cuánto cuesta una ronda de tapas?',
          en: 'How much is a round of tapas?',
          zh: '一轮小吃大概多少钱？',
        },
        answer: {
          es: 'Una tapa suele rondar 2-5 € y una ración 6-14 €, según el local; una caña o vino de vermut unos 2-4 €. Siempre confirma el precio en la carta o letrero.',
          en: 'A tapa is usually around 2-5 € and a ración 6-14 € depending on the venue; a beer or vermouth around 2-4 €. Always check the menu or sign.',
          zh: '一份小吃通常约 2–5 欧元，一份菜（ración）约 6–14 欧元，视店家而定；一杯生啤或味美思约 2–4 欧元。请以菜单或招牌价格为准。',
        },
      },
    ],
    related: ['comer', 'casa-labra', 'mercado-san-miguel'],
    updated: UPDATED,
  },

  // 17. Casa Labra
  {
    slug: 'casa-labra',
    group: HOME,
    title: {
      es: 'Casa Labra desde el Oso y el Madroño',
      en: 'Casa Labra from El Oso y el Madroño',
      zh: '从熊与草莓树雕像前往 Casa Labra',
    },
    metaTitle: {
      es: 'Casa Labra: bacalao y tapas desde el Oso y el Madroño | Madrid',
      en: 'Casa Labra: bacalao and tapas from El Oso y el Madroño | Madrid',
      zh: 'Casa Labra：鳕鱼与小吃，从熊与草莓树雕像出发 | 马德里',
    },
    description: {
      es: 'Qué es Casa Labra, dónde está respecto al Oso y el Madroño, a qué distancia y por qué ir por su bacalao.',
      en: 'What Casa Labra is, where it is relative to the statue, how far and why go for its bacalao.',
      zh: 'Casa Labra 是什么、相对于雕像的位置与距离，以及为何为鳕鱼而去。',
    },
    intro: {
      es: `**Casa Labra** es una taberna centenaria madrileña conocida sobre todo por su **bacalao** (alcoholado y en croquetas) y sus tapas clásicas. Está a unos **3-5 minutos a pie** del **Oso y el Madroño**, camino de Callao y Gran Vía, y es una parada fija para quien quiere probar un bocado madrileño de toda la vida. (Guía independiente de terceros; comprueba siempre horarios y precios en la web del local.)`,
      en: `**Casa Labra** is a century-old Madrid tavern best known for its **bacalao** (salt-cod, both in liquor and in croquettes) and classic tapas. It is about **3-5 minutes on foot** from the **Oso y el Madroño**, on the way to Callao and Gran Vía, and a fixture for anyone wanting a traditional Madrid bite. (Independent third-party guide; always check hours and prices on the venue’s own site.)`,
      zh: `**Casa Labra** 是一家百年马德里老酒馆，以 **鳕鱼（bacalao，含酒渍与炸丸）** 与经典小吃闻名。它距 **熊与草莓树雕像** 步行约 **3–5 分钟**，在前往卡亚俄与格兰大道的路上，是想尝一口地道马德里风味的人必到之处。（独立第三方指南；营业时间与价格请务必以店家官网为准。）`,
    },
    sections: [
      {
        id: 'where',
        title: {
          es: 'Ubicación y cómo llegar',
          en: 'Location and how to get there',
          zh: '位置与如何前往',
        },
        content: {
          es: `Casa Labra está en la **Calle de Tetuán, 11**, a unos 300 m del Oso y el Madroño. Sal de la Puerta del Sol por la **Calle del Carmen** (hacia Gran Vía), gira a la izquierda en la Calle de la Cruz y luego a la derecha en Tetuán; en total unos **4 minutos** a paso tranquilo. El local tiene acceso desde la calle, con bar de pie y salón de mesa.`,
          en: `Casa Labra is at **Calle de Tetuán, 11**, about 300 m from the Oso y el Madroño. Leave Puerta del Sol along **Calle del Carmen** (towards Gran Vía), turn left on Calle de la Cruz and right on Tetuán; about **4 minutes** at an easy pace. The venue is street-level, with a stand-up bar and a seated room.`,
          zh: `Casa Labra 位于 **特图安街 11 号（Calle de Tetuán, 11）**，距熊与草莓树雕像约 300 米。从太阳门广场沿 **卡门街**（朝格兰大道）出，左转克鲁斯街、再右转特图安街，从容步行约 **4 分钟**。店面临街，设有站吧与堂食区。`,
        },
      },
      {
        id: 'what',
        title: {
          es: 'Qué pedir',
          en: 'What to order',
          zh: '点什么',
        },
        content: {
          es: `Lo más pedido es el **bacalao** (porción de bacalao alcoholado y sus croquetas de bacalao), además de callos, croquetas variadas y bocadillos. Se puede tomar de pie en el bar o sentado en el comedor. Es un local histórico (abierto desde 1860), así que la visita es también un poco de historia madrileña.`,
          en: `The most ordered dishes are the **bacalao** (a portion of liquor-cured salt cod and its bacalao croquettes), along with tripe, assorted croquettes and sandwiches. You can stand at the bar or sit in the dining room. It is a historic venue (open since 1860), so the visit is also a bit of Madrid history.`,
          zh: `最常被点的是 **鳕鱼**（酒渍鳕鱼份菜及其鳕鱼炸丸），此外还有牛肚、各式炸丸与三明治。可在吧台站着吃，也可在餐室入座。这是一家历史悠久的老店（1860 年开业），到访也是一次马德里历史的体验。`,
        },
      },
    ],
    faq: [
      {
        question: {
          es: '¿A cuánto está del Oso y el Madroño?',
          en: 'How far from the statue?',
          zh: '离雕像有多远？',
        },
        answer: {
          es: 'Unos **3-5 minutos a pie** por la Calle del Carmen y Tetuán, unos 300 m.',
          en: 'About **3-5 minutes on foot** via Calle del Carmen and Tetuán, roughly 300 m.',
          zh: '经卡门街与特图安街步行约 **3–5 分钟**，约 300 米。',
        },
      },
      {
        question: {
          es: '¿Qué es el bacalao de Casa Labra?',
          en: 'What is Casa Labra’s bacalao?',
          zh: 'Casa Labra 的鳕鱼是什么？',
        },
        answer: {
          es: 'Es bacalao salado curado en un preparado alcohólico (el «bacalao alcoholado»), servido como tapa, además de croquetas de bacalao. Es su plato más conocido.',
          en: 'It is salt cod cured in an alcoholic preparation (the «bacalao alcoholado»), served as a tapa, plus bacalao croquettes. It is their best-known dish.',
          zh: '是经酒类腌制的咸鳕鱼（「bacalao alcoholado」），作为小吃供应，另有鳕鱼炸丸。这是它最知名的菜。',
        },
      },
    ],
    related: ['comer', 'tapas-cerca-sol', 'la-mallorquina'],
    updated: UPDATED,
  },

  // 20. Mercado de San Miguel
  {
    slug: 'mercado-san-miguel',
    group: HOME,
    title: {
      es: 'Mercado de San Miguel desde Sol',
      en: 'Mercado de San Miguel from Sol',
      zh: '从太阳门前往圣米格尔市场',
    },
    metaTitle: {
      es: 'Mercado de San Miguel: cómo llegar desde Sol y qué comer | Madrid',
      en: 'Mercado de San Miguel: how to get there from Sol and what to eat | Madrid',
      zh: '圣米格尔市场：从太阳门怎么去、吃什么 | 马德里',
    },
    description: {
      es: 'Cómo ir del Oso y el Madroño al Mercado de San Miguel, qué encontrarás tras su reapertura de 2026 y consejos para visitarlo.',
      en: 'How to go from the statue to Mercado de San Miguel, what you will find after its 2026 reopening and tips for visiting.',
      zh: '如何从雕像走到圣米格尔市场、2026 年重新开放后有啥，以及参观建议。',
    },
    intro: {
      es: `El **Mercado de San Miguel** es un mercado gourmet bajo una estructura de hierro y cristal, pegado a la **Plaza Mayor** y a unos **7-8 minutos a pie** del **Oso y el Madroño**. Tras las obras de conservación, reabrió en **febrero de 2026** (según el anuncio oficial del propio mercado), así que conviene consultar la web para horarios y puestos actuales. (Guía independiente de terceros; no somos la web oficial del mercado.)`,
      en: `The **Mercado de San Miguel** is a gourmet market under an iron-and-glass structure, next to **Plaza Mayor** and about **7-8 minutes on foot** from the **Oso y el Madroño**. After conservation works it reopened in **February 2026** (per the market’s own official announcement), so check its website for current hours and stalls. (Independent third-party guide; we are not the market’s official site.)`,
      zh: `**圣米格尔市场** 是一座坐落于铁与玻璃结构之下的美食市场，紧邻 **马约尔广场**，距 **熊与草莓树雕像** 步行约 **7–8 分钟**。经过修缮工程后，它于 **2026 年 2 月** 重新开放（依据市场自身官方公告），故请以官网查询当前营业时间与摊位。（独立第三方指南，并非市场官方网站。）`,
    },
    sections: [
      {
        id: 'route',
        title: {
          es: 'Cómo llegar desde la estatua',
          en: 'How to get there from the statue',
          zh: '从雕像怎么去',
        },
        content: {
          es: `La ruta más directa es ir primero a la **Plaza Mayor** (5 min por la Calle Mayor) y desde allí bajar por la calle de los Cuchilleros o la calle de la Cruz hasta la **Plaza de San Miguel**, donde está el mercado. También puedes salir de Sol por la Calle de Arenal y bajar hacia el sur; en total 7-8 minutos.`,
          en: `The most direct route is to go first to **Plaza Mayor** (5 min via Calle Mayor) and from there down Calle de los Cuchilleros or Calle de la Cruz to **Plaza de San Miguel**, where the market stands. You can also leave Sol via Calle de Arenal heading south; about 7-8 minutes total.`,
          zh: `最便捷的路线是先到 **马约尔广场**（经马约尔街 5 分钟），再从那里沿库奇列罗斯街或克鲁斯街下行至市场所在的 **圣米格尔广场**。也可从太阳门沿阿雷纳尔街向南走；全程 7–8 分钟。`,
        },
      },
      {
        id: 'what',
        title: {
          es: 'Qué encontrarás',
          en: 'What you will find',
          zh: '你会看到什么',
        },
        content: {
          es: `El mercado reúne puestos de **jamón ibérico, ostras, mariscos, vinos, pinchos calientes y dulces**. Es ideal para picar deStand y probar varias cosas en una sola visita. Los precios son más altos que en un bar corriente, pero la experiencia (edificio histórico y ambiente) es parte del atractivo. Tras la reapertura de 2026, el espacio se renovó con criterios de conservación.`,
          en: `The market gathers stalls of **Iberian ham, oysters, seafood, wine, hot pintxos and sweets**. It is ideal for grazing and sampling several things in one visit. Prices are higher than at an ordinary bar, but the experience (historic building and buzz) is part of the appeal. After the 2026 reopening the space was renewed with conservation criteria.`,
          zh: `市场汇集了 **伊比利亚火腿、生蚝、海鲜、葡萄酒、热 pinchos 与甜点** 摊位。非常适合边逛边吃、一次尝遍多种风味。价格高于普通酒吧，但体验（历史建筑与热闹氛围）本身就是吸引力的一部分。2026 年重开后天花板与空间按保护标准焕新。`,
        },
      },
    ],
    faq: [
      {
        question: {
          es: '¿Cuánto se tarda desde Sol?',
          en: 'How long from Sol?',
          zh: '从太阳门要多久？',
        },
        answer: {
          es: 'Unos **7-8 minutos a pie** pasando por la Plaza Mayor.',
          en: 'About **7-8 minutes on foot** via Plaza Mayor.',
          zh: '经马约尔广场步行约 **7–8 分钟**。',
        },
      },
      {
        question: {
          es: '¿Está abierto tras las obras?',
          en: 'Is it open after the works?',
          zh: '修缮后开放了吗？',
        },
        answer: {
          es: 'Sí: el mercado anunció su reapertura en febrero de 2026 tras las obras de conservación. Confirma horas y puestos en su web oficial antes de ir.',
          en: 'Yes: the market announced its reopening in February 2026 after conservation works. Confirm hours and stalls on its official website before going.',
          zh: '是的：市场宣布修缮后于 2026 年 2 月重新开放。出发前请以官网确认营业时间与摊位。',
        },
      },
    ],
    related: ['plaza-mayor-desde-sol', 'comer', 'tapas-cerca-sol'],
    updated: UPDATED,
  },

  // 23. Desayunar cerca de Sol
  {
    slug: 'desayunar-cerca-sol',
    group: HOME,
    title: {
      es: 'Dónde desayunar cerca de Puerta del Sol',
      en: 'Where to Have Breakfast Near Puerta del Sol',
      zh: '太阳门广场附近去哪吃早餐',
    },
    metaTitle: {
      es: 'Dónde desayunar cerca de Puerta del Sol: opciones y horarios | Madrid',
      en: 'Where to Have Breakfast Near Puerta del Sol: options and times | Madrid',
      zh: '太阳门广场附近吃早餐：选择与时段 | 马德里',
    },
    description: {
      es: 'Tipos de desayuno en el centro de Madrid y locales concretos (como La Mallorquina) para empezar el día cerca de Sol.',
      en: 'Kinds of breakfast in central Madrid and specific spots (like La Mallorquina) to start the day near Sol.',
      zh: '马德里市中心的早餐类型，以及太阳门附近具体的去处（如 La Mallorquina）。',
    },
    intro: {
      es: `Desayunar cerca de la **Puerta del Sol** es cómodo: el centro abre pronto y hay de todo, desde una **napolitana** de chocolate hasta un café de especialidad. Si vas a ver el **Oso y el Madroño** por la mañana, aprovecha para desayunar antes o después. Aquí comparamos opciones y destacamos un clásico. (Guía independiente de terceros.)`,
      en: `Breakfast near **Puerta del Sol** is easy: the centre opens early and offers everything from a chocolate **napolitana** to a speciality coffee. If you are seeing the **Oso y el Madroño** in the morning, grab breakfast before or after. We compare options and highlight a classic. (Independent third-party guide.)`,
      zh: `在 **太阳门广场** 附近吃早餐很方便：市中心开门早，从巧克力 **napolitana 卷** 到精品咖啡应有尽有。若你上午来看 **熊与草莓树雕像**，不妨前后顺道吃个早餐。我们比较选项并介绍一家经典店。（独立第三方指南。）`,
    },
    sections: [
      {
        id: 'types',
        title: {
          es: 'Tipos de desayuno',
          en: 'Kinds of breakfast',
          zh: '早餐类型',
        },
        content: {
          es: `El desayuno madrileño clásico es **café con leche + bollería** (napolitana, croissant, palmera). También hay **tostadas** con aceite/tomate/jamón, **bocadillo de jamón** y, los fines de semana, **brunch**. Para algo más elaborado, las cafeterías de especialidad abren desde primera hora con café de origen y opciones sin gluten.`,
          en: `The classic Madrid breakfast is **coffee with milk + pastry** (napolitana, croissant, palmier). There are also **toasts** with oil/tomato/ham, a **ham roll** and, at weekends, **brunch**. For something more crafted, speciality cafés open early with single-origin coffee and gluten-free options.`,
          zh: `马德里经典早餐是 **拿铁咖啡 + 糕点**（napolitana 卷、可颂、棕榈酥）。还有 **吐司**（配橄榄油/番茄/火腿）、**火腿三明治**，周末则有 **早午餐**。想精致些，精品咖啡馆一早营业，提供单一产区咖啡与无麸质选择。`,
        },
      },
      {
        id: 'where',
        title: {
          es: 'Dónde ir: La Mallorquina y más',
          en: 'Where to go: La Mallorquina and more',
          zh: '去哪：La Mallorquina 等',
        },
        content: {
          es: `**La Mallorquina**, en la propia Puerta del Sol, es el clásico para llevarse una napolitana de chocolate y un café. A pocos pasos, en la Calle de la Cruz y alrededores, hay cafeterías y pastelerías para sentarse. Si prefieres café de especialidad, baja hacia la zona de Arenal/Ópera, donde varias tostadoras abren temprano.`,
          en: `**La Mallorquina**, on Puerta del Sol itself, is the classic for a chocolate napolitana and a coffee to take away. A few steps away, on Calle de la Cruz and around, there are cafés and bakeries to sit down. If you prefer speciality coffee, head down towards the Arenal/Ópera area, where several roasters open early.`,
          zh: `广场上的 **La Mallorquina** 是经典之选，可外带一份巧克力 napolitana 卷与一杯咖啡。几步之外的克鲁斯街一带，有可供堂食的咖啡与糕点店。若偏好精品咖啡，往阿雷纳尔/歌剧院方向走，有几家烘焙店一早营业。`,
        },
      },
    ],
    faq: [
      {
        question: {
          es: '¿A qué hora abren las cafeterías?',
          en: 'What time do cafés open?',
          zh: '咖啡馆几点开门？',
        },
        answer: {
          es: 'Muchas abren entre las 7:00 y las 8:30 h; las pastelerías de Sol (como La Mallorquina) suelen abrir temprano para el desayuno de los que van a trabajar.',
          en: 'Many open between 7:00 and 8:30 am; the Sol bakeries (like La Mallorquina) tend to open early for commuters’ breakfast.',
          zh: '许多店 7:00 至 8:30 之间开门；太阳门一带的糕点店（如 La Mallorquina）通常很早开门，服务通勤者的早餐。',
        },
      },
      {
        question: {
          es: '¿Dónde comprar dulces para llevar?',
          en: 'Where to buy sweets to take away?',
          zh: '在哪里买可外带的甜点？',
        },
        answer: {
          es: 'La Mallorquina (en la plaza) es la opción más conocida para napolitanas y empanadas dulces; hay también otras pastelerías en las calles adyacentes.',
          en: 'La Mallorquina (on the square) is the best-known for napolitanas and sweet empanadas; other bakeries are on the adjacent streets.',
          zh: '广场上的 La Mallorquina 是 napolitana 卷与甜馅饼最知名的选择；周边街道也有其他糕点店。',
        },
      },
    ],
    related: ['la-mallorquina', 'comer', 'chocolateria-san-gines'],
    updated: UPDATED,
  },

  // 24. La Mallorquina
  {
    slug: 'la-mallorquina',
    group: HOME,
    title: {
      es: 'La Mallorquina en Puerta del Sol',
      en: 'La Mallorquina in Puerta del Sol',
      zh: '太阳门广场的 La Mallorquina',
    },
    metaTitle: {
      es: 'La Mallorquina: qué pedir en Puerta del Sol | Madrid',
      en: 'La Mallorquina: what to order in Puerta del Sol | Madrid',
      zh: 'La Mallorquina：太阳门广场点什么 | 马德里',
    },
    description: {
      es: 'Qué es La Mallorquina, dónde está en la Puerta del Sol, qué pedir y cómo encajarla en tu ruta desde el Oso y el Madroño.',
      en: 'What La Mallorquina is, where it is on Puerta del Sol, what to order and how to fit it into your route from the statue.',
      zh: 'La Mallorquina 是什么、在太阳门广场的何处、点什么，以及如何把它安排进从雕像出发的路线。',
    },
    intro: {
      es: `**La Mallorquina** es una pastelería emblemática en la esquina de la **Puerta del Sol** (salida a la Calle de la Carrera de San Jerónimo), abierta desde 1894. Es famosa por sus **napolitanas de chocolate** y sus **empanadas dulces**, y es el lugar más rápido para un desayuno o un dulce de la merienda justo al lado del **Oso y el Madroño**. (Guía independiente de terceros; confirma horarios en su web.)`,
      en: `**La Mallorquina** is a landmark bakery on the corner of **Puerta del Sol** (exit towards Carrera de San Jerónimo), open since 1894. It is famous for its **chocolate napolitanas** and **sweet empanadas**, and is the quickest spot for breakfast or an afternoon treat right next to the **Oso y el Madroño**. (Independent third-party guide; confirm hours on its site.)`,
      zh: `**La Mallorquina** 是 **太阳门广场** 转角（通往圣赫罗尼莫大道一侧）的标志性糕点店，自 1894 年营业。它以 **巧克力 napolitana 卷** 与 **甜馅饼** 闻名，是从 **熊与草莓树雕像** 出来最快吃到早餐或下午甜点的地方。（独立第三方指南，营业时间请以官网为准。）`,
    },
    sections: [
      {
        id: 'where',
        title: {
          es: 'Ubicación y cómo llegar',
          en: 'Location and how to get there',
          zh: '位置与如何前往',
        },
        content: {
          es: `Está en la **Puerta del Sol, 8**, en la esquina de salida hacia la Carrera de San Jerónimo, a unos **1-2 minutos** del Oso y el Madroño. Es planta baja con mostrador y, en la planta superior, una salita de café con vistas a la plaza. No suele hacer falta reserva; se compra y se consume de pie o se sube a la salita.`,
          en: `It is at **Puerta del Sol, 8**, on the corner exiting towards Carrera de San Jerónimo, about **1-2 minutes** from the Oso y el Madroño. It is ground-floor with a counter and, upstairs, a small coffee room with views over the square. Booking is rarely needed; buy and eat standing or go up to the room.`,
          zh: `它位于 **太阳门广场 8 号**，在通往圣赫罗尼莫大道的出口转角，距熊与草莓树雕像约 **1–2 分钟**。店面底层设柜台，楼上有可俯瞰广场的小咖啡座。通常无需预订；买后站着吃或上楼入座即可。`,
        },
      },
      {
        id: 'what',
        title: {
          es: 'Qué pedir',
          en: 'What to order',
          zh: '点什么',
        },
        content: {
          es: `Lo más famoso son la **napolitana de chocolate** (hojaldre relleno de chocolate) y la **empanada de hojaldre dulce** (rellena de cabello de ángel o crema). También tienen tartas por raciones y café con leche. Es un local histórico y muy concurrido, así que en horas punta hay cola en el mostrador.`,
          en: `The most famous items are the **chocolate napolitana** (puff pastry filled with chocolate) and the **sweet puff empanada** (filled with angel hair or custard). They also do cakes by the slice and coffee with milk. It is a historic, very busy spot, so at peak times there is a queue at the counter.`,
          zh: `最出名的是 **巧克力 napolitana 卷**（包裹巧克力的酥皮）与 **甜酥馅饼**（内馅为天使丝或卡仕达）。也有按块售卖的塔派与拿铁咖啡。这是一家历史老店、生意极旺，高峰时段柜台前会排队。`,
        },
      },
    ],
    faq: [
      {
        question: {
          es: '¿A cuánto está del Oso y el Madroño?',
          en: 'How far from the statue?',
          zh: '离雕像多远？',
        },
        answer: {
          es: 'A **1-2 minutos a pie**, en la misma Puerta del Sol.',
          en: '**1-2 minutes on foot**, on the same Puerta del Sol.',
          zh: '步行 **1–2 分钟**，同在太阳门广场上。',
        },
      },
      {
        question: {
          es: '¿Tiene sitio para sentarse?',
          en: 'Is there seating?',
          zh: '有座位吗？',
        },
        answer: {
          es: 'Sí, en la planta superior hay una pequeña salita de café con vistas a la plaza; la planta baja es de compra y consumo de pie.',
          en: 'Yes, upstairs there is a small coffee room with square views; the ground floor is for buying and standing.',
          zh: '有，楼上有可俯瞰广场的小咖啡座；底层用于购买与站立食用。',
        },
      },
    ],
    related: ['desayunar-cerca-sol', 'chocolateria-san-gines', 'comer', 'puerta-del-sol'],
    updated: UPDATED,
  },

  // 25. Chocolatería San Ginés
  {
    slug: 'chocolateria-san-gines',
    group: HOME,
    title: {
      es: 'Chocolate con churros en San Ginés',
      en: 'Chocolate con Churros at San Ginés',
      zh: 'San Ginés 的巧克力油条（Churros）',
    },
    metaTitle: {
      es: 'Chocolatería San Ginés: cómo llegar desde Sol | Madrid',
      en: 'Chocolatería San Ginés: how to get there from Sol | Madrid',
      zh: 'San Ginés 巧克力店：从太阳门怎么去 | 马德里',
    },
    description: {
      es: 'Qué es San Ginés, diferencias en el menú (chocolate a la taza, porras, churros) y la ruta a pie desde el Oso y el Madroño.',
      en: 'What San Ginés is, menu differences (hot chocolate, porras, churros) and the walking route from the statue.',
      zh: 'San Ginés 是什么、菜单区别（杯装热巧克力、porras、churros）以及从雕像步行前往的路线。',
    },
    intro: {
      es: `La **Chocolatería San Ginés** es un clásico madrileño del **chocolate con churros**, abierto desde 1894 y famoso por atender a cualquier hora (incluida la madrugada tras salir de fiesta). Está a unos **5-7 minutos a pie** del **Oso y el Madroño**, cerca de la Plaza Mayor y la calle Arenal. (Guía independiente de terceros; comprueba horarios en su web.)`,
      en: `**Chocolatería San Ginés** is a Madrid classic for **chocolate con churros**, open since 1894 and famous for serving at any hour (including the early morning after a night out). It is about **5-7 minutes on foot** from the **Oso y el Madroño**, near Plaza Mayor and Calle Arenal. (Independent third-party guide; check hours on its site.)`,
      zh: `**San Ginés 巧克力店** 是马德里 **巧克力配油条** 的经典老店，自 1894 年营业，以任何时段（包括狂欢后凌晨）都开门而闻名。它距 **熊与草莓树雕像** 步行约 **5–7 分钟**，靠近马约尔广场与阿雷纳尔街。（独立第三方指南，营业时间请以官网为准。）`,
    },
    sections: [
      {
        id: 'route',
        title: {
          es: 'Ruta a pie desde la estatua',
          en: 'Walking route from the statue',
          zh: '从雕像步行路线',
        },
        content: {
          es: `Sal de la Puerta del Sol por la **Calle de Arenal** (hacia el sur, dirección Teatro Real/Ópera). Tras unos 250 m, gira a la derecha en la **Calle de San Ginés** (pasaje peatonal) y encontrarás la chocolatería en el número 5. En total **5-7 minutos** a paso tranquilo. También se puede ir pasando por delante de la Plaza Mayor.`,
          en: `Leave Puerta del Sol along **Calle de Arenal** (south, towards Teatro Real/Ópera). After about 250 m, turn right into **Calle de San Ginés** (a pedestrian passage) and you will find the chocolatería at number 5. About **5-7 minutes** at an easy pace. You can also pass in front of Plaza Mayor.`,
          zh: `从太阳门广场沿 **阿雷纳尔街**（向南，朝皇家剧院/歌剧院方向）出。约 250 米后右转进入 **圣希内斯街（Calle de San Ginés）**（步行通道），5 号即是巧克力店。从容步行 **5–7 分钟**。也可途经马约尔广场前方。`,
        },
      },
      {
        id: 'menu',
        title: {
          es: 'Qué pedir: chocolate, churros y porras',
          en: 'What to order: chocolate, churros and porras',
          zh: '点什么：巧克力、churros 与 porras',
        },
        content: {
          es: `El plato estrella es el **chocolate a la taza** (denso, para mojar) con **churros** (finos y rizados) o **porras** (más gruesas). Pide «chocolate con churros» o, si prefieres algo más contundente, «con porras». Se sirve de madrugada y a cualquier hora; es un capricho, no un desayuno completo.`,
          en: `The star dish is **hot chocolate** (thick, for dipping) with **churros** (thin, curled) or **porras** (thicker). Order «chocolate con churros» or, if you want something more substantial, «con porras». It is served late at night and at any hour; a treat, not a full breakfast.`,
          zh: `招牌是杯装 **热巧克力**（浓稠、可蘸）配 **churros**（细而卷）或 **porras**（更粗）。点「chocolate con churros」，若想要扎实些可点「con porras」。它深夜与任何时段都供应；算是犒赏，而非完整早餐。`,
        },
      },
    ],
    faq: [
      {
        question: {
          es: '¿Cuánto se tarda desde el Oso y el Madroño?',
          en: 'How long from the statue?',
          zh: '从雕像要走多久？',
        },
        answer: {
          es: 'Unos **5-7 minutos** por la Calle de Arenal y la calle de San Ginés.',
          en: 'About **5-7 minutes** via Calle de Arenal and Calle de San Ginés.',
          zh: '经阿雷纳尔街与圣希内斯街约 **5–7 分钟**。',
        },
      },
      {
        question: {
          es: '¿Abren toda la noche?',
          en: 'Are they open all night?',
          zh: '通宵营业吗？',
        },
        answer: {
          es: 'San Ginés es conocido por horario muy amplio (a menudo 24 h o hasta muy tarde); confirma el horario exacto en su web, que puede variar según temporada.',
          en: 'San Ginés is known for very long hours (often 24h or until very late); confirm the exact schedule on its website, which can vary by season.',
          zh: 'San Ginés 以极长营业时间著称（常 24 小时或至深夜）；确切时间请见其官网，可能随季节变动。',
        },
      },
    ],
    related: ['desayunar-cerca-sol', 'comer', 'plaza-mayor-desde-sol'],
    updated: UPDATED,
  },

  // 34. Puerta del Sol en una hora
  {
    slug: 'sol-en-una-hora',
    group: HOME,
    title: {
      es: 'Puerta del Sol en una hora',
      en: 'Puerta del Sol in One Hour',
      zh: '太阳门广场一小时路线',
    },
    metaTitle: {
      es: 'Puerta del Sol en una hora: ruta exprés | Madrid',
      en: 'Puerta del Sol in One Hour: express route | Madrid',
      zh: '太阳门广场一小时：快速路线 | 马德里',
    },
    description: {
      es: 'Una ruta de una hora que combina el Oso y el Madroño, el Kilómetro Cero, el reloj y la Plaza Mayor, para visitantes con poco tiempo.',
      en: 'A one-hour route combining the Oso y el Madroño, Kilometre Zero, the clock and Plaza Mayor, for visitors short on time.',
      zh: '一小时路线：结合熊与草莓树雕像、零公里、钟楼与马约尔广场，适合时间有限的游客。',
    },
    intro: {
      es: `Si tienes solo **una hora** junto al **Oso y el Madroño**, esta ruta exprés te permite ver los hitos esenciales de la **Puerta del Sol** y llegar hasta la **Plaza Mayor** sin prisa. Está pensada para quien visita Madrid de paso o empieza el día en el centro.`,
      en: `If you have only **one hour** by the **Oso y el Madroño**, this express route lets you see the essential landmarks of **Puerta del Sol** and reach **Plaza Mayor** without rushing. It is meant for passers-through or anyone starting the day in the centre.`,
      zh: `若在 **熊与草莓树雕像** 旁只有 **一小时**，这条快速路线让你不慌不忙地看完 **太阳门广场** 的核心地标，并走到 **马约尔广场**。适合路过马德里或以市中心为起点的人。`,
    },
    sections: [
      {
        id: 'plan',
        title: {
          es: 'El plan paso a paso',
          en: 'The step-by-step plan',
          zh: '分步计划',
        },
        content: {
          es: `**0-10 min:** foto al **Oso y el Madroño** y lectura de su placa. **10-20 min:** el **Kilómetro Cero** y la fachada de la Real Casa de Correos con el reloj de las campanadas. **20-30 min:** la estatua de la **Mariblanca** y la salida por la Calle Mayor. **30-45 min:** paseo hasta la **Plaza Mayor** (5 min) y vuelta a la plaza. **45-60 min:** café de pie o una tapa rápida antes de continuar.`,
          en: `**0-10 min:** photo at the **Oso y el Madroño** and read its plaque. **10-20 min:** **Kilometre Zero** and the Royal House of the Post Office façade with the New Year clock. **20-30 min:** the **Mariblanca** statue and exit via Calle Mayor. **30-45 min:** walk to **Plaza Mayor** (5 min) and back. **45-60 min:** a stand-up coffee or quick tapa before moving on.`,
          zh: `**0–10 分：** 在 **熊与草莓树雕像** 拍照并读说明牌。**10–20 分：** **零公里** 与邮政宫立面上的跨年钟楼。**20–30 分：** **玛丽布兰卡** 雕像，并沿马约尔街离开。**30–45 分：** 步行至 **马约尔广场**（5 分钟）再折返。**45–60 分：** 站着喝杯咖啡或快速吃份小吃再继续。`,
        },
      },
      {
        id: 'tips',
        title: {
          es: 'Consejos para ajustar el tiempo',
          en: 'Tips to adjust the time',
          zh: '调整时间的建议',
        },
        content: {
          es: `Si vas con prisa, puedes recortar la parada en la Plaza Mayor a 10 min y ahorrar 15. Si llueve, refúgiate en los soportales de la Plaza Mayor o en una cafetería de la Calle Mayor. Lleva calzado cómodo: todo el recorrido es peatonal y llano.`,
          en: `If you are in a rush, cut the Plaza Mayor stop to 10 minutes and save 15. If it rains, take shelter in the Plaza Mayor arcades or a Calle Mayor café. Wear comfortable shoes: the whole route is flat and pedestrian.`,
          zh: `若赶时间，可把马约尔广场停留缩至 10 分钟，省下 15 分钟。若遇雨，可躲进马约尔广场的拱廊或马约尔街的咖啡馆。穿舒适鞋：全程为平坦步行区。`,
        },
      },
    ],
    faq: [
      {
        question: {
          es: '¿Se puede hacer con niños?',
          en: 'Can you do it with children?',
          zh: '可以带小孩走吗？',
        },
        answer: {
          es: 'Sí: el recorrido es llano, peatonal y corto; la Plaza Mayor tiene soportales para descansar. Para una versión con más paradas, mira la ruta con niños.',
          en: 'Yes: the route is flat, pedestrian and short; Plaza Mayor has arcades to rest. For more stops, see the with-children route.',
          zh: '可以：路线平坦、步行且短；马约尔广场有拱廊可供休息。想要更多停靠点，参见「亲子路线」。',
        },
      },
      {
        question: {
          es: '¿Vale la pena la parada en la Plaza Mayor?',
          en: 'Is the Plaza Mayor stop worth it?',
          zh: '值得在马约尔广场停留吗？',
        },
        answer: {
          es: 'Sí: está a 5 min y es una de las plazas más famosas de España; aunque sea solo para cruzarla y ver la estatua de Felipe III, vale el desvío.',
          en: 'Yes: it is 5 minutes away and one of Spain’s most famous squares; even just crossing it to see the Felipe III statue makes the detour worthwhile.',
          zh: '值得：仅 5 分钟路程，是西班牙最著名的广场之一；即便只是穿行并看看腓力三世像，也值得绕一下。',
        },
      },
    ],
    related: ['puerta-del-sol', 'kilometro-cero', 'plaza-mayor-desde-sol'],
    updated: UPDATED,
  },
];

export function getTopic(slug: string): TopicContent | undefined {
  return TOPICS.find((t) => t.slug === slug);
}

export const TOPIC_SLUGS: string[] = TOPICS.map((t) => t.slug);
