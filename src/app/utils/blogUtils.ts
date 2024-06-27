import { BlogCardData } from "../blog/types";
import { BlogTagType } from "../blog/types";

// Sort blogs by date in descending order
export function sortBlogs(blogs: BlogCardData[]): BlogCardData[] {
  return blogs.sort((a, b) => b.blogDate.getTime() - a.blogDate.getTime());
}

// Format a date object into a human-readable string
export function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  return date.toLocaleDateString("en-GB", options);
}

// Map of styles for different blog tags
export const styleMap: {
  [key in BlogTagType]: { tagClassName: string; borderColor: string };
} = {
  Family: { tagClassName: "familyTag", borderColor: "var(--clr-red)" },
  Educators: { tagClassName: "educatorsTag", borderColor: "var(--clr-blue)" },
  Parents: { tagClassName: "parentsTag", borderColor: "var(--clr-yellow)" },
  Community: { tagClassName: "communityTag", borderColor: "var(--clr-purp)" },
};

// Get CSS styles for a given blog tag
export function getTagStyles(tag: BlogTagType) {
  return (
    styleMap[tag] || {
      tagClassName: "defaultTag",
      borderColor: "var(--clr-default)",
    }
  );
}
