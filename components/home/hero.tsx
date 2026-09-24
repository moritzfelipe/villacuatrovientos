"use client"

import { useEffect, useRef, useState } from "react"
import { useTranslations } from "next-intl"
import { HERO_POSTER, HERO_VIDEO, SHORT_NAME } from "@/lib/villa"
import { Fullscreen, SoundOff, SoundOn } from "../icons"
import { HeroNav } from "../nav/site-nav"

type FullscreenVideo = HTMLVideoElement & { webkitEnterFullscreen?: () => void }

/** Full-height film with the hero header, title block and sound / fullscreen controls. */
export function HomeHero() {
  const t = useTranslations("home.hero")
  const videoRef = useRef<FullscreenVideo>(null)
  const [muted, setMuted] = useState(true)

  // Autoplay muted, unless the visitor prefers reduced motion (the poster stays).
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = true
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    video.play().catch(() => {})
  }, [])

  const toggleSound = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    video.volume = 0.6
    if (video.paused) video.play().catch(() => {})
    setMuted(video.muted)
  }

  const fullscreen = () => {
    const video = videoRef.current
    if (!video) return
    if (video.requestFullscreen) video.requestFullscreen().catch(() => {})
    else video.webkitEnterFullscreen?.()
  }

  return (
    <section id="top" className="relative isolate h-[100svh] min-h-[540px] overflow-hidden bg-char text-white">
      <video
        ref={videoRef}
        src={HERO_VIDEO}
        poster={HERO_POSTER}
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 -z-[2] h-full w-full object-cover"
      />

      <HeroNav />

      <div className="absolute inset-0 -z-[1] bg-[linear-gradient(180deg,#00000038_0%,#0000_22%,#0000_48%,#00000094_100%)]" />
      <div className="absolute bottom-[clamp(20px,3vw,34px)] left-[var(--gutter)] right-[var(--gutter)]">
        <p className="ui [text-shadow:0_1px_10px_#0006]">{t("label")}</p>
        <h1 className="mb-[clamp(20px,2.6vw,34px)] ml-[-0.04em] mt-3 text-[length:clamp(54px,9vw,136px)] leading-[.98] tracking-[-0.05em] [text-shadow:0_1px_24px_#0004]">
          {SHORT_NAME}
        </h1>
        <div className="ui flex flex-wrap items-center justify-between gap-x-8 gap-y-[14px] border-t border-[#ffffff5c] pt-[14px]">
          <p className="max-w-[44ch] text-pretty">{t("subtitle")}</p>
          <div className="-mr-[10px] flex items-center gap-[6px]">
            <button
              type="button"
              onClick={toggleSound}
              aria-label={muted ? t("soundOn") : t("soundOff")}
              className="grid h-[44px] w-[44px] place-items-center p-[10px] hover:bg-[#ffffff14]"
            >
              {muted ? <SoundOff size={20} /> : <SoundOn size={20} />}
            </button>
            <button
              type="button"
              onClick={fullscreen}
              aria-label={t("fullscreen")}
              className="grid h-[44px] w-[44px] place-items-center p-[10px] hover:bg-[#ffffff14]"
            >
              <Fullscreen size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
