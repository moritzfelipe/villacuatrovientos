import { useTranslations } from "next-intl"
import { FACTS } from "@/lib/villa"

/** Guests, bedrooms, beds, bathrooms and pool, between two hairlines. */
export function Facts() {
  const t = useTranslations("facts")

  return (
    <dl className="ui mt-[clamp(40px,4.5vw,64px)] flex flex-wrap gap-y-[10px] border-y border-rule">
      {FACTS.map((key) => (
        <div key={key} className="flex flex-[1_1_140px] flex-col gap-1 pb-[15px] pt-4">
          <dt className="text-muted">{t(`${key}.label`)}</dt>
          <dd className="font-serif text-[19px] leading-[1.3] tracking-[-0.02em]">{t(`${key}.value`)}</dd>
        </div>
      ))}
    </dl>
  )
}
