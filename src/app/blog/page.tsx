import { Metadata } from "next";
import BlogContent from "./components/blogContent";

import CTA from "../components/cta";

export const metadata: Metadata = {
  title: "Blog | Roots & Wings",
  description:
    "Explore our blog and read more on trending topics in the educational space.",
  openGraph: {
    title: "Blog | Roots & Wings",
    description:
      "Explore our blog and read more on trending topics in the educational space.",
    url: "https://www.rootsandwings.education/blog",
    siteName: "Blog | Roots & Wings",
  },
};

export default function BlogPage() {
  const tags = ["All Articles", "Parents", "Educators", "Family", "Community"];

  return (
    <section className="pt-xl">
      <div className="container flex flex-col gap-xl">
        <BlogContent tags={tags} />
      </div>
      <CTA />
    </section>
  );
}
