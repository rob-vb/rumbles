import { MenuItem } from "@/types/menu";

export const VEGGIE_WRAPS_ITEMS: MenuItem[] = [
  {
    id: "veggie-falafel-wrap",
    name: "Falafel Wrap",
    description: "Homemade falafel with hummus, salad and tahini dressing in a soft wrap",
    categoryId: "veggie-wraps",
    price: 6.50,
    isPopular: true,
    isVegetarian: true,
  },
  {
    id: "veggie-halloumi-wrap",
    name: "Halloumi Wrap",
    description: "Grilled halloumi cheese with fresh salad and mint yogurt dressing",
    categoryId: "veggie-wraps",
    price: 7.00,
    isPopular: true,
    isVegetarian: true,
  },
  {
    id: "veggie-salad-wrap",
    name: "Mixed Salad Wrap",
    description: "Fresh mixed salad with house dressing in a soft tortilla",
    categoryId: "veggie-wraps",
    price: 5.00,
    isVegetarian: true,
  },
  {
    id: "veggie-cheese-wrap",
    name: "Cheese Wrap",
    description: "Melted cheese with salad in a toasted wrap",
    categoryId: "veggie-wraps",
    price: 5.50,
    isVegetarian: true,
  },
  {
    id: "veggie-hummus-wrap",
    name: "Hummus & Salad Wrap",
    description: "Creamy hummus with fresh crunchy salad",
    categoryId: "veggie-wraps",
    price: 5.50,
    isVegetarian: true,
  },
  {
    id: "veggie-mushroom-wrap",
    name: "Mushroom Wrap",
    description: "Sautéed mushrooms with garlic, onions and melted cheese",
    categoryId: "veggie-wraps",
    price: 6.00,
    isVegetarian: true,
  },
];
