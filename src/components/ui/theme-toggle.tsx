"use client"

import { useState } from "react"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const [isDark, setIsDark] = useState(true)

  // next-themes
  // const { resolvedTheme, setTheme } = useTheme()
  // const isDark = resolvedTheme === "dark"
  // onClick={() => setTheme(isDark ? "light" : "dark")}

  return (
    <div
      className={cn(
        "flex w-24 h-9 p-1 rounded-full cursor-pointer transition-all duration-300",
        "bg-[#F1EFEC]/70 border border-[#D4C9BE] backdrop-blur-lg",
        className
      )}
      onClick={() => setIsDark(!isDark)}
      role="button"
      tabIndex={0}
    >
      <div className="flex justify-between items-center w-full text-sm font-semibold">
        <span className={cn("px-3 py-1 rounded-full", isDark && "bg-[#D4C9BE] text-white")}>DE</span>
        <span className={cn("px-3 py-1 rounded-full", !isDark && "bg-[#D4C9BE] text-white")}>ENG</span>
      </div>
    </div>
  )
}