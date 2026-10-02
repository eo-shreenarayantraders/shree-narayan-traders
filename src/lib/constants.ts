export const SITE_CONFIG = {
  name: "Shree Narayan Traders",
  description:
    "TODO: Add a compelling one-line description of Shree Narayan Traders and its core services.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://TODO-add-production-url.com",
  ogImage: "/images/og-image.jpg",

  // TODO: Add verified business information before launch
  contact: {
    email: "TODO@example.com",
    phone: "TODO",
    address: "TODO",
  },

  social: {
    twitter: "TODO",
    linkedin: "TODO",
    instagram: "TODO",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
] as const;

export type NavLink = (typeof NAV_LINKS)[number];
