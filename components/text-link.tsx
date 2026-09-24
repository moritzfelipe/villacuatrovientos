import type { ReactNode } from "react"
import { Link } from "@/i18n/navigation"
import { cn } from "@/lib/utils"
import { ArrowRight } from "./icons"

interface TextLinkProps {
  href: string
  children: ReactNode
  /** Opens in a new tab (Airbnb, Google Maps). Internal hrefs are locale-prefixed automatically. */
  external?: boolean
  /** 18px gap between label and arrow instead of 34px. */
  compact?: boolean
  /** 11px label instead of 12px. */
  small?: boolean
  className?: string
}

/** The underlined DM Sans link with a trailing arrow used throughout the site. */
export function TextLink({ href, children, external, compact, small, className }: TextLinkProps) {
  const classes = cn(
    "inline-flex items-center border-b border-ink py-[6px] font-sans leading-[1.5]",
    compact ? "gap-[18px]" : "gap-[34px]",
    small ? "text-[11px]" : "text-[12px]",
    className,
  )
  const content = (
    <>
      {children}
      <ArrowRight size={16} />
    </>
  )

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    )
  }
  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  )
}
