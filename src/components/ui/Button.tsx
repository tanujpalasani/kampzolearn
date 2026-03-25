"use client";

import { sendGAEvent } from "@next/third-parties/google";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  gaEvent?: { event: string; value: string };
  children: React.ReactNode;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  href,
  gaEvent,
  onClick,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.99]";

  const variants = {
    primary: "bg-primary text-white shadow-[0_8px_20px_rgb(249_115_22_/_0.35)] hover:-translate-y-0.5 hover:bg-primary-dark",
    secondary: "bg-dark text-white shadow-[0_8px_16px_rgb(15_23_42_/_0.2)] hover:-translate-y-0.5 hover:bg-dark-soft",
    outline: "border border-gray-300 bg-transparent text-dark hover:border-primary/40 hover:bg-orange-50/40",
    ghost: "text-dark hover:bg-gray-100",
  };

  const sizes = {
    sm: "h-9 px-3.5 text-sm",
    md: "h-11 px-5 py-2 text-sm sm:text-base",
    lg: "h-12 px-6 sm:px-8 text-base sm:text-lg",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className || ""}`;

  const fireGA = () => {
    if (gaEvent) sendGAEvent("event", gaEvent.event, { value: gaEvent.value });
  };

  if (href) {
    return (
      <Link href={href} className={combinedClassName} onClick={fireGA}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={combinedClassName}
      onClick={(e) => {
        fireGA();
        onClick?.(e);
      }}
      {...props}
    >
      {children}
    </button>
  );
}
