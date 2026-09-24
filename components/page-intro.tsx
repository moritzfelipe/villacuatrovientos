import type { ReactNode } from "react"

interface PageIntroProps {
  label: string
  title: string
  text: string
  /** Optional content below the title row, e.g. the facts row. */
  children?: ReactNode
}

/** Opening block of the inner pages: small label, large title and intro text. */
export function PageIntro({ label, title, text, children }: PageIntroProps) {
  return (
    <header className="wrap pb-[clamp(40px,4.5vw,64px)] pt-[clamp(64px,8vw,128px)]">
      <p className="ui text-muted">{label}</p>
      <div className="mt-[18px] flex flex-wrap items-end justify-between gap-x-[7vw] gap-y-[28px]">
        <h1 className="type-page max-w-[13ch] flex-[1_1_420px]">{title}</h1>
        <p className="max-w-[50ch] flex-[1_1_340px] text-pretty">{text}</p>
      </div>
      {children}
    </header>
  )
}
