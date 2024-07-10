// import { MetadataRoute } from "next";
import { blogMetadata } from "./blog/blogMetadata";

interface SitemapFile {
  url: string;
  lastModified?: string | Date;
  changeFrequency?:
    | "weekly"
    | "monthly"
    | "always"
    | "hourly"
    | "daily"
    | "yearly"
    | "never";
  priority?: number;
}

export default function sitemap(): SitemapFile[] {
  const staticPages: SitemapFile[] = [
    {
      url: "https://rootsandwings.education",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://rootsandwings.education/about-us",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://rootsandwings.education/blog",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://rootsandwings.education/our-programme",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const blogPostEntries: SitemapFile[] = blogMetadata.map(
    (entry): SitemapFile => ({
      url: `https://rootsandwings.education${entry.blogUrl}`,
      lastModified: entry.blogDate.toISOString(),
      changeFrequency: "monthly",
      priority: 0.6,
    })
  );

  return [...staticPages, ...blogPostEntries];
}
