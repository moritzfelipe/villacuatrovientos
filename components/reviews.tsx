import { useLocale, useTranslations } from "next-intl"
import { ArrowUpRight, Star } from "lucide-react"
import { AIRBNB_URL, RATING, REVIEWS, REVIEW_COUNT, type Localized } from "@/lib/villa"

export function Reviews() {
  const t = useTranslations("reviews")
  const locale = useLocale()
  const lang = (["en", "es", "de"].includes(locale) ? locale : "en") as keyof Localized

  return (
    <section id="reviews" className="scroll-mt-16 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-content">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="eyebrow mb-4">{t("eyebrow")}</p>
          <h2 className="display text-4xl sm:text-5xl">{t("heading")}</h2>

          <div className="mt-8 flex items-baseline justify-center gap-3">
            <span className="font-serif text-6xl font-medium">{RATING}</span>
            <div className="text-left">
              <div className="flex gap-0.5 text-terra">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-1 text-sm text-ink-soft">{t("ratingLabel", { count: REVIEW_COUNT })}</p>
            </div>
          </div>
          <p className="mt-4 inline-block rounded-full bg-terra-wash px-4 py-1.5 text-xs font-semibold text-terra-deep">
            {t("guestFavourite")}
          </p>
        </div>

        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>figure]:mb-6">
          {REVIEWS.map((r) => (
            <figure key={r.name + r.date.en} className="break-inside-avoid rounded-lg bg-paper-deep p-6">
              <blockquote className="font-serif text-lg italic leading-relaxed">“{r.text[lang]}”</blockquote>
              <figcaption className="mt-4 text-sm text-ink-soft">
                <span className="font-semibold text-ink">{r.name}</span> · {r.date[lang]}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={`${AIRBNB_URL}/reviews`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-azul transition-colors hover:text-azul-deep"
          >
            {t("readAll")}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
