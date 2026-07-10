"use client"

import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { cn } from "@/lib/utils"
import type { PhotoCategory } from "@/lib/villa"

export interface GalleryPhoto {
  src: string
  w: number
  h: number
  category: PhotoCategory
  caption: string
}

interface Labels {
  filters: Record<"all" | PhotoCategory, string>
  close: string
  prev: string
  next: string
  openPhoto: string
}

const FILTERS: Array<"all" | PhotoCategory> = ["all", "inside", "sleep", "outdoors", "surroundings"]

export function Gallery({ photos, labels }: { photos: GalleryPhoto[]; labels: Labels }) {
  const [filter, setFilter] = useState<"all" | PhotoCategory>("all")
  const [active, setActive] = useState<number | null>(null)

  const visible = filter === "all" ? photos : photos.filter((p) => p.category === filter)

  const step = useCallback(
    (dir: 1 | -1) => {
      setActive((cur) => (cur === null ? cur : (cur + dir + visible.length) % visible.length))
    },
    [visible.length],
  )

  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null)
      if (e.key === "ArrowRight") step(1)
      if (e.key === "ArrowLeft") step(-1)
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [active, step])

  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => {
              setFilter(f)
              setActive(null)
            }}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              filter === f
                ? "border-azul bg-azul text-paper"
                : "border-ink/15 text-ink-soft hover:border-ink/35 hover:text-ink",
            )}
          >
            {labels.filters[f]}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>button]:mb-4">
        {visible.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`${labels.openPhoto}: ${p.caption}`}
            className="group block w-full overflow-hidden rounded-md"
          >
            <Image
              src={p.src}
              alt={p.caption}
              width={p.w}
              height={p.h}
              className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(min-width: 1024px) 24rem, (min-width: 640px) 50vw, 100vw"
            />
          </button>
        ))}
      </div>

      {active !== null && visible[active] && (
        <div
          className="fixed inset-0 z-[60] flex flex-col bg-ink/95 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
        >
          <div className="flex items-center justify-between p-4 text-paper/80">
            <span className="text-sm tabular-nums">
              {active + 1} / {visible.length}
            </span>
            <button type="button" aria-label={labels.close} className="p-2 transition-colors hover:text-paper">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-16">
            <button
              type="button"
              aria-label={labels.prev}
              onClick={(e) => {
                e.stopPropagation()
                step(-1)
              }}
              className="absolute left-2 z-10 rounded-full bg-paper/10 p-2.5 text-paper transition-colors hover:bg-paper/25 sm:left-5"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <Image
              key={visible[active].src}
              src={visible[active].src}
              alt={visible[active].caption}
              width={visible[active].w}
              height={visible[active].h}
              onClick={(e) => e.stopPropagation()}
              className="max-h-full w-auto max-w-full rounded object-contain"
              sizes="100vw"
              priority
            />

            <button
              type="button"
              aria-label={labels.next}
              onClick={(e) => {
                e.stopPropagation()
                step(1)
              }}
              className="absolute right-2 z-10 rounded-full bg-paper/10 p-2.5 text-paper transition-colors hover:bg-paper/25 sm:right-5"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <p className="px-6 pb-6 pt-4 text-center font-serif text-lg italic text-paper/90">
            {visible[active].caption}
          </p>
        </div>
      )}
    </div>
  )
}
