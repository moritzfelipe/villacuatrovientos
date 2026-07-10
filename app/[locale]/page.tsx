import { setRequestLocale } from "next-intl/server"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Intro } from "@/components/intro"
import { House } from "@/components/house"
import { GallerySection } from "@/components/gallery-section"
import { Area } from "@/components/area"
import { Reviews } from "@/components/reviews"
import { Info } from "@/components/info"
import { BookCta } from "@/components/book-cta"
import { Footer } from "@/components/footer"

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <House />
        <GallerySection locale={locale} />
        <Area />
        <Reviews />
        <Info />
        <BookCta />
      </main>
      <Footer />
    </>
  )
}
