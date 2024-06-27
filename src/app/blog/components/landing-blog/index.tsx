import Link from "next/link";
import { blogMetadata } from "../../blogMetadata";
import { sortBlogs } from "@/app/utils/blogUtils";
import BlogCard from "../blog-card";
import { BlogCardData, BlogTagType } from "../../types";

export default function LandingBlog() {
  const sortedBlogs = sortBlogs(blogMetadata);

  return (
    <div className="container flex flex-col justify-center items-center gap-xl">
      <div className="flex flex-col gap-xs items-center">
        <h2>Explore Our Blog</h2>
        <p>
          Keep up to date with the latest in child development news and methods.
        </p>
      </div>
      <div className="flex gap-sm justify-center">
        {sortedBlogs.map((card, index) => (
          <BlogCard
            key={index}
            slug={card.slug}
            blogImg={card.blogImg}
            alt={card.alt}
            blogTag={card.blogTag as BlogTagType}
            blogTitle={card.blogTitle}
            blogSummary={card.blogSummary}
            blogAuthor={card.blogAuthor}
            blogDate={card.blogDate}
            blogTimeToRead={card.blogTimeToRead}
          />
        ))}
      </div>
      <Link href="/blog" className="btn btn-primary">
        View All Posts
      </Link>
    </div>
  );
}
