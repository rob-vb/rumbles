// Menu item variant (for items with multiple sizes/options)
export interface MenuItemVariant {
  id: string;
  name: string; // e.g., "Small", "Medium", "Large", "Wrap"
  price: number;
}

// Individual menu item
export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  image?: string;
  categoryId: string;
  price?: number; // Single price (if no variants)
  variants?: MenuItemVariant[]; // Multiple price options
  isVegetarian?: boolean;
  isPopular?: boolean;
  isNew?: boolean;
}

// Menu category
export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image: string;
  itemCount?: number;
}

// Cart item (includes selected variant if applicable)
export interface CartItem {
  id: string; // Unique cart item ID
  menuItemId: string;
  name: string;
  image?: string;
  variantId?: string;
  variantName?: string;
  price: number;
  quantity: number;
}

// Cart state
export interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

// Cart actions
export type CartAction =
  | { type: "ADD_ITEM"; payload: Omit<CartItem, "id"> }
  | { type: "REMOVE_ITEM"; payload: string } // cart item id
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" };

// Review
export interface Review {
  id: string;
  name: string;
  rating: number;
  title: string;
  body: string;
  date: string;
}

// Contact form
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

// Reservation form
export interface ReservationFormData {
  name: string;
  phone: string;
  email: string;
  guests: number;
  date: string;
  time: string;
  duration?: string;
  specialRequests?: string;
}

// Review form
export interface ReviewFormData {
  name: string;
  email: string;
  rating: number;
  title: string;
  body: string;
}

// Business hours
export interface BusinessHours {
  day: string;
  open: string;
  close: string;
  isClosed?: boolean;
}

// Business info
export interface BusinessInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: BusinessHours[];
  hygieneRating: number;
  googleMapsUrl: string;
  googleMapsEmbed: string;
  social: {
    facebook: string;
    tripadvisor: string;
  };
}
