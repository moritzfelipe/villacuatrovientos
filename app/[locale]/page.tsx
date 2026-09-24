import type { Metadata } from "next"
import { preload } from "react-dom"
import { getTranslations, setRequestLocale } from "next-intl/server"
import type { Locale } from "@/i18n/routing"
import { GallerySlideshow } from "@/components/home/gallery-slideshow"
import { HomeHero } from "@/components/home/hero"
import { ReviewCarousel } from "@/components/home/review-carousel"
import { BarNav } from "@/components/nav/site-nav"
import { Figure } from "@/components/photo"
import { PlacesList } from "@/components/places-list"
import { RatingLink } from "@/components/rating-link"
import { TextLink } from "@/components/text-link"
import { pageMetadata } from "@/lib/metadata"
import { COMARES_MAPS_URL, HERO_POSTER, mapEmbedUrl } from "@/lib/villa"

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return pageMetadata(locale, "home")
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  // The film poster is the first thing painted.
  preload(HERO_POSTER, { as: "image", fetchPriority: "high" })
  const t = await getTranslations("home")
  const places = await getTranslations("places")

  return (
    <>
      <HomeHero />
      <BarNav />

      <main>
        <section id="introduction" className="wrap pb-[clamp(64px,7vw,116px)] pt-[clamp(64px,7vw,108px)]">
          <div className="flex flex-wrap items-end justify-between gap-x-[7vw] gap-y-6">
            <h2 className="type-section max-w-[600px] flex-[1_1_380px]">{t("intro.title")}</h2>
            <div className="max-w-[52ch] flex-[1_1_360px]">
              <p className="text-pretty">{t("intro.text")}</p>
            </div>
          </div>
          <GallerySlideshow />
        </section>

        <section id="location" className="wrap pb-[clamp(58px,7vw,100px)] pt-[10px]">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-start gap-x-[6vw] gap-y-12 border-t border-rule pt-[clamp(48px,5vw,72px)]">
            <div>
              <h2 className="type-section">{t("location.title")}</h2>
              <p className="mt-6 max-w-[40ch] text-[16px]">{t("location.text")}</p>
              <PlacesList variant="home" className="mt-[clamp(32px,3.5vw,48px)]" />
              <div className="mt-5 flex flex-wrap items-start justify-between gap-x-8 gap-y-4">
                <p className="max-w-[40ch] font-sans text-[11px] leading-[1.65] text-muted">{places("note")}</p>
                <TextLink href={COMARES_MAPS_URL} external compact small>
                  {t("location.mapsLink")}
                </TextLink>
              </div>
            </div>
            {/* Sticky beside the list only when wide; in the single column it sits in place. */}
            <figure className="md:sticky md:top-[100px]">
              <div className="relative aspect-[4/5] max-h-[760px] w-full overflow-hidden border border-rule bg-mist">
                <iframe
                  title={t("location.mapTitle")}
                  src={mapEmbedUrl(locale as Locale)}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full border-0 [filter:grayscale(1)_sepia(.12)_contrast(.92)_brightness(1.03)]"
                />
              </div>
              <figcaption className="caption">{t("location.mapCaption")}</figcaption>
            </figure>
          </div>
        </section>

        <section
          id="area"
          className="wrap grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-center gap-x-[10vw] gap-y-8 pb-[clamp(64px,7vw,108px)] pt-[clamp(16px,2vw,24px)]"
        >
          <div>
            <h2 className="type-section mb-[26px]">{t("area.title")}</h2>
            <p className="max-w-[43ch]">{t("area.text")}</p>
            <TextLink href="/comares" className="mt-[25px]">
              {t("area.link")}
            </TextLink>
          </div>
          <Figure
            photo="41-cf95e322"
            caption={t("area.caption")}
            sizes="(max-width: 899px) 100vw, 50vw"
            className="aspect-[1.3]"
          />
        </section>

        <section
          id="reviews"
          aria-label={t("reviews.label")}
          className="border-t border-rule px-[var(--gutter)] pb-[60px] pt-16 text-center"
        >
          <RatingLink withArrow />
          <ReviewCarousel />
        </section>
      </main>
    </>
  )
}
