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
  const baseUrl = "https://www.rootsandwings.education";

  const staticPages: SitemapFile[] = [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/our-programme`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const blogPostEntries: SitemapFile[] = blogMetadata.map(
    (entry): SitemapFile => ({
      url: `${baseUrl}${entry.blogUrl}`,
      lastModified: entry.blogDate.toISOString(),
      changeFrequency: "monthly",
      priority: 0.6,
    })
  );

  return [...staticPages, ...blogPostEntries];
}
