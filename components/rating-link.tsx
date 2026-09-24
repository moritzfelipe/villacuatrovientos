import { useFormatter, useTranslations } from "next-intl"
import { AIRBNB_REVIEWS_URL, RATING, REVIEW_COUNT } from "@/lib/villa"
import { ArrowRight, Star } from "./icons"

/** "★ 4.81 / 5 · 36 reviews on Airbnb", linking to the listing's reviews. */
export function RatingLink({ withArrow = false }: { withArrow?: boolean }) {
  const t = useTranslations("common")
  const format = useFormatter()

  return (
    <a
      href={AIRBNB_REVIEWS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex flex-wrap items-center justify-center gap-x-[11px] gap-y-[5px] font-sans text-[12px] leading-[1.6]"
    >
      <Star size={15} />
      <strong className="font-medium">
        {format.number(RATING, { minimumFractionDigits: 2 })}{" "}
        <span className="font-normal text-muted">{t("outOf")}</span>
      </strong>
      <span className="text-faint" aria-hidden="true">
        ·
      </span>
      <span>{t("reviewsOnAirbnb", { count: REVIEW_COUNT })}</span>
      {withArrow && <ArrowRight size={15} />}
    </a>
  )
}
