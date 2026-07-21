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
    label: "Readings",
    href: "/readings",
  },
  {
    label: "Articles",
    href: "/articles",
  },
  {
    label: "Compatibility",
    href: "/compatibility",
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