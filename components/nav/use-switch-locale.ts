"use client"

import { useLocale } from "next-intl"
import { usePathname, useRouter } from "@/i18n/navigation"
import type { Locale } from "@/i18n/routing"

/** Current locale plus a function that reloads the current page in another locale. */
export function useSwitchLocale() {
  const locale = useLocale() as Locale
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = (next: Locale) => {
    if (next !== locale) router.replace(pathname, { locale: next, scroll: false })
  }

  return { locale, switchLocale }
}
