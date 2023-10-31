import { NavItem } from "@/types";

type CourseConfig = {
  sidebarNavItems: NavItem[];
  mobileNavItems: NavItem[];
};

export const courseConfig: CourseConfig = {
  sidebarNavItems: [
    {
      icon: "home",
      label: "Learn",
      href: "/learn",
    },
    {
      icon: "languageSquare",
      label: "Characters",
      href: "/characters",
    },
    {
      icon: "shieldStar",
      label: "Leaderboards",
      href: "/leaderboards",
    },
    {
      icon: "box",
      label: "Quests",
      href: "/quests",
    },
    {
      icon: "shop",
      label: "Shop",
      href: "/shop",
    },
    {
      icon: "profile",
      label: "Profile",
      href: "/profile",
    },
  ],
  mobileNavItems: [
    {
      icon: "home",
      label: "Learn",
      href: "/learn",
    },
    {
      icon: "languageSquare",
      label: "Characters",
      href: "/characters",
    },
    {
      icon: "shieldStar",
      label: "Leaderboards",
      href: "/leaderboards",
    },
    {
      icon: "box",
      label: "Quests",
      href: "/quests",
    },
    {
      icon: "profile",
      label: "Profile",
      href: "/profile",
    },
  ],
};
