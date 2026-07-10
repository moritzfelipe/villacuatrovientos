import Image from "next/image"
import { useTranslations } from "next-intl"
import { ArrowUpRight } from "lucide-react"
import { AIRBNB_URL, photoBySrc } from "@/lib/villa"

export function BookCta() {
  const t = useTranslations("book")
  const bg = photoBySrc("36-bb36f063")

  return (
    <section id="book" className="relative scroll-mt-16 overflow-hidden px-4 py-28 sm:px-6 sm:py-36 lg:px-8">
      <Image
        src={bg.src}
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-ink/60" />

      <div className="relative z-10 mx-auto max-w-2xl text-center text-paper">
        <p className="eyebrow mb-4 text-paper/80">{t("eyebrow")}</p>
        <h2 className="display text-4xl sm:text-5xl">{t("heading")}</h2>
        <p className="mt-6 leading-relaxed text-paper/90">{t("text")}</p>

        <a
          href={AIRBNB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-block rounded-full bg-terra px-9 py-4 text-sm font-semibold text-paper transition-colors hover:bg-terra-deep"
        >
          {t("airbnb")}
        </a>
        <p className="mx-auto mt-5 max-w-md text-sm text-paper/75">{t("airbnbNote")}</p>

        <p className="mt-10 text-sm text-paper/85">
          {t("questions")}{" "}
          <a
            href={AIRBNB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold underline underline-offset-4 hover:text-paper"
          >
            {t("message")}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </p>
      </div>
    </section>
  )
}
