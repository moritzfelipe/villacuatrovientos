"use client"

import { useEffect, useRef, useState } from "react"
import { useTranslations } from "next-intl"
import { LANGUAGES } from "@/lib/villa"
import { cn } from "@/lib/utils"
import { ChevronDown } from "../icons"
import { useSwitchLocale } from "./use-switch-locale"

/** "EN ⌄" button with a dropdown of the three languages. */
export function LanguageSelect({ variant }: { variant: "hero" | "bar" }) {
  const t = useTranslations("nav")
  const { locale, switchLocale } = useSwitchLocale()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const hero = variant === "hero"

  useEffect(() => {
    if (!open) return
    const onPointerDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("pointerdown", onPointerDown)
    window.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("pointerdown", onPointerDown)
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [open])

  return (
    <div ref={ref} className={cn("relative", hero && "-mr-[10px] justify-self-end")}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("language")}
        className={cn("flex h-[44px] items-center gap-[6px]", hero ? "px-[10px]" : "px-[6px]")}
      >
        {locale.toUpperCase()}
        <ChevronDown size={14} />
      </button>
      {open && (
        <div
          role="listbox"
          aria-label={t("language")}
          className={cn(
            "absolute right-0 min-w-[172px] border border-rule bg-paper py-[6px]",
            hero
              ? "top-[calc(100%+6px)] text-ink shadow-[0_12px_32px_#0000001f] [text-shadow:none]"
              : "top-[calc(100%+10px)] shadow-[0_12px_32px_#0000001a]",
          )}
        >
          {LANGUAGES.map((lang) => {
            const selected = lang.code === locale
            return (
              <button
                key={lang.code}
                type="button"
                role="option"
                aria-selected={selected}
                lang={lang.code}
                onClick={() => {
                  setOpen(false)
                  switchLocale(lang.code)
                }}
                className="flex min-h-[44px] w-full items-center justify-between gap-4 px-4 text-left font-sans text-[13px] leading-[1.5] hover:bg-mist"
              >
                <span>{lang.name}</span>
                <span className="text-[11px] text-muted">{selected ? "✓" : ""}</span>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
