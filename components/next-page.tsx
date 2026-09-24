import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { AIRBNB_URL, PAGES, type PageKey } from "@/lib/villa"
import { ArrowRight } from "./icons"
import { TextLink } from "./text-link"

interface NextPageProps {
  title: string
  next: PageKey
}

/** Closing band of the inner pages: a line of copy, the Airbnb link and a link to the next page. */
export function NextPage({ title, next }: NextPageProps) {
  const t = useTranslations("common")
  const nav = useTranslations("nav")
  const href = PAGES.find((p) => p.key === next)?.href ?? "/"

  return (
    <section className="border-t border-rule">
      <div className="wrap grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-end gap-x-[8vw] gap-y-10 py-[clamp(56px,6vw,88px)]">
        <div>
          <h2 className="type-room">{title}</h2>
          <TextLink href={AIRBNB_URL} external className="mt-7">
            {t("checkAvailabilityAirbnb")}
          </TextLink>
        </div>
        <Link
          href={href}
          className="hover-shift grid grid-cols-[minmax(0,1fr)_auto] items-end gap-5 border-y border-rule pb-[18px] pt-5"
        >
          <span className="flex flex-col gap-[6px]">
            <span className="ui text-muted">{t("next")}</span>
            <span className="text-[length:clamp(24px,2.4vw,32px)] leading-[1.2] tracking-[-0.03em]">{nav(next)}</span>
          </span>
          <ArrowRight size={20} className="mb-[6px]" />
        </Link>
      </div>
    </section>
  )
}
