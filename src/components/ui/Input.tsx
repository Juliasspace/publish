"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          // Base
          "w-full rounded-xl border border-[#E5E1DA] bg-[#F1EFEC] text-foreground placeholder:text-foreground/60 px-4 py-2",
          // Interaction
          "transition-all duration-200 ease-in-out focus:outline-none",
          "hover:border-[#d9d3ca] hover:bg-[#ebe7e2]",
          // Focus active typing state
          "focus:bg-accent focus:text-white focus:placeholder:text-white/80 focus:border-accent focus:ring-2 focus:ring-accent focus:ring-offset-2",
          // Caret visibility
          "caret-white",
          // Disabled
          "disabled:cursor-not-allowed disabled:opacity-60",
          className
        )}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export default Input
