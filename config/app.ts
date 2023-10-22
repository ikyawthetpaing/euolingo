import config from "@/app.config";

type AppConfig = {
  name: string;
  title: string;
  description: string | undefined;
};
export const appConfig: AppConfig = {
  name: config.name,
  title: `${config.name}: The best way to learn a language`,
  description: config.description,
};
