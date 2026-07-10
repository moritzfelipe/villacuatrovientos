import Image from "next/image"
import { useTranslations } from "next-intl"
import { Bath, BedDouble, Users, Waves, DoorOpen } from "lucide-react"
import { photoBySrc } from "@/lib/villa"

const FACTS = [
  { key: "guests", Icon: Users },
  { key: "bedrooms", Icon: DoorOpen },
  { key: "beds", Icon: BedDouble },
  { key: "baths", Icon: Bath },
  { key: "pool", Icon: Waves },
] as const

export function Intro() {
  const t = useTranslations("intro")
  const patio = photoBySrc("31-48ad1669")
  const oak = photoBySrc("39-36c1b099")

  return (
    <section id="house" className="scroll-mt-16 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-content">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow mb-4">{t("eyebrow")}</p>
            <h2 className="display text-4xl sm:text-5xl">{t("heading")}</h2>
            <p className="prose-relaxed mt-6">{t("p1")}</p>
            <p className="prose-relaxed mt-4">{t("p2")}</p>

            <figure className="mt-8 border-l-2 border-terra/60 pl-5">
              <blockquote className="font-serif text-lg italic leading-relaxed text-ink">{t("hostText")}</blockquote>
              <figcaption className="eyebrow mt-3 text-ink-faint">{t("hostTitle")}</figcaption>
            </figure>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="overflow-hidden rounded-arch">
              <Image
                src={patio.src}
                alt={patio.caption.en}
                width={patio.w}
                height={patio.h}
                className="aspect-[3/4] w-full object-cover"
                sizes="(min-width: 1024px) 40rem, 28rem"
              />
            </div>
            <div className="absolute -bottom-8 -left-6 hidden w-44 overflow-hidden rounded-lg border-4 border-paper shadow-lg sm:block lg:-left-12 lg:w-56">
              <Image
                src={oak.src}
                alt={oak.caption.en}
                width={oak.w}
                height={oak.h}
                className="aspect-square w-full object-cover"
                sizes="14rem"
              />
            </div>
          </div>
        </div>

        <ul className="mt-20 grid grid-cols-2 gap-x-4 gap-y-8 border-y border-ink/10 py-8 sm:grid-cols-5">
          {FACTS.map(({ key, Icon }) => (
            <li key={key} className="flex flex-col items-center gap-2 text-center">
              <Icon className="h-5 w-5 text-azul" strokeWidth={1.6} />
              <span className="text-sm font-medium text-ink-soft">{t(`facts.${key}`)}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
