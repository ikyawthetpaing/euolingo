import config from "@/app.config";
import { AppConfig } from "@/types";

export const appConfig: AppConfig = {
  name: config.name,
  title: `${config.name}: The best way to learn a language`,
  description: config.description,
  keywords: ["Euolingo", "Language", "Learning", "App"],
  author: "@ikyawthetpaing",
};
