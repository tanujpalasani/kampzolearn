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
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark shadow-sm",
    secondary: "bg-dark text-white hover:bg-gray-800",
    outline: "border border-gray-200 bg-white hover:bg-gray-100 text-dark",
    ghost: "hover:bg-gray-100 text-dark",
  };

  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-4 py-2",
    lg: "h-11 px-8 text-lg",
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
