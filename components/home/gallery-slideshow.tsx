"use client"

import { useEffect, useRef, useState, type FocusEvent, type KeyboardEvent, type TouchEvent } from "react"
import { useTranslations } from "next-intl"
import { GALLERY } from "@/lib/villa"
import { cn } from "@/lib/utils"
import { ArrowLeft, ArrowRight, Pause, Play } from "../icons"
import { Photo } from "../photo"
import { TextLink } from "../text-link"

const pad = (n: number) => String(n).padStart(2, "0")

/** How long each photo stays before the next one fades in. */
const DWELL = 4500
/** Minimum horizontal travel of a swipe, in px. */
const SWIPE = 40

/**
 * One large house photo at a time, cross-fading, with its caption, a counter and prev / pause / next.
 * Autoplay runs only while at least half the gallery is in view, and pauses on hover, keyboard focus,
 * a hidden tab, the pause button and reduced motion.
 */
export function GallerySlideshow() {
  const t = useTranslations("home.intro")
  const rootRef = useRef<HTMLElement>(null)
  const touchStart = useRef<{ x: number; y: number } | null>(null)
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [inView, setInView] = useState(false)
  const [tabHidden, setTabHidden] = useState(false)
  const count = GALLERY.length
  const rotating = !paused && !hovered && !focused && inView && !tabHidden

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPaused(true)
    const onVisibility = () => setTabHidden(document.hidden)
    onVisibility()
    document.addEventListener("visibilitychange", onVisibility)
    return () => document.removeEventListener("visibilitychange", onVisibility)
  }, [])

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const observer = new IntersectionObserver(([entry]) => setInView(entry.intersectionRatio >= 0.5), {
      threshold: [0, 0.5],
    })
    observer.observe(root)
    return () => observer.disconnect()
  }, [])

  // Restarts on every slide change, so a manual step also gets the full dwell time.
  useEffect(() => {
    if (!rotating) return
    const timer = setTimeout(() => setIndex((i) => (i + 1) % count), DWELL)
    return () => clearTimeout(timer)
  }, [index, rotating, count])

  const go = (delta: number) => setIndex((i) => (i + delta + count) % count)

  const togglePause = () => {
    setPaused((p) => !p)
    setHovered(false)
    setFocused(false)
  }

  // Only keyboard focus pauses: a clicked or tapped button keeps focus after the pointer has left.
  const onFocus = (e: FocusEvent) => setFocused(e.target.matches(":focus-visible"))
  const onBlur = (e: FocusEvent) => {
    if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false)
  }

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return
    e.preventDefault()
    go(e.key === "ArrowLeft" ? -1 : 1)
  }

  const onTouchStart = (e: TouchEvent) => {
    const touch = e.touches[0]
    touchStart.current = { x: touch.clientX, y: touch.clientY }
  }

  const onTouchEnd = (e: TouchEvent) => {
    const start = touchStart.current
    touchStart.current = null
    if (!start) return
    const dx = e.changedTouches[0].clientX - start.x
    const dy = e.changedTouches[0].clientY - start.y
    if (Math.abs(dx) > SWIPE && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1)
  }

  const buttonClass = "grid h-[44px] w-[44px] place-items-center p-[10px] opacity-75 hover:opacity-100"

  return (
    <section
      ref={rootRef}
      aria-roledescription="carousel"
      aria-label={t("galleryLabel")}
      onPointerEnter={(e) => e.pointerType === "mouse" && setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      className="mt-[clamp(40px,4.5vw,64px)]"
    >
      <div
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onTouchCancel={() => {
          touchStart.current = null
        }}
        className="grid touch-pan-y"
      >
        {GALLERY.map((item, i) => {
          const active = i === index
          return (
            // The incoming photo fades in on top while the outgoing one stays opaque beneath it
            // and only drops out once the fade is done, so the page never shows through mid-fade.
            <div
              key={item.photo}
              role="group"
              aria-roledescription="slide"
              aria-label={t("slide", { index: i + 1, count })}
              aria-hidden={!active}
              inert={!active}
              className={cn(
                "col-start-1 row-start-1 transition-opacity ease-[ease]",
                active ? "z-[1] opacity-100 duration-[800ms]" : "opacity-0 delay-[800ms] duration-0",
              )}
            >
              <Photo
                photo={item.photo}
                pos={item.pos}
                alt={t(`captions.${item.caption}`)}
                sizes="(max-width: 1480px) 88vw, 1300px"
                className="aspect-[4/3] sm:aspect-video"
              />
            </div>
          )
        })}
      </div>

      {/* The alt text already carries the caption, so screen readers skip this visual copy. */}
      <div aria-hidden="true" className="ui mt-3 grid">
        {GALLERY.map((item, i) => (
          <p
            key={item.photo}
            className={cn(
              "col-start-1 row-start-1 flex gap-[14px] transition-opacity duration-[800ms] ease-[ease]",
              i === index ? "opacity-100" : "opacity-0",
            )}
          >
            <span className="tabular-nums text-muted">{pad(i + 1)}</span>
            <span>{t(`captions.${item.caption}`)}</span>
          </p>
        ))}
      </div>

      {/* Below 600px the controls take the whole hairline row (counter left, buttons right) and the link moves under them. */}
      <div className="mt-[22px] flex flex-wrap items-center justify-between gap-x-5 border-t border-rule pt-[10px]">
        <TextLink href="/house" className="max-sm:order-last max-sm:mt-3">
          {t("link")}
        </TextLink>
        <div className="ui -mr-[10px] ml-auto flex items-center gap-1 max-sm:w-[calc(100%+10px)]">
          <span className="mr-[10px] tabular-nums text-muted max-sm:mr-auto" aria-live={rotating ? "off" : "polite"}>
            {`${pad(index + 1)} / ${pad(count)}`}
          </span>
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
    </section>
  )
}
