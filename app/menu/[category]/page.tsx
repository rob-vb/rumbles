"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronLeft, ShoppingBag } from "lucide-react";
import { EditorialHeading } from "@/components/decorative";
import { CategoryPills } from "@/components/ui";
import { ProductCard } from "@/components/menu";
import { CATEGORIES, getCategoryBySlug } from "@/data/categories";
import { getMenuItemsByCategory } from "@/data/menu";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/constants";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = use(params);
  const category = getCategoryBySlug(categorySlug);
  const { total, itemCount } = useCart();

  if (!category) {
    notFound();
  }

  const items = getMenuItemsByCategory(categorySlug);

  // Category pills for navigation
  const categoryPillData = CATEGORIES.map((cat) => ({
    id: cat.id,
    label: cat.name,
    href: `/menu/${cat.slug}`,
    count: cat.itemCount,
  }));

  return (
    <div className="min-h-screen">
      {/* Sticky Header */}
      <div className="sticky top-[var(--header-height)] z-40 bg-[var(--bg-deep)]/95 backdrop-blur-lg border-b border-[var(--bg-subtle)]">
        <div className="container-custom py-4">
          {/* Back Link & Title */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <Link
                href="/menu"
                className="
                  p-2 rounded-xl
                  bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)]
                  transition-colors
                "
              >
                <ChevronLeft className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="text-xl md:text-2xl font-display font-semibold">
                  {category.name}
                </h1>
                <p className="text-sm text-[var(--text-muted)]">
                  {items.length} items
                </p>
              </div>
            </div>

            {/* Cart Summary (Desktop) */}
            {itemCount > 0 && (
              <Link
                href="/cart"
                className="
                  hidden md:flex items-center gap-3 px-4 py-2 rounded-xl
                  bg-[var(--accent)] text-[var(--bg-deep)]
                  font-medium
                "
              >
                <ShoppingBag className="w-5 h-5" />
                <span>{itemCount} items</span>
                <span className="font-bold">{formatPrice(total)}</span>
              </Link>
            )}
          </div>

          {/* Category Pills */}
          <div className="overflow-x-auto hide-scrollbar -mx-4 px-4">
            <CategoryPills
              categories={categoryPillData}
              activeId={category.id}
              showAll={false}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-8">
        {/* Category Description */}
        {category.description && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[var(--text-secondary)] mb-8 max-w-2xl"
          >
            {category.description}
          </motion.p>
        )}

        {/* Product Grid */}
        {items.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <ProductCard item={item} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-[var(--text-muted)] text-lg">
              No items available in this category yet.
            </p>
            <Link
              href="/menu"
              className="mt-4 inline-block text-[var(--accent)] hover:underline"
            >
              ← Back to Menu
            </Link>
          </div>
        )}
      </div>

      {/* Floating Cart Button (Mobile) */}
      {itemCount > 0 && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="
            fixed bottom-24 left-4 right-4 z-50
            md:hidden
          "
        >
          <Link
            href="/cart"
            className="
              flex items-center justify-between
              w-full px-6 py-4 rounded-2xl
              bg-[var(--accent)] text-[var(--bg-deep)]
              font-semibold
              shadow-[0_4px_24px_var(--accent-glow)]
            "
          >
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5" />
              <span>View Cart ({itemCount})</span>
            </div>
            <span className="font-bold">{formatPrice(total)}</span>
          </Link>
        </motion.div>
      )}
    </div>
  );
}
