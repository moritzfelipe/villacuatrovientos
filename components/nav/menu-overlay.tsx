"use client"

import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { Link, usePathname } from "@/i18n/navigation"
import { AIRBNB_URL, LANGUAGES, PAGES, SHORT_NAME, editorial, pageFromPathname, type PageKey } from "@/lib/villa"
import { cn } from "@/lib/utils"
import { CloseIcon } from "../icons"
import { TextLink } from "../text-link"
import { useSwitchLocale } from "./use-switch-locale"

export function MenuOverlay({ onClose }: { onClose: () => void }) {
  const t = useTranslations("nav")
  const common = useTranslations("common")
  const { locale, switchLocale } = useSwitchLocale()
  const current = pageFromPathname(usePathname())
  const [hovered, setHovered] = useState<PageKey | null>(null)
  const shown = hovered ?? current
  const closeRef = useRef<HTMLButtonElement>(null)

  // Lock page scroll, move focus into the dialog, close on Escape, restore focus on close.
  useEffect(() => {
    const root = document.documentElement
    const previousFocus = document.activeElement as HTMLElement | null
    root.style.overflow = "hidden"
    closeRef.current?.focus({ preventScroll: true })

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKeyDown)
    return () => {
      root.style.overflow = ""
      window.removeEventListener("keydown", onKeyDown)
      if (previousFocus?.isConnected) previousFocus.focus({ preventScroll: true })
    }
  }, [onClose])

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t("menu")}
      className="fixed inset-0 z-[100] flex flex-col overflow-y-auto bg-paper text-ink"
    >
      <div className="ui grid h-[var(--nav-h)] flex-none grid-cols-[1fr_auto_1fr] items-center border-b border-rule px-[clamp(16px,3vw,32px)]">
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label={t("closeMenu")}
          className="-ml-[10px] flex h-[44px] items-center gap-[10px] justify-self-start px-[10px]"
        >
          <CloseIcon size={20} />
          <span className="hidden md:inline">{t("close")}</span>
        </button>
        <Link
          href="/"
          onClick={onClose}
          className="whitespace-nowrap font-serif text-[17px] leading-[1.3] tracking-[-0.04em]"
        >
          {SHORT_NAME}
        </Link>
        <div role="group" aria-label={t("language")} className="-mr-2 flex justify-self-end">
          {LANGUAGES.map((lang) => {
            const selected = lang.code === locale
            return (
              <button
                key={lang.code}
                type="button"
                aria-pressed={selected}
                aria-label={lang.name}
                onClick={() => switchLocale(lang.code)}
                className={cn(
                  "grid h-[44px] min-w-[40px] place-items-center px-2 hover:text-ink",
                  selected ? "text-ink" : "text-muted",
                )}
              >
                <span className={cn("border-b py-[2px]", selected ? "border-ink" : "border-transparent")}>
                  {lang.code.toUpperCase()}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[1480px] flex-[1_0_auto] items-center gap-[6vw] px-[var(--gutter)] py-[clamp(28px,5vw,72px)]">
        <nav aria-label={t("pagesLabel")} className="min-w-0 flex-[1_1_0] border-b border-rule">
          {PAGES.map((page, i) => {
            const isCurrent = page.key === current
            return (
              <Link
                key={page.key}
                href={page.href}
                aria-current={isCurrent ? "page" : undefined}
                onMouseEnter={() => setHovered(page.key)}
                onFocus={() => setHovered(page.key)}
                onClick={onClose}
                className="hover-shift grid grid-cols-[clamp(36px,4vw,56px)_minmax(0,1fr)] items-baseline border-t border-rule py-[clamp(14px,1.8vw,24px)]"
              >
                <span className="ui tabular-nums text-muted">{String(i + 1).padStart(2, "0")}</span>
                <span
                  className={cn(
                    "font-serif text-[length:clamp(32px,4.6vw,64px)] leading-[1.1] tracking-[-0.045em]",
                    isCurrent && "italic",
                  )}
                >
                  {t(page.key)}
                </span>
              </Link>
            )
          })}
        </nav>
        <figure className="hidden flex-[0_1_34%] md:block">
          {/* All previews are mounted so hovering swaps instantly. */}
          <div className="relative aspect-[.82] w-full bg-mist">
            {PAGES.map((page) => (
              <Image
                key={page.key}
                src={editorial(page.photo)}
                alt={page.key === shown ? t(`menuImages.${page.key}`) : ""}
                fill
                sizes="34vw"
                className={cn("object-cover object-left-top", page.key !== shown && "invisible")}
              />
            ))}
          </div>
          <figcaption className="caption">{t(`menuImages.${shown}`)}</figcaption>
        </figure>
      </div>

      <div className="ui flex flex-none flex-wrap items-center justify-between gap-x-10 gap-y-4 border-t border-rule px-[var(--gutter)] pb-6 pt-5">
        <TextLink href={AIRBNB_URL} external>
          {t("availability")}
        </TextLink>
        <p className="text-muted">{common("address")}</p>
      </div>
    </div>,
    document.body,
  )
}
