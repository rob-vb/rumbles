"use client";

import { forwardRef, ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  hover?: boolean;
  glass?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}

const paddingSizes = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      hover = false,
      glass = false,
      padding = "md",
      className = "",
      children,
      onClick,
    },
    ref
  ) => {
    const baseClasses = `
      rounded-2xl
      ${glass ? "glass" : "bg-[var(--bg-surface)] border border-[var(--bg-subtle)]"}
      ${paddingSizes[padding]}
      ${hover ? "card-hover cursor-pointer" : ""}
    `;

    if (hover) {
      return (
        <motion.div
          ref={ref}
          className={`${baseClasses} ${className}`}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          onClick={onClick}
        >
          {children}
        </motion.div>
      );
    }

    return (
      <div ref={ref} className={`${baseClasses} ${className}`} onClick={onClick}>
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
