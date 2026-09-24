import { useTranslations } from "next-intl"
import { PLACES } from "@/lib/villa"
import { cn } from "@/lib/utils"

interface PlacesListProps {
  /** Home uses slightly smaller rows than Comares & beyond. */
  variant: "home" | "comares"
  className?: string
}

/** Driving-time rows, each linking to Google Maps directions. */
export function PlacesList({ variant, className }: PlacesListProps) {
  const t = useTranslations("places")
  const home = variant === "home"

  return (
    <ul className={cn("border-b border-rule", className)}>
      {PLACES.map((place) => (
        <li key={place.key}>
          <a
            href={place.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "hover-shift grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-5 border-t border-rule",
              home ? "pb-4 pt-[17px]" : "pb-[17px] pt-[18px]",
            )}
          >
            <span className="flex flex-col">
              <span
                className={cn(
                  "leading-[1.2] tracking-[-0.03em]",
                  home ? "text-[length:clamp(22px,2vw,28px)]" : "text-[length:clamp(22px,2.2vw,30px)]",
                )}
              >
                {t(`${place.key}.name`)}
              </span>
              <span className="mt-1 font-sans text-[11px] leading-[1.5] text-muted">{t(`${place.key}.sub`)}</span>
            </span>
            <span
              className={cn("font-sans text-[13px] leading-[1.5]", home ? "whitespace-nowrap" : "text-right")}
            >
              {t(`${place.key}.time`)}
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}
