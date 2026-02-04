"use client";

import { motion } from "framer-motion";

interface EditorialHeadingProps {
  children: React.ReactNode;
  subtitle?: string;
  underlineWidth?: number;
  className?: string;
  as?: "h1" | "h2" | "h3";
  center?: boolean;
}

export function EditorialHeading({
  children,
  subtitle,
  underlineWidth = 60,
  className = "",
  as: Component = "h2",
  center = false,
}: EditorialHeadingProps) {
  const sizeClasses = {
    h1: "text-4xl md:text-5xl lg:text-6xl",
    h2: "text-3xl md:text-4xl",
    h3: "text-2xl md:text-3xl",
  };

  return (
    <div className={`${center ? "text-center" : ""} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Component
          className={`
            font-display font-semibold text-[var(--text-primary)]
            leading-tight tracking-tight
            ${sizeClasses[Component]}
          `}
        >
          {children}
        </Component>

        {/* Decorative underline */}
        <motion.div
          className={`
            h-[3px] bg-[var(--accent)] mt-4
            ${center ? "mx-auto" : ""}
          `}
          style={{ width: underlineWidth }}
          initial={{ scaleX: 0, originX: center ? 0.5 : 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />

        {subtitle && (
          <motion.p
            className="mt-4 text-[var(--text-secondary)] text-lg md:text-xl max-w-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}

// Quote block with decorative lines (Findfood style)
interface QuoteBlockProps {
  children: React.ReactNode;
  author?: string;
  className?: string;
}

export function QuoteBlock({ children, author, className = "" }: QuoteBlockProps) {
  return (
    <motion.blockquote
      className={`relative pl-6 ${className}`}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Decorative vertical line */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[var(--accent)]" />

      {/* Quote marks */}
      <span className="absolute -left-2 -top-4 text-6xl text-[var(--accent)] opacity-20 font-display">
        "
      </span>

      <p className="text-lg md:text-xl text-[var(--text-primary)] italic font-display leading-relaxed">
        {children}
      </p>

      {author && (
        <footer className="mt-4 text-[var(--text-secondary)]">
          <span className="text-sm uppercase tracking-wider">— {author}</span>
        </footer>
      )}
    </motion.blockquote>
  );
}
