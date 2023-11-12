import Head from "expo-router/head";

import { siteConfig } from "@/config/site";

interface Props {
  title?: string;
  description?: string;
}

export function Metadata({ title, description }: Props) {
  return (
    <Head>
      <title>{title ? `${title} - ${siteConfig.name}` : siteConfig.name}</title>
      <meta
        name="description"
        content={description ? description : siteConfig.description}
      />
      <link rel="author" href={siteConfig.author.url} />
      <meta name="author" content={siteConfig.author.name} />
      <meta property="og:title" content={siteConfig.title} />
      <meta property="og:description" content={siteConfig.description} />
      <meta property="og:url" content={siteConfig.url} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="2400" />
      <meta property="og:image:height" content="1260" />
      <meta property="og:image" content={siteConfig.ogImage} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={siteConfig.author.username} />
      <meta name="twitter:title" content={siteConfig.title} />
      <meta name="twitter:description" content={siteConfig.description} />
      <meta name="twitter:image" content={siteConfig.ogImage} />
      <meta name="twitter:site" content={siteConfig.author.username} />
      <meta name="apple-mobile-web-app-title" content={siteConfig.name} />
      <meta name="application-name" content={siteConfig.name} />
    </Head>
  );
}
