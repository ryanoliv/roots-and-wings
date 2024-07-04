import styles from "./AboutHero.module.scss";
import Image from "next/image";

export default function AboutHero() {
  return (
    <div className="relative">
      <div className={styles.aboutHeroPatternContainer}>
        <picture>
          <source
            srcSet="/images/about-pattern.png"
            media="(min-width: 450px)"
          />
          <source
            srcSet="/images/about-pattern-mobile.png"
            media="(max-width: 449px)"
          />
          <img
            src="/images/about-pattern.png"
            alt="roots and wings confetti pattern"
          />
        </picture>
      </div>
      {/* <Image
        src="/images/about-pattern.png"
        alt="roots and wings pattern"
        fill
      /> */}
      <div className="min-h-screen flex flex-col justify-center items-center gap-md">
        <h1 className={styles.h1}>
          <span className={styles.span}>Say Hello</span> to a journey of
          self-discovery!
        </h1>
        <Image
          src="/svgs/drawn-arrow.svg"
          alt="hand drawn arrow"
          width={33}
          height={98}
        />
      </div>
    </div>
  );
}
