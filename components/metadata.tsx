import Head from "expo-router/head";

import { appConfig } from "@/config/app";

interface Props {
  title?: string;
  description?: string;
}

export function Metadata({ title, description }: Props) {
  return (
    <Head>
      <title>{title ? `${title} - ${appConfig.name}` : appConfig.name}</title>
      <meta
        name="description"
        content={description ? description : appConfig.description}
      />
    </Head>
  );
}
