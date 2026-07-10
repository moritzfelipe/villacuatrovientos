"use client"

import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { AIRBNB_URL } from "@/lib/villa"
import { LangSwitcher } from "./lang-switcher"

const NAV = [
  { key: "house", href: "#house" },
  { key: "gallery", href: "#gallery" },
  { key: "area", href: "#area" },
  { key: "reviews", href: "#reviews" },
  { key: "info", href: "#info" },
] as const

export function Header() {
  const t = useTranslations("nav")
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const solid = scrolled || open

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          solid ? "border-b border-ink/10 bg-paper/90 text-ink backdrop-blur" : "text-paper",
        )}
      >
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="font-serif text-xl font-medium tracking-tight">
          Villa Cuatro Vientos
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm font-medium opacity-80 transition-opacity hover:opacity-100"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <LangSwitcher />
          <a
            href={AIRBNB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "rounded-full px-5 py-2 text-sm font-semibold transition-colors",
              solid
                ? "bg-terra text-paper hover:bg-terra-deep"
                : "bg-paper/15 text-paper backdrop-blur hover:bg-paper/25",
            )}
          >
            {t("book")}
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-paper text-ink lg:hidden">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6">
            <span className="font-serif text-xl font-medium tracking-tight">Villa Cuatro Vientos</span>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-1 flex-col px-6 pb-10 pt-2">
            <nav className="flex flex-col gap-1">
              {NAV.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-ink/10 py-4 font-serif text-2xl font-medium"
                >
                  {t(item.key)}
                </a>
              ))}
            </nav>
            <div className="mt-8 flex items-center justify-between">
              <LangSwitcher />
              <a
                href={AIRBNB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-terra px-6 py-3 text-sm font-semibold text-paper"
              >
                {t("book")}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
