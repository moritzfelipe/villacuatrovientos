import Image from "next/image"
import { useTranslations } from "next-intl"
import { AIRBNB_URL } from "@/lib/villa"
import { LangSwitcher } from "./lang-switcher"

const NAV = [
  { key: "house", href: "#house" },
  { key: "gallery", href: "#gallery" },
  { key: "area", href: "#area" },
  { key: "reviews", href: "#reviews" },
  { key: "info", href: "#info" },
  { key: "book", href: "#book" },
] as const

export function Footer() {
  const t = useTranslations("footer")
  const nav = useTranslations("nav")

  return (
    <footer className="bg-paper px-4 pb-10 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-content">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/logo-tile.png" alt="Villa Cuatro Vientos logo" width={44} height={44} className="rounded" />
              <span className="font-serif text-xl font-medium">Villa Cuatro Vientos</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">{t("tagline")}</p>
          </div>

          <div>
            <h3 className="eyebrow mb-4">{t("navHeading")}</h3>
            <ul className="space-y-2.5">
              {NAV.map((item) => (
                <li key={item.key}>
                  <a href={item.href} className="text-sm text-ink-soft transition-colors hover:text-ink">
                    {nav(item.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-4">{t("legalHeading")}</h3>
            <p className="text-sm leading-relaxed text-ink-soft">{t("registration")}</p>
            <a
              href={AIRBNB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-semibold text-azul transition-colors hover:text-azul-deep"
            >
              {t("airbnbListing")}
            </a>
            <div className="mt-6">
              <LangSwitcher />
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-ink/10 pt-6 text-center text-xs text-ink-faint">
          © {new Date().getFullYear()} Villa Cuatro Vientos. {t("rights")}
        </div>
      </div>
    </footer>
  )
}
