import { BlogTagType } from "./types";

export const blogMetadata: Array<{
  slug: string;
  blogImg: string;
  alt: string;
  blogTag: BlogTagType;
  blogTitle: string;
  blogSummary: string;
  blogAuthor: string;
  blogDate: Date;
  blogTimeToRead: string;
  blogUrl: string;
}> = [
  {
    slug: "self-regulation-tools-for-mindful-parenting",
    blogImg: "/images/blog-posts/self-regulation.jpg",
    alt: "family sitting on couch meditating",
    blogTag: "Family" as BlogTagType,
    blogTitle:
      "Mastering the Art of Balance: Self-Regulation Tools for Mindful Parenting",
    blogSummary:
      "Fun self-regulation tricks for super parents creating happy, mindful families.",
    blogAuthor: "Ally Boyes-Varley",
    blogDate: new Date("2024-04-09"),
    blogTimeToRead: "4",
    blogUrl: '/blog/posts/self-regulation-tools-for-mindful-parenting'
  },
  {
    slug: "transforming-learning-through-joyful-engagement",
    blogImg: "/images/blog-posts/embracing-play.jpg",
    alt: "two kids playing on grass",
    blogTag: "Educators" as BlogTagType,
    blogTitle:
      "Embracing Play: Transforming Learning through Joyful Engagement",
    blogSummary: "Playtime Power! Unlocking fun and smarts in every game!",
    blogAuthor: "Ally Boyes-Varley",
    blogDate: new Date("2024-04-16"),
    blogTimeToRead: "4",
    blogUrl: '/blog/posts/transforming-learning-through-joyful-engagement'
  },
  {
    slug: "the-science-of-self-esteem-in-child-development",
    blogImg: "/images/blog-posts/self-esteem.jpg",
    alt: "parents and child learning together",
    blogTag: "Parents" as BlogTagType,
    blogTitle: "The Science of Self-Esteem in Child Development",
    blogSummary:
      "Boost kids' confidence! Cool, smart ways to build self-esteem for life's big adventures!",
    blogAuthor: "Ally Boyes-Varley",
    blogDate: new Date("2024-04-17"),
    blogTimeToRead: "2",
    blogUrl: '/blog/posts/the-science-of-self-esteem-in-child-development'
  },
];
