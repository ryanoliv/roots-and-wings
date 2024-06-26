import Link from "next/link";
import Image from "next/image";
import styles from "../../Blog.module.scss";
import { BlogTagType, BlogCardData } from "../../types";
import { formatDate } from "@/app/utils/blogUtils";

function getTagStyles(tag: BlogTagType): {
  tagClassName: string;
  borderColor: string;
} {
  const styleMap: {
    [key in BlogTagType]: { tagClassName: string; borderColor: string };
  } = {
    Family: { tagClassName: "familyTag", borderColor: "var(--clr-red)" },
    Educators: { tagClassName: "educatorsTag", borderColor: "var(--clr-blue)" },
    Parents: { tagClassName: "parentsTag", borderColor: "var(--clr-yellow)" },
    Community: { tagClassName: "communityTag", borderColor: "var(--clr-purp)" },
  };
  return (
    styleMap[tag] || {
      tagClassName: "defaultTag",
      borderColor: "var(--clr-default)",
    }
  );
}

export default function BlogCard({
  slug,
  blogImg,
  alt,
  blogTag,
  blogTitle,
  blogSummary,
  blogAuthor,
  blogDate,
  blogTimeToRead,
  isLatest = false,
}: BlogCardData) {
  const { tagClassName, borderColor } = getTagStyles(blogTag);
  const formattedDate = formatDate(blogDate);
  const cardClassName = isLatest
    ? `${styles.blogCard} ${styles.latest}`
    : styles.blogCard;

  return (
    <div style={{ "--hover-border-color": borderColor } as React.CSSProperties}>
      <Link href={`/blog/posts/${slug}`} className={styles.blogCardLink}>
        <div className={cardClassName}>
          <div className={styles.blogCardImage}>
            <Image
              src={blogImg}
              alt={alt}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.blogCardText}>
            {isLatest ? (
              <span className={styles.latestPostTag}>Latest Post</span>
            ) : (
              <span className={`${styles.blogCardTag} ${styles[tagClassName]}`}>
                {blogTag}
              </span>
            )}
            <div className="flex flex-col gap-sm">
              <div className="flex flex-col gap-xs">
                <h3 className={styles.blogCardTitle}>{blogTitle}</h3>
                <p className={styles.blogCardSummary}>{blogSummary}</p>
              </div>
              <div className="flex flex-col">
                <h4 className={styles.blogCardAuthor}>{blogAuthor}</h4>
                <h5 className={styles.blogCardDate}>
                  {formattedDate} • {blogTimeToRead} min read
                </h5>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
