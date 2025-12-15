"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "w-full min-h-[96px] rounded-xl border border-[#E5E1DA] bg-[#F1EFEC] text-foreground placeholder:text-foreground/60 px-4 py-3",
          "transition-all duration-200 ease-in-out focus:outline-none",
          "hover:border-[#d9d3ca] hover:bg-[#ebe7e2]",
          "focus:bg-accent focus:text-white focus:placeholder:text-white/80 focus:border-accent focus:ring-2 focus:ring-accent focus:ring-offset-2",
          "caret-white",
          "disabled:cursor-not-allowed disabled:opacity-60",
          className
        )}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export default Textarea
