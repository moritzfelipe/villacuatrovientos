"use client"

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react"
import { usePathname } from "@/i18n/navigation"
import { MenuOverlay } from "./menu-overlay"

const MenuContext = createContext<{ openMenu: () => void } | null>(null)

/**
 * Owns the full-screen menu, so the hero header and the sticky bar can both open it.
 * The overlay is portalled to <body>: a fixed element inside the sticky nav would be trapped by it.
 */
export function MenuProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Close when navigating (including browser back/forward while the menu is open).
  useEffect(() => setOpen(false), [pathname])

  const openMenu = useCallback(() => setOpen(true), [])
  const closeMenu = useCallback(() => setOpen(false), [])
  const value = useMemo(() => ({ openMenu }), [openMenu])

  return (
    <MenuContext.Provider value={value}>
      {children}
      {open && <MenuOverlay onClose={closeMenu} />}
    </MenuContext.Provider>
  )
}

export function useMenu() {
  const context = useContext(MenuContext)
  if (!context) throw new Error("useMenu must be used inside <MenuProvider>")
  return context
}
