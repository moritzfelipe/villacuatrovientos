"use client"

import { useLocale } from "next-intl"
import { usePathname, useRouter } from "@/i18n/navigation"
import { routing } from "@/i18n/routing"
import { cn } from "@/lib/utils"

export function LangSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider">
      {routing.locales.map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          {i > 0 && <span className="opacity-30">/</span>}
          <button
            type="button"
            onClick={() => router.replace(pathname, { locale: l })}
            className={cn(
              "px-0.5 transition-opacity",
              l === locale ? "underline underline-offset-4 opacity-100" : "opacity-50 hover:opacity-90",
            )}
          >
            {l}
          </button>
        </span>
      ))}
    </div>
  )
}
