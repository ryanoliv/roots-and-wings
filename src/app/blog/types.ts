export type BlogTagType = "Parents" | "Educators" | "Family" | "Community";



export interface BlogCardData {
  slug: string;
  blogImg: string;
  alt: string;
  blogTag: BlogTagType;
  blogTitle: string;
  blogSummary: string;
  blogAuthor: string;
  blogDate: Date;
  blogTimeToRead: string;
  isLatest?: boolean;
}
