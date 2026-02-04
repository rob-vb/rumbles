import { MenuItem } from "@/types/menu";

export const BURGERS_ITEMS: MenuItem[] = [
  {
    id: "burger-quarter",
    name: "1/4 Pounder",
    description: "Classic quarter pounder beef burger with fresh salad",
    categoryId: "burgers",
    price: 5.50,
    isPopular: true,
  },
  {
    id: "burger-half",
    name: "1/2 Pounder",
    description: "Double beef patty burger for bigger appetites",
    categoryId: "burgers",
    price: 6.90,
    isPopular: true,
  },
  {
    id: "burger-veggie",
    name: "Vegetarian Burger",
    description: "Delicious meat-free burger with fresh salad",
    categoryId: "burgers",
    price: 5.50,
    isVegetarian: true,
  },
  {
    id: "burger-bacon",
    name: "Bacon Burger",
    description: "Beef burger topped with crispy bacon rashers",
    categoryId: "burgers",
    price: 6.90,
  },
  {
    id: "burger-chicken",
    name: "Chicken Burger",
    description: "Breaded chicken fillet in a soft bun",
    categoryId: "burgers",
    price: 5.50,
  },
  {
    id: "burger-chicken-wrap",
    name: "Chicken Wrap Burger",
    description: "Chicken fillet served in a soft tortilla wrap",
    categoryId: "burgers",
    price: 6.00,
  },
];
