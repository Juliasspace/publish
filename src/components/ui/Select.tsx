"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <select
          ref={ref}
          className={cn(
            "w-full appearance-none rounded-xl border border-[#E5E1DA] bg-[#F1EFEC] text-foreground px-4 py-2",
            "transition-all duration-200 ease-in-out focus:outline-none",
            "hover:border-[#d9d3ca] hover:bg-[#ebe7e2]",
            "focus:bg-accent focus:text-white focus:border-accent focus:ring-2 focus:ring-accent focus:ring-offset-2",
            "[&>option]:text-foreground [&>option]:bg-white",
            "disabled:cursor-not-allowed disabled:opacity-60",
            className
          )}
          {...props}
        >
          {children}
        </select>
        <svg
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-current opacity-70"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10 12l-4-4h8l-4 4z" />
        </svg>
      </div>
    )
  }
)
Select.displayName = "Select"

export default Select
