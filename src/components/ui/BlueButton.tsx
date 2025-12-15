"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type LinkButtonProps = { href: string } & AnchorHTMLAttributes<HTMLAnchorElement>;
type NativeButtonProps = { href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>;

type BlueButtonProps = {
  className?: string;
  children: ReactNode;
} & (LinkButtonProps | NativeButtonProps);

const baseClasses =
  "group relative inline-flex h-auto items-center justify-center overflow-hidden rounded-full border-2 border-[#6d82b5] bg-[#123459] px-10 py-4 text-lg font-semibold tracking-wide text-white transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background no-underline hover:no-underline focus:no-underline";

const Overlay = () => (
  <span
    className="absolute inset-0 origin-bottom scale-y-0 bg-[#6d82b5] transition-transform duration-300 ease-out group-hover:scale-y-100"
    aria-hidden="true"
  />
);

const ContentWrapper = ({ children }: { children: ReactNode }) => (
  <span className="relative z-10 inline-flex items-center space-x-2">{children}</span>
);

export function BlueButton({ className, children, ...props }: BlueButtonProps) {
  const classes = cn(baseClasses, className);

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    return (
      <Link href={href} className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        <Overlay />
        <ContentWrapper>{children}</ContentWrapper>
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      <Overlay />
      <ContentWrapper>{children}</ContentWrapper>
    </button>
  );
}

export default BlueButton;
