import Image from "next/image";
import styles from "./Hero.module.scss";
import CalendlyCTA from "../calendlyCTA";

export default function Hero() {
  return (
    <div className="hero-container relative min-h-screen flex items-center justify-center">
      <div className="landing-hero-pattern-container">
        <picture>
          <source
            srcSet="/images/hero-pattern.png"
            media="(min-width: 1025px)"
          />
          <source
            srcSet="/images/hero-pattern-tablet.png"
            media="(max-width: 1024px)"
          />
          <img
            src="/images/hero-pattern.png"
            alt="roots and wings confetti pattern"
          />
        </picture>
      </div>

      <div className="flex flex-col gap-lg items-center">
        <div className="flex flex-col items-center gap-sm">
          <div className="flex flex-col">
            {/* <h1 className="hero-logo-container">
              <Image
                src="/images/hero-logo.png"
                alt="roots & wings alternative logo"
                // width={632}
                // height={118}
                fill
                style={{ objectFit: "cover" }}
              />
            </h1> */}
            <h1>
              <Image
                src="/images/hero-logo.png"
                alt="roots & wings alternative logo"
                width={632}
                height={118}
                className="hero-logo"
              />
            </h1>
          </div>
          <p className={styles.mainSubTitle}>
            What if the world of education valued academic success and emotional
            wellbeing equally? We nurture young minds and empower them with the
            social and emotional skills they need to thrive in learning and in
            life.
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
          <CalendlyCTA />
          <Image
            src="/svgs/btn-accent-bottom.svg"
            alt="accent lines"
            width={20}
            height={16}
            className="absolute bottom-0 right-0"
          />
        </div>
        <p className="explore-more">Explore more</p>
        <div className="hand-drawn-arrow-container absolute">
          <Image
            src="/svgs/drawn-arrow.svg"
            alt="hand drawn arrow"
            width={33}
            height={98}
            className="hand-drawn-arrow"
          />
        </div>
      </div>
    </div>
  );
}
