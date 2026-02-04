import { MenuItem } from "@/types/menu";

export const DESSERTS_ITEMS: MenuItem[] = [
  {
    id: "dessert-ice-cream",
    name: "Ice Cream Tub",
    description: "Creamy vanilla ice cream",
    categoryId: "desserts",
    price: 2.50,
  },
  {
    id: "dessert-chocolate-bar",
    name: "Deep Fried Mars Bar",
    description: "Classic Mars bar in crispy batter - a British chippy favourite",
    categoryId: "desserts",
    price: 3.50,
    isPopular: true,
  },
  {
    id: "dessert-battered-oreos",
    name: "Battered Oreos (4pc)",
    description: "Oreo cookies in sweet batter, deep fried to perfection",
    categoryId: "desserts",
    price: 3.95,
    isPopular: true,
  },
  {
    id: "dessert-churros",
    name: "Churros (6pc)",
    description: "Spanish-style churros with chocolate dipping sauce",
    categoryId: "desserts",
    price: 4.50,
  },
  {
    id: "dessert-cookie-dough",
    name: "Cookie Dough Bites",
    description: "Warm cookie dough bites with vanilla ice cream",
    categoryId: "desserts",
    price: 4.95,
  },
  {
    id: "dessert-apple-pie",
    name: "Apple Pie",
    description: "Warm apple pie slice",
    categoryId: "desserts",
    price: 2.50,
  },
];
