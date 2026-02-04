"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, UtensilsCrossed, ShoppingBag, Phone } from "lucide-react";
import { useCart } from "@/context/CartContext";

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Menu", href: "/menu", icon: UtensilsCrossed },
  { label: "Cart", href: "/cart", icon: ShoppingBag },
  { label: "Contact", href: "/contact", icon: Phone },
];

export function MobileNav() {
  const pathname = usePathname();
  const { itemCount } = useCart();

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 300, damping: 30 }}
      className="
        md:hidden fixed bottom-4 left-4 right-4 z-50
        glass-strong rounded-full
        safe-bottom
      "
    >
      <div className="flex items-center justify-around px-2 py-3">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          const isCart = item.href === "/cart";

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                relative flex flex-col items-center gap-1 p-2 rounded-2xl
                transition-all duration-200
                ${isActive
                  ? "text-[var(--accent)]"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }
              `}
            >
              <div className="relative">
                <Icon
                  className={`w-6 h-6 ${isActive ? "fill-[var(--accent)]" : ""}`}
                  strokeWidth={isActive ? 2.5 : 2}
                />

                {/* Cart Badge */}
                {isCart && itemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="
                      absolute -top-2 -right-2
                      min-w-[18px] h-[18px] px-1 rounded-full
                      bg-[var(--cta)] text-white
                      text-[10px] font-bold
                      flex items-center justify-center
                    "
                  >
                    {itemCount > 9 ? "9+" : itemCount}
                  </motion.span>
                )}
              </div>

              <span className="text-[10px] font-medium">{item.label}</span>

              {/* Active indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-1 w-1 h-1 rounded-full bg-[var(--accent)]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}
