"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Trash2, Plus, Minus, ChevronLeft } from "lucide-react";
import { EditorialHeading } from "@/components/decorative";
import { Button } from "@/components/ui";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/constants";

export default function CartPage() {
  const { items, total, itemCount, removeItem, updateQuantity, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[var(--bg-surface)] flex items-center justify-center">
            <ShoppingBag className="w-12 h-12 text-[var(--text-muted)]" />
          </div>
          <h1 className="text-2xl font-display font-semibold mb-2">
            Your Cart is Empty
          </h1>
          <p className="text-[var(--text-muted)] mb-8">
            Looks like you haven&apos;t added anything yet.
          </p>
          <Link href="/menu">
            <Button size="lg">Browse Menu</Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container-custom">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link
              href="/menu"
              className="p-2 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <EditorialHeading as="h1">Your Cart</EditorialHeading>
          </div>
          <button
            onClick={clearCart}
            className="text-sm text-[var(--text-muted)] hover:text-red-400 transition-colors"
          >
            Clear All
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence mode="popLayout">
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20, height: 0 }}
                  className="
                    flex gap-4 p-4 rounded-2xl
                    bg-[var(--bg-surface)] border border-[var(--bg-subtle)]
                  "
                >
                  {/* Item Image Placeholder */}
                  <div className="w-20 h-20 flex-shrink-0 rounded-xl bg-[var(--bg-elevated)] flex items-center justify-center">
                    <span className="text-3xl opacity-50">🍽️</span>
                  </div>

                  {/* Item Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-semibold text-[var(--text-primary)]">
                          {item.name}
                        </h3>
                        {item.variantName && (
                          <p className="text-sm text-[var(--text-muted)]">
                            {item.variantName}
                          </p>
                        )}
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 rounded-lg text-[var(--text-muted)] hover:text-red-400 hover:bg-red-400/10 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 bg-[var(--bg-elevated)] rounded-xl p-1">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 rounded-lg hover:bg-[var(--bg-subtle)] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-medium text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 rounded-lg hover:bg-[var(--bg-subtle)] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Price */}
                      <span className="font-bold text-[var(--accent)]">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-[calc(var(--header-height)+2rem)]">
              <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--bg-subtle)]">
                <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-[var(--text-secondary)]">
                    <span>Subtotal ({itemCount} items)</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                  <div className="flex justify-between text-[var(--text-secondary)]">
                    <span>Collection Fee</span>
                    <span className="text-[var(--success)]">Free</span>
                  </div>
                  <div className="border-t border-[var(--bg-subtle)] pt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-[var(--accent)]">{formatPrice(total)}</span>
                    </div>
                  </div>
                </div>

                <Button fullWidth size="lg">
                  Proceed to Checkout
                </Button>

                <p className="mt-4 text-center text-xs text-[var(--text-muted)]">
                  Payment processing powered by OPTOMANY
                </p>
              </div>

              {/* Continue Shopping */}
              <Link
                href="/menu"
                className="
                  mt-4 block text-center
                  text-[var(--text-secondary)] hover:text-[var(--accent)]
                  transition-colors
                "
              >
                ← Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
