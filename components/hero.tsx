import { useTranslations } from "next-intl"
import { ChevronDown, Star } from "lucide-react"
import { AIRBNB_URL, RATING, REVIEW_COUNT } from "@/lib/villa"

export function Hero() {
  const t = useTranslations("hero")

  return (
    <section id="top" className="relative flex h-svh min-h-[560px] items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/gallery/35-f5ebb5fa.jpg"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/background-video/background_desktop.mp4" type="video/mp4" media="(min-width: 768px)" />
        <source src="/background-video/background_mobile.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/25 to-ink/60" />

      <div className="relative z-10 max-w-3xl px-6 text-center text-paper">
        <p className="mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-paper/85">{t("location")}</p>
        <h1 className="display text-5xl sm:text-6xl md:text-7xl">Villa Cuatro Vientos</h1>
        <p className="mx-auto mt-6 max-w-xl font-serif text-xl italic leading-snug text-paper/90 sm:text-2xl">
          {t("tagline")}
        </p>

        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-paper/90">
          <Star className="h-4 w-4 fill-current" />
          <span className="font-semibold">{RATING}</span>
          <span aria-hidden>·</span>
          <span>{t("reviewsOnAirbnb", { count: REVIEW_COUNT })}</span>
          <span aria-hidden className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">{t("guestFavourite")}</span>
        </div>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={AIRBNB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full bg-terra px-8 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-terra-deep sm:w-auto"
          >
            {t("book")}
          </a>
          <a
            href="#house"
            className="w-full rounded-full border border-paper/50 px-8 py-3.5 text-sm font-semibold text-paper backdrop-blur transition-colors hover:bg-paper/15 sm:w-auto"
          >
            {t("discover")}
          </a>
        </div>
      </div>

      <a
        href="#house"
        aria-label={t("scroll")}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-paper/80 transition-colors hover:text-paper"
      >
        <ChevronDown className="h-7 w-7 animate-bounce" />
      </a>
    </section>
  )
}
