export interface NavigationSubItem {
  label: string;
  description?: string;
  href: string;
  icon?: string;
  badge?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationSubItem[];
}

export const navigation: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Free Oracles",
    href: "/game",
    children: [
      {
        label: "Free Tarot Oracle",
        description: "Interactive 3-Card Reading with High Astrologer Elena",
        href: "/game",
        icon: "🔮",
        badge: "100% Free",
      },
      {
        label: "Free Zodiac Finder",
        description: "Calculate Sun, Moon, Rising Sign & Cosmic Aura",
        href: "/zodiac",
        icon: "♈",
        badge: "100% Free",
      },
      {
        label: "78-Card Tarot Deck",
        description: "Rider-Waite-Smith astrological & esoteric encyclopedia",
        href: "/tarot",
        icon: "🃏",
      },
    ],
  },
  {
    label: "Services",
    href: "/#readings",
  },
  {
    label: "Articles",
    href: "/articles",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];