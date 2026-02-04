"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface CategoryPillProps {
  label: string;
  href?: string;
  isActive?: boolean;
  onClick?: () => void;
  count?: number;
}

export function CategoryPill({
  label,
  href,
  isActive = false,
  onClick,
  count,
}: CategoryPillProps) {
  const baseClasses = `
    inline-flex items-center gap-2 px-4 py-2.5
    rounded-full text-sm font-medium
    transition-all duration-200 ease-out
    whitespace-nowrap
    ${
      isActive
        ? "bg-[var(--accent)] text-[var(--bg-deep)] shadow-[0_2px_12px_var(--accent-glow)]"
        : "bg-transparent border border-[var(--bg-subtle)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
    }
  `;

  const content = (
    <>
      {label}
      {count !== undefined && (
        <span
          className={`
            text-xs px-1.5 py-0.5 rounded-full
            ${isActive ? "bg-[var(--bg-deep)]/20" : "bg-[var(--bg-elevated)]"}
          `}
        >
          {count}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={baseClasses}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
}

interface CategoryPillsProps {
  categories: Array<{
    id: string;
    label: string;
    href?: string;
    count?: number;
  }>;
  activeId?: string;
  onSelect?: (id: string) => void;
  showAll?: boolean;
  allLabel?: string;
  allHref?: string;
}

export function CategoryPills({
  categories,
  activeId,
  onSelect,
  showAll = true,
  allLabel = "All",
  allHref,
}: CategoryPillsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto hide-scrollbar py-2 -my-2 px-1 -mx-1">
      {showAll && (
        <CategoryPill
          label={allLabel}
          href={allHref}
          isActive={!activeId || activeId === "all"}
          onClick={() => onSelect?.("all")}
        />
      )}
      {categories.map((cat) => (
        <CategoryPill
          key={cat.id}
          label={cat.label}
          href={cat.href}
          isActive={activeId === cat.id}
          onClick={() => onSelect?.(cat.id)}
          count={cat.count}
        />
      ))}
    </div>
  );
}
