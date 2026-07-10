export const AIRBNB_URL = "https://www.airbnb.com/rooms/631518594031529862"

export const RATING = "4.82"
export const REVIEW_COUNT = 33

export type Localized = { en: string; es: string; de: string }

export type PhotoCategory = "inside" | "sleep" | "outdoors" | "surroundings"

export interface VillaPhoto {
  src: string
  w: number
  h: number
  category: PhotoCategory
  caption: Localized
}

export const PHOTOS: VillaPhoto[] = [
  {
    src: "/gallery/01-5a068d1a.jpg", w: 1920, h: 1280, category: "inside",
    caption: {
      en: "Make yourself at home in the living room.",
      es: "Ponte cómodo en nuestro salón.",
      de: "Mach es dir im Wohnzimmer gemütlich.",
    },
  },
  {
    src: "/gallery/02-569a9331.jpg", w: 1920, h: 1280, category: "inside",
    caption: {
      en: "The spacious living room opens onto the front terrace.",
      es: "El espacioso salón se abre a la terraza frente a la casa.",
      de: "Das großzügige Wohnzimmer öffnet sich zur vorderen Terrasse.",
    },
  },
  {
    src: "/gallery/03-25a35a54.jpg", w: 1920, h: 1280, category: "inside",
    caption: {
      en: "Dining table or games corner — your choice.",
      es: "Comedor o rincón de juegos. Lo que prefieras.",
      de: "Esstisch oder Spieleecke — ganz wie du magst.",
    },
  },
  {
    src: "/gallery/04-2fc40457.jpg", w: 1920, h: 1280, category: "inside",
    caption: {
      en: "Bright and spacious — that's our motto.",
      es: "Luminoso y espacioso, ese es nuestro lema.",
      de: "Hell und großzügig — das ist unser Motto.",
    },
  },
  {
    src: "/gallery/05-240d2fbb.jpg", w: 1920, h: 1280, category: "inside",
    caption: {
      en: "Step into the comfort of Villa Cuatro Vientos, your holiday home.",
      es: "Entra en la comodidad de Villa Cuatro Vientos, tu hogar para las vacaciones.",
      de: "Willkommen in der Villa Cuatro Vientos, deinem Zuhause im Urlaub.",
    },
  },
  {
    src: "/gallery/06-b9198ba9.jpg", w: 1920, h: 1285, category: "inside",
    caption: {
      en: "From the kitchen you step up to the covered terrace.",
      es: "Desde la cocina se sube a la terraza cubierta.",
      de: "Von der Küche geht es hinauf zur überdachten Terrasse.",
    },
  },
  {
    src: "/gallery/07-d7e62b5f.jpg", w: 1920, h: 1289, category: "inside",
    caption: {
      en: "Our Spanish-style kitchen: informal, rural, and well equipped.",
      es: "Nuestra cocina de estilo español: informal, rural pero bien equipada.",
      de: "Unsere Küche im spanischen Stil: leger, ländlich und gut ausgestattet.",
    },
  },
  {
    src: "/gallery/08-36eef533.jpg", w: 1920, h: 1280, category: "inside",
    caption: {
      en: "Through the kitchen you can also reach the bedrooms and second bathroom.",
      es: "A través de la cocina también se llega a los dormitorios y al segundo baño.",
      de: "Durch die Küche erreichst du auch die Schlafzimmer und das zweite Bad.",
    },
  },
  {
    src: "/gallery/09-2824fcab.jpg", w: 1920, h: 1280, category: "inside",
    caption: {
      en: "Cosy dinners are an important part of any holiday — with an extendable table for eating inside.",
      es: "La cena acogedora es una parte importante de las vacaciones. Hay una mesa extensible por si quieres comer dentro.",
      de: "Gemütliche Abendessen gehören zum Urlaub — mit ausziehbarem Tisch für drinnen.",
    },
  },
  {
    src: "/gallery/10-77656e5e.jpg", w: 1920, h: 1285, category: "inside",
    caption: {
      en: "Lunchtime! On one of the terraces, in the living room or the kitchen? Barbecue, fresh salad — or just tapas by the pool?",
      es: "¿Hora de comer? ¿En una de las terrazas, en el salón o en la cocina? ¿Barbacoa, ensalada fresca o unas tapas en la piscina?",
      de: "Essenszeit! Auf einer der Terrassen, im Wohnzimmer oder in der Küche? Grillen, frischer Salat — oder Tapas am Pool?",
    },
  },
  {
    src: "/gallery/11-168108cd.jpg", w: 1920, h: 1280, category: "sleep",
    caption: {
      en: "The main bedroom has a double bed, two single beds and an office corner.",
      es: "El dormitorio principal tiene una cama doble, 2 camas individuales y un rincón de oficina.",
      de: "Das Hauptschlafzimmer hat ein Doppelbett, zwei Einzelbetten und eine Arbeitsecke.",
    },
  },
  {
    src: "/gallery/12-28dd76c6.jpg", w: 1920, h: 1285, category: "sleep",
    caption: {
      en: "A door leads to the second hallway, bathroom and bedroom — or take the shortcut through the patio.",
      es: "Una puerta conduce al segundo pasillo, baño y dormitorio. También puedes pasar por el patio.",
      de: "Eine Tür führt zum zweiten Flur, Bad und Schlafzimmer — oder du nimmst die Abkürzung durch den Patio.",
    },
  },
  {
    src: "/gallery/13-ce3296be.jpg", w: 1920, h: 1280, category: "sleep",
    caption: {
      en: "Hopefully you won't have to work on holiday. But if you must — with a view!",
      es: "Con suerte no tendrás que trabajar en vacaciones, pero si tienes que hacerlo... ¡con vistas!",
      de: "Hoffentlich musst du im Urlaub nicht arbeiten. Aber wenn doch — dann mit Aussicht!",
    },
  },
  {
    src: "/gallery/14-657fac5a.jpg", w: 1920, h: 1280, category: "sleep",
    caption: {
      en: "Behind the screen are two pull-out single beds.",
      es: "Detrás del paraván hay 2 camas individuales que se pueden sacar.",
      de: "Hinter dem Paravent stehen zwei ausziehbare Einzelbetten.",
    },
  },
  {
    src: "/gallery/15-dc62fa9d.jpg", w: 1920, h: 1280, category: "sleep",
    caption: {
      en: "Bedroom 2 with a double bed and a single bed — and a view, of course.",
      es: "Dormitorio 2 con una cama doble y 1 cama individual... y una vista, por supuesto.",
      de: "Schlafzimmer 2 mit Doppelbett und Einzelbett — und Aussicht, versteht sich.",
    },
  },
  {
    src: "/gallery/16-73fc026c.jpg", w: 1920, h: 1280, category: "sleep",
    caption: {
      en: "A cosy corner in bedroom 2, which you can also reach through the patio.",
      es: "Acogedor rincón en el dormitorio 2, al que también se puede entrar por el patio.",
      de: "Eine gemütliche Ecke in Schlafzimmer 2, das du auch über den Patio erreichst.",
    },
  },
  {
    src: "/gallery/17-d49c5a91.jpg", w: 1920, h: 1280, category: "sleep",
    caption: {
      en: "Even with the extra single bed in use, there is plenty of space.",
      es: "Incluso con la cama individual en uso hay espacio de sobra.",
      de: "Auch mit dem zusätzlichen Einzelbett bleibt reichlich Platz.",
    },
  },
  {
    src: "/gallery/18-78c4d5ce.jpg", w: 1920, h: 1280, category: "sleep",
    caption: {
      en: "Sleep like a rose and wake up in paradise.",
      es: "Duerme como una rosa y despierta en el paraíso.",
      de: "Schlaf wie auf Rosen und wach im Paradies auf.",
    },
  },
  {
    src: "/gallery/19-c0353721.jpg", w: 1920, h: 1285, category: "sleep",
    caption: {
      en: "Bedroom 2 with the extra bed set up.",
      es: "Dormitorio 2 con cama supletoria.",
      de: "Schlafzimmer 2 mit aufgestelltem Zustellbett.",
    },
  },
  {
    src: "/gallery/20-63249408.jpg", w: 1920, h: 1280, category: "inside",
    caption: {
      en: "The hallway connects the living room, kitchen, a bathroom and the patio.",
      es: "El vestíbulo conecta el salón, la cocina, un baño y el patio.",
      de: "Der Flur verbindet Wohnzimmer, Küche, ein Bad und den Patio.",
    },
  },
  {
    src: "/gallery/21-20bf9bde.jpg", w: 1920, h: 1280, category: "sleep",
    caption: {
      en: "View from bathroom 1 towards the front door.",
      es: "Vista desde el baño 1 hacia la puerta principal.",
      de: "Blick aus Bad 1 Richtung Haustür.",
    },
  },
  {
    src: "/gallery/22-36af5b5e.jpg", w: 1920, h: 1280, category: "sleep",
    caption: {
      en: "Bathroom 1 with shower and toilet.",
      es: "Baño 1 con ducha e inodoro.",
      de: "Bad 1 mit Dusche und WC.",
    },
  },
  {
    src: "/gallery/23-20e4fb6e.jpg", w: 1920, h: 1280, category: "sleep",
    caption: {
      en: "A detail of bathroom 1.",
      es: "Detalle del baño 1.",
      de: "Ein Detail aus Bad 1.",
    },
  },
  {
    src: "/gallery/24-e05d2bed.jpg", w: 1920, h: 1280, category: "sleep",
    caption: {
      en: "The second hallway leads to the other bedroom — the patio door is on the left.",
      es: "El segundo pasillo conduce al otro dormitorio. La puerta del patio queda a la izquierda.",
      de: "Der zweite Flur führt zum anderen Schlafzimmer — links geht es in den Patio.",
    },
  },
  {
    src: "/gallery/25-aacd701d.jpg", w: 1920, h: 1280, category: "sleep",
    caption: {
      en: "The second bathroom sits between the two bedrooms.",
      es: "El segundo baño está entre los dos dormitorios.",
      de: "Das zweite Bad liegt zwischen den beiden Schlafzimmern.",
    },
  },
  {
    src: "/gallery/26-fe0fd75b.jpg", w: 1920, h: 1280, category: "sleep",
    caption: {
      en: "Bathroom 2 with bathtub and toilet. Towels are provided.",
      es: "Baño 2 con bañera e inodoro. Se proporciona ropa de baño.",
      de: "Bad 2 mit Badewanne und WC. Handtücher sind vorhanden.",
    },
  },
  {
    src: "/gallery/27-49b8eb1f.jpg", w: 1920, h: 1280, category: "sleep",
    caption: {
      en: "Bathroom 2.",
      es: "Cuarto de baño 2.",
      de: "Bad 2.",
    },
  },
  {
    src: "/gallery/28-f7ff94ad.jpg", w: 1920, h: 1280, category: "outdoors",
    caption: {
      en: "A beautiful walk takes you to the whitewashed village of Comares.",
      es: "Un hermoso paseo te lleva al pueblo encalado de Comares.",
      de: "Ein schöner Spaziergang bringt dich ins weiße Dorf Comares.",
    },
  },
  {
    src: "/gallery/29-bee1e008.jpg", w: 1920, h: 1280, category: "outdoors",
    caption: {
      en: "Welcome to Villa Cuatro Vientos!",
      es: "¡Bienvenidos a Villa Cuatro Vientos!",
      de: "Willkommen in der Villa Cuatro Vientos!",
    },
  },
  {
    src: "/gallery/30-d120b392.jpg", w: 1920, h: 1280, category: "outdoors",
    caption: {
      en: "Or press pause on the swing seat.",
      es: "¿O te pones en pausa en el columpio?",
      de: "Oder du drückst auf der Hollywoodschaukel auf Pause.",
    },
  },
  {
    src: "/gallery/31-48ad1669.jpg", w: 1920, h: 1285, category: "outdoors",
    caption: {
      en: "The patio is the heart of the house.",
      es: "El patio es el corazón de nuestra casa.",
      de: "Der Patio ist das Herz des Hauses.",
    },
  },
  {
    src: "/gallery/32-e913b8af.jpg", w: 1920, h: 1285, category: "outdoors",
    caption: {
      en: "Perfect for reading in peace — or a cosy corner to sit with friends and family.",
      es: "Ideal para leer en paz, pero también un rincón acogedor para sentarse con amigos o familia.",
      de: "Perfekt zum ungestörten Lesen — oder eine gemütliche Ecke für Freunde und Familie.",
    },
  },
  {
    src: "/gallery/33-a230e802.jpg", w: 1920, h: 1280, category: "outdoors",
    caption: {
      en: "This terrace is the ideal shady spot, with an incredible view.",
      es: "Esta terraza es un lugar ideal con sombra y una vista increíble.",
      de: "Diese Terrasse ist der ideale Schattenplatz — mit unglaublicher Aussicht.",
    },
  },
  {
    src: "/gallery/34-88efef95.jpg", w: 1920, h: 1280, category: "outdoors",
    caption: {
      en: "Dining al fresco: good company, good food, and an incredible view.",
      es: "Cenar al aire libre: buena compañía, buena comida y una vista increíble.",
      de: "Essen unter freiem Himmel: gute Gesellschaft, gutes Essen und eine unglaubliche Aussicht.",
    },
  },
  {
    src: "/gallery/35-f5ebb5fa.jpg", w: 1920, h: 1280, category: "outdoors",
    caption: {
      en: "A dip in the pool to refresh body and mind.",
      es: "Un chapuzón en la piscina para refrescar el cuerpo y la mente.",
      de: "Ein Sprung in den Pool erfrischt Körper und Geist.",
    },
  },
  {
    src: "/gallery/36-bb36f063.jpg", w: 1920, h: 1280, category: "outdoors",
    caption: {
      en: "Enjoy an aperitif before dinner under an almost always blue sky.",
      es: "Disfruta de un aperitivo antes de cenar bajo el cielo casi siempre azul.",
      de: "Ein Aperitif vor dem Abendessen unter fast immer blauem Himmel.",
    },
  },
  {
    src: "/gallery/37-08899839.jpg", w: 1920, h: 1285, category: "outdoors",
    caption: {
      en: "From the pool you can gaze across the mountains all the way to the Mediterranean.",
      es: "Desde la piscina se contemplan las montañas hasta el Mediterráneo.",
      de: "Vom Pool aus blickst du über die Berge bis zum Mittelmeer.",
    },
  },
  {
    src: "/gallery/38-b2c3e479.jpg", w: 1920, h: 1285, category: "outdoors",
    caption: {
      en: "Breathtaking views all around the house.",
      es: "Impresionantes vistas por toda la casa.",
      de: "Atemberaubende Ausblicke rund ums Haus.",
    },
  },
  {
    src: "/gallery/39-36c1b099.jpg", w: 1920, h: 1280, category: "outdoors",
    caption: {
      en: "And after lunch, a siesta under the old holm oak.",
      es: "Y después de comer, una siesta bajo la vieja encina.",
      de: "Und nach dem Essen eine Siesta unter der alten Steineiche.",
    },
  },
  {
    src: "/gallery/40-16a96295.jpg", w: 1920, h: 1280, category: "surroundings",
    caption: {
      en: "Comares, the 'Pearl of the Axarquía'.",
      es: "Comares, 'Perla de la Axarquía'.",
      de: "Comares, die „Perle der Axarquía“.",
    },
  },
  {
    src: "/gallery/41-cf95e322.jpg", w: 1920, h: 1440, category: "surroundings",
    caption: {
      en: "Comares was voted 'Pueblo Mágico de España' — come and discover why.",
      es: "Comares fue votado «Pueblo Mágico de España»: ven y descubre por qué.",
      de: "Comares wurde zum „Pueblo Mágico de España“ gewählt — finde heraus, warum.",
    },
  },
  {
    src: "/gallery/42-050a292e.jpg", w: 1920, h: 1280, category: "surroundings",
    caption: {
      en: "The Málaga gate welcomes you to the beautiful village of Comares.",
      es: "La puerta de Málaga te da la bienvenida al hermoso pueblo de Comares.",
      de: "Das Málaga-Tor heißt dich im schönen Comares willkommen.",
    },
  },
  {
    src: "/gallery/43-0078d41f.jpg", w: 1920, h: 1232, category: "surroundings",
    caption: {
      en: "Comares has bars and restaurants where you can enjoy the local cuisine.",
      es: "Comares tiene bares y restaurantes donde disfrutar de la comida local.",
      de: "In den Bars und Restaurants von Comares genießt du die lokale Küche.",
    },
  },
  {
    src: "/gallery/44-6a85ecc4.jpg", w: 1920, h: 1285, category: "surroundings",
    caption: {
      en: "Discover the Moorish past of Comares, told in its narrow streets.",
      es: "Descubre el pasado morisco de Comares en sus calles estrechas.",
      de: "Entdecke die maurische Vergangenheit von Comares in seinen Gassen.",
    },
  },
  {
    src: "/gallery/45-f5482935.jpg", w: 1920, h: 2560, category: "surroundings",
    caption: {
      en: "The beautiful beach of Torre del Mar is 30 km from the house.",
      es: "La hermosa playa de Torre del Mar está a 30 km de la casa.",
      de: "Der schöne Strand von Torre del Mar liegt 30 km vom Haus entfernt.",
    },
  },
  {
    src: "/gallery/46-f8c4be0f.jpg", w: 1920, h: 1263, category: "surroundings",
    caption: {
      en: "Eat crispy fresh fish right on the beach... and then?",
      es: "Come pescado fresco y crujiente en la playa... ¿y después?",
      de: "Iss knusprig-frischen Fisch direkt am Strand … und danach?",
    },
  },
  {
    src: "/gallery/47-63c6831f.jpg", w: 1920, h: 1440, category: "surroundings",
    caption: {
      en: "Málaga — a culinary and cultural gem by the sea.",
      es: "Málaga, joya culinaria y cultural junto al mar.",
      de: "Málaga — ein kulinarisches und kulturelles Juwel am Meer.",
    },
  },
  {
    src: "/gallery/48-9db87831.jpg", w: 1920, h: 1080, category: "surroundings",
    caption: {
      en: "Plaza de la Constitución in Málaga — history is literally underfoot.",
      es: "Plaza de la Constitución en Málaga: la historia está literalmente bajo tus pies.",
      de: "Plaza de la Constitución in Málaga — Geschichte liegt hier buchstäblich unter den Füßen.",
    },
  },
  {
    src: "/gallery/49-e573830e.jpg", w: 1920, h: 1079, category: "surroundings",
    caption: {
      en: "Flavours and aromas of Andalusia — the Atarazanas market is worth a visit.",
      es: "Sabores y aromas de Andalucía: merece la pena visitar el mercado de Atarazanas.",
      de: "Aromen Andalusiens — der Atarazanas-Markt ist einen Besuch wert.",
    },
  },
  {
    src: "/gallery/50-cbb6a1f5.jpg", w: 1920, h: 1080, category: "surroundings",
    caption: {
      en: "The beautiful façades of Málaga.",
      es: "Las hermosas fachadas de Málaga.",
      de: "Die schönen Fassaden von Málaga.",
    },
  },
  {
    src: "/gallery/51-7c5a34e3.png", w: 1920, h: 641, category: "surroundings",
    caption: {
      en: "Córdoba and the Mezquita. Fairy tales do exist.",
      es: "Córdoba con la Mezquita. Los cuentos de hadas existen.",
      de: "Córdoba mit der Mezquita. Es gibt sie doch, die Märchen.",
    },
  },
  {
    src: "/gallery/52-5b474028.jpg", w: 1920, h: 1280, category: "surroundings",
    caption: {
      en: "Granada — the Sierra Nevada and the Alhambra.",
      es: "Granada. Sierra Nevada y la Alhambra.",
      de: "Granada — die Sierra Nevada und die Alhambra.",
    },
  },
  {
    src: "/gallery/53-33e91666.jpg", w: 1920, h: 2560, category: "surroundings",
    caption: {
      en: "The Mezquita of Córdoba — unique in the world: a cathedral built inside a mosque.",
      es: "La Mezquita de Córdoba, única en el mundo: una catedral construida en una mezquita.",
      de: "Die Mezquita von Córdoba — weltweit einzigartig: eine Kathedrale in einer Moschee.",
    },
  },
  {
    src: "/gallery/54-759746d7.jpg", w: 1920, h: 2560, category: "surroundings",
    caption: {
      en: "The famous lion fountain at the Alhambra.",
      es: "La famosa fuente de los leones en la Alhambra.",
      de: "Der berühmte Löwenbrunnen in der Alhambra.",
    },
  },
  {
    src: "/gallery/55-b6109d39.jpg", w: 1920, h: 1439, category: "surroundings",
    caption: {
      en: "Ronda — dramatically perched on the cliffs.",
      es: "Ronda, dramáticamente asomada al tajo.",
      de: "Ronda — dramatisch über der Schlucht gelegen.",
    },
  },
  {
    src: "/gallery/56-d4d88f38.jpg", w: 1920, h: 2560, category: "surroundings",
    caption: {
      en: "Moorish motifs at the Alhambra.",
      es: "Motivos moriscos en la Alhambra.",
      de: "Maurische Ornamente in der Alhambra.",
    },
  },
  {
    src: "/gallery/57-cd1bd746.jpg", w: 1920, h: 2560, category: "surroundings",
    caption: {
      en: "The Caminito del Rey in Ardales — a breathtaking hiking path.",
      es: "El Caminito del Rey en Ardales, un sendero impresionante.",
      de: "Der Caminito del Rey in Ardales — ein atemberaubender Wanderweg.",
    },
  },
]

