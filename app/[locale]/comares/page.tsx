import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { BarNav } from "@/components/nav/site-nav"
import { NextPage } from "@/components/next-page"
import { PageIntro } from "@/components/page-intro"
import { Figure } from "@/components/photo"
import { PlacesList } from "@/components/places-list"
import { TextLink } from "@/components/text-link"
import { pageMetadata } from "@/lib/metadata"
import { cn } from "@/lib/utils"
import { COMARES_MAPS_URL, COMARES_SECTIONS } from "@/lib/villa"

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return pageMetadata(locale, "comares")
}

export default async function ComaresPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("comares")
  const places = await getTranslations("places")

  return (
    <>
      <BarNav />

      <main>
        <PageIntro label={t("label")} title={t("title")} text={t("intro")} />

        <Figure
          photo="41-cf95e322"
          caption={t("leadCaption")}
          sizes="(max-width: 1480px) 100vw, 1480px"
          priority
          className="aspect-[2.1] max-sm:aspect-[1.1]"
          figureClassName="wrap"
        />

        <div className="wrap pb-[clamp(64px,7vw,108px)]">
          {COMARES_SECTIONS.map((section, i) => (
            <section
              key={section.caption}
              className={cn(
                "flex flex-wrap items-center gap-x-[clamp(40px,6vw,100px)] gap-y-8 pt-[clamp(64px,7vw,112px)]",
                i % 2 ? "flex-row-reverse" : "flex-row",
              )}
            >
              <Figure
                photo={section.photo}
                pos={section.pos}
                caption={t(`sections.${section.caption}.caption`)}
                sizes="(max-width: 899px) 100vw, 55vw"
                className="aspect-[1.3]"
                figureClassName="min-w-0 flex-[1.5_1_440px]"
              />
              <div className="min-w-0 max-w-[46ch] flex-[1_1_320px]">
                <p className="ui tabular-nums text-muted">{String(i + 1).padStart(2, "0")}</p>
                <h2 className="type-room mt-[10px]">{t(`sections.${section.caption}.title`)}</h2>
                <p className="mt-[22px] text-pretty">{t(`sections.${section.caption}.text`)}</p>
              </div>
            </section>
          ))}
        </div>

        <section className="border-t border-rule">
          <div className="wrap grid grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] items-start gap-x-[8vw] gap-y-10 py-[clamp(56px,6vw,96px)]">
            <div>
              <h2 className="type-room">{t("around.title")}</h2>
              <p className="mt-[22px] max-w-[40ch] text-[16px]">{t("around.text")}</p>
              <p className="mt-7 max-w-[46ch] font-sans text-[11px] leading-[1.65] text-muted">{places("note")}</p>
              <TextLink href={COMARES_MAPS_URL} external compact className="mt-[18px]">
                {t("around.mapsLink")}
              </TextLink>
            </div>
            <PlacesList variant="comares" />
          </div>
        </section>

        <NextPage title={t("closing")} next="stay" />
      </main>
    </>
  )
}
