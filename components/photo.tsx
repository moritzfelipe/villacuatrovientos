import Image from "next/image"
import { editorial } from "@/lib/villa"
import { cn } from "@/lib/utils"

interface PhotoProps {
  /** Editorial photo id, e.g. "37-08899839". */
  photo: string
  alt: string
  /** Focal point, used as object-position. */
  pos?: string
  sizes: string
  priority?: boolean
  /** Sizing of the frame: aspect ratio or fixed height. */
  className?: string
}

/** A cover-fitted photograph in a sized frame, with the design's placeholder tone behind it. */
export function Photo({ photo, alt, pos = "50% 50%", sizes, priority, className }: PhotoProps) {
  return (
    <div className={cn("relative w-full overflow-hidden bg-mist", className)}>
      <Image
        src={editorial(photo)}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
        style={{ objectPosition: pos }}
      />
    </div>
  )
}

interface FigureProps extends Omit<PhotoProps, "alt"> {
  caption: string
  figureClassName?: string
}

/** A photograph with its caption underneath. */
export function Figure({ caption, figureClassName, ...photo }: FigureProps) {
  return (
    <figure className={figureClassName}>
      <Photo alt={caption} {...photo} />
      <figcaption className="caption">{caption}</figcaption>
    </figure>
  )
}
