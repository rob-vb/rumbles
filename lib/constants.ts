import { BusinessInfo, BusinessHours } from "@/types/menu";

export const BUSINESS_HOURS: BusinessHours[] = [
  { day: "Monday", open: "11:00", close: "22:15" },
  { day: "Tuesday", open: "11:00", close: "22:15" },
  { day: "Wednesday", open: "11:00", close: "22:15" },
  { day: "Thursday", open: "11:00", close: "22:15" },
  { day: "Friday", open: "11:00", close: "22:15" },
  { day: "Saturday", open: "11:00", close: "22:15" },
  { day: "Sunday", open: "12:00", close: "22:15" },
];

export const BUSINESS_INFO: BusinessInfo = {
  name: "Rumbles Fish Bar",
  address: "78 London Rd, Sawbridgeworth, CM21 9JN",
  phone: "01279 902532",
  email: "info@rumblesfishbar.co.uk",
  hours: BUSINESS_HOURS,
  hygieneRating: 5,
  googleMapsUrl:
    "https://www.google.com/maps/place/Rumbles+Fish+Bar/@51.8148,-0.1583,17z",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.123456789!2d-0.1583!3d51.8148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRumbles%20Fish%20Bar!5e0!3m2!1sen!2suk!4v1234567890",
  social: {
    facebook: "https://www.facebook.com/pages/RUMBLES-FISH-BAR-3-LIMITED/161050354507594",
    tripadvisor:
      "https://www.tripadvisor.com/Restaurant_Review-g656895-d6610856-Reviews-Rumbles_Fish_Bar-Sawbridgeworth_Hertfordshire_England.html",
  },
};

export const PAYMENT_METHODS = [
  { name: "Visa", icon: "/icons/visa.svg" },
  { name: "Mastercard", icon: "/icons/mastercard.svg" },
  { name: "Maestro", icon: "/icons/maestro.svg" },
  { name: "Visa Electron", icon: "/icons/visa-electron.svg" },
];

// Check if currently open
export function isCurrentlyOpen(): boolean {
  const now = new Date();
  const day = now.toLocaleDateString("en-GB", { weekday: "long" });
  const currentTime = now.getHours() * 100 + now.getMinutes();

  const todayHours = BUSINESS_HOURS.find((h) => h.day === day);
  if (!todayHours || todayHours.isClosed) return false;

  const [openHour, openMin] = todayHours.open.split(":").map(Number);
  const [closeHour, closeMin] = todayHours.close.split(":").map(Number);

  const openTime = openHour * 100 + openMin;
  const closeTime = closeHour * 100 + closeMin;

  return currentTime >= openTime && currentTime <= closeTime;
}

// Format price for display
export function formatPrice(price: number): string {
  return `£${price.toFixed(2)}`;
}

// Navigation links
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

// Mobile nav links with icons
export const MOBILE_NAV_LINKS = [
  { label: "Home", href: "/", icon: "home" },
  { label: "Menu", href: "/menu", icon: "utensils" },
  { label: "Cart", href: "/cart", icon: "shopping-bag" },
  { label: "Contact", href: "/contact", icon: "phone" },
];
