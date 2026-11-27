import { nearbyTopics } from './nearby';
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
  place?: {
    address: string;
    walk: Record<Locale, string>;
    visit: Record<Locale, string>;
    mapQuery: string;
    caption: Record<Locale, string>;
    source: string;
    photo: string;
    photoSource: string;
  };
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
    "slug": "historia-significado",
    "group": {
      "es": "El Oso y el Madroño",
      "en": "El Oso y el Madroño",
      "zh": "熊与草莓树雕像"
    },
    "title": {
      "es": "Historia y significado del Oso y el Madroño",
      "en": "History and Meaning of El Oso y el Madroño",
      "zh": "熊与草莓树雕像的历史与意义"
    },
    "metaTitle": {
      "es": "Historia y significado del Oso y el Madroño | Madrid",
      "en": "History and Meaning of El Oso y el Madroño | Madrid",
      "zh": "熊与草莓树雕像的历史与意义 | 马德里"
    },
    "description": {
      "es": "Por qué el oso y el madroño son el símbolo de Madrid, quién hizo la escultura y cómo llegó a la Puerta del Sol.",
      "en": "Why the bear and the strawberry tree are Madrid’s symbol, who made the sculpture and how it reached Puerta del Sol.",
      "zh": "为什么熊与草莓树是马德里的象征、谁创作了这座雕像，以及它如何来到太阳门广场。"
    },
    "intro": {
      "es": "El **Oso y el Madroño** es mucho más que una escultura: es la representación del escudo de **Madrid**. La obra de bronce que hoy preside la **Puerta del Sol** explica, de forma visible para cualquier visitante, el origen de las armas de la ciudad. En esta página repasamos su historia, su significado heráldico y los hitos que llevaron la estatua a su ubicación actual.",
      "en": "The **Oso y el Madroño** is far more than a sculpture: it is the depiction of **Madrid’s** coat of arms. The bronze work that now stands in **Puerta del Sol** visibly explains the origin of the city’s arms. This page covers its history, its heraldic meaning and the milestones that brought the statue to its current spot.",
      "zh": "**熊与草莓树雕像** 不只是一尊雕塑，它是 **马德里** 城徽的具象呈现。如今矗立于 **太阳门广场（Puerta del Sol）** 的青铜作品，直观解释了这座城市徽记的由来。本页梳理它的历史、纹章意义，以及雕像如何抵达今天的位置。"
    },
    "sections": [
      {
        "id": "heraldic",
        "title": {
          "es": "El origen heráldico: oso y madroño",
          "en": "The heraldic origin: bear and strawberry tree",
          "zh": "纹章起源：熊与草莓树"
        },
        "content": {
          "es": "Las figuras del oso y el madroño proceden de las armas que la Villa adoptó ya en tiempos de **Alfonso VIII**. Un pleito medieval con el Cabildo de Curas por la propiedad de pastos y arboledas acabó por repartir los símbolos: el Cabildo se quedó con el oso y la Villa, con los árboles y la caza, adoptó para su escudo el **madroño** (el árbol de fresa) y el oso empinado ante él. El blasón actual, dividido en tres cuarteles, se fijó en 1859.",
          "en": "The bear and the strawberry tree come from the arms the town adopted as far back as the time of **Alfonso VIII**. A medieval dispute with the Cabildo de Curas over pastures and woodlands ended up splitting the symbols: the Cabildo kept the bear, while the town took the trees and the hunt, adopting the **strawberry tree** (arbutus) and the bear rearing up against it. The present three-quarter shield was settled in 1859.",
          "zh": "熊与草莓树的形象，源自 **阿方索八世（Alfonso VIII）** 时代马德里城所采用的徽记。中世纪时，市政与神职公会（Cabildo de Curas）因牧场与林地的归属发生争端，最终分割了象征物：公会保留了熊，而城邦取走了林木与狩猎，将 **草莓树（madroño）** 与倚树而立的熊纳入城徽。如今分为三格的盾徽于 1859 年定型。"
        }
      },
      {
        "id": "creation",
        "title": {
          "es": "Creación e inauguración (1967)",
          "en": "Creation and inauguration (1967)",
          "zh": "创作与揭幕（1967 年）"
        },
        "content": {
          "es": "La obra en bronce de **Antonio Navarro Santafé** se inauguró el **19 de enero de 1967**. El oso y el árbol se apoyan en una base de caliza y un pedestal de granito. La escultura ha cambiado de posición dentro de Sol; tras la reforma de la plaza iniciada en 2022 volvió al entorno del inicio de Alcalá. Mira la relación de las dos figuras antes de buscar el mismo motivo en otros símbolos de Madrid.",
          "en": "**Antonio Navarro Santafé’s** bronze work was unveiled on **19 January 1967**. The bear and tree rest on a limestone base and granite pedestal. The sculpture has moved within Sol; following the square’s refurbishment begun in 2022, it returned to the area by the start of Alcalá. Look at how the figures relate before spotting the same motif elsewhere in Madrid.",
          "zh": "**Antonio Navarro Santafé** 创作的铜雕于 **1967年1月19日**揭幕，熊与树下方为石灰岩基座与花岗岩台座。雕像曾在 Sol 广场内迁移，2022年开始的广场改造后回到阿尔卡拉街起点附近。可先看两者姿态，再留意马德里其他城市标志中的同一形象。"
        }
      },
      {
        "id": "symbol",
        "title": {
          "es": "Por qué es el símbolo de Madrid",
          "en": "Why it is the symbol of Madrid",
          "zh": "为何成为马德里的象征"
        },
        "content": {
          "es": "El oso y el madroño condensan la identidad de la ciudad: el oso evoca la vida silvestre de los bosques originales y el madroño es un árbol típico de la **Comunidad de Madrid**. Por eso la escultura funciona como punto de encuentro obligado y aparece en el escudo oficial, en obras literarias y en la imaginación de madrileños y visitantes.",
          "en": "The bear and the strawberry tree distil the city’s identity: the bear evokes the wildlife of the original forests and the strawberry tree is typical of the **Community of Madrid**. That is why the sculpture is a must-see meeting point and appears on the official shield, in literature and in the imagination of locals and visitors alike.",
          "zh": "熊与草莓树凝聚了这座城市的身份：熊让人联想到原始森林中的野生动物，草莓树则是 **马德里自治区** 的典型树种。正因如此，这座雕像成为必到的聚会地标，并出现在官方城徽、文学作品以及马德里人与游客的共同记忆中。"
        }
      }
    ],
    "faq": [
      {
        "question": {
          "es": "¿Quién hizo el Oso y el Madroño?",
          "en": "Who made El Oso y el Madroño?",
          "zh": "熊与草莓树雕像是谁创作的？"
        },
        "answer": {
          "es": "La escultura es obra del artista español **Antonio Navarro Santafé**, inaugurada el 19 de enero de 1967 en la Puerta del Sol.",
          "en": "The sculpture is the work of Spanish artist **Antonio Navarro Santafé**, unveiled on 19 January 1967 in Puerta del Sol.",
          "zh": "雕像由西班牙艺术家 **Antonio Navarro Santafé** 创作，于 1967 年 1 月 19 日在太阳门广场揭幕。"
        }
      },
      {
        "question": {
          "es": "¿Qué significa el oso y el madroño?",
          "en": "What do the bear and the strawberry tree mean?",
          "zh": "熊与草莓树代表什么？"
        },
        "answer": {
          "es": "Representan el escudo de Madrid: el oso procede de un pleito medieval por los pastos y el madroño (árbol de fresa) simboliza los montes arbolados que la Villa se quedó en ese reparto.",
          "en": "They represent the coat of arms of Madrid: the bear comes from a medieval dispute over pastures, and the strawberry tree (arbutus) symbolises the wooded hills the town kept in that settlement.",
          "zh": "它们代表马德里的城徽：熊源于中世纪关于牧场的争端，草莓树（arbutus）象征城邦在分割中保留下来的林木山丘。"
        }
      },
      {
        "question": {
          "es": "¿Cuándo se inauguró y dónde está ahora?",
          "en": "When was it unveiled and where is it now?",
          "zh": "它何时揭幕，现在在哪里？"
        },
        "answer": {
          "es": "Se inauguró el 19 de enero de 1967 y, tras varios traslados, ocupa desde 2009 su ubicación actual en la Puerta del Sol, junto al inicio de la Calle de Alcalá.",
          "en": "It was unveiled on 19 January 1967 and, after several relocations, has stood since 2009 at its current spot in Puerta del Sol, by the start of Calle de Alcalá.",
          "zh": "它于 1967 年 1 月 19 日揭幕，历经数次迁址后，自 2009 年起固定在太阳门广场、阿尔卡拉街起点的现址。"
        }
      }
    ],
    "related": [
      "como-llegar",
      "puerta-del-sol",
      "kilometro-cero"
    ],
    "updated": {
      "es": "Última actualización: 27 de noviembre de 2026",
      "en": "Last updated: 27 November 2026",
      "zh": "最近更新：2026年11月27日"
    }
  },

  // 3. Cómo llegar
  {
    "slug": "como-llegar",
    "group": {
      "es": "El Oso y el Madroño",
      "en": "El Oso y el Madroño",
      "zh": "熊与草莓树雕像"
    },
    "title": {
      "es": "Cómo llegar al Oso y el Madroño",
      "en": "How to Get to El Oso y el Madroño",
      "zh": "如何前往熊与草莓树雕像"
    },
    "metaTitle": {
      "es": "Cómo llegar al Oso y el Madroño (Puerta del Sol) | Madrid",
      "en": "How to Get to El Oso y el Madroño (Puerta del Sol) | Madrid",
      "zh": "如何前往熊与草莓树雕像（太阳门广场）| 马德里"
    },
    "description": {
      "es": "Metro, cercanías y caminando: la forma más sencilla de llegar a la estatua en la Puerta del Sol y dónde encontrarla una vez allí.",
      "en": "Metro, commuter rail and on foot: the easiest way to reach the statue in Puerta del Sol and where to find it once you are there.",
      "zh": "地铁、近郊铁路与步行：抵达太阳门广场雕像最便捷的方式，以及到了之后如何找到它。"
    },
    "intro": {
      "es": "La escultura está en el extremo de **Puerta del Sol que da a la calle de Alcalá**. Usa Sol como estación de llegada y, ya en la plaza, busca la figura de bronce del oso erguido junto al árbol. La placa del Kilómetro Cero está en otro punto de la plaza: no es el emplazamiento de la escultura.",
      "en": "The statue stands at the **Calle de Alcalá end of Puerta del Sol**. Arrive at Sol station, then look for the bronze bear standing against the tree. The Kilometre Zero plaque is elsewhere in the square; it is not the statue’s location.",
      "zh": "雕像位于**太阳门广场靠阿尔卡拉街（Calle de Alcalá）的一端**。以 Sol 站为目的地，上到广场后寻找扶着树站立的铜熊。零公里标志在广场另一个位置，不是雕像所在地。"
    },
    "sections": [
      {
        "id": "metro",
        "title": {
          "es": "Llegar a Sol y encontrar la escultura",
          "en": "Arrive at Sol and find the statue",
          "zh": "到达 Sol 站后找到雕像"
        },
        "content": {
          "es": "En Metro, **Sol conecta las líneas L1, L2 y L3**. Sigue las señales a Puerta del Sol y orienta el último tramo hacia la calle de Alcalá. La salida que utilices cambia el recorrido por la plaza: no todas quedan junto al monumento. Para llegar en Cercanías, elige un servicio que indique parada en Sol en el planificador de Renfe.",
          "en": "On the Metro, **Sol connects lines L1, L2 and L3**. Follow signs to Puerta del Sol and walk towards Calle de Alcalá once outside. Your exit changes the walk across the square; not every exit is beside the monument. For commuter rail, choose a service that lists Sol as a stop in Renfe’s planner.",
          "zh": "地铁 **Sol 站连接 L1、L2、L3 线**。沿 Puerta del Sol 标志出站，到地面后朝阿尔卡拉街一端步行；不同出口到雕像的距离不同。若乘近郊铁路，在 Renfe 行程规划中选择明确停靠 Sol 的班次。"
        }
      },
      {
        "id": "airport",
        "title": {
          "es": "Desde el aeropuerto: dos transbordos de Metro",
          "en": "From the airport: two Metro changes",
          "zh": "从机场出发：地铁换乘两次"
        },
        "content": {
          "es": "Toma la **L8 hasta Nuevos Ministerios**. Allí cambia a la **L10 en dirección Puerta del Sur** y baja en **Tribunal**. En Tribunal cambia a la **L1 en dirección Valdecarros** y baja en **Sol**. **Nuevos Ministerios no tiene L1**: el cambio a esa línea se hace en Tribunal. Aena distingue las estaciones Aeropuerto T1-T2-T3 y Aeropuerto T4; sigue la señalización de tu terminal y consulta el suplemento aeroportuario de tu billete.",
          "en": "Take **L8 to Nuevos Ministerios**, then **L10 towards Puerta del Sur to Tribunal**. At Tribunal, change to **L1 towards Valdecarros and get off at Sol**. **There is no L1 at Nuevos Ministerios**; Tribunal is where you change to it. Aena lists separate Aeropuerto T1-T2-T3 and Aeropuerto T4 stations. Follow your terminal’s signs and check whether your ticket requires the airport supplement.",
          "zh": "乘 **L8 到 Nuevos Ministerios**，换乘**往 Puerta del Sur 方向的 L10，到 Tribunal**。再换乘**往 Valdecarros 方向的 L1，到 Sol**。**Nuevos Ministerios 没有 L1，换乘 L1 的地点是 Tribunal。**机场设 Aeropuerto T1-T2-T3 和 Aeropuerto T4 两个地铁站，请按所在航站楼标志前往，并查看所用车票的机场附加费规则。"
        }
      },
      {
        "id": "walking",
        "title": {
          "es": "A pie desde Plaza Mayor y Callao",
          "en": "Walking from Plaza Mayor and Callao",
          "zh": "从马约尔广场或 Callao 步行"
        },
        "content": {
          "es": "Desde **Plaza Mayor**, sal hacia la calle Mayor y síguela hasta Sol; una vez en la plaza, continúa hacia Alcalá. Desde **Callao**, usa Preciados o Carmen para bajar a Sol. Son paseos por el centro: reserva margen para cruces, gente y fotografías en lugar de calcular la visita solo con el tiempo del mapa.",
          "en": "From **Plaza Mayor**, join Calle Mayor and follow it to Sol, then cross towards the Alcalá end. From **Callao**, follow Preciados or Carmen down to Sol. Allow time for crossings, crowds and photographs rather than treating a map’s walking estimate as the total visit time.",
          "zh": "从**马约尔广场**通往 Calle Mayor，再沿街到 Sol，进入广场后继续朝阿尔卡拉街一端走。从 **Callao** 可沿 Preciados 或 Carmen 街到 Sol。地图上的纯步行时间不包括过街、拥挤及拍照，请为这些停留留出余量。"
        }
      },
      {
        "id": "luggage",
        "title": {
          "es": "Equipaje, ascensores y última parte a pie",
          "en": "Luggage, lifts and the final walk",
          "zh": "行李、电梯与最后一段步行"
        },
        "content": {
          "es": "Con maletas o carrito, consulta los accesos y el estado de los ascensores de las estaciones antes de elegir el enlace. Un acceso accesible a la estación no implica que todos los cambios sean iguales. La plaza es peatonal: acuerda cualquier recogida de taxi o VTC en un punto permitido fuera de ella y termina el trayecto andando.",
          "en": "With luggage or a pushchair, check station access and lift status before choosing a connection. A station having an accessible entrance does not make every interchange identical. Sol is pedestrianised: arrange taxi or private-hire pickup at a permitted point outside the square and finish on foot.",
          "zh": "携带行李或婴儿车时，先查看车站出入口与电梯状态；车站有无障碍入口，不代表每一段换乘条件相同。Sol 为步行广场，出租车或网约车应在广场外允许停靠的位置上下车，最后一段步行。"
        }
      },
      {
        "id": "planning",
        "title": {
          "es": "Elegir la ruta del día",
          "en": "Choose the route for your travel day",
          "zh": "查看出行当日路线"
        },
        "content": {
          "es": "Consulta el plano y los avisos del **CRTM** antes de salir, especialmente si viajas a primera o última hora. Las obras pueden afectar a un tramo sin cerrar toda la línea. En la página de fuentes encontrarás los enlaces de Aena, CRTM y Renfe para comprobar estaciones, billetes e incidencias.",
          "en": "Check the **CRTM** map and service notices before leaving, particularly early or late in the day. Works can affect a section without closing an entire line. The sources page links Aena, CRTM and Renfe for stations, tickets and service notices.",
          "zh": "出发前查看 **CRTM** 路线图与服务公告，尤其是清晨或深夜出行。施工可能只影响某一段线路。资料来源页提供 Aena、CRTM 和 Renfe 链接，可查看站点、车票和运行公告。"
        }
      }
    ],
    "faq": [
      {
        "question": {
          "es": "¿Puedo cambiar de L8 a L1 en Nuevos Ministerios?",
          "en": "Can I change from L8 to L1 at Nuevos Ministerios?",
          "zh": "可以在 Nuevos Ministerios 从 L8 换乘 L1 吗？"
        },
        "answer": {
          "es": "No. Cambia de L8 a L10 y viaja a Tribunal; allí enlaza con L1 hasta Sol.",
          "en": "No. Change from L8 to L10 and travel to Tribunal, then take L1 to Sol.",
          "zh": "不可以。先从 L8 换乘 L10 到 Tribunal，再换乘 L1 到 Sol。"
        }
      },
      {
        "question": {
          "es": "¿Está la escultura junto al Kilómetro Cero?",
          "en": "Is the statue beside Kilometre Zero?",
          "zh": "雕像紧邻零公里标志吗？"
        },
        "answer": {
          "es": "Están en la misma plaza, pero en puntos distintos. Busca el Oso junto al inicio de Alcalá y el Kilómetro Cero frente a la Casa de Correos.",
          "en": "They share the square but occupy different spots. Find the bear by the start of Alcalá and Kilometre Zero in front of the Casa de Correos.",
          "zh": "两者在同一广场的不同位置。铜熊在阿尔卡拉街起点附近，零公里标志在 Casa de Correos 前。"
        }
      },
      {
        "question": {
          "es": "¿Puedo llegar en taxi hasta el monumento?",
          "en": "Can a taxi drop me beside the statue?",
          "zh": "出租车可以直接停到雕像旁吗？"
        },
        "answer": {
          "es": "La plaza es peatonal y no admite paradas en su interior. Elige un punto permitido en el entorno y camina hasta la escultura.",
          "en": "The square is pedestrianised and vehicles may not stop inside it. Use a permitted nearby drop-off point and walk to the statue.",
          "zh": "广场为步行区，车辆不能在内部停靠。请选周边允许的上下车地点，再步行到雕像。"
        }
      }
    ],
    "related": [
      "puerta-del-sol",
      "kilometro-cero",
      "plaza-mayor-desde-sol"
    ],
    "updated": {
      "es": "Última actualización: 27 de noviembre de 2026",
      "en": "Last updated: 27 November 2026",
      "zh": "最近更新：2026年11月27日"
    }
  },

  // 4. Fotos
  {
    "slug": "fotos",
    "group": {
      "es": "El Oso y el Madroño",
      "en": "El Oso y el Madroño",
      "zh": "熊与草莓树雕像"
    },
    "title": {
      "es": "Fotos del Oso y el Madroño",
      "en": "Photos of El Oso y el Madroño",
      "zh": "熊与草莓树雕像拍照指南"
    },
    "metaTitle": {
      "es": "Fotos del Oso y el Madroño: ángulos y consejos | Madrid",
      "en": "Photos of El Oso y el Madroño: angles and tips | Madrid",
      "zh": "熊与草莓树雕像拍照：角度与建议 | 马德里"
    },
    "description": {
      "es": "Los mejores ángulos para fotografiar la escultura, la hora dorada y dónde encuadrar el madroño sin bloquear el paso.",
      "en": "The best angles to photograph the sculpture, golden hour and how to frame the strawberry tree without blocking the way.",
      "zh": "拍摄雕像的最佳角度、黄金时刻，以及如何在不阻碍通行的情况下取景草莓树。"
    },
    "intro": {
      "es": "El **Oso y el Madroño** es, con diferencia, el monumento más fotografiado de la **Puerta del Sol**. Como está al aire libre y en una plaza siempre concurrida, conviene saber cuándo y desde dónde disparar para conseguir una buena imagen sin molestar a quienes pasan. Aquí tienes nuestros consejos prácticos.",
      "en": "The **Oso y el Madroño** is by far the most photographed monument in **Puerta del Sol**. Because it is outdoors and on a permanently busy square, it helps to know when and from where to shoot for a good image without disturbing passers-by. Here are our practical tips.",
      "zh": "**熊与草莓树雕像** 无疑是 **太阳门广场** 上被拍摄最多的纪念碑。由于它露天陈列、广场终日人流如织，掌握拍摄的时机与机位，才能既拍出好照片又不打扰路人。以下是我们整理的实用建议。"
    },
    "sections": [
      {
        "id": "light",
        "title": {
          "es": "La mejor luz: hora dorada y azul",
          "en": "Best light: golden and blue hour",
          "zh": "最佳光线：黄金时刻与蓝调时刻"
        },
        "content": {
          "es": "Las franjas más recomendables son las dos horas tras la salida del sol y las dos anteriores a la puesta (hora dorada y hora azul). A mediodía la luz es dura y crea sombras bajo el pedestal. De noche, la escultura queda iluminada por proyectores y es ideal para retratos urbanos con la plaza de fondo.",
          "en": "The best windows are the two hours after sunrise and the two before sunset (golden and blue hour). At midday the light is harsh and casts shadows under the pedestal. At night the sculpture is lit by spotlights and works well for urban portraits with the square behind.",
          "zh": "最推荐的时间段是日出后两小时与日落前兩小时（黄金时刻与蓝调时刻）。正午光线生硬，会在台座下方投下浓重阴影。入夜后雕像由射灯照亮，非常适合以广场为背景拍摄城市人像。"
        }
      },
      {
        "id": "angles",
        "title": {
          "es": "Ángulos que funcionan",
          "en": "Angles that work",
          "zh": "好用的取景角度"
        },
        "content": {
          "es": "El encuadre clásico frente a la escultura, a la altura del oso, deja ver el madroño y el escudo al completo. Para una toma distinta, prueba desde el inicio de la **Calle de Alcalá** (la estatua queda en diagonal) o desde un lateral para evitar las columnas de viandantes. Subir un poco el encuadre incluye los edificios de la Puerta del Sol al fondo.",
          "en": "The classic frame, straight in front of the sculpture at the bear’s height, shows the strawberry tree and the full shield. For a different shot, try from the start of **Calle de Alcalá** (the statue sits diagonally) or from the side to avoid the crowds. Raising the frame a little includes the Puerta del Sol buildings in the background.",
          "zh": "经典机位是在雕像正前方、与熊等高的位置，可完整呈现草莓树与城徽。想拍出不同感觉，可从 **阿尔卡拉街** 起点（雕像呈对角）或侧面取景以避开人流。略微抬高画面，还能将太阳门广场的建筑纳入背景。"
        }
      },
      {
        "id": "etiquette",
        "title": {
          "es": "Buenas prácticas y normas",
          "en": "Etiquette and rules",
          "zh": "拍摄礼仪与规范"
        },
        "content": {
          "es": "Haz fotos en los laterales y zonas libres de paso, sin formar corrillos en los pasos peatonales ni en las bocas de metro. No te subas al pedestal ni toques el bronce, y respeta el derecho a la imagen de terceros en retratos comerciales. En Nochevieja y Navidad la densidad humana es enorme, así que llégate con antelación.",
          "en": "Shoot from the sides and open areas, without gathering in pedestrian crossings or at metro entrances. Do not climb the pedestal or touch the bronze, and respect others’ image rights in commercial portraits. On New Year’s Eve and at Christmas the crowds are huge, so arrive early.",
          "zh": "请在侧方与空旷区域拍摄，勿在人行横道或地铁口聚集。不要爬上台座或触摸青铜，商业人像请尊重他人肖像权。跨年与圣诞期间人潮极密，建议提前到场。"
        }
      }
    ],
    "faq": [
      {
        "question": {
          "es": "¿Cuándo hay menos gente para fotos?",
          "en": "When are there fewer people for photos?",
          "zh": "什么时候拍照人最少？"
        },
        "answer": {
          "es": "Prueba a primera hora y deja tiempo para esperar un hueco sin obstaculizar el paso. La afluencia cambia según el día y los eventos de la plaza.",
          "en": "Try early in the day and allow time for a clear moment without blocking pedestrians. Crowds vary by day and events in the square.",
          "zh": "可选择清晨，并留时间等待不挡路的拍摄空隙；人流会随日期及广场活动变化。"
        }
      },
      {
        "question": {
          "es": "¿Se puede usar trípode?",
          "en": "Can you use a tripod?",
          "zh": "可以使用三脚架吗？"
        },
        "answer": {
          "es": "Un trípode pequeño de uso personal no suele requerir autorización si no obstaculiza el paso. Para equipo profesional o iluminación hay que consultar la normativa municipal de ocupación de la vía pública.",
          "en": "A small personal tripod is usually fine if it does not block the way. For professional gear or lighting you must check the municipal rules on using public space.",
          "zh": "小型自用三脚架只要不妨碍通行通常无需许可。专业设备或灯光须查阅市政关于占用公共空间的规定。"
        }
      },
      {
        "question": {
          "es": "¿Qué se ve detrás de la estatua?",
          "en": "What is behind the statue?",
          "zh": "雕像背后是什么？"
        },
        "answer": {
          "es": "Al fondo aparecen los edificios de la Puerta del Sol y, al alejar el encuadre, la confluencia de la Calle de Alcalá con la plaza, uno de los rincones más fotografiados de Madrid.",
          "en": "Behind it are the Puerta del Sol buildings, and pulling back the frame shows the junction of Calle de Alcalá with the square — one of Madrid’s most photographed corners.",
          "zh": "背景是太阳门广场的建筑；拉远画面则可见阿尔卡拉街与广场的交汇处，是马德里最常入镜的角落之一。"
        }
      }
    ],
    "related": [
      "puerta-del-sol",
      "historia-significado",
      "kilometro-cero"
    ],
    "updated": {
      "es": "Última actualización: 27 de noviembre de 2026",
      "en": "Last updated: 27 November 2026",
      "zh": "最近更新：2026年11月27日"
    }
  },

  // 6. Qué ver en la Puerta del Sol
  {
    "slug": "puerta-del-sol",
    "group": {
      "es": "El Oso y el Madroño",
      "en": "El Oso y el Madroño",
      "zh": "熊与草莓树雕像"
    },
    "title": {
      "es": "Qué ver en la Puerta del Sol",
      "en": "What to See in Puerta del Sol",
      "zh": "太阳门广场有什么看"
    },
    "metaTitle": {
      "es": "Qué ver en la Puerta del Sol: guía de la plaza | Madrid",
      "en": "What to See in Puerta del Sol: plaza guide | Madrid",
      "zh": "太阳门广场有什么看：广场导览 | 马德里"
    },
    "description": {
      "es": "De la estatua del Oso al Reloj de las Campanadas, pasando por el Kilómetro Cero y la Real Casa de Correos: qué no perderte en la plaza.",
      "en": "From the Bear statue to the New Year bell, via Kilometre Zero and the Royal House of the Post Office: what not to miss on the square.",
      "zh": "从熊雕像到跨年钟楼，再到零公里标志与邮政宫：广场上不可错过的看点。"
    },
    "intro": {
      "es": "La **Puerta del Sol** no es solo el punto donde está el **Oso y el Madroño**: es el kilómetro cero de España, escenario de las campanadas de Nochevieja y un nudo de calles madrileñas. Si vas a ver la estatua, aprovecha para recorrer sus otros hitos, todos a pocos metros.",
      "en": "**Puerta del Sol** is not just where the **Oso y el Madroño** stands: it is Spain’s kilometre zero, the stage for the New Year’s Eve bells and a hub of Madrid’s streets. While you are there for the statue, take in its other landmarks, all a few metres apart.",
      "zh": "**太阳门广场** 不只是 **熊与草莓树雕像** 所在之处：它是西班牙的零公里起点、跨年钟声的舞台，也是马德里街巷的枢纽。既然为雕像而来，不妨顺道看看几步之遥的其他地标。"
    },
    "sections": [
      {
        "id": "sol-landmarks",
        "title": {
          "es": "Imperdibles de la plaza",
          "en": "Unmissable spots on the square",
          "zh": "广场上不可错过的看点"
        },
        "content": {
          "es": "Además del **Oso y el Madroño**, busca el **Kilómetro Cero** (la placa en el suelo frente a la Real Casa de Correos), el **Reloj de la Puerta del Sol** (desde el que se dan las doce uvas de fin de año) y la fachada de la antigua **Real Casa de Correos**, hoy sede de la Vicepresidencia de la Comunidad de Madrid. Más cerca del suelo, la estatua de la **Mariblanca** recuerda la antigua fuente dieciochesca.",
          "en": "Beyond the **Oso y el Madroño**, look for **Kilometre Zero** (the plaque on the ground in front of the Royal House of the Post Office), the **Puerta del Sol clock** (which rings in the twelve grapes at New Year) and the façade of the former **Royal House of the Post Office**, now the seat of the Community of Madrid’s Vice-Presidency. Closer to the ground, the **Mariblanca** statue recalls the 18th-century fountain.",
          "zh": "除 **熊与草莓树雕像** 外，请留意 **零公里标志**（邮政宫前地面上的铜牌）、**太阳门钟楼**（跨年十二响葡萄的报时处），以及旧 **皇家邮政宫** 立面（现为马德里自治区副主席府）。靠近地面处，**玛丽布兰卡（Mariblanca）** 雕像让人想起十八世纪的喷泉。"
        }
      },
      {
        "id": "streets",
        "title": {
          "es": "Calles que arrancan de Sol",
          "en": "Streets starting at Sol",
          "zh": "从太阳门延伸出的街道"
        },
        "content": {
          "es": "De la plaza salen algunas de las calles más conocidas de Madrid: la **Calle Mayor** (hacia la Plaza Mayor), la **Calle de Alcalá**, la **Calle del Carmen** (hacia Gran Vía) y la **Calle de Arenal** (hacia el Teatro Real y Ópera). Caminar cualquiera de ellas es ya un paseo por el Madrid histórico.",
          "en": "Some of Madrid’s best-known streets start at the square: **Calle Mayor** (towards Plaza Mayor), **Calle de Alcalá**, **Calle del Carmen** (towards Gran Vía) and **Calle de Arenal** (towards the Teatro Real and Ópera). Walking any of them is already a stroll through historic Madrid.",
          "zh": "几条马德里最知名的街道都从广场起步：**马约尔街**（通往马约尔广场）、**阿尔卡拉街**、**卡门街**（通往格兰大道），以及 **阿雷纳尔街**（通往皇家剧院与歌剧院）。随意走进其中一条，便已踏入历史马德里。"
        }
      }
    ],
    "faq": [
      {
        "question": {
          "es": "¿Por qué es importante la Puerta del Sol?",
          "en": "Why is Puerta del Sol important?",
          "zh": "太阳门广场为什么重要？"
        },
        "answer": {
          "es": "Es el kilómetro cero de las carreteras españolas, escenario de las campanadas de Nochevieja y uno de los lugares más concurridos y fotografiados de Madrid.",
          "en": "It is the kilometre zero of Spain’s roads, the stage for the New Year’s Eve bells and one of Madrid’s busiest, most photographed places.",
          "zh": "它是西班牙公路的零公里起点、跨年钟声的舞台，也是马德里最热闹、最常入镜的地点之一。"
        }
      },
      {
        "question": {
          "es": "¿Cuánto tiempo se tarda en verla?",
          "en": "How long does it take to see it?",
          "zh": "看一圈要多久？"
        },
        "answer": {
          "es": "Una visita tranquila a la plaza y sus hitos lleva unos **30-45 minutos**; si sumas el paseo a la Plaza Mayor, cuenta una hora (ver ruta de una hora).",
          "en": "A relaxed look at the square and its landmarks takes about **30-45 minutes**; add the walk to Plaza Mayor and budget an hour (see the one-hour route).",
          "zh": "从容参观广场及其地标约需 **30–45 分钟**；若加上前往马约尔广场的步行，建议预留一小时（见「一小时路线」）。"
        }
      },
      {
        "question": {
          "es": "¿Dónde encuentro el Oso dentro de la plaza?",
          "en": "Where in the square is the bear?",
          "zh": "在广场哪里找铜熊？"
        },
        "answer": {
          "es": "En el lado del inicio de calle Alcalá; no junto a la placa del Kilómetro Cero.",
          "en": "By the start of Calle Alcalá, not beside the Kilometre Zero plaque.",
          "zh": "在阿尔卡拉街起点一侧，不在零公里标志旁。"
        }
      }
    ],
    "related": [
      "kilometro-cero",
      "plaza-mayor-desde-sol",
      "sol-en-una-hora"
    ],
    "updated": {
      "es": "Última actualización: 27 de noviembre de 2026",
      "en": "Last updated: 27 November 2026",
      "zh": "最近更新：2026年11月27日"
    }
  },

  // 7. Kilómetro Cero
  {
    "slug": "kilometro-cero",
    "group": {
      "es": "El Oso y el Madroño",
      "en": "El Oso y el Madroño",
      "zh": "熊与草莓树雕像"
    },
    "title": {
      "es": "Kilómetro Cero de Madrid",
      "en": "Kilometre Zero of Madrid",
      "zh": "马德里零公里标志"
    },
    "metaTitle": {
      "es": "Kilómetro Cero de Madrid: dónde está y qué significa | Puerta del Sol",
      "en": "Kilometre Zero of Madrid: where it is and what it means | Puerta del Sol",
      "zh": "马德里零公里标志：在哪里、有何含义 | 太阳门广场"
    },
    "description": {
      "es": "Dónde está la placa del Kilómetro Cero, qué significa y por qué se considera el centro de las carreteras españolas.",
      "en": "Where the Kilometre Zero plaque is, what it means and why it is considered the centre of Spain’s roads.",
      "zh": "零公里铜牌在哪里、有何含义，以及为何被视为西班牙公路的中心。"
    },
    "intro": {
      "es": "A unos pasos del **Oso y el Madroño**, incrustada en el pavimento frente a la **Real Casa de Correos**, está la placa del **Kilómetro Cero**. Es el punto desde el que se miden las distancias de la red radial de carreteras de España y un lugar obligado para una foto «estoy en el centro».",
      "en": "A few steps from the **Oso y el Madroño**, set into the pavement in front of the **Royal House of the Post Office**, is the **Kilometre Zero** plaque. It is the point from which distances on Spain’s radial road network are measured and a must for a «I’m at the centre» photo.",
      "zh": "在 **熊与草莓树雕像** 几步之外、嵌入 **皇家邮政宫** 前地面的，便是 **零公里** 铜牌。它是西班牙放射状公路网里程的起算点，也是必拍的「我在中心」打卡地。"
    },
    "sections": [
      {
        "id": "where",
        "title": {
          "es": "Dónde encontrarlo",
          "en": "Where to find it",
          "zh": "在哪里找到它"
        },
        "content": {
          "es": "La placa está en el suelo, justo frente a la fachada de la **Real Casa de Correos** (el edificio con el reloj de las campanadas), en el lado de la Puerta del Sol opuesto a la salida hacia la Calle Mayor. Es fácil de reconocer: un disco de piedra con un mapa radial de España grabado.",
          "en": "The plaque is on the ground, right in front of the façade of the **Royal House of the Post Office** (the building with the New Year clock), on the side of Puerta del Sol opposite the exit towards Calle Mayor. It is easy to spot: a stone disc engraved with a radial map of Spain.",
          "zh": "铜牌位于地面，正对 **皇家邮政宫** 立面（即跨年钟楼所在建筑），在太阳门广场朝向马约尔街出口的另一侧。它不难辨认：一块刻有西班牙放射状地图的石质圆盘。"
        }
      },
      {
        "id": "meaning",
        "title": {
          "es": "Qué significa",
          "en": "What it means",
          "zh": "它的含义"
        },
        "content": {
          "es": "El Kilómetro Cero marca el origen de las seis carreteras radiales que salen de Madrid hacia el resto del país. Todas las distancias por carretera en España se miden a partir de este punto. La placa actual es la última de varias versiones instaladas desde 1950.",
          "en": "Kilometre Zero marks the start of the six radial roads leaving Madrid for the rest of the country. All road distances in Spain are measured from this point. The current plaque is the latest of several versions installed since 1950.",
          "zh": "零公里标志着从马德里通往全国各地的六条放射状公路的起点。西班牙所有公路里程都以此为起点计算。目前的铜牌是自 1950 年以来多版中的最新一版。"
        }
      }
    ],
    "faq": [
      {
        "question": {
          "es": "¿Está junto al Oso y el Madroño?",
          "en": "Is it next to the Oso y el Madroño?",
          "zh": "它就在熊与草莓树雕像旁边吗？"
        },
        "answer": {
          "es": "No justo al lado: está a unos 50-80 m, frente a la Real Casa de Correos, en el otro extremo de la plaza respecto a la escultura.",
          "en": "Not right beside it: it is about 50-80 m away, in front of the Royal House of the Post Office, at the opposite end of the square from the sculpture.",
          "zh": "并非紧邻：相距约 50–80 米，在广场另一端、正对皇家邮政宫，与雕像相对。"
        }
      },
      {
        "question": {
          "es": "¿Por qué es el centro de España?",
          "en": "Why is it the centre of Spain?",
          "zh": "为什么它是西班牙的中心？"
        },
        "answer": {
          "es": "Por convención, es el punto cero de la red radial de carreteras; no es el centro geográfico del país, pero sí el origen de las distancias por carretera.",
          "en": "By convention it is the zero point of the radial road network; it is not the geographic centre of the country, but the origin of road distances.",
          "zh": "按惯例，它是放射状公路网的零点；它并非国家的地理中心，却是公路里程的起算原点。"
        }
      },
      {
        "question": {
          "es": "¿Necesito entrar en la Casa de Correos?",
          "en": "Do I need to enter the Casa de Correos?",
          "zh": "需要进入 Casa de Correos 吗？"
        },
        "answer": {
          "es": "No. La placa está en el suelo del espacio público frente al edificio.",
          "en": "No. The plaque is in the pavement of the public space in front of the building.",
          "zh": "不用。标志在建筑前公共空间的地面上。"
        }
      }
    ],
    "related": [
      "puerta-del-sol",
      "como-llegar"
    ],
    "updated": {
      "es": "Última actualización: 27 de noviembre de 2026",
      "en": "Last updated: 27 November 2026",
      "zh": "最近更新：2026年11月27日"
    }
  },

  // 11. Plaza Mayor desde Sol
  {
    "slug": "plaza-mayor-desde-sol",
    "group": {
      "es": "El Oso y el Madroño",
      "en": "El Oso y el Madroño",
      "zh": "熊与草莓树雕像"
    },
    "title": {
      "es": "Plaza Mayor desde Puerta del Sol",
      "en": "Plaza Mayor from Puerta del Sol",
      "zh": "从太阳门广场前往马约尔广场"
    },
    "metaTitle": {
      "es": "De Puerta del Sol a Plaza Mayor: ruta a pie | Madrid",
      "en": "From Puerta del Sol to Plaza Mayor: walking route | Madrid",
      "zh": "太阳门广场到马约尔广场：步行路线 | 马德里"
    },
    "description": {
      "es": "Cómo ir de la Puerta del Sol a la Plaza Mayor en 5 minutos, qué ver al llegar y dónde comer cerca de la plaza.",
      "en": "How to walk from Puerta del Sol to Plaza Mayor in 5 minutes, what to see on arrival and where to eat near the square.",
      "zh": "如何从太阳门广场步行 5 分钟到马约尔广场、到了看什么，以及广场附近吃什么。"
    },
    "intro": {
      "es": "La **Plaza Mayor** es la siguiente parada natural tras ver el **Oso y el Madroño** y la **Puerta del Sol**. Está a unos **5 minutos a pie** y es una de las plazas porticadas más famosas de España. Te contamos la ruta más sencilla, qué mirar y dónde picar algo al llegar.",
      "en": "**Plaza Mayor** is the natural next stop after the **Oso y el Madroño** and **Puerta del Sol**. It is about a **5-minute walk** away and is one of Spain’s most famous arcaded squares. We cover the simplest route, what to look at and where to grab a bite on arrival.",
      "zh": "看完 **熊与草莓树雕像** 与 **太阳门广场** 后，**马约尔广场** 是最自然的下一站。步行约 **5 分钟** 即达，是西班牙最著名的拱廊广场之一。我们介绍最简便的路线、到了看什么，以及抵达后在哪里小吃。"
    },
    "sections": [
      {
        "id": "route",
        "title": {
          "es": "La ruta a pie",
          "en": "The walking route",
          "zh": "步行路线"
        },
        "content": {
          "es": "Sal de Sol por **calle Mayor** y busca el acceso a Plaza Mayor por **calle de Felipe III**. Al entrar, detente a mirar la plaza completa antes de acercarte a la estatua ecuestre. Plaza de la Villa queda más adelante por calle Mayor: es una ampliación del paseo, no un punto que debas pasar antes de entrar en Plaza Mayor.",
          "en": "Leave Sol along **Calle Mayor** and approach Plaza Mayor via **Calle de Felipe III**. Pause on entering to see the whole square before walking towards the equestrian statue. Plaza de la Villa is farther along Calle Mayor: it is an extension to the walk, not a landmark you must pass before reaching Plaza Mayor.",
          "zh": "从 Sol 沿 **Calle Mayor** 出发，经 **Calle de Felipe III** 进入马约尔广场。入场后先看完整空间，再走近骑马雕像。Plaza de la Villa 在 Calle Mayor 更往前的位置，可作为延伸游览，不是进入马约尔广场前必经的地点。"
        }
      },
      {
        "id": "see",
        "title": {
          "es": "Qué ver en la Plaza Mayor",
          "en": "What to see in Plaza Mayor",
          "zh": "马约尔广场上有什么看"
        },
        "content": {
          "es": "La plaza rectangular, rodeada de edificios porticados y presidida por la **Casa de la Panadería** (con su fachada pintada), es perfecta para pasear y sentarse en una terraza. En el centro destaca la estatua ecuestre de **Felipe III**. Alrededor hay muchas opciones para comer; el **Mercado de San Miguel** está a un par de minutos.",
          "en": "The rectangular square, ringed by arcaded buildings and dominated by the **Casa de la Panadería** (with its painted façade), is perfect for a stroll and a terrace seat. In the centre stands the equestrian statue of **Felipe III**. Around it are many places to eat; the **Mercado de San Miguel** is a couple of minutes away.",
          "zh": "这座长方形广场被拱廊建筑环绕，中央是 **面包房之家（Casa de la Panadería）**（立面绘有彩画）主导，非常适合散步与露天小坐。广场中央矗立着 **腓力三世（Felipe III）** 骑马像。四周有不少用餐选择；**圣米格尔市场（Mercado de San Miguel）** 步行两三分钟即达。"
        }
      }
    ],
    "faq": [
      {
        "question": {
          "es": "¿Cuánto se tarda desde Sol?",
          "en": "How long from Sol?",
          "zh": "从太阳门要走多久？"
        },
        "answer": {
          "es": "Reserva tiempo para caminar por calle Mayor y observar la plaza. Una parada en La Mallorquina o una cola para fotos alarga el recorrido.",
          "en": "Allow time to walk along Calle Mayor and look around the square. A stop at La Mallorquina or a photo queue makes the walk longer.",
          "zh": "可为 Calle Mayor 步行及广场观察预留时间；加入 La Mallorquina 或排队拍照会延长行程。"
        }
      },
      {
        "question": {
          "es": "¿Dónde comer cerca?",
          "en": "Where to eat nearby?",
          "zh": "附近在哪里吃？"
        },
        "answer": {
          "es": "En los portales de la propia plaza y en el Mercado de San Miguel (a 2 min). Para el bocadillo de calamares, mira la ruta de tapas y el propio Mercado.",
          "en": "In the arcades of the square itself and at the Mercado de San Miguel (2 min away). For a squid sandwich, see the tapas route and the market itself.",
          "zh": "可在广场拱廊内及圣米格尔市场（2 分钟）用餐。想吃鱿鱼三明治，参见小吃路线与市场本身。"
        }
      },
      {
        "question": {
          "es": "¿Puedo combinarla con una parada de pastelería?",
          "en": "Can I add a pastry stop on the way?",
          "zh": "途中可以安排糕点店吗？"
        },
        "answer": {
          "es": "La Mallorquina está en Puerta del Sol, 8, junto al comienzo de calle Mayor.",
          "en": "La Mallorquina is at Puerta del Sol, 8, beside the start of Calle Mayor.",
          "zh": "La Mallorquina 在 Puerta del Sol, 8，靠 Calle Mayor 起点。"
        }
      }
    ],
    "related": [
      "puerta-del-sol",
      "mercado-san-miguel",
      "tapas-cerca-sol",
      "comer"
    ],
    "updated": {
      "es": "Última actualización: 27 de noviembre de 2026",
      "en": "Last updated: 27 November 2026",
      "zh": "最近更新：2026年11月27日"
    }
  },

  // 14. Dónde comer
  {
    "slug": "comer",
    "group": {
      "es": "El Oso y el Madroño",
      "en": "El Oso y el Madroño",
      "zh": "熊与草莓树雕像"
    },
    "title": {
      "es": "Dónde comer cerca de Puerta del Sol",
      "en": "Where to Eat Near Puerta del Sol",
      "zh": "太阳门广场附近去哪吃"
    },
    "metaTitle": {
      "es": "Dónde comer cerca de Puerta del Sol: guía de opciones | Madrid",
      "en": "Where to Eat Near Puerta del Sol: options guide | Madrid",
      "zh": "太阳门广场附近去哪吃：选择指南 | 马德里"
    },
    "description": {
      "es": "Tipos de comida, presupuestos y locales concretos recomendados cerca de la Puerta del Sol, con opciones para todos los gustos.",
      "en": "Kinds of food, budgets and specific recommended spots near Puerta del Sol, with options for every taste.",
      "zh": "太阳门广场附近的美食类型、预算与具体推荐店家，满足各种口味。"
    },
    "intro": {
      "es": "Para comer después de visitar el Oso, elige primero **el tipo de parada**: bollería en la plaza, bacalao en una taberna de Tetuán o varios puestos junto a Plaza Mayor. Estas opciones sirven para necesidades distintas; no hace falta recorrerlas todas en una sola comida.",
      "en": "After visiting the bear, choose **the kind of food stop** first: pastries on the square, cod at a Tetuán tavern or several stalls beside Plaza Mayor. They suit different needs; there is no need to visit them all for one meal.",
      "zh": "看完铜熊后，先决定**这顿想怎样吃**：在广场买糕点、去 Tetuán 街酒馆吃鳕鱼，或到马约尔广场旁的市场挑摊位。几种选择用途不同，无需一顿全部安排。"
    },
    "sections": [
      {
        "id": "pastry",
        "title": {
          "es": "Para una parada dulce en la plaza",
          "en": "For a sweet stop on the square",
          "zh": "想在广场吃糕点"
        },
        "content": {
          "es": "**La Mallorquina, Puerta del Sol 8**, queda junto a calle Mayor. Elige una pieza para llevar si vas a seguir caminando o pregunta por el salón superior si quieres una pausa. **San Ginés, Pasadizo de San Ginés 5**, es la alternativa para chocolate con churros y encaja con un paseo por Arenal.",
          "en": "**La Mallorquina, Puerta del Sol 8**, is beside Calle Mayor. Pick a pastry to take away if continuing your walk, or ask about the upstairs room for a break. **San Ginés, Pasadizo de San Ginés 5**, is the chocolate-and-churros alternative and pairs with a walk along Arenal.",
          "zh": "**La Mallorquina（Puerta del Sol 8）**靠 Calle Mayor，继续步行可买外带糕点，想休息则询问楼上咖啡厅。**San Ginés（Pasadizo de San Ginés 5）**适合巧克力配 churros，可与 Arenal 街散步一起安排。"
        }
      },
      {
        "id": "tavern",
        "title": {
          "es": "Para bacalao y una parada de taberna",
          "en": "For cod and a tavern stop",
          "zh": "想吃鳕鱼与酒馆小食"
        },
        "content": {
          "es": "**Casa Labra, Tetuán 12**, es la opción centrada en bacalao y croquetas. Comprueba qué se sirve en barra y qué corresponde al restaurante antes de pedir. Una tapa puede ser solo un aperitivo; si buscas una comida completa, revisa el tamaño de las raciones y el servicio disponible.",
          "en": "**Casa Labra, Tetuán 12**, is the cod-and-croquette option. Check what is served at the bar and what belongs to restaurant service before ordering. A tapa may only be an appetiser; for a full meal, check portion sizes and the available service.",
          "zh": "**Casa Labra（Tetuán 12）**适合鳕鱼和可乐饼。先分清吧台小食与餐厅服务，再点单。一份 tapa 可能只是开胃小食；想当正餐，应查看份量与用餐方式。"
        }
      },
      {
        "id": "market",
        "title": {
          "es": "Para elegir entre varios puestos",
          "en": "For choosing between several stalls",
          "zh": "想比较不同摊位"
        },
        "content": {
          "es": "El **Mercado de San Miguel** se encuentra al otro lado de Plaza Mayor desde Sol. Es útil cuando cada persona quiere algo distinto: da una vuelta primero y elige después. Comprar en puestos diferentes implica pedidos y pagos separados; no cuentes con una mesa reservada por comprar comida.",
          "en": "**Mercado de San Miguel** is beyond Plaza Mayor when approaching from Sol. It works when people want different foods: walk through first, then choose. Different stalls mean separate orders and payments; buying food does not reserve a table.",
          "zh": "从 Sol 经马约尔广场继续可到**圣米格尔市场**。同行者想吃不同食物时，可先逛一圈再选摊位。不同摊位分别点单付款；购买食物不等于预留了座位。"
        }
      },
      {
        "id": "budget",
        "title": {
          "es": "Comparar el coste sin adivinar una cuenta",
          "en": "Compare costs before ordering",
          "zh": "点单前比较实际花费"
        },
        "content": {
          "es": "Compara **precio, cantidad y lugar de consumo**. Distingue una pieza, una ración para compartir y un menú; mira si bebida y servicio están incluidos. Para una necesidad alimentaria concreta, pregunta por ingredientes y preparación al local antes de pagar, en vez de asumir que una categoría de comida es apta.",
          "en": "Compare **price, portion size and where you will eat**. Distinguish an individual item, a sharing plate and a set menu; check whether drinks and service are included. For a dietary requirement, ask the venue about ingredients and preparation before paying rather than assuming a food category is suitable.",
          "zh": "同时比较**价格、份量和用餐地点**。单件小食、共享份菜与套餐不能只按标价比较，还要看饮品和服务是否包含。有饮食限制时，点单前直接询问食材及制作方式，不要仅凭菜名判断。"
        }
      }
    ],
    "faq": [
      {
        "question": {
          "es": "¿Qué opción combina mejor con Plaza Mayor?",
          "en": "Which stop fits best with Plaza Mayor?",
          "zh": "哪一站适合与马约尔广场串联？"
        },
        "answer": {
          "es": "La Mallorquina queda al inicio de calle Mayor desde Sol; San Miguel queda después de cruzar Plaza Mayor. Elige una parada según tu apetito.",
          "en": "La Mallorquina is at the start of Calle Mayor from Sol; San Miguel is beyond Plaza Mayor. Pick a stop according to your appetite.",
          "zh": "La Mallorquina 在 Sol 通往 Calle Mayor 的起点，San Miguel 在穿过马约尔广场后；可按食量选择一站。"
        }
      },
      {
        "question": {
          "es": "¿Una tapa equivale a una comida?",
          "en": "Does a tapa count as a full meal?",
          "zh": "一份 tapa 可以当正餐吗？"
        },
        "answer": {
          "es": "No necesariamente. Revisa el tamaño de la porción y decide si necesitas una ración o varios platos.",
          "en": "Not necessarily. Check the portion size and decide whether you need a larger plate or several dishes.",
          "zh": "不一定。先了解份量，再决定是否需要更大份菜或多点几样。"
        }
      },
      {
        "question": {
          "es": "¿Dónde miro horarios y reservas?",
          "en": "Where do I check hours and bookings?",
          "zh": "在哪里查看营业与预约？"
        },
        "answer": {
          "es": "En la web del establecimiento y de la sucursal concreta. La página de fuentes enlaza los locales incluidos en esta guía.",
          "en": "Use the venue’s website and the specific branch page. The sources page links the venues included in this guide.",
          "zh": "查看店方官网及具体分店页；本指南的资料来源页提供相关店家链接。"
        }
      }
    ],
    "related": [
      "la-mallorquina",
      "chocolateria-san-gines",
      "casa-labra",
      "mercado-san-miguel",
      "tapas-cerca-sol"
    ],
    "updated": {
      "es": "Última actualización: 27 de noviembre de 2026",
      "en": "Last updated: 27 November 2026",
      "zh": "最近更新：2026年11月27日"
    }
  },

  // 15. Tapas cerca de Sol
  {
    "slug": "tapas-cerca-sol",
    "group": {
      "es": "El Oso y el Madroño",
      "en": "El Oso y el Madroño",
      "zh": "熊与草莓树雕像"
    },
    "title": {
      "es": "Tapas cerca de Sol",
      "en": "Tapas Near Sol",
      "zh": "太阳门附近的小吃（Tapas）"
    },
    "metaTitle": {
      "es": "Tapas cerca de Sol: dónde ir y qué pedir | Madrid",
      "en": "Tapas Near Sol: where to go and what to order | Madrid",
      "zh": "太阳门附近的小吃：去哪、点什么 | 马德里"
    },
    "description": {
      "es": "Diferencias entre tapeo, bar de stand-up y restaurante, y lugares concretos para picar cerca de la Puerta del Sol.",
      "en": "Differences between tapas crawl, stand-up bar and restaurant, and specific spots to snack near Puerta del Sol.",
      "zh": "西班牙小吃「tapas」、站吧与餐厅的区别，以及太阳门广场附近可小酌小食的具体去处。"
    },
    "intro": {
      "es": "Un paseo de tapas desde Sol funciona mejor si eliges **una o dos paradas con especialidades distintas**. Casa Labra sirve para centrarte en bacalao; el Mercado de San Miguel permite comparar puestos. Decide si quieres picar de pie o sentarte antes de ordenar.",
      "en": "A tapas walk from Sol works best with **one or two stops offering different specialities**. Casa Labra is the cod-focused choice; Mercado de San Miguel lets you compare stalls. Decide whether you want a standing snack or a seated meal before ordering.",
      "zh": "从 Sol 出发吃小食，选**一两家特色不同的停靠点**更好安排。Casa Labra 适合鳕鱼小食，圣米格尔市场适合比较摊位。先决定站着小吃还是坐下用餐，再点单。"
    },
    "sections": [
      {
        "id": "labra",
        "title": {
          "es": "Primera opción: Casa Labra en Tetuán",
          "en": "Option one: Casa Labra on Tetuán",
          "zh": "选择一：Tetuán 街的 Casa Labra"
        },
        "content": {
          "es": "Desde Sol busca **calle Tetuán, 12**. El bacalao y las croquetas son la razón de esta parada. Mira la carta antes de elegir cantidad y pregunta por el sistema de pedido; el servicio de barra y el de restaurante no son intercambiables. Si solo quieres probar una especialidad, empieza con una porción pequeña.",
          "en": "From Sol, find **Calle Tetuán, 12**. Cod and croquettes are the reason for this stop. Read the menu before choosing quantities and ask how ordering works; bar and restaurant service are not interchangeable. If sampling a speciality, start with a small portion.",
          "zh": "从 Sol 寻找 **Calle Tetuán, 12**。鳕鱼与可乐饼是这一站的重点。先看菜单并询问点单方式，吧台与餐厅服务不能混为一谈；只想尝鲜可从小份开始。"
        }
      },
      {
        "id": "market",
        "title": {
          "es": "Segunda opción: puestos de San Miguel",
          "en": "Option two: San Miguel’s stalls",
          "zh": "选择二：San Miguel 市场摊位"
        },
        "content": {
          "es": "Continúa por calle Mayor, cruza Plaza Mayor y sigue al mercado. Recorre los puestos antes de comprar para comparar ingredientes y tamaños. Para compartir, pide primero un plato y decide después si hace falta otro; así puedes dejar espacio para otra especialidad.",
          "en": "Continue along Calle Mayor, cross Plaza Mayor and head to the market. Browse before buying to compare ingredients and portions. When sharing, order one plate first and decide whether another is needed, leaving room to try something different.",
          "zh": "沿 Calle Mayor 走、穿过马约尔广场后去市场。先比较食材和份量再购买。多人分享时，可先点一份再判断是否加点，留些食量尝不同东西。"
        }
      },
      {
        "id": "ordering",
        "title": {
          "es": "Tapa, ración y bebida: qué preguntar",
          "en": "Tapa, sharing plate and drink: what to ask",
          "zh": "小食、份菜与饮品：先问什么"
        },
        "content": {
          "es": "**Tapa** y **ración** no describen una cantidad universal. Pregunta para cuántas personas está pensado el plato y revisa si la bebida se cobra aparte. Una tapa de cortesía depende del establecimiento: no la des por incluida al pedir una bebida. Para elegir sin alcohol, pide la carta de bebidas.",
          "en": "**Tapa** and **ración** are not universal portion sizes. Ask how many people a plate is intended for and whether drinks cost extra. Courtesy tapas depend on the establishment; do not assume that a drink includes one. Ask for the drinks menu if choosing a non-alcoholic option.",
          "zh": "**tapa** 与 **ración** 没有统一份量，应询问一盘适合几人分享及饮品是否另计。赠送小食由店家决定，不能默认点饮品就包含小食；需要无酒精饮品可查看饮料单。"
        }
      }
    ],
    "faq": [
      {
        "question": {
          "es": "¿Dónde pruebo bacalao cerca de Sol?",
          "en": "Where can I try cod near Sol?",
          "zh": "Sol 附近哪里可尝鳕鱼？"
        },
        "answer": {
          "es": "Casa Labra está en Tetuán, 12, y es conocida por sus tapas y croquetas de bacalao.",
          "en": "Casa Labra is at Tetuán, 12, and is known for cod tapas and croquettes.",
          "zh": "Casa Labra 位于 Tetuán, 12，以鳕鱼小食及可乐饼闻名。"
        }
      },
      {
        "question": {
          "es": "¿La bebida incluye una tapa gratis?",
          "en": "Does a drink include a free tapa?",
          "zh": "点饮品一定赠送小食吗？"
        },
        "answer": {
          "es": "No es una regla universal. Pregunta qué incluye tu pedido y consulta la carta.",
          "en": "There is no universal rule. Ask what is included and check the menu.",
          "zh": "没有统一规则。请询问所点品项包含什么并查看菜单。"
        }
      },
      {
        "question": {
          "es": "¿Se puede hacer la ruta sin beber alcohol?",
          "en": "Can I do the route without alcohol?",
          "zh": "不喝酒也可以这样逛吗？"
        },
        "answer": {
          "es": "Sí. El objetivo puede ser probar comida; pide las opciones sin alcohol del local.",
          "en": "Yes. The focus can be the food; ask the venue for its non-alcoholic choices.",
          "zh": "可以。行程可以以食物为主，向店家选择无酒精饮品即可。"
        }
      }
    ],
    "related": [
      "comer",
      "casa-labra",
      "mercado-san-miguel"
    ],
    "updated": {
      "es": "Última actualización: 27 de noviembre de 2026",
      "en": "Last updated: 27 November 2026",
      "zh": "最近更新：2026年11月27日"
    }
  },

  // 17. Casa Labra
  {
    "slug": "casa-labra",
    "group": {
      "es": "El Oso y el Madroño",
      "en": "El Oso y el Madroño",
      "zh": "熊与草莓树雕像"
    },
    "title": {
      "es": "Casa Labra desde el Oso y el Madroño",
      "en": "Casa Labra from El Oso y el Madroño",
      "zh": "从熊与草莓树雕像前往 Casa Labra"
    },
    "metaTitle": {
      "es": "Casa Labra: bacalao y tapas desde el Oso y el Madroño | Madrid",
      "en": "Casa Labra: bacalao and tapas from El Oso y el Madroño | Madrid",
      "zh": "Casa Labra：鳕鱼与小吃，从熊与草莓树雕像出发 | 马德里"
    },
    "description": {
      "es": "Qué es Casa Labra, dónde está respecto al Oso y el Madroño, a qué distancia y por qué ir por su bacalao.",
      "en": "What Casa Labra is, where it is relative to the statue, how far and why go for its bacalao.",
      "zh": "Casa Labra 是什么、相对于雕像的位置与距离，以及为何为鳕鱼而去。"
    },
    "intro": {
      "es": "**Casa Labra**, en **Tetuán, 12**, es una taberna cercana a Sol conocida por el **bacalao frito y las croquetas de bacalao**. Es una parada distinta de un café o un mercado: puedes centrarte en una especialidad y decidir después si seguir con la ruta.",
      "en": "**Casa Labra**, at **Tetuán, 12**, is a tavern near Sol known for **fried cod and cod croquettes**. It is a different stop from a café or market: try a speciality before deciding whether to continue your walk.",
      "zh": "**Casa Labra** 位于 **Tetuán, 12**，是 Sol 附近以**炸鳕鱼与鳕鱼可乐饼**闻名的酒馆。这一站与咖啡店或市场不同，可围绕一道特色小食安排，再决定后续行程。"
    },
    "sections": [
      {
        "id": "where",
        "title": {
          "es": "Ubicación y cómo llegar",
          "en": "Location and how to get there",
          "zh": "位置与如何前往"
        },
        "content": {
          "es": "Busca **calle Tetuán, 12**, en las calles que rodean Sol. El local queda fuera de la plaza: usa el nombre de la taberna y la dirección completa en el mapa para no confundirlo con otros bares. Desde el Oso, cruza Sol hacia el entorno de Preciados y continúa hasta Tetuán.",
          "en": "Find **Calle Tetuán, 12**, in the streets around Sol. The venue is outside the square; use the tavern’s name and full address in your map to distinguish it from other bars. From the bear, cross Sol towards Preciados and continue to Tetuán.",
          "zh": "在 Sol 周边街道寻找 **Calle Tetuán, 12**。酒馆不在广场上，地图请同时使用店名及完整地址。从铜熊穿过广场朝 Preciados 一带，再到 Tetuán 街。"
        }
      },
      {
        "id": "what",
        "title": {
          "es": "Qué pedir",
          "en": "What to order",
          "zh": "点什么"
        },
        "content": {
          "es": "Lo más pedido es el **bacalao** (porción de bacalao alcoholado y sus croquetas de bacalao), además de callos, croquetas variadas y bocadillos. Se puede tomar de pie en el bar o sentado en el comedor. Es un local histórico (abierto desde 1860), así que la visita es también un poco de historia madrileña.",
          "en": "The most ordered dishes are the **bacalao** (a portion of liquor-cured salt cod and its bacalao croquettes), along with tripe, assorted croquettes and sandwiches. You can stand at the bar or sit in the dining room. It is a historic venue (open since 1860), so the visit is also a bit of Madrid history.",
          "zh": "最常被点的是 **鳕鱼**（酒渍鳕鱼份菜及其鳕鱼炸丸），此外还有牛肚、各式炸丸与三明治。可在吧台站着吃，也可在餐室入座。这是一家历史悠久的老店（1860 年开业），到访也是一次马德里历史的体验。"
        }
      }
    ],
    "faq": [
      {
        "question": {
          "es": "¿A cuánto está del Oso y el Madroño?",
          "en": "How far from the statue?",
          "zh": "离雕像有多远？"
        },
        "answer": {
          "es": "Está en Tetuán, 12, fuera de Sol. Busca la dirección de la taberna y deja margen para cruzar la plaza y entrar en la calle.",
          "en": "It is at Tetuán, 12, outside Sol. Use the tavern’s address and allow time to cross the square and enter the street.",
          "zh": "位于 Sol 广场外的 Tetuán, 12；使用酒馆地址导航，并为穿过广场进入街道留时间。"
        }
      },
      {
        "question": {
          "es": "¿Qué es el bacalao de Casa Labra?",
          "en": "What is Casa Labra’s bacalao?",
          "zh": "Casa Labra 的鳕鱼是什么？"
        },
        "answer": {
          "es": "Es bacalao salado curado en un preparado alcohólico (el «bacalao alcoholado»), servido como tapa, además de croquetas de bacalao. Es su plato más conocido.",
          "en": "It is salt cod cured in an alcoholic preparation (the «bacalao alcoholado»), served as a tapa, plus bacalao croquettes. It is their best-known dish.",
          "zh": "是经酒类腌制的咸鳕鱼（「bacalao alcoholado」），作为小吃供应，另有鳕鱼炸丸。这是它最知名的菜。"
        }
      },
      {
        "question": {
          "es": "¿Qué dirección uso para encontrar la taberna?",
          "en": "Which address finds the tavern?",
          "zh": "找酒馆应使用哪个地址？"
        },
        "answer": {
          "es": "Calle Tetuán, 12, Madrid. Busca la ficha de Casa Labra y distingue el servicio de barra del restaurante.",
          "en": "Calle Tetuán, 12, Madrid. Use Casa Labra’s listing and distinguish bar service from the restaurant.",
          "zh": "Calle Tetuán, 12, Madrid。查找 Casa Labra 门店，并分清吧台与餐厅服务。"
        }
      }
    ],
    "related": [
      "comer",
      "tapas-cerca-sol",
      "la-mallorquina"
    ],
    "updated": {
      "es": "Última actualización: 27 de noviembre de 2026",
      "en": "Last updated: 27 November 2026",
      "zh": "最近更新：2026年11月27日"
    }
  },

  // 20. Mercado de San Miguel
  {
    "slug": "mercado-san-miguel",
    "group": {
      "es": "El Oso y el Madroño",
      "en": "El Oso y el Madroño",
      "zh": "熊与草莓树雕像"
    },
    "title": {
      "es": "Mercado de San Miguel desde Sol",
      "en": "Mercado de San Miguel from Sol",
      "zh": "从太阳门前往圣米格尔市场"
    },
    "metaTitle": {
      "es": "Mercado de San Miguel: cómo llegar desde Sol y qué comer | Madrid",
      "en": "Mercado de San Miguel: how to get there from Sol and what to eat | Madrid",
      "zh": "圣米格尔市场：从太阳门怎么去、吃什么 | 马德里"
    },
    "description": {
      "es": "Cómo ir del Oso y el Madroño al Mercado de San Miguel, qué encontrarás tras su reapertura de 2026 y consejos para visitarlo.",
      "en": "How to go from the statue to Mercado de San Miguel, what you will find after its 2026 reopening and tips for visiting.",
      "zh": "如何从雕像走到圣米格尔市场、2026 年重新开放后有啥，以及参观建议。"
    },
    "intro": {
      "es": "El **Mercado de San Miguel** es una parada de puestos gastronómicos junto a Plaza Mayor. El mercado anunció su reapertura el **26 de febrero de 2026** tras trabajos de conservación. Combínalo con el paseo desde Sol cuando quieras comparar varias comidas en un mismo edificio.",
      "en": "**Mercado de San Miguel** is a food-stall stop beside Plaza Mayor. The market announced its reopening on **26 February 2026** after conservation works. Combine it with the walk from Sol when you want to compare several foods in one building.",
      "zh": "**圣米格尔市场**位于马约尔广场旁，可在同一建筑内比较不同美食摊位。市场公告在保养工程后于 **2026年2月26日**重开，适合与从 Sol 出发的步行游览串联。"
    },
    "sections": [
      {
        "id": "route",
        "title": {
          "es": "Cómo llegar desde la estatua",
          "en": "How to get there from the statue",
          "zh": "从雕像怎么去"
        },
        "content": {
          "es": "Desde Sol toma **calle Mayor**, entra en Plaza Mayor por Felipe III y cruza hacia su lado occidental. Busca la salida hacia **Plaza de San Miguel** y el edificio de hierro y vidrio. También puedes mantenerte en calle Mayor hasta el entorno del mercado. La calle de la Cruz no conduce desde Plaza Mayor al mercado.",
          "en": "From Sol, take **Calle Mayor**, enter Plaza Mayor via Felipe III and cross to its western side. Find the exit towards **Plaza de San Miguel** and the iron-and-glass building. You can also stay on Calle Mayor until the market area.",
          "zh": "从 Sol 沿 **Calle Mayor**，经 Felipe III 进入马约尔广场后朝西侧走，寻找通往 **Plaza de San Miguel** 与铁玻璃市场建筑的出口；也可沿 Calle Mayor 继续到市场一带。"
        }
      },
      {
        "id": "what",
        "title": {
          "es": "Qué encontrarás",
          "en": "What you will find",
          "zh": "你会看到什么"
        },
        "content": {
          "es": "Da una vuelta por los puestos antes de comprar. Compara el producto, la cantidad y si prefieres un plato para compartir o varias pequeñas porciones. Si el objetivo es descansar, mira primero dónde vas a comer; un mercado de puestos no funciona como un restaurante con mesa asignada.",
          "en": "Browse the stalls before buying. Compare the food and portion size, then choose between a sharing plate and several small servings. If you need a rest, look for where you will eat first; a food market does not work like a restaurant with an assigned table.",
          "zh": "先逛摊位再购买，比较食物与份量，决定共享大份菜还是分别尝小份。若主要想休息，先了解在哪里用餐；摊位市场的座位安排与分配桌位的餐厅不同。"
        }
      }
    ],
    "faq": [
      {
        "question": {
          "es": "¿Cuánto se tarda desde Sol?",
          "en": "How long from Sol?",
          "zh": "从太阳门要多久？"
        },
        "answer": {
          "es": "Unos **7-8 minutos a pie** pasando por la Plaza Mayor.",
          "en": "About **7-8 minutes on foot** via Plaza Mayor.",
          "zh": "经马约尔广场步行约 **7–8 分钟**。"
        }
      },
      {
        "question": {
          "es": "¿Está abierto tras las obras?",
          "en": "Is it open after the works?",
          "zh": "修缮后开放了吗？"
        },
        "answer": {
          "es": "Sí: el mercado anunció su reapertura en febrero de 2026 tras las obras de conservación. Confirma horas y puestos en su web oficial antes de ir.",
          "en": "Yes: the market announced its reopening in February 2026 after conservation works. Confirm hours and stalls on its official website before going.",
          "zh": "是的：市场宣布修缮后于 2026 年 2 月重新开放。出发前请以官网确认营业时间与摊位。"
        }
      },
      {
        "question": {
          "es": "¿Cuándo reabrió tras las obras de conservación?",
          "en": "When did it reopen after conservation works?",
          "zh": "保养工程后什么时候重开？"
        },
        "answer": {
          "es": "El mercado anunció su reapertura el 26 de febrero de 2026. Consulta sus avisos para cambios posteriores.",
          "en": "The market announced its reopening on 26 February 2026. Check its notices for later changes.",
          "zh": "市场公告于2026年2月26日重开；之后的变动查看市场公告。"
        }
      }
    ],
    "related": [
      "plaza-mayor-desde-sol",
      "comer",
      "tapas-cerca-sol"
    ],
    "updated": {
      "es": "Última actualización: 27 de noviembre de 2026",
      "en": "Last updated: 27 November 2026",
      "zh": "最近更新：2026年11月27日"
    }
  },

  // 23. Desayunar cerca de Sol
  {
    "slug": "desayunar-cerca-sol",
    "group": {
      "es": "El Oso y el Madroño",
      "en": "El Oso y el Madroño",
      "zh": "熊与草莓树雕像"
    },
    "title": {
      "es": "Dónde desayunar cerca de Puerta del Sol",
      "en": "Where to Have Breakfast Near Puerta del Sol",
      "zh": "太阳门广场附近去哪吃早餐"
    },
    "metaTitle": {
      "es": "Dónde desayunar cerca de Puerta del Sol: opciones y horarios | Madrid",
      "en": "Where to Have Breakfast Near Puerta del Sol: options and times | Madrid",
      "zh": "太阳门广场附近吃早餐：选择与时段 | 马德里"
    },
    "description": {
      "es": "Tipos de desayuno en el centro de Madrid y locales concretos (como La Mallorquina) para empezar el día cerca de Sol.",
      "en": "Kinds of breakfast in central Madrid and specific spots (like La Mallorquina) to start the day near Sol.",
      "zh": "马德里市中心的早餐类型，以及太阳门附近具体的去处（如 La Mallorquina）。"
    },
    "intro": {
      "es": "Para desayunar junto al Oso, decide entre **bollería para llevar**, **una pausa con café** y **chocolate con churros**. La Mallorquina y San Ginés permiten organizar dos tipos de desayuno sin salir del entorno de Sol y Arenal. Escoge una parada antes de iniciar la ruta, en lugar de recorrer el centro buscando un menú genérico.",
      "en": "For breakfast near the bear, choose between **pastries to take away**, **a café break** and **chocolate with churros**. La Mallorquina and San Ginés offer two different stops around Sol and Arenal. Pick one before beginning your walk rather than searching the centre for a generic breakfast menu.",
      "zh": "在铜熊附近吃早餐，先选**外带糕点、坐下喝咖啡，或巧克力配 churros**。La Mallorquina 与 San Ginés 对应不同体验，都可与 Sol、Arenal 一带步行串联。先选好一站，比在市中心临时寻找泛泛的早餐套餐更好安排。"
    },
    "sections": [
      {
        "id": "mallorquina",
        "title": {
          "es": "Bollería en La Mallorquina",
          "en": "Pastries at La Mallorquina",
          "zh": "La Mallorquina 糕点早餐"
        },
        "content": {
          "es": "La sucursal de **Puerta del Sol, 8**, está junto a calle Mayor. Puedes comprar bollería para llevar o preguntar por el salón superior. Si tu siguiente parada es Plaza Mayor, este lado de Sol encaja con la dirección del paseo; si necesitas sentarte, comprueba la disponibilidad antes de comprar.",
          "en": "The **Puerta del Sol, 8** branch is beside Calle Mayor. Buy pastries to take away or ask about the upstairs café. If heading to Plaza Mayor next, this side of Sol fits your route. If you need a seat, check availability before buying.",
          "zh": "**Puerta del Sol, 8** 分店靠 Calle Mayor，可买外带糕点，也可询问楼上咖啡厅。下一站去马约尔广场时，这一侧顺路；需要座位请在购买前询问。"
        }
      },
      {
        "id": "sangines",
        "title": {
          "es": "Chocolate con churros en San Ginés",
          "en": "Chocolate with churros at San Ginés",
          "zh": "San Ginés 巧克力配 churros"
        },
        "content": {
          "es": "La chocolatería está en **Pasadizo de San Ginés, 5**, junto al entorno de Arenal. Es una alternativa para un desayuno centrado en chocolate y masa frita. Distingue churros y porras al pedir, mira la cantidad de la ración y decide si compartirla.",
          "en": "The chocolate café is at **Pasadizo de San Ginés, 5**, by Arenal. It is the option for a breakfast based on hot chocolate and fried dough. Distinguish churros from porras when ordering, check the portion and decide whether to share.",
          "zh": "巧克力店位于 **Pasadizo de San Ginés, 5**，靠 Arenal 一带，适合以热巧克力和炸面点为主的早餐。点单时分清 churros 与 porras，查看一份数量，再决定是否分享。"
        }
      },
      {
        "id": "planning",
        "title": {
          "es": "Antes de una visita con hora reservada",
          "en": "Before a timed visit",
          "zh": "预约参观前怎样安排"
        },
        "content": {
          "es": "No hagas depender una reserva del tiempo de una cola. Compra algo para llevar si vas justo de tiempo; deja el desayuno sentado para un hueco más amplio. Usa la web de la sucursal para el horario del día. Si tienes alergias, pregunta por ingredientes y contacto cruzado antes de elegir una pieza.",
          "en": "Do not make a timed booking depend on queue length. Choose takeaway when short on time and save a seated breakfast for a longer gap. Use the branch’s website for the day’s hours. If you have allergies, ask about ingredients and cross-contact before selecting a pastry.",
          "zh": "不要把准时赴约寄托在排队长短上。赶时间可选外带，有余量再坐下吃。营业时间查看具体分店官网；如有过敏需求，应先询问食材及交叉接触情况再选糕点。"
        }
      }
    ],
    "faq": [
      {
        "question": {
          "es": "¿Qué desayuno encaja con Plaza Mayor?",
          "en": "Which breakfast fits a Plaza Mayor walk?",
          "zh": "早餐后去马约尔广场，哪家顺路？"
        },
        "answer": {
          "es": "La Mallorquina queda junto al comienzo de calle Mayor, desde donde puedes seguir hacia Plaza Mayor.",
          "en": "La Mallorquina is beside the start of Calle Mayor, which leads towards Plaza Mayor.",
          "zh": "La Mallorquina 靠 Calle Mayor 起点，可沿街继续去马约尔广场。"
        }
      },
      {
        "question": {
          "es": "¿Dónde está San Ginés respecto a Sol?",
          "en": "Where is San Ginés in relation to Sol?",
          "zh": "San Ginés 相对 Sol 在哪里？"
        },
        "answer": {
          "es": "En Pasadizo de San Ginés, 5, en el entorno de la calle Arenal.",
          "en": "At Pasadizo de San Ginés, 5, by Calle Arenal.",
          "zh": "位于 Pasadizo de San Ginés, 5，在 Arenal 街一带。"
        }
      },
      {
        "question": {
          "es": "¿Puedo contar con una mesa sin esperar?",
          "en": "Can I count on a table without waiting?",
          "zh": "可以保证不用等位吗？"
        },
        "answer": {
          "es": "No. Pregunta por el servicio y las mesas al llegar; si tienes una entrada con hora, organiza margen o elige para llevar.",
          "en": "No. Ask about service and tables on arrival; allow a buffer or choose takeaway before a timed booking.",
          "zh": "不能保证。到店先询问服务及座位；若有定时门票，应留余量或选择外带。"
        }
      }
    ],
    "related": [
      "la-mallorquina",
      "comer",
      "chocolateria-san-gines"
    ],
    "updated": {
      "es": "Última actualización: 27 de noviembre de 2026",
      "en": "Last updated: 27 November 2026",
      "zh": "最近更新：2026年11月27日"
    }
  },

  // 24. La Mallorquina
  {
    "slug": "la-mallorquina",
    "group": {
      "es": "El Oso y el Madroño",
      "en": "El Oso y el Madroño",
      "zh": "熊与草莓树雕像"
    },
    "title": {
      "es": "La Mallorquina en Puerta del Sol",
      "en": "La Mallorquina in Puerta del Sol",
      "zh": "太阳门广场的 La Mallorquina"
    },
    "metaTitle": {
      "es": "La Mallorquina: qué pedir en Puerta del Sol | Madrid",
      "en": "La Mallorquina: what to order in Puerta del Sol | Madrid",
      "zh": "La Mallorquina：太阳门广场点什么 | 马德里"
    },
    "description": {
      "es": "Qué es La Mallorquina, dónde está en la Puerta del Sol, qué pedir y cómo encajarla en tu ruta desde el Oso y el Madroño.",
      "en": "What La Mallorquina is, where it is on Puerta del Sol, what to order and how to fit it into your route from the statue.",
      "zh": "La Mallorquina 是什么、在太阳门广场的何处、点什么，以及如何把它安排进从雕像出发的路线。"
    },
    "intro": {
      "es": "**La Mallorquina** es una pastelería de 1894 en **Puerta del Sol, 8**, junto al comienzo de la calle Mayor. Encaja como parada de bollería después de la foto con el Oso o antes de caminar a Plaza Mayor. La tienda pertenece a La Mallorquina; el salón y la compra para llevar son dos formas distintas de hacer la visita.",
      "en": "**La Mallorquina** is a pastry shop founded in 1894 at **Puerta del Sol, 8**, beside the start of Calle Mayor. It works as a pastry stop after a photograph with the bear or before walking to Plaza Mayor. The shop is operated by La Mallorquina; takeaway shopping and the upstairs café are different ways to visit.",
      "zh": "**La Mallorquina** 始于1894年，位于 **Puerta del Sol, 8，靠 Calle Mayor 起点**。拍完铜熊后，或步行去马约尔广场前，可在这里安排糕点停靠。门店由 La Mallorquina 经营，外带购物与楼上咖啡厅是两种不同的到访方式。"
    },
    "sections": [
      {
        "id": "location",
        "title": {
          "es": "Dónde está y por dónde llegar",
          "en": "Location and the walking approach",
          "zh": "位置与步行方向"
        },
        "content": {
          "es": "Desde el Oso cruza la plaza hacia el lado de **calle Mayor**, manteniéndote en el espacio peatonal. Busca el número **8 de Puerta del Sol**; es la dirección que publica el establecimiento y la ficha de turismo también la sitúa en **Mayor, 2**. No la busques en la salida hacia Carrera de San Jerónimo.",
          "en": "From the bear, cross the square towards **Calle Mayor**, staying in the pedestrian area. Look for **Puerta del Sol, 8**, the address published by the shop; the tourism listing also gives **Mayor, 2**. It is not on the Carrera de San Jerónimo side of the square.",
          "zh": "从铜熊出发，穿过广场朝 **Calle Mayor 一侧**走，沿步行空间寻找 **Puerta del Sol, 8**。这是店方公布的地址；旅游资料也标为 **Mayor, 2**。不要往 Carrera de San Jerónimo 一侧找店。"
        }
      },
      {
        "id": "choice",
        "title": {
          "es": "Elegir entre bollería, café y una compra para llevar",
          "en": "Choose pastries, a café stop or takeaway",
          "zh": "选择糕点、咖啡停留或外带"
        },
        "content": {
          "es": "La tienda destaca las **napolitanas de crema**, las palmeras de chocolate y los milhojas entre sus dulces. Mira la vitrina antes de pedir: una pieza de bollería es una parada distinta de comprar una tarta para compartir. Para un paseo, decide primero qué llevar y pide el envoltorio adecuado; para descansar, pregunta por el salón superior antes de comprar.",
          "en": "The shop highlights **cream napolitanas**, chocolate palmiers and mille-feuille among its pastries. Look at the display before ordering: a single pastry is a different stop from buying a cake to share. For a walk, decide what you want to carry and ask for suitable packaging; for a rest, ask about the upstairs room before buying.",
          "zh": "店方介绍的糕点包括**奶油馅 napolitana、巧克力棕榈酥和千层酥**。先看橱窗再点单：买一份随走随吃的糕点，和买整块蛋糕分享，安排不同。若继续步行，可先选适合外带的品项与包装；想休息则先询问楼上座位。"
        }
      },
      {
        "id": "seating",
        "title": {
          "es": "Mostrador o salón: organiza la parada",
          "en": "Counter or upstairs: plan your stop",
          "zh": "柜台与楼上咖啡厅怎样选"
        },
        "content": {
          "es": "El establecimiento anuncia un **salón en la planta superior** con vistas a Sol. Pregunta por el acceso y el servicio si necesitas sentarte, y por las condiciones de acceso si llevas carrito o tienes movilidad reducida. La existencia del salón no garantiza una mesa libre ni un acceso sin escalones.",
          "en": "The shop advertises an **upstairs room** overlooking Sol. Ask about seating and service if you want to sit down, and about access if using a pushchair or travelling with limited mobility. An upstairs café does not guarantee a free table or a step-free route.",
          "zh": "门店介绍有**面向 Sol 的楼上咖啡厅**。需要坐下时先询问座位与服务方式；使用婴儿车或行动不便者也应先了解上楼条件。店内有咖啡厅，不等于随时有空位或全程无台阶。"
        }
      },
      {
        "id": "planning",
        "title": {
          "es": "Horario, precios y siguiente parada",
          "en": "Hours, prices and the next stop",
          "zh": "营业、价格与下一站"
        },
        "content": {
          "es": "La ficha de esta sucursal publica **domingo a jueves de 9:00 a 20:30, viernes y sábado de 9:00 a 21:00**, consultado el 27 de noviembre de 2026. Para festivos, revisa el aviso de la tienda de Puerta del Sol. Revisa el precio del producto y del servicio elegido antes de pedir. Después, la salida a calle Mayor permite seguir a Plaza Mayor; si prefieres chocolate con churros, compara la alternativa de San Ginés antes de hacer dos paradas de dulce seguidas.",
          "en": "The branch page lists **Sunday–Thursday 09:00–20:30 and Friday–Saturday 09:00–21:00**, checked on 27 November 2026. Check this Puerta del Sol shop’s notices for holiday changes. Check the price of your chosen item and service before ordering. Afterwards, Calle Mayor leads towards Plaza Mayor. If you prefer chocolate with churros, compare San Ginés first rather than scheduling two sweet stops back to back.",
          "zh": "店方分店页列出**周日至周四09:00–20:30、周五与周六09:00–21:00**，核对日期为2026年11月27日。节假日变动可查看 Puerta del Sol 门店公告。点单前看清品项及所选服务价格。之后可沿 Calle Mayor 去马约尔广场；若更想吃巧克力配 churros，可先比较 San Ginés，再决定是否安排两站甜点。"
        }
      }
    ],
    "faq": [
      {
        "question": {
          "es": "¿En qué lado de Sol está La Mallorquina?",
          "en": "Which side of Sol is La Mallorquina on?",
          "zh": "La Mallorquina 在 Sol 哪一侧？"
        },
        "answer": {
          "es": "En Puerta del Sol, 8, junto a calle Mayor; la ficha turística indica también Mayor, 2.",
          "en": "At Puerta del Sol, 8, beside Calle Mayor; the tourism listing also gives Mayor, 2.",
          "zh": "在 Puerta del Sol, 8，靠 Calle Mayor；旅游资料也标为 Mayor, 2。"
        }
      },
      {
        "question": {
          "es": "¿Se puede tomar algo sentado?",
          "en": "Can I sit down for a drink?",
          "zh": "可以坐下喝饮品吗？"
        },
        "answer": {
          "es": "El local anuncia un salón superior. Pregunta por las mesas y el acceso antes de elegir entre salón y compra para llevar.",
          "en": "The shop advertises an upstairs room. Ask about tables and access before choosing between the café and takeaway.",
          "zh": "店方介绍有楼上咖啡厅。请先询问座位和上楼条件，再决定堂食或外带。"
        }
      },
      {
        "question": {
          "es": "¿Es la misma experiencia que San Ginés?",
          "en": "Is it the same experience as San Ginés?",
          "zh": "与 San Ginés 是同一种体验吗？"
        },
        "answer": {
          "es": "No: La Mallorquina es una parada de pastelería; San Ginés se centra en chocolate con churros. Elige según lo que quieras comer y el tiempo para sentarte.",
          "en": "No. La Mallorquina is a pastry-shop stop; San Ginés focuses on chocolate with churros. Choose according to what you want to eat and how long you want to sit.",
          "zh": "不同。La Mallorquina 主要是糕点停靠，San Ginés 主打巧克力配 churros；可按口味及是否要坐下选择。"
        }
      }
    ],
    "related": [
      "desayunar-cerca-sol",
      "chocolateria-san-gines",
      "comer",
      "puerta-del-sol"
    ],
    "updated": {
      "es": "Última actualización: 27 de noviembre de 2026",
      "en": "Last updated: 27 November 2026",
      "zh": "最近更新：2026年11月27日"
    }
  },

  // 25. Chocolatería San Ginés
  {
    "slug": "chocolateria-san-gines",
    "group": {
      "es": "El Oso y el Madroño",
      "en": "El Oso y el Madroño",
      "zh": "熊与草莓树雕像"
    },
    "title": {
      "es": "Chocolate con churros en San Ginés",
      "en": "Chocolate con Churros at San Ginés",
      "zh": "San Ginés 的巧克力油条（Churros）"
    },
    "metaTitle": {
      "es": "Chocolatería San Ginés: cómo llegar desde Sol | Madrid",
      "en": "Chocolatería San Ginés: how to get there from Sol | Madrid",
      "zh": "San Ginés 巧克力店：从太阳门怎么去 | 马德里"
    },
    "description": {
      "es": "Qué es San Ginés, diferencias en el menú (chocolate a la taza, porras, churros) y la ruta a pie desde el Oso y el Madroño.",
      "en": "What San Ginés is, menu differences (hot chocolate, porras, churros) and the walking route from the statue.",
      "zh": "San Ginés 是什么、菜单区别（杯装热巧克力、porras、churros）以及从雕像步行前往的路线。"
    },
    "intro": {
      "es": "La **Chocolatería San Ginés** está en **Pasadizo de San Ginés, 5**, en el entorno de Arenal. Su especialidad es el chocolate con churros y porras. Puede ser una parada antes de Ópera o después del paseo por Sol; elige cuánto tiempo quieres dedicar a sentarte antes de continuar.",
      "en": "**Chocolatería San Ginés** is at **Pasadizo de San Ginés, 5**, by Arenal. Its speciality is chocolate with churros and porras. It fits before a walk to Ópera or after exploring Sol; decide how long you want to sit before continuing.",
      "zh": "**San Ginés 巧克力店**位于 **Pasadizo de San Ginés, 5**，靠 Arenal，以巧克力配 churros 和 porras 为特色。可安排在去 Ópera 之前，或逛 Sol 之后；先为坐下品尝留出时间。"
    },
    "sections": [
      {
        "id": "route",
        "title": {
          "es": "Ruta a pie desde la estatua",
          "en": "Walking route from the statue",
          "zh": "从雕像步行路线"
        },
        "content": {
          "es": "Desde Sol sigue **calle Arenal** hacia el entorno de la iglesia de San Ginés y busca **Pasadizo de San Ginés**. Usa el número **5** del pasadizo como destino. La chocolatería y la iglesia son dos visitas distintas, aunque comparten el nombre.",
          "en": "From Sol, follow **Calle Arenal** towards the area around San Ginés church and find **Pasadizo de San Ginés**. Use number **5** in the passage as your destination. The chocolate café and the church are different stops, although they share the name.",
          "zh": "从 Sol 沿 **Calle Arenal** 朝 San Ginés 教堂一带走，再寻找 **Pasadizo de San Ginés**，以通道 **5号**为目的地。巧克力店和教堂是两个不同的停靠点，别因同名混淆。"
        }
      },
      {
        "id": "menu",
        "title": {
          "es": "Qué pedir: chocolate, churros y porras",
          "en": "What to order: chocolate, churros and porras",
          "zh": "点什么：巧克力、churros 与 porras"
        },
        "content": {
          "es": "El plato estrella es el **chocolate a la taza** (denso, para mojar) con **churros** (finos y rizados) o **porras** (más gruesas). Pide «chocolate con churros» o, si prefieres algo más contundente, «con porras». Se sirve de madrugada y a cualquier hora; es un capricho, no un desayuno completo.",
          "en": "The star dish is **hot chocolate** (thick, for dipping) with **churros** (thin, curled) or **porras** (thicker). Order «chocolate con churros» or, if you want something more substantial, «con porras». It is served late at night and at any hour; a treat, not a full breakfast.",
          "zh": "招牌是杯装 **热巧克力**（浓稠、可蘸）配 **churros**（细而卷）或 **porras**（更粗）。点「chocolate con churros」，若想要扎实些可点「con porras」。它深夜与任何时段都供应；算是犒赏，而非完整早餐。"
        }
      }
    ],
    "faq": [
      {
        "question": {
          "es": "¿Cuánto se tarda desde el Oso y el Madroño?",
          "en": "How long from the statue?",
          "zh": "从雕像要走多久？"
        },
        "answer": {
          "es": "Está en Pasadizo de San Ginés, 5. Desde Sol puedes acercarte por Arenal y seguir las señales del pasadizo.",
          "en": "It is at Pasadizo de San Ginés, 5. Approach from Sol along Arenal, then find the passage.",
          "zh": "位于 Pasadizo de San Ginés, 5，可从 Sol 沿 Arenal 接近，再找通道。"
        }
      },
      {
        "question": {
          "es": "¿Abren toda la noche?",
          "en": "Are they open all night?",
          "zh": "通宵营业吗？"
        },
        "answer": {
          "es": "Consulta el horario del local histórico en su web para organizar una visita nocturna. No uses el horario de otra sucursal como referencia.",
          "en": "Use the historic venue’s own website to plan a late visit. Do not substitute another branch’s hours.",
          "zh": "深夜到访请查看历史门店官网营业时间，不要使用其他分店的时间。"
        }
      },
      {
        "question": {
          "es": "¿Qué dirección corresponde a la chocolatería histórica?",
          "en": "Which address is the historic chocolate café?",
          "zh": "历史门店的地址是什么？"
        },
        "answer": {
          "es": "Pasadizo de San Ginés, 5, Madrid, en el entorno de la calle Arenal.",
          "en": "Pasadizo de San Ginés, 5, Madrid, by Calle Arenal.",
          "zh": "Pasadizo de San Ginés, 5, Madrid，靠 Arenal 街。"
        }
      }
    ],
    "related": [
      "desayunar-cerca-sol",
      "comer",
      "plaza-mayor-desde-sol"
    ],
    "updated": {
      "es": "Última actualización: 27 de noviembre de 2026",
      "en": "Last updated: 27 November 2026",
      "zh": "最近更新：2026年11月27日"
    }
  },

  // 34. Puerta del Sol en una hora
  {
    "slug": "sol-en-una-hora",
    "group": {
      "es": "El Oso y el Madroño",
      "en": "El Oso y el Madroño",
      "zh": "熊与草莓树雕像"
    },
    "title": {
      "es": "Puerta del Sol en una hora",
      "en": "Puerta del Sol in One Hour",
      "zh": "太阳门广场一小时路线"
    },
    "metaTitle": {
      "es": "Puerta del Sol en una hora: ruta exprés | Madrid",
      "en": "Puerta del Sol in One Hour: express route | Madrid",
      "zh": "太阳门广场一小时：快速路线 | 马德里"
    },
    "description": {
      "es": "Una ruta de una hora que combina el Oso y el Madroño, el Kilómetro Cero, el reloj y la Plaza Mayor, para visitantes con poco tiempo.",
      "en": "A one-hour route combining the Oso y el Madroño, Kilometre Zero, the clock and Plaza Mayor, for visitors short on time.",
      "zh": "一小时路线：结合熊与草莓树雕像、零公里、钟楼与马约尔广场，适合时间有限的游客。"
    },
    "intro": {
      "es": "Esta ruta a pie de **una hora por Sol y Plaza Mayor** combina la escultura, el reloj y el Kilómetro Cero con un paseo por calle Mayor. Reserva más tiempo si quieres desayunar, comer o esperar para una fotografía.",
      "en": "This **one-hour walk around Sol and Plaza Mayor** combines the statue, clock and Kilometre Zero with Calle Mayor. Allow more time for breakfast, a meal or waiting for a photograph.",
      "zh": "这条**Sol 与马约尔广场一小时步行路线**串联铜熊、钟楼和零公里标志，再沿 Calle Mayor 散步。用餐或排队拍照时，可预留更多时间。"
    },
    "sections": [
      {
        "id": "start",
        "title": {
          "es": "1 · Primeros 10 minutos: el Oso y el Madroño",
          "en": "1 · First 10 minutes: the bear and tree",
          "zh": "1 · 前10分钟：铜熊与草莓树"
        },
        "content": {
          "es": "Empieza junto a la **calle de Alcalá**. Mira cómo la figura se apoya en el árbol y deja libre el paso al hacer una foto. Antes de moverte, sitúa la Casa de Correos al otro lado de la plaza: te servirá de referencia para la siguiente parada.",
          "en": "Start by **Calle de Alcalá**. Look at how the bear rests against the tree and keep the walking route clear while taking a photo. Locate the Casa de Correos across the square before moving; it is your reference for the next stop.",
          "zh": "从**阿尔卡拉街一端**开始，看铜熊扶树的姿态，拍照时不要挡住通道。离开前先找到广场另一侧的 Casa de Correos，作为下一站方向参照。"
        }
      },
      {
        "id": "square",
        "title": {
          "es": "2 · Siguientes 15 minutos: reloj y Kilómetro Cero",
          "en": "2 · Next 15 minutes: the clock and Kilometre Zero",
          "zh": "2 · 接下来15分钟：钟楼与零公里标志"
        },
        "content": {
          "es": "Cruza hacia la **Real Casa de Correos** para ver el reloj desde el espacio público. Busca la placa del **Kilómetro Cero** delante del edificio. Si hay gente esperando una foto, observa la placa desde un lado y continúa; no necesitas hacer cola para comprender esta parada.",
          "en": "Cross towards the **Real Casa de Correos** and see the clock from the public square. Find the **Kilometre Zero** plaque in front of the building. If people are waiting for photographs, view it from the side and continue; a queue is not necessary to understand the stop.",
          "zh": "穿过广场朝 **Real Casa de Correos**，从公共空间看钟楼，再找建筑前的**零公里标志**。若有人排队拍照，可从侧面观察后继续走，不必把排队作为这一站的必要环节。"
        }
      },
      {
        "id": "mayor",
        "title": {
          "es": "3 · Siguientes 20 minutos: calle Mayor y Plaza Mayor",
          "en": "3 · Next 20 minutes: Calle Mayor and Plaza Mayor",
          "zh": "3 · 再用20分钟：Calle Mayor 与马约尔广场"
        },
        "content": {
          "es": "Sal de Sol por **calle Mayor** y entra en **Plaza Mayor**. Mira la estatua de Felipe III y las fachadas desde el centro antes de recorrer un tramo de soportales. Esta parte da sentido a la ruta: cambia una plaza de encuentro por otra de arquitectura cerrada.",
          "en": "Leave Sol along **Calle Mayor** and enter **Plaza Mayor**. Look at the statue of Felipe III and the façades from the centre before walking through part of the arcades. This changes the view from an open meeting square to an enclosed architectural space.",
          "zh": "沿 **Calle Mayor** 离开 Sol，进入**马约尔广场**。先从中央看腓力三世像与立面，再走一段拱廊。这一段可比较开放的城市会合点与四周建筑围合广场的空间差异。"
        }
      },
      {
        "id": "finish",
        "title": {
          "es": "4 · Últimos 15 minutos: volver o ampliar",
          "en": "4 · Final 15 minutes: return or extend",
          "zh": "4 · 最后15分钟：返回或延伸"
        },
        "content": {
          "es": "Si necesitas volver a Sol, regresa por calle Mayor. Si dispones de más tiempo, sigue al **Mercado de San Miguel** o hacia **San Ginés y Arenal**: una comida o una cola convierte la visita en una ruta más larga. Con niños, lluvia o movilidad reducida, acorta la ruta a Sol y una sola salida; el pavimento, la afluencia y los accesos merecen más margen.",
          "en": "Return along Calle Mayor if you need to finish at Sol. With more time, continue to **Mercado de San Miguel** or towards **San Ginés and Arenal**; a meal or queue turns this into a longer visit. With children, rain or limited mobility, shorten the walk to Sol and one nearby stop, allowing extra time for paving, crowds and access.",
          "zh": "需要回 Sol 时沿 Calle Mayor 返回。有更多时间再去**圣米格尔市场**，或转向 **San Ginés 与 Arenal**；加入用餐或排队，就应延长总时长。带孩子、雨天或行动不便时，可缩成 Sol 加一个周边停靠点，为路面、人流与出入口留更多时间。"
        }
      }
    ],
    "faq": [
      {
        "question": {
          "es": "¿La hora incluye desayuno o comida?",
          "en": "Does the hour include breakfast or a meal?",
          "zh": "一小时包含早餐或正餐吗？"
        },
        "answer": {
          "es": "No. Es una distribución para pasear y observar; añade tiempo para pedir, sentarte y comer.",
          "en": "No. It is a walking-and-looking plan; add time for ordering, sitting down and eating.",
          "zh": "不包含。这是步行与观察的时间分配，用餐需另加点单、就座及进食时间。"
        }
      },
      {
        "question": {
          "es": "¿Dónde termina la ruta?",
          "en": "Where does the route end?",
          "zh": "路线在哪里结束？"
        },
        "answer": {
          "es": "Puedes volver a Sol por calle Mayor o prolongarla desde Plaza Mayor hacia San Miguel o Arenal.",
          "en": "You can return to Sol along Calle Mayor or extend from Plaza Mayor towards San Miguel or Arenal.",
          "zh": "可沿 Calle Mayor 回 Sol，或从马约尔广场延伸到 San Miguel、Arenal 一带。"
        }
      },
      {
        "question": {
          "es": "¿Qué elimino si voy con prisa?",
          "en": "What should I skip if short on time?",
          "zh": "赶时间可以删掉哪一段？"
        },
        "answer": {
          "es": "Quédate en Sol con el Oso, el reloj y el Kilómetro Cero. Deja Plaza Mayor y las paradas de comida para otra visita.",
          "en": "Stay in Sol for the bear, clock and Kilometre Zero. Save Plaza Mayor and food stops for another visit.",
          "zh": "只留 Sol 的铜熊、钟楼与零公里标志，把马约尔广场及用餐留到其他时段。"
        }
      }
    ],
    "related": [
      "puerta-del-sol",
      "kilometro-cero",
      "plaza-mayor-desde-sol"
    ],
    "updated": {
      "es": "Última actualización: 27 de noviembre de 2026",
      "en": "Last updated: 27 November 2026",
      "zh": "最近更新：2026年11月27日"
    }
  },
];

export function getTopic(slug: string): TopicContent | undefined {
  return TOPICS.find((t) => t.slug === slug) ?? nearbyTopics.find((t) => t.slug === slug);
}

export const TOPIC_SLUGS: string[] = [...TOPICS, ...nearbyTopics].map((t) => t.slug);
