"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
  floating?: boolean
  size?: "md" | "lg"
}

export function NavBar({ items, className, floating = false, size = "md" }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className={cn(
        floating
          ? "fixed bottom-4 left-1/2 -translate-x-1/2 z-50 sm:top-4 sm:bottom-auto"
          : "relative",
        className,
      )}
    >
      <div className="flex items-center gap-3 bg-[#F1EFEC]/70 border border-[#D4C9BE] backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer font-semibold rounded-full transition-colors no-underline hover:no-underline focus:no-underline active:no-underline",
                size === "lg" ? "text-base px-7 py-3" : "text-sm px-6 py-2",
                "text-[#123458]/80 hover:text-[#123458] hover:bg-[#D4C9BE]",
                isActive && "bg-[#D4C9BE] text-[#123458]",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-[#D4C9BE] rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#D4C9BE] rounded-t-full">
                    <div className="absolute w-12 h-6 bg-[#D4C9BE]/50 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-[#D4C9BE]/50 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-[#D4C9BE]/50 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
