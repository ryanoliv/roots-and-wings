"use client";

import Image from "next/image";
import Link from "next/link";
import { blogMetadata } from "../../blogMetadata";
import ArticleCTA from "../../components/articlecta";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://www.rootsandwings.education/"
    : "http://localhost:3000";

export default function TransformingLearning() {
  const post = blogMetadata.find(
    (post) => post.slug === "transforming-learning-through-joyful-engagement"
  );

  if (!post) return <div>Post not found</div>;

  const shareOnLinkedIn = () => {
    const blogUrl = post.blogUrl;
    const blogTitle = post.blogTitle;
    const fullBlogUrl = `${BASE_URL}${blogUrl}`;
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      fullBlogUrl
    )}&title=${encodeURIComponent(blogTitle)}`;
    window.open(linkedInUrl, "_blank");
  };
  return (
    <>
      <div className="container flex flex-col gap-xl mt-xl">
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
        <div className="flex flex-col gap-md">
          <span>Educators</span>
          <h1 style={{ fontSize: "3.75rem" }}>
            Embracing Play: Transforming Learning through Joyful Engagement
          </h1>
        </div>
        <div className="flex flex-col gap-md">
          <div
            className="relative"
            style={{ width: "1094px", height: "600px" }}
          >
            <Image
              src="/images/blog-posts/embracing-play.jpg"
              alt="two girls playing on grass"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex gap-lg">
            <div className="flex flex-col gap-xs">
              <span>Written by</span>
              <span className="font-bold">Ally Boyes Varley</span>
            </div>
            <div className="flex flex-col gap-xs">
              <span>Published On</span>
              <span className="font-bold">16 April 2024</span>
            </div>
            <div className="flex flex-col gap-xs">
              <span>Read Time</span>
              <span className="font-bold">4 Minutes</span>
            </div>
          </div>
        </div>
        <article
          className="flex flex-col mx-auto gap-lg"
          style={{ maxWidth: "750px" }}
        >
          <div className="flex flex-col gap-xs">
            <h2>Introduction</h2>
            <p>
              The educational landscape is rapidly changing, with significant
              emphasis on the shift from rigid, traditional instruction
              approaches to holistic, learner-centred ones. At the core of this
              revolution is the growing recognition of play&apos;s impact on the
              learning process. Drawing on the foundations set by Harvard&apos;s
              Pedagogy of Play and The Lego Foundation&apos;s approach to play,
              this article seeks to showcase how these two methods are turning
              pedagogical paradigms on their heads and bridging the gap between
              the science of learning and the joy of play.
            </p>
            <div className="flex flex-col gap-xs">
              <h3>In this article, you will learn:</h3>
              <ul className="list-disc ml-sm">
                <li>
                  How play revolutionises learning by engaging children
                  holistically and fostering deeper understanding through
                  creativity and exploration.
                </li>
                <li>
                  The crucial role of play in enhancing cognitive development
                  and emotional resilience, contributing to overall child
                  development.
                </li>
                <li>
                  Effective strategies for integrating play into educational
                  environments to enrich learning experiences across various
                  disciplines.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col">
            <h2>The Core Principles of Play-Based Learning</h2>
            <p>
              Harvard&apos;s Pedagogy of Play says that play is fundamental to
              human learning and development; instead of the old-school
              mentality that play is a time when children take a break from real
              learning, its advocates and those of the methods employed by The
              Lego Foundation say that play is an essential component of
              children&apos;s educational experiences. They believe children
              learn best in environments where they can explore, experiment, and
              exercise creativity. These approaches yield a deeper and more
              lasting understanding of the content learned by today&apos;s young
              people compared to the current teaching approaches.
            </p>
          </div>
          <div className="flex flex-col">
            <h2>Cognitive Development Through Play</h2>
            <p>
              The scientific research supporting the argument for the cognitive
              and emotional benefits of play is deep and wide. Experts like
              Gabor Maté and Bessel van der Kolk have delved into the way that
              play helps children develop vital emotional regulation and
              resilience, the absence of which can be a significant impediment
              to effective learning. But affective factors like these are only
              the beginning. Researchers have repeatedly discovered that
              children acquire and build their language capacity, creativity,
              social competence, and executive functions — the neural circuitry
              that manages such cognitive processes as problem-solving,
              planning, organisation, time management, and the ability to
              moderate one&apos;s emotions — through their play.
            </p>
          </div>
          <div className="flex flex-col">
            <h2>
              How to Incorporate Play into Educational Settings: A Practical
              Guide for Educators and Parents
            </h2>
          </div>
          <div className="flex flex-col gap-xs">
            <div className="flex flex-col">
              <h3>Create a Safe and Stimulating Environment</h3>
              <p>
                Educators should design and develop spaces rich with stimuli and
                invite children to explore and investigate. Ensure the space has
                physical materials that engage each child&apos;s senses and meet
                their learning styles.
              </p>
            </div>
            <div className="flex flex-col">
              <h3>Foster Social Interaction</h3>
              <p>
                As much as possible, create an environment at school or home
                that encourages extended periods of unstructured play. In the
                context of this type of play, anything is possible, and children
                develop the social skill of learning how to get along.
              </p>
            </div>
            <div className="flex flex-col">
              <h3>Encourage Autonomy and Choice</h3>
              <p>
                Children want and need to carve out their own space in the world
                and feel that what they are doing is their own. Invite children
                to make choices about their play and learning activities.
              </p>
            </div>
            <div className="flex flex-col">
              <h3>Integrate Play Across the Curriculum</h3>
              <p>
                Use play as the medium in which children learn mathematical
                concepts, employ their emerging literacy skills, and demonstrate
                scientific principles. The more you can weave the applications
                of these skills into their play, the more engaging, meaningful,
                and learned the concept or principle becomes.
              </p>
            </div>
            <div className="flex flex-col">
              <h3>Reflect and Adapt</h3>
              <p>
                As you work to apply these activities at home or in school,
                continue to reflect and brainstorm about how to make the
                approach even more vivid and vital. Observe children&apos;s play
                thoughtfully and thoroughly. Take notice of what excites and
                bores children. Use these thoughts to conceptualise how you
                might adjust the curriculum to meet the needs of children better
                overall.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-xs">
            <h2>Conclusion</h2>
            <p>
              WNo aspect of educational practice today is more critically needed
              than integrating play into the formal curriculum. Two of the most
              lauded methods currently are Harvard&apos;s Pedagogy of Play and
              The Lego Foundation&apos;s Playful Parenting, Learning, and
              Pedagogy. These two educational paradigms provide teachers and
              parents with the tools needed to provide the enriching experiences
              into which young people will learn to sink their teeth. Through
              play, we prepare our young people for the challenges of school and
              life ahead of them.
              <br />
              <br />
              Finally, remember that when you bring the principles of play-based
              learning to your work as an educator or parent, you are
              dramatically enriching the experiences of your children or your
              students and catalysing their journey to becoming more creative,
              more resourceful and more empathetic human beings. Enjoy. Fully
              embrace these powerful practices and watch what happens.
              <br />
              <br />A final note: consider visiting Harvard&apos;s Project Zero
              and The Lego Foundation websites to explore play-based learning
              principles further and their current application and impact.
            </p>
          </div>
          <div className="flex flex-col gap-sm">
            <div
              style={{
                width: "100%",
                height: "0.0625rem",
                backgroundColor: "var(--border)",
              }}
            ></div>
            <div className="flex justify-between w-full">
              <div className="flex flex-col gap-xs">
                <span>Download our free resource</span>
                <span className="underline">Resource</span>
              </div>
              <div className="flex flex-col items-end gap-xs text-right">
                <span>Share this post</span>
                <div className="flex gap-sm">
                  <button onClick={shareOnLinkedIn}>
                    <Image
                      src="/svgs/linkedin-black.svg"
                      alt="linkedin icon"
                      width={17}
                      height={21}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
      <ArticleCTA />
    </>
  );
}
