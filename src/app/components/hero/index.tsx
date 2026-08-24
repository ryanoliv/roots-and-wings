import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <div className="hero-container relative min-h-screen flex items-center justify-center">
      {/* 
        Reverted the background image container to its original state. 
        This removes the overriding opacity classes so your Hero.module.scss handles it correctly. 
      */}
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
      <div className="md:pt-14 relative z-10 flex flex-col gap-8 md:gap-9 items-center text-center max-w-5xl">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance max-w-4xl">
            Redesigning education for neurodivergent children and the families
            who love them.
          </h1>

          <p className={`${styles.mainSubTitle} max-w-3xl`}>
            Every family deserves an education path that works for them. We
            work with children who&apos;ve switched off from learning, through
            one-to-one and group tutoring, flexi-schooling and home
            education. Our evidence-informed Connect-Ed Method draws on
            emotional regulation, cognitive development and play to help
            children find their desire to learn again.
          </p>
        </div>

        <div className="relative p-4 mt-2">
          <Image
            src="/svgs/btn-accent-top.svg"
            alt="accent lines"
            width={20}
            height={19}
            className="absolute top-0 left-0"
          />
          <Link href="/#newsletter" className="btn btn-primary">
            Join our community
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
