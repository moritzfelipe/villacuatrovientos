"use client"

import { useEffect, useState } from "react"
import { useLocale, useTranslations } from "next-intl"
import type { Locale } from "@/i18n/routing"
import { REVIEWS } from "@/lib/villa"
import { cn } from "@/lib/utils"
import { ArrowLeft, ArrowRight, Pause, Play } from "../icons"

/** Reviews longer than this use the smaller text size. */
const LONG_REVIEW = 260

/** Show each review for 40ms per character, between 9 and 20 seconds. */
const dwell = (text: string) => Math.max(9000, Math.min(20000, text.length * 40))

/**
 * One review at a time, cross-fading. All reviews share one grid cell so the height never jumps.
 * Rotation pauses on hover, with the pause button, while the tab is hidden and for reduced motion.
 */
export function ReviewCarousel() {
  const t = useTranslations("home.reviews")
  const locale = useLocale() as Locale
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [tabHidden, setTabHidden] = useState(false)
  const count = REVIEWS.length

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPaused(true)
    const onVisibility = () => setTabHidden(document.hidden)
    onVisibility()
    document.addEventListener("visibilitychange", onVisibility)
    return () => document.removeEventListener("visibilitychange", onVisibility)
  }, [])

  const current = REVIEWS[index].text[locale]
  useEffect(() => {
    if (paused || hovered || tabHidden) return
    const timer = setTimeout(() => setIndex((i) => (i + 1) % count), dwell(current))
    return () => clearTimeout(timer)
  }, [index, current, paused, hovered, tabHidden, count])

  const go = (delta: number) => setIndex((i) => (i + delta + count) % count)

  const togglePause = () => {
    setPaused((p) => !p)
    setHovered(false)
  }

  const buttonClass = "grid h-[40px] w-[40px] place-items-center p-[10px] opacity-75 hover:opacity-100"

  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="mx-auto max-w-[960px]">
      <div className="mx-auto mt-[29px] grid max-w-[880px]">
        {REVIEWS.map((review, i) => {
          const text = review.text[locale]
          const active = i === index
          const long = text.length > LONG_REVIEW
          return (
            <article
              key={review.name}
              aria-hidden={!active}
              className={cn(
                "col-start-1 row-start-1 flex min-h-[300px] flex-col items-center justify-center py-5 text-center transition-[opacity,visibility] duration-[650ms] ease-[ease]",
                active ? "visible opacity-100" : "invisible opacity-0",
              )}
            >
              <p
                className={cn(
                  "leading-[1.5] tracking-[-0.025em] text-pretty",
                  long
                    ? "max-w-[62ch] text-[length:clamp(21px,2.1vw,26px)]"
                    : "max-w-[46ch] text-[length:clamp(26px,2.8vw,35px)]",
                )}
              >
                {text}
              </p>
              <p className="ui mt-[23px]">
                {review.name}{" "}
                <span className="px-[5px] text-muted" aria-hidden="true">
                  ·
                </span>{" "}
                {review.date[locale]}
              </p>
              <p className="mt-[6px] font-sans text-[10px] leading-[1.5] text-muted">{t("excerpt")}</p>
            </article>
          )
        })}
      </div>

      <div className="mt-[13px] flex items-center justify-center gap-[13px]">
        <button type="button" onClick={() => go(-1)} aria-label={t("prev")} className={buttonClass}>
          <ArrowLeft size={20} />
        </button>
        <button type="button" onClick={togglePause} aria-label={paused ? t("play") : t("pause")} className={buttonClass}>
          {paused ? <Play size={14} /> : <Pause size={14} />}
        </button>
        <button type="button" onClick={() => go(1)} aria-label={t("next")} className={buttonClass}>
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  )
}
