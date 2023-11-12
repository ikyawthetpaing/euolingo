import { SiteConfig } from "@/types";

const ASSETS_URL =
  "https://raw.githubusercontent.com/ikyawthetpaing/euolingo/main/assets";

export const siteConfig: SiteConfig = {
  name: "Euolingo",
  title: "Euolingo: The best way to learn a language",
  description: "The free, fun, and effective way to learn a language.",
  url: "https://euolingo.vercel.app",
  author: {
    name: "Kyaw Thet Paing",
    username: "@ikyawthetpaing",
    url: "https://ikyawthetpaing.vercel.app",
  },
  ogImage: `${ASSETS_URL}/public/og.png`,
  appleTouchIcon: `${ASSETS_URL}/public/apple-touch-icon.png`,
  icon16x16: `${ASSETS_URL}/public/favicon-16x16.png`,
  icon32x32: `${ASSETS_URL}/public/favicon-32x32.png`,
  manifest: `${ASSETS_URL}/public/site.webmanifest`,
};
