import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://thedecorflow.com",
      lastModified: new Date(),
    },
  ];
}