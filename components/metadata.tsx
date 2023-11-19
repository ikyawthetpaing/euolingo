import Head from "expo-router/head";

import { siteConfig } from "@/config/site";

interface Props {
  title?: string;
  description?: string;
}

export function Metadata({ title, description }: Props) {
  return (
    <Head>
      <title>
        {title ? `${title} - ${siteConfig.name}` : siteConfig.title}
      </title>
      <meta
        name="description"
        content={description ? description : siteConfig.description}
      />
    </Head>
  );
}
