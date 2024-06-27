import Image from "next/image";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <div className="hero-container relative min-h-screen flex items-center justify-center">
      <Image
        src="/images/hero-pattern.png"
        alt="roots and weings confetti pattern"
        priority
        fill
        className="landing-hero-pattern"
        // style={{
        //   objectFit: "contain",
        //   top: "15%",
        //   opacity: 0.85,
        //   zIndex: "-1",
        // }}
      />
      <div className="flex flex-col gap-lg items-center">
        <div className="flex flex-col items-center gap-sm">
          <div className="flex flex-col">
            <h1 className={styles.mainTitle}>Welome to</h1>
            <Image
              src="/images/hero-logo.png"
              alt="roots & wings alternative logo"
              width={632}
              height={118}
            />
            <h1 className={styles.mainTitle}>Tutoring</h1>
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
          <button className="btn btn-primary">Book a Consultation</button>
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
