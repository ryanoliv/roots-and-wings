import Image from "next/image";
import Link from "next/link";
import ArticleCTA from "../../components/articlecta";

export default function SelfRegulation() {
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
          <span>Parents</span>
          <h1 style={{ fontSize: "3.75rem" }}>
            The Science of Self-Esteem in Child Development
          </h1>
        </div>
        <div className="flex flex-col gap-md">
          <div
            className="relative"
            style={{ width: "1094px", height: "600px" }}
          >
            <Image
              src="/images/blog-posts/self-esteem.jpg"
              alt="parents and child at desk learning"
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
              <span className="font-bold">17 April 2024</span>
            </div>
            <div className="flex flex-col gap-xs">
              <span>Read Time</span>
              <span className="font-bold">2 Minutes</span>
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
              Cultivating self-esteem during the primary years sets the stage
              for a child&apos;s holistic development, marrying emotional
              resilience with cognitive agility. It&apos;s the cornerstone for
              navigating social intricacies and embracing learning with
              confidence. This article unfolds the symbiotic relationship
              between self-esteem and a child&apos;s affective and executive
              functions, offering actionable strategies for parents to bolster
              this vital attribute.
            </p>
            <div className="flex flex-col gap-xs">
              <h3>In this article, you will learn:</h3>
              <ul className="list-disc ml-sm">
                <li>
                  The interplay between self-esteem and cognitive, emotional
                  development.
                </li>
                <li>
                  Evidence-based methods for enhancing children&apos;s
                  self-esteem.
                </li>
                <li>The enduring impact of early self-esteem cultivation.</li>
              </ul>
            </div>
            <p>
              Dive into how fostering self-esteem in these formative years
              equips children for facing life&apos;s myriad challenges with
              resilience and adaptability.
            </p>
          </div>
          <div className="flex flex-col">
            <h2>The Power of Self-esteem</h2>
            <p>
              Self-esteem is pivotal, influencing and shaped by a child&apos;s
              capacity to process emotions (affective functioning) and execute
              goal-directed actions (executive functions). It&apos;s
              foundational for emotional regulation, social competence, and
              cognitive skills crucial for decision-making and problem-solving.
            </p>
          </div>
          <div className="flex flex-col gap-sm">
            <h3>Affective and Executive Functions Explained:</h3>
            <ul className="list-disc ml-sm">
              <li>
                <span className="font-bold">Affective Functioning:</span> This
                encompasses emotional processing, crucial for mood regulation
                and empathy, forming the bedrock for healthy social
                interactions.
              </li>
              <li>
                <span className="font-bold">Executive Functions:</span> These
                cognitive processes, including working memory and cognitive
                flexibility, are vital for navigating complex tasks and
                challenges.
              </li>
            </ul>
            <p>
              Understanding self-esteem&apos;s role illuminates its importance
              in nurturing emotionally intelligent, cognitively sharp
              individuals.
            </p>
          </div>
          <div className="flex flex-col">
            <h2>Navigating Challenges to Self-Esteem</h2>
            <p>
              Addressing common hurdles is key to fostering a robust
              self-esteem.
            </p>
          </div>
          <div className="flex flex-col gap-xs">
            <div className="flex flex-col">
              <h3>After-School Emotional Unwind</h3>
              <p>
                Children may experience post-school emotional release. Providing
                a tranquil environment for them to express feelings, coupled
                with active listening, aids stress management.
              </p>
            </div>
            <div className="flex flex-col">
              <h3>Tackling Perfectionism</h3>
              <p>
                Perfectionism can stifle willingness to try. Encouraging
                children to see errors as growth avenues, rather than failures,
                cultivates a healthier approach to challenges.
              </p>
            </div>
            <div className="flex flex-col">
              <h3>Combating Boredom</h3>
              <p>
                A lack of engagement can lead to disinterest. Introducing
                extracurricular activities that resonate with their passions
                reinvigorates their learning zeal.
              </p>
            </div>
            <div className="flex flex-col">
              <h3>Friendship Dynamics</h3>
              <p>
                Navigating friendships teaches valuable social skills.
                Conversations about evolving relationships and the normalcy of
                solitude encourage self-reliance and self-appreciation.
              </p>
            </div>
            <p>
              By guiding children through these experiences, parents reinforce
              resilience, preparing them for life&apos;s complex social and
              academic landscapes.
            </p>
          </div>
          <div className="flex flex-col gap-xs">
            <h2>Conclusion</h2>
            <p>
              Fostering self-esteem in the primary years is an investment in a
              child&apos;s future. Through strategic support in facing emotional
              and social challenges, parents lay the groundwork for their
              children&apos;s success and well-being. This journey not only
              enhances their current quality of life but sets a precedent for
              lifelong resilience and self-assurance.
              <br />
              <br />
              For further exploration into supporting your child&apos;s
              development, consider delving into resources on emotional
              intelligence, enriching the toolkit for navigating both personal
              growth and social interactions.
              <br />
              <br />
              Embrace the role of nurturing a confident, capable generation,
              ready to meet the world head-on.
            </p>
            {/* <div className="flex flex-col gap-xs">
              <h3>To recap, the most important takeaways include:</h3>
              <ul className="list-disc ml-sm font-bold">
                <li>
                  Recognising the importance of self-awareness in
                  self-regulation.
                </li>
                <li>
                  Incorporating simple, mindful activities into everyday life.
                </li>
                <li>
                  Overcoming common challenges with patience, support, and
                  flexibility.
                </li>
              </ul>
            </div> */}
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
                  <Image
                    src="/svgs/instagram-black.svg"
                    alt="instagram icon"
                    width={19}
                    height={19}
                  />
                  <Image
                    src="/svgs/linkedin-black.svg"
                    alt="linkedin icon"
                    width={17}
                    height={21}
                  />
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
