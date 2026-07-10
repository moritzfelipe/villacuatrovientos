import Image from "next/image"
import { useTranslations } from "next-intl"
import { Footprints } from "lucide-react"
import { photoBySrc } from "@/lib/villa"

const DAYTRIPS = [
  { key: "beach", photo: "46-f8c4be0f" },
  { key: "malaga", photo: "47-63c6831f" },
  { key: "granada", photo: "52-5b474028" },
  { key: "cordoba", photo: "53-33e91666" },
  { key: "ronda", photo: "55-b6109d39" },
  { key: "caminito", photo: "57-cd1bd746" },
] as const

export function Area() {
  const t = useTranslations("area")
  const comares = photoBySrc("41-cf95e322")
  const streets = photoBySrc("44-6a85ecc4")

  return (
    <section id="area" className="scroll-mt-16 bg-paper-deep px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-content">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 grid grid-cols-5 gap-4 lg:order-1">
            <div className="col-span-3 overflow-hidden rounded-lg">
              <Image
                src={comares.src}
                alt={comares.caption.en}
                width={comares.w}
                height={comares.h}
                className="aspect-[3/4] w-full object-cover"
                sizes="(min-width: 1024px) 24rem, 60vw"
              />
            </div>
            <div className="col-span-2 self-end overflow-hidden rounded-arch">
              <Image
                src={streets.src}
                alt={streets.caption.en}
                width={streets.w}
                height={streets.h}
                className="aspect-[2/3] w-full object-cover"
                sizes="(min-width: 1024px) 16rem, 40vw"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="eyebrow mb-4">{t("eyebrow")}</p>
            <h2 className="display text-4xl sm:text-5xl">{t("heading")}</h2>
            <p className="prose-relaxed mt-6">{t("p1")}</p>
            <p className="prose-relaxed mt-4">{t("p2")}</p>
            <p className="mt-6 flex items-start gap-3 text-ink">
              <Footprints className="mt-1 h-5 w-5 shrink-0 text-terra" strokeWidth={1.6} />
              <span className="prose-relaxed">{t("walks")}</span>
            </p>
          </div>
        </div>

        <h3 className="display mb-10 mt-24 text-center text-3xl sm:text-4xl">{t("daytripsHeading")}</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DAYTRIPS.map(({ key, photo }) => {
            const p = photoBySrc(photo)
            return (
              <div key={key} className="group overflow-hidden rounded-lg bg-paper shadow-sm">
                <div className="overflow-hidden">
                  <Image
                    src={p.src}
                    alt={p.caption.en}
                    width={p.w}
                    height={p.h}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes="(min-width: 1024px) 22rem, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-serif text-xl font-medium">{t(`daytrips.${key}.title`)}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{t(`daytrips.${key}.text`)}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16">
          <h3 className="eyebrow mb-4 text-center">{t("mapTitle")}</h3>
          <div className="overflow-hidden rounded-lg">
            <iframe
              title={t("mapTitle")}
              className="h-[380px] w-full border-0 grayscale-[35%]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12790.160041681504!2d-4.2572!3d36.8505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7259b36a9a99b3%3A0x2c2d99c5a9b2baef!2sComares%2C%20M%C3%A1laga%2C%20Spain!5e0!3m2!1sen!2sus!4v1621234567890!5m2!1sen!2sus"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
