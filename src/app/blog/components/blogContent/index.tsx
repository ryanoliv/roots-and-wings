"use client";

import React, { useState, useMemo } from "react";
import styles from '../../Blog.module.scss'
import BlogCard from "../blog-card";
import { blogMetadata } from "../../blogMetadata";
import { sortBlogs } from "@/app/utils/blogUtils";

interface BlogContentProps {
  tags: string[];
}

const BlogContent: React.FC<BlogContentProps> = ({ tags }) => {
  const [filter, setFilter] = useState("All Articles");

  // Sort blogs by date to find latest post
  const sortedBlogs = useMemo(() => sortBlogs(blogMetadata), []);
  // Get latest blog post
  const latestBlog = sortedBlogs[0];

  const filteredBlogs = blogMetadata.filter((blog) => {
    return filter === "All Articles" || blog.blogTag === filter;
  });

  return (
    <>
      <div className="flex flex-col">
        <h1 className={styles.blogPageH1}>Beyond the Books: The Roots & Wings Blog</h1>
        <p className="text-center md:text-left">
          We post new articles every month, so stay tuned.
        </p>
      </div>
      {latestBlog && (
        <div className="latest-blog-post">
          <BlogCard {...latestBlog} isLatest={true} />
        </div>
      )}
      <div className="flex flex-col gap-md">
        <div className="flex gap-0 md:gap-sm blog-filters">
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
        <div className="flex flex-col md:flex-row gap-md md:gap-xs xl:gap-md">
          {filteredBlogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogContent;
