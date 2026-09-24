import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { Facts } from "@/components/facts"
import { BarNav } from "@/components/nav/site-nav"
import { PageIntro } from "@/components/page-intro"
import { Figure } from "@/components/photo"
import { RatingLink } from "@/components/rating-link"
import { TextLink } from "@/components/text-link"
import { pageMetadata } from "@/lib/metadata"
import { AIRBNB_URL, STAY_ITEMS } from "@/lib/villa"

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return pageMetadata(locale, "stay")
}

export default async function StayPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("stay")
  const common = await getTranslations("common")

  return (
    <>
      <BarNav />

      <main>
        <PageIntro label={t("label")} title={t("title")} text={t("intro")}>
          <Facts />
        </PageIntro>

        <section className="wrap flex flex-wrap items-start gap-x-[clamp(40px,6vw,100px)] gap-y-12 pb-[clamp(64px,7vw,108px)] pt-[clamp(24px,3vw,48px)]">
          {/* Sticky beside the details only from 1080px. */}
          <Figure
            photo="32-e913b8af"
            caption={t("imageCaption")}
            sizes="(max-width: 899px) 100vw, 560px"
            priority
            className="aspect-[.9]"
            figureClassName="min-w-0 max-w-[560px] flex-[1_1_360px] lg:sticky lg:top-[112px]"
          />
          <div className="min-w-0 flex-[1.4_1_420px] border-b border-rule">
            {STAY_ITEMS.map((key) => (
              <div
                key={key}
                className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-x-10 gap-y-[10px] border-t border-rule pb-7 pt-[26px]"
              >
                <h2 className="text-[length:clamp(21px,1.9vw,25px)] leading-[1.3] tracking-[-0.025em]">
                  {t(`items.${key}.title`)}
                </h2>
                <p className="text-[16px] text-pretty">{t(`items.${key}.text`)}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-rule text-center">
          <div className="mx-auto max-w-[720px] px-[var(--gutter)] py-[clamp(64px,7vw,112px)]">
            <RatingLink />
            <h2 className="mt-6 text-[length:clamp(34px,4.4vw,60px)] leading-[1.1] tracking-[-0.045em]">
              {t("book.title")}
            </h2>
            <p className="mx-auto mt-[22px] max-w-[44ch] text-pretty">{t("book.text")}</p>
            <TextLink href={AIRBNB_URL} external className="mt-[30px]">
              {common("checkAvailabilityAirbnb")}
            </TextLink>
            <p className="mt-[18px] font-sans text-[11px] leading-[1.6] text-muted">{t("book.note")}</p>
          </div>
        </section>
      </main>
    </>
  )
}
