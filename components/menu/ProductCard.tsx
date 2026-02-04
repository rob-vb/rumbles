"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Leaf } from "lucide-react";
import { MenuItem } from "@/types/menu";
import { formatPrice } from "@/lib/constants";
import { Button } from "@/components/ui";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  item: MenuItem;
}

export function ProductCard({ item }: ProductCardProps) {
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(
    item.variants?.[0] || null
  );
  const [quantity, setQuantity] = useState(1);
  const [showAdded, setShowAdded] = useState(false);

  const currentPrice = selectedVariant?.price || item.price || 0;

  const handleAddToCart = () => {
    addItem({
      menuItemId: item.id,
      name: item.name,
      image: item.image,
      variantId: selectedVariant?.id,
      variantName: selectedVariant?.name,
      price: currentPrice,
      quantity,
    });

    // Show feedback
    setShowAdded(true);
    setTimeout(() => setShowAdded(false), 1500);

    // Reset quantity
    setQuantity(1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="
        group relative
        bg-[var(--bg-surface)] border border-[var(--bg-subtle)]
        rounded-2xl overflow-hidden
        transition-all duration-300
        hover:border-[var(--accent)]/50
        hover:shadow-[0_8px_32px_var(--accent-glow)]
        hover:-translate-y-1
      "
    >
      {/* Image */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-[var(--bg-elevated)] to-[var(--bg-surface)]">
        {/* Placeholder - replace with actual image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl opacity-30">
            {item.categoryId === "fish" && "🐟"}
            {item.categoryId === "kebabs" && "🥙"}
            {item.categoryId === "burgers" && "🍔"}
            {item.categoryId === "extras" && "🍟"}
            {item.categoryId === "drinks" && "🥤"}
            {!["fish", "kebabs", "burgers", "extras", "drinks"].includes(item.categoryId) && "🍽️"}
          </span>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-surface)] via-transparent to-transparent" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {item.isPopular && (
            <span className="badge-fresh text-[10px]">🔥 Popular</span>
          )}
          {item.isVegetarian && (
            <span className="px-2 py-1 rounded-md bg-green-600 text-white text-[10px] font-semibold flex items-center gap-1">
              <Leaf className="w-3 h-3" />
              Veggie
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Name & Price */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
            {item.name}
          </h3>
          <span className="text-[var(--accent)] font-bold whitespace-nowrap">
            {formatPrice(currentPrice)}
          </span>
        </div>

        {/* Description */}
        {item.description && (
          <p className="text-sm text-[var(--text-muted)] line-clamp-2 mb-3">
            {item.description}
          </p>
        )}

        {/* Variant Selector */}
        {item.variants && item.variants.length > 1 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {item.variants.map((variant) => (
              <button
                key={variant.id}
                onClick={() => setSelectedVariant(variant)}
                className={`
                  px-3 py-1.5 rounded-full text-sm font-medium
                  transition-all duration-200
                  ${
                    selectedVariant?.id === variant.id
                      ? "bg-[var(--accent)] text-[var(--bg-deep)]"
                      : "bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--bg-subtle)] hover:border-[var(--accent)]"
                  }
                `}
              >
                {variant.name}
              </button>
            ))}
          </div>
        )}

        {/* Quantity & Add Button */}
        <div className="flex items-center gap-3">
          {/* Quantity Controls */}
          <div className="flex items-center gap-2 bg-[var(--bg-elevated)] rounded-xl p-1">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-2 rounded-lg hover:bg-[var(--bg-subtle)] transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-8 text-center font-medium">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-2 rounded-lg hover:bg-[var(--bg-subtle)] transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Add Button */}
          <Button
            onClick={handleAddToCart}
            className="flex-1"
            size="sm"
          >
            <AnimatePresence mode="wait">
              {showAdded ? (
                <motion.span
                  key="added"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  Added! ✓
                </motion.span>
              ) : (
                <motion.span
                  key="add"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  Add
                </motion.span>
              )}
            </AnimatePresence>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
