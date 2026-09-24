import type { SVGProps } from "react"
import { cn } from "@/lib/utils"

type IconProps = Omit<SVGProps<SVGSVGElement>, "children"> & { size?: number }

function icon(d: string) {
  function Icon({ size = 20, className, style, ...props }: IconProps) {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
        className={cn("icon", className)}
        style={{ width: size, height: size, ...style }}
        {...props}
      >
        <path d={d} />
      </svg>
    )
  }
  return Icon
}

// Exact paths from the design (24×24, stroke 1.4, round caps and joins).
export const ArrowRight = icon("M5 12h14m-6-6 6 6-6 6")
export const ArrowLeft = icon("M19 12H5m6-6-6 6 6 6")
export const MenuIcon = icon("M4 7h16M4 12h16M4 17h16")
export const CloseIcon = icon("M6 6l12 12M18 6 6 18")
export const ChevronDown = icon("m6 9 6 6 6-6")
export const SoundOff = icon("m11 5-6 4H2v6h3l6 4V5m5 4 5 6m0-6-5 6")
export const SoundOn = icon("m11 5-6 4H2v6h3l6 4V5m4 3a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14")
export const Fullscreen = icon("M8 4H4v4m12-4h4v4M4 16v4h4m12-4v4h-4")
export const Pause = icon("M8 5v14M16 5v14")
export const Play = icon("m8 5 11 7-11 7V5")

/** Filled star used next to the Airbnb rating. */
export function Star({ size = 15 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className="block shrink-0 fill-ink stroke-none"
      style={{ width: size, height: size }}
    >
      <path d="m12 3 2.8 5.7 6.3.9-4.5 4.4 1.1 6.2L12 17.3l-5.7 3 1.1-6.2L2.9 9.6l6.3-.9L12 3" />
    </svg>
  )
}
