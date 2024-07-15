import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../../Blog.module.scss";
import { blogMetadata } from "../../blogMetadata";
import blogContents from "../../blogContents.json";
import ArticleCTA from "../../components/articlecta";
import { BlogCardData } from "../../types";
import { formatDate, getTagStyles } from "@/app/utils/blogUtils";
import LinkedInShareButton from "../../components/linkedinsharebutton";
import DownloadableResource from "../../components/downloadableresource";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogMetadata.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Post Not Found | Roots & Wings",
      description: "The requested blog post could not be found",
    };
  }

  return {
    title: `${post.blogTitle} | Roots & Wings`,
    description: post.blogSummary,
    openGraph: {
      url: `https://www.rootsandwings.education/blog/posts/${post.slug}`,
      title: post.blogTitle,
      description: post.blogSummary,
    },
    alternates: {
      canonical: `https://www.rootsandwings.education/blog/posts/${post.slug}`,
    },
  };
}

interface BlogSection {
  title: string;
  content: (string | { subtitle: string; list: string[] })[];
}

interface BlogContent {
  slug: string;
  sections: BlogSection[];
}

export async function generateStaticParams() {
  // Simulate fetching data
  const posts = Promise.resolve(blogMetadata);

  const paramsList = (await posts).map((post) => ({
    slug: post.slug,
  }));

  return paramsList;
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogMetadata.find((p) => p.slug === params.slug);
  const content = (blogContents as BlogContent[]).find(
    (c) => c.slug === params.slug
  );

  if (!post) {
    return <div>Post not found</div>;
  }

  const formattedDate = formatDate(post.blogDate);
  const { tagClassName } = getTagStyles(post.blogTag);
  const shareUrl = `https://www.rootsandwings.education/blog/posts/${post.slug}`;

  return (
    <>
      <div
        className="container flex flex-col gap-lg md:gap-xl mt-xl"
        style={{ maxWidth: "750px", marginInline: "auto" }}
      >
        <Link href="/blog" className="flex gap-xs">
          <Image
            src="/svgs/drop-down-arrow.svg"
            alt="back arrow"
            width={9}
            height={6}
            style={{ transform: "rotate(90deg)" }}
          />
          <span className="font-bold">All Posts</span>
        </Link>
        <div className="flex flex-col gap-md items-start">
          <span className={`${styles.blogCardTag} ${styles[tagClassName]}`}>
            {post.blogTag}
          </span>
          <h1 className={styles.blogPageH1}>{post.blogTitle}</h1>
        </div>
        <div className="flex flex-col gap-md">
          <div className={styles.blogPostImgContainer}>
            <Image
              src={post.blogImg}
              alt={post.alt}
              fill
              style={{
                objectFit: "cover",
                borderRadius: "24px",
                border: "1px solid var(--border)",
                boxShadow: "var(--card-shadow)",
              }}
            />
          </div>
          <div className="flex gap-0 justify-between md:justify-start md:gap-lg lg:gap-xl">
            <div className="flex flex-col gap-xs">
              <span className="blog-details-title">Written by</span>
              <span className="font-bold blog-details-subtitle">
                {post.blogAuthor}
              </span>
            </div>
            <div className="flex flex-col gap-xs">
              <span className="blog-details-title">Published On</span>
              <span className="font-bold blog-details-subtitle">
                {formattedDate}
              </span>
            </div>
            <div className="flex flex-col gap-xs">
              <span className="blog-details-title">Read Time</span>
              <span className="font-bold blog-details-subtitle">
                {post.blogTimeToRead} minutes
              </span>
            </div>
          </div>
        </div>
        <div>
          {content && (
            <article className="flex flex-col gap-xl mb-xl">
              {content.sections.map((section, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-xs text-center md:text-left"
                >
                  <h2>{section.title}</h2>
                  {section.content.map((item, itemIndex) =>
                    typeof item === "string" ? (
                      <p key={itemIndex}>{item}</p>
                    ) : (
                      <div key={itemIndex}>
                        <h3>{item.subtitle}</h3>
                        <ul className="list-disc ml-sm my-xs">
                          {item.list.map((listItem, listIndex) => (
                            <li key={listIndex}>{listItem}</li>
                          ))}
                        </ul>
                      </div>
                    )
                  )}
                </div>
              ))}
            </article>
          )}
          <div className="flex flex-col gap-sm">
            <div
              style={{
                width: "100%",
                height: "0.0625rem",
                backgroundColor: "var(--border)",
              }}
            ></div>
            <div className="flex justify-between w-full">
              <div className="flex flex-col gap-xs items-start">
                <span>Download our resource</span>
                <DownloadableResource />
                {/* <div
                  style={{
                    width: "2.25rem",
                    height: "2.25rem",
                    borderRadius: "50%",
                    border: "0.5px solid var(--clr-black)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </div> */}
              </div>
              <div className="flex flex-col items-end gap-xs text-right">
                <span>Share this post</span>
                <LinkedInShareButton url={shareUrl} title={post.blogTitle} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ArticleCTA />
    </>
  );
}
