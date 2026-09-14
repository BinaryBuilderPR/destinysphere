export interface NavigationItem {
  label: string;
  href: string;
}

export const navigation: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "#readings",
  },
  {
    label: "Articles",
    href: "/articles",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];