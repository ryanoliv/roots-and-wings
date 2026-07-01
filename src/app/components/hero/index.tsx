import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <div className="hero-container relative min-h-screen flex items-center justify-center">
      <div className="landing-hero-pattern-container">
        <picture>
          <source
            srcSet="/images/hero-pattern-mobile.png"
            media="(max-width: 500px)"
          />
          <source
            srcSet="/images/hero-pattern-tablet.png"
            media="(max-width: 1024px)"
          />
          <source
            srcSet="/images/hero-pattern.png"
            media="(min-width: 1025px)"
          />

          <img
            src="/images/hero-pattern.png"
            alt="roots and wings confetti pattern"
          />
        </picture>
      </div>

      <div className="flex flex-col gap-md md:gap-lg items-center text-center">
        <div className="flex flex-col items-center gap-xs md:gap-sm">
          <div className="flex flex-col items-center gap-4">
            <h1>Welcome!</h1>
            <h3 className="max-w-3xl px-4 text-xl md:text-2xl font-semibold text-gray-800 leading-relaxed tracking-tight text-balance">
  Redesigning education for primary-aged neurodivergent children and the families who love them.
</h3>
          </div>
          <p className={styles.mainSubTitle}>
            Roots & Wings is a specialist tutoring and education company built on one belief: children learn best when they feel safe, understood and genuinely connected. Using the Connect-Ed Method, we support neurodivergent children and their families through 1:1 and group tutoring, bespoke homeschool + flexi-school programmes, and a range of Emotional Resilience products for home and classroom.
          </p>
        </div>
        <div className="relative p-4">
          <Image
            src="/svgs/btn-accent-top.svg"
            alt="accent lines"
            width={20}
            height={19}
            className="absolute top-0 left-0"
          />
          <Link href="/#learnplaygrow" className="btn btn-primary">
            Explore More
          </Link>
          <Image
            src="/svgs/btn-accent-bottom.svg"
            alt="accent lines"
            width={20}
            height={16}
            className="absolute bottom-0 right-0"
          />
        </div>
        <div className="hand-drawn-arrow-container">
          <Image
            src="/svgs/drawn-arrow.svg"
            alt="hand drawn arrow"
            width={31}
            height={92}
            className="hand-drawn-arrow"
          />
        </div>
      </div>
    </div>
  );
}