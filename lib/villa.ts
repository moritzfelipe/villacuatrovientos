import type { Locale } from "@/i18n/routing"

export const SITE_NAME = "Villa Cuatro Vientos"
export const SHORT_NAME = "Cuatro Vientos"

export const AIRBNB_URL = "https://www.airbnb.com/rooms/631518594031529862"
export const AIRBNB_REVIEWS_URL = `${AIRBNB_URL}/reviews`

// Airbnb rating snapshot (checked 20 September 2026).
export const RATING = 4.81
export const REVIEW_COUNT = 36

export const LANGUAGES: { code: Locale; name: string }[] = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "de", name: "Deutsch" },
]

/** Path of an editorial photograph in `public/editorial` (1536×1024). */
export const editorial = (id: string) => `/editorial/${id}-editorial.jpg`

export const OG_IMAGE = { url: editorial("37-08899839"), width: 1536, height: 1024 }

export const HERO_VIDEO = "/video/hero.mp4"
export const HERO_POSTER = "/video/hero-poster.jpg"

export type PageKey = "home" | "house" | "comares" | "stay"

/** Site pages in menu order, with the preview photo shown in the menu overlay. */
export const PAGES: { key: PageKey; href: string; photo: string }[] = [
  { key: "home", href: "/", photo: "33-a230e802" },
  { key: "house", href: "/house", photo: "01-5a068d1a" },
  { key: "comares", href: "/comares", photo: "44-6a85ecc4" },
  { key: "stay", href: "/stay", photo: "37-08899839" },
]

export function pageFromPathname(pathname: string): PageKey {
  const page = PAGES.find((p) => p.href !== "/" && (pathname === p.href || pathname.startsWith(`${p.href}/`)))
  return page?.key ?? "home"
}

/** A photograph with a caption key (resolved in the page's messages) and its focal point. */
export interface EditorialPhoto {
  photo: string
  caption: string
  pos: string
}

export const GALLERY: EditorialPhoto[] = [
  { photo: "34-88efef95", caption: "terrace", pos: "50% 55%" },
  { photo: "07-d7e62b5f", caption: "kitchen", pos: "50% 50%" },
  { photo: "28-f7ff94ad", caption: "hills", pos: "50% 55%" },
  { photo: "11-168108cd", caption: "bedroom", pos: "50% 50%" },
  { photo: "32-e913b8af", caption: "patio", pos: "50% 55%" },
  { photo: "37-08899839", caption: "pool", pos: "50% 60%" },
]

const mapsSearch = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`
const routeTo = (destination: string) =>
  `https://www.google.com/maps/dir/?api=1&origin=Comares%2C%20Spain&destination=${encodeURIComponent(destination)}&travelmode=driving`

export const COMARES_MAPS_URL = mapsSearch("Comares, Málaga, Spain")

export const mapEmbedUrl = (locale: Locale) =>
  `https://www.google.com/maps?q=Comares,+M%C3%A1laga,+Spain&z=10&output=embed&hl=${locale}`

export const PLACES: { key: string; href: string }[] = [
  { key: "comares", href: COMARES_MAPS_URL },
  { key: "torre", href: routeTo("Torre del Mar, Spain") },
  { key: "nerja", href: routeTo("Nerja, Spain") },
  { key: "malaga", href: routeTo("Málaga, Spain") },
  { key: "airport", href: routeTo("Málaga Airport, Spain") },
]

export const FACTS = ["guests", "bedrooms", "beds", "bathrooms", "pool"] as const

export const ROOMS: { id: string; key: string; photos: EditorialPhoto[] }[] = [
  {
    id: "living",
    key: "living",
    photos: [
      { photo: "01-5a068d1a", caption: "living", pos: "55% 50%" },
      { photo: "03-25a35a54", caption: "fireplace", pos: "50% 50%" },
    ],
  },
  { id: "kitchen", key: "kitchen", photos: [{ photo: "07-d7e62b5f", caption: "kitchen", pos: "50% 50%" }] },
  {
    id: "bedroom-one",
    key: "bedroomOne",
    photos: [
      { photo: "11-168108cd", caption: "bedroomOne", pos: "50% 50%" },
      { photo: "13-ce3296be", caption: "desk", pos: "50% 50%" },
    ],
  },
  { id: "bedroom-two", key: "bedroomTwo", photos: [{ photo: "15-dc62fa9d", caption: "bedroomTwo", pos: "40% 50%" }] },
  {
    id: "bathrooms",
    key: "bathrooms",
    photos: [
      { photo: "26-fe0fd75b", caption: "bathTwo", pos: "50% 50%" },
      { photo: "22-36af5b5e", caption: "bathOne", pos: "50% 50%" },
    ],
  },
  { id: "patio", key: "patio", photos: [{ photo: "32-e913b8af", caption: "patio", pos: "50% 50%" }] },
  {
    id: "outdoors",
    key: "outdoors",
    photos: [
      { photo: "37-08899839", caption: "pool", pos: "50% 60%" },
      { photo: "34-88efef95", caption: "arches", pos: "50% 55%" },
    ],
  },
]

export const COMARES_SECTIONS: EditorialPhoto[] = [
  { photo: "44-6a85ecc4", caption: "village", pos: "50% 50%" },
  { photo: "28-f7ff94ad", caption: "hills", pos: "50% 50%" },
  { photo: "46-f8c4be0f", caption: "sea", pos: "50% 50%" },
  { photo: "52-5b474028", caption: "further", pos: "50% 50%" },
]

export const STAY_ITEMS = ["arrival", "travel", "comfort", "children", "pets", "booking"] as const

export type Localized = Record<Locale, string>

export interface Review {
  name: string
  date: Localized
  /** An edited excerpt of the guest's own words. */
  text: Localized
}

// Selected first-person Airbnb reviews (verified 20 September 2026), in display order.
export const REVIEWS: Review[] = [
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
