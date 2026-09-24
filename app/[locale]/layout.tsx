import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, Literata } from "next/font/google"
import { notFound } from "next/navigation"
import { NextIntlClientProvider, hasLocale } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import { routing } from "@/i18n/routing"
import { Footer } from "@/components/footer"
import { MenuProvider } from "@/components/nav/menu-provider"
import "../globals.css"

// Literata: variable weight and optical size, roman and italic. Body and headings.
const literata = Literata({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-literata",
  display: "swap",
})

// DM Sans: small UI and label text.
const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
})

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.villacuatrovientos.com"),
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  setRequestLocale(locale)

  return (
    <html lang={locale} className={`${literata.variable} ${dmSans.variable}`}>
      <body>
        <NextIntlClientProvider>
          <MenuProvider>
            {/* Pages render their nav as a direct child here, so the sticky bar stays up through the footer. */}
            <div className="relative">
              {children}
              <Footer />
            </div>
          </MenuProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
