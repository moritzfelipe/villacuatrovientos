import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { routing } from "@/i18n/routing"
import { OG_IMAGE, PAGES, SITE_NAME, type PageKey } from "@/lib/villa"

/** Translated title, description, OpenGraph and language alternates for one page. */
export async function pageMetadata(locale: string, page: PageKey): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: `meta.${page}` })
  const path = PAGES.find((p) => p.key === page)?.href ?? "/"
  const url = (l: string) => (path === "/" ? `/${l}` : `/${l}${path}`)
  const title = t("title")
  const description = t("description")

  return {
    title,
    description,
    alternates: {
      canonical: url(locale),
      languages: Object.fromEntries(routing.locales.map((l) => [l, url(l)])),
    },
    openGraph: {
      title,
      description,
      type: "website",
      siteName: SITE_NAME,
      locale,
      url: url(locale),
      images: [OG_IMAGE],
    },
  }
}
