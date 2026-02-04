import { Category } from "@/types/menu";

export const CATEGORIES: Category[] = [
  {
    id: "fish",
    name: "Fish",
    slug: "fish",
    description: "Our signature fish, freshly battered and fried to golden perfection",
    image: "/images/categories/fish.jpg",
    itemCount: 12,
  },
  {
    id: "kebabs",
    name: "Kebabs",
    slug: "kebabs",
    description: "Authentic doner, shish, and kofte kebabs with fresh salad",
    image: "/images/categories/kebabs.jpg",
    itemCount: 15,
  },
  {
    id: "burgers",
    name: "Burgers",
    slug: "burgers",
    description: "Classic quarter pounder burgers with all the trimmings",
    image: "/images/categories/burgers.jpg",
    itemCount: 6,
  },
  {
    id: "smash-burgers",
    name: "Smash Burgers",
    slug: "smash-burgers",
    description: "Premium smashed patties with gourmet toppings, wings, and loaded fries",
    image: "/images/categories/smash-burgers.jpg",
    itemCount: 16,
  },
  {
    id: "pies",
    name: "Pies",
    slug: "pies",
    description: "Traditional British pies, perfect with chips and gravy",
    image: "/images/categories/pies.jpg",
    itemCount: 5,
  },
  {
    id: "seafood-basket",
    name: "Seafood Basket",
    slug: "seafood-basket",
    description: "Mixed seafood platters for the ultimate catch",
    image: "/images/categories/seafood.jpg",
    itemCount: 6,
  },
  {
    id: "usa-fried-chicken",
    name: "Fried Chicken",
    slug: "usa-fried-chicken",
    description: "American-style crispy fried chicken",
    image: "/images/categories/chicken.jpg",
    itemCount: 10,
  },
  {
    id: "veggie-wraps",
    name: "Veggie Wraps",
    slug: "veggie-wraps",
    description: "Delicious vegetarian wraps and options",
    image: "/images/categories/veggie.jpg",
    itemCount: 6,
  },
  {
    id: "extras",
    name: "Extras",
    slug: "extras",
    description: "Sides, sauces, and all the extras you need",
    image: "/images/categories/extras.jpg",
    itemCount: 20,
  },
  {
    id: "kids-meal",
    name: "Kids Meal",
    slug: "kids-meal",
    description: "Smaller portions perfect for little ones",
    image: "/images/categories/kids.jpg",
    itemCount: 6,
  },
  {
    id: "desserts",
    name: "Desserts",
    slug: "desserts",
    description: "Sweet treats to finish your meal",
    image: "/images/categories/desserts.jpg",
    itemCount: 6,
  },
  {
    id: "drinks",
    name: "Drinks",
    slug: "drinks",
    description: "Soft drinks, cans, and bottles",
    image: "/images/categories/drinks.jpg",
    itemCount: 19,
  },
  {
    id: "beers",
    name: "Beers",
    slug: "beers",
    description: "Selection of bottled beers and ciders",
    image: "/images/categories/beers.jpg",
    itemCount: 7,
  },
];

// Get featured categories for homepage (6 most popular)
export const FEATURED_CATEGORIES = CATEGORIES.filter((cat) =>
  ["fish", "kebabs", "burgers", "usa-fried-chicken", "kids-meal", "drinks"].includes(cat.id)
);

// Get category by slug
export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((cat) => cat.slug === slug);
}

// Get category by ID
export function getCategoryById(id: string): Category | undefined {
  return CATEGORIES.find((cat) => cat.id === id);
}
