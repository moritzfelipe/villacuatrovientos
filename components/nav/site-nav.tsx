"use client"

import { useTranslations } from "next-intl"
import { Link, usePathname } from "@/i18n/navigation"
import { AIRBNB_URL, PAGES, SHORT_NAME, SITE_NAME, pageFromPathname } from "@/lib/villa"
import { cn } from "@/lib/utils"
import { ArrowRight, MenuIcon } from "../icons"
import { LanguageSelect } from "./language-select"
import { useMenu } from "./menu-provider"

/** Transparent header laid over the home hero. */
export function HeroNav() {
  const t = useTranslations("nav")
  const { openMenu } = useMenu()

  return (
    <header className="ui absolute inset-x-0 top-0 z-[3] grid h-[clamp(74px,9vw,88px)] grid-cols-[1fr_auto_1fr] items-center px-[clamp(14px,3vw,32px)] text-white [text-shadow:0_1px_10px_#0005]">
      <button
        type="button"
        onClick={openMenu}
        aria-label={t("openMenu")}
        className="-ml-[10px] flex h-[44px] items-center gap-[10px] justify-self-start px-[10px]"
      >
        <MenuIcon size={20} />
        <span className="hidden md:inline">{t("menu")}</span>
      </button>
      <Link href="/" className="font-serif text-[18px] leading-[1.3] tracking-[-0.045em]">
        {SITE_NAME}
      </Link>
      <LanguageSelect variant="hero" />
    </header>
  )
}

/** Sticky light nav bar. Wide (≥ 900px): page links and language select; compact: hamburger. */
export function BarNav() {
  const t = useTranslations("nav")
  const { openMenu } = useMenu()
  const current = pageFromPathname(usePathname())

  return (
    <nav
      aria-label={t("label")}
      className="ui sticky top-0 z-20 flex h-[var(--nav-h)] items-center justify-between gap-x-[25px] gap-y-3 border-b border-rule bg-paper px-[clamp(16px,3vw,32px)] text-ink"
    >
      <div className="flex min-w-0 flex-[1_1_0] items-center gap-[2px]">
        <button
          type="button"
          onClick={openMenu}
          aria-label={t("openMenu")}
          className="-ml-[10px] grid h-[44px] w-[44px] place-items-center p-[10px] md:hidden"
        >
          <MenuIcon size={20} />
        </button>
        <Link href="/" className="whitespace-nowrap font-serif text-[17px] leading-[1.3] tracking-[-0.04em]">
          {SHORT_NAME}
        </Link>
      </div>

      <div className="hidden items-center gap-8 md:flex">
        {PAGES.filter((page) => page.key !== "home").map((page) => {
          const isCurrent = page.key === current
          return (
            <Link
              key={page.key}
              href={page.href}
              aria-current={isCurrent ? "page" : undefined}
              className={cn("border-b py-2 hover:border-ink", isCurrent ? "border-ink" : "border-transparent")}
            >
              {t(page.key)}
            </Link>
          )
        })}
      </div>

      <div className="flex flex-[1_1_0] items-center justify-end gap-[18px]">
        <div className="hidden md:block">
          <LanguageSelect variant="bar" />
        </div>
        <a
          href={AIRBNB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-x-[18px] gap-y-3 whitespace-nowrap border-b border-ink py-2"
        >
          <span className="hidden md:inline">{t("availability")}</span>
          <span className="md:hidden">{t("availabilityShort")}</span>
          <ArrowRight size={15} />
        </a>
      </div>
    </nav>
  )
}
