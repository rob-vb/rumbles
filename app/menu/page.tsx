"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { EditorialHeading } from "@/components/decorative";
import { CATEGORIES } from "@/data/categories";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

// Category emoji map (fallback)
const categoryEmojis: Record<string, string> = {
  fish: "🐟",
  kebabs: "🥙",
  burgers: "🍔",
  "smash-burgers": "🍔",
  pies: "🥧",
  "seafood-basket": "🦐",
  "usa-fried-chicken": "🍗",
  "veggie-wraps": "🥬",
  extras: "🍟",
  "kids-meal": "🧒",
  desserts: "🍰",
  drinks: "🥤",
  beers: "🍺",
};

// Category image map
const categoryImages: Record<string, string> = {
  fish: "/images/categories/fish.jpg",
  kebabs: "/images/categories/kebab.jpg",
  burgers: "/images/categories/burger.jpg",
  "smash-burgers": "/images/categories/burger.jpg",
  pies: "/images/categories/pie.jpg",
  "seafood-basket": "/images/categories/seafood.jpg",
  "usa-fried-chicken": "/images/categories/chicken.jpg",
  "veggie-wraps": "/images/categories/wrap.jpg",
  extras: "/images/categories/fries.jpg",
  "kids-meal": "/images/categories/kids.jpg",
  desserts: "/images/categories/dessert.jpg",
  drinks: "/images/categories/drinks.jpg",
  beers: "/images/categories/beer.jpg",
};

export default function MenuPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <EditorialHeading
            as="h1"
            subtitle="13 categories of freshly prepared food"
            center
          >
            Our Menu
          </EditorialHeading>
        </div>

        {/* Category Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {CATEGORIES.map((category) => (
            <motion.div key={category.id} variants={fadeInUp}>
              <Link
                href={`/menu/${category.slug}`}
                className="group block"
              >
                <div
                  className="
                    relative overflow-hidden rounded-2xl
                    bg-[var(--bg-surface)] border border-[var(--bg-subtle)]
                    transition-all duration-300
                    group-hover:border-[var(--accent)]
                    group-hover:shadow-[0_8px_32px_var(--accent-glow)]
                    group-hover:-translate-y-1
                  "
                >
                  {/* Category Image */}
                  <div className="aspect-square relative bg-gradient-to-br from-[var(--bg-elevated)] to-[var(--bg-surface)]">
                    {categoryImages[category.id] ? (
                      <Image
                        src={categoryImages[category.id]}
                        alt={category.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl md:text-7xl opacity-80 group-hover:scale-110 transition-transform duration-300">
                          {categoryEmojis[category.id] || "🍽️"}
                        </span>
                      </div>
                    )}

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-surface)] via-transparent to-transparent" />

                    {/* Item count badge */}
                    <div className="absolute top-3 right-3">
                      <span
                        className="
                          px-2.5 py-1 rounded-full text-xs font-medium
                          bg-[var(--bg-deep)]/80 backdrop-blur-sm
                          text-[var(--text-secondary)]
                        "
                      >
                        {category.itemCount} items
                      </span>
                    </div>
                  </div>

                  {/* Category Info */}
                  <div className="p-4">
                    <h3
                      className="
                        font-semibold text-lg text-[var(--text-primary)]
                        group-hover:text-[var(--accent)] transition-colors
                      "
                    >
                      {category.name}
                    </h3>
                    {category.description && (
                      <p className="mt-1 text-sm text-[var(--text-muted)] line-clamp-2">
                        {category.description}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