export function photoBySrc(name: string): VillaPhoto {
  const p = PHOTOS.find((p) => p.src.includes(name))
  if (!p) throw new Error(`photo not found: ${name}`)
  return p
}

export interface Review {
  name: string
  date: Localized
  text: Localized
}

// Real guest reviews from the Airbnb listing (translated per language, as Airbnb does).
export const REVIEWS: Review[] = [
  {
    name: "Rob",
    date: { en: "August 2025", es: "Agosto de 2025", de: "August 2025" },
    text: {
      en: "Heaven really is a place on earth!",
      es: "¡El cielo realmente es un lugar en la tierra!",
      de: "Der Himmel ist wirklich ein Ort auf Erden!",
    },
  },
  {
    name: "Jacek",
    date: { en: "May 2026", es: "Mayo de 2026", de: "Mai 2026" },
    text: {
      en: "I spent two wonderful weeks there — in fact I came back after two years. A beautiful place and setting, with privacy and peace. I went with my parents, who truly enjoyed being here and felt at home! The roads around Comares are winding and narrow — I loved it. And communication with Susana was excellent, always with quick replies and help.",
      es: "Pasé dos semanas maravillosas allí (de hecho, regresé después de dos años), un lugar y un entorno hermosos, con privacidad y tranquilidad. Fui con mis padres, que disfrutaron mucho y se sintieron como en casa. Los caminos alrededor de Comares son sinuosos y estrechos, ¡me encantó! Y la comunicación con Susana fue excelente, siempre con respuestas rápidas y ayuda.",
      de: "Ich habe dort zwei wunderbare Wochen verbracht — und bin tatsächlich nach zwei Jahren wiedergekommen. Ein wunderschöner Ort mit Privatsphäre und Ruhe. Ich war mit meinen Eltern da, die sich hier richtig wohl und wie zu Hause gefühlt haben! Die Straßen rund um Comares sind kurvig und schmal — ich fand es herrlich. Die Kommunikation mit Susana war ausgezeichnet, immer schnelle Antworten und Hilfe.",
    },
  },
  {
    name: "Rebecca",
    date: { en: "July 2026", es: "Julio de 2026", de: "Juli 2026" },
    text: {
      en: "What a beautifully situated villa — in the perfect spot to watch both sunrise and sunset. Very private and quiet. We hope to visit again some day.",
      es: "Qué villa tan bien ubicada, en el lugar perfecto para ver el amanecer y el atardecer. Muy privada y tranquila. Esperamos volver más adelante.",
      de: "Was für eine herrlich gelegene Villa — der perfekte Ort, um Sonnenaufgang und Sonnenuntergang zu sehen. Sehr privat und ruhig. Wir hoffen, eines Tages wiederzukommen.",
    },
  },
  {
    name: "Lena",
    date: { en: "December 2025", es: "Diciembre de 2025", de: "Dezember 2025" },
    text: {
      en: "We had a wonderful stay in this charming house. Beautiful walks right outside the gate and magnificent panoramic views from the house. The host Susanna was extremely friendly and helpful. We will be back some day.",
      es: "Tuvimos una estancia maravillosa en esta encantadora casa. Hermosos paseos justo al salir por la puerta y magníficas vistas panorámicas. La anfitriona Susanna fue amabilísima y muy servicial. Volveremos algún día.",
      de: "Wir hatten einen wunderbaren Aufenthalt in diesem bezaubernden Haus. Schöne Wanderungen direkt vor dem Tor und großartige Panoramablicke vom Haus. Die Gastgeberin Susanna war äußerst freundlich und hilfsbereit. Wir kommen eines Tages wieder.",
    },
  },
  {
    name: "Laura",
    date: { en: "August 2025", es: "Agosto de 2025", de: "August 2025" },
    text: {
      en: "A wonderful stay in a magnificent villa with an exceptional view. Everything you need for a perfect holiday with kids big and small — you feel right at home! A huge thank-you to our adorable Susana, who welcomed us despite the late hour, always with a smile and kind words.",
      es: "Maravillosa estancia en una magnífica villa con una vista excepcional. Todo lo necesario para unas vacaciones perfectas con niños pequeños y grandes: ¡te sientes como en casa! Un enorme agradecimiento a nuestra adorable Susana, que nos recibió a pesar de la hora tardía, siempre con una sonrisa y palabras amables.",
      de: "Ein wunderbarer Aufenthalt in einer großartigen Villa mit außergewöhnlicher Aussicht. Alles da für einen perfekten Urlaub mit kleinen und großen Kindern — man fühlt sich sofort zu Hause! Ein riesiges Dankeschön an unsere liebe Susana, die uns trotz später Stunde empfangen hat, immer mit einem Lächeln.",
    },
  },
  {
    name: "Christina",
    date: { en: "August 2025", es: "Agosto de 2025", de: "August 2025" },
    text: {
      en: "I travelled with my friends and we loved the house and especially the beautiful surroundings. A cosy, charming village with local life within walking distance. The host Susanna was sweet, easy to reach and quick to reply. Highly recommended :)",
      es: "Viajé con mis amigas y nos encantó la casa y, sobre todo, los hermosos alrededores. Un pueblo acogedor y encantador con vida local a poca distancia a pie. La anfitriona Susanna fue encantadora y rápida en responder. Muy recomendable :)",
      de: "Ich war mit meinen Freundinnen unterwegs und wir haben das Haus und vor allem die schöne Umgebung geliebt. Ein gemütliches, charmantes Dorf mit lokalem Leben in Gehweite. Die Gastgeberin Susanna war herzlich, gut erreichbar und antwortete schnell. Sehr zu empfehlen :)",
    },
  },
]
