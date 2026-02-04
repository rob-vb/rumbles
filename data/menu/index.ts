import { MenuItem } from "@/types/menu";
import { fishItems } from "./fish";
import { kebabItems } from "./kebabs";
import { extrasItems } from "./extras";
import { drinksItems } from "./drinks";
import { BURGERS_ITEMS } from "./burgers";
import { SMASH_BURGERS_ITEMS } from "./smash-burgers";
import { PIES_ITEMS } from "./pies";
import { SEAFOOD_BASKET_ITEMS } from "./seafood-basket";
import { USA_FRIED_CHICKEN_ITEMS } from "./usa-fried-chicken";
import { VEGGIE_WRAPS_ITEMS } from "./veggie-wraps";
import { KIDS_MEAL_ITEMS } from "./kids-meal";
import { DESSERTS_ITEMS } from "./desserts";
import { BEERS_ITEMS } from "./beers";

// All menu items by category
export const menuByCategory: Record<string, MenuItem[]> = {
  fish: fishItems,
  kebabs: kebabItems,
  extras: extrasItems,
  drinks: drinksItems,
  burgers: BURGERS_ITEMS,
  "smash-burgers": SMASH_BURGERS_ITEMS,
  pies: PIES_ITEMS,
  "seafood-basket": SEAFOOD_BASKET_ITEMS,
  "usa-fried-chicken": USA_FRIED_CHICKEN_ITEMS,
  "veggie-wraps": VEGGIE_WRAPS_ITEMS,
  "kids-meal": KIDS_MEAL_ITEMS,
  desserts: DESSERTS_ITEMS,
  beers: BEERS_ITEMS,
};

// Get items by category slug
export function getMenuItemsByCategory(categorySlug: string): MenuItem[] {
  return menuByCategory[categorySlug] || [];
}

// Get a specific menu item by ID
export function getMenuItemById(id: string): MenuItem | undefined {
  for (const items of Object.values(menuByCategory)) {
    const item = items.find((i) => i.id === id);
    if (item) return item;
  }
  return undefined;
}

// Get all menu items (flat array)
export function getAllMenuItems(): MenuItem[] {
  return Object.values(menuByCategory).flat();
}

// Get popular items
export function getPopularItems(): MenuItem[] {
  return getAllMenuItems().filter((item) => item.isPopular);
}

// Search menu items
export function searchMenuItems(query: string): MenuItem[] {
  const lowercaseQuery = query.toLowerCase();
  return getAllMenuItems().filter(
    (item) =>
      item.name.toLowerCase().includes(lowercaseQuery) ||
      item.description?.toLowerCase().includes(lowercaseQuery)
  );
}

// Re-export individual category items
export { fishItems } from "./fish";
export { kebabItems } from "./kebabs";
export { extrasItems } from "./extras";
export { drinksItems } from "./drinks";
export { BURGERS_ITEMS } from "./burgers";
export { SMASH_BURGERS_ITEMS } from "./smash-burgers";
export { PIES_ITEMS } from "./pies";
export { SEAFOOD_BASKET_ITEMS } from "./seafood-basket";
export { USA_FRIED_CHICKEN_ITEMS } from "./usa-fried-chicken";
export { VEGGIE_WRAPS_ITEMS } from "./veggie-wraps";
export { KIDS_MEAL_ITEMS } from "./kids-meal";
export { DESSERTS_ITEMS } from "./desserts";
export { BEERS_ITEMS } from "./beers";
