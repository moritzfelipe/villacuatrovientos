import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { AIRBNB_URL, PAGES, SITE_NAME } from "@/lib/villa"
import { TextLink } from "./text-link"

export function Footer() {
  const t = useTranslations("common")
  const nav = useTranslations("nav")

  return (
    <footer className="ui border-t border-rule px-[var(--gutter)] pb-[26px] pt-[50px]">
      <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-5">
        <div className="font-serif text-[25px] tracking-[-0.04em]">{SITE_NAME}</div>
        <TextLink href={AIRBNB_URL} external>
          {t("checkAvailability")}
        </TextLink>
      </div>
      <div className="mt-[38px] flex flex-wrap items-baseline justify-between gap-x-10 gap-y-[14px] border-t border-rule pt-5">
        <nav aria-label={nav("pagesLabel")} className="flex flex-wrap gap-x-[22px] gap-y-3">
          {PAGES.map((page) => (
            <Link key={page.key} href={page.href}>
              {nav(page.key)}
            </Link>
          ))}
        </nav>
        <p className="text-muted">
          {t("address")}{" "}
          <span className="px-[6px] text-faint" aria-hidden="true">
            ·
          </span>{" "}
          {t("registration")}
        </p>
      </div>
    </footer>
  )
}
