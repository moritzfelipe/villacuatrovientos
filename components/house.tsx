import Image from "next/image"
import { useTranslations } from "next-intl"
import { cn } from "@/lib/utils"
import { photoBySrc } from "@/lib/villa"

const ROOMS = [
  { key: "living", photo: "01-5a068d1a" },
  { key: "kitchen", photo: "07-d7e62b5f" },
  { key: "sleep", photo: "18-78c4d5ce" },
  { key: "patio", photo: "32-e913b8af" },
  { key: "pool", photo: "37-08899839" },
] as const

export function House() {
  const t = useTranslations("house")

  return (
    <section className="bg-paper-deep px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-content">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="eyebrow mb-4">{t("eyebrow")}</p>
          <h2 className="display text-4xl sm:text-5xl">{t("heading")}</h2>
        </div>

        <div className="space-y-16 sm:space-y-20">
          {ROOMS.map(({ key, photo }, i) => {
            const p = photoBySrc(photo)
            const flipped = i % 2 === 1
            return (
              <div key={key} className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
                <div className={cn("overflow-hidden rounded-lg lg:col-span-7", flipped && "lg:order-2")}>
                  <Image
                    src={p.src}
                    alt={p.caption.en}
                    width={p.w}
                    height={p.h}
                    className="aspect-[3/2] w-full object-cover"
                    sizes="(min-width: 1024px) 42rem, 100vw"
                  />
                </div>
                <div className={cn("lg:col-span-5", flipped && "lg:order-1 lg:text-right")}>
                  <span className="font-serif text-5xl italic text-terra/40">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="display mt-2 text-3xl">{t(`${key}.title`)}</h3>
                  <p className="prose-relaxed mt-4">{t(`${key}.text`)}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
