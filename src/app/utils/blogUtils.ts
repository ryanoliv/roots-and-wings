import { BlogCardData } from "../blog/types";

export function sortBlogs(blogs: BlogCardData[]): BlogCardData[] {
  return blogs.sort((a, b) => b.blogDate.getTime() - a.blogDate.getTime());
}

export function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  return date.toLocaleDateString("en-GB", options);
}