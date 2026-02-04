"use client";

import { HTMLAttributes } from "react";

type BadgeVariant = "accent" | "success" | "vegetarian" | "new" | "popular";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  rotated?: boolean;
}

const variants: Record<BadgeVariant, string> = {
  accent: "bg-[var(--accent)] text-[var(--bg-deep)]",
  success: "bg-[var(--success)] text-white",
  vegetarian: "bg-green-600 text-white",
  new: "bg-blue-500 text-white",
  popular: "bg-[var(--cta)] text-white",
};

export function Badge({
  variant = "accent",
  rotated = false,
  className = "",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center px-2.5 py-1
        text-xs font-semibold uppercase tracking-wider
        rounded-md
        ${variants[variant]}
        ${rotated ? "transform -rotate-3" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </span>
  );
}

// Specific badge components for convenience
export function VegetarianBadge() {
  return (
    <Badge variant="vegetarian" className="gap-1">
      <svg
        className="w-3 h-3"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
      </svg>
      Veggie
    </Badge>
  );
}

export function PopularBadge() {
  return (
    <Badge variant="popular" rotated>
      🔥 Popular
    </Badge>
  );
}

export function NewBadge() {
  return (
    <Badge variant="new" rotated>
      New
    </Badge>
  );
}

export function FreshBadge() {
  return (
    <span className="badge-fresh inline-flex items-center rounded-md">
      Fresh
    </span>
  );
}
