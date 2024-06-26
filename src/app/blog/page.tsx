"use client";

import { useState, useMemo } from "react";
import BlogCard from "./components/blog-card";
import { blogMetadata } from "./blogMetadata";
import { sortBlogs } from "../utils/blogUtils";
import CTA from "../components/cta";

export default function BlogPage() {
  const [filter, setFilter] = useState("All Articles");

  // Sort blogs by date to find latest post
  const sortedBlogs = useMemo(() => sortBlogs(blogMetadata), []);
  // Get latest blog post
  const latestBlog = sortedBlogs[0];

  const filteredBlogs = blogMetadata.filter((blog) => {
    return filter === "All Articles" || blog.blogTag === filter;
  });

  const tags = ["All Articles", "Parents", "Educators", "Family", "Community"];

  return (
    <section className="pt-xl">
      <div className="container flex flex-col gap-xl">
        <div className="flex flex-col">
          <h1 style={{ fontSize: "3.75rem" }}>
            Beyond the Books: The Roots & Wings Blog
          </h1>
          <p>We post new articles every month, so stay tuned.</p>
        </div>
        {latestBlog && (
          <div className="latest-blog-post">
            <BlogCard {...latestBlog} isLatest={true} />
          </div>
        )}
        <div className="flex flex-col gap-md">
          <div className="flex gap-sm blog-filters">
            {tags.map((tag) => (
              <button
                key={tag}
                className={`${filter === tag ? "active" : ""} blog-filter-btn`}
                onClick={() => setFilter(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
          <div className="flex gap-md">
            {filteredBlogs.map((blog, index) => (
              <BlogCard key={index} {...blog} />
            ))}
          </div>
        </div>
      </div>
      <CTA />
    </section>
  );
}
