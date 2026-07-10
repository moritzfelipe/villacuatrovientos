import { useTranslations } from "next-intl"
import { Baby, Car, ClipboardCheck, Clock, PawPrint, Snowflake } from "lucide-react"

const ITEMS = [
  { key: "checkin", Icon: Clock },
  { key: "car", Icon: Car },
  { key: "registration", Icon: ClipboardCheck },
  { key: "pets", Icon: PawPrint },
  { key: "aircon", Icon: Snowflake },
  { key: "family", Icon: Baby },
] as const

export function Info() {
  const t = useTranslations("info")

  return (
    <section id="info" className="scroll-mt-16 bg-paper-deep px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-content">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="eyebrow mb-4">{t("eyebrow")}</p>
          <h2 className="display text-4xl sm:text-5xl">{t("heading")}</h2>
        </div>

        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map(({ key, Icon }) => (
            <div key={key} className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-azul-wash">
                <Icon className="h-5 w-5 text-azul" strokeWidth={1.6} />
              </div>
              <div>
                <h3 className="font-semibold">{t(`items.${key}.title`)}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{t(`items.${key}.text`)}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-14 text-center text-xs uppercase tracking-wider text-ink-faint">{t("registrationNumber")}</p>
      </div>
    </section>
  )
}
