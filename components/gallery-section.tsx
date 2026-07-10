import { useTranslations } from "next-intl"
import { PHOTOS, type Localized } from "@/lib/villa"
import { Gallery, type GalleryPhoto } from "./gallery"

export function GallerySection({ locale }: { locale: string }) {
  const t = useTranslations("gallery")
  const lang = (["en", "es", "de"].includes(locale) ? locale : "en") as keyof Localized

  const photos: GalleryPhoto[] = PHOTOS.map((p) => ({
    src: p.src,
    w: p.w,
    h: p.h,
    category: p.category,
    caption: p.caption[lang],
  }))

  const labels = {
    filters: {
      all: t("filters.all"),
      inside: t("filters.inside"),
      sleep: t("filters.sleep"),
      outdoors: t("filters.outdoors"),
      surroundings: t("filters.surroundings"),
    },
    close: t("close"),
    prev: t("prev"),
    next: t("next"),
    openPhoto: t("openPhoto"),
  }

  return (
    <section id="gallery" className="scroll-mt-16 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-content">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="eyebrow mb-4">{t("eyebrow")}</p>
          <h2 className="display text-4xl sm:text-5xl">{t("heading")}</h2>
        </div>
        <Gallery photos={photos} labels={labels} />
      </div>
    </section>
  )
}
