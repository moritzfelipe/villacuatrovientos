import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { Facts } from "@/components/facts"
import { BarNav } from "@/components/nav/site-nav"
import { NextPage } from "@/components/next-page"
import { PageIntro } from "@/components/page-intro"
import { Figure } from "@/components/photo"
import { pageMetadata } from "@/lib/metadata"
import { cn } from "@/lib/utils"
import { ROOMS } from "@/lib/villa"

type Props = { params: Promise<{ locale: string }> }

const pad = (n: number) => String(n).padStart(2, "0")

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return pageMetadata(locale, "house")
}

export default async function HousePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("house")

  // Two-photo rooms alternate which side the larger photo sits on.
  let pairs = 0
  const rooms = ROOMS.map((room, i) => ({
    ...room,
    n: pad(i + 1),
    reverse: room.photos.length === 2 && pairs++ % 2 === 1,
  }))

  return (
    <>
      <BarNav />

      <main>
        <PageIntro label={t("label")} title={t("title")} text={t("intro")}>
          <Facts />
        </PageIntro>

        <Figure
          photo="33-a230e802"
          pos="45% 55%"
          caption={t("leadCaption")}
          sizes="(max-width: 1480px) 100vw, 1480px"
          priority
          className="aspect-[2.1] max-sm:aspect-[1.1]"
          figureClassName="wrap"
        />

        {/* Sits flush under the sticky site bar: its top is the bar's height, from the same variable. */}
        <div
          data-room-nav
          className="sticky top-[var(--nav-h)] z-10 mt-[clamp(56px,6vw,96px)] border-b border-rule bg-paper"
        >
          <nav
            aria-label={t("roomsLabel")}
            className="wrap ui no-scrollbar -mb-px flex gap-x-7 gap-y-1 overflow-x-auto pb-px"
          >
            {rooms.map((room) => (
              <a
                key={room.id}
                href={`#${room.id}`}
                className="-mb-px flex gap-2 whitespace-nowrap border-b border-transparent pb-[13px] pt-[14px] hover:border-ink"
              >
                <span className="tabular-nums text-muted">{room.n}</span>
                {t(`rooms.${room.key}.short`)}
              </a>
            ))}
          </nav>
        </div>

        <div className="wrap pb-[clamp(64px,7vw,108px)]">
          {rooms.map((room) => {
            const [a, b] = room.photos
            return (
              <section key={room.id} id={room.id} className="pt-[clamp(56px,6vw,96px)]">
                <div className="mb-[clamp(32px,3.5vw,52px)] flex flex-wrap items-start justify-between gap-x-[7vw] gap-y-5">
                  <div className="max-w-[560px] flex-[1_1_320px]">
                    <p className="ui tabular-nums text-muted">{room.n}</p>
                    <h2 className="type-room mt-[10px]">{t(`rooms.${room.key}.title`)}</h2>
                  </div>
                  <p className="max-w-[50ch] flex-[1_1_340px] pt-[6px] text-pretty">{t(`rooms.${room.key}.text`)}</p>
                </div>

                {b ? (
                  // Both photos share one fixed height, so their tops and captions line up.
                  <div
                    className={cn(
                      "flex flex-wrap gap-x-[clamp(16px,2vw,28px)] gap-y-10",
                      room.reverse ? "flex-row-reverse" : "flex-row",
                    )}
                  >
                    <Figure
                      photo={a.photo}
                      pos={a.pos}
                      caption={t(`captions.${a.caption}`)}
                      sizes="(max-width: 799px) 100vw, 64vw"
                      className="h-[clamp(300px,38vw,640px)]"
                      figureClassName="min-w-0 flex-[1.8_1_440px]"
                    />
                    <Figure
                      photo={b.photo}
                      pos={b.pos}
                      caption={t(`captions.${b.caption}`)}
                      sizes="(max-width: 799px) 100vw, 36vw"
                      className="h-[clamp(300px,38vw,640px)]"
                      figureClassName="min-w-0 flex-[1_1_260px]"
                    />
                  </div>
                ) : (
                  <Figure
                    photo={a.photo}
                    pos={a.pos}
                    caption={t(`captions.${a.caption}`)}
                    sizes="(max-width: 1480px) 100vw, 1480px"
                    className="aspect-[1.9] max-sm:aspect-[1.2]"
                  />
                )}
              </section>
            )
          })}
        </div>

        <NextPage title={t("closing")} next="comares" />
      </main>
    </>
  )
}
