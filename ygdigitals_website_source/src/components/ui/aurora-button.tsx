"use client"

import * as React from "react";
import { cn } from "@/lib/utils";

interface AuroraButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  glowClassName?: string;
  href?: string;
}

export function AuroraButton({
  className,
  children,
  glowClassName,
  href,
  ...props
}: AuroraButtonProps) {
  const innerContent = (
    <>
      {/* Gradient border container */}
      <div
        className={cn(
          "absolute -inset-[2px] rounded-full bg-gradient-to-r from-[#00f0ff] via-[#0055ff] to-[#00f0ff] opacity-75 blur-lg transition-all",
          "group-hover:opacity-100 group-hover:blur-xl",
          glowClassName
        )}
      />

      {/* Button */}
      <div
        className={cn(
          "relative inline-flex items-center justify-center rounded-full bg-black px-6 py-3",
          "text-white shadow-xl font-bold tracking-wide",
          "transition-all hover:bg-[#111]",
          "border border-[#00f0ff]/20",
          className
        )}
      >
        {children}
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} className="relative group inline-block hover:scale-105 transition-transform">
        {innerContent}
      </a>
    );
  }

  return (
    <button className="relative group inline-block hover:scale-105 transition-transform text-left" {...props}>
      {innerContent}
    </button>
  );
}
